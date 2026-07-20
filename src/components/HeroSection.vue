<template>
  <section class="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0a0a0a]" id="hero-section">
    <!-- Three.js Canvas Background -->
    <div ref="canvasContainer" class="absolute inset-0 pointer-events-none opacity-40 z-0"></div>

    <!-- Background Ambient Gradients -->
    <div class="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Content Column -->
      <div class="lg:col-span-7 flex flex-col items-start text-left hero-text-container">
        <!-- Badge label -->
        <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>PHP Full-Stack Developer</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-sans">
          Building Digital Experiences <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 filter drop-shadow-[0_2px_10px_rgba(16,185,129,0.2)]">
            That Move Businesses Forward.
          </span>
        </h1>

        <!-- Supporting Text -->
        <p class="text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10">
          I design and develop high-performance websites, custom web applications, and scalable digital solutions under my personal brand, <span class="text-white font-semibold">SaurabhTech</span>, helping ambitious businesses grow.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
          <router-link 
            to="/projects" 
            class="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-center transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5"
            @click="trackCta('view_work')"
          >
            View My Work
          </router-link>

          <router-link 
            to="/contact" 
            class="px-8 py-4 rounded-xl border border-white/10 hover:border-emerald-500/30 text-white font-semibold text-center hover:bg-emerald-500/5 transition-all duration-300 transform hover:-translate-y-0.5"
            @click="trackCta('contact_me')"
          >
            Let's Work Together
          </router-link>
        </div>

        <!-- Ready to Launch Quick CTA -->
        <button 
          @click="scrollToReadyToLaunch"
          class="flex items-center space-x-2 text-xs font-mono text-emerald-400/80 hover:text-emerald-400 transition-colors group"
        >
          <span>Explore Ready-to-Launch Websites</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <!-- Right Visual Column (Profile image + Floating Tech Badges) -->
      <div 
        class="lg:col-span-5 relative flex justify-center items-center h-[450px] sm:h-[550px]"
        @mousemove="handleParallax"
        @mouseleave="resetParallax"
      >
        <!-- Circle Backing and Glow -->
        <div class="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-emerald-500/5 border border-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.05)] animate-pulse"></div>

        <!-- Styled Asymmetric Profile Container -->
        <div 
          class="relative w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] overflow-hidden rounded-3xl border-2 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 transform"
          :style="{ transform: `translate3d(${offsetX * 15}px, ${offsetY * 15}px, 0px) rotateX(${-offsetY * 8}deg) rotateY(${offsetX * 8}deg)` }"
        >
          <!-- Gradient Border Overlay (Floating animation) -->
          <div class="absolute inset-0 bg-gradient-to-t from-emerald-500/40 via-transparent to-transparent opacity-60 pointer-events-none z-10"></div>
          
          <img 
            :src="profileImage" 
            alt="Saurabh Palkar - SaurabhTech Profile Picture" 
            class="w-full h-full object-cover select-none pointer-events-none"
            referrerpolicy="no-referrer"
          />
        </div>

        <!-- Floating Technology Badges with Individual Parallax Speed -->
        <div 
          v-for="(badge, index) in techBadges" 
          :key="badge.name" 
          class="absolute px-3 py-1.5 rounded-lg bg-[#0e0e0e]/90 border border-emerald-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center space-x-1.5 font-mono text-xs text-white pointer-events-none select-none"
          :style="getBadgeStyle(badge, index)"
        >
          <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: badge.color }"></span>
          <span>{{ badge.name }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll Down indicator -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 z-10">
      <span class="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">Scroll Down</span>
      <div class="w-5 h-8 rounded-full border border-gray-700 p-1 flex justify-center">
        <div class="w-1.5 h-2 rounded-full bg-emerald-400 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ArrowRight } from 'lucide-vue-next';
import { useAnalytics } from '../composables/useAnalytics';
import profileImage from '../assets/images/saurabh_profile_1784564740349.jpg';
import gsap from 'gsap';
import * as THREE from 'three';

const { trackEvent } = useAnalytics();

const canvasContainer = ref<HTMLDivElement | null>(null);
const offsetX = ref(0);
const offsetY = ref(0);

// Three.js variables
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let particleSystem: THREE.Points;
let animationId: number;

const techBadges = [
  { name: 'PHP', top: '15%', left: '5%', color: '#777bb4', depth: 1.5 },
  { name: 'Laravel', top: '35%', right: '0%', color: '#ff2d20', depth: 2.2 },
  { name: 'Vue.js', bottom: '15%', left: '0%', color: '#41b883', depth: 1.8 },
  { name: 'JavaScript', top: '10%', right: '10%', color: '#f7df1e', depth: 2.0 },
  { name: 'MySQL', bottom: '25%', right: '5%', color: '#00758f', depth: 1.4 },
  { name: 'WordPress', bottom: '8%', right: '35%', color: '#21759b', depth: 2.1 },
  { name: 'Docker', top: '50%', left: '-5%', color: '#2496ed', depth: 1.6 }
];

const trackCta = (action: string) => {
  trackEvent('hero_cta_click', { action_type: action });
};

const handleParallax = (e: MouseEvent) => {
  if (typeof window === "undefined") return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  // Calculate relative coordinate between -0.5 and 0.5
  offsetX.value = (e.clientX / width) - 0.5;
  offsetY.value = (e.clientY / height) - 0.5;
};

const resetParallax = () => {
  offsetX.value = 0;
  offsetY.value = 0;
};

const getBadgeStyle = (badge: any, index: number) => {
  const hoverX = offsetX.value * badge.depth * 35;
  const hoverY = offsetY.value * badge.depth * 35;
  
  // Base floating offset using a sine wave
  const baseFloat = Math.sin((index * 1.5) + Date.now() / 2000) * 8;

  return {
    top: badge.top,
    left: badge.left,
    right: badge.right,
    bottom: badge.bottom,
    transform: `translate3d(${hoverX}px, ${hoverY + baseFloat}px, 0px)`
  };
};

const scrollToReadyToLaunch = () => {
  const el = document.getElementById('ready-to-launch');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    trackEvent('ready_to_launch_scroll_click');
  } else {
    // If not on same page, redirect
    window.location.href = '/#ready-to-launch';
  }
};

onMounted(() => {
  // GSAP Entry Animation
  gsap.from('.hero-text-container > *', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  // Three.js Abstract Particle System Initialization
  if (canvasContainer.value) {
    const width = canvasContainer.value.clientWidth || window.innerWidth;
    const height = canvasContainer.value.clientHeight || window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 30;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.value.appendChild(renderer.domElement);

    // Particle geometry
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Create particle points in a spherical/cloud structure
      const r = 15 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);

      // Neon green / emerald shade points
      colors[i] = 0.05 + Math.random() * 0.1; // Low Red
      colors[i + 1] = 0.6 + Math.random() * 0.4; // High Green (emerald)
      colors[i + 2] = 0.3 + Math.random() * 0.3; // Medium Teal
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Simple round texture
    const pMaterial = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    // Animation Loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Slow spinning movement
      particleSystem.rotation.y += 0.0015;
      particleSystem.rotation.x += 0.0005;

      // Mouse interactive tilt in ThreeJS
      particleSystem.rotation.y += (offsetX.value * 0.2 - particleSystem.rotation.y) * 0.05;
      particleSystem.rotation.x += (offsetY.value * 0.2 - particleSystem.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!canvasContainer.value) return;
      const w = canvasContainer.value.clientWidth;
      const h = canvasContainer.value.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  if (renderer) {
    renderer.dispose();
  }
});
</script>
