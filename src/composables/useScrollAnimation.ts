import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const isReducedMotion = typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animateFadeIn = (selector: string, delay = 0) => {
    if (isReducedMotion) {
      gsap.set(selector, { opacity: 1 });
      return;
    }
    gsap.fromTo(selector, 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: "power2.out" }
    );
  };

  const setupScrollReveal = (selector: string, delay = 0) => {
    if (isReducedMotion) {
      gsap.set(selector, { opacity: 1 });
      return;
    }
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  };

  const setupStaggerReveal = (parentSelector: string, childSelector: string, stagger = 0.1) => {
    if (isReducedMotion) {
      gsap.set(`${parentSelector} ${childSelector}`, { opacity: 1 });
      return;
    }
    const container = document.querySelector(parentSelector);
    if (!container) return;

    gsap.fromTo(`${parentSelector} ${childSelector}`,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  };

  return {
    isReducedMotion,
    animateFadeIn,
    setupScrollReveal,
    setupStaggerReveal
  };
}
