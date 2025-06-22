import { useState } from 'react';
import { X, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (user: { name: string; email: string; avatar?: string }) => void;
}

export default function AuthModal({ isOpen, onClose, onAuth }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      // Open Google OAuth in popup
      const popup = window.open(
        'https://accounts.google.com/oauth/authorize?' +
        'client_id=your-google-client-id&' +
        'redirect_uri=' + encodeURIComponent(window.location.origin + '/auth/google/callback') + '&' +
        'response_type=code&' +
        'scope=openid profile email',
        'google-auth',
        'width=500,height=600'
      );

      // For demo purposes since we don't have real OAuth setup
      const userName = prompt('Enter your name:') || 'Anonymous User';
      const userEmail = prompt('Enter your email:') || 'user@example.com';
      const demoUser = {
        name: userName,
        email: userEmail,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=10b981&color=fff`
      };
      
      localStorage.setItem('authUser', JSON.stringify(demoUser));
      onAuth(demoUser);
      onClose();
    } catch (error) {
      console.error('Google auth failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubAuth = async () => {
    setIsLoading(true);
    try {
      // Open GitHub OAuth in popup
      const popup = window.open(
        'https://github.com/login/oauth/authorize?' +
        'client_id=your-github-client-id&' +
        'redirect_uri=' + encodeURIComponent(window.location.origin + '/auth/github/callback') + '&' +
        'scope=user:email',
        'github-auth',
        'width=500,height=600'
      );

      // For demo purposes since we don't have real OAuth setup
      const githubUsername = prompt('Enter your GitHub username:') || 'github-user';
      const githubEmail = prompt('Enter your email:') || 'user@github.com';
      const demoUser = {
        name: githubUsername,
        email: githubEmail,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(githubUsername)}&background=333&color=fff`
      };
      
      localStorage.setItem('authUser', JSON.stringify(demoUser));
      onAuth(demoUser);
      onClose();
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
            Choose your preferred method to sign in and start commenting
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