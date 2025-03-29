#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  echo "The 'dist' folder contains all files ready for deployment."
  echo "Follow the instructions in GITHUB_DEPLOYMENT.md to deploy to GitHub and GoDaddy."
else
  echo "Build failed. Please check the errors above."
  exit 1
fi