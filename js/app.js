/* Glossaire Game Dev Exhaustif */
const GAME_DEV_LEXICON = [
  {
    term: "Scope Creep",
    tag: "Gestion & Prod",
    def: "Gonflement incontrôlé du projet. Tendance à ajouter continuellement de nouvelles idées non planifiées, menant aux retards et souvent à l'abandon du jeu."
  },
  {
    term: "Greyboxing / Blockout",
    tag: "Level & Game Design",
    def: "Construction d'un niveau avec de simples formes géométriques grises sans textures, afin de tester les déplacements, distances et le fun avant d'y intégrer la 3D/2D."
  },
  {
    term: "Vertical Slice",
    tag: "Production",
    def: "Une portion très courte du jeu (5 à 10 minutes) entièrement terminée avec graphismes finaux, SFX, interface et polish. Elle sert d'étalon de mesure pour évaluer le reste du développement."
  },
  {
    term: "Game Feel / Juice",
    tag: "Gameplay",
    def: "Ensemble des retours sensoriels (screenshake, particules, vibrations, hitstop, sons) qui rendent les actions du joueur agréables, viscérales et gratifiantes."
  },
  {
    term: "Core Loop",
    tag: "Game Design",
    def: "La chaîne d'actions cycliques fondamentales que le joueur répète toutes les quelques minutes (ex: Explorer -> Combattre -> Récolter -> Améliorer -> Recommencer)."
  },
  {
    term: "Coyote Time",
    tag: "Gameplay & Polish",
    def: "Fenêtre de grâce de quelques frames (50 à 100ms) permettant au joueur de sauter même s'il vient de quitter le bord d'une plateforme. Évite un sentiment de frustration injuste."
  },
  {
    term: "Input Buffering",
    tag: "Contrôles",
    def: "Système qui mémorise la touche pressée par le joueur quelques millisecondes avant la fin d'une animation pour exécuter l'action immédiatement au moment opportun."
  },
  {
    term: "Hitbox & Hurtbox",
    tag: "Combat & Physique",
    def: "Une Hitbox est la zone qui inflige des dégâts (le coup d'épée). Une Hurtbox est la zone sensible qui subit les dégâts (le corps du personnage)."
  },
  {
    term: "Hitstop / Freeze Frame",
    tag: "Feedback",
    def: "Micro-arrêt sur image (2 à 4 frames) au moment exact d'un impact violent. Donne une sensation de poids et d'impact physique réel sans casser le rythme."
  },
  {
    term: "FSM (Finite State Machine)",
    tag: "Programmation",
    def: "Machine à états finis : architecture logicielle où une entité (joueur, ennemi) ne peut être que dans un état à la fois (Idle, Walk, Attack, Dead) avec des règles de transition claires."
  },
  {
    term: "Draw Calls",
    tag: "Optimisation Moteur",
    def: "Ordres envoyés par le CPU au processeur graphique (GPU) pour afficher un objet. Trop de Draw Calls fait chuter le framerate, d'où l'importance de fusionner les textures (Atlas/Batching)."
  },
  {
    term: "Git LFS (Large File Storage)",
    tag: "Outils & Versioning",
    def: "Extension de Git indispensable en jeu vidéo pour stocker les fichiers lourds (textures 4K, modèles 3D, sons wav) sur un serveur distant sans faire exploser la taille du dépôt de code."
  },
  {
    term: "NavMesh (Navigation Mesh)",
    tag: "Intelligence Artificielle",
    def: "Grille polygonale invisible générée sur les surfaces de marche, utilisée par les algorithmes de pathfinding (A*) pour guider les ennemis sans traverser les murs."
  },
  {
    term: "LOD (Level of Detail)",
    tag: "Graphismes 3D",
    def: "Technique remplaçant un modèle 3D détaillé par une version allégée en polygones dès que la caméra s'en éloigne, économisant la puissance de rendu."
  },
  {
    term: "Shader",
    tag: "Rendu & Graphismes",
    def: "Petit programme exécuté sur le GPU calculant le rendu des pixels (lumière, distorsion néon, reflets d'eau, hologrammes, scanlines CRT)."
  },
  {
    term: "Gold Master / Release",
    tag: "Jalon de Production",
    def: "La version finale définitive du jeu, testée et certifiée sans bug bloquant, prête à être déployée publiquement sur Steam ou les consoles."
  },
  {
    term: "Playtest Aveugle (Blind Playtest)",
    tag: "Assurance Qualité (QA)",
    def: "Session où l'on confie la manette à un joueur inconnu sans lui donner aucune consigne ni explication, en observant où il bloque ou se perd."
  },
  {
    term: "Post-Mortem",
    tag: "Gestion de Projet",
    def: "Bilan critique rédigé par l'équipe après la sortie : analyse de ce qui a bien fonctionné, ce qui a échoué et ce qu'il faut changer pour le prochain projet."
  },
  {
    term: "MVP (Minimum Viable Product)",
    tag: "Gestion de Projet",
    def: "Version minimale du jeu qui contient seulement l'essentiel pour être jouée et jugée. Tout le reste s'ajoute ensuite."
  },
  {
    term: "Piliers de Design",
    tag: "Game Design",
    def: "Les 3 à 5 règles fondamentales qui définissent l'identité du jeu. Toute fonctionnalité qui les contredit est refusée."
  },
  {
    term: "GDD (Game Design Document)",
    tag: "Game Design",
    def: "Document vivant qui décrit le jeu (concept, mécaniques, univers, direction artistique, technique). Il sert de référence commune et se met à jour tout au long du projet."
  },
  {
    term: "Backlog",
    tag: "Gestion de Projet",
    def: "Liste de toutes les tâches et idées qui restent à faire, classées par priorité. On pioche dedans pour préparer chaque sprint."
  },
  {
    term: "Sprint",
    tag: "Gestion de Projet",
    def: "Période courte et fixe (ici une semaine) pendant laquelle l'équipe s'engage sur un petit lot de tâches précis."
  },
  {
    term: "Definition of Done",
    tag: "Gestion de Projet",
    def: "Liste de critères communs qu'une tâche doit remplir pour être considérée comme terminée (testée, commitée, sans régression)."
  },
  {
    term: "MoSCoW",
    tag: "Gestion de Projet",
    def: "Méthode de priorisation : Must have, Should have, Could have, Won't have. Aide à décider quoi couper en cas de retard."
  },
  {
    term: "Milestone / Jalon",
    tag: "Jalon de Production",
    def: "Étape clé du projet avec un objectif vérifiable (prototype, vertical slice, alpha, bêta). Sert à mesurer l'avancement."
  },
  {
    term: "Crunch",
    tag: "Gestion & Prod",
    def: "Période de travail intensif et épuisant pour tenir une échéance. À éviter : elle dégrade la qualité et la motivation."
  },
  {
    term: "Bus Factor",
    tag: "Gestion de Projet",
    def: "Nombre de personnes dont l'absence bloquerait le projet. Plus il est bas, plus le risque est grand : documentez et partagez les connaissances."
  },
  {
    term: "Feature Freeze",
    tag: "Production",
    def: "Moment à partir duquel on n'ajoute plus aucune nouvelle fonctionnalité pour se concentrer sur les corrections (début de la Bêta)."
  },
  {
    term: "Alpha / Bêta",
    tag: "Jalon de Production",
    def: "Alpha : toutes les fonctionnalités sont présentes mais encore instables. Bêta : le contenu est complet, on corrige et on équilibre."
  },
  {
    term: "Build",
    tag: "Outils & Versioning",
    def: "Version du jeu exportée et prête à être lancée ou testée, générée à partir du projet."
  },
  {
    term: "Pipeline",
    tag: "Pipeline & Assets",
    def: "Chaîne d'étapes qu'un élément (asset, niveau, fonctionnalité) suit de sa création jusqu'à son intégration dans le jeu."
  },
  {
    term: "Asset",
    tag: "Pipeline & Assets",
    def: "Tout fichier utilisé par le jeu : sprite, modèle 3D, texture, son, musique, police, script."
  },
  {
    term: "Placeholder",
    tag: "Pipeline & Assets",
    def: "Élément provisoire (cube, sprite grossier, son temporaire) qui remplace un asset final pendant le prototypage."
  },
  {
    term: "Prefab / Scène / Node",
    tag: "Moteurs",
    def: "Briques d'organisation d'un projet : prefab (Unity) ou scène (Godot) = objet réutilisable ; node (Godot) = élément d'une scène. Sous Unreal, on utilise des Blueprints et des Actors."
  },
  {
    term: "Blueprint (Unreal)",
    tag: "Moteurs",
    def: "Système de programmation visuelle d'Unreal Engine : on relie des nœuds au lieu d'écrire du code."
  },
  {
    term: "GDScript",
    tag: "Moteurs",
    def: "Langage de script de Godot, proche du Python, conçu pour s'intégrer étroitement au moteur."
  },
  {
    term: "Commit / Branch / Pull Request",
    tag: "Outils & Versioning",
    def: "Commit : enregistrement d'un ensemble de modifications. Branch : ligne de développement parallèle. Pull Request : demande de fusion relue par un autre membre."
  },
  {
    term: "Merge Conflict",
    tag: "Outils & Versioning",
    def: "Conflit qui apparaît quand deux personnes ont modifié le même endroit d'un fichier ; il faut le résoudre à la main avant de fusionner."
  },
  {
    term: ".gitignore",
    tag: "Outils & Versioning",
    def: "Fichier qui liste ce que Git doit ignorer (caches, fichiers générés par le moteur, builds) pour ne pas alourdir le dépôt."
  },
  {
    term: "Dette Technique",
    tag: "Programmation",
    def: "Raccourcis pris dans le code pour aller vite, qui rendent les évolutions futures plus lentes et risquées. Elle se rembourse par du refactoring."
  },
  {
    term: "Refactoring",
    tag: "Programmation",
    def: "Réorganisation du code existant pour le rendre plus propre et lisible, sans changer ce que fait le jeu."
  },
  {
    term: "Object Pooling",
    tag: "Optimisation Moteur",
    def: "Technique qui réutilise un lot d'objets déjà créés (balles, particules) au lieu d'en créer et détruire sans cesse, pour éviter les saccades."
  },
  {
    term: "Delta Time",
    tag: "Programmation",
    def: "Temps écoulé entre deux images. Multiplier les mouvements par lui rend la vitesse du jeu identique quel que soit le nombre d'images par seconde."
  },
  {
    term: "Génération Procédurale",
    tag: "Game Design",
    def: "Création automatique de contenu (niveaux, cartes, objets) par des algorithmes et du hasard contrôlé plutôt qu'à la main."
  },
  {
    term: "Onboarding / FTUE",
    tag: "Game Design",
    def: "Première expérience du joueur : tutoriel, premières minutes. Elle doit enseigner les bases sans l'ennuyer."
  },
  {
    term: "Courbe de Difficulté",
    tag: "Game Design",
    def: "Évolution de la difficulté au fil du jeu. Idéalement, un défi qui monte progressivement sans frustrer ni ennuyer."
  },
  {
    term: "Télégraphie (Telegraphing)",
    tag: "Combat & Physique",
    def: "Signal visuel ou sonore qui annonce une attaque ennemie avant qu'elle ne frappe, pour que le joueur puisse réagir équitablement."
  },
  {
    term: "Smoke Test",
    tag: "Assurance Qualité (QA)",
    def: "Test rapide et basique qui vérifie que le jeu se lance et que les fonctions essentielles marchent avant des tests plus poussés."
  },
  {
    term: "Régression",
    tag: "Assurance Qualité (QA)",
    def: "Bug réapparu ou nouveau bug sur quelque chose qui fonctionnait auparavant, souvent causé par une modification récente."
  },
  {
    term: "Reproduction Steps",
    tag: "Assurance Qualité (QA)",
    def: "Étapes précises permettant de provoquer un bug à coup sûr. Sans elles, un bug est très difficile à corriger."
  },
  {
    term: "Hotfix / Patch",
    tag: "Production",
    def: "Correctif publié rapidement après la sortie pour réparer un problème. Un patch peut aussi regrouper plusieurs corrections et ajustements."
  },
  {
    term: "Wishlist",
    tag: "Publication",
    def: "Liste de souhaits Steam. Le nombre de wishlists avant la sortie est un indicateur clé de l'intérêt des joueurs."
  },
  {
    term: "Capsule Art",
    tag: "Publication",
    def: "Image de présentation du jeu sur Steam (plusieurs tailles requises). Elle doit être lisible même en petit."
  },
  {
    term: "Press Kit",
    tag: "Publication",
    def: "Dossier téléchargeable pour la presse et les créateurs : logo, captures, bande-annonce, description, contact."
  },
  {
    term: "Devlog",
    tag: "Publication",
    def: "Journal de développement public (texte, vidéo ou clips courts) pour partager l'avancement et fidéliser une communauté."
  },
  {
    term: "Early Access",
    tag: "Publication",
    def: "Sortie anticipée d'un jeu encore en développement, financée par les premiers joueurs qui donnent leurs retours."
  },
  {
    term: "Asset Flip",
    tag: "Publication",
    def: "Jeu bâclé assemblé presque uniquement avec des assets du commerce, sans création originale. Très mal perçu par les joueurs."
  }
];

