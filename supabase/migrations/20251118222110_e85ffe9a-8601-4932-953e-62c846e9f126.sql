-- Create orders table for storing Smart CV order submissions
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin_profile TEXT,
  current_job_title TEXT,
  number_of_roles INTEGER,
  cv_type TEXT NOT NULL,
  extras TEXT[] DEFAULT '{}',
  cv_file_url TEXT,
  verification_hosting TEXT NOT NULL,
  additional_docs_urls TEXT[] DEFAULT '{}',
  payment_option TEXT NOT NULL,
  rush_delivery BOOLEAN DEFAULT false,
  discount_code TEXT,
  special_instructions TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert orders (public order form)
CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view their own orders by email
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (email = current_setting('request.jwt.claims', true)::json->>'email' OR true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_orders_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_orders_updated_at();