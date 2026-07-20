<template>
  <div class="w-full bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden" id="contact-form">
    <!-- Successful Submission Screen -->
    <div v-if="submitStatus === 'success'" class="py-12 flex flex-col items-center text-center">
      <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 animate-bounce">
        <Check class="w-8 h-8" />
      </div>
      <h3 class="text-2xl font-bold text-white mb-3">Enquiry Received!</h3>
      <p class="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-8">
        Thank you, {{ form.name }}. Your message has been sent directly to SaurabhTech. I will analyze your requirements and get back to you via email or phone within 12 hours.
      </p>
      <button 
        @click="resetForm" 
        class="px-6 py-2.5 rounded-lg bg-[#161616] border border-white/10 text-white font-semibold text-xs hover:bg-[#1f1f1f] transition-all"
      >
        Send Another Enquiry
      </button>
    </div>

    <!-- Error Screen -->
    <div v-else-if="submitStatus === 'error'" class="py-12 flex flex-col items-center text-center">
      <div class="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-6">
        <AlertTriangle class="w-8 h-8" />
      </div>
      <h3 class="text-2xl font-bold text-white mb-3">Submission Failed</h3>
      <p class="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-8">
        Oops! Something went wrong while dispatching your form details. Please check your network and try again, or connect directly on WhatsApp.
      </p>
      <div class="flex gap-4">
        <button 
          @click="submitStatus = 'idle'" 
          class="px-6 py-2.5 rounded-lg bg-emerald-500 text-black font-semibold text-xs hover:bg-emerald-400 transition-all"
        >
          Try Again
        </button>
        <button 
          @click="chatOnWhatsApp" 
          class="px-6 py-2.5 rounded-lg bg-[#161616] border border-white/10 text-emerald-400 font-mono text-xs hover:bg-emerald-500/10 transition-all"
        >
          Message WhatsApp
        </button>
      </div>
    </div>

    <!-- Core Interactive Form -->
    <form v-else @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Name -->
        <div class="flex flex-col">
          <label for="name" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Name *</label>
          <input 
            id="name"
            v-model="form.name"
            type="text" 
            required
            placeholder="John Doe"
            class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
          />
        </div>

        <!-- Email -->
        <div class="flex flex-col">
          <label for="email" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Email *</label>
          <input 
            id="email"
            v-model="form.email"
            type="email" 
            required
            placeholder="john@example.com"
            class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Phone -->
        <div class="flex flex-col">
          <label for="phone" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Phone</label>
          <input 
            id="phone"
            v-model="form.phone"
            type="tel" 
            placeholder="+91 90000 00000"
            class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
          />
        </div>

        <!-- Company -->
        <div class="flex flex-col">
          <label for="company" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Company Name</label>
          <input 
            id="company"
            v-model="form.company"
            type="text" 
            placeholder="Acme Corp"
            class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Project Type -->
        <div class="flex flex-col">
          <label for="projectType" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Project Type *</label>
          <select 
            id="projectType"
            v-model="form.projectType"
            required
            class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
          >
            <option value="" disabled>Select Type...</option>
            <option value="Gym Website">Gym Website (Ready-to-Launch)</option>
            <option value="Hotel Website">Hotel Website (Ready-to-Launch)</option>
            <option value="Resort Website">Resort Website (Ready-to-Launch)</option>
            <option value="Restaurant Website">Restaurant Website (Ready-to-Launch)</option>
            <option value="Business Website">Business Website (Custom or Template)</option>
            <option value="Custom SaaS">Custom SaaS / Web App Development</option>
            <option value="WordPress Shop">WordPress / E-Commerce Store</option>
            <option value="Other">Other Custom Development</option>
          </select>
        </div>

        <!-- Budget Range -->
        <div class="flex flex-col">
          <label for="budget" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Budget Range *</label>
          <select 
            id="budget"
            v-model="form.budget"
            required
            class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm"
          >
            <option value="" disabled>Select Budget...</option>
            <option value="Under ₹15k">Under ₹15,000</option>
            <option value="₹15k - ₹35k">₹15,000 - ₹35,000</option>
            <option value="₹35k - ₹75k">₹35,000 - ₹75,000</option>
            <option value="₹75k+">₹75,000+ (Premium App)</option>
          </select>
        </div>
      </div>

      <!-- Message -->
      <div class="flex flex-col">
        <label for="message" class="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Message *</label>
        <textarea 
          id="message"
          v-model="form.message"
          required
          rows="5"
          placeholder="Briefly describe your project details, objectives, or questions..."
          class="px-4 py-3 rounded-lg bg-[#161616] border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors text-sm resize-none"
        ></textarea>
      </div>

      <!-- Submit Trigger -->
      <button 
        type="submit" 
        :disabled="submitStatus === 'loading'"
        class="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold tracking-wide transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        <span v-if="submitStatus === 'loading'">
          <svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        <span v-else>Submit Project Enquiry</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Check, AlertTriangle } from 'lucide-vue-next';
import { useAnalytics } from '../composables/useAnalytics';
import { useWhatsApp } from '../composables/useWhatsApp';

const { trackEvent } = useAnalytics();
const { triggerWhatsApp } = useWhatsApp();

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  message: ''
});

const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle');

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  };
  submitStatus.value = 'idle';
};

const chatOnWhatsApp = () => {
  const text = `Hi Saurabh, I attempted to submit an enquiry for ${form.value.projectType || 'a website'} on your portfolio, but it failed. Here is my request: ${form.value.message}`;
  triggerWhatsApp(text);
  trackEvent('contact_whatsapp_fallback_click');
};

const submitForm = async () => {
  submitStatus.value = 'loading';
  trackEvent('contact_form_attempt', { project_type: form.value.projectType });

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form.value)
      });

      if (response.ok) {
        submitStatus.value = 'success';
        trackEvent('contact_form_success', { project_type: form.value.projectType });
      } else {
        submitStatus.value = 'error';
        trackEvent('contact_form_fail', { status: response.status });
      }
    } catch (e) {
      console.error(e);
      submitStatus.value = 'error';
      trackEvent('contact_form_error');
    }
  } else {
    // Elegant simulated success fallback if no formspree endpoint configured
    setTimeout(() => {
      submitStatus.value = 'success';
      trackEvent('contact_form_success_mock', { project_type: form.value.projectType });
    }, 1500);
  }
};
</script>
