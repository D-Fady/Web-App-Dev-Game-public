-- Game Dev Studio Tracker : installation / sécurisation de la base Supabase.
-- À coller dans Supabase > SQL Editor puis « Run ». Le script peut être relancé sans risque :
-- il ne supprime aucune donnée.

-- 1. Table : une seule ligne (id = 1) qui contient tout le projet en JSON
create table if not exists public.tracker_state (
  id   integer primary key,
  data jsonb   not null default '{}'::jsonb,
  rev  integer not null default 0
);
alter table public.tracker_state add column if not exists rev integer not null default 0;
insert into public.tracker_state (id, data) values (1, '{}'::jsonb) on conflict (id) do nothing;

-- 2. Sécurité : seuls les utilisateurs connectés (Supabase Auth) peuvent lire et modifier.
--    Les anciennes règles (par exemple « accès pour anon ») sont supprimées.
alter table public.tracker_state enable row level security;
do $$
declare p record;
begin
  for p in select policyname from pg_policies where schemaname = 'public' and tablename = 'tracker_state' loop
    execute format('drop policy %I on public.tracker_state', p.policyname);
  end loop;
end $$;

revoke all on public.tracker_state from anon;
grant select, update on public.tracker_state to authenticated;

create policy "membres : lecture" on public.tracker_state
  for select to authenticated using (true);
create policy "membres : modification" on public.tracker_state
  for update to authenticated using (true) with check (true);

-- 3. Temps réel : diffuser les modifications de la table
do $$
begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'tracker_state') then
    alter publication supabase_realtime add table public.tracker_state;
  end if;
end $$;
