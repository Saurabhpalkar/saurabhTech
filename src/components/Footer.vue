<template>
  <footer class="bg-[#060606] border-t border-white/5 pt-16 pb-8 text-gray-500" id="main-footer">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
      <!-- Info Column -->
      <div class="lg:col-span-5 space-y-6">
        <router-link to="/" class="flex items-center space-x-2">
        <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
          <img
            :src="logo"
            alt="SaurabhTech Logo"
            class="w-full h-full object-cover"
          />
        </div>
          <span class="text-white font-bold tracking-tight text-base">SaurabhTech</span>
        </router-link>
        <p class="text-sm text-gray-400 leading-relaxed max-w-sm">
          A premium developer agency specializing in high-performance Laravel backends, interactive Vue.js frontends, and pre-built scalable business websites that convert.
        </p>
        <div class="flex items-center space-x-4">
          <!-- Github -->
          <a href="https://github.com/SaurabhTech" target="_blank" rel="noopener noreferrer" class="p-2 rounded bg-white/5 hover:bg-emerald-500/10 text-gray-400 hover:text-emerald-400 transition-colors" aria-label="GitHub Profile">
            <Github class="w-4 h-4" />
          </a>
          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/saurabh-palkar" target="_blank" rel="noopener noreferrer" class="p-2 rounded bg-white/5 hover:bg-emerald-500/10 text-gray-400 hover:text-emerald-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin class="w-4 h-4" />
          </a>
          <!-- Email link -->
          <a href="mailto:saurabhtech.sp@gmail.com" class="p-2 rounded bg-white/5 hover:bg-emerald-500/10 text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Send Email">
            <Mail class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Quick Links Column -->
      <div class="lg:col-span-2 space-y-4">
        <h4 class="text-xs font-mono uppercase tracking-wider text-white">Sitemap</h4>
        <ul class="space-y-2.5 text-sm">
          <li v-for="link in sitemapLinks" :key="link.path">
            <router-link :to="link.path" class="hover:text-emerald-400 transition-colors">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Solutions/Products Column -->
      <div class="lg:col-span-3 space-y-4">
        <h4 class="text-xs font-mono uppercase tracking-wider text-white">Ready-to-Launch</h4>
        <ul class="space-y-2.5 text-sm">
          <li v-for="prod in prebuiltWebsites" :key="prod">
            <a @click.prevent="scrollToSection('ready-to-launch')" href="#ready-to-launch" class="hover:text-emerald-400 transition-colors">
              {{ prod }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Quick Contact Column -->
      <div class="lg:col-span-2 space-y-4">
        <h4 class="text-xs font-mono uppercase tracking-wider text-white">Contact</h4>
        <ul class="space-y-2 text-sm">
          <li class="text-gray-400 truncate">saurabhtech.sp@gmail.com</li>
          <li class="text-gray-400">+91 74149 09949</li>
          <li class="pt-2">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
              Available Freelance
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider and copyright -->
    <div class="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
      <p>© 2026 SaurabhTech. Engineered with Vue 3 & Tailwind. All rights reserved.</p>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:text-emerald-400 transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="#" class="hover:text-emerald-400 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import logo from '../assets/images/logo.png';

const sitemapLinks = [
  { name: 'Home Landing', path: '/' },
  { name: 'Core Biography', path: '/about' },
  { name: 'Showcase Projects', path: '/projects' },
  { name: 'Client Services', path: '/services' },
  { name: 'Technical Blog', path: '/blog' },
  { name: 'Get in Touch', path: '/contact' }
];

const prebuiltWebsites = [
  "Gym & Fitness Portal",
  "Luxury Hotel Site",
  "Eco-Resort Platform",
  "Restaurant Site",
  "Sleek Business landing"
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/#${id}`;
  }
};
</script>
