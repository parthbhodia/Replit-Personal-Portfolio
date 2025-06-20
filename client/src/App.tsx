import React, { useEffect } from 'react';
import { Switch, Route } from 'wouter';
import Home from './pages/Home';
import Skills from './pages/Skills';
import NotFound from './pages/not-found';
import CustomCursor from './components/CustomCursor';

// Theme preference detector
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    // Check local storage first
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
  }
  // Default theme is now dark
  return 'dark';
};

export default function App() {
  // Apply theme on initial load
  useEffect(() => {
    const theme = getInitialTheme();
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="app">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Routes */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export function Router() {
  return <App />;
}