#!/bin/bash

echo "Starting Vercel build process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in current directory"
    ls -la
    exit 1
fi

echo "Found package.json, installing dependencies..."
npm ci --only=production

echo "Installing dev dependencies for build..."
npm install

echo "Running build command..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"
    echo "Build output:"
    ls -la client/dist/
    
    # Verify index.html exists
    if [ -f "client/dist/index.html" ]; then
        echo "✅ index.html found in build output"
    else
        echo "❌ index.html not found in build output"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi 