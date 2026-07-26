<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative" id="services-page-view">
    <div class="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">SERVICES & PRICING</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          High-Value Web Solutions For Growth
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          I provide secure, modular, full-stack software development services tailored directly to business growth objectives. All services include direct developer logging, optimization sprints, and 12-month post-launch support.
        </p>
      </div>
 
      <PricingSection />
      <ReadyToLaunchSection />
 
      <!-- Detailed Services Listings Grid (Bento Style or Large list) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="services-detailed-grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/20 shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <!-- Header and benefits list -->
          <div>
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <component :is="getIconComponent(service.iconName)" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white">{{ service.title }}</h3>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed mb-8">
              {{ service.description }}
            </p>

            <div class="space-y-3.5 mb-8">
              <span class="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-2">Service Deliverables</span>
              <div 
                v-for="benefit in service.benefits" 
                :key="benefit"
                class="flex items-start space-x-3 text-xs sm:text-sm text-gray-400"
              >
                <div class="mt-1 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Check class="w-2.5 h-2.5" />
                </div>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </div>

          <!-- Price quote trigger -->
          <div class="pt-6 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs font-mono text-gray-500">custom scopes</span>
            <button 
              @click="requestServiceQuote(service)"
              class="px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30 text-emerald-400 font-semibold text-xs tracking-wider transition-colors flex items-center space-x-1.5"
            >
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 5.003L2 22l5.161-1.353c1.479.807 3.14 1.233 4.842 1.233 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm0 1.8c4.516 0 8.188 3.673 8.188 8.188 0 4.516-3.673 8.188-8.188 8.188-1.517 0-2.998-.418-4.282-1.205l-.307-.184-3.042.8 1.13-2.14-.15-.173c-.85-1.34-1.298-2.894-1.298-4.488.001-4.515 3.674-8.188 8.188-8.188z"/>
              </svg>
              <span>Enquire Quote</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Standard direct quote callout -->
      <div class="p-8 sm:p-12 rounded-3xl bg-[#0d0d0d] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="text-left max-w-xl">
          <h3 class="text-xl font-bold mb-2 text-white">Need a custom feature blueprint?</h3>
          <p class="text-gray-400 text-xs sm:text-sm">
            I offer a free, no-obligation scoping session where we chart your database models, API flows, and draft exact wireframes.
          </p>
        </div>
        <router-link 
          to="/contact" 
          class="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wider transition-all shadow-[0_4px_15px_rgba(16,185,129,0.2)] flex items-center space-x-1.5 whitespace-nowrap"
        >
          <span>Schedule Scoping Session</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { 
  Globe, 
  Hotel, 
  Dumbbell, 
  Code, 
  Server, 
  Cpu, 
  ShoppingBag, 
  RefreshCw,
  Check,
  ArrowRight
} from 'lucide-vue-next';
import { services, Service } from '../data/services';
import PricingSection from '../components/PricingSection.vue';
import ReadyToLaunchSection from '../components/ReadyToLaunchSection.vue';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useAnalytics } from '../composables/useAnalytics';
import { useScrollAnimation } from '../composables/useScrollAnimation';
import { updateSeo } from '../utils/seo';

const { triggerWhatsApp } = useWhatsApp();
const { trackPageView, trackEvent } = useAnalytics();
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

const requestServiceQuote = (srv: Service) => {
  const text = `Hi Saurabh, I reviewed your "${srv.title}" services on your portfolio and would like to receive a custom quote and timeline scoping for my company. Please share more details.`;
  triggerWhatsApp(text);
  trackEvent('services_page_quote_request', { service_id: srv.id, service_title: srv.title });
};

onMounted(() => {
  updateSeo({
    title: "Client Services | Full-Stack Solutions",
    description: "Read detailed deliverables and capabilities for custom web application development, Laravel backends, Vue.js apps, WordPress shops and landing templates."
  });

  trackPageView('/services', 'Services List - SaurabhTech');

  setupScrollReveal('#services-detailed-grid .p-8');
});
</script>
