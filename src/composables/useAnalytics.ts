import { onMounted } from 'vue';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function useAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

  const initGA = () => {
    if (!measurementId || typeof window === "undefined") return;

    // Check if script is already added
    if (document.getElementById("google-analytics-gtag")) return;

    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script1.id = "google-analytics-gtag";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);
  };

  const trackPageView = (path: string, title: string) => {
    if (!measurementId || typeof window === "undefined" || !window.gtag) return;
    window.gtag('config', measurementId, {
      page_path: path,
      page_title: title
    });
    console.log(`[Analytics] Tracked Page View: ${path} (${title})`);
  };

  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (!measurementId || typeof window === "undefined" || !window.gtag) {
      console.log(`[Analytics Mock] Event: ${eventName}`, params);
      return;
    }
    window.gtag('event', eventName, params);
    console.log(`[Analytics] Tracked Event: ${eventName}`, params);
  };

  onMounted(() => {
    initGA();
  });

  return {
    trackPageView,
    trackEvent
  };
}
