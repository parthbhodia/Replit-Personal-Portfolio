import { useState } from 'react';
import { X, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (user: { name: string; email: string }) => void;
}

export default function AuthModal({ isOpen, onClose, onAuth }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      // Demo authentication - prompt for user details
      const userName = prompt('Enter your name:') || 'Anonymous User';
      const userEmail = prompt('Enter your email:') || 'user@example.com';
      
      if (userName && userEmail) {
        const demoUser = {
          name: userName,
          email: userEmail
        };
        
        localStorage.setItem('authUser', JSON.stringify(demoUser));
        onAuth(demoUser);
        onClose();
      }
    } catch (error) {
      console.error('Google auth failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubAuth = async () => {
    setIsLoading(true);
    try {
      // Demo authentication - prompt for user details
      const githubUsername = prompt('Enter your GitHub username:') || 'github-user';
      const githubEmail = prompt('Enter your email:') || 'user@github.com';
      
      if (githubUsername && githubEmail) {
        const demoUser = {
          name: githubUsername,
          email: githubEmail
        };
        
        localStorage.setItem('authUser', JSON.stringify(demoUser));
        onAuth(demoUser);
        onClose();
      }
    } catch (error) {
      console.error('GitHub auth failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Sign in to comment
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Choose your preferred method to sign in and start commenting (Demo Mode)
          </p>

          <Button
            onClick={handleGoogleAuth}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            variant="outline"
          >
            <Chrome size={20} className="text-red-500" />
            <span>Continue with Google</span>
          </Button>

          <Button
            onClick={handleGithubAuth}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-3 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600"
          >
            <Github size={20} />
            <span>Continue with GitHub</span>
          </Button>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          We'll only use your information to display your name with comments
        </p>
      </div>
    </div>
  );
}