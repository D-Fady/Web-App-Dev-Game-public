# Game Dev Studio Tracker

Un tableau de bord pour suivre le développement d'un jeu vidéo en petite équipe : Kanban de tâches, roadmap par jalons, mini-GDD et GDD complet, bloc-notes partagé, guide et lexique du game dev.

Le site est 100 % statique (HTML + JavaScript). Les données sont partagées en temps réel entre les membres grâce à [Supabase](https://supabase.com) (offre gratuite suffisante). Chaque équipe utilise **son propre projet Supabase** : personne ne voit les données des autres.

## Essayer sans rien configurer

Ouvrez `index.html` dans un navigateur. Sans configuration Supabase, le site fonctionne en **mode local** : les données restent dans votre navigateur et ne sont pas partagées. Le projet affiché au départ (« Neon Outlaw ») est un exemple fictif à remplacer.

## Installer votre version partagée

### 1. Créer le projet Supabase

1. Créez un compte et un nouveau projet sur [supabase.com](https://supabase.com).
2. Ouvrez **SQL Editor**, collez le contenu de [`supabase/setup.sql`](supabase/setup.sql) et cliquez sur **Run**. Le script crée la table, active le temps réel et réserve l'accès aux utilisateurs connectés.

### 2. Créer les comptes de l'équipe

1. **Authentication > Sign In / Providers** : laissez **Email** activé et **désactivez « Allow new users to sign up »**. Sinon, n'importe qui pourrait se créer un compte et accéder à vos données.
2. **Authentication > Users > Add user > Create new user** : créez un compte (email + mot de passe) par membre, en cochant **Auto Confirm User**.

### 3. Renseigner la configuration

Dans **Project Settings > API**, copiez la *Project URL* et la clé *anon public*, puis collez-les dans [`js/config.js`](js/config.js) :

```js
const SUPABASE_URL = 'https://xxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...';
```

La clé *anon* est faite pour être visible dans le navigateur : ce sont la connexion obligatoire et les règles RLS du script SQL qui protègent les données. **Ne mettez jamais la clé `service_role` dans le site.**

### 4. Mettre en ligne

N'importe quel hébergement statique convient : Cloudflare Pages, GitHub Pages, Netlify… Il n'y a pas d'étape de build : publiez le dossier tel quel.

À l'ouverture du site, chaque membre se connecte avec son email et son mot de passe. Le bouton de déconnexion se trouve à côté de l'indicateur de synchronisation.

## Sauvegardes

L'icône de sauvegarde permet d'exporter et d'importer tout le projet en JSON. Le `.gitignore` exclut les fichiers `.json` pour éviter de publier vos données par erreur.

## Bon à savoir

- Toutes les données d'un projet tiennent dans une seule ligne de la table `tracker_state` (`id = 1`).
- Deux personnes peuvent écrire en même temps dans une note : les modifications sur des lignes différentes sont fusionnées. Pour les tâches et le GDD, c'est la dernière modification enregistrée qui l'emporte.
- Tailwind CSS et supabase-js sont chargés depuis un CDN : le site a besoin d'Internet.

## Licence

Code sous licence [MIT](LICENSE) : vous pouvez l'utiliser, le modifier et le redistribuer librement, y compris pour un projet commercial, en gardant la mention de licence.
