import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp, Layers } from "lucide-react";
import { BentoCard } from "./BentoGrid";
import profileImage from "@/assets/yonas-profile.jpg";

export const HeroCard = () => {
  return (
    <BentoCard className="lg:col-span-2 lg:row-span-2 relative overflow-hidden" delay={0}>
      {/* Background glow effect */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
      
      <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <img 
                src={profileImage} 
                alt="Yonas Mulugeta" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="tag-primary">
                <Code2 size={12} className="mr-1" />
                Available for projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3"
            >
              <span className="gradient-text">Yonas Mulugeta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-4"
            >
              Software Engineer • Product & Growth Strategist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-foreground/80 text-lg leading-relaxed max-w-lg"
            >
              I build scalable web applications and help startups turn ideas into structured products and growth systems — grounded in real market needs.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code2 size={16} className="text-primary" />
            <span>Full-stack Development</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Layers size={16} className="text-primary" />
            <span>Product Strategy</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp size={16} className="text-primary" />
            <span>Growth Systems</span>
          </div>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 text-primary font-medium mt-6 group"
        >
          <span>Let's build something meaningful</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </BentoCard>
  );
};
