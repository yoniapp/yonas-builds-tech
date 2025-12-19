import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold gradient-text">YM</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Yonas Mulugeta
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Building digital products with engineering-first thinking.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
