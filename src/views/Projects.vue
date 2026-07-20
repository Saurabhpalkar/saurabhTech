<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative">
    <div class="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">PORTFOLIO</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Selected Web Projects & System Solutions
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          I design and develop tailored digital solutions. Browse through ready-to-launch business templates, custom enterprise applications, and WebSocket systems built under SaurabhTech.
        </p>
      </div>

      <!-- Filter Component -->
      <ProjectFilter 
        :active-filter="activeCategory" 
        @filter-change="handleCategoryChange" 
      />

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" id="projects-list-grid">
        <div 
          v-for="proj in filteredProjects" 
          :key="proj.id"
          class="project-detail-item"
        >
          <ProjectCard :project="proj" />
        </div>
      </div>

      <!-- Ready to Launch Quick Callout banner -->
      <div class="p-8 sm:p-12 rounded-3xl bg-[#0d0d0d] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none"></div>
        
        <div class="space-y-4 text-left max-w-2xl">
          <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
            Ready-to-Launch Websites
          </span>
          <h3 class="text-2xl font-bold text-white">Need a website up and running in under 48 hours?</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            I offer premium pre-built, highly optimized, and mobile-responsive layouts tailored for Gyms, Hotels, Nature Resorts, Restaurants, and local Businesses. Available with fully customized text, media, and booking channels.
          </p>
        </div>

        <button 
          @click="chatWithSaurabhGeneral" 
          class="px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.2)] flex items-center space-x-2 whitespace-nowrap"
        >
          <span>Discuss Ready-to-Launch Sites</span>
          <ArrowUpRight class="w-4 h-4" />
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ArrowUpRight } from 'lucide-vue-next';
import { projects } from '../data/projects';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useAnalytics } from '../composables/useAnalytics';
import { useScrollAnimation } from '../composables/useScrollAnimation';
import { updateSeo } from '../utils/seo';

// Import child components
import ProjectCard from '../components/ProjectCard.vue';
import ProjectFilter from '../components/ProjectFilter.vue';

const { triggerWhatsApp } = useWhatsApp();
const { trackPageView, trackEvent } = useAnalytics();
const { setupScrollReveal } = useScrollAnimation();

const activeCategory = ref('all');

const handleCategoryChange = (cat: string) => {
  activeCategory.value = cat;
  trackEvent('projects_page_filter_click', { category_id: cat });
};

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects;
  }
  return projects.filter(p => {
    if (activeCategory.value === 'Websites') {
      return p.category === 'Gym & Fitness' || p.category === 'Hotel & Hospitality' || p.category === 'Wellness & Booking';
    }
    if (activeCategory.value === 'Hotel') {
      return p.category === 'Hotel & Resort';
    }
    return p.category === activeCategory.value;
  });
});

const chatWithSaurabhGeneral = () => {
  const text = "Hi Saurabh, I am looking to purchase a ready-to-launch website. Let's discuss pricing and availability.";
  triggerWhatsApp(text);
  trackEvent('projects_page_launch_cta_click');
};

onMounted(() => {
  updateSeo({
    title: "Portfolio Projects | Custom Web Solutions",
    description: "Explore the technical showcase, websites, e-commerce, and SaaS tools built by Saurabh Palkar under the SaurabhTech brand."
  });

  trackPageView('/projects', 'Projects Showcase - SaurabhTech');

  setupScrollReveal('#projects-list-grid .project-detail-item');
});
</script>
