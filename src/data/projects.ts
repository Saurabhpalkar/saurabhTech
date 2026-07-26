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
  id: "caffe-shop",
  title: "Premium Café Experience",
  category: "Café & Restaurant",
  shortDescription: "An immersive 3D café experience designed to showcase specialty coffee, signature beverages, café culture, premium products, and a memorable digital brand experience.",
  fullDescription: "A premium digital experience created for Noir Kaapi, a fictional modern Indian specialty coffee café. The website combines traditional South Indian coffee culture with contemporary café aesthetics, interactive 3D coffee product experiences, cinematic storytelling, signature beverage showcases, curated menu presentations, atmospheric café imagery, and direct customer engagement to create a distinctive and immersive coffee brand experience.",
  businessProblem: "Traditional café websites often rely on basic menus, static images, and generic layouts that fail to communicate the atmosphere, quality, and personality of the café. Premium cafés need a visually engaging digital experience that showcases their products, creates an emotional connection with visitors, and encourages customers to visit or connect directly.",
  solution: "Built an immersive premium café website with a cinematic visual identity, interactive 3D coffee product experiences, specialty coffee storytelling, signature beverage showcases, interactive menu presentation, café atmosphere galleries, brewing journey animations, responsive layouts, and direct WhatsApp integration for customer enquiries and orders.",
  features: [
    "Immersive Cinematic Specialty Coffee Hero Experience",
    "Interactive 3D Coffee Product Showcase",
    "Premium Signature Coffee and Beverage Presentation",
    "Interactive 3D Product Viewing and Rotation Experience",
    "Traditional South Indian Coffee Culture Storytelling",
    "Scroll-Based Coffee Brewing Journey",
    "Interactive Coffee, Drinks, Bites and Dessert Menu",
    "Premium Café Atmosphere and Interior Gallery",
    "Smooth Cinematic Animations and Micro-Interactions",
    "Direct WhatsApp Customer Enquiry and Order Integration",
    "Google Maps, Phone and Social Media Integration",
    "Responsive Experience Across Desktop, Tablet and Mobile"
  ],
  technologies: ["Vue 3", "Vite", "Three.js", "GSAP", "Lenis", "Tailwind CSS", "JavaScript"],
  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  projectStatus: "Completed",
  isFeatured: true,
  challenges: "Creating a digital café experience that feels as premium, atmospheric, and memorable as visiting a high-end specialty coffee space while presenting interactive 3D products, rich coffee storytelling, and smooth animations without compromising performance, usability, or mobile responsiveness.",
  results: "Created a premium immersive café showcase experience designed to strengthen brand identity, present specialty coffee and signature products more effectively, increase visitor engagement through interactive 3D experiences, and encourage customer visits and direct enquiries through WhatsApp and location integrations.",
  liveDemoUrl: "https://caffe-sptech.netlify.app/"
},
  {
    id: "gym-website",
    title: "Gym & Fitness Platform",
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
    technologies: ["Vue.js", "Vite", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Ready-to-Launch",
    isFeatured: true,
    challenges: "Balancing high-quality image backgrounds of fitness facilities with fast performance, particularly on mobile networks inside gyms.",
    results: "Designed with optimized WebP imagery, achieving Google PageSpeed scores above 90 and enabling business owners to get their gym website live in under 48 hours.",
    liveDemoUrl: "https://gym-saurabhtec.netlify.app/"
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
    technologies: ["Vue.js", "Vite", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    projectStatus: "Ready-to-Launch",
    isFeatured: true,
    challenges: "Showcasing high-resolution rooms and suites without increasing initial load times. Creating an easy-to-use room availability inquiry flow.",
    results: "Built with a responsive, client-side room detail viewer that keeps users on the same page and increased enquiry conversion by 35% compared to multi-step legacy forms.",
    liveDemoUrl: "https://luxury-hotel-stech.netlify.app/"

  },
  {
    id: "resort-website",
    title: "Premium Resort Website",
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
    liveDemoUrl: "https://hotel-sptech.netlify.app/"
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
    image: "src/assets/images/kashy-kimaya-banner.png",
    projectStatus: "Completed",
    isFeatured: false,
    challenges: "Translating the calm, peaceful physical studio experience into a digital interface without cluttering the screen with text.",
    results: "Created a modern wellness experience that reduced booking coordination time by 80% and increased new client registrations.",
    liveDemoUrl: "https://kashykimaya.netlify.app/"
  },

  // {
  //   id: "egram-panchayat",
  //   title: "Digital Dreams Services",
  //   category: "SaaS",
  //   shortDescription: "Digital platform concept for managing Gram Panchayat documentation and services with Marathi-first user experience.",
  //   fullDescription: "A groundbreaking SaaS concept developed to digitize village administration (Gram Panchayat). Features a clean Marathi-first interface that enables rural citizens to request birth certificates, trade licenses, property documents, and file public complaints online.",
  //   businessProblem: "Villagers often have to walk long distances to physical administration offices multiple times to obtain simple certificates, leading to delays, paperwork stacks, and manual errors.",
  //   solution: "Created an easy-to-use digital administration dashboard for panchayat officials and a simplified citizen portal supporting bilingual localized layouts and automated document generation.",
  //   features: [
  //     "Bilingual Support with Marathi-First Localization",
  //     "Automated Certificate Generation (Birth, Marriage, NABC)",
  //     "Public Grievance and Suggestion Filing Portal",
  //     "Admin Dashboard for Application Status Tracking",
  //     "Local Village Updates and Announcement Notice Board"
  //   ],
  //   technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
  //   image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
  //   projectStatus: "Completed",
  //   isFeatured: true,
  //   challenges: "Designing an interface that is easily understandable by elders and citizens in rural communities with varying digital literacy rates.",
  //   results: "Created highly visual, text-to-speech friendly menus and large form fields, reducing certificate processing turnaround from 7 days to under 24 hours.",
  //   liveDemoUrl: "https://egram.saurabhtech.com"
  // },

  {
    // id: "egram-panchayat",
  id: "digital-dreams-services",
  title: "Digital Dreams Services",
  category: "Business Website",
  shortDescription: "A modern bilingual business website showcasing Digital Seva, custom printing, and commercial printing services under one brand.",
  fullDescription: "A premium Marathi-first business website created for Digital Dreams Services, a local service center in the Konkan region. The website brings three different business services together in one modern digital platform: Digital Seva, Custom Printing, and Commercial Printing. Customers can easily explore services, contact the business through WhatsApp or phone, and find the business location.",
  businessProblem: "The business offered multiple services but needed a professional online presence where customers could easily understand the different services and quickly contact the business.",
  solution: "Created a modern bilingual Marathi-English website with a unique business selection experience. Visitors can choose between Digital Seva, Custom Printing, and Commercial Printing and explore the relevant services through a clean, easy-to-understand interface.",
  features: [
    "Marathi-First Bilingual Experience with English Support",
    "Three-Business Service Selection Gateway",
    "Digital Seva and Citizen Service Showcase",
    "Custom T-Shirt and Product Printing Services",
    "Commercial Printing and Flex Printing Services",
    "WhatsApp and Phone Contact Integration",
    "Google Maps Location Integration",
    "Responsive Design for Mobile, Tablet, and Desktop"
  ],
  technologies: ["Vue.js", "Vite", "Tailwind CSS", "JavaScript"],
  // image: "https://digital-dreams-services.netlify.app/",
  image: "/src/assets/images/digitaldream-banner.png",
  projectStatus: "Completed",
  isFeatured: true,
  challenges: "Designing a single website that could clearly represent three different business divisions while keeping the experience simple and understandable for local customers, especially Marathi-speaking users.",
  results: "Created a professional digital presence that brings Digital Seva, Custom Printing, and Commercial Printing services together under the Digital Dreams Services brand, making it easier for customers to discover services and contact the business online.",
  liveDemoUrl: "https://digital-dreams-services.netlify.app/"
},

{
  id: "real-estate",
  title: "Aurelia Heights Luxury Residences",
  category: "Real Estate & Property",
  shortDescription: "A cinematic luxury real estate experience designed to showcase premium residences, architectural excellence, lifestyle amenities, and private property enquiries.",
  fullDescription: "A premium digital experience created for Aurelia Heights, a fictional luxury high-rise residential development in Mumbai. The website combines immersive architectural storytelling, elegant residence showcases, curated amenities, lifestyle imagery, location highlights, and a seamless enquiry journey to create a high-end property discovery experience.",
  businessProblem: "Real estate developers often struggle to present their properties online in a way that matches the premium quality of their physical projects. They need a visually powerful digital experience that builds trust, showcases the lifestyle, highlights property features, and converts interested visitors into genuine enquiries.",
  solution: "Built a cinematic real estate website with a luxury editorial design system, immersive architectural visuals, interactive residence showcases, curated amenity presentations, location highlights, responsive layouts, and direct WhatsApp enquiry integration for a seamless property discovery and lead-generation experience.",
  features: [
    "Cinematic Full-Screen Luxury Real Estate Hero Experience",
    "Premium Architectural Storytelling and Project Showcase",
    "Interactive 2, 3 & 4 Bedroom Residence Presentation",
    "Curated Amenities and Lifestyle Experience Sections",
    "Interactive Floor Plan and Property Detail Showcase",
    "Premium Gallery with Full-Screen Image Viewer",
    "Master Plan and Location Connectivity Presentation",
    "Direct WhatsApp Property Enquiry Integration",
    "Responsive Experience Across Desktop, Tablet and Mobile"
  ],
  technologies: ["React", "Vite", "Tailwind CSS", "GSAP", "JavaScript"],
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
  projectStatus: "Completed",
  isFeatured: true,
  challenges: "Creating a digital experience that communicates the scale, exclusivity, and lifestyle of a luxury high-rise development while keeping the interface elegant, immersive, and easy to navigate across all devices.",
  results: "Created a premium real estate showcase experience designed to strengthen developer branding, present properties more effectively, increase visitor engagement, and convert property interest into direct enquiries through WhatsApp and private viewing requests.",
  liveDemoUrl: "https://real-estate-saurabhtech.netlify.app/"
},
{
  id: "beauty-parlour",
  title: "Beauty Premium Parlour",
  category: "Beauty & Wellness",
  shortDescription: "Premium beauty parlour website focused on luxury salon experiences, beauty services, expert stylists, special offers and direct appointment bookings.",
  fullDescription: "A modern premium beauty parlour website designed to showcase professional hair, makeup, skincare, bridal, nail and spa services through a visually rich and conversion-focused experience. The website combines cinematic visuals, elegant editorial layouts, interactive service showcases, beauty expert profiles, promotional offers and a seamless appointment booking journey.",
  businessProblem: "Many beauty parlours and salons rely heavily on social media and messaging apps, making it difficult for potential customers to properly explore their services, compare treatments, build trust and book appointments through a professional branded experience.",
  solution: "Created a premium, mobile-first beauty experience with an immersive hero carousel, curated service categories, expert beauty profiles, special offers, before-and-after transformations, visual galleries, customer testimonials and a conversion-focused appointment booking flow with WhatsApp integration.",
  features: [
    "Cinematic Hero Image & Video Carousel",
    "Interactive Beauty Service Categories",
    "Premium Hair, Makeup, Facial, Nail & Spa Service Cards",
    "Beauty Expert Profiles with Ratings & Specialties",
    "Special Offers & Beauty Package Showcase",
    "Interactive Before & After Transformation Slider",
    "Masonry Beauty Gallery with Category Filters",
    "Customer Testimonials & Review Carousel",
    "Multi-Step Appointment Booking Experience",
    "WhatsApp Direct Booking Integration",
    "Mobile Sticky Book Appointment CTA",
    "Responsive Mobile-First Luxury Design"
  ],
  technologies: [
    "Vue.js",
    "Vite",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Swiper.js"
  ],
  image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  projectStatus: "Ready-to-Launch",
  isFeatured: true,
  challenges: "Creating a premium digital experience that feels visually different from traditional salon websites while presenting a wide range of beauty services without overwhelming visitors. The main challenge was combining cinematic visuals, service discovery, expert profiles and appointment conversion into a smooth mobile-first experience.",
  results: "Built a complete premium beauty platform experience that helps salon owners present their services professionally, build trust through expert profiles and transformations, promote special packages, and convert visitors directly into appointment enquiries through an optimized booking flow and WhatsApp integration.",
  liveDemoUrl: "https://beauty-parlour-sptech.netlify.app/"
},
{
  id: "generic-booking-system",
  title: "BookEasy: Generic Booking System",
  category: "Booking & Management Systems",
  shortDescription: "Modern booking management platform designed to simplify appointment scheduling, booking tracking, status management, and business operations.",
  fullDescription: "A flexible and scalable booking management system built for businesses that need a simple way to manage customer bookings and appointments. The platform provides a clean administrative dashboard for viewing, filtering, and managing bookings across different statuses, helping businesses organize their daily operations more efficiently.",
  businessProblem: "Many small and service-based businesses still manage customer appointments through phone calls, WhatsApp messages, spreadsheets, or manual records, making it difficult to track bookings, monitor statuses, and maintain an organized workflow.",
  solution: "Developed a centralized booking management platform with a modern admin dashboard, structured booking records, status-based filtering, pagination, and an intuitive interface for managing booking operations efficiently.",
  features: [
    "Centralized Booking Management Dashboard",
    "Booking Status Tracking and Management",
    "Pending, Completed and Inactive Booking Filters",
    "Search and Pagination for Efficient Record Management",
    "Responsive Admin Interface for Desktop, Tablet and Mobile",
    "Clean Booking Details and Management Workflow"
  ],
  technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "REST API"],
  image: "src/assets/images/generic-booking-banner.png",
  projectStatus: "In Progress",
  isFeatured: true,
  challenges: "Creating a flexible booking workflow that could support different types of businesses while keeping the interface simple, intuitive, and easy to manage for administrators.",
  results: "Built a structured booking management system that centralizes appointment records, simplifies booking status management, and provides administrators with a clear overview of their booking operations.",
  liveDemoUrl: "https://generic-booking-system.onrender.com/"
  // liveDemoUrl: "https://your-booking-system-demo-url.com"
},
  // {
  //   id: "real-time-chat",
  //   title: "SyncTalk: Real-Time Chat App",
  //   category: "Web Applications",
  //   shortDescription: "Real-time communication platform with private messaging, online status, notifications and WebSocket-based communication.",
  //   fullDescription: "A secure, high-performance web-based messaging platform designed for real-time collaboration. It supports instant single-user chats, message status indicators (sent/delivered/read), typing indicators, and user presence logs.",
  //   businessProblem: "Many internal enterprise teams seek secure chat platforms hosted entirely on their own servers to prevent corporate data from being stored on external cloud storage (like Slack or Teams).",
  //   solution: "Developed a custom Full-Stack application featuring a Laravel backend with a Vue.js 3 frontend, utilizing WebSockets for sub-second communication latency and secure session encryption.",
  //   features: [
  //     "Instant Direct Messaging (WebSocket-powered)",
  //     "Dynamic Live Presence Status Indicator",
  //     "Real-Time Typing Indicators & Desktop Notifications",
  //     "Secure Multi-user JWT Token Authentication",
  //     "Responsive Dark-mode Interface for Tech Teams"
  //   ],
  //   technologies: ["PHP", "Bootstrap", "CSS", "MySQL", "WebSockets"],
  //   image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
  //   projectStatus: "Completed",
  //   isFeatured: true,
  //   challenges: "Ensuring connection stability and low memory footprints during continuous WebSocket reconnections when users switch between Wi-Fi and mobile networks.",
  //   results: "Built a lightweight heartbeat pooling mechanism that handles reconnections gracefully, keeping message sync times under 150 milliseconds.",
  //   liveDemoUrl: "Requested to be kept private for security reasons."
  //   // liveDemoUrl: "https://chat.saurabhtech.com"
  // },
  // {
  //   id: "kokango",
  //   title: "Kokango Konkan E-Commerce",
  //   category: "E-Commerce",
  //   shortDescription: "Travel and product-focused e-commerce experience built around showcasing Konkan products and destinations.",
  //   fullDescription: "A beautiful, content-driven e-commerce store dedicated to showcasing authentic agricultural and craft products from the Konkan region (alphonso mangoes, cashews, spices) while promoting local eco-tourism destinations.",
  //   businessProblem: "Konkan-based farmers and artisans make high-quality natural products but cannot reach direct urban buyers, relying instead on multiple middlemen who slash their profit margins.",
  //   solution: "Designed Kokango—a hybrid tourism-meets-shop platform that introduces buyers to the beauty of Konkan and enables them to buy authentic regional products directly, backed by secure payment gateway integrations.",
  //   features: [
  //     "Custom Shopping Cart & Product Checkout Pipeline",
  //     "Konkan Travel Destinational Guides & Booking Triggers",
  //     "Dynamic Product Reviews & Star Rating Engine",
  //     "Admin Dashboard for Inventory and Order Tracking",
  //     "Optimized High-Performance Image Optimization"
  //   ],
  //   technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
  //   image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=800",
  //   projectStatus: "Completed",
  //   isFeatured: false,
  //   challenges: "Designing an aesthetic that balances tourism inspiration (scenic beach landscapes) with clear product e-commerce shopping elements without distracting the buyer.",
  //   results: "Engineered a gorgeous lifestyle e-commerce hybrid that drives direct sales for local producers and raises travel interest for coastal tours.",
  //   liveDemoUrl: "https://kokango.saurabhtech.com"
  // },
  // {
  //   id: "maha-eseva",
  //   title: "Maha E-Seva Kendra Application",
  //   category: "SaaS",
  //   shortDescription: "Digital service management application for managing citizen-oriented services and workflows.",
  //   fullDescription: "An advanced workflow management system designed for authorized E-Seva Kendra operators. Streamlines the processing, tracking, and customer communications for dozens of citizen-oriented government certificates (PAN cards, passports, caste certificates, income certificates).",
  //   businessProblem: "Operators at E-Seva Kendras process hundreds of applications weekly. Managing customer files, paper forms, fee receipts, and application tracking numbers in physical logbooks leads to missed deadlines and poor service.",
  //   solution: "Built a secure, centralized CRM/Workflow app for E-Seva centers, allowing operators to log citizens, upload document PDFs, track processing milestones, and automatically notify citizens via SMS/WhatsApp when documents are approved.",
  //   features: [
  //     "Operational CRM Dashboard with Analytics",
  //     "Multi-category Document Upload & PDF Viewer",
  //     "Milestone Status Tracker with Interactive Timelines",
  //     "Automated SMS/WhatsApp Status Notifications",
  //     "Daily Income & Service Fee Collection Reports"
  //   ],
  //   technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
  //   image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
  //   projectStatus: "Completed",
  //   isFeatured: false,
  //   challenges: "Integrating third-party tracking states and creating an extremely fast, lightweight data entry interface for operators during busy hours.",
  //   results: "Built a modern administrative web portal that saves operators up to 4 hours of daily record-keeping and significantly reduces citizen phone follow-ups.",
  //   liveDemoUrl: "https://eseva.saurabhtech.com"
  // }
];
