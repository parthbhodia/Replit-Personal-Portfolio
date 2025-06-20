# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Three.js.

## Features

- Interactive 3D background with Three.js
- Responsive design with Tailwind CSS
- Contact form with email notifications
- Dark/light theme toggle
- Smooth parallax scrolling
- Animated project cards
- Real-time chat functionality

## Live Demo

Visit the live site: [https://parthbhodia.com](https://parthbhodia.com)

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:5000

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

To deploy manually:
1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Enable GitHub Pages in repository settings if not already enabled

## Environment Variables

For the contact form to work, you need to set:
- `SENDGRID_API_KEY` - SendGrid API key for email functionality

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Three.js for 3D graphics
- Shadcn/ui components
- Express.js backend
- SendGrid for email notifications