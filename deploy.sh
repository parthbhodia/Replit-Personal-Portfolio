#!/bin/bash

echo "🚀 Deploying Personal Portfolio to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Please install it first:"
    echo "npm install -g vercel"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the build errors first."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo "🔗 Your site should be live at the URL shown above."
    echo ""
    echo "📝 Important: If you're still getting 405 errors, please check:"
    echo "1. Go to your Vercel dashboard"
    echo "2. Navigate to your project settings"
    echo "3. Check if 'Authentication' is enabled and disable it for API routes"
    echo "4. Or add your domain to the allowed list in authentication settings"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi