import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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
  const [heartCount, setHeartCount] = useState(0);
  const userFingerprint = getUserFingerprint();
  const queryClient = useQueryClient();

  // Get blog stats and user interaction
  const { data: statsData } = useQuery({
    queryKey: ['blog-stats', blogPostId],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${blogPostId}?action=stats`);
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
      const response = await fetch(`/api/blog/${blogPostId}?action=heart`, {
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
    heartMutation.mutate();
  };

  return (
    <button
      onClick={handleHeartClick}
      className={`
        inline-flex items-center space-x-1 p-1 rounded
        transition-colors duration-200
        ${isLiked 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400'
        }
        ${className}
      `}
      disabled={heartMutation.isPending}
    >
      <Heart
        size={size}
        className={`transition-colors duration-200 ${isLiked ? 'fill-current' : 'fill-none'}`}
      />
      <span className="text-sm font-medium">{heartCount}</span>
    </button>
  );
}