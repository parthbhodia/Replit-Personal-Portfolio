import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';

// Generate a unique fingerprint for the user
const getUserFingerprint = () => {
  let fingerprint = localStorage.getItem('user-fingerprint');
  if (!fingerprint) {
    fingerprint = 'fp-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
    localStorage.setItem('user-fingerprint', fingerprint);
  }
  return fingerprint;
};

interface HeartButtonProps {
  blogPostId: string;
  className?: string;
  size?: number;
}

export default function HeartButton({ blogPostId, className = '', size = 24 }: HeartButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const userFingerprint = getUserFingerprint();
  const queryClient = useQueryClient();

  // Get blog stats and user interaction
  const { data: statsData } = useQuery({
    queryKey: ['blog-stats', blogPostId],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${blogPostId}/stats`);
      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.status}`);
      }
      return response.json();
    },
  });

  const { data: userInteraction } = useQuery({
    queryKey: ['user-interaction', userFingerprint, blogPostId],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${blogPostId}/user/${userFingerprint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user interaction: ${response.status}`);
      }
      return response.json();
    },
  });

  const isLiked = userInteraction?.hasLiked || false;

  useEffect(() => {
    setHeartCount(statsData?.hearts || 0);
  }, [statsData]);

  // Mutation to toggle heart
  const heartMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/blog/${blogPostId}/heart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userFingerprint }),
      });
      if (!response.ok) {
        throw new Error(`Failed to toggle heart: ${response.status}`);
      }
      return response.json();
    },
    onSuccess: (data) => {
      setHeartCount(data.totalHearts);
      queryClient.invalidateQueries({ queryKey: ['blog-stats', blogPostId] });
      queryClient.invalidateQueries({ queryKey: ['user-interaction', userFingerprint, blogPostId] });
    },
  });

  const handleHeartClick = () => {
    setIsAnimating(true);
    heartMutation.mutate();
    
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleHeartClick}
      className={`
        relative inline-flex items-center justify-center p-2 rounded-full 
        transition-all duration-200 ease-in-out transform hover:scale-110
        ${isLiked 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400'
        }
        ${isAnimating ? 'animate-pulse' : ''}
        ${className}
      `}
      disabled={heartMutation.isPending}
    >
      <Heart
        size={size}
        className={`
          transition-all duration-300 ease-in-out
          ${isLiked ? 'fill-current' : 'fill-none'}
          ${isAnimating ? 'animate-bounce' : ''}
        `}
      />
      
      {/* Floating hearts animation */}
      {isAnimating && isLiked && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              size={12}
              className={`
                absolute text-red-500 fill-current animate-float-heart
                ${i === 0 ? 'left-1/2 top-0' : ''}
                ${i === 1 ? 'left-1/4 top-1/4' : ''}
                ${i === 2 ? 'right-1/4 top-1/4' : ''}
              `}
              style={{
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
      )}

      {/* Ripple effect */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full bg-red-400 opacity-30 animate-ping" />
      )}

      {/* Heart count */}
      {heartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {heartCount > 99 ? '99+' : heartCount}
        </span>
      )}
    </button>
  );
}