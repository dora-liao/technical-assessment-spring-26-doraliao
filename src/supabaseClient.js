import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rxcroiufriodknmnyugt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Y3JvaXVmcmlvZGtubW55dWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MzE2MDksImV4cCI6MjA3OTUwNzYwOX0.gn0Cp--f-9nQ138jD_sbIH9bzhk_UzjK0D4OZqtyNLg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);