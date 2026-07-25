<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative" id="contact-page-view">
    <div class="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">CONNECT</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Start Your Technical Scoping
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          I am available for contract and freelance consultancies. Submit your project requirements to calculate budgets, establish delivery timelines, or schedule a scoping video session.
        </p>
      </div>

      <!-- Content Split Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- Details Column -->
        <div class="lg:col-span-5 space-y-10 text-left">
          <!-- Quick stats list -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                <Mail class="w-5 h-5" />
              </div>
              <div class="space-y-1">
                <h4 class="text-xs font-mono uppercase text-gray-500">Direct Email</h4>
                <a href="mailto:saurabhtech.sp@gmail.com" class="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors">
                  saurabhtech.sp@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                <!-- Custom WhatsApp icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 5.003L2 22l5.161-1.353c1.479.807 3.14 1.233 4.842 1.233 5.507 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm0 1.8c4.516 0 8.188 3.673 8.188 8.188 0 4.516-3.673 8.188-8.188 8.188-1.517 0-2.998-.418-4.282-1.205l-.307-.184-3.042.8 1.13-2.14-.15-.173c-.85-1.34-1.298-2.894-1.298-4.488.001-4.515 3.674-8.188 8.188-8.188z"/>
                </svg>
              </div>
              <div class="space-y-1">
                <h4 class="text-xs font-mono uppercase text-gray-500">WhatsApp Messaging</h4>
                <a @click.prevent="openWhatsAppChat" href="#" class="text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                  +91 74149 09949
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                <Clock class="w-5 h-5" />
              </div>
              <div class="space-y-1">
                <h4 class="text-xs font-mono uppercase text-gray-500">Working Hours</h4>
                <p class="text-sm text-gray-400 font-semibold">
                  Mon - Sat: 09:00 AM - 08:00 PM (IST)
                </p>
              </div>
            </div>
          </div>

          <!-- Social connections panel -->
          <div class="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 space-y-4">
            <h3 class="text-sm font-bold text-white">Let's connect on social media</h3>
            <p class="text-gray-500 text-xs leading-relaxed">
              I share continuous build logs, open-source repositories, and insights on modern tech.
            </p>
            <div class="flex items-center space-x-3">
              <a href="https://github.com/SaurabhTech" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#161616] border border-white/5 text-gray-400 hover:text-white transition-all text-xs font-mono">
                <Github class="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/saurabh-palkar" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#161616] border border-white/5 text-gray-400 hover:text-white transition-all text-xs font-mono">
                <Linkedin class="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Interactive Form Column -->
        <div class="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Mail, Clock, Github, Linkedin } from 'lucide-vue-next';
import { useWhatsApp } from '../composables/useWhatsApp';
import { useAnalytics } from '../composables/useAnalytics';
import { updateSeo } from '../utils/seo';

// Import child component
import ContactForm from '../components/ContactForm.vue';

const { triggerWhatsApp } = useWhatsApp();
const { trackPageView, trackEvent } = useAnalytics();

const openWhatsAppChat = () => {
  const message = "Hi Saurabh, I would like to discuss a website project.";
  triggerWhatsApp(message);
  trackEvent('contact_page_whatsapp_click');
};

onMounted(() => {
  updateSeo({
    title: "Contact SaurabhTech | Scoping Sheet",
    description: "Connect with Saurabh Palkar. Submit custom scoping requirements for Laravel apps, Vue.js portals or request immediate prebuilt designs."
  });

  trackPageView('/contact', 'Contact Form - SaurabhTech');
});
</script>
