<template>
  <div class="group bg-[#0d0d0d] border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/20 shadow-xl transition-all duration-300 flex flex-col h-full" id="blog-card">
    <!-- Blog Image -->
    <div class="relative aspect-[16/10] overflow-hidden bg-[#111] border-b border-white/5">
      <img 
        :src="post.image" 
        :alt="post.title" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
      <!-- Category Badge -->
      <div class="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-[#0a0a0a]/90 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
        {{ post.category }}
      </div>
    </div>

    <!-- Blog Content -->
    <div class="p-6 flex flex-col flex-grow">
      <!-- Date & Reading Time -->
      <div class="flex items-center space-x-3 text-[11px] font-mono text-gray-500 mb-3">
        <span>{{ post.date }}</span>
        <span class="w-1 h-1 rounded-full bg-gray-700"></span>
        <span>{{ post.readingTime }}</span>
      </div>

      <!-- Title -->
      <h3 class="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-200 line-clamp-2">
        {{ post.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {{ post.excerpt }}
      </p>

      <!-- Read link -->
      <router-link 
        :to="`/blog/${post.id}`" 
        class="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors mt-auto pt-4 border-t border-white/5"
      >
        <span>Read Full Article</span>
        <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ArrowRight } from 'lucide-vue-next';
import profileImage from '../assets/images/logo.png';

defineProps<{
  post: {
    id: string;
    title: string;
    category: string;
    readingTime: string;
    date: string;
    excerpt: string;
    image: string;
  }
}>();
</script>
