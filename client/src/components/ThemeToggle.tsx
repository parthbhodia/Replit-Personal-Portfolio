import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  
  // On mount, check system/localStorage preferences
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const isDark = 
      localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
  }, []);
  
  // Update the theme when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  
  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed z-[999] top-20 right-6 w-14 h-14 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-xl flex items-center justify-center backdrop-blur-sm hover:shadow-2xl transition-all transform hover:scale-110 border-2 border-green-400/30 hover:border-green-500/50 animate-pulse-light"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon for light mode */}
      {!darkMode && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
      
      {/* Moon icon for dark mode */}
      {darkMode && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}