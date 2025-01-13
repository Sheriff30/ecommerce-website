import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ckdwrwjssjlwqwdqkonv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZHdyd2pzc2psd3F3ZHFrb252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MzYwNjcsImV4cCI6MjA1MjMxMjA2N30.HQkMUZIymyWhUXObLhmQQjZKZx651jCNDErSzg34als";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
