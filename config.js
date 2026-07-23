/* =====================================================================
   USINE-ASSO — FICHIER DE PARAMÉTRAGE
   ---------------------------------------------------------------------
   C'est LE SEUL fichier à modifier au quotidien.
   Règles simples :
     • le texte se met entre "guillemets droits" ;
     • chaque ligne se termine par une virgule, SAUF la dernière du bloc ;
     • afficher: true  -> la section est visible
       afficher: false -> la section est masquée (rien n'est supprimé).
   Après modification : téléverser ce seul fichier, il est rechargé
   automatiquement (pas besoin de toucher à sw.js).
   ===================================================================== */

window.USINE_CONFIG = {

  /* --- EN-TÊTE ------------------------------------------------------ */
  entete: {
    logo:        "images/logo.png",
    banniere:    "images/banniere.jpg",   /* "" = pas de bannière */
    titre:       "L'Usine",
    sousTitre:   "Belleville en Beaujolais",
    lienEntete:  "https://www.lusine-belleville.net"
  },

  /* --- SECTION « À LA UNE » -----------------------------------------
     Une seule mise en avant. lien: "" = carte non cliquable.          */
  alaune: {
    afficher: true,
    titreSection: "À la une",
    image:   "images/alaune.jpg",
    date:    "19 et 20 septembre 2026",
    titre:   "Journées du Patrimoine",
    texte:   "l'Usine sera présente pour ces deux journées",
    lien:    "https://www.lusine-belleville.net/ev%C3%A8nements"
  },

  /* --- SECTION « ASSOCIATION USINE » (les pavés) --------------------
     styleImage : "grande"   -> image en haut du pavé
                  "vignette" -> petite image carrée à gauche du texte
     Pour AJOUTER un pavé : copier une ligne { ... } et l'adapter.
     pleineLargeur: true -> le pavé occupe toute la largeur.           */
  asso: {
    afficher: true,
    titreSection: "Association Usine",
    styleImage: "vignette",
    paves: [
      { titre: "Visites", image: "images/asso/visites.jpg",
        lien: "https://www.lusine-belleville.net/visites" },
      { titre: "Usine",   image: "images/asso/usine.jpg",
        lien: "https://www.lusine-belleville.net/usine-roux" },
      { titre: "Presse",  image: "images/asso/presse.jpg",
        lien: "https://www.lusine-belleville.net/presse" },
      { titre: "Contact", image: "images/asso/contact.jpg",
        lien: "https://www.lusine-belleville.net/contact" },
      { titre: "Site complet", image: "", pleineLargeur: true,
        lien: "https://www.lusine-belleville.net" }
    ]
  },

  /* --- SECTION « INSTALLER L'APPLICATION » ---------------------------
     Carte proposant d'ajouter l'app à l'écran d'accueil.
     Elle disparaît TOUTE SEULE une fois l'application installée.
     Elle ne s'affiche que si l'installation est réellement possible :
       • Android / Chrome  -> un bouton « Installer » (invite du système)
       • iPhone / iPad     -> la marche à suivre (Safari n'a pas d'invite)
       • navigateur intégré de Facebook/Instagram -> invite à ouvrir Safari
     position : "haut" (sous la bannière) ou "bas" (avant le pied de page) */
  installation: {
    afficher: true,
    position: "haut",
    titre: "Installer l'application",
    texteAndroid: "Ajoutez L'Usine à votre écran d'accueil : ouverture en plein écran et consultation hors connexion.",
    boutonTexte: "Installer",
    texteIOS: "Sur iPhone et iPad : touchez le bouton Partager en bas de l'écran, puis « Sur l'écran d'accueil ».",
    texteNavigateurIntegre: "Pour installer l'application, ouvrez cette page dans Safari (iPhone) ou Chrome (Android) : touchez le menu « … » puis « Ouvrir dans le navigateur ».",
    texteAutre: "Depuis le menu de votre navigateur, choisissez « Installer l'application » ou « Ajouter à l'écran d'accueil ». Cette option n'existe pas dans tous les navigateurs.",
    afficherSiInviteAbsente: true,
    permettreFermeture: true
  },

  /* --- SECTION « GALERIE PHOTOS » -----------------------------------
     colonnes : 2, 3 ou 4.
     lien : "" = la photo n'est pas cliquable ; sinon une adresse https://
     Pour AJOUTER une photo : la téléverser dans images/galerie/ puis
     copier une ligne { ... } avant le crochet ].                       */
  galerie: {
    afficher: true,
    titreSection: "Galerie photos",
    colonnes: 3,
    photos: [
      { image: "images/galerie/photo-1.jpg", legende: "", lien: "https://www.lusine-belleville.net/photos/visites-de-groupes" },
      { image: "images/galerie/photo-2.jpg", legende: "", lien: "https://www.lusine-belleville.net/photos/visite-famille-roux" },
      { image: "images/galerie/photo-3.jpg", legende: "", lien: "https://www.lusine-belleville.net/photos/portes-ouvertes-2024" }
    ],
    /* Bouton facultatif sous la galerie ("" = pas de bouton) */
    boutonTexte: "Voir toutes les photos",
    boutonLien:  "https://www.lusine-belleville.net/photos/secrets-de-tonnellerie"
  },

  /* --- SECTION « INFOS PRATIQUES » ----------------------------------
     lien : "tel:+33607492456"    -> lance un appel
            (06 07 49 24 56 devient +33607492456 : on retire le 0 initial)
            "mailto:adresse@..."  -> ouvre un message
            "https://..."         -> ouvre un plan ou une page          */
  infos: {
    afficher: true,
    titreSection: "Infos pratiques",
    lignes: [
      { icone: "📍", titre: "L'Usine",
        detail: "3 route nationale, 69220 Belleville en Beaujolais",
        lien: "https://www.google.com/maps/search/?api=1&query=L%27Usine%2C%203%20route%20nationale%2C%2069220%20Belleville-en-Beaujolais" },
      { icone: "📞", titre: "Téléphone", detail: "06 07 49 24 56",
        lien: "tel:+33607492456" },
      { icone: "✉️", titre: "Écrire à l'association", detail: "lusine.belleville1880@gmail.com",
        lien: "mailto:lusine.belleville1880@gmail.com" }
    ]
  },

  /* --- SECTION « LIENS » (boutons externes) ------------------------- */
  liens: {
    afficher: true,
    titreSection: "Liens",
    boutons: [
      { texte: "Facebook — l'Usine Belleville en Beaujolais",
        lien: "https://www.facebook.com/groups/2867909900018291" }
    ]
  },

  /* --- PIED DE PAGE -------------------------------------------------- */
  piedDePage: {
    afficher: true,
    texte: "Accès rapide — ",
    lienTexte: "lusine-belleville.net",
    lien: "https://www.lusine-belleville.net"
  },

  /* --- COULEURS DE L'APPLICATION -------------------------------------
     Valeurs relevées directement dans le logo (logousine.png).         */
  couleurs: {
    encre:  "#2D170C",   /* brun très foncé du trait du logo   */
    bronze: "#A87848",   /* bronze / cuivre du logo            */
    brun:   "#7A5230",   /* brun moyen, texte des liens        */
    fond:   "#F8F1E1",   /* crème du fond du logo              */
    carte:  "#FFFFFF",
    trait:  "#E4D8C2",
    grise:  "#6B5A48"
  },

  /* --- TITRE DE L'APPLICATION ---------------------------------------- */
  titreOnglet: "L'Usine — Belleville en Beaujolais"
};
