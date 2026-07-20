<template>
  <div class="fixed bottom-6 right-6 z-40" id="whatsapp-floating">
    <!-- Tooltip -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-2 opacity-0"
    >
      <div 
        v-if="showTooltip" 
        class="absolute bottom-16 right-0 bg-[#0d0d0d] border border-emerald-500/20 px-4 py-2.5 rounded-xl shadow-2xl text-xs text-white font-mono whitespace-nowrap mb-2 shadow-emerald-500/5 flex items-center space-x-2"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>Chat with SaurabhTech</span>
      </div>
    </transition>

    <!-- Glowing Wave Ring -->
    <div class="absolute -inset-1 bg-emerald-400/20 rounded-full blur animate-ping pointer-events-none"></div>

    <!-- Main Button -->
    <button 
      @click="openWhatsAppChat"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_4px_25px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <!-- Custom vector WhatsApp SVG path (Clean) -->
      <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 5.003L2 22l5.161-1.353c1.479.807 3.14 1.233 4.842 1.233 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm0 1.8c4.516 0 8.188 3.673 8.188 8.188 0 4.516-3.673 8.188-8.188 8.188-1.517 0-2.998-.418-4.282-1.205l-.307-.184-3.042.8 1.13-2.14-.15-.173c-.85-1.34-1.298-2.894-1.298-4.488.001-4.515 3.674-8.188 8.188-8.188zm-3.522 3.11c-.194 0-.39.019-.553.078-.266.094-.522.254-.7.473-.314.385-.563.843-.563 1.343 0 .762.33 1.514.868 2.253.948 1.303 2.2 2.378 3.518 3.118.528.297.994.484 1.436.621.41.127.817.113 1.157.062.373-.055.76-.255.986-.532.226-.277.29-.575.29-.824 0-.156-.05-.296-.096-.347-.075-.083-.342-.232-.612-.355-.27-.123-1.042-.513-1.201-.572-.158-.06-.275-.088-.393.088-.118.175-.461.58-.565.698-.103.117-.207.13-.374.048-.166-.082-.702-.259-1.338-.826-.495-.441-.83-.986-.927-1.151-.097-.165-.01-.255.073-.337.075-.074.166-.194.25-.291.082-.097.11-.165.166-.277.055-.11.027-.207-.014-.29-.041-.082-.393-.948-.539-1.3-.142-.344-.287-.297-.393-.297z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useAnalytics } from '../composables/useAnalytics';

const { triggerWhatsApp } = useWhatsApp();
const { trackEvent } = useAnalytics();

const showTooltip = ref(false);

const openWhatsAppChat = () => {
  const message = "Hi Saurabh, I would like to discuss a website project.";
  triggerWhatsApp(message);
  trackEvent('whatsapp_floating_click');
};

onMounted(() => {
  // Show tooltip momentarily on load to attract attention
  setTimeout(() => {
    showTooltip.value = true;
    setTimeout(() => {
      showTooltip.value = false;
    }, 4000);
  }, 2000);
});
</script>
