<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative" id="project-details-view">
    <div v-if="!project" class="max-w-7xl mx-auto px-6 py-20 text-center">
      <div class="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto mb-6">
        <AlertTriangle class="w-8 h-8" />
      </div>
      <h1 class="text-2xl font-bold mb-4">Project Case Study Not Found</h1>
      <p class="text-gray-400 max-w-md mx-auto mb-8">
        The project you are looking for does not exist in the database or may have been removed.
      </p>
      <router-link 
        to="/projects" 
        class="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs"
      >
        Return to Portfolio
      </router-link>
    </div>

    <div v-else class="max-w-7xl mx-auto px-6">
      <!-- Breadcrumb and Nav triggers -->
      <div class="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-8">
        <router-link to="/projects" class="hover:text-emerald-400 transition-colors">Portfolio</router-link>
        <span>/</span>
        <span class="text-gray-300 truncate">{{ project.title }}</span>
      </div>

      <!-- Project Hero Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <!-- Text details -->
        <div class="lg:col-span-6 space-y-6">
          <div class="flex items-center space-x-3">
            <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
              {{ project.category }}
            </span>
            <span class="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-400 font-mono text-[10px] uppercase tracking-wider">
              {{ project.projectStatus }}
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {{ project.title }}
          </h1>

          <p class="text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
            {{ project.shortDescription }}
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <!-- Live Demo -->
            <a 
              :href="project.liveDemoUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.2)] flex items-center space-x-2"
              @click="trackCtaClick('live_demo')"
            >
              <ExternalLink class="w-4 h-4" />
              <span>Launch Live Site</span>
            </a>

            <!-- WhatsApp consultation for this specific template -->
            <button 
              @click="requestCustomVersion" 
              class="px-6 py-3.5 rounded-lg border border-emerald-500/20 text-emerald-400 font-mono text-xs hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 flex items-center space-x-2"
            >
              <!-- WhatsApp SVG -->
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 5.003L2 22l5.161-1.353c1.479.807 3.14 1.233 4.842 1.233 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm0 1.8c4.516 0 8.188 3.673 8.188 8.188 0 4.516-3.673 8.188-8.188 8.188-1.517 0-2.998-.418-4.282-1.205l-.307-.184-3.042.8 1.13-2.14-.15-.173c-.85-1.34-1.298-2.894-1.298-4.488.001-4.515 3.674-8.188 8.188-8.188z"/>
              </svg>
              <span>Enquire About Project</span>
            </button>
          </div>
        </div>

        <!-- Hero visual aspect ratio box -->
        <div class="lg:col-span-6 relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-10"></div>
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover filter brightness-[0.9] hover:brightness-[1.0] transition-all duration-500"
            referrerpolicy="no-referrer"
          />
        </div>
      </div>

      <!-- Core Details Layout Grid (Split) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12 border-t border-white/5">
        <!-- Left details column (Overview, Problem, Solutions, Challenges) -->
        <div class="lg:col-span-8 space-y-12 text-left">
          <!-- Full description -->
          <div>
            <h2 class="text-xl font-bold text-white mb-4">Project Overview</h2>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              {{ project.fullDescription }}
            </p>
          </div>

          <!-- Problem statement -->
          <div class="p-6 sm:p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 border-l-4 border-l-red-500/40">
            <h2 class="text-lg font-bold text-white mb-3 flex items-center space-x-2">
              <span class="text-red-400">🚨</span>
              <span>The Business Challenge</span>
            </h2>
            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {{ project.businessProblem }}
            </p>
          </div>

          <!-- Solution architectural outline -->
          <div>
            <h2 class="text-xl font-bold text-white mb-4">Engineering Approach & Solution</h2>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              {{ project.solution }}
            </p>
          </div>

          <!-- Key Implemented Features checklist -->
          <div>
            <h2 class="text-xl font-bold text-white mb-4">Key Features Implemented</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="feat in project.features" 
                :key="feat" 
                class="flex items-start space-x-3 text-sm text-gray-400"
              >
                <div class="mt-1 w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check class="w-3.5 h-3.5" />
                </div>
                <span>{{ feat }}</span>
              </div>
            </div>
          </div>

          <!-- Challenges Solved -->
          <div>
            <h2 class="text-xl font-bold text-white mb-4">Technical Challenges & Obstacles</h2>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              {{ project.challenges }}
            </p>
          </div>

          <!-- Project results / objectives achieved -->
          <div>
            <h2 class="text-xl font-bold text-white mb-4">Project Goal & Final Outcome</h2>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
              {{ project.results }}
            </p>
          </div>
        </div>

        <!-- Right details column (Specs, Sidebar tools) -->
        <div class="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
          <!-- Technologies utilized card -->
          <div class="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 text-left">
            <h3 class="text-sm font-mono uppercase tracking-wider text-white mb-4 pb-3 border-b border-white/5">
              Technical Specifications
            </h3>
            
            <div class="space-y-4 mb-6">
              <div>
                <span class="text-[10px] font-mono text-gray-500 block mb-1">PROJECT CATEGORY</span>
                <span class="text-xs font-semibold text-emerald-400">{{ project.category }}</span>
              </div>

              <div>
                <span class="text-[10px] font-mono text-gray-500 block mb-1">DEVELOPMENT STATE</span>
                <span class="text-xs font-semibold text-white">{{ project.projectStatus }}</span>
              </div>

              <div>
                <span class="text-[10px] font-mono text-gray-500 block mb-1">ENGINEERING BRAND</span>
                <span class="text-xs font-semibold text-white font-mono">SaurabhTech</span>
              </div>
            </div>

            <div>
              <span class="text-[10px] font-mono text-gray-500 block mb-3">CORE TECHNOLOGY STACK</span>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 rounded bg-[#161616] border border-white/5 text-[10px] font-mono text-gray-400"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom direct support card -->
          <div class="p-6 rounded-2xl bg-[#0d0d0d] border border-emerald-500/10 text-left relative overflow-hidden">
            <div class="absolute bottom-0 right-0 w-[100px] h-[100px] rounded-full bg-emerald-500/5 blur-[50px] pointer-events-none"></div>
            <h3 class="text-sm font-bold text-white mb-2">Request Similar Platform</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-6">
              Need a high-performance web system designed specifically for your business workflow? I can customize and launch this specific platform.
            </p>
            <button 
              @click="requestCustomVersion"
              class="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors tracking-wide flex items-center justify-center space-x-2"
            >
              <span>Contact SaurabhTech</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AlertTriangle, Check, ExternalLink, ArrowRight } from 'lucide-vue-next';
