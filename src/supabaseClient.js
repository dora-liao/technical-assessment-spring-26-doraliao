import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =  process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_KEY;

console.log("URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("KEY:", process.env.REACT_APP_SUPABASE_KEY ? "Loaded" : "Missing");

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);