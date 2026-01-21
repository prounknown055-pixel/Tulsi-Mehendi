import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fzisrmoqptvjbvoxoqjf.supabase.co";
const supabaseAnonKey =
  "sb_publishable_Nh-ZKkXieoFGqS5RQRoqeA_HEtHi7nH";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
