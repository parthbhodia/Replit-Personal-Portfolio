import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';
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
  views: number;
}

interface BlogProps {
  slug?: string;
}

const blogPosts = blogPostsData as BlogPost[];

const getStoredViewCounts = (): Record<string, number> => {
  if (typeof window === 'undefined') return {};
  const raw = localStorage.getItem('blog-views');
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, number>;
  } catch {
    return {};
  }
};

const saveStoredViewCounts = (counts: Record<string, number>) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('blog-views', JSON.stringify(counts));
};

const formatCount = (count: number) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

const renderContent = (content: string) => {
  const lines = content.split('\n');
  const html: string[] = [];
  let inUl = false;
  let inOl = false;
  let inCodeBlock = false;
  const codeBlockLines: string[] = [];
  let inDiagramBlock = false;
  const diagramLines: string[] = [];

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const closeLists = () => {
    if (inUl) {
      html.push('</ul>');
      inUl = false;
    }
    if (inOl) {
      html.push('</ol>');
      inOl = false;
    }
  };

  const closeDiagramBlock = () => {
    if (!inDiagramBlock) return;
    html.push(
      `<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>${escapeHtml(diagramLines.join('\n'))}</code></pre>`
    );
    inDiagramBlock = false;
    diagramLines.length = 0;
  };

  const closeCodeBlock = () => {
    if (!inCodeBlock) return;
    html.push(
      `<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>${escapeHtml(codeBlockLines.join('\n'))}</code></pre>`
    );
    inCodeBlock = false;
    codeBlockLines.length = 0;
  };

  const inline = (line: string) =>
    line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">$1</code>');

  for (const rawLine of lines) {
    if (rawLine.trim().startsWith('```')) {
      closeDiagramBlock();
      closeLists();
      if (inCodeBlock) {
        closeCodeBlock();
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(rawLine);
      continue;
    }

    const isDiagramLine =
      rawLine.includes('->') ||
      /^\s*\|/.test(rawLine) ||
      /^\s*\+[-+\s]+\+\s*$/.test(rawLine);

    if (isDiagramLine) {
      closeLists();
      inDiagramBlock = true;
      diagramLines.push(rawLine);
      continue;
    }

    closeDiagramBlock();

    const line = rawLine.trim();
    if (!line) {
      closeLists();
      continue;
    }

    if (line.startsWith('### ')) {
      closeLists();
      html.push(`<h3>${inline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeLists();
      html.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      closeLists();
      html.push(`<h1>${inline(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith('- ')) {
      if (inOl) {
        html.push('</ol>');
        inOl = false;
      }
      if (!inUl) {
        html.push('<ul>');
        inUl = true;
      }
      html.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      if (inUl) {
        html.push('</ul>');
        inUl = false;
      }
      if (!inOl) {
        html.push('<ol>');
        inOl = true;
      }
      html.push(`<li>${inline(line.replace(/^\d+\.\s/, ''))}</li>`);
      continue;
    }

    closeLists();
    html.push(`<p class="whitespace-pre-wrap">${inline(line)}</p>`);
  }

  closeCodeBlock();
  closeDiagramBlock();
  closeLists();
  return html.join('');
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
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const featuredPost = sortedPosts[0] ?? null;

  const categories = useMemo(() => {
    const set = new Set(sortedPosts.map((post) => post.category));
    return ['all', ...Array.from(set)];
  }, [sortedPosts]);

  const tags = useMemo(() => {
    const set = new Set(sortedPosts.flatMap((post) => post.tags));
    return ['all', ...Array.from(set)];
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
      const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
      return categoryMatch && tagMatch;
    });
  }, [sortedPosts, selectedCategory, selectedTag]);

  const currentId = useMemo(() => {
    if (slug) return slug;
    if (typeof window === 'undefined') return null;
    const idMatch = window.location.pathname.match(/\/blog\/([^/]+)/);
    return idMatch ? idMatch[1] : null;
  }, [slug]);

  useEffect(() => {
    setViewCounts(getStoredViewCounts());
  }, []);

  useEffect(() => {
    if (!currentId) {
      setSelectedPost(null);
      return;
    }
    const post = sortedPosts.find((p) => p.slug === currentId) ?? null;
    setSelectedPost(post);
  }, [currentId, sortedPosts]);

  useEffect(() => {
    if (!selectedPost) return;
    const existing = getStoredViewCounts();
    const next = { ...existing, [selectedPost.slug]: (existing[selectedPost.slug] ?? selectedPost.views ?? 0) + 1 };
    saveStoredViewCounts(next);
    setViewCounts(next);
  }, [selectedPost?.slug]);

  const getPostViews = (post: BlogPost) => viewCounts[post.slug] ?? post.views ?? 0;

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
                  <div className="inline-flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{formatCount(getPostViews(selectedPost))}</span>
                  </div>
                </div>
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
                  <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm font-medium">{formatCount(getPostViews(selectedPost))}</span>
                  </div>
                </div>

                <ShareButton
                  title={selectedPost.title}
                  excerpt={selectedPost.excerpt}
                  url={window.location.href}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                />
              </div>
            </div>
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
          {featuredPost && selectedCategory === 'all' && selectedTag === 'all' && (
            <article className="mb-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-purple-100 dark:border-purple-900/40">
              <div className="p-8">
                <span className="inline-block px-3 py-1 mb-4 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-semibold">
                  Featured Post
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-5">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          )}

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-400'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
            <div>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === 'all' ? 'All Tags' : `#${tag}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
                    <div className="inline-flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{formatCount(getPostViews(post))}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{formatCount(getPostViews(post))} views</span>
                  </div>

                  <div className="mt-4">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No posts match your current filters. Try a different category or tag.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
