import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import HeartButton from '../components/HeartButton';
import ViewCounter from '../components/ViewCounter';
import CommentSection from '../components/CommentSection';
import ShareButton from '../components/ShareButton';
import Layout from '../components/Layout';
import { useSEO } from '../hooks/useSEO';
import blogPostsData from '../data/blogPosts.json';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogProps {
  slug?: string;
}

const blogPosts = blogPostsData as BlogPost[];

const renderContent = (content: string) => {
  return content
    .replace(/\n/g, '<br />')
    .replace(/```([^`]+)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$1</code>');
};

export default function Blog({ slug }: BlogProps = {}) {
  useSEO({
    title: slug
      ? 'Blog Post - Parth Bhodia | Software Development Insights'
      : 'Blog - Parth Bhodia | Software Development & Tech Insights',
    description: slug
      ? 'Read the latest software development insights and technical articles by Parth Bhodia, Full Stack Developer.'
      : 'Explore technical articles, tutorials, and insights on software development, Vue.js, React, Node.js, Python, AWS, and more by Parth Bhodia.',
    keywords:
      'Parth Bhodia Blog, Software Development Blog, Tech Articles, Vue.js Tutorial, React Tips, Node.js Guide, Python Programming, AWS Tutorial, Web Development Blog',
    url: slug ? `https://parthbhodia.com/blog/${slug}` : 'https://parthbhodia.com/blog',
    type: slug ? 'article' : 'website'
  });

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [userFingerprint, setUserFingerprint] = useState('');

  const currentId = useMemo(() => {
    if (slug) return slug;
    if (typeof window === 'undefined') return null;
    const idMatch = window.location.pathname.match(/\/blog\/([^/]+)/);
    return idMatch ? idMatch[1] : null;
  }, [slug]);

  useEffect(() => {
    const generateFingerprint = () => `fp-${Math.random().toString(36).slice(2, 11)}-${Date.now()}`;
    let fp = localStorage.getItem('userFingerprint');
    if (!fp) {
      fp = generateFingerprint();
      localStorage.setItem('userFingerprint', fp);
    }
    setUserFingerprint(fp);
  }, []);

  useEffect(() => {
    if (!currentId) {
      setSelectedPost(null);
      return;
    }
    const post = blogPosts.find((p) => p.id === currentId || p.slug === currentId) ?? null;
    setSelectedPost(post);
  }, [currentId]);

  if (selectedPost) {
    return (
      <Layout showHero={false} currentPage="blog">
        <article className="pt-8 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6">
                ← Back to Blog
              </Link>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{selectedPost.title}</h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(selectedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <ViewCounter blogPostId={selectedPost.id} />
                </div>
                <HeartButton blogPostId={selectedPost.id} size={24} />
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: renderContent(selectedPost.content) }} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6">
                  <HeartButton
                    blogPostId={selectedPost.id}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    size={20}
                  />
                  <ViewCounter
                    blogPostId={selectedPost.id}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800"
                    size={16}
                  />
                </div>

                <ShareButton
                  title={selectedPost.title}
                  excerpt={selectedPost.excerpt}
                  url={window.location.href}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                />
              </div>
            </div>

            {userFingerprint && <CommentSection blogPostId={selectedPost.id} userFingerprint={userFingerprint} />}
          </div>
        </article>
      </Layout>
    );
  }

  return (
    <Layout showHero={false} currentPage="blog">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 text-transparent bg-clip-text">
              Tech Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore technical articles, tutorials, and insights on software development, Vue.js, React, Node.js, Python,
            AWS, and more.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ViewCounter blogPostId={post.id} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <HeartButton blogPostId={post.id} size={20} />
                  </div>

                  <div className="mt-4">
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No blog posts available at the moment. Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
