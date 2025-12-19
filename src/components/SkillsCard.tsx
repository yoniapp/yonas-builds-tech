import { motion } from "framer-motion";
import { BentoCard } from "./BentoGrid";

const engineeringSkills = [
  "JavaScript / TypeScript",
  "Node.js & Express",
  "APIs & Databases",
  "Web App Architecture",
];

const productSkills = [
  "MVP Development",
  "PRDs & Product Roadmaps",
  "Digital Marketing Strategy",
  "Data-driven Decisions",
];

export const SkillsCard = () => {
  return (
    <BentoCard className="lg:col-span-2" delay={0.3}>
      <span className="section-title">Skills</span>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-display font-semibold text-lg mb-4 text-primary">
            Engineering
          </h4>
          <div className="flex flex-wrap gap-2">
            {engineeringSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 text-sm bg-secondary rounded-xl text-foreground/80"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4 text-accent">
            Product & Growth
          </h4>
          <div className="flex flex-wrap gap-2">
            {productSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="px-4 py-2 text-sm bg-secondary rounded-xl text-foreground/80"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};
