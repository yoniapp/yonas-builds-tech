import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-background dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">
            Project Not Found
          </h1>
          <Link to="/cases" className="text-primary hover:underline">
            ← Back to Cases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      {/* Header - SNP Style */}
      <section className="pt-24 pb-6 border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              ( Case Study )
            </motion.span>
            <Link
              to="/cases"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              All Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Project Title - Large Typography */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.85]"
          >
            {project.title}
          </motion.h1>

          {/* Meta Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/30"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                Year
              </span>
              <span className="text-lg">{project.year}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                Location
              </span>
              <span className="text-lg">{project.location}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                Services
              </span>
              <span className="text-lg">{project.services[0]}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                Industry
              </span>
              <span className="text-lg">{project.categories[0]}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image - Full Width */}
      <section className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Brief Section */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                01 — The Brief
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8">
                {project.subtitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {project.fullDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                02 — Services
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="space-y-0">
                {project.services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between py-6 border-b border-border/30 group"
                  >
                    <span className="text-xl md:text-2xl font-display">
                      {service}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      {project.colors && project.colors.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  03 — Color System
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.colors.map((color, index) => (
                    <motion.div
                      key={color.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div
                        className="aspect-square rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-sm font-medium block">
                        {color.name}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase">
                        {color.hex}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-6xl md:text-8xl text-primary/20 font-serif block mb-8">
                "
              </span>
              <blockquote className="text-2xl md:text-3xl font-display leading-relaxed mb-8">
                {project.testimonial.quote}
              </blockquote>
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  {project.testimonial.author}
                </span>
                <span className="mx-2">—</span>
                <span>{project.testimonial.role}</span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-6">
          <Link to={`/cases/${nextProject.id}`} className="group block">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Next Project
              </span>
              <ArrowRight
                size={24}
                className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all"
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight group-hover:text-primary transition-colors duration-300"
            >
              {nextProject.title}
            </motion.h2>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseDetail;
