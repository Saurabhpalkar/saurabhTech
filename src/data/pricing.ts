import { projects } from './projects';

const findProjectImage = (projectId: string): string => {
  return projects.find((project) => project.id === projectId)?.image || '';
};

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  popular: boolean;
  features: string[];
  ctaText: string;
  message: string;
}

export interface ReadyToLaunchSite {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
  liveDemoUrl: string;
  message: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter-website',
    name: 'STARTER WEBSITE',
    price: 'Starting from ₹15,000',
    description: 'For small businesses, individuals and startups that need a professional online presence.',
    popular: false,
    features: [
      '1–5 pages',
      'Responsive design',
      'Modern UI',
      'Contact form',
      'WhatsApp integration',
      'Basic SEO setup',
      'Deployment assistance'
    ],
    ctaText: 'Get Started',
    message: 'Hi Saurabh, I am interested in your Starter Website package. Please share more details.'
  },
  {
    id: 'professional-website',
    name: 'PROFESSIONAL WEBSITE',
    price: 'Starting from 30,000',
    description: 'For businesses that want a premium, professional and conversion-focused website.',
    popular: true,
    features: [
      '5–10 pages',
      'Premium custom design',
      'Responsive design',
      'Smooth animations and interactions',
      'Contact form',
      'WhatsApp integration',
      'Basic SEO setup',
      'Google Analytics setup',
      'Deployment assistance'
    ],
    ctaText: 'Discuss Your Project',
    message: 'Hi Saurabh, I am interested in your Professional Website package. I would like to discuss my project.'
  },
  {
    id: 'custom-web-application',
    name: 'CUSTOM WEB APPLICATION',
    price: 'Custom Quote',
    description: 'For businesses that need custom workflows, databases, automation or business software.',
    popular: false,
    features: [
      'Custom business logic',
      'Admin dashboard',
      'Database integration',
      'Authentication',
      'API integrations',
      'Laravel / PHP backend',
      'Vue.js frontend',
      'Automation',
      'Deployment and support'
    ],
    ctaText: 'Request a Quote',
    message: 'Hi Saurabh, I need a custom web application. I would like to discuss my requirements.'
  }
];

export const readyToLaunchSites: ReadyToLaunchSite[] = [
  {
    id: 'gym-website',
    title: 'Gym Website',
    category: 'Gym & Fitness',
    price: 'Starting from ₹15,000',
    description: 'A launch-ready gym website built to showcase memberships, trainers and studio facilities.',
    image: findProjectImage('gym-website'),
    liveDemoUrl: 'https://gym-saurabhtec.netlify.app/',
    message: 'Hi Saurabh, I am interested in the Gym Website. Please share more details about the template and launch options.'
  },
  {
    id: 'hotel-website',
    title: 'Hotel Website',
    category: 'Hospitality',
    price: 'Starting from ₹25,000',
    description: 'A premium hotel website built for elegant accommodation presentation and direct guest enquiries.',
    image: findProjectImage('resort-website'),
    liveDemoUrl: 'https://hotel-sptech.netlify.app/',
    message: 'Hi Saurabh, I am interested in the Hotel Website. Please share more details about customization and pricing.'
  },
  // {
  //   id: 'luxury-hotel-website',
  //   title: 'Luxury Hotel Website',
  //   category: 'Hotel & Luxury',
  //   price: 'Starting from ₹20,000',
  //   description: 'A high-end hotel website concept designed for luxury room presentation and guest experience.',
  //   image: findProjectImage('luxury-hotel'),
  //   liveDemoUrl: 'https://luxury-hotel-stech.netlify.app/',
  //   message: 'Hi Saurabh, I am interested in the Luxury Hotel Website. Please share more details and the demo.'
  // },
  {
  id: 'coffee-3d-website',
  title: 'Premium 3D Coffee Website',
  category: 'Café & Restaurant',
  price: 'Starting from ₹40,000',
  description: 'An immersive 3D café website designed to showcase specialty coffee, signature beverages, premium café experiences, and interactive 3D product visuals through a cinematic and modern digital experience.',
  image: findProjectImage('caffe-shop'),
  liveDemoUrl: 'https://caffe-sptech.netlify.app/',
  message: 'Hi Saurabh, I am interested in the Premium 3D Coffee Website. Please share more details and the demo.'
},
{
  id: 'generic-booking-system',
  title: 'BookEasy',
  category: 'Booking & Management System',
  price: 'Custom Quote',
  description: 'A modern and customizable booking system for salons, clinics, gyms, hotels, consultants and service-based businesses to manage appointments and bookings efficiently.',
  image: findProjectImage('generic-booking-system'),
  liveDemoUrl: "https://generic-booking-system.onrender.com/",
  message: 'Hi Saurabh, I am interested in the BookEasy booking system for my business. I would like to see a demo and discuss customization options and pricing.'
},
  // {
  //   id: 'kashy-kimaya',
  //   title: 'Kashy Kimaya',
  //   category: 'Wellness & Booking',
  //   price: 'Custom Quote',
  //   description: 'A wellness booking website tailored for studios, therapy services and appointment scheduling.',
  //   image: findProjectImage('kashy-kimaya'),
  //   liveDemoUrl: 'https://gilded-brigadeiros-d7af34.netlify.app/',
  //   message: 'Hi Saurabh, I am interested in the Kashy Kimaya website. I would like to discuss a custom quote.'
  // }
];
