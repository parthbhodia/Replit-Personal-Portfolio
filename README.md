# Replit-Personal-Portfolio

Personal portfolio website built with React, Node.js, and deployed on Vercel.

## Features

- React frontend with TypeScript
- Node.js/Express backend (migrated to Vercel serverless functions)
- Supabase database integration
- Email functionality with SendGrid
- SEO optimized
- Responsive design

## Deployment

This project is deployed on Vercel with the following configuration:
- Frontend: React app built with Vite
- Backend: Serverless functions in `/api` directory
- Database: Supabase
- Email: SendGrid

## Environment Variables

Set the following environment variables in your Vercel dashboard:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SENDGRID_API_KEY`

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---
*Last updated: $(date)*