/* Project Data Model */
let projectData = {
  notes: [],
  theme: {
    bg: '#060913',
    accent: '#8b5cf6'
  },
  gdd: {
    title: "Neon Outlaw : Cyberpunk Rogue",
    pitch: "Un roguelite d'action frénétique en vue de dessus où hacker le temps et voler des implants cybernétiques sont vos seules chances de survie.",
    genre: "Fast-Paced Action Roguelite",
    engine: "Godot / Unity / UE5",
    coreLoop: "Infiltrer un secteur corpos -> Neutraliser les drones -> Voler les puces -> Upgrader au repaire -> Affronter le boss de secteur.",
    references: "Dead Cells, Hotline Miami, Hades, Ruiner",
    pillar1: "Fluidité & Contrôle chirurgical (Zéro latence ressentie)",
    pillar2: "Synergies d'implants expérimentales et dynamiques",
    pillar3: "Ambiance synthwave nocturne et visuels néon contrastés",
    artStyle: "Pixel-art précis 32x32 avec éclairage dynamique 2.5D, shaders CRT discrets et néons saturés.",
    audioStyle: "Bande-son Darksynth nerveuse (130-140 BPM), bruitages d'impacts métalliques et kicks très percutants."
  },
  fullGdd: {
    title: "Neon Outlaw : Cyberpunk Rogue",
    platforms: "PC (Steam, Itch.io) - Manette recommandée + Clavier/Souris",
    pitch: "Dans une mégalopole contrôlée par les mégacorporations, vous incarnez un mercenaire renégat équipé d'un cyber-cœur défaillant qui nécessite des puces de données fraîches pour ne pas s'arrêter. Chaque secteur traversé est une course contre la montre et la mort.",
    usp: "1. Mécanique de 'Surcharge Cybernétique' : plus votre santé est basse, plus vos tirs sont dévastateurs.\n2. Dash avec bullet-time directionnel réactif.\n3. Génération modulaire d'arènes garantissant zéro temps mort.",
    loop: "1. Entrée dans une arène de secteur fermée.\n2. Priorisation des cibles (hacker les alarmes, détruire les générateurs de boucliers).\n3. Combats nerveux combinant tirs à distance et découpe au corps-à-corps.\n4. Choix d'un implant parmi trois à la fin de chaque salle.\n5. Passage au repaire entre deux runs pour débloquer de nouveaux châssis.",
    movement: "Vitesse de marche de 380 px/s. Dash instantané de 0.18s avec 10 frames d'invulnérabilité complète. Coyote time de 80ms sur les bordures d'arènes. Input buffering de 120ms sur l'attaque de mêlée.",
    combat: "3 slots d'armes : Principale, Secondaire et Capacité cybernétique. Hitstop de 2 frames sur contact d'arme lourde. Recul de caméra (screenshake) paramétrable dans les options d'accessibilité.",
    runProgression: "3 raretés de puces : Standard (Cyan), Militaire (Violet) et Prototype (Or). Système de surchauffe forçant à alterner tir et corps-à-corps.",
    metaProgression: "Le repaire permet d'investir des nano-crédits pour élargir le pool d'armes trouvables et débloquer des modificateurs de difficulté volontaires (Pactes de Défi).",
    lore: "District 99 : la nuit perpétuelle sous des pluies acides illuminées par des panneaux publicitaires holographiques. Les corpos ont banni les émotions humaines pour maximiser la productivité.",
    characters: "Le Protagoniste : 'V-Zero', ex-ingénieur cobaye.\nL'Opératrice : 'Kira', voix radio sarcastique qui guide le joueur et commente ses morts.\nLes Boss : 3 directeurs exécutifs cybernétisés.",
    levelDesign: "Salles modulaires 2D de 960x540 px. Portes magnétiques qui ne s'ouvrent qu'une fois la menace neutralisée. 3 sas de repos garantis par run.",
    enemies: "1. Drone Scout : Rapide, faible, tire en rafales triangulaires.\n2. Corpo Enforcer : Bouclier frontal nécessitant un dash dans son dos.\n3. Hacker Fantôme : Téléportation et pièges électriques de zone.",
    artDirection: "Palette sombre à dominante bleu nuit (#060913), avec accents saturés violet néon (#8b5cf6), cyan (#06b6d4) et jaune alerte. Effet de lueur bloom dynamique sur les lasers.",
    hudUx: "Jauge de santé circulaire autour du réticule de visée pour ne jamais détourner le regard de l'action. Indicateur d'alerte rouge sur les bords d'écran en cas de danger hors-champ.",
    music: "Bande-son adaptative par stems : la batterie et la basse slappée ne se déclenchent que lorsque des ennemis sont alertés. Tempo fixe 135 BPM pour cadencer le rythme cardiaque.",
    sfx: "Banque de sons personnalisée avec bruitages de percuteurs métalliques lourds, crépitements électriques synthétiques et alertes sonores diégétiques claires.",
    techArchitecture: "Godot 4 (ou UE5/Unity selon tests). Architecture basée sur des Nodes composants indépendants (HealthComponent, HitboxComponent, VelocityComponent). Gestion des sauvegardes chiffrées en JSON.",
    outOfScope: "EXCLU FORMELLEMENT : Multijoueur réseau (trop lourd à netcoder pour une équipe débutante), doublages intégraux de personnages, mini-jeux de hacking complexes qui coupent le rythme d'action.",
    topRisks: "Risque numéro 1 : Déséquilibre de l'IA rendant le jeu trop difficile dès la salle 3. Solution : Playtests hebdomadaires dès le prototype greybox."
  },
  milestones: [
    {
      id: "Concept",
      name: "Phase 1 : Concept & Pré-production",
      desc: "Définition des 3 piliers inaltérables, validation technique du moteur et moodboard.",
      status: "completed",
      targetDuration: "2 semaines (8h/sem)"
    },
    {
      id: "Prototype",
      name: "Phase 2 : Prototype (Core Loop & Greybox)",
      desc: "Déplacements, sensations de tir et dash avec de simples cubes gris sans graphismes.",
      status: "inprogress",
      targetDuration: "1 mois (soirs & week-ends)"
    },
    {
      id: "Vertical Slice",
      name: "Phase 3 : Vertical Slice (Niveau Témoin)",
      desc: "5 minutes de jeu complètes avec graphismes finaux, SFX, musiques et interface terminée.",
      status: "planned",
      targetDuration: "Semestre 1 (2 mois)"
    },
    {
      id: "Alpha",
      name: "Phase 4 : Production (Alpha Feature-Complete)",
      desc: "Intégration de tous les ennemis, armes, boss et arbres de compétences.",
      status: "planned",
      targetDuration: "Semestre 2 (3 mois)"
    },
    {
      id: "Beta",
      name: "Phase 5 : Bêta, Polish & Playtests",
      desc: "Équilibrage des dégâts, corrections de bugs, 60 FPS constants et retours joueurs.",
      status: "planned",
      targetDuration: "1 mois intensif"
    },
    {
      id: "Release",
      name: "Phase 6 : Release & Lancement",
      desc: "Build Master validé, page Steam / Itch.io ouverte et trailer de présentation.",
      status: "planned",
      targetDuration: "Juin 2027"
    }
  ],
  tasks: [
    {
      id: "task-1",
      title: "Contrôleur de mouvement & système de Dash",
      desc: "Prise en charge Clavier/Souris + Gamepad, inertie paramétrable et micro freeze-frame à l'impact.",
      pole: "Programmation",
      priority: "Critique",
      milestone: "Prototype",
      column: "inprogress"
    },
    {
      id: "task-2",
      title: "Fiche technique des 3 armes principales",
      desc: "Pistolet à impulsion, Fusil à dispersion thermique et Lame énergétique de corps-à-corps.",
      pole: "Game Design",
      priority: "Haute",
      milestone: "Prototype",
      column: "done"
    },
    {
      id: "task-3",
      title: "Spritesheet du personnage et animations de course",
      desc: "Animations Idle, Run 8 directions et traînée lumineuse néon au moment du dash.",
      pole: "Art & 3D",
      priority: "Moyenne",
      milestone: "Vertical Slice",
      column: "todo"
    },
    {
      id: "task-4",
      title: "Composition de la boucle musicale de combat 1",
      desc: "Piste Darksynth énergique 135 BPM synchronisée sur l'intensité des vagues d'ennemis.",
      pole: "Audio & SFX",
      priority: "Moyenne",
      milestone: "Vertical Slice",
      column: "todo"
    },
    {
      id: "task-5",
      title: "HUD minimaliste : jauges de santé et de surchauffe",
      desc: "Interface utilisateur épurée en haut à gauche avec alertes clignotantes lors des tirs continus.",
      pole: "UI & UX",
      priority: "Basse",
      milestone: "Vertical Slice",
      column: "backlog"
    },
    {
      id: "task-6",
      title: "Correction collision anormale sur les angles de murs",
      desc: "Le personnage peut traverser les coins droits lors d'une combinaison dash + changement d'arme.",
      pole: "Bugfix",
      priority: "Critique",
      milestone: "Prototype",
      column: "testing"
    }
  ]
};

