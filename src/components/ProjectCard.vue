<template>
  <div class="group relative rounded-2xl bg-[#0d0d0d] border border-white/5 overflow-hidden hover:border-emerald-500/20 shadow-xl transition-all duration-300 flex flex-col h-full" id="project-card">
    <!-- Featured Badge -->
    <div 
      v-if="project.isFeatured" 
      class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-emerald-500 text-black text-[10px] font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.4)]"
    >
      Featured
    </div>

    <!-- Project Status Badge -->
    <div 
      class="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-[#161616]/90 border text-[10px] font-mono tracking-wider font-semibold uppercase"
      :class="project.projectStatus === 'Ready-to-Launch' ? 'border-emerald-500/30 text-emerald-400' : 'border-white/10 text-gray-400'"
    >
      {{ project.projectStatus }}
    </div>

    <!-- Card Image with Zoom effect -->
    <div class="relative aspect-video w-full overflow-hidden bg-[#111] border-b border-white/5">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60 z-10"></div>
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow">
      <span class="text-[11px] font-mono uppercase tracking-wider text-emerald-400 mb-2">{{ project.category }}</span>
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-200">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {{ project.shortDescription }}
      </p>

      <!-- Technology Tags -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span 
          v-for="tech in project.technologies.slice(0, 4)" 
          :key="tech" 
          class="px-2 py-1 rounded bg-[#161616] border border-white/5 text-[10px] font-mono text-gray-400"
        >
          {{ tech }}
        </span>
        <span 
          v-if="project.technologies.length > 4" 
          class="px-2 py-1 rounded bg-[#161616] border border-emerald-500/10 text-[10px] font-mono text-emerald-400"
        >
          +{{ project.technologies.length - 4 }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-white/5">
        <!-- Live demo button -->
        <a 
          :href="project.liveDemoUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg bg-[#161616] border border-white/10 text-white font-semibold text-xs hover:bg-[#1f1f1f] hover:border-white/25 transition-all duration-200"
          @click="trackDemoClick"
        >
          <ExternalLink class="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>

        <!-- Case study button -->
        <router-link 
          :to="`/projects/${project.id}`" 
          class="flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-xs hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200 shadow-sm"
          @click="trackDetailsClick"
        >
          <span>Case Study</span>
          <ChevronRight class="w-3.5 h-3.5" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ExternalLink, ChevronRight } from 'lucide-vue-next';
import { useAnalytics } from '../composables/useAnalytics';

const props = defineProps<{
  project: {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    technologies: string[];
    image: string;
    projectStatus: string;
    isFeatured: boolean;
    liveDemoUrl: string;
  }
}>();

const { trackEvent } = useAnalytics();

const trackDemoClick = () => {
  trackEvent('project_demo_click', { project_id: props.project.id, project_title: props.project.title });
};

const trackDetailsClick = () => {
  trackEvent('project_case_study_click', { project_id: props.project.id, project_title: props.project.title });
};
</script>
