#!/bin/bash

# Install dependencies
npm install

# Build the client application
npm run build

# Copy API files to the correct location for Vercel
mkdir -p api
cp -r server/api/* api/ 2>/dev/null || true

echo "Build completed successfully!" 