const DEFAULT_PROJECT = JSON.parse(JSON.stringify(projectData));

function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toastNotification');
  const msg = document.getElementById('toastMessage');
  const iconBox = document.getElementById('toastIconContainer');

  msg.textContent = message;
  if (isSuccess) {
    iconBox.innerHTML = `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    toast.style.borderColor = 'var(--border-neon)';
    toast.style.backgroundColor = 'rgba(11, 16, 33, 0.95)';
  } else {
    iconBox.innerHTML = `<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    toast.style.borderColor = 'rgba(239, 68, 68, 0.5)';
    toast.style.backgroundColor = 'rgba(38, 7, 7, 0.95)';
  }

  toast.classList.remove('translate-y-16', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-16', 'opacity-0');
  }, 2500);
}

function customConfirm(title, message, onConfirm) {
  const modal = document.getElementById('confirmModal');
  const titleEl = document.getElementById('confirmModalTitle');
  const textEl = document.getElementById('confirmModalText');
  const okBtn = document.getElementById('confirmOkBtn');
  const cancelBtn = document.getElementById('confirmCancelBtn');

  titleEl.textContent = title;
  textEl.textContent = message;
  modal.classList.remove('hidden');

  const cleanup = () => {
    modal.classList.add('hidden');
    okBtn.onclick = null;
    cancelBtn.onclick = null;
  };

  okBtn.onclick = () => {
    cleanup();
    onConfirm();
  };
  cancelBtn.onclick = () => {
    cleanup();
  };
}

function flashSaveIndicator() {
  const indicator = document.getElementById('saveIndicator');
  if (indicator) {
    indicator.classList.remove('opacity-40');
    indicator.classList.add('opacity-100');
    setTimeout(() => indicator.classList.add('opacity-40'), 1200);
  }
}

/* ====== SUPABASE : synchronisation temps réel ====== */
/* SUPABASE_URL et SUPABASE_ANON_KEY sont définis dans js/config.js */
const SUPABASE_ROW_ID = 1;
const SUPABASE_TABLE = 'tracker_state';

const CLIENT_ID = Math.random().toString(36).slice(2) + Date.now().toString(36);
let sb = null;               // client Supabase (null = mode local uniquement)
let remoteReady = false;     // vrai une fois la première lecture distante terminée
let saveTimer = null;
let lastSyncedJson = '';

function supabaseConfigured() {
  return SUPABASE_URL.startsWith('https://') && SUPABASE_ANON_KEY.length > 40 && window.supabase;
}

function setSyncStatus(state) {
  const box = document.getElementById('saveIndicator');
  const txt = document.getElementById('saveIndicatorText');
  if (!box || !txt) return;
  const dot = box.querySelector('span');
  const map = {
    synced:  { t: 'Synchronisé',        c: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30', d: 'bg-emerald-400' },
    saving:  { t: 'Envoi...',           c: 'text-amber-300 bg-amber-950/40 border-amber-500/30',       d: 'bg-amber-300' },
    local:   { t: 'Local uniquement',   c: 'text-slate-300 bg-slate-800/60 border-slate-600/40',       d: 'bg-slate-400' },
    offline: { t: 'Erreur de synchro',  c: 'text-rose-300 bg-rose-950/40 border-rose-500/30',          d: 'bg-rose-400' }
  };
  const m = map[state] || map.local;
  box.className = 'flex items-center text-[11px] gap-1.5 px-2 py-1 rounded-md border transition-opacity ' + m.c;
  dot.className = 'w-1.5 h-1.5 rounded-full animate-pulse ' + m.d;
  txt.textContent = m.t;
}

/* Données partagées = tout sauf le thème (le thème reste propre à chaque utilisateur) */
function getSharedData() {
  const { theme, ...shared } = projectData;
  return shared;
}

function applySharedData(shared) {
  if (!shared || !Array.isArray(shared.tasks)) return false;
  projectData.gdd = Object.assign({}, DEFAULT_PROJECT.gdd, shared.gdd || {});
  projectData.fullGdd = Object.assign({}, DEFAULT_PROJECT.fullGdd, shared.fullGdd || {});
  projectData.tasks = shared.tasks;
  projectData.notes = Array.isArray(shared.notes) ? shared.notes : (projectData.notes || []);
  if (Array.isArray(shared.milestones)) {
    projectData.milestones = shared.milestones.map((m, idx) => {
      const d = DEFAULT_PROJECT.milestones[idx] || {};
      return {
        id: m.id || d.id,
        name: m.name || d.name,
        desc: m.desc || d.desc,
        status: m.status || d.status || 'planned',
        targetDuration: m.targetDuration || m.targetDate || d.targetDuration || 'À définir'
      };
    });
  }
  return true;
}

/* Rafraîchit l'interface sans écraser le champ que l'utilisateur est en train de saisir */
function refreshUIFromData() {
  const active = document.activeElement;
  const typing = document.hasFocus() && active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA') && active.id &&
                 (active.id.startsWith('gdd') || active.id.startsWith('fg_'));
  const keepId = typing ? active.id : null;
  const keepVal = typing ? active.value : null;
  populateMiniGDDForm();
  populateFullGDDForm();
  if (keepId) document.getElementById(keepId).value = keepVal;
  renderKanban();
  renderRoadmap();
  renderNotes();
  updateHeaderLabels();
}

/* ---- Fusion de type « diff3 » par lignes : deux personnes peuvent écrire en même temps sur des lignes différentes ---- */
function diffHunks(a, b) {
  let s0 = 0;
  while (s0 < a.length && s0 < b.length && a[s0] === b[s0]) s0++;
  let ea = a.length, eb = b.length;
  while (ea > s0 && eb > s0 && a[ea - 1] === b[eb - 1]) { ea--; eb--; }
  const A = a.slice(s0, ea), B = b.slice(s0, eb);
  const n = A.length, m = B.length;
  if (n === 0 && m === 0) return [];
  if (n === 0 || m === 0 || n * m > 4e6) return [{ s: s0, e: s0 + n, lines: B }];
  const w = m + 1;
  const dp = new Uint16Array((n + 1) * w);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i * w + j] = A[i] === B[j] ? dp[(i + 1) * w + j + 1] + 1 : Math.max(dp[(i + 1) * w + j], dp[i * w + j + 1]);
    }
  }
  const hunks = [];
  let i = 0, j = 0, cur = null;
  while (i < n || j < m) {
    if (i < n && j < m && A[i] === B[j]) { if (cur) { hunks.push(cur); cur = null; } i++; j++; }
    else if (j < m && (i >= n || dp[i * w + j + 1] >= dp[(i + 1) * w + j])) {
      if (!cur) cur = { s: s0 + i, e: s0 + i, lines: [] };
      cur.lines.push(B[j]); j++;
    } else {
      if (!cur) cur = { s: s0 + i, e: s0 + i, lines: [] };
      cur.e = s0 + i + 1; i++;
    }
  }
  if (cur) hunks.push(cur);
  return hunks;
}

// base = version commune, mine = ma version locale, theirs = version distante. En cas de conflit sur la même ligne, ma version gagne.
function merge3Lines(base, mine, theirs) {
  const B = base.split('\n');
  const hm = diffHunks(B, mine.split('\n'));
  const ht = diffHunks(B, theirs.split('\n')).filter(y =>
    !hm.some(x => (x.s < y.e && y.s < x.e) || (x.s === x.e && y.s === y.e && x.s === y.s)));
  const all = hm.concat(ht).sort((p, q) => p.s - q.s || (p.e - p.s) - (q.e - q.s));
  const out = [];
  let pos = 0;
  for (const h of all) {
    for (; pos < h.s; pos++) out.push(B[pos]);
    for (const l of h.lines) out.push(l);
    pos = Math.max(pos, h.e);
  }
  for (; pos < B.length; pos++) out.push(B[pos]);
  return out.join('\n');
}

function rebaseNotes(baseNotes, localNotes, remoteNotes) {
  const mapOf = arr => new Map(arr.map(n => [n.id, n]));
  const Bm = mapOf(baseNotes), Lm = mapOf(localNotes), Rm = mapOf(remoteNotes);
  const result = [];
  remoteNotes.forEach(r => {
    const b = Bm.get(r.id), l = Lm.get(r.id);
    if (!b) { result.push(r); return; }            // nouvelle note créée par un autre
    if (!l) return;                                // supprimée localement (en attente d'envoi)
    const title = l.title !== b.title ? l.title : r.title;
    const bc = b.content || '', lc = l.content || '', rc = r.content || '';
    const content = lc === bc ? rc : (rc === bc ? lc : merge3Lines(bc, lc, rc));
    const parentId = l.parentId !== b.parentId ? l.parentId : r.parentId;
    result.push(Object.assign({}, r, { title, content, parentId, updatedAt: Math.max(l.updatedAt || 0, r.updatedAt || 0) }));
  });
  localNotes.forEach(l => { if (!Bm.has(l.id) && !Rm.has(l.id)) result.push(l); });   // créées localement, pas encore envoyées
  return result;
}

let useRev = true;          // faux si la colonne « rev » n'existe pas encore dans la table
let serverRev = 0;          // dernière révision connue côté serveur
let baseNotes = [];         // notes telles que le serveur les a (ancêtre commun pour la fusion)
let pushing = false;
let pushAgain = false;

const cloneJson = v => JSON.parse(JSON.stringify(v));

// Intègre une version distante : tâches/GDD remplacés par la version distante, notes fusionnées avec mes modifications en attente
function integrateRemote(remoteData, remoteRev, keepMineOthers) {
  if (!remoteData || !Array.isArray(remoteData.tasks)) return false;
  const localNotes = cloneJson(ensureNotes());
  const remoteNotes = Array.isArray(remoteData.notes) ? remoteData.notes : [];
  if (!keepMineOthers) applySharedData(remoteData);
  projectData.notes = rebaseNotes(baseNotes, localNotes, remoteNotes);
  baseNotes = cloneJson(remoteNotes);
  if (useRev && typeof remoteRev === 'number') serverRev = remoteRev;
  try { localStorage.setItem('gamedev_tracker_data_v3', JSON.stringify(projectData)); } catch (e) {}
  refreshUIFromData();
  if (JSON.stringify(projectData.notes) !== JSON.stringify(remoteNotes)) schedulePush(250);
  return true;
}

function schedulePush(delay) {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushToSupabase, delay);
}

