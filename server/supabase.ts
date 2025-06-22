import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.warn('SUPABASE_URL and SUPABASE_ANON_KEY environment variables are required for Supabase integration');
}

export const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

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
    const { data, error } = await supabase
      .from('blog_stats')
      .select('*')
      .eq('blog_post_id', blogPostId)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching blog stats:', error);
      return null;
    }

    return data;
  }

  async incrementViews(blogPostId: string): Promise<void> {
    const stats = await this.getBlogStats(blogPostId);
    
    if (stats) {
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
  }

  async toggleHeart(blogPostId: string, userFingerprint: string): Promise<{ isLiked: boolean; totalHearts: number }> {
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

    if (stats) {
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
  }

  async getUserInteraction(userFingerprint: string, blogPostId: string): Promise<UserInteractionSupabase | null> {
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
  }
}

export const supabaseService = new SupabaseService();