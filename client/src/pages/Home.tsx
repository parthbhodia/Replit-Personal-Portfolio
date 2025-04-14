
import React from 'react';
import { Link } from 'wouter';
import ParallaxHeader from '../components/ParallaxHeader';
import AnimatedProjectCard from '../components/AnimatedProjectCard';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ParallaxHeader />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedProjectCard
              title="Project 1"
              description="Description of project 1"
              imageUrl="/project1.jpg"
              link="/project1"
            />
            <AnimatedProjectCard
              title="Project 2"
              description="Description of project 2"
              imageUrl="/project2.jpg"
              link="/project2"
            />
            <AnimatedProjectCard
              title="Project 3"
              description="Description of project 3"
              imageUrl="/project3.jpg"
              link="/project3"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-sm">
        <ParallaxSection>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-center">
                I am a passionate developer who loves creating beautiful and functional web applications.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </section>
    </div>
  );
}
