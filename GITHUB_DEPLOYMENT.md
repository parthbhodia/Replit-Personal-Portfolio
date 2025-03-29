# GitHub Deployment Instructions

Follow these steps to deploy your portfolio to GitHub and then to GoDaddy:

## Step 1: Initialize Git Repository

If you've downloaded this project from Replit, you'll need to initialize a git repository:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "portfolio-website")
4. Keep it public or private as desired
5. Click "Create repository"

## Step 3: Push to GitHub

Run the following commands, replacing `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the name of your repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Build the Project

Before deploying to GoDaddy, build the project:

```bash
npm run build
```

This will create a `dist` folder with the built files.

## Step 5: Deploy to GoDaddy

1. Log in to your GoDaddy account
2. Go to your hosting control panel
3. Use the File Manager or FTP credentials to access your hosting space
4. Upload the contents of the `dist` folder to your web root (typically public_html or www folder)

## Alternative: Set Up GitHub Actions for Automatic Deployment

If you want automatic deployments, you can set up GitHub Actions. Here's a sample workflow file (.github/workflows/deploy.yml):

```yaml
name: Deploy to GoDaddy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GoDaddy
      uses: SamKirkland/FTP-Deploy-Action@4.3.0
      with:
        server: ${{ secrets.FTP_SERVER }}
        username: ${{ secrets.FTP_USERNAME }}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./dist/
        server-dir: /public_html/
```

You would need to add your FTP credentials as secrets in your GitHub repository settings.

## Custom Domain Configuration

If you're using a custom domain from GoDaddy:

1. In your GoDaddy account, make sure your domain points to your hosting (typically this is already set up when you buy both from GoDaddy)
2. Wait for DNS changes to propagate (can take up to 48 hours)

Your portfolio website should now be live at your domain!