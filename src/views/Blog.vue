<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative" id="blog-page-view">
    <div class="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">MY BLOG & LOGS</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Technical Writing & Industry Insights
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed">
          I write about web performance, Laravel backend security patterns, Vue 3 Composition practices, and practical digital blueprints for small business owners.
        </p>
      </div>

      <!-- Search and Filter Bar -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12 items-center">
        <!-- Search -->
        <div class="md:col-span-4">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search articles (e.g. Laravel)..." 
            class="w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/30 transition-colors text-sm font-mono"
          />
        </div>

        <!-- Categories horizontal selection -->
        <div class="md:col-span-8 flex flex-wrap gap-1.5 md:justify-end">
          <button 
            v-for="cat in ['All', 'Development Process', 'Backend', 'Frontend', 'Engineering', 'Business', 'Design']" 
            :key="cat"
            @click="selectedCategory = cat"
            class="px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all"
            :class="selectedCategory === cat ? 'bg-emerald-500/10 border border-emerald-400/40 text-emerald-400' : 'bg-transparent text-gray-500 border border-transparent hover:text-white'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- No articles found -->
      <div v-if="filteredPosts.length === 0" class="py-20 text-center border border-white/5 rounded-2xl bg-[#0d0d0d]">
        <span class="text-4xl">🔍</span>
        <h3 class="text-lg font-bold text-white mt-4 mb-2">No Articles Match Your Search</h3>
        <p class="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
          Try typing different keywords or clearing the category filters to discover published tech articles.
        </p>
      </div>

      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid-list">
        <div 
          v-for="post in filteredPosts" 
          :key="post.id"
          class="blog-detail-card"
        >
          <BlogCard :post="post" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { blogPosts } from '../data/blog';
import { useAnalytics } from '../composables/useAnalytics';
import { useScrollAnimation } from '../composables/useScrollAnimation';
import { updateSeo } from '../utils/seo';

// Import child component
import BlogCard from '../components/BlogCard.vue';

const { trackPageView } = useAnalytics();
const { setupScrollReveal } = useScrollAnimation();

const searchQuery = ref('');
const selectedCategory = ref('All');

const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = selectedCategory.value === 'All' || post.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  updateSeo({
    title: "Technical Writing Blog | Engineering Logs",
    description: "Browse software articles written by Saurabh Palkar. Covering topics like Laravel security, WebSockets, Vue 3, and conversion design."
  });

  trackPageView('/blog', 'Blog Index - SaurabhTech');

  setupScrollReveal('#blog-grid-list .blog-detail-card');
});
</script>