async function pushToSupabase() {
  if (!sb || !remoteReady) return;
  if (pushing) { pushAgain = true; return; }
  pushing = true;
  setSyncStatus('saving');
  try {
    const sentNotes = cloneJson(ensureNotes());
    const payload = Object.assign({}, getSharedData(), { _by: CLIENT_ID, _ts: Date.now() });
    let q = sb.from(SUPABASE_TABLE)
      .update(useRev ? { data: payload, rev: serverRev + 1 } : { data: payload })
      .eq('id', SUPABASE_ROW_ID);
    if (useRev) q = q.eq('rev', serverRev);
    const { data: rows, error } = await q.select(useRev ? 'rev' : 'id');
    if (error) throw error;
    if (!rows || rows.length === 0) {
      if (!useRev) throw new Error('Ligne id=1 introuvable dans la table');
      // Conflit : quelqu'un a enregistré juste avant nous -> on récupère sa version et on fusionne les notes
      const res = await sb.from(SUPABASE_TABLE).select('data,rev').eq('id', SUPABASE_ROW_ID).maybeSingle();
      if (res.error) throw res.error;
      if (!res.data) throw new Error('Ligne id=1 introuvable dans la table');
      integrateRemote(res.data.data, res.data.rev, true);
      pushAgain = true;
    } else {
      if (useRev) serverRev = rows[0].rev;
      baseNotes = sentNotes;
      setSyncStatus('synced');
    }
  } catch (err) {
    console.error('Erreur de sauvegarde Supabase :', err);
    setSyncStatus('offline');
    showToast('Erreur de synchronisation (voir la console)', false);
  } finally {
    pushing = false;
    if (pushAgain) { pushAgain = false; schedulePush(50); }
  }
}

function persistData(delay = 500) {
  flashSaveIndicator();
  // Cache local (utile hors-ligne)
  try {
    localStorage.setItem('gamedev_tracker_data_v3', JSON.stringify(projectData));
  } catch (err) {
    console.warn("Erreur d'écriture localStorage:", err);
  }
  if (!sb || !remoteReady) return;
  schedulePush(delay);   // regroupe les frappes rapides
}

async function initSupabase() {
  if (!supabaseConfigured()) {
    setSyncStatus('local');
    console.warn('Supabase non configuré : mode local uniquement.');
    return;
  }
  try {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { showLogin(); return; }   // connexion obligatoire : sans session, aucune donnée n'est lue
    await startSync(session);
  } catch (err) {
    console.error('Connexion Supabase impossible :', err);
    sb = null;
    setSyncStatus('offline');
    showToast('Supabase injoignable : mode local', false);
  }
}

/* ---- Connexion (Supabase Auth, email + mot de passe) ---- */
function showLogin(message) {
  document.getElementById('loginOverlay').classList.remove('hidden');
  document.getElementById('loginError').textContent = message || '';
  setSyncStatus('local');
}

async function submitLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('loginSubmit');
  const err = document.getElementById('loginError');
  btn.disabled = true;
  err.textContent = '';
  const { data, error } = await sb.auth.signInWithPassword({
    email: document.getElementById('loginEmail').value.trim(),
    password: document.getElementById('loginPassword').value
  });
  btn.disabled = false;
  if (error) { err.textContent = 'Connexion refusée : ' + error.message; return; }
  document.getElementById('loginOverlay').classList.add('hidden');
  document.getElementById('loginPassword').value = '';
  try { await startSync(data.session); } catch (e2) {
    console.error('Connexion Supabase impossible :', e2);
    setSyncStatus('offline');
    showToast('Supabase injoignable : mode local', false);
  }
}

async function logout() {
  if (sb) await sb.auth.signOut();
  // Ne pas laisser une copie des données du projet sur cet appareil
  ['gamedev_tracker_data_v3', 'gamedev_tracker_data_v2', 'gamedev_tracker_data'].forEach(k => {
    try { localStorage.removeItem(k); } catch (e) {}
  });
  location.reload();
}

async function startSync(session) {
  const who = document.getElementById('logoutBtn');
  if (who) { who.classList.remove('hidden'); who.title = 'Se déconnecter (' + (session.user.email || '') + ')'; }
  let res = await sb.from(SUPABASE_TABLE).select('data,rev').eq('id', SUPABASE_ROW_ID).maybeSingle();
  if (res.error && /rev/i.test(res.error.message || '')) {
    useRev = false;   // colonne absente : mode simple (le dernier qui enregistre gagne sur toute la ligne)
    console.warn("Colonne 'rev' absente : lancez le SQL de mise à jour pour activer la fusion des modifications simultanées.");
    res = await sb.from(SUPABASE_TABLE).select('data').eq('id', SUPABASE_ROW_ID).maybeSingle();
  }
  if (res.error) throw res.error;
  if (!res.data) throw new Error('Ligne id=1 introuvable dans la table : relancez le script SQL');

  serverRev = useRev ? (res.data.rev || 0) : 0;
  const remote = res.data.data;
  if (remote && Array.isArray(remote.tasks)) {
    // La base contient déjà un projet : c'est la référence partagée
    applySharedData(remote);
    baseNotes = cloneJson(Array.isArray(remote.notes) ? remote.notes : []);
    refreshUIFromData();
    remoteReady = true;
    setSyncStatus('synced');
    if (!Array.isArray(remote.notes) && projectData.notes.length) schedulePush(300);
  } else {
    // Base vide : on y envoie le projet local actuel (premier lancement)
    baseNotes = [];
    remoteReady = true;
    await pushToSupabase();
  }

  sb.channel('tracker-realtime')
    .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: SUPABASE_TABLE, filter: 'id=eq.' + SUPABASE_ROW_ID },
        (payload) => {
          const row = payload.new;
          if (!row || !row.data) return;
          if (row.data._by === CLIENT_ID) {                    // écho de notre propre envoi
            if (useRev && typeof row.rev === 'number') serverRev = Math.max(serverRev, row.rev);
            return;
          }
          if (useRev && typeof row.rev === 'number' && row.rev <= serverRev) return;   // message ancien
          if (integrateRemote(row.data, row.rev)) setSyncStatus('synced');
        })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') setSyncStatus('synced');
      else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') setSyncStatus('offline');
    });
}

function loadLocalData() {
  try {
    const saved = localStorage.getItem('gamedev_tracker_data_v3') || localStorage.getItem('gamedev_tracker_data_v2') || localStorage.getItem('gamedev_tracker_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.tasks)) {
        projectData.theme = parsed.theme || projectData.theme;
        applySharedData(parsed);
      }
    }

    // Charger la couleur locale de l'utilisateur (indépendante du projet partagé)
    const localThemeColor = localStorage.getItem('gameTrackerThemeColor');
    const localThemeBg = localStorage.getItem('gameTrackerThemeBg');
    if (localThemeColor) projectData.theme.accent = localThemeColor;
    if (localThemeBg) projectData.theme.bg = localThemeBg;

  } catch (err) {
    console.warn("Erreur de chargement des données locales:", err);
  }
}

function applyLiveTheme() {
  const bg = document.getElementById('pickerBgColor') ? document.getElementById('pickerBgColor').value : projectData.theme.bg;
  const accent = document.getElementById('pickerAccentColor') ? document.getElementById('pickerAccentColor').value : projectData.theme.accent;

  projectData.theme.bg = bg;
  projectData.theme.accent = accent;

  // Sauvegarde du thème spécifique au navigateur/utilisateur
  localStorage.setItem('gameTrackerThemeBg', bg);
  localStorage.setItem('gameTrackerThemeColor', accent);

  document.documentElement.style.setProperty('--bg-base', bg);
  document.documentElement.style.setProperty('--accent', accent);
  
  const accentRgba = hexToRgba(accent, 0.4);
  const accentSubtle = hexToRgba(accent, 0.12);
  const borderNeon = hexToRgba(accent, 0.6);
  const bgCard = adjustHexShade(bg, 11);
  const bgSurface = adjustHexShade(bg, 6);

  document.documentElement.style.setProperty('--accent-glow', accentRgba);
  document.documentElement.style.setProperty('--accent-subtle', accentSubtle);
  document.documentElement.style.setProperty('--border-neon', borderNeon);
  document.documentElement.style.setProperty('--bg-card', bgCard);
  document.documentElement.style.setProperty('--bg-surface', bgSurface);

  if (document.getElementById('labelBgColor')) document.getElementById('labelBgColor').textContent = bg;
  if (document.getElementById('labelAccentColor')) document.getElementById('labelAccentColor').textContent = accent;
  // Le thème est propre à chaque utilisateur : sauvegarde locale uniquement (déjà faite plus haut)
}

function setThemePreset(bgColor, accentColor) {
  document.getElementById('pickerBgColor').value = bgColor;
  document.getElementById('pickerAccentColor').value = accentColor;
  applyLiveTheme();
  showToast("Thème appliqué");
}

function resetDefaultTheme() {
  setThemePreset('#060913', '#8b5cf6');
}

