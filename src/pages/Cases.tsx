import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, categories } from "@/data/projects";

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      {/* Hero Section - SNP Style */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 block">
              ( Selected Work )
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight">
              Crafting digital
              <br />
              <span className="text-muted-foreground">experiences</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Minimal Style */}
      <section className="py-6 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm transition-all duration-300 relative group ${
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {category}
                  </span>
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute -bottom-3 left-0 right-0 h-px bg-foreground"
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground hidden md:block">
              ( {filteredProjects.length} Projects )
            </span>
          </div>
        </div>
      </section>

      {/* Projects List - SNP Editorial Style */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="py-16 relative"
      >
        <div className="container mx-auto px-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link
                to={`/cases/${project.id}`}
                className="group block py-12 border-b border-border/30 relative"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="col-span-1">
                    <span className="text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-6 md:col-span-5">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>

                  {/* Categories */}
                  <div className="hidden md:flex col-span-3 gap-4">
                    {project.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Year */}
                  <div className="col-span-5 md:col-span-3 text-right">
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Hover Line Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-primary"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredProject === project.id ? "100%" : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating Image Preview on Hover */}
        {hoveredProject && (
          <motion.div
            className="fixed pointer-events-none z-50 w-80 h-52 rounded-lg overflow-hidden shadow-2xl"
            style={{
              left: smoothX,
              top: smoothY,
              x: 20,
              y: -100,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={projects.find((p) => p.id === hoveredProject)?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "12", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <span className="text-4xl md:text-5xl font-display font-bold block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
