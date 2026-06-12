-- Run this in Supabase SQL Editor for the GCSE Programming Techniques course

create table gcse_submissions (
  id uuid default gen_random_uuid() primary key,
  student_name text not null,
  material_slug text not null,
  material_name text not null,
  code text not null,
  submitted_at timestamptz default now(),
  feedback text,
  feedback_at timestamptz
);

alter table gcse_submissions enable row level security;

create policy "Anyone can submit"
  on gcse_submissions for insert
  with check (true);

create policy "Anyone can read"
  on gcse_submissions for select
  using (true);

create policy "Anyone can update feedback"
  on gcse_submissions for update
  using (true);
