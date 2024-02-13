export default [
  // ================================ 1st page ==============================================================================================================================
  {
    id: 0,
    multiple: true,
    title: "Formation Robotique pour enfants",
    description: [
      "Nous fournissons tout ce dont les enfants ont besoin pour passer de zéro à héros de robotique. Ils ne seront jamais à bout de projets lorsqu'ils passeront au niveau supérieur. Non seulement ils acquerront des compétences qui leur serviront toute leur vie, mais ils seront aussi enthousiasmés par les possibilités de la technologie.",
      "Une formation en robotique spécialement conçue pour les enfants âgés de 7 à 15 ans pour leur faire comprendre l'origine de l'électricité, les familiariser avec les composants électroniques ainsi que les règles de base de la robotique et créer leur propre robot.",
    ],
    goals: [
      { id: 1, goal: "Initiation à la robotique à un jeune âge." },
      {
        id: 2,
        goal: "Ouvrir les portes de la technologie et de la créativité.",
      },
      {
        id: 3,
        goal: "Comprendre l'origine de l'électricité et ses règles.",
      },
      {
        id: 4,
        goal: "Découvrir les différents composants électroniques et leur fonctionnement.",
      },
      {
        id: 5,
        goal: "Apprendre à programmer des robots et différents composants électroniques.",
      },
      { id: 6, goal: "Créer des robots et des dispositifs électroniques." },
      { id: 7, goal: "S'amuser tout en apprenant." },
    ],
    levels: [
      {
        id: 1,
        name: "Electronique",
        description:
          "L'élève découvre des connaissances préliminaires dans l'électronique comme les matériaux conducteurs et isolants, la loi d'ohm et d'autres notions fondamentales tout en exploitant ces dernières dans la conception de leur robot.",
        details: [
          { id: 1, description: "Durée 1.25 mois /  5 semaines " },
          { id: 2, description: "2.5 heures (séance) par semaine " },
          { id: 3, description: "Prix 6000 DA  " },
        ],
        programme: [
          { id: 1, description: "Séance 1: Histoire de la robotique " },
          { id: 2, description: "Séance 2: Concepts électroniques de base " },
          { id: 3, description: "Séance 3: Moteur DC" },
          { id: 4, description: "Séance 4: IR sensor" },
          { id: 5, description: "Séance 5: Assemblage final" },
        ],
      },
      {
        id: 2,
        name: "Programmation Scratch",
        description:
          "L'élève découvre les différents composants electronique passant par les capteurs , l'unité de commande et d'autres composants.il est amené à comprendre le fonctionnement de chaque composant et y arriver à le programmer avec scratch pour une fonctionnalité précise.",
        details: [
          { id: 1, description: "Durée 1.5 mois / 6 semaines " },
          { id: 2, description: "2.5 heures (séance) par semaine" },
          { id: 3, description: "Prix 9000 DA | 6000 DA par mois" },
        ],
        programme: [
          {
            id: 1,
            description: "Séance 1: Découvrir les bases de la programmation",
          },
          {
            id: 2,
            description:
              "Séance 2: Expérimenter la vitesse, direction et durée d'un moteur DC",
          },
          {
            id: 3,
            description: "Séance 3: Programmation du capteur infrarouge",
          },
          {
            id: 4,
            description:
              "Séance 4: Mesure de distance avec le capteur ultrason",
          },
          {
            id: 5,
            description:
              "Séance 5: Détecter les obstacles avec le servo moteur et le capteur infrarouges",
          },
          {
            id: 6,
            description:
              "Séance 6: Découvrir le code derrière chaque bloc sur Mblock",
          },
        ],
      },
      {
        id: 3,
        name: "Programmation C++",
        description:
          "L'enfant conçoit et programme le robot Mobot 2, résout des problèmes techniques, utilise des capteurs et crée des algorithmes.",
        details: [
          { id: 1, description: "Durée 2.5 mois / 10 semaines" },
          { id: 2, description: "2.5 heures (séance) par semaine " },
          { id: 3, description: "Prix 15000 DA | 6000 DA par mois" },
        ],
        programme: [
          {
            id: 1,
            description:
              "Séance 1: Assemblage mécanique et électronique du robot",
          },
          {
            id: 2,
            description:
              "Séance 2: Réalisation d'un parcours programmé avec scratch",
          },
          {
            id: 3,
            description:
              "Séance 3: Réalisation d'un parcours programme avec Arduino C",
          },
          {
            id: 4,
            description:
              "Séance 4: Programmer le robot suiveur de ligne avec scratch",
          },
          {
            id: 5,
            description:
              "Séance 5: Programmer le robot suiveur de ligne avec Arduino C",
          },
          {
            id: 6,
            description:
              "Séance 6: Programmer le robot détecteur d'obstacle avec scratch",
          },
          {
            id: 7,
            description:
              "Séance 7: Programmer le robot détecteur d'obstacle avec Arduino C",
          },
          {
            id: 8,
            description:
              "Séance 8: Concevoir l'application mobile avec MIT App Inventor",
          },
          {
            id: 9,
            description: "Séance 9: Programmer le robot téléguidé avec Scratch",
          },
          {
            id: 10,
            description:
              "Séance 10: Programmer le robot téléguidé avec Arduino C",
          },
        ],
      },
    ],
  },
  // ================================ 2nd page ==============================================================================================================================
  {
    id: 1,
    multiple: false,
    title: "Formation Programmation & Intelligence Artificielle pour enfant",
    description: [
      "Une formation spécialement créée pour permettre à vos enfants de découvrir le monde de l'intelligence artificielle et de la programmation dès leur plus jeune âge.",
      "Ils vont non seulement apprendre à se lancer dans la programmation, mais aussi à créer de nombreux projets amusants et à concrétiser leur imagination en créant leurs propres jeux et animations en utilisant l'intelligence artificielle, le machine Learning et la vision intelligente.",
    ],
    goals: [
      {
        id: 1,
        goal: "Initiation à la programmation et à l'intelligence artificielle.",
      },
      {
        id: 2,
        goal: "Développer et comprendre la logique algorithmique.",
      },
      {
        id: 3,
        goal: "Apprendre à programmer.",
      },
      {
        id: 4,
        goal: "Créer différentes animations et jeux amusants.",
      },
      {
        id: 5,
        goal: "Découvrez comment les humains peuvent interagir avec les ordinateurs grâce à la vision par ordinateur.",
      },
      {
        id: 6,
        goal: "Ouvrez les portes de la technologie et de la créativité.",
      },
    ],
    programme: [
      {
        id: 1,
        description:
          "Séance 1: Introduction à l'informatique, Système binaire.",
      },
      {
        id: 2,
        description:
          "Séance 2: Algorithmes, Apprendre les bases de la programmation et construire un algorithme",
      },
      {
        id: 3,
        description:
          "Séance 3: Scratch, Construire un jeu en utilisant Scratch..",
      },
      {
        id: 4,
        description:
          "Séance 4: Intelligence artificielle et Machine learning, Qu'est-ce que l'intelligence artificielle et l'apprentissage automatique ?",
      },
      {
        id: 5,
        description:
          "Séance 5: Machine Learning avec du texte, Utilisez l'apprentissage automatique avec des articles et des messages écrits.",
      },
      {
        id: 6,
        description:
          "Séance 6: Machine Learning avec des images, Utilisez l'apprentissage automatique avec la vision par ordinateur.",
      },
    ],
    details: [
      { id: 1, description: "Durée 1.5 mois / 6 semaines" },
      { id: 2, description: "2.5 heures (séance) par semaine " },
      { id: 3, description: "Prix 9000 DA" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 3rd page ==============================================================================================================================
  {
    id: 2,
    multiple: true,
    title: "Formation Sciences et chimie pour les enfantst",
    description: [
      "Il n'y a pas de meilleure façon d'apprendre que par des expériences pratiques et amusantes! Durant ce cours, vos enfants vont découvrir les différents domaines de la science à travers des activités variées et des expériences amusantes qui vont leur faire aimer la science dès un jeune âge.",
    ],
    goals: [
      {
        id: 1,
        goal: "Connaître les différents domaines de la science.",
      },
      {
        id: 2,
        goal: "Découvrir les cellules et les plantes, les réactions chimiques, les fonctions du corps humain et tout ce qui concerne l'espace.",
      },
      {
        id: 3,
        goal: "Expérimentez et apprendre via des activités pratiques.",
      },
      {
        id: 4,
        goal: "Intéressez les enfants à la science.",
      },
    ],
    levels: [
      {
        id: 1,
        name: "Séance 1: Biologie: Sous le microscope.",
        programme: [
          { id: 1, description: "Structure cellulaire." },
          { id: 2, description: "Comment les plantes se nourrissent-elles ?." },
          {
            id: 3,
            description: "Observer des cellules végétales au microscope",
          },
        ],
      },
      {
        id: 2,
        name: "Séance 2: Chimie: Qu'est-ce que la matière?",
        programme: [
          { id: 1, description: "Matières et substances." },
          { id: 2, description: "Volcan chimique." },
        ],
      },
      {
        id: 3,
        name: "Séance 3: Astronomie: Découvrir l'univers.",
        programme: [
          { id: 1, description: "Explorer le temps et l'espace." },
          { id: 2, description: "Fabriquer un système solaire." },
          { id: 3, description: "Planétarium." },
        ],
      },
      {
        id: 4,
        name: "Séance 4: Astronomie: Découvrir l'univers.",
        programme: [
          { id: 1, description: "Organes et fonctions de base." },
          { id: 2, description: "Système de poumon artificiel." },
          { id: 3, description: "Puzzle d'anatomie." },
        ],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois /  4 semaines " },
      { id: 2, description: "2.5 heures (séance) par semaine " },
      { id: 3, description: "Prix 6000 DA" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 4th page ==============================================================================================================================
  {
    id: 3,
    multiple: false,
    title: "Arduino",
    description: ["text"],
    goals: [
      {
        id: 1,
        goal: "text",
      },
    ],
    programme: [
      {
        id: 1,
        description: "Séance 1:",
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois /  4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine " },
      { id: 3, description: "Prix 9000 DA" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 5th page ==============================================================================================================================
  {
    id: 4,
    multiple: true,
    title: "Formation Internet Of Things",
    description: [
      "Imaginez un monde de “choses” connectées (appareils, véhicules, bâtiments) capables de parler à un réseau, à l'internet, à elles-mêmes et de prendre des mesures ?",
      "Bienvenue dans l'espace IOT (Internet of Things), une nouvelle révolution, qui comptera des milliards d'objets installés et connectés de manière autonome.",
      "Cette formation va vous permettre de créer des solutions IOT, de zéro à la mise en marche, tout en exploitant la fameuse carte ESP32, un microcontrôleur peu coûteux et extrêmement polyvalent avec WiFi et Bluetooth intégrés.",
    ],
    goals: [
      {
        id: 1,
        goal: "Découvrir la carte ESP32 et apprendre à travailler avec des capteurs, des actionneurs, etc.",
      },
      {
        id: 2,
        goal: "Apprendre à coder l'ESP 32 en utilisant l'IDE Arduino à partir des bases.",
      },
      {
        id: 3,
        goal: "Apprendre à se connecter aux plateformes IOT, à conserver les données, à programmer des déclencheurs, etc.",
      },
      {
        id: 4,
        goal: "Réaliser des différents Projets IOT.",
      },
    ],
    levels: [
      {
        id: 1,
        name: "Séance 1:",
        programme: [
          { id: 1, description: "Introduction, définition et exemple IOT." },
          { id: 2, description: "Présentation de l'ESP32." },
          { id: 3, description: "ESP32 Modules" },
          { id: 4, description: "Programmation de l'ESP32" },
        ],
      },
      {
        id: 2,
        name: "Séance 2:",
        programme: [
          { id: 1, description: "Premiers pas avec l'IDE Arduino." },
          { id: 2, description: "ESP32 for Arduino IDE." },
          {
            id: 3,
            description: "Ajouter une entrée de gestionnaire de cartes",
          },
          { id: 4, description: "Branchement de l'expérience" },
          { id: 5, description: "Hello World – Clignotement pour ESP32" },
          { id: 6, description: "Téléchargement du programme" },
        ],
      },
      {
        id: 3,
        name: "Séance 3:",
        programme: [
          { id: 1, description: "Utilisation du Wi-Fi." },
          { id: 2, description: "Wi-Fi sur ESP32." },
          { id: 3, description: "WiFi Modes" },
          { id: 4, description: "Station (STA) Mode" },
          { id: 5, description: "Soft Access Point (AP) Mode" },
          {
            id: 6,
            description: "WiFi Scanner",
            subDescription: [
              { id: 1, description: "Trouver les exemples de programmes" },
              {
                id: 2,
                description: "Charger WiFiScan",
              },
            ],
          },
          { id: 7, description: "Point d'accès Wi-Fi" },
          { id: 8, description: "Serveur Wi-Fi simple" },
        ],
      },
      {
        id: 4,
        name: "Séance 4:",
        programme: [
          { id: 1, description: "Utilisation du Bluetooth." },
          { id: 2, description: "Bluetooth et BLE sur ESP32." },
          {
            id: 3,
            description: "Série à série BT",
            subDescription: [
              { id: 1, description: "Bluetooth classique 4.2" },
              {
                id: 2,
                description: "Bluetooth à faible consommation d'énergie",
              },
            ],
          },
          { id: 4, description: "Temps simple" },
          { id: 5, description: "Capteur à effet Hall" },
        ],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois / 4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine" },
      { id: 3, description: "Prix 6000 DA par mois" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 6th page ==============================================================================================================================
  {
    id: 5,
    multiple: true,
    title: "Formation Internet Of Things",
    description: [
      "Vous souhaitez créer et concevoir vos propres circuits imprimés ?",
      "Dans cette formation, vous apprendrez toutes les informations essentielles sur les différents composants électroniques et leur fonctionnement, comment concevoir un circuit imprimé (PCB): monocouche et multicouche, comment créer différents types de PCB et vous allez réaliser le projet final qui consiste à construire votre propre PCB.",
    ],
    goals: [
      {
        id: 1,
        goal: "Découvrez les différents composants électroniques et leur fonctionnement.",
      },
      {
        id: 2,
        goal: "Concevoir différents circuits imprimés monocouches et multicouches.",
      },
      {
        id: 3,
        goal: "Apprenez comment créer divers types de cartes de circuits imprimés.",
      },
      {
        id: 4,
        goal: "Construire votre propre PCB à partir de zéro.",
      },
    ],
    levels: [
      {
        id: 1,
        name: "Séance 1:",
        programme: [
          {
            id: 1,
            description:
              "Intro PCB: qu'est-ce que c'est, où vous les utilisez.",
          },
          { id: 2, description: "Composants: résistance, capacité, bobine." },
          { id: 3, description: "Filtres: passe-bas, passe-haut" },
          { id: 4, description: "Signal Analogique" },
          { id: 5, description: "Bases de conception" },
          { id: 6, description: "Design LED clignotante NE555" },
        ],
      },
      {
        id: 2,
        name: "Séance 2:",
        programme: [
          { id: 1, description: "Signal Numérique." },
          { id: 2, description: "Microcontrôleur : explication composants ." },
          { id: 3, description: "Design circuit capteur de flamme" },
          { id: 4, description: "Design circuit radar: ultrason + Servo" },
          { id: 5, description: "Design circuit afficheur + RFID" },
        ],
      },
      {
        id: 3,
        name: "Séance 3:",
        programme: [
          { id: 1, description: "PCB double couche." },
          { id: 2, description: "Design driver moteur." },
          { id: 3, description: "SMD" },
          {
            id: 4,
            description: "Design suiveur de ligne: IR, Atmega, driver moteur",
          },
        ],
      },
      {
        id: 4,
        name: "Séance 4:",
        programme: [{ id: 1, description: "Réalisation des PCB." }],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois / 4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine" },
      { id: 3, description: "Prix 7000 DA par mois" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 7th page ==============================================================================================================================
  {
    id: 6,
    multiple: true,
    title: "Formation C++",
    description: [
      "Voulez-vous apprendre l'un des langages de programmation les plus utilisés au monde? Notre formation de C++ POO inclut tout ce que vous devez savoir pour atteindre votre objectif, des éléments de base de la programmation jusqu'à la programmation de vos propres projets complexes orientés objet.",
    ],
    goals: [
      {
        id: 1,
        goal: "text.",
      },
    ],
    levels: [
      {
        id: 1,
        name: "Séance 1: Introduction au langage C++",
        programme: [
          { id: 1, description: "IDE et installation." },
          { id: 2, description: "Type de langage: Interpréteur, compilateur." },
          { id: 3, description: "Les bibliothèques" },
          { id: 4, description: "Variables" },
          { id: 5, description: "Boucles" },
          { id: 6, description: "Conditions" },
        ],
      },
      {
        id: 2,
        name: "Séance 2: Niveau de langage",
        programme: [
          { id: 1, description: "Pointeur et adresse." },
          { id: 2, description: "Les références ." },
          { id: 3, description: "Les tableaux" },
          { id: 4, description: "Relation entre les pointeurs et les tableau" },
        ],
      },
      {
        id: 3,
        name: "Séance3 : Chaine de caractère",
        programme: [
          { id: 1, description: "Les fonctions." },
          { id: 2, description: "Les fonction récursive." },
          { id: 3, description: "Variables globales et locales." },
          {
            id: 4,
            description: "Les structures",
            description: "Enumeration",
          },
        ],
      },
      {
        id: 4,
        name: "Séance 4: Exercices récapitulatifs et projet final.",
        programme: [],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois / 4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine" },
      { id: 3, description: "Prix 7000 DA par mois" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 8th page ==============================================================================================================================
  {
    id: 7,
    multiple: true,
    title: "Formation POO",
    description: [
      "Voulez-vous apprendre l'un des langages de programmation les plus utilisés au monde? Notre formation de C++ POO inclut tout ce que vous devez savoir pour atteindre votre objectif, des éléments de base de la programmation jusqu'à la programmation de vos propres projets complexes orientés objet.",
    ],
    goals: [
      {
        id: 1,
        goal: "text.",
      },
    ],
    levels: [
      {
        id: 1,
        name: "Séance 1: Introduction POO",
        programme: [
          { id: 1, description: "Les attributes." },
          { id: 2, description: "Les méthodes." },
          { id: 3, description: "Les méthodes" },
          { id: 4, description: "Constructeur " },
          { id: 5, description: "Surcharges overloading" },
          { id: 6, description: "Setter et getter" },
          { id: 6, description: "Destructeur et contraints" },
        ],
      },
      {
        id: 2,
        name: "Séance 2: Niveau de langage L'encapsulation et niveaux",
        programme: [
          { id: 1, description: "Objet constante " },
          { id: 2, description: "Héritage ." },
          { id: 3, description: "Surcharge overriding" },
          { id: 4, description: "Abstraction" },
        ],
      },
      {
        id: 3,
        name: "Séance 3: Héritage multiple",
        programme: [
          { id: 1, description: "Polymorphisme ." },
          { id: 2, description: "Classe amies." },
          { id: 3, description: "Les exceptions." },
        ],
      },
      {
        id: 4,
        name: "Séance 4: Récapitulation de POO, exercices et projet final.",
        programme: [],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois / 4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine" },
      { id: 3, description: "Prix 6000 DA par mois" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 9th page ==============================================================================================================================
  {
    id: 8,
    multiple: true,
    title: "Formation Développement web",
    description: [
      "Quel que soit votre niveau en programmation, vous pouvez commencer à créer des sites Web pour toute idée qui vous vient à l'esprit !",
    ],
    goals: [
      { id: 1, goal: "Structurer une page web en HTML." },
      { id: 2, goal: "Organiser les éléments d'une page web grâce au CSS." },
      { id: 3, goal: "Intégrer des formulaires dans une page web." },
      { id: 4, goal: "Adapter une page pour les petites résolutions en CSS." },
      { id: 5, goal: "Prendre une idée sur le Framework Bootstrap." },
    ],
    levels: [
      {
        id: 1,
        name: "Séance 1: ",
        programme: [
          { id: 1, description: "Un aperçu  sur le fonctionnement du Web." },
          {
            id: 2,
            description:
              "Une introduction aux notions fondamentales de la programmation.",
          },
          { id: 3, description: "La structure d'un document HTML " },
          { id: 4, description: "Introduction aux notions de balise " },
          {
            id: 5,
            description:
              "Insertion des titres, textes et listes dans une page web",
          },
          {
            id: 6,
            description: "Création des différents liens des programmes",
          },
          { id: 7, description: "Insertion d'images dans une page web " },
          { id: 8, description: "Création de la première page web en HTML " },
        ],
      },
      {
        id: 2,
        name: "Séance 2:",
        programme: [
          { id: 1, description: "Un aperçu sur le code CSS et son utilité " },
          {
            id: 2,
            description:
              "Les méthodes d'injection d'un code CSS dans un document HTML .",
          },
          {
            id: 3,
            description: "L'utilisation des sélecteurs et leurs importance",
          },
          {
            id: 4,
            description: "Formater un texte (couleur, style, police, taille…)",
          },
          {
            id: 5,
            description:
              "Modifier le fond de la page avec des couleurs ou des images.",
          },
        ],
      },
      {
        id: 3,
        name: "Séance 3:",
        programme: [
          {
            id: 1,
            description: "Positionnement des objets dans une page web .",
          },
          { id: 2, description: "Taille des objets (Width and Height)." },
          { id: 3, description: "Les bordures, padding et margin." },
          { id: 4, description: "Instruction avancée." },
          { id: 5, description: "Créer des formulaires." },
          { id: 6, description: "Structurer une page web en HTML de A à Z." },
        ],
      },
      {
        id: 4,
        name: "Séance 4: ",
        programme: [
          { id: 1, description: "Mettre en forme la page web en CSS." },
          { id: 2, description: "Corriger les pages Web de chaque étudiant." },
          { id: 3, description: "Structurer une page web en HTML de A à Z." },
          { id: 4, description: "Aperçu sur les Frameworks." },
          {
            id: 5,
            description:
              "Tester quelque fonctionnalités des Bootstraps (Mise en page réactive).",
          },
        ],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois / 4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine" },
      { id: 3, description: "Prix 9000 DA par mois" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
  // ================================ 10th page ==============================================================================================================================
  {
    id: 9,
    multiple: false,
    title: "Formation Digital Marketing",
    description: [
      "L’évolution du web et de ses pratiques obligent les entreprises à adopter de nouvelles stratégies dans le domaine du marketing. Maîtriser le web aujourd’hui, c’est avoir conscience de son potentiel marketing. A travers cette formation de marketing digital, appelée également marketing et communication digitale vous allez acquérir de nouvelles compétences et de savoir utiliser de nouveaux outils pour mieux vous faire connaître, conquérir, convertir, fidéliser les clients et vendre en ligne grâce à la formation marketing digital. ",
    ],
    goals: [],
    programme: [
      {
        id: 1,
        description: "Définir le marketing traditionnel et marketing digital",
      },
      {
        id: 2,
        description:
          " Définir la stratégie digitale sur le web et sur les réseaux sociaux.",
      },
      {
        id: 3,
        description:
          "Connaître le rôle et les objectifs des sites web et des blog.",
      },
      {
        id: 4,
        description: "Apprendre à réaliser de la publicité en ligne.",
      },
      {
        id: 5,
        description: "Apprendre le marketing de contenu.",
      },
      {
        id: 6,
        description:
          "Connaître les moteurs de recherche et le référencement SEO/SEA.",
      },
      {
        id: 7,
        description: "Se faire connaître localement.",
      },
      {
        id: 8,
        description: "Connaître les business models digital.",
      },
      {
        id: 9,
        description:
          "Connaître le rôle de la vidéo et l’Emailing en marketing digital.",
      },
      {
        id: 10,
        description:
          "Apprendre à réaliser l’analyse d’audience et des statistiques.",
      },
      {
        id: 11,
        description:
          "Apprendre à utiliser les outils logiciels du digital marketer.",
      },
      {
        id: 12,
        description: "Design et conception de la publicité:",
        subDescription: [
          { id: 1, description: "Infographie et graphisme" },
          { id: 2, description: "Charte graphique et visuel" },
          {
            id: 3,
            description:
              "Contenue visuel et sa caractérisation avec différentes reseaux sociaux",
          },
        ],
      },
    ],
    details: [
      { id: 1, description: "Durée 1 mois / 4 semaines " },
      { id: 2, description: "3 heures (séance) par semaine" },
      { id: 3, description: "Prix 25000 DA par mois" },
      {
        id: 4,
        description:
          "Note: Le paiement s'effectue le jour de la première session",
      },
    ],
  },
];
