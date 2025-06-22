import { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonProps {
  title: string;
  excerpt: string;
  url: string;
  className?: string;
}

export default function ShareButton({ title, excerpt, url, className = '' }: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-600 hover:text-white',
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: 'Twitter',
      icon: X,
      color: 'hover:bg-black hover:text-white',
      action: () => {
        const text = `${title} - ${excerpt}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:bg-blue-700 hover:text-white',
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
      }
    },
    {
      name: 'Copy Link',
      icon: Link,
      color: 'hover:bg-gray-600 hover:text-white',
      action: async () => {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (error) {
          // Fallback for browsers that don't support clipboard API
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
        setShowShareMenu(false);
      }
    }
  ];

  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: excerpt,
          url,
        });
      } else {
        setShowShareMenu(!showShareMenu);
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        setShowShareMenu(!showShareMenu);
      }
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleNativeShare}
        className={`flex items-center space-x-2 ${className}`}
        variant="outline"
      >
        <Share2 size={16} />
        <span className="text-sm font-medium">
          {copied ? 'Copied!' : 'Share'}
        </span>
      </Button>

      {showShareMenu && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
          <div className="space-y-1">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md transition-colors ${option.color}`}
              >
                <option.icon size={16} />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {showShareMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
}