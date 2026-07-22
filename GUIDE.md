# USINE-ASSO — guide d'utilisation

Application mobile **multiplateforme** (iPhone, Android, ordinateur) de
l'association **L'Usine — Belleville en Beaujolais**.

Il s'agit d'une **PWA** : une page web qui s'installe sur l'écran d'accueil
et fonctionne ensuite comme une application, y compris hors connexion.
Aucune boutique d'applications, aucun compte développeur, aucune validation.

---

## 1. Les fichiers

| Fichier / dossier | Rôle | Le modifiez-vous ? |
|---|---|---|
| `config.js` | **Tout le contenu** : textes, liens, images, couleurs | **Oui, c'est le seul** |
| `images/` | Bannière, photos des pavés, galerie, logo | Oui (ajout / remplacement) |
| `index.html` | Mise en page et affichage | Rarement |
| `sw.js` | Fonctionnement hors connexion | Seulement le n° de version |
| `manifest.webmanifest` | Nom et icône de l'app installée | Rarement |
| `icons/` | Icônes de l'application (192, 512, 180 px) | Rarement |

---

## 2. Modifier le contenu

Tout se passe dans **`config.js`**. Trois règles :

1. le texte se met entre `"guillemets droits"` ;
2. chaque ligne se termine par une virgule, **sauf la dernière** d'un bloc ;
3. `afficher: true` → section visible ; `afficher: false` → section masquée
   (rien n'est supprimé, il suffit de remettre `true`).

### Changer la mise en avant « À la une »

```js
alaune: {
  afficher: true,
  image:  "images/alaune.jpg",
  date:   "19 et 20 septembre 2026",
  titre:  "Journées du Patrimoine",
  texte:  "",                       /* ligne de description facultative */
  lien:   "https://www.lusine-belleville.net/ev%C3%A8nements"
}
```

### Ajouter une photo à la galerie

1. téléverser le fichier dans `images/galerie/` ;
2. ajouter une ligne dans `photos` :

```js
{ image: "images/galerie/jep-2026.jpg", legende: "JEP 2026",
  lien: "https://www.lusine-belleville.net/photos" },
```

Les photos sont affichées en **carré**, recadrées automatiquement et centrées :
privilégier des visuels dont le sujet est au centre.
Le nombre de photos n'est pas limité ; elles se chargent au fil du défilement.

### Ajouter un pavé dans « Association Usine »

```js
{ titre: "Historique", image: "images/asso/historique.jpg",
  lien: "https://www.lusine-belleville.net/usine-roux/historique" },
```

- `image: ""` → pavé sans illustration ;
- `pleineLargeur: true` → le pavé occupe toute la largeur (comme « Site complet ») ;
- `asso.styleImage` bascule l'ensemble des pavés entre `"grande"`
  (image en haut, réglage actuel) et `"vignette"` (petite image carrée à gauche).

### Changer les couleurs

Le bloc `couleurs` reprend les teintes **relevées dans le logo** :

| Clé | Valeur | Origine |
|---|---|---|
| `encre` | `#2D170C` | brun très foncé du trait du logo |
| `bronze` | `#A87848` | bronze / cuivre du logo |
| `brun` | `#7A5230` | brun moyen (boutons, liens) |
| `fond` | `#F8F1E1` | crème du fond du logo |
| `trait`, `grise`, `carte` | — | teintes dérivées pour les bordures et le texte secondaire |

---

## 3. Publier et mettre à jour

L'application est un site statique : elle se publie sur **GitHub Pages**
(dépôt public → *Settings* → *Pages* → branche `main`, dossier racine),
ou sur tout hébergement web. **HTTPS est obligatoire** pour l'installation
sur l'écran d'accueil et le fonctionnement hors connexion.

| Ce que vous modifiez | Ce qu'il faut faire |
|---|---|
| `config.js` | Rien de plus : téléverser le fichier |
| une image dans `images/` | Rien de plus : téléverser le fichier |
| `index.html` ou `sw.js` | Incrémenter la version dans `sw.js` : `usine-v1` → `usine-v2` |

C'est volontaire : `config.js` et tout le dossier `images/` (y compris
`asso/` et `galerie/`) sont rechargés depuis le réseau à chaque ouverture,
avec repli sur le cache hors connexion. Le reste de l'application est servi
depuis le cache pour la rapidité, d'où le changement de version.

---

## 4. Installer l'application sur un téléphone

- **Android (Chrome)** : ouvrir l'adresse → menu ⋮ → *Installer l'application*
  (ou *Ajouter à l'écran d'accueil*).
- **iPhone / iPad (Safari)** : ouvrir l'adresse → bouton *Partager* →
  *Sur l'écran d'accueil*.

---

## 5. Contrôles effectués sur cette version

- Rendu mesuré dans un navigateur réel (Chromium) à **360, 390 et 768 px** :
  toutes les sections ont exactement la **même largeur**, aucun débordement
  horizontal, aucune erreur JavaScript, aucune image manquante.
- **15 cas limites** de paramétrage validés sans erreur : style vignette,
  galerie à 2 / 3 / 4 colonnes, galerie masquée, galerie vide, sans bouton,
  photos non cliquables, légendes remplies, « À la une » masquée ou non
  cliquable, pavé sans image, chemin d'image inexistant, titre de pavé très
  long, absence de bannière, section « Liens » masquée.
- Contrastes de couleurs calculés (WCAG 2.1) : texte principal 15,1:1,
  texte secondaire 5,9:1, boutons 6,8:1 — au-delà du seuil AA de 4,5:1.
  Le bronze `#A87848` est réservé aux éléments décoratifs (3,9:1).
- Tout texte provenant de `config.js` est **échappé** avant affichage :
  une apostrophe ou un chevron dans un titre ne peut pas casser la page.

## 6. Points à valider par vos soins

- **Lien Facebook** : `https://www.facebook.com/groups/2867909900018291`,
  relevé sur le site officiel `lusine-belleville.net` (page d'accueil,
  bloc « Retrouvez nous sur Facebook »). Vous m'aviez donné le nom du groupe,
  pas son adresse — vérifiez que c'est bien celui que vous visiez.
- **Pavé « Site complet »** : pointe vers `https://www.lusine-belleville.net`
  (racine du site), conformément au libellé de votre demande.
- **Adresse postale** : la fiche « Infos pratiques » reprend
  « 3 route nationale, 69220 Belleville en Beaujolais ». Le site officiel
  mentionne par ailleurs le lieu-dit « La Croisée » ; à ajouter si utile.
