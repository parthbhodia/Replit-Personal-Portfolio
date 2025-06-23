# API Migration to Vercel Serverless Functions

This document outlines the migration from Express.js backend to Vercel serverless functions for deployment.

## Overview

The project has been migrated from a traditional Express.js server (`/server`) to Vercel serverless functions (`/api`) while maintaining the same functionality and API endpoints.

## File Structure

```
/api/
├── _utils.ts                    # Shared utilities and services
├── contact.ts                   # Contact form endpoint
├── chat.ts                      # Chatbot endpoint
├── placeholder/[width]/[height].ts  # Placeholder image generator
├── sitemap.xml.ts              # Dynamic sitemap generation
├── robots.txt.ts               # Robots.txt generation
├── blog/
│   ├── posts.ts                # Get all blog posts
│   ├── posts/[id].ts           # Get single blog post
│   └── [postId]/comments.ts    # Blog comments
├── [blogPostId]/
│   ├── stats.ts                # Blog post statistics
│   ├── view.ts                 # Increment views
│   ├── heart.ts                # Toggle heart/like
│   └── user/[userFingerprint].ts # User interactions
├── package.json                # API dependencies
└── tsconfig.json               # TypeScript configuration
```

## API Endpoints

### Blog Endpoints
- `GET /api/blog/posts` - Get all blog posts
- `GET /api/blog/posts/[id]` - Get single blog post
- `GET /api/blog/[postId]/comments` - Get comments for a post
- `POST /api/blog/[postId]/comments` - Add a comment
- `GET /api/blog/[blogPostId]/stats` - Get blog post stats
- `POST /api/blog/[blogPostId]/view` - Increment view count
- `POST /api/blog/[blogPostId]/heart` - Toggle heart/like
- `GET /api/blog/[blogPostId]/user/[userFingerprint]` - Get user interaction

### Contact & Chat
- `POST /api/contact` - Contact form submission
- `POST /api/chat` - Chatbot interaction

### Utilities
- `GET /api/placeholder/[width]/[height]` - Generate placeholder images
- `GET /sitemap.xml` - Dynamic sitemap
- `GET /robots.txt` - Robots.txt file

## Key Changes

### 1. Serverless Function Structure
- Each endpoint is now a separate file in `/api`
- Functions export a default handler: `export default async function handler(req, res)`
- Uses Vercel's `@vercel/node` runtime

### 2. CORS Handling
- All endpoints include CORS headers for cross-origin requests
- Preflight OPTIONS requests are handled automatically

### 3. Environment Variables
- Supabase configuration
- SendGrid API key for email functionality
- Configured in Vercel dashboard

### 4. Error Handling
- Consistent error responses across all endpoints
- Proper HTTP status codes
- Error logging for debugging

## Deployment

### Prerequisites
1. Vercel account
2. Environment variables configured in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SENDGRID_API_KEY`

### Deployment Steps
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Framework Preset: Other
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
4. Set environment variables in Vercel dashboard
5. Deploy

### Local Development
The `/server` directory remains intact for local development:
```bash
npm run dev  # Runs Express server locally
```

## Configuration Files

### vercel.json
- Routes API requests to serverless functions
- Routes frontend requests to static build
- Configures function timeouts and environment variables

### API Dependencies
- `@supabase/supabase-js` - Database operations
- `@sendgrid/mail` - Email functionality
- `zod` - Data validation
- `zod-validation-error` - Validation error formatting

## Benefits of Migration

1. **Scalability**: Automatic scaling based on demand
2. **Cost**: Pay-per-use pricing model
3. **Performance**: Global edge deployment
4. **Maintenance**: No server management required
5. **Integration**: Seamless frontend/backend deployment

## Testing

### Local Testing
```bash
# Test API endpoints locally
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

### Production Testing
- All endpoints are available at `https://your-domain.vercel.app/api/*`
- Frontend continues to work with existing API calls

## Troubleshooting

### Common Issues
1. **Environment Variables**: Ensure all required env vars are set in Vercel
2. **CORS Errors**: Check that CORS headers are properly set
3. **Function Timeouts**: Increase timeout in vercel.json if needed
4. **Database Connection**: Verify Supabase credentials

### Debugging
- Check Vercel function logs in dashboard
- Use `console.log` for debugging (visible in Vercel logs)
- Test endpoints individually using tools like Postman

## Migration Checklist

- [x] Create `/api` directory structure
- [x] Migrate all Express routes to serverless functions
- [x] Update CORS handling
- [x] Configure Vercel deployment
- [x] Test all endpoints
- [x] Update documentation
- [x] Keep `/server` for local development

## Support

For issues with the migration:
1. Check Vercel function logs
2. Verify environment variables
3. Test endpoints individually
4. Review this documentation

The migration maintains full backward compatibility while enabling modern serverless deployment. 