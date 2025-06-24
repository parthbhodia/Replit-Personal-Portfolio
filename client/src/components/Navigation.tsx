import React, { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/#companies', label: 'Companies' },
    { href: '/#about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
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
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.href.startsWith('/#') ? (
                  <a 
                    href={item.href} 
                    className={`font-medium transition-colors ${
                      currentPage === item.label.toLowerCase()
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    href={item.href} 
                    className={`font-medium transition-colors ${
                      currentPage === item.label.toLowerCase()
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
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
              {navItems.map((item) => (
                <React.Fragment key={item.label}>
                  {item.href.startsWith('/#') ? (
                    <a 
                      href={item.href} 
                      className={`font-medium transition-colors ${
                        currentPage === item.label.toLowerCase()
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'hover:text-purple-600 dark:hover:text-purple-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      href={item.href} 
                      className={`font-medium transition-colors ${
                        currentPage === item.label.toLowerCase()
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'hover:text-purple-600 dark:hover:text-purple-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 