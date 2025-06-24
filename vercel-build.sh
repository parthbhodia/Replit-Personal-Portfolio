#!/bin/bash

echo "Starting Vercel build process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in current directory"
    ls -la
    exit 1
fi

echo "Found package.json, installing dependencies..."
npm install

echo "Running build command..."
npm run build

echo "Build completed successfully!"
ls -la client/dist/ 