import React, { useEffect } from 'react';
import { Switch, Route } from 'wouter';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import NotFound from './pages/not-found';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

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
    document.documentElement.classList.add('dark');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    // Store the default theme
    if (typeof window !== 'undefined' && !window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        {/* Custom Cursor */}
        <CustomCursor />
        <ScrollProgress />
        
        {/* Routes */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id">
            {(params) => <Blog slug={params.id} />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </QueryClientProvider>
  );
}

export function Router() {
  return <App />;
}