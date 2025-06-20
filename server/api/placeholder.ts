import { Request, Response } from 'express';

export function generatePlaceholder(req: Request, res: Response) {
  const { text = 'Logo', bg = '4F46E5', color = 'fff' } = req.query;
  const width = parseInt(req.params.width) || 200;
  const height = parseInt(req.params.height) || 60;
  
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
  res.send(svg);
}