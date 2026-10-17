// Configuration du projet Supabase (Project Settings > API).
// La clé « anon » est publique par conception : la protection des données repose sur
// la connexion obligatoire et les règles RLS (voir supabase/setup.sql).
// Laisser vide = mode local uniquement (données gardées dans le navigateur, sans partage).
const SUPABASE_URL = '';       // Project URL (ex: https://xxxx.supabase.co)
const SUPABASE_ANON_KEY = '';  // clé « anon public »
