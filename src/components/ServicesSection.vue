<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="services-section">
    <!-- Blur accents -->
    <div class="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">Capabilities</span>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Professional Software Engineering Services
        </h2>
        <p class="text-gray-400 text-base">
          I build custom, secure, and hyper-fast web solutions designed around your business workflows and lead-generation requirements.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="group relative p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/20 shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
        >
          <!-- Accent top line -->
          <div class="absolute top-0 left-0 w-0 h-[2px] bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-t-2xl"></div>

          <div>
            <!-- Service Icon Container -->
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-400 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <component :is="getIconComponent(service.iconName)" class="w-6 h-6" />
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-200">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              {{ service.description }}
            </p>
          </div>

          <!-- Benefits bullet summaries -->
          <div class="space-y-2 mb-6">
            <div 
              v-for="benefit in service.benefits.slice(0, 2)" 
              :key="benefit" 
              class="flex items-center space-x-2 text-[11px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></div>
              <span class="truncate">{{ benefit }}</span>
            </div>
          </div>

          <!-- Action trigger -->
          <router-link 
            to="/services" 
            class="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400/80 hover:text-emerald-400 transition-colors pt-4 border-t border-white/5"
          >
            <span>Service Details</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </router-link>
        </div>
      </div>

      <!-- Quick Consultation CTA -->
      <div class="mt-16 text-center">
        <router-link 
          to="/contact" 
          class="inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-emerald-400 transition-colors group"
        >
          <span>Need a customized full-stack solution? Get a quote</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { services } from '../data/services';
import { 
  Globe, 
  Hotel, 
  Dumbbell, 
  Code, 
  Server, 
  Cpu, 
  ShoppingBag, 
  RefreshCw,
  ArrowUpRight,
  ArrowRight
} from 'lucide-vue-next';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const { setupScrollReveal } = useScrollAnimation();

const getIconComponent = (name: string) => {
  switch (name) {
    case 'Globe': return Globe;
    case 'Hotel': return Hotel;
    case 'Dumbbell': return Dumbbell;
    case 'Code': return Code;
    case 'Server': return Server;
    case 'Cpu': return Cpu;
    case 'ShoppingBag': return ShoppingBag;
    case 'RefreshCw': return RefreshCw;
    default: return Code;
  }
};

onMounted(() => {
  setupScrollReveal('#services-section h2');
  setupScrollReveal('#services-section .group');
});
</script>
