
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Blog } from '../types/blog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  async function fetchBlogs() {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBlogs(data || [])
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('blogs')
        .insert([{ title, content, author: 'Anonymous' }])

      if (error) throw error
      
      setTitle('')
      setContent('')
      fetchBlogs()
    } catch (error) {
      console.error('Error adding blog:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title"
          required
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content..."
          required
          className="h-32"
        />
        <Button type="submit">Post Blog</Button>
      </form>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="space-y-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="prose dark:prose-invert">
              <h2>{blog.title}</h2>
              <p className="text-sm text-gray-500">
                By {blog.author} on {new Date(blog.created_at).toLocaleDateString()}
              </p>
              <p>{blog.content}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
