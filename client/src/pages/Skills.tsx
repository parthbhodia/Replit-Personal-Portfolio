import React, { useState } from 'react';
import { Link } from 'wouter';
import ThreeBackground from '../components/ThreeBackground';
import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import ViewCounter from '../components/ViewCounter';
import { useSEO } from '../hooks/useSEO';
import { ChatMessage } from '../types';
import { Menu, X } from 'lucide-react';
import Layout from '../components/Layout';

export default function Skills() {
  // SEO optimization for skills page
  useSEO({
    title: 'Skills & Expertise - Parth Bhodia | Vue.js React Node.js Python AWS',
    description: 'Explore Parth Bhodia\'s technical skills and expertise in Full Stack Development, including Vue.js, React, Node.js, Python, AWS, Machine Learning, and Database technologies.',
    keywords: 'Parth Bhodia Skills, Vue.js Expert, React Developer, Node.js Developer, Python Programming, AWS Cloud, Machine Learning, Database Design, Full Stack Skills, Software Development Skills',
    url: 'https://parthbhodia.com/skills'
  });
  
  // Skills data based on resume
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Vue.js', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'HTML/CSS/SASS', level: 95 },
    { name: 'Java (Spring Boot)', level: 80 },
    { name: 'AWS', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'GraphQL', level: 75 }
  ];

  return (
    <Layout showHero={false} currentPage="skills">
      {/* Skills Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">Technical Skills</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/90 dark:bg-black/40 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}