function hexToRgba(hex, alpha) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const r = parseInt(c.substring(0, 2), 16) || 0;
  const g = parseInt(c.substring(2, 4), 16) || 0;
  const b = parseInt(c.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function adjustHexShade(color, percent) {
  let num = parseInt(color.replace('#', ''), 16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) + amt,
  B = (num >> 8 & 0x00FF) + amt,
  G = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}

function openCustomizerModal() {
  document.getElementById('pickerBgColor').value = projectData.theme.bg || '#060913';
  document.getElementById('pickerAccentColor').value = projectData.theme.accent || '#8b5cf6';
  document.getElementById('labelBgColor').textContent = projectData.theme.bg || '#060913';
  document.getElementById('labelAccentColor').textContent = projectData.theme.accent || '#8b5cf6';
  document.getElementById('themeModal').classList.remove('hidden');
}
function closeCustomizerModal() {
  document.getElementById('themeModal').classList.add('hidden');
}

function openDataModal() {
  document.getElementById('dataModal').classList.remove('hidden');
}
function closeDataModal() {
  document.getElementById('dataModal').classList.add('hidden');
}

function switchTab(tabId) {
  const tabs = ['kanban', 'roadmap', 'minigdd', 'fullgdd', 'guide', 'notes'];
  tabs.forEach(t => {
    const section = document.getElementById(`section-${t}`);
    const btn = document.getElementById(`tabBtn-${t}`);
    if (!section || !btn) return;

    if (t === tabId) {
      section.classList.remove('hidden');
      btn.className = "tab-btn px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-white bg-accent-transparent border border-accent-subtle flex items-center gap-1.5";
      const icon = btn.querySelector('svg');
      if (icon) {
        icon.classList.remove('text-slate-400');
        icon.classList.add('text-accent');
      }
    } else {
      section.classList.add('hidden');
      btn.className = "tab-btn px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-slate-400 hover:text-white hover:bg-white/5 flex items-center gap-1.5";
      const icon = btn.querySelector('svg');
      if (icon) {
        icon.classList.remove('text-accent');
        icon.classList.add('text-slate-400');
      }
    }
  });
  if (tabId === 'roadmap') renderRoadmap();
  if (tabId === 'guide') renderLexicon();
  if (tabId === 'notes') renderNotes();
}

function setActiveGuideLink(clickedEl) {
  document.querySelectorAll('.guide-nav-link').forEach(el => {
    el.className = "guide-nav-link block px-2.5 py-1.5 rounded text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2";
    const dot = el.querySelector('.status-dot');
    if(dot) dot.className = "status-dot w-1.5 h-1.5 rounded-full bg-slate-500";
  });
  clickedEl.className = "guide-nav-link block px-2.5 py-1.5 rounded font-bold text-white bg-accent-transparent border border-accent-subtle transition-colors flex items-center gap-2";
  const clickedDot = clickedEl.querySelector('.status-dot');
  if(clickedDot) clickedDot.className = "status-dot w-1.5 h-1.5 rounded-full bg-accent animate-pulse";
}

function populateMiniGDDForm() {
  const g = projectData.gdd || {};
  if (document.getElementById('gddTitle')) document.getElementById('gddTitle').value = g.title || '';
  if (document.getElementById('gddPitch')) document.getElementById('gddPitch').value = g.pitch || '';
  if (document.getElementById('gddGenre')) document.getElementById('gddGenre').value = g.genre || '';
  if (document.getElementById('gddEngine')) document.getElementById('gddEngine').value = g.engine || 'Godot / Unity / UE5';
  if (document.getElementById('gddCoreLoop')) document.getElementById('gddCoreLoop').value = g.coreLoop || '';
  if (document.getElementById('gddReferences')) document.getElementById('gddReferences').value = g.references || '';
  if (document.getElementById('gddPillar1')) document.getElementById('gddPillar1').value = g.pillar1 || '';
  if (document.getElementById('gddPillar2')) document.getElementById('gddPillar2').value = g.pillar2 || '';
  if (document.getElementById('gddPillar3')) document.getElementById('gddPillar3').value = g.pillar3 || '';
  if (document.getElementById('gddArtStyle')) document.getElementById('gddArtStyle').value = g.artStyle || '';
  if (document.getElementById('gddAudioStyle')) document.getElementById('gddAudioStyle').value = g.audioStyle || '';

  updateHeaderLabels();
}

function populateFullGDDForm() {
  const fg = projectData.fullGdd || {};
  const fields = [
    'title', 'platforms', 'pitch', 'usp', 'loop', 'movement', 'combat', 
    'runProgression', 'metaProgression', 'lore', 'characters', 'levelDesign', 
    'enemies', 'artDirection', 'hudUx', 'music', 'sfx', 'techArchitecture', 
    'outOfScope', 'topRisks'
  ];

  fields.forEach(f => {
    const el = document.getElementById(`fg_${f}`);
    if (el) el.value = fg[f] || '';
  });
}

function updateHeaderLabels() {
  const nameEl = document.getElementById('headerProjectName');
  const engineEl = document.getElementById('headerEngineTag');
  const title = projectData.gdd?.title || projectData.fullGdd?.title || 'Mon Projet de Jeu';
  const engine = projectData.gdd?.engine || 'Godot / Unity / UE5';
  if (nameEl) nameEl.textContent = title;
  if (engineEl) engineEl.textContent = engine;
}

function saveGDDData(showNotification = false) {
  if (!projectData.gdd) projectData.gdd = {};
  projectData.gdd.title = document.getElementById('gddTitle').value;
  projectData.gdd.pitch = document.getElementById('gddPitch').value;
  projectData.gdd.genre = document.getElementById('gddGenre').value;
  projectData.gdd.engine = document.getElementById('gddEngine').value || 'Godot / Unity / UE5';
  projectData.gdd.coreLoop = document.getElementById('gddCoreLoop').value;
  projectData.gdd.references = document.getElementById('gddReferences').value;
  projectData.gdd.pillar1 = document.getElementById('gddPillar1').value;
  projectData.gdd.pillar2 = document.getElementById('gddPillar2').value;
  projectData.gdd.pillar3 = document.getElementById('gddPillar3').value;
  projectData.gdd.artStyle = document.getElementById('gddArtStyle').value;
  projectData.gdd.audioStyle = document.getElementById('gddAudioStyle').value;

  updateHeaderLabels();
  persistData();
  if (showNotification) showToast("Mini-GDD enregistré");
}

function saveFullGDDData(showNotification = false) {
  if (!projectData.fullGdd) projectData.fullGdd = {};
  const fields = [
    'title', 'platforms', 'pitch', 'usp', 'loop', 'movement', 'combat', 
    'runProgression', 'metaProgression', 'lore', 'characters', 'levelDesign', 
    'enemies', 'artDirection', 'hudUx', 'music', 'sfx', 'techArchitecture', 
    'outOfScope', 'topRisks'
  ];

  fields.forEach(f => {
    const el = document.getElementById(`fg_${f}`);
    if (el) projectData.fullGdd[f] = el.value;
  });

  updateHeaderLabels();
  persistData();
  if (showNotification) showToast("GDD Complet enregistré");
}

/* Générer le résumé dans Mini-GDD depuis le GDD complet */
function generateMiniGddFromFull() {
  customConfirm(
    "Générer le résumé depuis le GDD complet", 
    "Voulez-vous synchroniser et résumer les champs du Mini-GDD à partir des données de votre GDD Complet ?",
    () => {
      const fg = projectData.fullGdd || {};
      
      if (fg.title) projectData.gdd.title = fg.title;
      if (fg.pitch) {
        // Prendre les 2 premières phrases du pitch complet
        const sentences = fg.pitch.split('.');
        projectData.gdd.pitch = sentences.slice(0, 2).join('.').trim() + (sentences.length > 2 ? '.' : '');
      }
      if (fg.loop) {
        projectData.gdd.coreLoop = fg.loop.split('\n').filter(Boolean).slice(0, 4).join(' -> ');
      }
      if (fg.usp) {
        const uspLines = fg.usp.split('\n').filter(Boolean);
        if (uspLines[0]) projectData.gdd.pillar1 = uspLines[0].replace(/^[0-9.-]\s*/, '').trim();
        if (uspLines[1]) projectData.gdd.pillar2 = uspLines[1].replace(/^[0-9.-]\s*/, '').trim();
        if (uspLines[2]) projectData.gdd.pillar3 = uspLines[2].replace(/^[0-9.-]\s*/, '').trim();
      }
      if (fg.artDirection) projectData.gdd.artStyle = fg.artDirection;
      if (fg.music) projectData.gdd.audioStyle = fg.music;

      populateMiniGDDForm();
      persistData();
      showToast("Résumé auto-généré avec succès !");
    }
  );
}

function syncFullGddToMiniPrompt() {
  switchTab('minigdd');
  generateMiniGddFromFull();
}

function getPoleBadgeHtml(pole) {
  let icon = '';
  let colorClass = '';

  switch(pole) {
    case 'Programmation':
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
      colorClass = 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30';
      break;
    case 'Game Design':
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
      colorClass = 'bg-blue-950/70 text-blue-300 border-blue-500/30';
      break;
    case 'Art & 3D':
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>`;
      colorClass = 'bg-fuchsia-950/70 text-fuchsia-300 border-fuchsia-500/30';
      break;
    case 'Audio & SFX':
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`;
      colorClass = 'bg-amber-950/70 text-amber-300 border-amber-500/30';
      break;
    case 'UI & UX':
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
      colorClass = 'bg-cyan-950/70 text-cyan-300 border-cyan-500/30';
      break;
    case 'Bugfix':
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="8" y="6" width="8" height="12" rx="4"></rect><line x1="8" y1="10" x2="4" y2="10"></line><line x1="20" y1="10" x2="16" y2="10"></line></svg>`;
      colorClass = 'bg-rose-950/70 text-rose-300 border-rose-500/30';
      break;
    default:
      icon = `<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>`;
      colorClass = 'bg-slate-800 text-slate-300 border-slate-700';
  }

  return `<span class="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium border ${colorClass}">${icon}<span>${escapeHtml(pole)}</span></span>`;
}

function getPriorityBadgeHtml(priority) {
  switch(priority) {
    case 'Critique':
      return `<span class="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40"><span class="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>Critique</span>`;
    case 'Haute':
      return `<span class="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-bold bg-orange-500/20 text-orange-400 border border-orange-500/40"><span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>Haute</span>`;
    case 'Moyenne':
      return `<span class="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"><span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Moyenne</span>`;
    case 'Basse':
      return `<span class="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Basse</span>`;
    default:
      return '';
  }
}

function renderKanban() {
  const search = (document.getElementById('taskSearchInput')?.value || '').toLowerCase();
  const poleF = document.getElementById('poleFilter')?.value || 'ALL';
  const priorF = document.getElementById('priorityFilter')?.value || 'ALL';
  const mileF = document.getElementById('milestoneFilter')?.value || 'ALL';

  const columns = ['backlog', 'todo', 'inprogress', 'testing', 'done'];
  const columnCounts = { backlog: 0, todo: 0, inprogress: 0, testing: 0, done: 0 };

  columns.forEach(col => {
    const el = document.getElementById(`col-${col}`);
    if (el) el.innerHTML = '';
  });

  projectData.tasks.forEach(task => {
    if (poleF !== 'ALL' && task.pole !== poleF) return;
    if (priorF !== 'ALL' && task.priority !== priorF) return;
    if (mileF !== 'ALL' && task.milestone !== mileF) return;
    if (search && !task.title.toLowerCase().includes(search) && !(task.desc && task.desc.toLowerCase().includes(search))) return;

    const colId = task.column || 'backlog';
    if (columnCounts[colId] !== undefined) columnCounts[colId]++;

    const colEl = document.getElementById(`col-${colId}`);
    if (!colEl) return;

    const card = document.createElement('div');
    card.id = `card-${task.id}`;
    card.draggable = true;
    card.className = "task-card p-3 rounded-xl neon-border-soft cursor-grab active:cursor-grabbing text-xs space-y-2 select-none group transition-all";
    card.style.backgroundColor = "var(--bg-card)";

    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', task.id);
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });

    card.innerHTML = `
      <div class="flex items-center justify-between gap-1.5">
        ${getPoleBadgeHtml(task.pole)}
        ${getPriorityBadgeHtml(task.priority)}
      </div>

      <div class="font-semibold text-white text-xs leading-snug group-hover:text-accent transition-colors">
        ${escapeHtml(task.title)}
      </div>

      ${task.desc ? `<p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${escapeHtml(task.desc)}</p>` : ''}

      <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
        <span class="flex items-center gap-1 font-mono text-[10px] text-slate-400 truncate max-w-[130px]" title="${escapeHtml(task.milestone)}">
          <svg class="w-3 h-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span class="truncate">${escapeHtml(task.milestone)}</span>
        </span>
        <div class="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
          <button onclick="quickMoveTask('${task.id}', -1)" title="Reculer" class="p-1 hover:text-white rounded bg-white/5 hover:bg-white/10">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button onclick="quickMoveTask('${task.id}', 1)" title="Avancer" class="p-1 hover:text-white rounded bg-white/5 hover:bg-white/10">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <button onclick="editTask('${task.id}')" title="Éditer" class="p-1 hover:text-accent rounded bg-white/5 hover:bg-white/10">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </button>
          <button onclick="deleteTask('${task.id}')" title="Supprimer" class="p-1 hover:text-rose-400 rounded bg-white/5 hover:bg-white/10">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `;

    colEl.appendChild(card);
  });

  columns.forEach(col => {
    const countEl = document.getElementById(`count-${col}`);
    if (countEl) countEl.textContent = columnCounts[col];
  });

  updateRoadmapProgressMetrics();
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e, targetColumn) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const taskId = e.dataTransfer.getData('text/plain');
  if (!taskId) return;

  const task = projectData.tasks.find(t => t.id === taskId);
  if (task && task.column !== targetColumn) {
    task.column = targetColumn;
    persistData();
    renderKanban();
    showToast(`Tâche déplacée dans "${formatColName(targetColumn)}"`);
  }
}

