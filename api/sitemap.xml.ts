import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const host = req.headers.host || 'parthbhodia.com';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const baseUrl = `${protocol}://${host}`;
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

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
} 