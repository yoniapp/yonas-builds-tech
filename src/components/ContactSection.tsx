import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Phone, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden glow"
        >
          {/* Background glow effects */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-title"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-5xl font-bold mb-6"
            >
              <span className="gradient-text">Let's build something meaningful.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
            >
              Whether you're building a startup MVP, need a web application, or want strategic advice on product and growth — I'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
            >
              <a
                href="mailto:yoniwin.yW@gmail.com"
                className="group flex items-center gap-3 glass-card px-6 py-4 hover:bg-primary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Mail size={20} className="text-primary" />
                <span className="font-medium">yoniwin.yW@gmail.com</span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/yonas-mulugeta-0937a7129/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 glass-card px-6 py-4 hover:bg-primary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Linkedin size={20} className="text-primary" />
                <span className="font-medium">LinkedIn</span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/Yonas143/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 glass-card px-6 py-4 hover:bg-primary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Github size={20} className="text-primary" />
                <span className="font-medium">GitHub</span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="tel:+251939680725"
                className="group flex items-center gap-3 glass-card px-6 py-4 hover:bg-primary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone size={20} className="text-primary" />
                <span className="font-medium">+251 939 680 725</span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
