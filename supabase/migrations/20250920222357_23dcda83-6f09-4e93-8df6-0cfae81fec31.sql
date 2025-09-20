-- Enable Row Level Security on the message table
ALTER TABLE public.message ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages (needed for contact form to work)
CREATE POLICY "Anyone can insert messages" 
ON public.message 
FOR INSERT 
WITH CHECK (true);

-- Only allow the site owner to read messages
-- This policy restricts reading to a specific email (the site owner)
CREATE POLICY "Only site owner can read messages" 
ON public.message 
FOR SELECT 
USING (false); -- For now, restrict all reading until authentication is implemented

-- Create a security definer function that allows the edge function to insert messages
-- This bypasses RLS for the service role used by edge functions
CREATE OR REPLACE FUNCTION public.insert_contact_message(
  p_name text,
  p_email text,
  p_message text
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  message_id uuid;
BEGIN
  INSERT INTO public.message (name, email, message)
  VALUES (p_name, p_email, p_message)
  RETURNING id INTO message_id;
  
  RETURN message_id;
END;
$$;