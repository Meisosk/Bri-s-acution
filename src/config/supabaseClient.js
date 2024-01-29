import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghkbhmhuxzfijwlitgwt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdoa2JobWh1eHpmaWp3bGl0Z3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1MzY3MTksImV4cCI6MjAyMTExMjcxOX0.Simt9Bv02YVIm1Dl6QAuxIMvQN-DnTSfe0zEFWo3nGk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// make the env file work!!
