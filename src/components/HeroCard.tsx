import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp, Layers } from "lucide-react";
import { BentoCard } from "./BentoGrid";
import profileImage from "@/assets/yonas-profile.jpg";
import { useEffect } from "react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const floatingImages = [
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
    className: "top-[5%] left-[5%] w-20 h-14 md:w-28 md:h-20",
    depth: 0.5,
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
    className: "top-[8%] right-[8%] w-16 h-12 md:w-24 md:h-16",
    depth: 1.2,
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
    className: "bottom-[15%] left-[3%] w-14 h-10 md:w-20 md:h-14",
    depth: 0.8,
  },
  {
    url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop",
    className: "bottom-[10%] right-[5%] w-18 h-12 md:w-24 md:h-16",
    depth: 1.5,
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop",
    className: "top-[40%] left-[2%] w-12 h-9 md:w-16 md:h-12",
    depth: 0.3,
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    className: "top-[35%] right-[3%] w-14 h-10 md:w-20 md:h-14",
    depth: 1.0,
  },
];

export const HeroCard = () => {
  useEffect(() => {
    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <BentoCard className="lg:col-span-2 lg:row-span-2 relative overflow-hidden" delay={0}>
      {/* Unicorn Studio Background */}
      <div 
        data-us-project="prVWlCmVfm24BbiO3hDF" 
        className="absolute inset-0 w-full h-full"
        style={{ minHeight: '100%' }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Parallax Floating Images */}
      <Floating className="absolute inset-0 pointer-events-none" sensitivity={0.8} easingFactor={0.08}>
        {floatingImages.map((image, index) => (
          <FloatingElement key={index} className={image.className} depth={image.depth}>
            <motion.img
              src={image.url}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="w-full h-full object-cover rounded-lg border border-primary/20 shadow-lg shadow-primary/10"
            />
          </FloatingElement>
        ))}
      </Floating>
      
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
