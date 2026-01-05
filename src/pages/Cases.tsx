import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, categories } from "@/data/projects";

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  // Featured testimonial
  const featuredProject = projects[0];

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      {/* Hero Section with gradient background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our <span className="gradient-text">Cases</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our portfolio of transformative projects that blend
              strategy, design, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 md:gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm md:text-base transition-colors duration-200 pb-2 border-b-2 ${
                  activeCategory === category
                    ? "text-foreground border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      {featuredProject?.testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <p className="text-2xl md:text-4xl font-display italic text-foreground leading-relaxed">
                "{featuredProject.testimonial.quote}"
              </p>
              <footer className="mt-6 text-muted-foreground">
                {featuredProject.testimonial.author} -{" "}
                {featuredProject.testimonial.role}
              </footer>
            </motion.blockquote>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/cases/${project.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.categories.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className="text-xs text-primary uppercase tracking-wider"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                </Link>
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
