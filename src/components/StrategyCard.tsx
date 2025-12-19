import { motion } from "framer-motion";
import { Target, LineChart, Handshake, PieChart } from "lucide-react";
import { BentoCard } from "./BentoGrid";

const strategyItems = [
  { icon: Handshake, text: "Business Development & Partnerships" },
  { icon: Target, text: "Product Strategy & MVP Planning" },
  { icon: LineChart, text: "Market Analysis & Growth Strategy" },
  { icon: PieChart, text: "Financial Projections & GTM" },
];

const regions = ["Ethiopia", "Kenya", "Tanzania", "Rwanda"];

export const StrategyCard = () => {
  return (
    <BentoCard delay={0.2}>
      <div className="h-full flex flex-col">
        <span className="section-title">Business & Strategy</span>

        <ul className="space-y-3 mb-6">
          {strategyItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <item.icon size={16} className="text-accent shrink-0" />
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          {regions.map((region) => (
            <span key={region} className="tag-primary text-xs">
              {region}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};