function quickMoveTask(taskId, direction) {
  const order = ['backlog', 'todo', 'inprogress', 'testing', 'done'];
  const task = projectData.tasks.find(t => t.id === taskId);
  if (!task) return;
  
  const currentIndex = order.indexOf(task.column);
  const nextIndex = currentIndex + direction;
  if (nextIndex >= 0 && nextIndex < order.length) {
    task.column = order[nextIndex];
    persistData();
    renderKanban();
    showToast(`Statut : ${formatColName(task.column)}`);
  }
}

function formatColName(c) {
  const names = { backlog: 'Backlog', todo: 'À faire', inprogress: 'En cours', testing: 'Test & QA', done: 'Terminé' };
  return names[c] || c;
}

function openTaskModal(taskId = null) {
  const modal = document.getElementById('taskModal');
  const titleEl = document.getElementById('taskModalTitle');
  const form = document.getElementById('taskForm');
  form.reset();

  if (taskId) {
    const task = projectData.tasks.find(t => t.id === taskId);
    if (task) {
      titleEl.textContent = "Modifier la Tâche";
      document.getElementById('taskFormId').value = task.id;
      document.getElementById('taskFormTitle').value = task.title;
      document.getElementById('taskFormDesc').value = task.desc || '';
      document.getElementById('taskFormPole').value = task.pole;
      document.getElementById('taskFormPriority').value = task.priority;
      document.getElementById('taskFormMilestone').value = task.milestone;
      document.getElementById('taskFormColumn').value = task.column;
    }
  } else {
    titleEl.textContent = "Nouvelle Tâche de Production";
    document.getElementById('taskFormId').value = '';
    document.getElementById('taskFormColumn').value = 'todo';
  }

  modal.classList.remove('hidden');
}

function closeTaskModal() {
  document.getElementById('taskModal').classList.add('hidden');
}

function editTask(taskId) {
  openTaskModal(taskId);
}

function submitTaskForm(e) {
  e.preventDefault();
  const id = document.getElementById('taskFormId').value;
  const title = document.getElementById('taskFormTitle').value.trim();
  const desc = document.getElementById('taskFormDesc').value.trim();
  const pole = document.getElementById('taskFormPole').value;
  const priority = document.getElementById('taskFormPriority').value;
  const milestone = document.getElementById('taskFormMilestone').value;
  const column = document.getElementById('taskFormColumn').value;

  if (!title) return;

  if (id) {
    const task = projectData.tasks.find(t => t.id === id);
    if (task) {
      task.title = title;
      task.desc = desc;
      task.pole = pole;
      task.priority = priority;
      task.milestone = milestone;
      task.column = column;
      showToast("Tâche mise à jour");
    }
  } else {
    const newTask = {
      id: 'task-' + Date.now(),
      title,
      desc,
      pole,
      priority,
      milestone,
      column
    };
    projectData.tasks.unshift(newTask);
    showToast("Tâche créée avec succès");
  }

  closeTaskModal();
  persistData();
  renderKanban();
}

function deleteTask(taskId) {
  customConfirm("Supprimer la tâche", "Confirmez-vous la suppression de cette tâche ?", () => {
    projectData.tasks = projectData.tasks.filter(t => t.id !== taskId);
    persistData();
    renderKanban();
    showToast("Tâche supprimée", false);
  });
}

function updateRoadmapProgressMetrics() {
  const totalTasks = projectData.tasks.length;
  const completedTasks = projectData.tasks.filter(t => t.column === 'done').length;
  const percent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const percentEl = document.getElementById('globalProgressPercent');
  const barEl = document.getElementById('globalProgressBar');
  if (percentEl) percentEl.textContent = `${percent}%`;
  if (barEl) barEl.style.width = `${percent}%`;
}

function renderRoadmap() {
  const listEl = document.getElementById('roadmapMilestonesList');
  if (!listEl) return;
  listEl.innerHTML = '';

  updateRoadmapProgressMetrics();

  projectData.milestones.forEach((ms, index) => {
    const msTasks = projectData.tasks.filter(t => t.milestone === ms.id);
    const doneTasks = msTasks.filter(t => t.column === 'done').length;
    const total = msTasks.length;
    const progress = total === 0 ? 0 : Math.round((doneTasks / total) * 100);

    const card = document.createElement('div');
    card.className = "p-4 sm:p-5 rounded-xl neon-border-soft space-y-3 transition-all";
    card.style.backgroundColor = "var(--bg-surface)";

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div class="flex items-start sm:items-center gap-2.5">
          <span class="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-accent font-bold flex-shrink-0">
            0${index + 1}
          </span>
          <div>
            <h3 class="font-bold text-sm sm:text-base text-white font-heading">${escapeHtml(ms.name)}</h3>
            <p class="text-xs text-slate-400 mt-0.5">${escapeHtml(ms.desc)}</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
          <!-- Champ modifiable pour l'estimation du temps -->
          <div class="relative flex items-center flex-1 sm:flex-initial">
            <span class="absolute left-2.5 text-slate-400 pointer-events-none">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </span>
            <input 
              type="text" 
              value="${escapeHtml(ms.targetDuration || '')}" 
              onchange="updateMilestoneDuration('${ms.id}', this.value)"
              placeholder="Estimation (ex: 2 mois)" 
              title="Modifier l'estimation du temps pour ce jalon"
              class="pl-7 pr-2.5 py-1 text-xs rounded-lg bg-black/40 border border-white/10 text-accent font-mono focus:outline-none focus:border-accent w-full sm:w-48 transition-colors"
            />
          </div>

          <button onclick="toggleMilestoneStatus('${ms.id}')" class="text-xs px-2.5 py-1 rounded-lg font-semibold transition-colors flex-shrink-0 ${getMilestoneStatusBadgeClass(ms.status)}">
            ${formatMilestoneStatus(ms.status)}
          </button>
        </div>
      </div>

      <div class="space-y-1.5 pt-2 border-t border-white/5">
        <div class="flex justify-between text-[11px] text-slate-400">
          <span>Tâches Kanban validées : <strong class="text-white">${doneTasks} / ${total}</strong></span>
          <span class="font-mono text-accent">${progress}%</span>
        </div>
        <div class="w-full h-2 rounded-full bg-black/50 overflow-hidden border border-white/10">
          <div class="h-full rounded-full transition-all duration-300" style="width: ${progress}%; background: linear-gradient(90deg, var(--accent), #38bdf8);"></div>
        </div>
      </div>
    `;

    listEl.appendChild(card);
  });
}

function updateMilestoneDuration(msId, newDuration) {
  const ms = projectData.milestones.find(m => m.id === msId);
  if (ms) {
    ms.targetDuration = newDuration.trim() || 'À définir';
    persistData();
    showToast("Estimation temporelle sauvegardée");
  }
}

function formatMilestoneStatus(status) {
  switch(status) {
    case 'completed': return 'Validé';
    case 'inprogress': return 'En cours';
    default: return 'Planifié';
  }
}

function getMilestoneStatusBadgeClass(status) {
  switch(status) {
    case 'completed': return 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900';
    case 'inprogress': return 'bg-purple-950/80 text-purple-300 border border-purple-500/40 hover:bg-purple-900';
    default: return 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700';
  }
}

function toggleMilestoneStatus(msId) {
  const ms = projectData.milestones.find(m => m.id === msId);
  if (!ms) return;
  if (ms.status === 'planned') ms.status = 'inprogress';
  else if (ms.status === 'inprogress') ms.status = 'completed';
  else ms.status = 'planned';

  persistData();
  renderRoadmap();
  showToast(`Jalon "${ms.id}" : ${formatMilestoneStatus(ms.status)}`);
}

function renderLexicon(filterText = '') {
  const container = document.getElementById('lexiconListContainer');
  const countEl = document.getElementById('lexiconMatchCount');
  if (!container) return;

  container.innerHTML = '';
  const query = filterText.toLowerCase().trim();

  const filtered = GAME_DEV_LEXICON.filter(item => {
    if (!query) return true;
    return item.term.toLowerCase().includes(query) || 
           item.def.toLowerCase().includes(query) || 
           item.tag.toLowerCase().includes(query);
  });

  if (countEl) countEl.textContent = `${filtered.length} terme${filtered.length > 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-2 text-center py-6 text-slate-500 text-xs">Aucun terme correspondant à "${escapeHtml(filterText)}"</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = "p-3 rounded-lg bg-black/40 border border-white/5 space-y-1.5 transition-all hover:border-accent-subtle";
    card.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <span class="font-bold text-white text-xs tracking-tight">${escapeHtml(item.term)}</span>
        <span class="text-[9px] px-1.5 py-0.5 rounded font-mono bg-white/5 text-accent border border-white/10">${escapeHtml(item.tag)}</span>
      </div>
      <p class="text-[11px] text-slate-400 leading-relaxed">${escapeHtml(item.def)}</p>
    `;
    container.appendChild(card);
  });
}

function filterGuideAndLexicon() {
  const query = (document.getElementById('guideSearchInput')?.value || '').toLowerCase().trim();
  renderLexicon(query);

  // Filter guide blocks visibility if query is present
  const blocks = document.querySelectorAll('.guide-block');
  blocks.forEach(block => {
    if (!query) {
      block.classList.remove('hidden');
      return;
    }
    const text = block.textContent.toLowerCase();
    if (text.includes(query) || block.id === 'guide-lexique') {
      block.classList.remove('hidden');
    } else {
      block.classList.add('hidden');
    }
  });
}

function exportProjectJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projectData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `gamedev-tracker-export-${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Archive JSON téléchargée !");
}

function importProjectJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && Array.isArray(parsed.tasks)) {
        const myTheme = projectData.theme;
        projectData = parsed;
        projectData.theme = myTheme;
        applySharedData(parsed);
        applyLiveTheme();
        populateMiniGDDForm();
        populateFullGDDForm();
        renderKanban();
        renderRoadmap();
        renderLexicon();
        persistData();
        closeDataModal();
        showToast("Projet importé avec succès !");
      } else {
        showToast("Format JSON invalide", false);
      }
    } catch (err) {
      showToast("Erreur lors de la lecture du fichier", false);
    }
  };
  reader.readAsText(file);
}

function loadSampleProject() {
  customConfirm("Réinitialiser le modèle", "Attention : le template de démarrage remplacera le projet pour TOUS les collaborateurs. Continuer ?", () => {
    const myTheme = projectData.theme;
    const myNotes = projectData.notes || [];
    projectData = JSON.parse(JSON.stringify(DEFAULT_PROJECT));
    projectData.theme = myTheme;
    projectData.notes = myNotes;
    refreshUIFromData();
    persistData();
    showToast("Modèle rechargé");
  });
}

