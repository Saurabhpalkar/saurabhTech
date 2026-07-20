<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white relative">
    <!-- Navbar component included automatically in App.vue -->
    
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Interactive Projects Filter Showcase -->
    <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5" id="projects-showcase">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">Showcase</span>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Recent Client Works & Applications
          </h2>
          <p class="text-gray-400 text-sm sm:text-base">
            Explore a curated selection of websites and applications I've developed, featuring real-world problem statements and scalable technical implementations.
          </p>
        </div>

        <!-- Filter Component -->
        <ProjectFilter 
          :active-filter="activeCategory" 
          @filter-change="handleCategoryChange" 
        />

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="proj in filteredProjects" 
            :key="proj.id"
            class="project-grid-item"
          >
            <ProjectCard :project="proj" />
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link 
            to="/projects" 
            class="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#111] border border-white/5 hover:border-emerald-500/20 text-gray-300 hover:text-white transition-all text-sm font-semibold"
          >
            <span>View All Works & Case Studies</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Ready-to-Launch Websites Section (Important Business Unit) -->
    <section class="py-24 bg-[#0d0d0d] border-t border-b border-emerald-500/5 relative overflow-hidden" id="ready-to-launch">
      <div class="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">SaurabhTech Solutions</span>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ready-to-Launch Websites
          </h2>
          <p class="text-gray-400 text-sm sm:text-base">
            Premium, high-performance website designs engineered for businesses ready to establish a trusted brand, gain search rankings, and attract customers immediately.
          </p>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="prod in launchProducts" 
            :key="prod.id"
            class="bg-[#111] rounded-2xl border border-white/5 hover:border-emerald-500/20 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <!-- Product Photo -->
            <div class="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img 
                :src="prod.image" 
                :alt="prod.name" 
                class="w-full h-full object-cover brightness-95"
                loading="lazy"
                referrerpolicy="no-referrer"
              />
              <span class="absolute top-4 left-4 px-2.5 py-1 rounded bg-emerald-500 text-black text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                Customizable
              </span>
              <span class="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#0a0a0a]/90 border border-white/10 text-[10px] font-mono tracking-wider font-semibold uppercase text-emerald-400">
                Responsive Design
              </span>
            </div>

            <!-- Product info -->
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-2">{{ prod.type }}</span>
                <h3 class="text-xl font-bold text-white mb-3">{{ prod.name }}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ prod.description }}</p>
                
                <!-- Features -->
                <div class="space-y-2 mb-8">
                  <div 
                    v-for="feat in prod.features" 
                    :key="feat" 
                    class="flex items-center space-x-2 text-xs text-gray-500"
                  >
                    <Check class="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{{ feat }}</span>
                  </div>
                </div>
              </div>

              <!-- CTA trigger -->
              <button 
                @click="requestWebsite(prod)"
                class="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_4px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.35)]"
              >
                <!-- Custom WhatsApp SVG path (Clean) -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 5.003L2 22l5.161-1.353c1.479.807 3.14 1.233 4.842 1.233 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm0 1.8c4.516 0 8.188 3.673 8.188 8.188 0 4.516-3.673 8.188-8.188 8.188-1.517 0-2.998-.418-4.282-1.205l-.307-.184-3.042.8 1.13-2.14-.15-.173c-.85-1.34-1.298-2.894-1.298-4.488.001-4.515 3.674-8.188 8.188-8.188zm-3.522 3.11c-.194 0-.39.019-.553.078-.266.094-.522.254-.7.473-.314.385-.563.843-.563 1.343 0 .762.33 1.514.868 2.253.948 1.303 2.2 2.378 3.518 3.118.528.297.994.484 1.436.621.41.127.817.113 1.157.062.373-.055.76-.255.986-.532.226-.277.29-.575.29-.824 0-.156-.05-.296-.096-.347-.075-.083-.342-.232-.612-.355-.27-.123-1.042-.513-1.201-.572-.158-.06-.275-.088-.393.088-.118.175-.461.58-.565.698-.103.117-.207.13-.374.048-.166-.082-.702-.259-1.338-.826-.495-.441-.83-.986-.927-1.151-.097-.165-.01-.255.073-.337.075-.074.166-.194.25-.291.082-.097.11-.165.166-.277.055-.11.027-.207-.014-.29-.041-.082-.393-.948-.539-1.3-.142-.344-.287-.297-.393-.297z"/>
                </svg>
                <span>Request This Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />

    <!-- Technology Section -->
    <TechnologyCloud />

    <!-- Experience Timeline Section -->
    <ExperienceTimeline />

    <!-- Blog Showcase Section -->
    <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5" id="blog-preview-section">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div class="max-w-xl">
            <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">My Writing</span>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Latest Articles & Tech Logs
            </h2>
          </div>
          <div>
            <router-link 
              to="/blog" 
              class="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore All Articles</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="post in featuredPosts" 
            :key="post.id"
            class="blog-grid-item"
          >
            <BlogCard :post="post" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="contact-panel-section">
      <div class="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <!-- Contact text side -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">LET'S COMMENCE</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Have a project <br />in mind?
              </h2>
              <p class="text-gray-400 text-base leading-relaxed">
                Let's build something useful, beautiful, and highly impactful for your target audience. Feel free to fill in the scoping sheet, or reach out directly on WhatsApp.
              </p>
            </div>

            <!-- Practical facts list -->
            <div class="space-y-4">
              <div class="flex items-center space-x-3.5 text-sm text-gray-400">
                <div class="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Mail class="w-4 h-4" />
                </div>
                <span>saurabhtech.sp@gmail.com</span>
              </div>

              <div class="flex items-center space-x-3.5 text-sm text-gray-400">
                <div class="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <!-- Custom WhatsApp icon -->
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 5.003L2 22l5.161-1.353c1.479.807 3.14 1.233 4.842 1.233 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm0 1.8c4.516 0 8.188 3.673 8.188 8.188 0 4.516-3.673 8.188-8.188 8.188-1.517 0-2.998-.418-4.282-1.205l-.307-.184-3.042.8 1.13-2.14-.15-.173c-.85-1.34-1.298-2.894-1.298-4.488.001-4.515 3.674-8.188 8.188-8.188z"/>
                  </svg>
                </div>
                <span>Available immediately via Chat</span>
              </div>
            </div>
          </div>

          <!-- Contact form side -->
          <div class="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, Check, Mail } from 'lucide-vue-next';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useAnalytics } from '../composables/useAnalytics';
