-- =====================================================
-- CREATE USERS TABLE IN SUPABASE (Fixed Version)
-- =====================================================
-- NOTE: the project backend has been migrated to Spring Boot with an
-- H2 in-memory database.  This SQL file remains for Supabase-related
-- instructions but is not used by the local Spring backend.
-- =====================================================
-- Run this SQL in your Supabase dashboard to enable
-- the Admin Panel to show all users
-- 
-- Go to: https://app.supabase.com → Your Project
-- → SQL Editor → Create New Query → Paste this code
-- =====================================================

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (safe to run even if already enabled)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Users are publicly readable" ON public.users;
DROP POLICY IF EXISTS "Users can insert their own data" ON public.users;
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;

-- Create fresh policies
CREATE POLICY "Users are publicly readable" ON public.users
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own data" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON public.users
  FOR UPDATE USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS users_email_idx ON public.users(email);
CREATE INDEX IF NOT EXISTS users_created_at_idx ON public.users(created_at);

-- Success! The table has been created/updated successfully!
-- Now when users sign up and login, they will appear in the Admin Panel
