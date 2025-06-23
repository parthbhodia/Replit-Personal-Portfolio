import type { Request, Response } from 'express';

// Generate dynamic sitemap for blog posts
export function generateSitemap(req: Request, res: Response) {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const currentDate = new Date().toISOString().split('T')[0];
  
  // You can fetch dynamic blog posts from your database here
  const dynamicBlogPosts = [
    {
      slug: 'getting-started-with-vue-3',
      lastmod: '2025-01-15',
      priority: '0.7'
    },
    {
      slug: 'building-scalable-apis', 
      lastmod: '2025-01-10',
      priority: '0.7'
    },
    {
      slug: 'aws-lambda-best-practices',
      lastmod: '2025-01-05', 
      priority: '0.7'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/skills</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${dynamicBlogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('')}
</urlset>`;

  res.set('Content-Type', 'application/xml');
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

// SEO meta tags helper for dynamic pages
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
    keywords = 'Parth Bhodia, Software Developer, Full Stack Developer'
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
      { name: 'twitter:image', content: image }
    ]
  };
}