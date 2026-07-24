// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// if (!supabaseUrl || !supabasePublishableKey) {
//   throw new Error("Missing Supabase environment variables. Check .env.local.");
// }
// console.log("Supabase URL being used:", supabaseUrl);

// export const supabase = createClient(supabaseUrl, supabasePublishableKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

console.log("Supabase environment check:", {
  mode: import.meta.env.MODE,
  urlLoaded: Boolean(supabaseUrl),
  keyLoaded: Boolean(supabasePublishableKey),
});

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing Supabase environment variables. Check the Vite environment files.",
  );
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
