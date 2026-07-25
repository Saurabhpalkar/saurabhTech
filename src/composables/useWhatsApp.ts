export function useWhatsApp() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "917414909949"; // Fallback placeholder, user can override in .env

  const getWhatsAppUrl = (text: string): string => {
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
  };

  const triggerWhatsApp = (text: string): void => {
    const url = getWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return {
    whatsappNumber,
    getWhatsAppUrl,
    triggerWhatsApp
  };
}