/* ====== BLOC-NOTES (arborescence, partagé via Supabase) ====== */
let activeNoteId = null;
let notesOpen = new Set();
try {
  activeNoteId = localStorage.getItem('gdt_notes_active') || null;
  notesOpen = new Set(JSON.parse(localStorage.getItem('gdt_notes_open') || '[]'));
} catch (e) {}

function ensureNotes() {
  if (!Array.isArray(projectData.notes)) projectData.notes = [];
  return projectData.notes;
}
function newNoteId() { return 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function getNote(id) { return id ? ensureNotes().find(n => n.id === id) || null : null; }
function noteChildren(pid) {
  const all = ensureNotes();
  if (!pid) return all.filter(n => !n.parentId || !getNote(n.parentId));   // racine (y compris orphelines)
  return all.filter(n => n.parentId === pid);
}
function saveNotesUiState() {
  try {
    localStorage.setItem('gdt_notes_active', activeNoteId || '');
    localStorage.setItem('gdt_notes_open', JSON.stringify([...notesOpen]));
  } catch (e) {}
}

function renderNotesTree() {
  const box = document.getElementById('notesTree');
  if (!box) return;
  box.innerHTML = '';
  if (ensureNotes().length === 0) {
    box.innerHTML = '<div class="p-3 text-[11px] text-slate-500 text-center">Aucune note pour le moment.</div>';
    return;
  }
  const seen = new Set();
  const build = (pid, depth) => {
    noteChildren(pid).forEach(n => {
      if (seen.has(n.id) || depth > 30) return;
      seen.add(n.id);
      const kids = noteChildren(n.id);
      const isOpen = notesOpen.has(n.id);
      const isActive = n.id === activeNoteId;
      const row = document.createElement('div');
      row.className = 'group flex items-center gap-1 rounded-md pr-1 text-xs cursor-pointer transition-colors border ' +
        (isActive ? 'bg-accent-transparent text-white border-accent-subtle' : 'text-slate-300 hover:bg-white/5 border-transparent');
      row.style.paddingLeft = (4 + depth * 14) + 'px';
      row.setAttribute('onclick', `selectNote('${n.id}')`);
      const actionsVis = isActive ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100';
      row.innerHTML = `
        <button class="w-4 h-4 shrink-0 flex items-center justify-center text-slate-500 hover:text-white ${kids.length ? '' : 'invisible'}" onclick="event.stopPropagation();toggleNoteOpen('${n.id}')">${isOpen ? '&#9662;' : '&#9656;'}</button>
        <span class="flex-1 truncate py-1.5">${escapeHtml(n.title || 'Sans titre')}</span>
        <button title="Ajouter une sous-note" class="${actionsVis} w-5 h-5 shrink-0 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-opacity" onclick="event.stopPropagation();addNote('${n.id}')">+</button>
        <button title="Supprimer" class="${actionsVis} w-5 h-5 shrink-0 rounded text-slate-400 hover:text-rose-400 hover:bg-white/10 transition-opacity" onclick="event.stopPropagation();deleteNote('${n.id}')">&times;</button>`;
      box.appendChild(row);
      if (isOpen) build(n.id, depth + 1);
    });
  };
  build(null, 0);
}

function noteBreadcrumbText(note) {
  const parts = [];
  let cur = note, guard = 0;
  while (cur && guard++ < 30) { parts.unshift(cur.title || 'Sans titre'); cur = getNote(cur.parentId); }
  return parts.join('  \u203A  ');
}

// Met à jour un champ avec la version fusionnée sans faire sauter le curseur de celui qui écrit
function syncField(el, val) {
  const old = el.value;
  if (old === val) return;
  if (document.activeElement !== el) { el.value = val; return; }
  const pos = el.selectionStart, end = el.selectionEnd, top = el.scrollTop;
  let p = 0;
  while (p < old.length && p < val.length && old[p] === val[p]) p++;
  let q = 0;
  while (q < old.length - p && q < val.length - p && old[old.length - 1 - q] === val[val.length - 1 - q]) q++;
  const map = x => (x <= p ? x : (x >= old.length - q ? val.length - (old.length - x) : Math.min(x, val.length)));
  el.value = val;
  el.setSelectionRange(map(pos), map(end));
  el.scrollTop = top;
}

/* ====== ÉDITEUR RICHE : une ligne = une balise <div> ; stockage ligne par ligne (compatible avec la fusion) ====== */
const noteEd = () => document.getElementById('noteContent');
const escHtml = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decodeHtml = t => t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const SKIP_TAGS = ['SCRIPT', 'STYLE', 'TEMPLATE', 'IFRAME', 'OBJECT', 'EMBED', 'NOSCRIPT', 'HEAD', 'TITLE'];
const INLINE_MAP = { B: 'b', STRONG: 'b', I: 'i', EM: 'i', U: 'u', S: 's', STRIKE: 's', DEL: 's' };

// Convertit un arbre DOM en texte : balises autorisées b/i/u/s/font[size] uniquement, '\n' entre les lignes
function serializeNode(root) {
  let out = '';
  root.childNodes.forEach(n => {
    if (n.nodeType === 3) { out += escHtml(n.nodeValue.replace(/\u00a0/g, ' ').replace(/\u200b/g, '')); return; }
    if (n.nodeType !== 1) return;
    const tag = n.tagName;
    if (SKIP_TAGS.includes(tag)) return;
    if (tag === 'BR') { out += '\n'; return; }
    if (tag === 'DIV' || tag === 'P' || tag === 'LI' || /^H[1-6]$/.test(tag)) {
      if (out !== '' && !out.endsWith('\n')) out += '\n';
      let inner = serializeNode(n);
      if (!inner.endsWith('\n')) inner += '\n';
      out += inner;
      return;
    }
    const inner = serializeNode(n);
    const wrap = (open, close) => inner.split('\n').map(x => x ? open + x + close : x).join('\n');
    if (INLINE_MAP[tag]) { out += wrap('<' + INLINE_MAP[tag] + '>', '</' + INLINE_MAP[tag] + '>'); return; }
    if (tag === 'FONT') {
      const sz = parseInt(n.getAttribute('size'), 10);
      out += (sz >= 1 && sz <= 7) ? wrap('<font size="' + sz + '">', '</font>') : inner;
      return;
    }
    if (tag === 'SPAN') {
      const mm = /font-size\s*:\s*(\d+(?:\.\d+)?)px/i.exec(n.getAttribute('style') || '');
      const px = mm ? Math.round(parseFloat(mm[1])) : 0;
      out += (px >= 6 && px <= 200) ? wrap('<span style="font-size:' + px + 'px">', '</span>') : inner;
      return;
    }
    out += inner;
  });
  return out;
}

function sanitizeLine(line) {
  const doc = new DOMParser().parseFromString('<body>' + line + '</body>', 'text/html');
  return serializeNode(doc.body).replace(/\n+$/, '').replace(/\n/g, ' ');
}
function canonContent(content) { return (content || '').split('\n').map(sanitizeLine).join('\n'); }

function serializeEditor() {
  const t = serializeNode(noteEd());
  return t.endsWith('\n') ? t.slice(0, -1) : t;
}

function renderRich(canon) {
  noteEd().innerHTML = canon.split('\n').map(l => '<div>' + (l === '' ? '<br>' : l) + '</div>').join('');
}

// Position du curseur = (numéro de ligne, nombre de caractères dans la ligne), indépendante de la structure HTML
function caretPoint(node, off) {
  const ed = noteEd();
  const r = document.createRange();
  r.selectNodeContents(ed);
  r.setEnd(node, off);
  const tmp = document.createElement('div');
  tmp.appendChild(r.cloneContents());
  let t = serializeNode(tmp);
  if (t.endsWith('\n')) t = t.slice(0, -1);
  const lines = t.split('\n');
  const last = new DOMParser().parseFromString('<body>' + lines[lines.length - 1] + '</body>', 'text/html').body.textContent;
  return { line: lines.length - 1, ch: last.length };
}
function locatePoint(pt) {
  const ed = noteEd();
  const row = ed.childNodes[Math.max(0, Math.min(pt.line, ed.childNodes.length - 1))];
  if (!row) return { node: ed, offset: 0 };
  const walker = document.createTreeWalker(row, NodeFilter.SHOW_TEXT);
  let left = pt.ch, tn;
  while ((tn = walker.nextNode())) {
    if (left <= tn.nodeValue.length) return { node: tn, offset: left };
    left -= tn.nodeValue.length;
  }
  return { node: row, offset: row.childNodes.length };
}

// Applique une version fusionnée dans l'éditeur sans faire sauter le curseur
function syncRich(content) {
  const ed = noteEd();
  const canon = canonContent(content);
  const current = serializeEditor();
  if (current === canon) return;
  if (document.activeElement !== ed) { renderRich(canon); return; }
  const sel = window.getSelection();
  let saved = null;
  if (sel.rangeCount && ed.contains(sel.anchorNode) && ed.contains(sel.focusNode)) {
    saved = { a: caretPoint(sel.anchorNode, sel.anchorOffset), f: caretPoint(sel.focusNode, sel.focusOffset) };
  }
  const oldLines = current.split('\n'), newLines = canon.split('\n');
  renderRich(canon);
  if (!saved) return;
  let p = 0;
  while (p < oldLines.length && p < newLines.length && oldLines[p] === newLines[p]) p++;
  let q = 0;
  while (q < oldLines.length - p && q < newLines.length - p && oldLines[oldLines.length - 1 - q] === newLines[newLines.length - 1 - q]) q++;
  const mapLine = i => (i < p ? i : (i >= oldLines.length - q ? i + (newLines.length - oldLines.length) : Math.min(i, newLines.length - 1)));
  const a = locatePoint({ line: mapLine(saved.a.line), ch: saved.a.ch });
  const f = locatePoint({ line: mapLine(saved.f.line), ch: saved.f.ch });
  sel.setBaseAndExtent(a.node, a.offset, f.node, f.offset);
}

function noteFormat(cmd) {
  if (!getNote(activeNoteId)) return;
  noteEd().focus();
  if (document.execCommand) document.execCommand(cmd, false, null);
  onNoteInput('content');
}
/* ---- Taille de police en pixels ---- */
let noteSavedRange = null;   // dernière sélection dans l'éditeur (le champ numérique la fait perdre au navigateur)

function noteRangeValid() {
  return noteSavedRange && noteEd().contains(noteSavedRange.startContainer) && noteEd().contains(noteSavedRange.endContainer);
}
function currentFontPx() {
  const sel = window.getSelection();
  let node = null;
  if (sel.rangeCount && noteEd().contains(sel.anchorNode)) node = sel.anchorNode;
  else if (noteRangeValid()) node = noteSavedRange.startContainer;
  if (!node) return 12;
  const el = node.nodeType === 1 ? node : node.parentElement;
  const px = parseFloat(getComputedStyle(el).fontSize);
  return isNaN(px) ? 12 : Math.round(px);
}
document.addEventListener('selectionchange', () => {
  const ed = noteEd();
  if (!ed) return;
  const sel = window.getSelection();
  if (sel.rangeCount && ed.contains(sel.anchorNode) && ed.contains(sel.focusNode)) {
    noteSavedRange = sel.getRangeAt(0).cloneRange();
    const inp = document.getElementById('noteFontSize');
    if (inp && document.activeElement !== inp) inp.value = currentFontPx();
  }
});

function unwrapNode(el) {
  while (el.firstChild) el.parentNode.insertBefore(el.firstChild, el);
  el.parentNode.removeChild(el);
}
// Remplace les <font size="7"> temporaires créés par le navigateur par des <span> à la taille exacte demandée
function convertTempFonts(ed, px) {
  const spans = [];
  ed.querySelectorAll('font[size="7"]:not([data-old])').forEach(f => {
    const sp = document.createElement('span');
    sp.style.fontSize = px + 'px';
    while (f.firstChild) sp.appendChild(f.firstChild);
    sp.querySelectorAll('span[style],font[size]').forEach(inner => {
      if (inner.tagName === 'FONT' || inner.style.fontSize) unwrapNode(inner);
    });
    f.parentNode.replaceChild(sp, f);
    let par = sp.parentNode;
    while (par && par !== ed && par.tagName === 'SPAN' && par.style.fontSize && par.childNodes.length === 1) {
      par.parentNode.replaceChild(sp, par);
      par = sp.parentNode;
    }
    spans.push(sp);
  });
  ed.querySelectorAll('[data-old]').forEach(x => x.removeAttribute('data-old'));
  return spans;
}
function noteSetFontPx(value) {
  const inp = document.getElementById('noteFontSize');
  const px = Math.round(parseFloat(value));
  if (!getNote(activeNoteId)) return;
  if (isNaN(px) || px < 6 || px > 200) { if (inp) inp.value = currentFontPx(); return; }
  const ed = noteEd();
  const wasInEditor = document.activeElement === ed;
  ed.focus();
  const sel = window.getSelection();
  // Venant du champ numérique, le navigateur a remis le curseur au début : on restaure la sélection de l'utilisateur
  if (!wasInEditor && noteRangeValid()) {
    sel.removeAllRanges();
    sel.addRange(noteSavedRange);
  }
  if (!document.execCommand || !sel.rangeCount) return;
  ed.querySelectorAll('font[size="7"]').forEach(f => f.setAttribute('data-old', '1'));
  document.execCommand('fontSize', false, '7');
  const spans = convertTempFonts(ed, px);
  if (spans.length) {
    const r = document.createRange();
    if (spans.every(sp => sp.textContent.replace(/\u200b/g, '') === '')) {
      r.setStart(spans[spans.length - 1], spans[spans.length - 1].childNodes.length);
      r.collapse(true);
    } else {
      r.setStartBefore(spans[0]);
      r.setEndAfter(spans[spans.length - 1]);
    }
    sel.removeAllRanges();
    sel.addRange(r);
    noteSavedRange = r.cloneRange();
  }
  if (inp) inp.value = px;
  onNoteInput('content');
}
function noteFontStep(delta) {
  if (!getNote(activeNoteId)) return;
  noteSetFontPx(currentFontPx() + delta * 2);
}
// Collage en texte brut (évite d'importer le style d'autres sites)
function notePaste(e) {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData('text/plain').replace(/\r\n?/g, '\n');
  if (document.execCommand) document.execCommand('insertHTML', false, text.split('\n').map(escHtml).join('<br>'));
  onNoteInput('content');
}

/* ---- Export & envoi vers Claude / Gemini ---- */
function noteLines(note) { return canonContent(note.content).split('\n'); }
function lineToMd(l) {
  return decodeHtml(l.replace(/<\/?(?:font|span)[^>]*>/g, '').replace(/<\/?b>/g, '**').replace(/<\/?i>/g, '*').replace(/<\/?s>/g, '~~'));
}
function lineToTxt(l) { return decodeHtml(l.replace(/<[^>]+>/g, '')); }
function buildNoteExport(note, fmt) {
  const title = note.title || 'Sans titre';
  const lines = noteLines(note);
  if (fmt === 'md') return '# ' + title + '\n\n' + lines.map(lineToMd).join('\n') + '\n';
  return title + '\n\n' + lines.map(lineToTxt).join('\n') + '\n';
}
function noteFileBase(note) {
  const b = (note.title || 'note').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return b || 'note';
}
function downloadText(filename, text, mime) {
  const url = URL.createObjectURL(new Blob([text], { type: mime + ';charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function copyText(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    ta.remove();
  } catch (e) {}
  try { if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {}); } catch (e) {}
}
function exportNote(fmt) {
  const note = getNote(activeNoteId);
  if (!note) { showToast('Sélectionnez d\'abord une note', false); return; }
  downloadText(noteFileBase(note) + '.' + fmt, buildNoteExport(note, fmt), fmt === 'md' ? 'text/markdown' : 'text/plain');
  showToast('Note téléchargée (.' + fmt + ')');
}
function openInAI(which) {
  const note = getNote(activeNoteId);
  if (!note) { showToast('Sélectionnez d\'abord une note', false); return; }
  const md = buildNoteExport(note, 'md');
  copyText(md);
  downloadText(noteFileBase(note) + '.md', md, 'text/markdown');
  window.open(which === 'claude' ? 'https://claude.ai/new' : 'https://gemini.google.com/app', '_blank', 'noopener');
  showToast('Note copiée et téléchargée (.md) : collez-la ou glissez le fichier dans la conversation');
}

function renderNoteEditor(force) {
  const empty = document.getElementById('noteEmpty');
  const editor = document.getElementById('noteEditor');
  if (!empty || !editor) return;
  const note = getNote(activeNoteId);
  if (!note) {
    empty.classList.remove('hidden');
    editor.classList.add('hidden');
    return;
  }
  empty.classList.add('hidden');
  editor.classList.remove('hidden');
  const t = document.getElementById('noteTitle');
  if (force) {
    t.value = note.title || '';
    renderRich(canonContent(note.content));
  } else {
    syncField(t, note.title || '');
    syncRich(note.content || '');
  }
  document.getElementById('noteBreadcrumb').textContent = noteBreadcrumbText(note);
  const d = note.updatedAt ? new Date(note.updatedAt).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }) : '';
  document.getElementById('noteMeta').textContent = d ? 'Dernière modification : ' + d : '';
}

