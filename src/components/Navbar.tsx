import { motion } from "framer-motion";
import { Code2, Briefcase, User, Mail, Menu, X, Layers } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", icon: Code2, isRoute: true },
  { label: "Cases", href: "/cases", icon: Layers, isRoute: true },
  { label: "Services", href: "/#services", icon: Briefcase },
  { label: "Contact", href: "/#contact", icon: Mail },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const renderNavLink = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      return (
        <Link
          key={item.label}
          to={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <motion.span whileHover={{ y: -2 }} className="inline-block">
            {item.label}
          </motion.span>
        </Link>
      );
    }
    return (
      <motion.a
        key={item.label}
        href={item.href}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        whileHover={{ y: -2 }}
      >
        {item.label}
      </motion.a>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 nav-blur"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.span
              className="font-display text-xl font-bold tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="gradient-text">YM</span>
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(renderNavLink)}
            <Link to="/#contact">
              <motion.span
                className="glass-card px-5 py-2.5 text-sm font-medium hover:bg-primary/10 transition-colors inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
