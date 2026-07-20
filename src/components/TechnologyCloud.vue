<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="tech-section">
    <div class="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">My Stack</span>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Robust Modern Technologies I Utilize
        </h2>
        <p class="text-gray-400 text-sm sm:text-base">
          I choose modern, robust, and industry-standard languages and frameworks to ensure optimal performance, modular structures, and ultimate safety.
        </p>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex justify-center flex-wrap gap-2 mb-12">
        <button 
          v-for="cat in ['All', 'Languages', 'Frameworks & CMS', 'Databases & Real-time', 'Tools & APIs']" 
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300"
          :class="selectedCategory === cat ? 'bg-emerald-500/10 border border-emerald-400/40 text-emerald-400' : 'bg-transparent text-gray-500 border border-transparent hover:text-white'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Tech Interactive Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" id="tech-grid-container">
        <transition-group 
          name="tech-list" 
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in absolute"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div 
            v-for="tech in filteredTechnologies" 
            :key="tech.name"
            class="group p-5 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/20 shadow-md hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            <!-- Header with name and category -->
            <div>
              <span class="text-[9px] font-mono tracking-widest uppercase text-emerald-500/60 block mb-1">
                {{ tech.category }}
              </span>
              <h3 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                {{ tech.name }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-gray-500 text-[11px] leading-relaxed mt-3 mb-4 group-hover:text-gray-400 transition-colors">
              {{ tech.description }}
            </p>

            <!-- Proficiency Meter -->
            <div class="flex items-center justify-between pt-3 border-t border-white/5">
              <span class="text-[10px] font-mono text-gray-400">{{ tech.proficiency }}</span>
              <div class="flex space-x-0.5">
                <span 
                  v-for="dot in 3" 
                  :key="dot" 
                  class="w-1.5 h-1.5 rounded-full"
                  :class="getDotClass(tech.proficiency, dot)"
                ></span>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { technologies } from '../data/technologies';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const { setupScrollReveal } = useScrollAnimation();

const selectedCategory = ref('All');

const filteredTechnologies = computed(() => {
  if (selectedCategory.value === 'All') {
    return technologies;
  }
  return technologies.filter(tech => tech.category === selectedCategory.value);
});

const getDotClass = (proficiency: string, dot: number) => {
  const isFilled = 
    (proficiency === 'Expert') || 
    (proficiency === 'Advanced' && dot <= 2) || 
    (proficiency === 'Intermediate' && dot <= 1);
  
  return isFilled ? 'bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.5)]' : 'bg-white/10';
};

onMounted(() => {
  setupScrollReveal('#tech-section h2');
  setupScrollReveal('#tech-section .group');
});
</script>
