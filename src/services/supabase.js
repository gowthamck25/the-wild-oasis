import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://idzylatqcfrillgyebuk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkenlsYXRxY2ZyaWxsZ3llYnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1MTkxNzYsImV4cCI6MjAyNTA5NTE3Nn0.SmyfhVGO_yaZDhNkxnzlF0ec_XwInaZiAa9eDem48Po";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
