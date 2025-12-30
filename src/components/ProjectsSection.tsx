import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone, Heart, Utensils, Palette, Image } from "lucide-react"; // Added Image icon

const projects = [
  {
    icon: Smartphone,
    title: "MindSnap",
    description: "Anti-doom scrolling wellness app",
    tech: ["Flutter", "Node.js", "Express", "MongoDB"],
    color: "primary",
    href: "#", // Placeholder, update if MindSnap has a dedicated page
  },
  {
    icon: Heart,
    title: "Vella",
    description: "Africa-focused dating app MVP",
    tech: ["Trust-centered", "Local market focus", "Mobile-first"],
    color: "accent",
    href: "#", // Placeholder
  },
  {
    icon: Utensils,
    title: "Gurro Court",
    description: "Social media and digital strategy for a food court brand",
    tech: ["Digital Strategy", "Social Media", "Brand Growth"],
    color: "primary",
    href: "#", // Placeholder
  },
  {
    icon: Palette,
    title: "We Build Switch",
    description: "Branding and digital presence project",
    tech: ["Branding", "Digital Presence", "Visual Identity"],
    color: "accent",
    href: "#", // Placeholder
  },
  {
    icon: Image, // Using Lucide Image icon
    title: "Vertical Image Stack Demo",
    description: "An interactive vertical image stack component",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    color: "primary",
    href: "/image-stack-demo", // Link to the new demo page
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-title">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
            Projects & Ventures
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a // Changed div to a for linking
              key={project.title}
              href={project.href} // Added href
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card-hover p-8 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${project.color}/20 flex items-center justify-center`}>
                  <project.icon size={24} className={`text-${project.color}`} />
                </div>
                <ArrowUpRight 
                  size={20} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};