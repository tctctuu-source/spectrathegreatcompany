-- Create content management tables
CREATE TABLE public.site_content (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section text NOT NULL, -- 'hero', 'about', 'services', 'contact'
  title text,
  subtitle text,
  content text,
  image_url text,
  button_text text,
  button_link text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create services/features table
CREATE TABLE public.services (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  icon text, -- lucide icon name
  image_url text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create contact form submissions
CREATE TABLE public.contact_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new', -- 'new', 'read', 'replied'
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create user profiles for admin users
CREATE TABLE public.profiles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  email text,
  full_name text,
  role text DEFAULT 'admin', -- 'admin', 'editor'
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for site_content (public read, admin write)
CREATE POLICY "Anyone can view active site content" 
ON public.site_content 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage site content" 
ON public.site_content 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- RLS Policies for services (public read, admin write)
CREATE POLICY "Anyone can view active services" 
ON public.services 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Authenticated users can manage services" 
ON public.services 
FOR ALL 
USING (auth.uid() IS NOT NULL);

-- RLS Policies for contact submissions (admin only)
CREATE POLICY "Authenticated users can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Anyone can create contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', '')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for timestamp updates
CREATE TRIGGER update_site_content_updated_at
BEFORE UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default content
INSERT INTO public.site_content (section, title, subtitle, content, button_text, button_link, order_index) VALUES
('hero', 'Productive Learning', 'with Enthusiasm', 'Transform your potential into achievement with our innovative learning approach that combines expertise with passion.', 'Enquire Now', '/contact', 1),
('about', 'About Our Mission', 'Empowering Growth Through Education', 'We believe in creating learning environments that inspire curiosity, foster creativity, and drive real-world success. Our approach combines proven methodologies with innovative techniques to deliver exceptional educational experiences.', 'Learn More', '/about', 1),
('contact', 'Get In Touch', 'Ready to Start Your Journey?', 'Contact us today to discover how we can help you achieve your learning goals. Our team is ready to provide personalized guidance and support.', 'Contact Us', '/contact', 1);

-- Insert default services
INSERT INTO public.services (title, description, icon, order_index) VALUES
('Interactive Learning', 'Engage with dynamic content and hands-on activities that make learning enjoyable and effective.', 'BookOpen', 1),
('Expert Guidance', 'Learn from experienced professionals who provide personalized mentorship and support.', 'Users', 2),
('Flexible Scheduling', 'Study at your own pace with flexible scheduling options that fit your lifestyle.', 'Clock', 3),
('Progress Tracking', 'Monitor your advancement with comprehensive analytics and milestone achievements.', 'TrendingUp', 4);