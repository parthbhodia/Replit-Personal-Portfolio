import { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { MessageCircle, Reply, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import AuthModal from './AuthModal';

interface Comment {
  id: number;
  blog_post_id: string;
  parent_id: number | null;
  author_name: string;
  author_email: string;
  content: string;
  user_fingerprint: string;
  created_at: string;
  updated_at: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  blogPostId: string;
  userFingerprint: string;
}

export default function CommentSection({ blogPostId, userFingerprint }: CommentSectionProps) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authUser, setAuthUser] = useState<{ name: string; email: string; avatar?: string } | null>(null);
  const [newComment, setNewComment] = useState({
    content: ''
  });

  const queryClient = useQueryClient();

  // Check for existing auth on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      setAuthUser(JSON.parse(savedUser));
    }
  }, []);

  // Fetch comments
  const { data: comments = [], isLoading } = useQuery({
    queryKey: ['comments', blogPostId],
    queryFn: () => fetch(`/api/blog/${blogPostId}/comments`).then(res => res.json()),
  });

  // Add comment mutation
  const addCommentMutation = useMutation({
    mutationFn: (commentData: {
      content: string;
      parentId?: number;
    }) =>
      fetch(`/api/blog/${blogPostId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorName: authUser?.name || 'Anonymous',
          authorEmail: authUser?.email || 'anonymous@example.com',
          content: commentData.content,
          parentId: commentData.parentId,
          userFingerprint,
        }),
      }).then(res => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', blogPostId] });
      setNewComment({ content: '' });
      setShowCommentForm(false);
      setReplyTo(null);
    },
  });

  // Organize comments into threads
  const organizeComments = (comments: Comment[]): Comment[] => {
    const commentMap = new Map<number, Comment>();
    const rootComments: Comment[] = [];

    // First pass: create map and initialize replies array
    comments.forEach(comment => {
      commentMap.set(comment.id, { ...comment, replies: [] });
    });

    // Second pass: organize into threads
    comments.forEach(comment => {
      const commentWithReplies = commentMap.get(comment.id)!;
      if (comment.parent_id) {
        const parent = commentMap.get(comment.parent_id);
        if (parent) {
          parent.replies!.push(commentWithReplies);
        }
      } else {
        rootComments.push(commentWithReplies);
      }
    });

    return rootComments;
  };

  const organizedComments = organizeComments(comments);

  const handleSubmit = (e: React.FormEvent, parentId?: number) => {
    e.preventDefault();
    if (!authUser) {
      setShowAuthModal(true);
      return;
    }
    if (!newComment.content) {
      return;
    }

    addCommentMutation.mutate({
      content: newComment.content,
      parentId,
    });
  };

  const handleAuth = (user: { name: string; email: string; avatar?: string }) => {
    setAuthUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('authUser');
    setAuthUser(null);
    setShowCommentForm(false);
    setReplyTo(null);
  };

  const CommentItem = ({ comment, depth = 0 }: { comment: Comment; depth?: number }) => (
    <div className={`${depth > 0 ? 'ml-8 mt-4' : 'mb-6'}`}>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <User size={16} className="text-gray-500" />
          <span className="font-medium text-sm text-gray-900 dark:text-white">
            {comment.author_name}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(comment.created_at).toLocaleDateString()}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{comment.content}</p>
        <button
          onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
          className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center space-x-1"
        >
          <Reply size={14} />
          <span>Reply</span>
        </button>

        {replyTo === comment.id && (
          <form onSubmit={(e) => handleSubmit(e, comment.id)} className="mt-4 space-y-3">
            {authUser && (
              <div className="flex items-center space-x-2 mb-3">
                {authUser.avatar && (
                  <img src={authUser.avatar} alt={authUser.name} className="w-6 h-6 rounded-full" />
                )}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Replying as {authUser.name}
                </span>
              </div>
            )}
            <Textarea
              placeholder={authUser ? "Write your reply..." : "Sign in to reply..."}
              value={newComment.content}
              onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
              rows={3}
              required
              disabled={!authUser}
            />
            <div className="flex space-x-2">
              <Button 
                type="submit" 
                size="sm"
                disabled={addCommentMutation.isPending || !authUser}
              >
                {addCommentMutation.isPending ? 'Posting...' : 'Post Reply'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setReplyTo(null)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}

        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4">
            {comment.replies.map(reply => (
              <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
          <MessageCircle size={20} />
          <span>Comments ({comments.length})</span>
        </h3>
        <div className="flex items-center space-x-3">
          {authUser ? (
            <>
              <div className="flex items-center space-x-2">
                {authUser.avatar && (
                  <img src={authUser.avatar} alt={authUser.name} className="w-6 h-6 rounded-full" />
                )}
                <span className="text-sm text-gray-600 dark:text-gray-400">{authUser.name}</span>
              </div>
              <Button
                onClick={() => setShowCommentForm(!showCommentForm)}
                variant="outline"
              >
                Add Comment
              </Button>
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
              >
                <LogOut size={16} />
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setShowAuthModal(true)}
              variant="outline"
            >
              Sign in to Comment
            </Button>
          )}
        </div>
      </div>

      {showCommentForm && authUser && (
        <form onSubmit={(e) => handleSubmit(e)} className="mb-8 space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            {authUser.avatar && (
              <img src={authUser.avatar} alt={authUser.name} className="w-8 h-8 rounded-full" />
            )}
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Commenting as {authUser.name}
            </span>
          </div>
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment.content}
            onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
            rows={4}
            required
          />
          <div className="flex space-x-2">
            <Button 
              type="submit"
              disabled={addCommentMutation.isPending}
            >
              {addCommentMutation.isPending ? 'Posting...' : 'Post Comment'}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => setShowCommentForm(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {organizedComments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          organizedComments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuth={handleAuth}
      />
    </div>
  );
}