import { motion, stagger, useAnimate } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const floatingImages = [
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    className: "top-[8%] left-[8%] w-32 h-24 md:w-48 md:h-36 rotate-[-6deg]",
    depth: 0.5,
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    className: "top-[12%] right-[10%] w-28 h-20 md:w-40 md:h-28 rotate-[8deg]",
    depth: 1.2,
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    className: "bottom-[20%] left-[5%] w-24 h-18 md:w-36 md:h-26 rotate-[4deg]",
    depth: 0.8,
  },
  {
    url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
    className: "bottom-[15%] right-[8%] w-32 h-22 md:w-44 md:h-32 rotate-[-5deg]",
    depth: 1.5,
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    className: "top-[45%] left-[3%] w-20 h-14 md:w-28 md:h-20 rotate-[10deg]",
    depth: 0.3,
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    className: "top-[40%] right-[4%] w-24 h-18 md:w-32 md:h-24 rotate-[-8deg]",
    depth: 1.0,
  },
  {
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    className: "bottom-[35%] left-[15%] w-20 h-14 md:w-28 md:h-20 rotate-[6deg]",
    depth: 0.6,
  },
  {
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop",
    className: "bottom-[40%] right-[15%] w-22 h-16 md:w-32 md:h-22 rotate-[-4deg]",
    depth: 1.1,
  },
];

export const IntroSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.1) });
  }, [animate]);

  const scrollToHero = () => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Parallax Floating Images */}
      <Floating className="absolute inset-0 pointer-events-none overflow-hidden" sensitivity={1} easingFactor={0.06}>
        <div ref={scope}>
          {floatingImages.map((image, index) => (
            <FloatingElement key={index} className={image.className} depth={image.depth}>
              <motion.img
                src={image.url}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="w-full h-full object-cover rounded-xl border border-primary/20 shadow-2xl shadow-primary/10"
              />
            </FloatingElement>
          ))}
        </div>
      </Floating>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl mb-6 tracking-wide"
        >
          Welcome to my digital space
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
        >
          <span className="gradient-text">Building the</span>
          <br />
          <span className="text-foreground">Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Crafting scalable software and growth strategies that transform ideas into impactful products.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToHero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};
