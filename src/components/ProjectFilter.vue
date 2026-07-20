<template>
  <div class="w-full flex justify-center mb-12" id="project-filter">
    <!-- Filters Container with touch scrolling and no scrollbar -->
    <div class="flex items-center space-x-2 p-1.5 rounded-xl bg-[#0d0d0d] border border-white/5 overflow-x-auto max-w-full no-scrollbar">
      <button 
        v-for="filter in filters" 
        :key="filter.value" 
        @click="selectFilter(filter.value)"
        class="px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-300 select-none cursor-pointer relative"
        :class="activeFilter === filter.value ? 'text-black font-semibold z-10' : 'text-gray-400 hover:text-white'"
      >
        <!-- Animated Background indicator -->
        <span 
          v-if="activeFilter === filter.value" 
          class="absolute inset-0 bg-emerald-400 rounded-lg -z-10 shadow-[0_2px_15px_rgba(16,185,129,0.3)]"
          style="transition: all 0.3s ease;"
        ></span>
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  activeFilter: string;
}>();

const emit = defineEmits<{
  (e: 'filter-change', category: string): void;
}>();

const filters = [
  { name: 'All Work', value: 'all' },
  { name: 'Business Websites', value: 'Websites' },
  { name: 'Hotel & Resort', value: 'Hotel' },
  { name: 'SaaS Platforms', value: 'SaaS' },
  { name: 'E-Commerce', value: 'E-Commerce' },
  { name: 'Web Applications', value: 'Web Applications' }
];

const selectFilter = (value: string) => {
  emit('filter-change', value);
};
</script>
