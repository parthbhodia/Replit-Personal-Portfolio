import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';

// Generate a unique session ID for the user
const getSessionId = () => {
  let sessionId = localStorage.getItem('portfolio-session-id');
  if (!sessionId) {
    sessionId = 'session-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
    localStorage.setItem('portfolio-session-id', sessionId);
  }
  return sessionId;
};

interface HeartButtonProps {
  blogPostId: string;
  className?: string;
  size?: number;
}

export default function HeartButton({ blogPostId, className = '', size = 24 }: HeartButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const sessionId = getSessionId();
  const queryClient = useQueryClient();

  // Get current heart status
  const { data: heartData } = useQuery({
    queryKey: ['heart', sessionId, blogPostId],
    queryFn: () => fetch(`/api/heart/${sessionId}/${blogPostId}`).then(res => res.json()),
  });

  const isLiked = heartData?.isLiked || false;

  // Mutation to toggle heart
  const heartMutation = useMutation({
    mutationFn: (isLiked: boolean) =>
      apiRequest('/api/heart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, blogPostId, isLiked }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['heart', sessionId, blogPostId] });
    },
  });

  const handleHeartClick = () => {
    setIsAnimating(true);
    heartMutation.mutate(!isLiked);
    
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
    </button>
  );
}