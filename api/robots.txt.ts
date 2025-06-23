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

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.status(200).send(robots);
  } catch (error) {
    console.error('Robots.txt generation error:', error);
    res.status(500).json({ error: 'Failed to generate robots.txt' });
  }
} 