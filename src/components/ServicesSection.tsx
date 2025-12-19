import { motion } from "framer-motion";
import { Code2, Lightbulb, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Engineering & Web App Development",
    description: "Building scalable, secure, and maintainable web applications — from frontend to backend.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Lightbulb,
    title: "Product & MVP Development",
    description: "Turning ideas into build-ready MVPs with clear features, architecture, and user flows.",
    gradient: "from-accent to-primary",
  },
  {
    icon: TrendingUp,
    title: "Business Development & Growth Strategy",
    description: "Aligning technology with business goals through partnerships, market research, and growth planning.",
    gradient: "from-primary via-accent to-primary",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-title">What I Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card-hover p-8 flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon size={24} className="text-background" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
