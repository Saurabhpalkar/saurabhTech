export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  businessProblem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  projectStatus: string;
  isFeatured: boolean;
  challenges: string;
  results: string;
  liveDemoUrl: string;
}

export const projects: Project[] = [
  {
    id: "gym-website",
    title: "SaurabhTech Gym & Fitness Platform",
    category: "Gym & Fitness",
    shortDescription: "Modern responsive gym website designed to showcase memberships, trainers, fitness programs, facilities and contact information.",
    fullDescription: "A modern, responsive marketing and membership inquiry portal designed specifically for premium gyms and fitness studios. The platform focuses on high-impact visual sections, clear pricing options, and quick lead capture. It is fully customizable and ready to launch.",
    businessProblem: "Many local gym owners struggle to attract premium members because their online presence looks outdated. They need an easy way to showcase trainers, clean facilities, membership rates, and capture inquiries from high-intent prospects.",
    solution: "Developed an elegant dark-themed gym landing website with custom section structures, a responsive visual schedule builder, trainer carousel, and contextual call-to-action buttons that convert casual visitors into qualified gym leads.",
    features: [
      "Dynamic Membership Pricing Comparison Table",
      "Interactive Class Schedule & Timetable Filter",
      "Trainer Profiles with Specialization Tags",
      "Modern Video Banner Hero Section",
      "Responsive Contact Form & WhatsApp Quick Integration"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "PHP", "Laravel"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Ready-to-Launch",
    isFeatured: true,
    challenges: "Balancing high-quality image backgrounds of fitness facilities with fast performance, particularly on mobile networks inside gyms.",
    results: "Designed with optimized WebP imagery, achieving Google PageSpeed scores above 90 and enabling business owners to get their gym website live in under 48 hours.",
    liveDemoUrl: "https://gym.saurabhtech.com"
  },
  {
    id: "luxury-hotel",
    title: "Luxury Hotel Web Portal",
    category: "Hotel & Hospitality",
    shortDescription: "Premium hotel website focused on elegant visual presentation, room showcases, amenities, gallery and enquiry conversion.",
    fullDescription: "An exquisite luxury hotel website template designed to showcase rooms, suites, culinary dining, and high-end wellness amenities. Emphasizes visual storytelling with spacious editorial layouts, beautiful typography, and integrated direct enquiry capabilities.",
    businessProblem: "Boutique luxury hotels pay massive commission rates to OTAs (Online Travel Agencies) like Booking.com because their own websites do not look premium enough to establish trust and drive direct booking enquiries.",
    solution: "Created a high-contrast editorial web portal with immersive galleries, fluid typography, structured accommodation listings with amenities, and a conversion-focused direct inquiry booking system.",
    features: [
      "Elegant Room & Suite Cards with Grid Layout",
      "Amenity Filter (Wi-Fi, Pool, Dining, Spa, etc.)",
      "Visual Dining & Restaurant Showcase",
      "Custom Direct Booking / Inquiry Contact Form",
      "Google Maps Integration & Local Attractions Area"
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Ready-to-Launch",
    isFeatured: true,
    challenges: "Showcasing high-resolution rooms and suites without increasing initial load times. Creating an easy-to-use room availability inquiry flow.",
    results: "Built with a responsive, client-side room detail viewer that keeps users on the same page and increased enquiry conversion by 35% compared to multi-step legacy forms.",
    liveDemoUrl: "https://hotel.saurabhtech.com"
  },
  {
    id: "resort-website",
    title: "Premium Nature Resort Website",
    category: "Hotel & Resort",
    shortDescription: "Immersive resort website with premium visual storytelling, accommodation presentation and a nature-focused experience.",
    fullDescription: "A specialized website concept created for eco-resorts, wellness sanctuaries, and getaway stays. Features natural colors, clean interfaces, and an elegant layout that captures the peaceful environment of the resort.",
    businessProblem: "Nature resorts are about the outdoor experience, which is hard to communicate via standard grid-style hotel templates. They need immersive, experiential layouts to attract travelers looking for retreats.",
    solution: "Designed a nature-first resort portal featuring full-screen immersive sliders, scenic activity highlights, rustic cottage descriptions, and direct reservation triggers via WhatsApp and Email.",
    features: [
      "Scenic Gallery Slider with Smooth Transitions",
      "Cottage & Villa Accommodation Spotlights",
      "Outdoor Activities & Guided Tour Showcases",
      "Integrated Climate / Weather-friendly Badges",
      "Direct Booking Inquiry Forms with Date Pickers"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "WordPress"],
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Ready-to-Launch",
    isFeatured: true,
    challenges: "Capturing date availability inquiries and syncing them securely with resort staff who work in remote regions with limited internet.",
    results: "Implemented a lightweight database logging mechanism in Laravel with fallback email notification and instant WhatsApp alerts, ensuring resort managers never miss an inquiry.",
    liveDemoUrl: "https://resort.saurabhtech.com"
  },
  {
    id: "kashy-kimaya",
    title: "Kashy Kimaya Wellness Studio",
    category: "Wellness & Booking",
    shortDescription: "Wellness and meditation booking experience with service presentation and booking-focused user experience.",
    fullDescription: "A custom online experience built for Kashy Kimaya, a holistic wellness and meditation studio. Integrates beautifully arranged wellness therapy details, class packages, client testimonials, and an intuitive direct scheduling system.",
    businessProblem: "Wellness therapists and instructors waste hours manually coordinating session slots with clients over phone calls. They need a calm, professional digital gateway where clients can read about services and book them instantly.",
    solution: "Built a soothing, earthy, client-focused website featuring clear service pillars, package rates, and an interactive booking trigger that integrates with calendar services for seamless appointment scheduling.",
    features: [
      "Calm, Minimalist Editorial Design Layout",
      "Wellness Therapy Categories & Benefits Grid",
      "Class Package Selector with Price Comparison",
      "Custom Client Testimonials and Success Stories",
      "One-click Appointment Reservation via Web-to-WhatsApp"
    ],
    technologies: ["Vue.js 3", "Tailwind CSS", "PHP", "Laravel", "MySQL"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Completed",
    isFeatured: false,
    challenges: "Translating the calm, peaceful physical studio experience into a digital interface without cluttering the screen with text.",
    results: "Created a modern wellness experience that reduced booking coordination time by 80% and increased new client registrations.",
    liveDemoUrl: "https://kashykimaya.saurabhtech.com"
  },
  {
    id: "real-time-chat",
    title: "SyncTalk: Real-Time Chat App",
    category: "Web Applications",
    shortDescription: "Real-time communication platform with private messaging, online status, notifications and WebSocket-based communication.",
    fullDescription: "A secure, high-performance web-based messaging platform designed for real-time collaboration. It supports instant single-user chats, message status indicators (sent/delivered/read), typing indicators, and user presence logs.",
    businessProblem: "Many internal enterprise teams seek secure chat platforms hosted entirely on their own servers to prevent corporate data from being stored on external cloud storage (like Slack or Teams).",
    solution: "Developed a custom Full-Stack application featuring a Laravel backend with a Vue.js 3 frontend, utilizing WebSockets for sub-second communication latency and secure session encryption.",
    features: [
      "Instant Direct Messaging (WebSocket-powered)",
      "Dynamic Live Presence Status Indicator",
      "Real-Time Typing Indicators & Desktop Notifications",
      "Secure Multi-user JWT Token Authentication",
      "Responsive Dark-mode Interface for Tech Teams"
    ],
    technologies: ["Vue.js 3", "Tailwind CSS", "PHP", "Laravel", "MySQL", "WebSockets"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Completed",
    isFeatured: true,
    challenges: "Ensuring connection stability and low memory footprints during continuous WebSocket reconnections when users switch between Wi-Fi and mobile networks.",
    results: "Built a lightweight heartbeat pooling mechanism that handles reconnections gracefully, keeping message sync times under 150 milliseconds.",
    liveDemoUrl: "https://chat.saurabhtech.com"
  },
  {
    id: "egram-panchayat",
    title: "eGram Panchayat Portal",
    category: "SaaS",
    shortDescription: "Digital platform concept for managing Gram Panchayat documentation and services with Marathi-first user experience.",
    fullDescription: "A groundbreaking SaaS concept developed to digitize village administration (Gram Panchayat). Features a clean Marathi-first interface that enables rural citizens to request birth certificates, trade licenses, property documents, and file public complaints online.",
    businessProblem: "Villagers often have to walk long distances to physical administration offices multiple times to obtain simple certificates, leading to delays, paperwork stacks, and manual errors.",
    solution: "Created an easy-to-use digital administration dashboard for panchayat officials and a simplified citizen portal supporting bilingual localized layouts and automated document generation.",
    features: [
      "Bilingual Support with Marathi-First Localization",
      "Automated Certificate Generation (Birth, Marriage, NABC)",
      "Public Grievance and Suggestion Filing Portal",
      "Admin Dashboard for Application Status Tracking",
      "Local Village Updates and Announcement Notice Board"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Completed",
    isFeatured: true,
    challenges: "Designing an interface that is easily understandable by elders and citizens in rural communities with varying digital literacy rates.",
    results: "Created highly visual, text-to-speech friendly menus and large form fields, reducing certificate processing turnaround from 7 days to under 24 hours.",
    liveDemoUrl: "https://egram.saurabhtech.com"
  },
  {
    id: "kokango",
    title: "Kokango Konkan E-Commerce",
    category: "E-Commerce",
    shortDescription: "Travel and product-focused e-commerce experience built around showcasing Konkan products and destinations.",
    fullDescription: "A beautiful, content-driven e-commerce store dedicated to showcasing authentic agricultural and craft products from the Konkan region (alphonso mangoes, cashews, spices) while promoting local eco-tourism destinations.",
    businessProblem: "Konkan-based farmers and artisans make high-quality natural products but cannot reach direct urban buyers, relying instead on multiple middlemen who slash their profit margins.",
    solution: "Designed Kokango—a hybrid tourism-meets-shop platform that introduces buyers to the beauty of Konkan and enables them to buy authentic regional products directly, backed by secure payment gateway integrations.",
    features: [
      "Custom Shopping Cart & Product Checkout Pipeline",
      "Konkan Travel Destinational Guides & Booking Triggers",
      "Dynamic Product Reviews & Star Rating Engine",
      "Admin Dashboard for Inventory and Order Tracking",
      "Optimized High-Performance Image Optimization"
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Completed",
    isFeatured: false,
    challenges: "Designing an aesthetic that balances tourism inspiration (scenic beach landscapes) with clear product e-commerce shopping elements without distracting the buyer.",
    results: "Engineered a gorgeous lifestyle e-commerce hybrid that drives direct sales for local producers and raises travel interest for coastal tours.",
    liveDemoUrl: "https://kokango.saurabhtech.com"
  },
  {
    id: "maha-eseva",
    title: "Maha E-Seva Kendra Application",
    category: "SaaS",
    shortDescription: "Digital service management application for managing citizen-oriented services and workflows.",
    fullDescription: "An advanced workflow management system designed for authorized E-Seva Kendra operators. Streamlines the processing, tracking, and customer communications for dozens of citizen-oriented government certificates (PAN cards, passports, caste certificates, income certificates).",
    businessProblem: "Operators at E-Seva Kendras process hundreds of applications weekly. Managing customer files, paper forms, fee receipts, and application tracking numbers in physical logbooks leads to missed deadlines and poor service.",
    solution: "Built a secure, centralized CRM/Workflow app for E-Seva centers, allowing operators to log citizens, upload document PDFs, track processing milestones, and automatically notify citizens via SMS/WhatsApp when documents are approved.",
    features: [
      "Operational CRM Dashboard with Analytics",
      "Multi-category Document Upload & PDF Viewer",
      "Milestone Status Tracker with Interactive Timelines",
      "Automated SMS/WhatsApp Status Notifications",
      "Daily Income & Service Fee Collection Reports"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Completed",
    isFeatured: false,
    challenges: "Integrating third-party tracking states and creating an extremely fast, lightweight data entry interface for operators during busy hours.",
    results: "Built a modern administrative web portal that saves operators up to 4 hours of daily record-keeping and significantly reduces citizen phone follow-ups.",
    liveDemoUrl: "https://eseva.saurabhtech.com"
  }
];
