import { motion, stagger, useAnimate } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

import endewerde from "@/assets/projects/endewerde.png";
import editEducation from "@/assets/projects/edit-education.png";
import culturalAmbassador from "@/assets/projects/cultural-ambassador.png";

const floatingImages = [
  {
    src: endewerde,
    alt: "ENDEWERDE - Thoughts Platform",
    className: "top-[8%] left-[5%] w-48 h-32 md:w-72 md:h-48 rotate-[-6deg]",
    depth: 0.5,
  },
  {
    src: editEducation,
    alt: "EDIT - Education Platform",
    className: "top-[10%] right-[5%] w-44 h-28 md:w-64 md:h-40 rotate-[8deg]",
    depth: 1.2,
  },
  {
    src: culturalAmbassador,
    alt: "Cultural Ambassador Award",
    className: "bottom-[18%] left-[8%] w-40 h-26 md:w-56 md:h-36 rotate-[4deg]",
    depth: 0.8,
  },
  {
    src: endewerde,
    alt: "ENDEWERDE - Thoughts Platform",
    className: "bottom-[12%] right-[6%] w-44 h-28 md:w-60 md:h-38 rotate-[-5deg]",
    depth: 1.5,
  },
  {
    src: editEducation,
    alt: "EDIT - Education Platform",
    className: "top-[42%] left-[2%] w-32 h-20 md:w-44 md:h-28 rotate-[10deg]",
    depth: 0.3,
  },
  {
    src: culturalAmbassador,
    alt: "Cultural Ambassador Award",
    className: "top-[38%] right-[3%] w-36 h-22 md:w-48 md:h-30 rotate-[-8deg]",
    depth: 1.0,
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
                src={image.src}
                alt={image.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="w-full h-full object-cover rounded-xl border border-primary/30 shadow-2xl shadow-primary/20"
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
