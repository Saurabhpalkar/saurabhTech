<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="about-section">
    <div class="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <!-- Left Image & Stats Column -->
        <div class="lg:col-span-5 flex flex-col items-center">
          <!-- Premium Portrait Frame -->
          <div class="relative w-[280px] sm:w-[340px] h-[320px] sm:h-[400px] mb-12">
            <!-- Asymmetric back block -->
            <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-3xl opacity-10 blur-xl"></div>
            <!-- Animated glowing borders -->
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div class="relative w-full h-full bg-[#111] rounded-3xl border border-emerald-500/20 overflow-hidden shadow-2xl">
              <img 
                :src="profileImage" 
                alt="Saurabh Palkar" 
                class="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4 w-full max-w-[340px]" ref="statsContainer">
            <div class="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5 flex flex-col items-center text-center">
              <span class="text-3xl font-extrabold text-white font-sans">
                <span class="text-emerald-400">3+</span>
              </span>
              <span class="text-[11px] font-mono uppercase tracking-wider text-gray-500 mt-2">Years Experience</span>
            </div>

            <div class="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5 flex flex-col items-center text-center">
              <span class="text-3xl font-extrabold text-white font-sans">
                <span class="text-emerald-400">20+</span>
              </span>
              <span class="text-[11px] font-mono uppercase tracking-wider text-gray-500 mt-2">Projects Logged</span>
            </div>

            <div class="p-4 rounded-2xl bg-[#0f0f0f] border border-white/5 flex flex-col items-center text-center col-span-2">
              <span class="text-lg font-bold text-white font-sans">Full-Stack Engineer</span>
              <span class="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mt-1">PHP / Laravel / Vue.js</span>
            </div>
          </div>
        </div>

        <!-- Right Content Column -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">ABOUT THE DEVELOPER</span>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Pioneering Efficient Digital Architectures
          </h2>

          <div class="space-y-6 text-gray-400 text-base sm:text-lg font-normal leading-relaxed">
            <p>
              I am <span class="text-white font-semibold">Saurabh Palkar</span>, a PHP Full-Stack Developer and the creator of <span class="text-emerald-400 font-semibold font-mono">SaurabhTech</span>.
            </p>
            <p>
              I specialize in building modular web systems, custom business portals, and fluid single-page interfaces using technologies like <span class="text-white">PHP, Laravel, Vue.js, JavaScript, MySQL, and WordPress</span>.
            </p>
            <p>
              My philosophy centers around structural precision. Coding isn't just writing syntax—it's analyzing a friction point in a business, designing a secure database layout, and shipping an optimized interface that saves users time and grows revenues.
            </p>
          </div>

          <!-- Key Values / Philosophy List -->
          <div class="mt-8 space-y-4 w-full">
            <div class="flex items-start space-x-3">
              <div class="mt-1 w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Check class="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 class="text-sm font-semibold text-white">Business-Focused Execution</h4>
                <p class="text-xs text-gray-500">I construct systems with specific business metrics in mind (leads, load speed, secure logs).</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="mt-1 w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Check class="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 class="text-sm font-semibold text-white">Strict Clean-Code Habits</h4>
                <p class="text-xs text-gray-500">Adhering to SOLID principles, standardized migrations, and granular Vue components.</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="mt-1 w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Check class="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 class="text-sm font-semibold text-white">Direct client collaboration</h4>
                <p class="text-xs text-gray-500">No agencies middlemen. Direct access to developer logs, scoping, and deployment phases.</p>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="mt-10 flex items-center space-x-4">
            <router-link 
              to="/services" 
              class="px-6 py-3 rounded-lg border border-emerald-500/20 text-emerald-400 font-mono text-xs hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 shadow-md"
            >
              Analyze Services
            </router-link>
            <router-link 
              to="/contact" 
              class="text-xs text-white hover:text-emerald-400 font-mono tracking-wider transition-colors flex items-center space-x-1"
            >
              <span>Get in Touch</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Check, ArrowRight } from 'lucide-vue-next';
import profileImage from '../assets/images/saurabh_profile_1784564740349.jpg';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const { setupScrollReveal } = useScrollAnimation();

onMounted(() => {
  setupScrollReveal('#about-section h2');
  setupScrollReveal('#about-section p');
  setupScrollReveal('#about-section .relative');
});
</script>
