<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="ready-to-launch-websites">
    <div class="absolute top-[15%] right-[-10%] w-[280px] h-[280px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">Ready-to-Launch Websites</span>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Premium website designs that can be customized for your business and launched faster.</h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="site in readyToLaunchSites"
          :key="site.id"
          class="launch-card flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(16,185,129,0.12)]"
        >
          <div class="relative h-[220px] overflow-hidden bg-[#111] sm:h-[240px]">
            <img
              :src="site.image"
              :alt="site.title"
              class="h-full w-full object-cover object-center"
              loading="lazy"
              referrerpolicy="no-referrer"
            />
          </div>

          <div class="flex flex-1 flex-col gap-4 p-6">
            <div class="flex items-center justify-between gap-3">
              <span class="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-400">{{ site.category }}</span>
              <span class="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-300">
                {{ site.price }}
              </span>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white leading-snug">{{ site.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-400">{{ site.description }}</p>
            </div>

            <div class="mt-auto space-y-3">
              <a
                :href="site.liveDemoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-200 transition duration-200 hover:border-emerald-400/30 hover:bg-emerald-500/10"
              >
                View Demo
              </a>
              <button
                @click="requestWebsite(site.message)"
                type="button"
                class="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-emerald-400"
              >
                Request This Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { readyToLaunchSites } from '../data/pricing';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const { triggerWhatsApp } = useWhatsApp();
const { setupScrollReveal } = useScrollAnimation();

const requestWebsite = (message: string) => {
  triggerWhatsApp(message);
};

onMounted(() => {
  setupScrollReveal('#ready-to-launch-websites .launch-card');
});
</script>
