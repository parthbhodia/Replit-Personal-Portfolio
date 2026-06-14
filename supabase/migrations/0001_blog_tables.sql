-- Blog engagement tables for the Personal Portfolio project.
-- The app accesses Supabase only from trusted server code using the secret
-- (service-role) key, which bypasses RLS. RLS is still enabled with public
-- read policies so the publishable/anon key can safely read counts if needed.

-- View + heart counts per blog post (blog_post_id is the post's id from blogPosts.json)
create table if not exists public.blog_stats (
  id           bigint generated always as identity primary key,
  blog_post_id text        not null unique,
  hearts       integer     not null default 0,
  views        integer     not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Per-visitor interaction state (used to make hearts idempotent per fingerprint)
create table if not exists public.user_interactions (
  id               bigint generated always as identity primary key,
  user_fingerprint text        not null,
  blog_post_id     text        not null,
  has_liked        boolean     not null default false,
  has_viewed       boolean     not null default false,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (user_fingerprint, blog_post_id)
);

-- Threaded comments per post
create table if not exists public.comments (
  id               bigint generated always as identity primary key,
  blog_post_id     text        not null,
  parent_id        bigint      references public.comments(id) on delete cascade,
  author_name      text        not null,
  author_email     text        not null,
  content          text        not null,
  user_fingerprint text        not null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists idx_blog_stats_post        on public.blog_stats (blog_post_id);
create index if not exists idx_user_interactions_post on public.user_interactions (blog_post_id);
create index if not exists idx_comments_post          on public.comments (blog_post_id);

-- Enable RLS. Server writes use the service-role key and bypass these policies.
alter table public.blog_stats        enable row level security;
alter table public.user_interactions enable row level security;
alter table public.comments          enable row level security;

-- Public read access (counts + comments). No public write policies: writes go
-- through the trusted server with the service-role key.
drop policy if exists "public read blog_stats" on public.blog_stats;
create policy "public read blog_stats" on public.blog_stats for select using (true);

drop policy if exists "public read comments" on public.comments;
create policy "public read comments" on public.comments for select using (true);
