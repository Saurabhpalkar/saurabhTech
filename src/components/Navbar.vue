<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-emerald-500/10" id="main-nav">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2 group">
        <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
          <img
            :src="logo"
            alt="SaurabhTech Logo"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-white font-bold tracking-tight text-lg group-hover:text-emerald-400 transition-colors">SaurabhTech</span>
          <span class="text-[10px] font-mono tracking-wider text-emerald-500 uppercase">Agency Profile</span>
        </div>
      </router-link>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-8">
        <router-link 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path" 
          class="text-sm font-medium tracking-wide transition-all duration-200 relative py-2"
          :class="isRouteActive(item.path) ? 'text-emerald-400' : 'text-gray-400 hover:text-white'"
        >
          {{ item.name }}
          <span 
            v-if="isRouteActive(item.path)" 
            class="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          ></span>
        </router-link>
      </div>

      <!-- Desktop CTA & WhatsApp -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link 
          to="/contact" 
          class="px-5 py-2.5 rounded-lg border border-emerald-500/20 text-emerald-400 font-mono text-xs hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          Let's Collaborate
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen" 
        class="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 -translate-y-4"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-4"
    >
      <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-emerald-500/10 px-6 py-6 space-y-4">
        <router-link 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path" 
          @click="isOpen = false"
          class="block text-base font-medium tracking-wide py-2"
          :class="isRouteActive(item.path) ? 'text-emerald-400 font-bold border-l-2 border-emerald-400 pl-3' : 'text-gray-400 hover:text-white pl-3'"
        >
          {{ item.name }}
        </router-link>
        <div class="pt-4 border-t border-emerald-500/10 flex flex-col space-y-3 pl-3">
          <router-link 
            to="/contact" 
            @click="isOpen = false"
            class="text-center px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            Let's Collaborate
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';
import logo from '../assets/images/logo.png';

const route = useRoute();
const isOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const isRouteActive = (path: string) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};
</script>
