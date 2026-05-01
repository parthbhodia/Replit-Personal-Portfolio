import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BlogPostMeta {
  slug: string;
  date: string; // ISO YYYY-MM-DD
}

const BLOG_JSON_PATH = path.resolve(__dirname, '..', 'client', 'src', 'data', 'blogPosts.json');

function loadBlogPosts(): BlogPostMeta[] {
  try {
    const raw = fs.readFileSync(BLOG_JSON_PATH, 'utf-8');
    const json = JSON.parse(raw) as Array<{ slug: string; date: string }>;
    return json
      .filter((p) => p && p.slug && p.date)
      .map((p) => ({ slug: p.slug, date: p.date }));
  } catch (err) {
    console.error('Failed to load blogPosts.json for sitemap:', err);
    return [];
  }
}

// Generate dynamic sitemap including real blog posts
export function generateSitemap(req: Request, res: Response) {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const today = new Date().toISOString().split('T')[0];
  const posts = loadBlogPosts();

  const xmlEscape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

  const staticUrls = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/skills', changefreq: 'monthly', priority: '0.8' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.9' },
  ];

  const urls = [
    ...staticUrls.map(
      (u) => `
  <url>
    <loc>${xmlEscape(`${baseUrl}${u.loc}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    ),
    ...posts.map(
      (p) => `
  <url>
    <loc>${xmlEscape(`${baseUrl}/blog/${p.slug}`)}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
    ),
  ].join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  res.set('Content-Type', 'application/xml');
  res.set('Cache-Control', 'public, max-age=3600');
  res.send(sitemap);
}

// Generate robots.txt
export function generateRobots(req: Request, res: Response) {
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  const robots = `User-agent: *
Allow: /
Allow: /skills
Allow: /blog
Allow: /blog/*

Sitemap: ${baseUrl}/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

Crawl-delay: 1`;

  res.set('Content-Type', 'text/plain');
  res.send(robots);
}

// SEO meta tags helper for dynamic pages (kept for backwards compat)
export function generateMetaTags(options: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  keywords?: string;
}) {
  const {
    title,
    description,
    url,
    image = 'https://parthbhodia.com/og-image.jpg',
    type = 'website',
    keywords = 'Parth Bhodia, Software Developer, Full Stack Developer',
  } = options;

  return {
    title: `${title} | Parth Bhodia`,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Parth Bhodia' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
  };
}
