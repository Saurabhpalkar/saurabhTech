<template>
  <section class="py-24 bg-[#0a0a0a] border-t border-emerald-500/5 relative overflow-hidden" id="experience-section">
    <div class="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span class="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">My Journey</span>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Professional Experience Timeline
        </h2>
        <p class="text-gray-400 text-sm sm:text-base">
          A track record of delivering secure backends, interactive frontends, and reliable web applications over the past 3+ years.
        </p>
      </div>

      <!-- Timeline Structure -->
      <div class="relative border-l border-emerald-500/20 max-w-4xl mx-auto pl-8 sm:pl-12 space-y-16">
        
        <!-- Timeline Item 1 -->
        <div 
          v-for="(job, index) in timelineJobs" 
          :key="index"
          class="relative group timeline-item"
        >
          <!-- Timeline Indicator Node -->
          <div class="absolute -left-[41px] sm:-left-[57px] top-1 w-5 h-5 rounded-full bg-black border border-emerald-500 flex items-center justify-center group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-colors duration-300">
            <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-black"></div>
          </div>

          <!-- Timeline content card -->
          <div class="p-6 sm:p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 group-hover:border-emerald-500/20 shadow-xl transition-all duration-300">
            <!-- Period and company -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span class="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
                  {{ job.period }}
                </span>
              </div>
              <div class="text-xs font-mono text-gray-500">{{ job.location }}</div>
            </div>

            <!-- Role Title and Company Name -->
            <h3 class="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
              {{ job.role }}
            </h3>
            <p class="text-emerald-400/80 font-semibold text-sm mb-6">{{ job.company }}</p>

            <!-- Responsibilities -->
            <ul class="space-y-3 mb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
              <li 
                v-for="(task, tIdx) in job.tasks" 
                :key="tIdx" 
                class="flex items-start space-x-2"
              >
                <span class="text-emerald-500 mt-1.5 font-mono text-xs">•</span>
                <span>{{ task }}</span>
              </li>
            </ul>

            <!-- Technologies utilized -->
            <div class="pt-4 border-t border-white/5">
              <span class="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-2">Technologies Used</span>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tech in job.techStack" 
                  :key="tech"
                  class="px-2 py-1 rounded bg-[#161616] border border-white/5 text-[10px] font-mono text-gray-400"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const { setupScrollReveal } = useScrollAnimation();

const timelineJobs = [
  {
    period: "Jan 2024 - Present",
    location: "Remote / India",
    role: "Lead Full-Stack Developer & Solutions Architect",
    company: "SaurabhTech (Freelance Business Agency)",
    tasks: [
      "Engineered high-performance custom Web Applications (such as eGram Panchayat and SyncTalk Chat) using Laravel backends and Vue.js frontends.",
      "Successfully launched 15+ business-focused websites (Gym, Hotels, Eco-Resorts) for direct booking leads, cutting client dependencies on OTA commission portals by up to 25%.",
      "Built highly optimized MySQL relational schemas with advanced index mapping, maintaining fast query execution times under 50ms.",
      "Configured Docker containers for consistent staging environments and automated server script routing templates."
    ],
    techStack: ["PHP", "Laravel", "Vue.js 3", "MySQL", "WebSockets", "Docker", "Tailwind CSS", "WordPress", "Git"]
  },
  {
    period: "Jul 2023 - Dec 2023",
    location: "Pune, India",
    role: "Full-Stack Developer (Consultant)",
    company: "Regional Technology Solutions Studio",
    tasks: [
      "Consulted on major enterprise redesigns, modernizing heavy jQuery codebases into responsive, modular layouts utilizing Tailwind CSS and component structures.",
      "Created highly accessible government service portals and bilingual citizen registration workflows, emphasizing English-to-Marathi localized menus.",
      "Developed secure RESTful API integrations with third-party verification portals and payment processors with reliable retry log systems."
    ],
    techStack: ["Core PHP", "Laravel", "JavaScript", "MySQL", "Tailwind CSS", "Bootstrap", "Git"]
  },
  {
    period: "Jan 2023 - Jun 2023",
    location: "Mumbai, India",
    role: "Junior Web Application Developer",
    company: "Creative Design & Web Studio",
    tasks: [
      "Authored custom WordPress themes, WooCommerce stores, and individual landing page assets.",
      "Coded responsive class timetables, direct contact forms, image galleries, and animated visual carousels.",
      "Tested codebases across multiple modern browsers and mobile devices, optimizing mobile touch targets (44px) and focus layouts."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress", "Core PHP", "WooCommerce"]
  }
];

onMounted(() => {
  setupScrollReveal('#experience-section h2');
  setupScrollReveal('.timeline-item');
});
</script>