import { projects } from '../data/projects';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useAnalytics } from '../composables/useAnalytics';
import { updateSeo } from '../utils/seo';

const route = useRoute();
const { triggerWhatsApp } = useWhatsApp();
const { trackPageView, trackEvent } = useAnalytics();

const project = computed(() => {
  return projects.find(p => p.id === route.params.id);
});

const requestCustomVersion = () => {
  if (!project.value) return;
  const text = `Hi Saurabh, I reviewed your "${project.value.title}" project on your portfolio and I'm interested in deploying a customized version for my business. Let's discuss requirements and quotes.`;
  triggerWhatsApp(text);
  trackEvent('project_detail_custom_request', { project_id: project.value.id, project_title: project.value.title });
};

const trackCtaClick = (type: string) => {
  if (!project.value) return;
  trackEvent('project_detail_cta_click', { action_type: type, project_id: project.value.id, project_title: project.value.title });
};

onMounted(() => {
  if (project.value) {
    updateSeo({
      title: `${project.value.title} Case Study | Projects`,
      description: project.value.shortDescription,
      image: project.value.image,
      schemaType: "CreativeWork",
      schemaData: {
        title: project.value.title,
        description: project.value.shortDescription,
        category: project.value.category,
        technologies: project.value.technologies
      }
    });

    trackPageView(`/projects/${project.value.id}`, `${project.value.title} Details - SaurabhTech`);
  }
});
</script>
