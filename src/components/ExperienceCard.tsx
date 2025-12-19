import { motion } from "framer-motion";
import { Terminal, GitBranch, Database, Layout } from "lucide-react";
import { BentoCard } from "./BentoGrid";

const experienceItems = [
  { icon: Layout, text: "Full-stack web applications" },
  { icon: Database, text: "APIs & authentication systems" },
  { icon: GitBranch, text: "Scalable architectures" },
  { icon: Terminal, text: "Modern frameworks" },
];

export const ExperienceCard = () => {
  return (
    <BentoCard delay={0.1}>
      <div className="h-full flex flex-col">
        <span className="section-title">Engineering & Experience</span>
        
        <div className="mb-4">
          <h3 className="font-display text-xl font-semibold mb-1">
            Software Engineer
          </h3>
          <span className="tag">2021 – Present</span>
        </div>

        <ul className="space-y-3 mt-auto">
          {experienceItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <item.icon size={16} className="text-primary shrink-0" />
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </BentoCard>
  );
};
