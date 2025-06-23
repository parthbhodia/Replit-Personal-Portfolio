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
    const { text = 'Logo', bg = '4F46E5', color = 'fff' } = req.query;
    const width = parseInt(req.query.width as string) || 200;
    const height = parseInt(req.query.height as string) || 60;
    
    // Generate SVG placeholder
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#${bg}"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" font-weight="bold" 
              fill="#${color}" text-anchor="middle" dy=".3em">${text}</text>
      </svg>
    `;
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    res.status(200).send(svg);
  } catch (error) {
    console.error('Placeholder generation error:', error);
    res.status(500).json({ error: 'Failed to generate placeholder' });
  }
} 