import { useScrollAnimation } from '../composables/useScrollAnimation';
import { updateSeo } from '../utils/seo';

// Import child components
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectFilter from '../components/ProjectFilter.vue';
import ServicesSection from '../components/ServicesSection.vue';
import TechnologyCloud from '../components/TechnologyCloud.vue';
import ExperienceTimeline from '../components/ExperienceTimeline.vue';
import BlogCard from '../components/BlogCard.vue';
import ContactForm from '../components/ContactForm.vue';

const { triggerWhatsApp } = useWhatsApp();
const { trackPageView, trackEvent } = useAnalytics();
const { setupScrollReveal } = useScrollAnimation();

const activeCategory = ref('all');

const handleCategoryChange = (cat: string) => {
  activeCategory.value = cat;
  trackEvent('projects_category_filter_click', { category_id: cat });
};

const filteredProjects = computed(() => {
  // Return only first 6 projects of the active category on homepage
  const allProjs = activeCategory.value === 'all' 
    ? projects 
    : projects.filter(p => {
        if (activeCategory.value === 'Websites') {
          return p.category === 'Gym & Fitness' || p.category === 'Hotel & Hospitality' || p.category === 'Wellness & Booking';
        }
        if (activeCategory.value === 'Hotel') {
          return p.category === 'Hotel & Resort';
        }
        return p.category === activeCategory.value;
      });
  
  return allProjs.slice(0, 6);
});

const featuredPosts = computed(() => {
  return blogPosts.slice(0, 3);
});

const launchProducts = [
  {
    id: "gym-launch",
    name: "Gym & Fitness Website",
    type: "Template / Product",
    description: "Premium high-impact website showcasing memberships, facilities, trainer biographies, class timetables, and direct lead generation.",
    features: [
      "Custom Class Schedule Matrix",
      "Dynamic Membership Tier Grids",
      "Trainer Carousel with Specialist Tags",
      "Lead Capture / Tour Reservation Form"
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    message: "Hi Saurabh, I am interested in your Gym Website template. Please share details regarding customization and pricing."
  },
  {
    id: "hotel-launch",
    name: "Luxury Boutique Hotel Website",
    type: "Template / Product",
    description: "Elegant, sensory design with rich galleries, clear accommodation lists with specific filter tags, and simple direct inquiry modules.",
    features: [
      "Fullscreen Immersive Imagery Sections",
      "Accommodation Filtering by Amenities",
      "Custom Direct Booking inquiry forms",
      "Zero commission direct reservation paths"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    message: "Hi Saurabh, I am interested in your Hotel Website template. Please share details regarding setup and pricing."
  },
  {
    id: "resort-launch",
    name: "Nature Resort Website",
    type: "Template / Product",
    description: "Experiential outdoor theme featuring immersive sliders, resort scenic highlights, cottage spotlights, and direct reservation triggers.",
    features: [
      "Smooth Scenic Image Transition Sliders",
      "Individual Cottage & Room Spotlights",
      "Eco-Activities & Guided Excursions areas",
      "WhatsApp inquiry routing templates"
    ],
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    message: "Hi Saurabh, I am interested in your Nature Resort Website. Please share more details regarding launch timelines."
  }
];

const requestWebsite = (prod: any) => {
  triggerWhatsApp(prod.message);
  trackEvent('ready_to_launch_product_request', { product_id: prod.id, product_name: prod.name });
};

onMounted(() => {
  // Update SEO Meta
  updateSeo({
    title: "Home | PHP Full-Stack Developer",
    description: "Premium developer agency portfolio of Saurabh Palkar (SaurabhTech) - Custom business websites, Laravel development, Vue.js apps and ready-to-launch templates."
  });

  trackPageView('/', 'Home - SaurabhTech Portfolio');

  // GSAP animations
  setupScrollReveal('#projects-showcase h2');
  setupScrollReveal('#ready-to-launch h2');
  setupScrollReveal('.project-grid-item');
  setupScrollReveal('.blog-grid-item');
});
</script>
