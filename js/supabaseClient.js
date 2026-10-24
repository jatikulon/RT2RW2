import { SUPABASE_CONFIG } from './config.js';

let supabaseClient = null;

if (window.supabase && SUPABASE_CONFIG.URL !== "https://YOUR_SUPABASE_PROJECT_ID.supabase.co") {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
    console.log("Supabase Client terhubung!");
} else {
    console.warn("Supabase Client belum dikonfigurasi dengan URL & Key yang valid. Menggunakan penyimpanan LocalStorage.");
}

export { supabaseClient };
