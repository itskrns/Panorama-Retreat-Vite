import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dhcrugkufaqtzajbewpb.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoY3J1Z2t1ZmFxdHphamJld3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MzA2NzgsImV4cCI6MjA0NjIwNjY3OH0.3ZNpSKfTf2mvS0pkfcL9D82-xgzOTz1okcdNQIsz2KU`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
