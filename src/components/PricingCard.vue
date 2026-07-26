<template>
  <div :class="cardClasses" class="pricing-card group relative flex h-full flex-col rounded-[1.75rem] border p-8 transition-all duration-300">
    <div class="flex items-center justify-between gap-4 mb-6">
      <span class="text-xs font-mono uppercase tracking-[0.28em] text-emerald-400">{{ plan.name }}</span>
      <span
        v-if="plan.popular"
        class="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300"
      >
        MOST POPULAR
      </span>
    </div>

    <div class="mb-6">
      <div class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">{{ plan.price }}</div>
      <p class="mt-4 text-sm leading-relaxed text-gray-400">{{ plan.description }}</p>
    </div>

    <div class="space-y-3 mb-8">
      <div
        v-for="feature in plan.features"
        :key="feature"
        class="flex items-start gap-3 text-sm text-gray-300"
      >
        <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        <span>{{ feature }}</span>
      </div>
    </div>

    <button
      @click="onAction"
      type="button"
      class="mt-auto inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
    >
      {{ plan.ctaText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { PricingPlan } from '../data/pricing';

const props = defineProps<{
  plan: PricingPlan;
  onAction: () => void;
}>();

const cardClasses = computed(() => {
  return props.plan.popular
    ? 'bg-[#092118] border-emerald-400/30 shadow-[0_25px_70px_rgba(16,185,129,0.16)] scale-[1.01]'
    : 'bg-[#0d0d0d] border-white/10 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]';
});
</script>
