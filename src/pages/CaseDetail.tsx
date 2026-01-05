import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

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

      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary text-sm font-medium"
            >
              {project.title}
            </motion.div>
            <Link
              to="/cases"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              All Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Project Title and Meta */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                {project.subtitle}
              </h1>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-sm">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-muted-foreground block mb-1">Location</span>
              <span>{project.location}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-muted-foreground block mb-1">Year</span>
              <span>{project.year} - Today</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-8 block">
                01 — Services
              </span>
              <div className="space-y-2">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="text-lg border-b border-border/50 pb-2"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
              {project.testimonial && (
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-muted-foreground italic">
                    "{project.testimonial.quote}"
                  </p>
                  <p className="mt-4 text-sm">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      {project.colors && project.colors.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-0"
            >
              {project.colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-32 md:w-40 aspect-[3/4] flex flex-col"
                >
                  <div
                    className="flex-1"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-3 bg-card">
                    <span className="text-xs font-medium block">
                      {color.name}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase">
                      {color.hex}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-lg hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            View All Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseDetail;
