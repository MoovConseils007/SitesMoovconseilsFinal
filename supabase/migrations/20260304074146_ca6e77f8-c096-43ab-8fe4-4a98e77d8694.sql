
-- Create table for quote/devis requests
CREATE TABLE public.devis_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  services TEXT[] NOT NULL DEFAULT '{}',
  budget TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.devis_requests ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public form)
CREATE POLICY "Anyone can submit a devis request"
ON public.devis_requests
FOR INSERT
WITH CHECK (true);

-- Only service role can read (for admin/edge functions)
CREATE POLICY "Service role can read devis requests"
ON public.devis_requests
FOR SELECT
USING (false);
