<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative">
    <div class="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Biography Header -->
      <div class="max-w-3xl mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">BIOGRAPHY</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Saurabh Palkar
        </h1>
        <p class="text-emerald-400/80 font-mono text-sm uppercase tracking-wider mb-8">
          PHP Full-Stack Developer & Creator of SaurabhTech
        </p>
        <p class="text-gray-400 text-lg leading-relaxed">
          Based in India, I engineer secure, lightweight web applications and convert strategic business models into custom digital realities. I have a passion for SQL architecture, MVC principles, and modular client interfaces.
        </p>
      </div>

      <!-- Core About Detail Blocks (Grid) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
        <!-- Photo and stats panel -->
        <div class="lg:col-span-5 flex flex-col items-center">
          <div class="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] overflow-hidden rounded-3xl border border-emerald-500/20 shadow-2xl mb-8">
            <img 
              :src="profileImage" 
              alt="Saurabh Palkar" 
              class="w-full h-full object-cover filter brightness-[0.95]"
              referrerpolicy="no-referrer"
            />
          </div>

          <div class="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 w-full max-w-[320px] text-center space-y-4">
            <h4 class="text-sm font-mono uppercase text-gray-500">Professional Mission</h4>
            <p class="text-xs text-gray-400 leading-relaxed">
              "To eliminate manual business bottlenecks through clean software engineering and provide high-value, direct developer-to-client delivery."
            </p>
          </div>
        </div>

        <!-- Mindset & Focus Content -->
        <div class="lg:col-span-7 space-y-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">My Engineering Standards</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="p-6 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/10 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Database class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-white mb-2">Relational Safety</h3>
              <p class="text-xs text-gray-500 leading-relaxed">
                Database indexing, normalization, transaction boundaries, and raw query speed profiling are critical. No messy structures.
              </p>
            </div>

            <div class="p-6 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/10 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-white mb-2">Security Enforcement</h3>
              <p class="text-xs text-gray-500 leading-relaxed">
                Hashing credentials with bcrypt, protecting against SQL injection via Eloquent/PDO, and implementing multi-layered JWT session guards.
              </p>
            </div>

            <div class="p-6 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/10 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Layers class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-white mb-2">Modular UI Compositions</h3>
              <p class="text-xs text-gray-500 leading-relaxed">
                Granular single-file Vue components, optimized state tracking, and light responsive styles using Tailwind utilities.
              </p>
            </div>

            <div class="p-6 rounded-xl bg-[#0d0d0d] border border-white/5 hover:border-emerald-500/10 transition-colors">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Workflow class="w-5 h-5" />
              </div>
              <h3 class="text-base font-bold text-white mb-2">Bespoke Workflows</h3>
              <p class="text-xs text-gray-500 leading-relaxed">
                Direct WhatsApp booking pipelines, automatic PDF invoicing, secure SMS reminders, and seamless calendar slot scheduling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline included natively on About page -->
      <ExperienceTimeline class="!border-none" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Database, ShieldCheck, Layers, Workflow } from 'lucide-vue-next';
import { updateSeo } from '../utils/seo';
import { useAnalytics } from '../composables/useAnalytics';
import profileImage from '../assets/images/saurabh_profile_1784564740349.jpg';

// Import timeline component
import ExperienceTimeline from '../components/ExperienceTimeline.vue';

const { trackPageView } = useAnalytics();

onMounted(() => {
  updateSeo({
    title: "About Saurabh Palkar | SaurabhTech Biography",
    description: "Read the biography, technical mindset, software standards, and professional history of Saurabh Palkar, founder of SaurabhTech."
  });

  trackPageView('/about', 'About - SaurabhTech Profile');
});
</script>
