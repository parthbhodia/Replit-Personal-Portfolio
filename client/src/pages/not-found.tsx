import React from 'react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-9xl font-bold text-blue-600 dark:text-blue-500 mb-6">404</div>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Page Not Found</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Go Back Home
        </a>
      </Link>
    </div>
  );
}