function renderNotes() {
  if (activeNoteId && !getNote(activeNoteId)) activeNoteId = null;
  renderNotesTree();
  renderNoteEditor(false);
}

function selectNote(id) {
  activeNoteId = id;
  saveNotesUiState();
  renderNotesTree();
  renderNoteEditor(true);
}

function toggleNoteOpen(id) {
  if (notesOpen.has(id)) notesOpen.delete(id); else notesOpen.add(id);
  saveNotesUiState();
  renderNotesTree();
}

function addNote(parentId) {
  const note = { id: newNoteId(), parentId: parentId || null, title: 'Nouvelle note', content: '', updatedAt: Date.now() };
  ensureNotes().push(note);
  if (parentId) notesOpen.add(parentId);
  activeNoteId = note.id;
  saveNotesUiState();
  persistData();
  renderNotesTree();
  renderNoteEditor(true);
  const t = document.getElementById('noteTitle');
  if (t) { t.focus(); t.select(); }
}

function onNoteInput(field) {
  const note = getNote(activeNoteId);
  if (!note) return;
  note.title = document.getElementById('noteTitle').value;
  note.content = serializeEditor();
  note.updatedAt = Date.now();
  persistData(250);
  if (field === 'title') {
    renderNotesTree();
    document.getElementById('noteBreadcrumb').textContent = noteBreadcrumbText(note);
  }
  document.getElementById('noteMeta').textContent = 'Dernière modification : ' + new Date(note.updatedAt).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
}

function deleteNote(id) {
  const note = getNote(id);
  if (!note) return;
  const toRemove = new Set([id]);
  let grew = true;
  while (grew) {
    grew = false;
    ensureNotes().forEach(n => {
      if (n.parentId && toRemove.has(n.parentId) && !toRemove.has(n.id)) { toRemove.add(n.id); grew = true; }
    });
  }
  const extra = toRemove.size - 1;
  const msg = `Supprimer « ${note.title || 'Sans titre'} »` + (extra > 0 ? ` et ses ${extra} sous-note${extra > 1 ? 's' : ''}` : '') + ' ? Cette action concerne toute l\'équipe.';
  customConfirm("Supprimer la note", msg, () => {
    projectData.notes = ensureNotes().filter(n => !toRemove.has(n.id));
    if (toRemove.has(activeNoteId)) activeNoteId = note.parentId && getNote(note.parentId) ? note.parentId : null;
    saveNotesUiState();
    persistData();
    renderNotes();
    showToast("Note supprimée");
  });
}

/* ====== Taille des zones de texte du Mini-GDD et du GDD : mémorisée sur cet appareil ====== */
function initTextareaSizes() {
  const KEY = 'gdt_textarea_sizes';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) {}
  let resizing = null;
  document.addEventListener('mouseup', () => { setTimeout(() => { resizing = null; }, 400); });
  document.addEventListener('touchend', () => { setTimeout(() => { resizing = null; }, 400); });
  document.querySelectorAll('#section-minigdd textarea, #section-fullgdd textarea').forEach(el => {
    if (!el.id) return;
    const sz = saved[el.id];
    if (sz) {
      if (sz.h) el.style.height = sz.h + 'px';
      if (sz.w) { el.style.width = sz.w + 'px'; el.style.maxWidth = '100%'; }
    }
    let startW = 0, timer = null;
    const begin = () => { resizing = el; startW = el.offsetWidth; };
    el.addEventListener('mousedown', begin);
    el.addEventListener('touchstart', begin, { passive: true });
    if (typeof ResizeObserver === 'undefined') return;
    new ResizeObserver(() => {
      if (resizing !== el || el.offsetParent === null) return;   // seulement quand l'utilisateur tire la poignée
      clearTimeout(timer);
      timer = setTimeout(() => {
        const old = saved[el.id] || {};
        saved[el.id] = { h: el.offsetHeight, w: el.offsetWidth !== startW ? el.offsetWidth : (old.w || null) };
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
      }, 150);
    }).observe(el);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

window.onload = function() {
  loadLocalData();
  
  // Mettre à jour les sélecteurs de couleur au lancement avec la préférence de l'utilisateur
  if (document.getElementById('pickerBgColor')) document.getElementById('pickerBgColor').value = projectData.theme.bg;
  if (document.getElementById('pickerAccentColor')) document.getElementById('pickerAccentColor').value = projectData.theme.accent;
  
  applyLiveTheme();
  populateMiniGDDForm();
  populateFullGDDForm();
  renderKanban();
  renderRoadmap();
  renderLexicon();
  try { document.execCommand('defaultParagraphSeparator', false, 'div'); } catch (e) {}
  initTextareaSizes();
  renderNotes();
  initSupabase();
};
