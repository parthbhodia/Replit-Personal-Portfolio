import React from 'react';
import { Switch, Route } from 'wouter';
import Home from './pages/Home';
import NotFound from './pages/not-found';

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export function Router() {
  return <App />;
}