import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function useSEO(options: SEOOptions = {}) {
  useEffect(() => {
    const {
      title = 'Parth Bhodia - Full Stack Software Developer',
      description = 'Parth Bhodia is a skilled Full Stack Software Developer specializing in Vue.js, React, Node.js, Python, and AWS.',
      keywords = 'Parth Bhodia, Software Developer, Full Stack Developer, Vue.js, React, Node.js, Python, AWS',
      image = 'https://parthbhodia.com/og-image.jpg',
      url = window.location.href,
      type = 'website'
    } = options;

    // Update title
    document.title = title.includes('Parth Bhodia') ? title : `${title} | Parth Bhodia`;

    // Update or create meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        if (selector.includes('property=')) {
          tag.setAttribute('property', selector.split('"')[1]);
        } else {
          tag.setAttribute('name', selector.split('"')[1]);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Update meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Add structured data for person
    const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
    if (!existingStructuredData) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Parth Bhodia",
        "jobTitle": "Full Stack Software Developer",
        "url": url,
        "description": description,
        "image": image
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

  }, [options]);
}

export default useSEO;