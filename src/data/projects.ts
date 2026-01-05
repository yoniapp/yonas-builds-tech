import endewerdeImg from "@/assets/projects/endewerde.png";
import editEducationImg from "@/assets/projects/edit-education.png";
import culturalAmbassadorImg from "@/assets/projects/cultural-ambassador.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  categories: string[];
  services: string[];
  year: string;
  location: string;
  colors?: { name: string; hex: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const categories = [
  "All",
  "Design",
  "Branding",
  "Web",
  "Strategy",
  "Development",
];

export const projects: Project[] = [
  {
    id: "endewerde",
    title: "ENDEWERDE",
    subtitle: "Crafting a sustainable future through thoughtful design",
    description: "A comprehensive brand identity and web platform for sustainable living initiatives.",
    fullDescription: "ENDEWERDE represents a vision for sustainable living that combines traditional values with modern design sensibilities. The project involved creating a complete brand identity system, including logo design, typography guidelines, and a responsive web platform that showcases their commitment to environmental stewardship.",
    image: endewerdeImg,
    categories: ["Branding", "Web", "Design"],
    services: ["Strategy", "Design", "Web Development"],
    year: "2024",
    location: "Germany",
    colors: [
      { name: "Forest Green", hex: "#2D5A3D" },
      { name: "Earth Brown", hex: "#8B7355" },
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Cream", hex: "#F5F5DC" },
    ],
    testimonial: {
      quote: "The design perfectly captures our vision for a sustainable future while remaining accessible and engaging.",
      author: "Maria Schmidt",
      role: "Founder - ENDEWERDE",
    },
  },
  {
    id: "edit-education",
    title: "EDIT Education",
    subtitle: "Transforming learning experiences through digital innovation",
    description: "An educational platform redesign focused on accessibility and engagement.",
    fullDescription: "EDIT Education required a complete overhaul of their digital learning platform. The challenge was to create an intuitive interface that would serve diverse learners while maintaining academic rigor. We developed a design system that prioritizes clarity, accessibility, and engagement across all touchpoints.",
    image: editEducationImg,
    categories: ["Web", "Design", "Development"],
    services: ["UX Research", "Design", "Development"],
    year: "2024",
    location: "International",
    colors: [
      { name: "Deep Purple", hex: "#6B4C9A" },
      { name: "Coral", hex: "#FF6B6B" },
      { name: "Mint", hex: "#98D8AA" },
      { name: "Slate", hex: "#4A5568" },
    ],
    testimonial: {
      quote: "The new platform has significantly improved student engagement and learning outcomes.",
      author: "Dr. James Chen",
      role: "Director of Digital Learning - EDIT",
    },
  },
  {
    id: "cultural-ambassador",
    title: "Cultural Ambassador Award",
    subtitle: "Celebrating excellence in cultural diplomacy",
    description: "Brand identity and event design for an international cultural recognition program.",
    fullDescription: "The Cultural Ambassador Award program recognizes individuals who bridge cultural divides through their work. We created a sophisticated brand identity that reflects the prestige of the award while celebrating the diversity of global cultures. The project included event materials, digital presence, and ceremonial design elements.",
    image: culturalAmbassadorImg,
    categories: ["Branding", "Design", "Strategy"],
    services: ["Brand Strategy", "Visual Identity", "Event Design"],
    year: "2023",
    location: "Worldwide",
    colors: [
      { name: "Royal Gold", hex: "#D4AF37" },
      { name: "Deep Navy", hex: "#1A237E" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Pearl", hex: "#FDEEF4" },
    ],
    testimonial: {
      quote: "The branding elevates our mission and resonates with honorees from all cultural backgrounds.",
      author: "Ambassador Sarah Williams",
      role: "Program Director",
    },
  },
];
