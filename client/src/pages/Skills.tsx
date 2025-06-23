import React, { useState } from 'react';
import { Link } from 'wouter';
import ThreeBackground from '../components/ThreeBackground';
import ThemeToggle from '../components/ThemeToggle';
import ViewCounter from '../components/ViewCounter';
import { Menu, X } from 'lucide-react';

export default function Skills() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text cursor-pointer">
                Parth Bhodia
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#companies" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Companies</Link>
              <Link href="/#about" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
              <Link href="/skills" className="font-medium text-purple-600 dark:text-purple-400">Skills</Link>
              <Link href="/#projects" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link>
              <Link href="/#contact" className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/#companies" 
                  className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Companies
                </Link>
                <Link 
                  href="/#about" 
                  className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/skills" 
                  className="font-medium text-green-600 dark:text-green-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link 
                  href="/#projects" 
                  className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/#contact" 
                  className="font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

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
    </div>
  );
}