# API Troubleshooting Guide

## 405 Method Not Allowed Error

If you're getting a 405 Method Not Allowed error when trying to access API endpoints, follow these steps:

### 1. Check Vercel Authentication Settings

The most common cause is that Vercel has authentication enabled for your project.

**To fix this:**

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Authentication**
4. If authentication is enabled, either:
   - **Disable it completely** (recommended for public APIs)
   - **Add your domain to the allowed list**
   - **Configure it to exclude API routes**

### 2. Verify API Route Structure

Ensure your API routes are in the correct location:

```
api/
├── blog/
│   └── [blogPostId]/
│       ├── heart.ts
│       ├── stats.ts
│       ├── view.ts
│       ├── comments/
│       │   └── index.ts
│       └── user/
│           └── [userFingerprint].ts
├── chat.ts
├── contact.ts
└── _utils.ts
```

### 3. Check vercel.json Configuration

Your `vercel.json` should include:

```json
{
  "version": 2,
  "public": true,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type, Authorization, X-Requested-With"
        }
      ]
    }
  ]
}
```

### 4. Test API Endpoints Locally

Before deploying, test your API endpoints locally:

```bash
# Start the development server
npm run dev

# Test the heart endpoint
curl -X POST http://localhost:5001/api/blog/550e8400-e29b-41d4-a716-446655440002/heart \
  -H "Content-Type: application/json" \
  -d '{"userFingerprint":"test"}'
```

### 5. Redeploy After Changes

After making changes to `vercel.json` or API files:

```bash
# Deploy to Vercel
vercel --prod

# Or use the deployment script
chmod +x deploy.sh
./deploy.sh
```

### 6. Check Vercel Function Logs

If the issue persists, check the Vercel function logs:

1. Go to your Vercel Dashboard
2. Select your project
3. Go to **Functions** tab
4. Click on the function that's failing
5. Check the logs for any errors

### 7. Common Issues and Solutions

#### Issue: 401 Authentication Required
**Solution:** Disable authentication in Vercel project settings

#### Issue: 405 Method Not Allowed
**Solution:** 
- Check if the API endpoint supports the HTTP method you're using
- Verify the route structure is correct
- Ensure CORS headers are properly set

#### Issue: CORS Errors
**Solution:** 
- Verify CORS headers are set in both `vercel.json` and individual API files
- Check that the `Access-Control-Allow-Origin` header is set to `*` or your domain

### 8. Environment Variables

Ensure your environment variables are set in Vercel:

1. Go to **Settings** → **Environment Variables**
2. Add any required environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SENDGRID_API_KEY` (optional)

### 9. Contact Support

If none of the above solutions work:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Visit the [Vercel Community](https://github.com/vercel/vercel/discussions)
3. Contact Vercel Support

## Quick Fix Commands

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy with production flag
vercel --prod

# Check deployment status
vercel ls
``` 