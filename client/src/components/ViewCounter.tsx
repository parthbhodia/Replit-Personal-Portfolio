import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useQuery, useMutation } from '@tanstack/react-query';
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

interface ViewCounterProps {
  page: string;
  className?: string;
  size?: number;
}

export default function ViewCounter({ page, className = '', size = 16 }: ViewCounterProps) {
  const sessionId = getSessionId();
  const [hasViewed, setHasViewed] = useState(false);

  // Get current view count
  const { data: viewData } = useQuery({
    queryKey: ['views', page],
    queryFn: () => fetch(`/api/views/${encodeURIComponent(page)}`).then(res => res.json()),
  });

  const viewCount = viewData?.count || 0;

  // Mutation to record view
  const viewMutation = useMutation({
    mutationFn: () =>
      apiRequest('/api/view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, page }),
      }),
  });

  // Record view on component mount (only once per session)
  useEffect(() => {
    const viewKey = `viewed-${page}`;
    const hasViewedBefore = sessionStorage.getItem(viewKey);
    
    if (!hasViewedBefore && !hasViewed) {
      viewMutation.mutate();
      sessionStorage.setItem(viewKey, 'true');
      setHasViewed(true);
    }
  }, [page, viewMutation, hasViewed]);

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