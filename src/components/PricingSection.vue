<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="pricing-section">
    <div class="absolute top-[10%] left-[-10%] w-[320px] h-[320px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">Pricing Plans</span>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Premium Website Plans for Growing Businesses</h2>
        <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
          Transparent starting prices for website builds, with custom scoped quotes available for projects that need more depth, automation, or backend workflows.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 xl:grid-cols-3" id="pricing-cards-grid">
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.id"
          :plan="plan"
          :onAction="() => requestPlan(plan.message)"
          class="pricing-card"
        />
      </div>

      <div class="mt-10 max-w-3xl mx-auto text-center text-sm text-gray-500">
        Final pricing depends on project requirements, features, integrations and scope.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import PricingCard from './PricingCard.vue';
import { pricingPlans } from '../data/pricing';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const { triggerWhatsApp } = useWhatsApp();
const { setupScrollReveal } = useScrollAnimation();

const requestPlan = (message: string) => {
  triggerWhatsApp(message);
};

onMounted(() => {
  setupScrollReveal('#pricing-cards-grid .pricing-card');
});
</script>
