import { motion } from "framer-motion";
import { Sparkles, Globe, Rocket, Zap } from "lucide-react";
import { BentoCard } from "./BentoGrid";

const focusItems = [
  { icon: Sparkles, text: "MindSnap — wellness & anti-doom scroll app" },
  { icon: Globe, text: "Web app development & consulting" },
  { icon: Rocket, text: "Startup MVPs and early-stage products" },
  { icon: Zap, text: "Africa-focused digital solutions" },
];

export const FocusCard = () => {
  return (
    <BentoCard delay={0.4}>
      <div className="h-full flex flex-col">
        <span className="section-title">Current Focus</span>

        <ul className="space-y-4">
          {focusItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3 text-sm"
            >
              <item.icon size={18} className="text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/80">{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </BentoCard>
  );
};
