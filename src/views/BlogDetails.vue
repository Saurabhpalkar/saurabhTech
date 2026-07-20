<template>
  <div class="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative" id="blog-details-view">
    <div class="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div v-if="!post" class="max-w-7xl mx-auto px-6 py-20 text-center">
      <div class="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto mb-6">
        <AlertTriangle class="w-8 h-8" />
      </div>
      <h1 class="text-2xl font-bold mb-4">Article Not Found</h1>
      <p class="text-gray-400 max-w-md mx-auto mb-8">
        The article you are trying to read does not exist or has been archived.
      </p>
      <router-link 
        to="/blog" 
        class="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs"
      >
        Return to Blog
      </router-link>
    </div>

    <div v-else class="max-w-4xl mx-auto px-6 text-left">
      <!-- Breadcrumbs -->
      <div class="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-8">
        <router-link to="/blog" class="hover:text-emerald-400 transition-colors">Blog</router-link>
        <span>/</span>
        <span class="text-gray-300 truncate">{{ post.title }}</span>
      </div>

      <!-- Article Header details -->
      <div class="space-y-4 mb-8">
        <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
          {{ post.category }}
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
          {{ post.title }}
        </h1>
        <div class="flex items-center space-x-3 text-xs font-mono text-gray-500 pt-2">
          <span>By Saurabh Palkar</span>
          <span>•</span>
          <span>{{ post.date }}</span>
          <span>•</span>
          <span>{{ post.readingTime }}</span>
        </div>
      </div>

      <!-- Hero image -->
      <div class="w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 shadow-2xl mb-12">
        <img 
          :src="post.image" 
          :alt="post.title" 
          class="w-full h-full object-cover filter brightness-[0.85]"
          referrerpolicy="no-referrer"
        />
      </div>

      <!-- Custom High-Performance Prose Article Body -->
      <article class="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-16">
        <div v-for="(block, index) in processedContent" :key="index">
          <!-- Main headings -->
          <h2 v-if="block.type === 'h2'" class="text-2xl font-bold text-white tracking-tight mt-10 mb-4 pb-2 border-b border-white/5">
            {{ block.text }}
          </h2>
          <!-- Sub headings -->
          <h3 v-else-if="block.type === 'h3'" class="text-xl font-bold text-emerald-300 tracking-tight mt-8 mb-3">
            {{ block.text }}
          </h3>
          <!-- Bullet lists -->
          <ul v-else-if="block.type === 'list'" class="space-y-2.5 pl-6 list-disc text-gray-400 my-4">
            <li v-for="(item, iIdx) in block.items" :key="iIdx">
              <span v-html="formatInlineText(item)"></span>
            </li>
          </ul>
          <!-- Standard Paragraph blocks -->
          <p v-else class="text-gray-300" v-html="formatInlineText(block.text)"></p>
        </div>
      </article>

      <!-- Bottom Share & Newsletter CTA -->
      <div class="p-8 sm:p-10 rounded-2xl bg-[#0d0d0d] border border-white/5 text-center space-y-6">
        <h3 class="text-lg font-bold text-white">Enjoyed reading this article?</h3>
        <p class="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          I publish professional analyses regarding web speed, backend safety, and digital leads. Connect with me on LinkedIn to get live article logs or schedule a consultation.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a 
            :href="`https://linkedin.com/in/saurabh-palkar`" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors flex items-center space-x-1.5"
          >
            <Linkedin class="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
          <router-link 
            to="/contact" 
            class="px-5 py-2.5 rounded-lg border border-white/10 hover:border-emerald-500/20 text-white font-semibold text-xs transition-colors"
          >
            Consult SaurabhTech
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AlertTriangle, Linkedin } from 'lucide-vue-next';
import { blogPosts } from '../data/blog';
import { useAnalytics } from '../composables/useAnalytics';
import { updateSeo } from '../utils/seo';

const route = useRoute();
const { trackPageView } = useAnalytics();

const post = computed(() => {
  return blogPosts.find(b => b.id === route.params.id);
});

// A robust lightweight Markdown parser to render structure beautifully without any extra plugin issues
const processedContent = computed(() => {
  if (!post.value) return [];
  
  const rawText = post.value.content.trim();
  const rawBlocks = rawText.split('\n\n');
  const blocks: any[] = [];

  rawBlocks.forEach((block) => {
    const text = block.trim();
    if (!text) return;

    if (text.startsWith('### ')) {
      blocks.push({ type: 'h2', text: text.replace('### ', '') });
    } else if (text.startsWith('#### ')) {
      blocks.push({ type: 'h3', text: text.replace('#### ', '') });
    } else if (text.startsWith('- ')) {
      // It's a list. Gather consecutive bullet elements if any, or just parse single list block
      const items = text.split('\n').map(item => item.replace('- ', '').trim());
      blocks.push({ type: 'list', items });
    } else {
      blocks.push({ type: 'p', text });
    }
  });

  return blocks;
});

// Utility to replace markdown bold (**word**) and inline code (`code`) with standard styled HTML elements safely
const formatInlineText = (text: string) => {
  if (!text) return "";
  
  // Replace double bold **text**
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
  // Replace inline code block `code`
  formatted = formatted.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-[#161616] border border-white/5 font-mono text-emerald-400 text-xs">$1</code>');
  
  return formatted;
};

onMounted(() => {
  if (post.value) {
    updateSeo({
      title: `${post.value.title} | Technical Blog`,
      description: post.value.excerpt,
      image: post.value.image
    });

    trackPageView(`/blog/${post.value.id}`, `${post.value.title} Reading - SaurabhTech`);
  }
});
</script>
