export interface Technology {
  name: string;
  category: "Languages" | "Frameworks & CMS" | "Databases & Real-time" | "Tools & APIs";
  proficiency: "Expert" | "Advanced" | "Intermediate";
  description: string;
}

export const technologies: Technology[] = [
  {
    name: "PHP",
    category: "Languages",
    proficiency: "Expert",
    description: "Core server-side scripting language for modern scalable backends."
  },
  {
    name: "JavaScript",
    category: "Languages",
    proficiency: "Expert",
    description: "Creating highly interactive user interfaces and frontend dynamics."
  },
  {
    name: "HTML5",
    category: "Languages",
    proficiency: "Expert",
    description: "Semantic accessible layout structures conforming to modern standards."
  },
  {
    name: "CSS3 / Boosrtstrap ",
    category: "Languages",
    proficiency: "Expert",
    description: "Utility-first clean rapid layouts with precision spacing."
  },
  {
    name: "Laravel",
    category: "Frameworks & CMS",
    proficiency: "Expert",
    description: "Enterprise MVC architecture, Eloquent ORM, secure API creation."
  },
  {
    name: "Vue.js",
    category: "Frameworks & CMS",
    proficiency: "Expert",
    description: "Composition API, reactive states, single-page application router."
  },
  {
    name: "WordPress",
    category: "Frameworks & CMS",
    proficiency: "Expert",
    description: "Custom Gutenberg block layouts and content architecture."
  },
  {
    name: "WooCommerce",
    category: "Frameworks & CMS",
    proficiency: "Advanced",
    description: "E-commerce shop configuration, inventory, checkout pipelines."
  },
  {
    name: "MySQL",
    category: "Databases & Real-time",
    proficiency: "Expert",
    description: "Relational table normalization, complex indexing, fast queries."
  },
  {
    name: "WebSockets",
    category: "Databases & Real-time",
    proficiency: "Advanced",
    description: "Sub-second bidirectional messaging and event-driven notifications."
  },
  {
    name: "REST APIs",
    category: "Tools & APIs",
    proficiency: "Expert",
    description: "Designing, documenting, and consuming structured JSON endpoints."
  },
  {
    name: "Docker",
    category: "Tools & APIs",
    proficiency: "Advanced",
    description: "Isolated container environments mirroring local dev with production."
  },
  {
    name: "Git & GitHub",
    category: "Tools & APIs",
    proficiency: "Expert",
    description: "Version control management, continuous deployment workflows."
  }
];
