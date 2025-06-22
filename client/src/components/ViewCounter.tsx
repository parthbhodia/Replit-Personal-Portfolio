import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';

interface ViewCounterProps {
  blogPostId: string;
  className?: string;
  size?: number;
}

export default function ViewCounter({ blogPostId, className = '', size = 16 }: ViewCounterProps) {
  const [hasViewed, setHasViewed] = useState(false);

  // Get current view count from blog stats
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

  const viewCount = statsData?.views || 0;

  // Mutation to record view
  const viewMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/blog/${blogPostId}/view`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error(`Failed to record view: ${response.status}`);
      }
      return response.json();
    },
  });

  // Record view on component mount (only once per session)
  useEffect(() => {
    const viewKey = `viewed-${blogPostId}`;
    const hasViewedBefore = sessionStorage.getItem(viewKey);
    
    if (!hasViewedBefore && !hasViewed) {
      viewMutation.mutate();
      sessionStorage.setItem(viewKey, 'true');
      setHasViewed(true);
    }
  }, [blogPostId, viewMutation, hasViewed]);

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className={`inline-flex items-center space-x-1 text-gray-500 dark:text-gray-400 ${className}`}>
      <Eye size={size} />
      <span className="text-sm font-medium">{formatCount(viewCount)}</span>
    </div>
  );
}