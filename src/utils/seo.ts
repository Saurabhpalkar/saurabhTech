export interface SeoOptions {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  schemaType?: "Person" | "CreativeWork" | "WebSite";
  schemaData?: any;
}

export function updateSeo(options: SeoOptions) {
  if (typeof window === "undefined") return;

  const siteTitle = "SaurabhTech | Saurabh Palkar - PHP Full-Stack Developer";
  const fullTitle = options.title ? `${options.title} | SaurabhTech` : siteTitle;
  document.title = fullTitle;

  // Helper to update or create meta tags
  const setMeta = (nameOrProperty: string, value: string, isProperty = false) => {
    let el = document.querySelector(
      isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`
    );
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(isProperty ? "property" : "name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  setMeta("description", options.description);

  // Open Graph
  setMeta("og:title", fullTitle, true);
  setMeta("og:description", options.description, true);
  setMeta("og:type", options.type || "website", true);
  setMeta("og:image", options.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", true);
  setMeta("og:url", options.canonicalUrl || window.location.href, true);

  // Twitter
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", options.description);
  setMeta("twitter:image", options.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800");

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement("link");
    canonicalEl.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute("href", options.canonicalUrl || window.location.href);

  // JSON-LD Structured Data
  let schemaEl = document.getElementById("seo-schema-jsonld");
  if (schemaEl) {
    schemaEl.remove();
  }

  const defaultPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saurabh Palkar",
    "jobTitle": "PHP Full-Stack Developer & Web Application Developer",
    "brand": {
      "@type": "Brand",
      "name": "SaurabhTech"
    },
    "email": "saurabhtech.sp@gmail.com",
    "url": "https://saurabhtech.com",
    "sameAs": [
      "https://github.com/SaurabhTech",
      "https://linkedin.com/in/saurabh-palkar"
    ]
  };

  let schemaObj: any = defaultPersonSchema;

  if (options.schemaType === "CreativeWork" && options.schemaData) {
    schemaObj = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": options.schemaData.title,
      "description": options.schemaData.description,
      "creator": defaultPersonSchema,
      "genre": options.schemaData.category,
      "programmingLanguage": options.schemaData.technologies
    };
  }

  schemaEl = document.createElement("script");
  schemaEl.setAttribute("type", "application/ld+json");
  schemaEl.id = "seo-schema-jsonld";
  schemaEl.innerHTML = JSON.stringify(schemaObj, null, 2);
  document.head.appendChild(schemaEl);
}
