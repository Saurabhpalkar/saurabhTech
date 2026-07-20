<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white font-sans flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-300">
    <!-- Navbar -->
    <Navbar />

    <!-- Core View Router with premium transition effects -->
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition 
          name="fade-slide" 
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Floating WhatsApp -->
    <WhatsAppButton />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
/* Page transition slide & fade styles */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Scroll smooth fallback if lenis disabled */
html {
  scroll-behavior: smooth;
  overflow-y: scroll;
}

/* Custom lenis smooth scroll support */
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overflow: clip;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
import Lenis from 'lenis';

onMounted(() => {
  // Initialize Lenis Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo easing
    infinite: false,
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
});
</script>
