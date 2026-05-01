import { useEffect } from 'react';

interface ArticleSEO {
  publishedTime: string;          // ISO string
  modifiedTime?: string;          // ISO string
  author?: string;
  section?: string;               // e.g. category
  tags?: string[];
  wordCount?: number;
}

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: ArticleSEO;
}

const SITE_URL = 'https://parthbhodia.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

const absolutize = (url: string) => {
  if (!url) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

export function useSEO(options: SEOOptions = {}) {
  const {
    title = 'Parth Bhodia - Full Stack Software Developer',
    description = 'Parth Bhodia is a skilled Full Stack Software Developer specializing in Vue.js, React, Node.js, Python, and AWS.',
    keywords = 'Parth Bhodia, Software Developer, Full Stack Developer, Vue.js, React, Node.js, Python, AWS',
    image = DEFAULT_IMAGE,
    url = typeof window !== 'undefined' ? window.location.href : SITE_URL,
    type = 'website',
    article,
  } = options;

  // Stable dependency keys so the effect only re-runs when something real changes
  const articleKey = article
    ? `${article.publishedTime}|${article.modifiedTime ?? ''}|${article.author ?? ''}|${article.section ?? ''}|${(article.tags ?? []).join(',')}|${article.wordCount ?? ''}`
    : '';

  useEffect(() => {
    const fullTitle = title.includes('Parth Bhodia') ? title : `${title} | Parth Bhodia`;
    const absImage = absolutize(image);

    document.title = fullTitle;

    const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const removeMeta = (attr: 'name' | 'property', key: string) => {
      document.head.querySelectorAll(`meta[${attr}="${key}"]`).forEach((el) => el.remove());
    };

    // Standard
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', absImage);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', 'Parth Bhodia Portfolio');

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absImage);

    // Article-specific OG (only on article pages)
    if (article) {
      upsertMeta('property', 'article:published_time', article.publishedTime);
      if (article.modifiedTime) {
        upsertMeta('property', 'article:modified_time', article.modifiedTime);
      } else {
        removeMeta('property', 'article:modified_time');
      }
      if (article.author) upsertMeta('property', 'article:author', article.author);
      if (article.section) upsertMeta('property', 'article:section', article.section);

      // article:tag can repeat — wipe and re-add
      document.head.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove());
      (article.tags ?? []).forEach((t) => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'article:tag');
        tag.setAttribute('content', t);
        document.head.appendChild(tag);
      });
    } else {
      // Strip stale article meta when navigating away from an article
      ['article:published_time', 'article:modified_time', 'article:author', 'article:section'].forEach((k) =>
        removeMeta('property', k),
      );
      document.head.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove());
    }

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Article JSON-LD (BlogPosting). Use a tagged script we own so we don't fight static schemas.
    const SCRIPT_ID = 'seo-blogposting-jsonld';
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    if (article) {
      const ld = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: [absImage],
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime ?? article.publishedTime,
        author: {
          '@type': 'Person',
          name: article.author ?? 'Parth Bhodia',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Person',
          name: 'Parth Bhodia',
          url: SITE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
        articleSection: article.section,
        keywords: (article.tags ?? []).join(', '),
        wordCount: article.wordCount,
        inLanguage: 'en-US',
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCRIPT_ID;
      script.textContent = JSON.stringify(ld);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, url, type, articleKey]);
}

export default useSEO;
