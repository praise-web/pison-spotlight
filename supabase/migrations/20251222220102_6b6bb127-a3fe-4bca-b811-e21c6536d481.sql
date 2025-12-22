-- Create waitlist table for storing waitlist form submissions
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit to the waitlist (public form)
CREATE POLICY "Anyone can join the waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Only admins can view waitlist entries
CREATE POLICY "Admins can view all waitlist entries"
ON public.waitlist
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete waitlist entries
CREATE POLICY "Admins can delete waitlist entries"
ON public.waitlist
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));