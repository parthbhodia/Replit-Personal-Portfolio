import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://tphxfdxopxrohdjiugal.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwaHhmZHhvcHhyb2hkaml1Z2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NzI5ODgsImV4cCI6MjA2NjE0ODk4OH0.09vyrEzymys5q4tONt5I3iy7jtI-gvP3fmrFhaFW12Y';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('SUPABASE_URL and SUPABASE_ANON_KEY environment variables are required for Supabase integration');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface BlogStatsSupabase {
  id: number;
  blog_post_id: string;
  hearts: number;
  views: number;
  created_at: string;
  updated_at: string;
}

export interface UserInteractionSupabase {
  id: number;
  user_fingerprint: string;
  blog_post_id: string;
  has_liked: boolean;
  has_viewed: boolean;
  created_at: string;
  updated_at: string;
}

export class SupabaseService {
  async getBlogStats(blogPostId: string): Promise<BlogStatsSupabase | null> {
    try {
      const { data, error } = await supabase
        .from('blog_stats')
        .select('*')
        .eq('blog_post_id', blogPostId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching blog stats:', error);
        // Return default stats if table doesn't exist yet
        return {
          id: 0,
          blog_post_id: blogPostId,
          hearts: 0,
          views: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
      }

      return data || {
        id: 0,
        blog_post_id: blogPostId,
        hearts: 0,
        views: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    } catch (error) {
      console.error('Supabase connection error:', error);
      return {
        id: 0,
        blog_post_id: blogPostId,
        hearts: 0,
        views: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    }
  }

  async incrementViews(blogPostId: string): Promise<void> {
    try {
      const stats = await this.getBlogStats(blogPostId);
      
      if (stats && stats.id > 0) {
        await supabase
          .from('blog_stats')
          .update({ 
            views: stats.views + 1,
            updated_at: new Date().toISOString()
          })
          .eq('blog_post_id', blogPostId);
      } else {
        await supabase
          .from('blog_stats')
          .insert({
            blog_post_id: blogPostId,
            views: 1,
            hearts: 0
          });
      }
    } catch (error) {
      console.error('Error incrementing views:', error);
      // Silently fail for now
    }
  }

  async toggleHeart(blogPostId: string, userFingerprint: string): Promise<{ isLiked: boolean; totalHearts: number }> {
    try {
      // Check if user has already interacted with this post
      const { data: interaction } = await supabase
        .from('user_interactions')
        .select('*')
        .eq('user_fingerprint', userFingerprint)
        .eq('blog_post_id', blogPostId)
        .single();

      const wasLiked = interaction?.has_liked || false;
      const newLikedState = !wasLiked;

      // Update or create user interaction
      if (interaction) {
        await supabase
          .from('user_interactions')
          .update({
            has_liked: newLikedState,
            updated_at: new Date().toISOString()
          })
          .eq('id', interaction.id);
      } else {
        await supabase
          .from('user_interactions')
          .insert({
            user_fingerprint: userFingerprint,
            blog_post_id: blogPostId,
            has_liked: newLikedState,
            has_viewed: false
          });
      }

      // Update blog stats
      const stats = await this.getBlogStats(blogPostId);
      const currentHearts = stats?.hearts || 0;
      const newHearts = newLikedState ? currentHearts + 1 : Math.max(0, currentHearts - 1);

      if (stats && stats.id > 0) {
        await supabase
          .from('blog_stats')
          .update({
            hearts: newHearts,
            updated_at: new Date().toISOString()
          })
          .eq('blog_post_id', blogPostId);
      } else {
        await supabase
          .from('blog_stats')
          .insert({
            blog_post_id: blogPostId,
            hearts: newHearts,
            views: 0
          });
      }

      return {
        isLiked: newLikedState,
        totalHearts: newHearts
      };
    } catch (error) {
      console.error('Error toggling heart:', error);
      return {
        isLiked: false,
        totalHearts: 0
      };
    }
  }

  async getUserInteraction(userFingerprint: string, blogPostId: string): Promise<UserInteractionSupabase | null> {
    try {
      const { data, error } = await supabase
        .from('user_interactions')
        .select('*')
        .eq('user_fingerprint', userFingerprint)
        .eq('blog_post_id', blogPostId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching user interaction:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user interaction:', error);
      return null;
    }
  }
}

export const supabaseService = new SupabaseService();