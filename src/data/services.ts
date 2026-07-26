export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  price: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Website Development",
    iconName: "Globe",
    description: "High-performance, modern business landing pages and corporate websites engineered to convert organic traffic into paying clients.",
    price: "Starting ₹35,000",
    benefits: [
      "Custom UI/UX designed around your specific brand",
      "Super-fast load speeds (optimized WebP assets)",
      "SEO-ready structure (metadata, tags, and indexing)",
      "Clear call-to-actions (CTAs) for client conversion",
      "Secure hosting setup & custom email integrations"
    ]
  },
  {
    id: "hotel-resort-websites",
    title: "Hotel & Resort Website Development",
    iconName: "Hotel",
    description: "Premium hospitality websites built for luxury hotels and nature resorts that showcase accommodation and drive direct inquiry bookings.",
    price: "Starting ₹55,000",
    benefits: [
      "Immersive, elegant fullscreen photo & video sections",
      "Direct room showcase with specific amenities filtering",
      "Mobile-friendly date picker inquiry booking forms",
      "WhatsApp & Direct Email booking notifications",
      "Zero commission direct booking channel"
    ]
  },
  {
    id: "gym-fitness-websites",
    title: "Gym & Fitness Website Development",
    iconName: "Dumbbell",
    description: "Action-focused websites for fitness studios and gym centers featuring membership tiers, trainer highlights, and class timetables.",
    price: "Starting ₹45,000",
    benefits: [
      "Visually powerful high-impact dark theme aesthetics",
      "Interactive fitness class calendars and timetables",
      "Trainer profile highlights with personal training CTAs",
      "Clear membership pricing tier grids",
      "Quick WhatsApp consultation triggers"
    ]
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Application Development",
    iconName: "Code",
    description: "Bespoke full-stack web applications tailored to streamline your business workflows, client databases, and digital automation.",
    price: "Starting ₹75,000",
    benefits: [
      "Centralized secure database architecture",
      "Role-based staff authentication & access controls",
      "Interactive data visualizations and PDF reporting",
      "Optimized APIs for external system communication",
      "Automated SMS/Email notification integrations"
    ]
  },
  {
    id: "laravel-dev",
    title: "Laravel Backend Development",
    iconName: "Server",
    description: "Robust, secure, and scalable backend engineering using the industry-leading PHP framework, Laravel.",
    price: "Starting ₹65,000",
    benefits: [
      "Highly secure JWT authentication & data encryption",
      "Sleek and robust RESTful API endpoints",
      "Database migrations with normalized MySQL schemas",
      "Queued jobs and background tasks handling",
      "Enterprise-grade scaling capabilities"
    ]
  },
  {
    id: "vuejs-frontend",
    title: "Vue.js Frontend Development",
    iconName: "Cpu",
    description: "Ultra-responsive and interactive single-page application interfaces built with Vue.js 3 and the Composition API.",
    price: "Starting ₹45,000",
    benefits: [
      "Fast client-side routing with zero page-flicker",
      "Reactive real-time data state management",
      "Polished custom transitions and micro-interactions",
      "Component-driven clean architecture",
      "Highly accessible semantic HTML structures"
    ]
  },
  {
    id: "wordpress-ecommerce",
    title: "WordPress & WooCommerce Development",
    iconName: "ShoppingBag",
    description: "Highly customized content management systems (CMS) and e-commerce online stores with secure checkout workflows.",
    price: "Starting ₹40,000",
    benefits: [
      "Easy-to-use admin panel for content management",
      "Secure direct payment gateway integrations",
      "Dynamic stock and product inventory tracking",
      "Custom Gutenberg blocks or Elementor layouts",
      "Automated invoice generation & tax calculation"
    ]
  },
  {
    id: "website-modernization",
    title: "Website Redesign & Modernization",
    iconName: "RefreshCw",
    description: "Revamp outdated, slow websites into modern, hyper-fast, mobile-responsive experiences that perform elegantly in 2026.",
    price: "Starting ₹30,000",
    benefits: [
      "Transition from old systems to Tailwind & Vue/React",
      "Drastic boost in Google PageSpeed scores",
      "Polished visual identity alignment with modern design trends",
      "Full mobile layout optimizations",
      "Preservation of existing SEO rankings and URL structures"
    ]
  }
];
