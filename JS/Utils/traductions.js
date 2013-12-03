function getTraduction(id) {
  //return chrome.i18n.getMessage(id);

  if (navigateur.langue === 'Francais')
    return traductionFr[id].message; // VersionWeb
  else
    return traductionEn[id].message; // VersionWeb
}

var traductionFr = {

  "INFObtnVueFlouDeMiseAuPoint": {
    "message": "Afficher la courbe du flou de MAP"
  },
  "INFObtnVueHistogrammes": {
    "message": "Afficher l'histogramme"
  },
  "INFObtnVueReglagesAPN": {
    "message": "Caractéristiques de l'APN"
  },
  "INFObtnVueReglagesFocus": {
    "message": "Régler la mise au point"
  },
  "INFObtnVueReglagesObjectif": {
    "message": "Caractéristiques de l'objectif"
  },
  "INFObtnVueReglagesPhotographe": {
    "message": "Caractéristiques du photographe"
  },
  "INFObtnVueReglagesScene": {
    "message": "Luminosité et distances de la scène"
  },
  "INFObtnVueReglagesVuePhoto": {
    "message": "Choix des éléments à modéliser"
  },
    "INFObtnInformationsUtilisateur": {
    "message": "Afficher/Cacher les infos bulles"
  },

  "INFOvueFlouDeMiseAuPoint": {
    "message": "La courbe rouge montre la valeur du flou, la zone bleue montre la PDC. Utilisez la souris pour modifier les distances, la roulette pour zoomer"
  },
  "INFOvuePhoto": {
    "message": "Roulette souris pour aller devant/derrière. Clic gauche + souris pour vous déplacer. Maintenir shift enfoncé pour passer de déplacement<=> autofocus"
  },
  "INFOvueCurseurExpo": {
    "message": "Valeur de l'exposition de la photo"
  },
  "INFOensembleChkCadrageConstant": {
    "message": "Garde un même cadrage du second plan lors d'un changement de capteur ou de longueur focale"
  },
  "INFOensembleRdbAutoFocus": {
    "message": "Auto focus"
  },
  "INFOensembleRdbManualFocus": {
    "message": "Focus manuel"
  },
  "INFOensembleRdbFocusAFC": {
    "message": "Auto focus continu"
  },
  "INFOensembleRdbFocusAFS": {
    "message": "Auto focus non continu"
  },
  "INFObtnFocus": {
    "message": "Commencer/arrêter la mise au point"
  },
    "INFOensembleLstTremblements": {
    "message": "Tremblements du photographe, influence le flou de mise au point"
  },
  "INFOensembleLstCdC": {
    "message": "Cercle de confusion à utiliser pour la PDC et le flou de mise au point"
  },
    "INFOx": {
    "message": "X"
  },






  "Plan#": {
    "message": "Plan#"
  },

  "versionInsuffisante": {
    "message": "le simulateur necessite au moins la version "
  },

  "navigateurInconnu": {
    "message": "le simulateur n'a pas été testé pour ce navigateur.<br/> Vous pouvez utiliser (par ordre de performance) Chrome > Opera > Firefox > Internet Explorer"
  },

  "navigateurCompatible": {
    "message": "le simulateur fonctionne correctement avec ce navigateur."
  },

  "RqIE": {
    "message": "<br/>Le flou et l'exposition ne fonctionnent pas avec Internet Explorer, utilisez Chrome de préférence."
  },
  "RqFF": {
    "message": "<br/>Firefox est à la traine avec les technos utilisées par le simulateur (ralentissement et clignotements), utilisez Chrome de préférence."
  },
  "RqOP": {
    "message": "<br/>Opera peut se montrer lent pour afficher les images, utilisez Chrome si besoin."
  },



  "vousUtilisez": {
    "message": "Vous utilisez "
  },



  "3D": {
    "message": "Vue 3D"
  },
  "APN": {
    "message": "APN"
  },
  "Aberrations_chromatiques": {
    "message": "Aberration chromatique"
  },
  "Afficher": {
    "message": "Afficher"
  },
  "Anti_vibration": {
    "message": "Anti-vibration"
  },
  "Arbre": {
    "message": "Arbre"
  },
  "Bruit": {
    "message": "Bruit"
  },
  "Camion": {
    "message": "Camping car"
  },
  "Capteur": {
    "message": "Capteur"
  },
  "Cdc": {
    "message": "Cercle de confusion"
  },
  "ChampHoriz": {
    "message": "Angle de champ horizontal"
  },
  "ChampVert": {
    "message": "Angle de champ vertical"
  },
  "ChampsVision": {
    "message": "Champs de vision"
  },
  "Chat": {
    "message": "Chat"
  },
  "CielVoile": {
    "message": "Ciel voil\u00E9"
  },
  "CondLum": {
    "message": "Luminosité"
  },
  "Cote": {
    "message": "C\u00F4t\u00E9"
  },
  "CoucherSoleil": {
    "message": "Couch\u00E9 de soleil"
  },
  "CropFactor": {
    "message": "Crop factor"
  },
  "DebutPdc": {
    "message": "D\u00E9but de la pdc"
  },
  "Derriere": {
    "message": "Derri\u00E8re"
  },
  "Dessus": {
    "message": "Dessus"
  },
  "Devant": {
    "message": "Devant"
  },
  "DimHoriz": {
    "message": "Largeur @ arri\u00E8re plan"
  },
  "DimVert": {
    "message": "Hauteur @ arri\u00E8re plan"
  },
  "Distances": {
    "message": "Distances"
  },
  "Divers": {
    "message": "Divers"
  },
  "Escargot": {
    "message": "Escargot"
  },
  "Exposition": {
    "message": "Exposition"
  },
  "Faible": {
    "message": "Faibles"
  },
  "Femme_parapluie": {
    "message": "Femme au parapluie"
  },
  "Fenetre": {
    "message": "Fen\u00EAtre"
  },
  "FinPdc": {
    "message": "Fin de la pdc"
  },
  "FlouAA": {
    "message": "Flou d\u00FB au filtre AA"
  },
  "FlouAbbChro": {
    "message": "Abberation chromatique"
  },
  "FlouArriere": {
    "message": "Flou d'arri\u00E8re plan"
  },
  "FlouAvant": {
    "message": "Flou d'avant plan"
  },
  "FlouBouge": {
    "message": "Flou de boug\u00E9"
  },
  "FlouDeMap": {
    "message": "Flou de mise au point"
  },
  "FlouDiff": {
    "message": "Diffraction"
  },
  "FlouRes": {
    "message": "Flou d\u00FB \u00E0 la r\u00E9solution"
  },
  "FocEqu": {
    "message": "Focale equivalente"
  },
  "FormatCapteur": {
    "message": "Format du capteur"
  },
  "GrandSoleil": {
    "message": "Grand soleil"
  },
  "Hauteur": {
    "message": "Hauteur"
  },
  "Histogramme": {
    "message": "Histogramme"
  },
  "Hyperfocale": {
    "message": "Hyperfocale"
  },
  "ISO": {
    "message": "ISO"
  },
  "JustePourCopier": {
    "message": "OSEF"
  },
  "JustePourMarquerLaFin": {
    "message": "OSEF"
  },
  "Largeur": {
    "message": "Largeur"
  },
  "Laxiste": {
    "message": "Tol\u00E9rant (Diag/1440)"
  },
  "Longueur_focale": {
    "message": "Longueur focale"
  },
  "Luminosite": {
    "message": "Luminosit\u00E9"
  },

  /*
  "MAU_AA": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EPr\u00E9cise si le capteur est \u00E9quip\u00E9 d'un filtre anti-aliasing.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tre impact\u00E9:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EFlou d\u00FB au filtre AA\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitation: le moir\u00E9 n'est pas mod\u00E9lis\u00E9."
  },
  "MAU_AC": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EValeur moyenne des abberations chromatiques, mesur\u00E9e par DxO.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tre impact\u00E9:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EFlou d\u00FB aux abberations chromatiques\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitation: les AC sont constantes"
  },
  "MAU_AF": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMise au point Automatique."
  },
  "MAU_AFC": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMise au point Continue (elle suit le sujet vis\u00E9)."
  },
  "MAU_AFS": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMise au point Ponctuelle (r\u00E9alis\u00E9e une seule fois)."
  },
  "MAU_Calc": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECalculs (pdc, angles de vue,...)"
  },
  "MAU_Infos": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAfficher l'aide dynamique"
  },
  "MAU_MF": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMise au point Manuelle."
  },
  "MAU_RAZ": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EPlacez la souris sur un \u00E9l\u00E9ment pour afficher les informations"
  },
  "MAU_Reglages": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9glages g\u00E9n\u00E9raux"
  },
  "MAU_Settings3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9glages de la vue 3D"
  },
  "MAUvueReglagesVuePhoto": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9glages de la vue photo"
  },
  "MAU_VR": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EPr\u00E9cise si l'objectif est muni d'un dispositif de r\u00E9duction des vibrations.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EFlou de boug\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003EVitesse de s\u00E9curit\u00E9 (permet de gagner 3 stops)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_btn1Fenetre": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAffiche une unique fen\u00EAtre."
  },
  "MAU_btn2Fenetre": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAffiche 2 fen\u00EAtres."
  },
  "MAU_btn4Fenetre": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAffiche 4 fen\u00EAtres."
  },
  "MAU_btnFocus": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECliquez pour faire la mise au point sur la vue photo."
  },
  "MAU_btnRotation": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9placement par Rotation en vue 3D."
  },
  "MAU_btnTranslation": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9placement par Translation en vue 3D."
  },
  "MAU_btn_camera_flou_viseur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9gle la vue 3D pour mettre en \u00E9vidence les diff\u00E9rents flous au niveau du capteur."
  },
  "MAU_btn_camera_optique": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9gle la vue 3D pour mettre en \u00E9vidence les ph\u00E9nom\u00E8nes optiques"
  },
  "MAU_cadrageCst": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EForce un cadrage constant de la zone de map.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELe photographe se d\u00E9place si la longueur focale change\u003C/li\u003E\r\n                  \u003Cli\u003ELa longueur focale est adapt\u00E9e si le capteur change\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Ceci permet de comprendre la notion de focale \u00E9quivalente et de visualiser l'aplatissement de l'image lorsque la focale augmente."
  },
  "MAU_calculs": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EValeurs num\u00E9riques des diff\u00E9rents calculs effectu\u00E9s.\u003Cbr/\u003E\r\n      \u003Cbr/\u003E\r\n      Les flous sont exprim\u00E9s en:\r\n      \u003Cbr/\u003E\r\n      \u003Cul\u003E        \r\n      \u003Cli\u003Em\u00E8tre\u003C/li\u003E\r\n      \u003Cli\u003Emultiple de la taille d'un pixel du capteur\u003C/li\u003E\r\n      \u003Cli\u003Emultiple de la taille du cercle de confusion\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E\r\n      Un flou plus petit qu'un pixel sera invisible m\u00EAme en zoomant sur la photo.\u003Cbr/\u003E\r\n      Un flou plus petit que le cdc sera invisible en conditions normales d'observation."
  },
  "MAU_cdc": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECercle de confusion \u00E0 utiliser.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EPdc / Hyperfocale\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Le cerlce de confusion d\u00E9finit la valeur min d'un flou, sur le capteur, pour qu'il soit visible.\u003Cbr/\u003E\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ETol\u00E9rant/Classique/S\u00E9v\u00E8re: valeurs courantes\u003C/li\u003E\r\n                  \u003Cli\u003EPixel du capteur: flou visible si \u2265 1 pixel du capteur\u003C/li\u003E\r\n                  \u003Cli\u003E\u00C9cran: flou visible si visible \u00E0 l'\u00E9cran, dans la vue photo\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_chk_bruit": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMod\u00E9lisation du bruit.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitation:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ELa mod\u00E9lisation du bruit est (tr\u00E8s) simplifi\u00E9e\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Le bruit d\u00E9pend de la sensibilit\u00E9 ISO, de la valeur de low light ISO et du temps d'exposition."
  },
  "MAU_chk_expo": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMod\u00E9lisation de l'exposition.\u003Cbr/\u003E\r\n               Limitation:\r\n                  \u003Cul\u003E \r\n                  \u003Cli\u003ELa mod\u00E9lisation de l'exposition est affect\u00E9e par le flou de boug\u00E9.\u003C/li\u003E       \r\n                  \u003C/ul\u003E\r\n               \u003Cbr/\u003E\r\n               L'exposition de la photo d\u00E9pend de l'ouverture, de la sensibilit\u00E9 ISO, de la dur\u00E9e d'exposition, de la luminosit\u00E9 ambiante et de la dynamique du capteur."
  },
  "MAU_chk_flou": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMod\u00E9lisation du flou de mise au point.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitations:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ELe flou est un flou gaussien\u003C/li\u003E\r\n                  \u003Cli\u003EG\u00E9rer les flous peut ralentir l'application\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Le flou de mise au point d\u00E9pend de la distance de map, de la longueur focale, de l'ouverture et de la taille du capteur."
  },
  "MAU_chk_flouBouge": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMod\u00E9lisation du flou de boug\u00E9.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitations:\r\n                  \u003Cul\u003E \r\n                  \u003Cli\u003ELa mod\u00E9lisation du flou de boug\u00E9 est simplifi\u00E9e\u003C/li\u003E       \r\n                  \u003Cli\u003ELa mod\u00E9lisation de l'exposition est perturb\u00E9e par le flou de boug\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003EG\u00E9rer le flou peut ralentir l'application\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Le flou de boug\u00E9 d\u00E9pend de la longueur focale, de la vitesse, du capteur, du syst\u00E8me anti-vibration de l'objectif et des tremblements du photographe."
  },
  "MAU_chk_pdc": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine la zone de pdc au sol.\u003Cbr/\u003E"
  },
  "MAU_definition": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9finition du capteur (nombre de pixels).\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ETaille d'un pixel\u003C/li\u003E\r\n                  \u003Cli\u003EFlou d\u00FB au filtre AA\u003C/li\u003E\r\n                  \u003Cli\u003ECercle de confusion (si cdc = 1 pixel)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_distances": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDistances d'avant plan, du sujet et d'arri\u00E8re plan par rapport au photographe.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EClic gauche + souris: modifie les distances\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n"
  },
  "MAU_drawBoitier": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine le boitier de l'apn, sa molette, son viseur,..."
  },
  "MAU_drawDiaph": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine le diaphragme de l'objectif."
  },
  "MAU_drawIllustrations": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine les 3 illustrations utilis\u00E9es \u00E0 l'avant plan, la distance de map et \u00E0 l'arri\u00E8re plan ainsi que le photographe."
  },
  "MAU_drawMiroirs": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine les miroirs utilis\u00E9s pour la vis\u00E9e reflex."
  },
  "MAU_drawObjectif": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine l'objectif."
  },
  "MAU_drawPdc3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine au sol la zone de profondeur de champ."
  },
  "MAU_dynamique": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDynamique du capteur mesur\u00E9e par DxO \u00E0 100ISO.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tre impact\u00E9:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EExposition\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  La dynamique perd 1 EV chaque fois que l'on double la sensibilit\u00E9 ISO.\u003Cbr/\u003E\r\n                  Une grande dynamique permet un meilleur contr\u00F4le de l'exposition."
  },
  "MAU_expo": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EIndique l'exposition de la photo.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EEV\u003C0: photo sous expos\u00E9e\u003C/li\u003E\r\n                  \u003Cli\u003EEV=0: exposition optimale\u003C/li\u003E\r\n                  \u003Cli\u003EEV\u003E0: photo sur expos\u00E9e\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  L'exposition d\u00E9pend de l'ouverture, de la vitesse, de la sensibilit\u00E9 ISO, de la luminosit\u00E9 ambiante et de la dynamique du capteur."
  },
  "MAU_flousCapteur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESelection des flous \u00E0 afficher sur la vue 3D du capteur.\u003Cbr/\u003E\r\n      Les pixels sont \u00E9galements repr\u00E9sent\u00E9s."
  },
  "vueFlouDeMiseAuPoint": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EValeur du flou de mise au point en fonction de la distance.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELa zone bleu repr\u00E9sente la zone dans la PDC (flou \u003C cdc).\u003C/li\u003E\r\n                  \u003Cli\u003ELes distances d'avant plan, du sujet et d'arri\u00E8re plan sont report\u00E9es.\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EClic gauche + souris: modifie les distances\u003C/li\u003E\r\n                  \u003Cli\u003ERoulette souris: zoom/d\u00E9-zoom\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Le flou de mise au point d\u00E9pend de la distance de map, de la longueur focale, de l'ouverture et de la taille du capteur."
  },
  "MAU_grillePerspective": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E.Affiche une grille de perspective au sol"
  },
  "MAU_histogramme": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EHistogramme de luminosit\u00E9 de la photo.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003Eaxe horizontal: luminosit\u00E9, de 0 \u00E0 255\u003C/li\u003E\r\n                  \u003Cli\u003Eaxe vertical: nombre de pixels de la photo pour une luminosit\u00E9 donn\u00E9e\u003C/li\u003E\r\n                  \u003Cli\u003Elimitation: le calcul de l'histogramme ne tient pas compte du flou de mise au point\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  L'histogramme d\u00E9pend de l'exposition et de la sc\u00E8ne photographi\u00E9e."
  },
  "MAU_lst_N_min": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EOuverture minimale de l'objectif.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tre impact\u00E9:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EOuverture (si elle \u00E9tait sup\u00E9rieure \u00E0 l'ouverture min)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lst_camera": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9glage automatique de la 3D, l'APN peut \u00EAtre vue de:\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EDerri\u00E8re\u003C/li\u003E\r\n                  \u003Cli\u003EC\u00F4t\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003EDevant\u003C/li\u003E\r\n                  \u003Cli\u003EDessus\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n      "
  },
  "MAU_lst_capteur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EType de capteur de l'APN (dimensions).\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EFormat du capteur (3:2, 4:3,...)\u003C/li\u003E\r\n                  \u003Cli\u003ECrop factor / Focale \u00E9quivalente\u003C/li\u003E\r\n                  \u003Cli\u003EChamps de vision\u003C/li\u003E\r\n                  \u003Cli\u003EPdc / Flou de mise au point / Hyperfocale\u003C/li\u003E\r\n                  \u003Cli\u003EFlou d\u00FB au filtre AA\u003C/li\u003E\r\n                  \u003Cli\u003EFlou de boug\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003ETaille d'un pixel\u003C/li\u003E\r\n                  \u003Cli\u003ECercle de confusion (si cdc = 1 pixel)\u003C/li\u003E\r\n                  \u003Cli\u003ELongueur focale (en mode cadrage constant)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lst_scene": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9finit la luminosit\u00E9 de la sc\u00E8ne.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EExposition\u003C/li\u003E\r\n                  \u003Cli\u003EHistogramme\u003C/li\u003E\r\n                  \u003Cli\u003EOuverture (mode S)\u003C/li\u003E\r\n                  \u003Cli\u003EVitesse (mode A)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lst_tremblote": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9finit la 'tremblotte' du photographe.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ENormal: la r\u00E8gle vitesse de s\u00E9curit\u00E9 = 1/focale s'applique\u003C/li\u003E\r\n                  \u003Cli\u003EFaible: la vitesse peut \u00EAtre divis\u00E9e par 2\u003C/li\u003E\r\n                  \u003Cli\u003ES\u00E9v\u00E8re: la vitesse doit \u00EAtre augment\u00E9e de 50%\u003C/li\u003E\r\n                  \u003Cli\u003ETr\u00E8s s\u00E9v\u00E8re: la vitesse doit \u00EAtre doubl\u00E9e\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EFlou de boug\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003EVitesse de s\u00E9curit\u00E9\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lowLightISO": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ELow Light ISO mesur\u00E9 par DxO.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tre impact\u00E9:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EBruit\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Cette valeur peut \u00EAtre concid\u00E9r\u00E9e comme le seuil de la sensibilit\u00E9 ISO apr\u00E8s lequel la qualit\u00E9 de l'image est visiblement d\u00E9grad\u00E9e."
  },
  "MAU_moletteReglage": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMolette de r\u00E9glage du triangle d'exposition Ouverture/Vitesse/ISO\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EClic gauche + souris: incr\u00E9mente/d\u00E9cr\u00E9mente la valeur s\u00E9lectionn\u00E9e d'1/3EV\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_onglet_3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EParam\u00E9trer la vue 3D."
  },
  "MAU_onglet_apn": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9finir les caract\u00E9ristiques de l'appareil photo.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Vous pouvez choisir un apn parmis une lst de mod\u00E8les du commerce, ou le d\u00E9finir manuellement."
  },
  "MAU_onglet_fenetres": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EChoisir les fen\u00EAtres \u00E0 afficher."
  },
  "MAU_onglet_objectif": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9finir les caract\u00E9ristiques de l'objectif.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Vous pouvez choisir un objectif pr\u00E9-d\u00E9fini, ou le d\u00E9finir manuellement."
  },
  "MAU_onglet_scene": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ED\u00E9finir les conditions de prise de vue:\u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELuminosit\u00E9 de la sc\u00E8ne\u003C/li\u003E\r\n                  \u003Cli\u003EDistances et Illustrations des diff\u00E9rents plans\u003C/li\u003E\r\n                  \u003Cli\u003ETremblements du photographe\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_onglet_viseur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EParam\u00E9trer la vue de la photo finale."
  },
  "MAU_rb_3D_dim": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAffiche le champ de vision de l'appareil photo, du capteur jusqu'\u00E0 l'arri\u00E8re plan."
  },
  "MAU_rb_3D_flou_arrierePlan": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMet en \u00E9vidence l'origine du flou d'arri\u00E8re plan, influenc\u00E9 par:\r\n      \u003Cbr/\u003E\r\n      \u003Cul\u003E        \r\n      \u003Cli\u003ELa distance de l'arri\u00E8re plan\u003C/li\u003E\r\n      \u003Cli\u003EL'ouverture du diaphragme\u003C/li\u003E\r\n      \u003Cli\u003ELa longueur focale\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E\r\n      Le rayon est dans l'axe du centre du capteur."
  },
  "MAU_rb_3D_flou_avantPlan": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMet en \u00E9vidence l'origine du flou d'avant plan, influenc\u00E9 par:\r\n      \u003Cbr/\u003E\r\n      \u003Cul\u003E        \r\n      \u003Cli\u003ELa distance de l'avant plan\u003C/li\u003E\r\n      \u003Cli\u003EL'ouverture du diaphragme\u003C/li\u003E\r\n      \u003Cli\u003ELa longueur focale\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E\r\n      Le rayon est dans l'axe du centre du capteur."
  },
  "MAU_rb_3D_visee": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMet en \u00E9vidence le fonctionnement d'une vis\u00E9e reflex.\u003Cbr/\u003E\r\n      Le rayon est dans l'axe du centre du capteur."
  },
  "MAU_rb_triangle_ISO": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EModifie la sensibilit\u00E9 ISO de l'APN.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EExposition de la photo\u003C/li\u003E\r\n                  \u003Cli\u003EBruit\u003C/li\u003E\r\n                  \u003Cli\u003EDynamique du capteur\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_rb_triangle_ouverture": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EModifie l'ouverture du diaphragme de l'objectif.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EExposition de la photo\u003C/li\u003E\r\n                  \u003Cli\u003EProfondeur de champ / Flou de mise au point\u003C/li\u003E\r\n                  \u003Cli\u003Edistance Hyperfocale\u003C/li\u003E\r\n                  \u003Cli\u003EDiffraction\u003C/li\u003E\r\n                  \u003Cli\u003EVitesse (en mode A)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_rb_triangle_vitesse": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EModifie la dur\u00E9e d'exposition.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EExposition de la photo\u003C/li\u003E\r\n                  \u003Cli\u003EFlou de boug\u00E9 / Vitesse de s\u00E9curit\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003EBruit\u003C/li\u003E\r\n                  \u003Cli\u003EOuverture (en mode S)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_resolution": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E9solution de l'obectif, mesur\u00E9e par DxO.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tre impact\u00E9:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EFlou d\u00FB \u00E0 la r\u00E9solution\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  limitation: Les r\u00E9solutions des objectifs pr\u00E9-d\u00E9finis sont donn\u00E9es pour un capteur 36Mpx."
  },
  "MAU_roueMode": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESelection parmis diff\u00E9rents modes de l'APN.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EM (mode manuel): ouverture, vitesse et ISO sont ind\u00E9pendaments\u003C/li\u003E\r\n                  \u003Cli\u003EA (priorit\u00E9 ouverture): vitesse r\u00E9gl\u00E9e automatiquement\u003C/li\u003E\r\n                  \u003Cli\u003ES (priorit\u00E9 vitesse): ouverture r\u00E9gl\u00E9e automatiquement\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Il est souvent n\u00E9cessaire de modifier la sensibilit\u00E9 ISO pour obtenir une exposition correcte en modes A et S."
  },
  "MAU_sldFocus": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E'Bague' de mise au point."
  },
  "MAU_sld_focale": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EModifie la longueur focale de l'objectif.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Param\u00E8tres impact\u00E9s:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EAngles de champs\u003C/li\u003E\r\n                  \u003Cli\u003EProfondeur de champ / Flou de mise au point\u003C/li\u003E\r\n                  \u003Cli\u003Edistance Hyperfocale\u003C/li\u003E\r\n                  \u003Cli\u003EFlou de boug\u00E9 / Vitesse de s\u00E9curit\u00E9\u003C/li\u003E\r\n                  \u003Cli\u003EFocale \u00E9quivalente (si capteur non full frame)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_sld_photo": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ER\u00E8gle la taille de la fen\u00EAtre photo. (en mode une seule fen\u00EAtre).\u003Cbr/\u003E\r\n      \u003Cbr/\u003E\r\n       \u003Cul\u003E        \r\n      \u003Cli\u003EAugmentez la taille pour plus de claret\u00E9.\u003C/li\u003E\r\n      \u003Cli\u003EDiminuez la taille si l'application est ralentie.\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E"
  },
  "MAU_viseur": {
    "message": "\u003Cspan  style='font-style:normal;'\u003E\u24D8 \u003C/span \u003EVue de la photo obtenue avec les r\u00E9glages courants.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Pour d\u00E9placer le photographe:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EClic gauche + souris: gauche/droite, haut/bas\u003C/li\u003E\r\n                  \u003Cli\u003ERoulette souris: devant/derri\u00E8re\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Cette vue tient compte du champ de vision, de l'exposition, de la mise au point, du bruit et du flou de boug\u00E9.\u003Cbr/\u003E\u003Cbr/\u003EVous pouvez \u00E9galement faire la mise au point en mode automatique  en cliquant sur la zone de map souhait\u00E9e.\u003Cbr/\u003E\u003Cbr/\u003EPassez du mode D\u00E9placement \u003C=\u003E mode Mise au point en maintenant enfonc\u00E9e la touche shift."
  },
  "MAU_vue3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ERepr\u00E9sentation 3D de l'APN et de son environnement.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EClic gauche + souris: D\u00E9placement par Rotation ou Translation\u003C/li\u003E\r\n                  \u003Cli\u003EEnfoncer 'shift': passer de rotation \u00E0 translation et vice versa\u003C/li\u003E\r\n                  \u003Cli\u003ERoulette souris: zoom/d\u00E9-zoom\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Le niveau de zoom peut aller du m\u00E8tre (pour visualiser la sc\u00E8ne) au \u00B5m (zoom jusqu'au capteur, pour voir les flous)."
  },
  */
  "MasqueGaz": {
    "message": "Masque \u00E0 gaz"
  },
  "MerNeige": {
    "message": "Montagne"
  },
  "Non": {
    "message": "Non"
  },
  "Normal": {
    "message": "Classique (Diag/1730)"
  },
  "Normal_": {
    "message": "Normaux"
  },
  "Nuageux": {
    "message": "Nuageux"
  },
  "ObjPreDef": {
    "message": "Objectifs pr\u00E9-d\u00E9finis"
  },
  "Objectif": {
    "message": "Objectif"
  },
  "Oui": {
    "message": "Oui"
  },
  "OuvMin": {
    "message": "Ouverture minimale"
  },
  "Ouverture": {
    "message": "Ouverture"
  },
  "Pdc": {
    "message": "PDC"
  },
  "Photo": {
    "message": "Photo"
  },
  "PixelCapteur": {
    "message": "Pixel du capteur"
  },
  "PixelEcran": {
    "message": "Pixel à l'écran"
  },
  "PleineLune": {
    "message": "Pleine lune"
  },
  "PrioMan": {
    "message": "Mode manuel"
  },
  "PrioOuv": {
    "message": "Priorit\u00E9 ouverture"
  },
  "PrioVit": {
    "message": "Priorit\u00E9 vitesse"
  },
  "ReglGene": {
    "message": "R\u00E9glages g\u00E9n\u00E9raux"
  },
  "Reglages": {
    "message": "R\u00E9glages"
  },
  "Resolution": {
    "message": "R\u00E9solution"
  },
  "Severe": {
    "message": "S\u00E9v\u00E8re (Diag/3000)"
  },
  "Severe_": {
    "message": "S\u00E9v\u00E8res"
  },
  "Statue_liberte": {
    "message": "Statue de la libert\u00E9"
  },
  "TaillePixel": {
    "message": "Taille d'un pixel"
  },
  "Tremblote": {
    "message": "Tremblements"
  },
  "TresSevere": {
    "message": "Tr\u00E8s s\u00E9v\u00E8res"
  },
  "VilleNuit": {
    "message": "Ville la nuit"
  },
  "ViseeReflex": {
    "message": "Vis\u00E9e reflex"
  },
  "Viseur": {
    "message": "Vue Photo"
  },
  "Vitesse": {
    "message": "Vitesse"
  },
  "VitesseSecurite": {
    "message": "Vitesse de s\u00E9curit\u00E9"
  },
  "Walt": {
    "message": "Walter White"
  },
  "arriere_plan": {
    "message": "arri\u00E8re plan"
  },
  "avant_plan": {
    "message": "avant plan"
  },
  "cdc_abv": {
    "message": "cdc"
  },
  "chrome_extension_description": {
    "message": "Apprenez la photo avec ce simulateur d'APN - version BETA"
  },
  "definition": {
    "message": "D\u00E9finition"
  },
  "distances_et_illustrations": {
    "message": "Distances:"
  },
  "dynamique": {
    "message": "Dynamique"
  },
  "extName": {
    "message": "LPEF - Camera Simulator"
  },
  "filtre_aa": {
    "message": "Filtre anti-aliasing"
  },
  "flou": {
    "message": "flou"
  },
  "info_flags_chrome": {
    "message": "\u003Cul\u003E\r\n                  \u003Cli\u003EAllez \u00E0 l'adresse      \u003Cb\u003E\u003Cu\u003Echrome://flags/\u003C/u\u003E\u003C/b\u003E\u003C/li\u003E\r\n                  \u003Cli\u003EActiver ou D\u00E9sactiver \u003Cb\u003E\u003Cu\u003E'D\u00E9sactiver le Canvas 2D avec acc\u00E9l\u00E9ration mat\u00E9rielle'\u003C/u\u003E\u003C/b\u003E peut grandement affecter les performances\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "libre": {
    "message": "Libre"
  },
  "luminosite": {
    "message": "luminosit\u00E9"
  },
  "map": {
    "message": "mise au point"
  },
  "nbr_de_pixels": {
    "message": "Nbr de pixels"
  },
  "nom_acceleration": {
    "message": "Affichage rapide (exp\u00E9rimental)"
  },
  "nom_aucune": {
    "message": "Aucune"
  },
  "nom_cadrage_constant": {
    "message": "Cadrage constant"
  },
  "chargementEnCours": {
    "message": "Chargement en cours"
  },
  "nom_chk_drawBoitier": {
    "message": "Boitier"
  },
  "nom_chk_drawDiaph": {
    "message": "Diaphragme"
  },
  "nom_chk_drawIllustrations": {
    "message": "Silhouettes"
  },
  "nom_chk_drawMiroirs": {
    "message": "Miroirs"
  },
  "nom_chk_illu_flou_AA": {
    "message": "Filtre anti-aliasing"
  },
  "nom_chk_illu_flou_AC": {
    "message": "Aberrations chromatiques"
  },
  "nom_chk_illu_flou_arriere": {
    "message": "Mise au point (arri\u00E8re plan)"
  },
  "nom_chk_illu_flou_avant": {
    "message": "Mise au point (avant plan)"
  },
  "nom_chk_illu_flou_bouge": {
    "message": "Flou de boug\u00E9"
  },
  "nom_chk_illu_flou_cdc": {
    "message": "Cercle de confusion"
  },
  "nom_chk_illu_flou_diff": {
    "message": "Diffraction"
  },
  "nom_chk_illu_flou_res": {
    "message": "R\u00E9solution de l'objectif"
  },
  "nom_elements_a_afficher": {
    "message": "El\u00E9m\u00E9nets \u00E0 afficher"
  },
  "nom_fenetres": {
    "message": "Fen\u00EAtres"
  },
  "nom_flagChrome": {
    "message": "Acc\u00E9l\u00E9rer chrome:"
  },
  "nom_flous_capteur": {
    "message": "Flous (vus sur le capteur)"
  },
  "nom_grillePerspective": {
    "message": "Grille de perspective"
  },
  "nom_illu_optiques": {
    "message": "Illustrations optiques"
  },
  "nom_modeliser": {
    "message": "Mod\u00E9liser"
  },
  "nom_parametres": {
    "message": "Param\u00E8tres"
  },
  "nom_prise_de_vue": {
    "message": "Prise de vue"
  },
  "nom_reglages_rapides": {
    "message": "R\u00E9glages Rapides"
  },
  "nom_taille_fenetre_photo": {
    "message": "taille:"
  },
  "nom_valeurs_calculees": {
    "message": "Valeurs calcul\u00E9es"
  },
  "predefini": {
    "message": "Pr\u00E9-d\u00E9fini"
  },
  "sujet": {
    "message": "sujet"
  },
  "vitesse_sujet": {
    "message": "Vitesse du sujet"
  }
};

var traductionEn = {

  "Plan#": {
    "message": "Subject#"
  },


  "versionInsuffisante": {
    "message": "this simulator won't work before version "
  },

  "navigateurInconnu": {
    "message": "this browser hasn't been tested with this simulator.<br/> Use (in order of preference) Chrome > Opera > Firefox > Internet Explorer"
  },

  "navigateurCompatible": {
    "message": "this browser works fine with this simulator."
  },

  "RqIE": {
    "message": "<br/>Blur and Exposure won't work on any Internet Explorer version, better use Chrome."
  },
  "RqFF": {
    "message": "<br/>Firefox is really slow for this king of application, better use Chrome."
  },
  "RqOP": {
    "message": "<br/>use Chrome if opera is slow."
  },



  "vousUtilisez": {
    "message": "You're using "
  },


  "3D": {
    "message": "3D view"
  },
  "APN": {
    "message": "Camera"
  },
  "Aberrations_chromatiques": {
    "message": "Chromatic Abberation"
  },
  "Afficher": {
    "message": "Display"
  },
  "Anti_vibration": {
    "message": "Vibration Reduction"
  },
  "Arbre": {
    "message": "Tree"
  },
  "Bruit": {
    "message": "Noise"
  },
  "Camion": {
    "message": "RV"
  },
  "Capteur": {
    "message": "Sensor"
  },
  "Cdc": {
    "message": "Circle of Confusion"
  },
  "ChampHoriz": {
    "message": "Horizontal angle"
  },
  "ChampVert": {
    "message": "Vertical angle"
  },
  "ChampsVision": {
    "message": "Field of view"
  },
  "Chat": {
    "message": "Cat"
  },
  "CielVoile": {
    "message": "Hazy sky"
  },
  "CondLum": {
    "message": "Lighting conditions:"
  },
  "Cote": {
    "message": "Right"
  },
  "CoucherSoleil": {
    "message": "Sunset"
  },
  "CropFactor": {
    "message": "Crop factor"
  },
  "DebutPdc": {
    "message": "Start of DOF"
  },
  "Derriere": {
    "message": "Rear"
  },
  "Dessus": {
    "message": "Top"
  },
  "Devant": {
    "message": "Front"
  },
  "DimHoriz": {
    "message": "background width"
  },
  "DimVert": {
    "message": "background height"
  },
  "Distances": {
    "message": "Lengths"
  },
  "Divers": {
    "message": "Various"
  },
  "Escargot": {
    "message": "Snail"
  },
  "Exposition": {
    "message": "Exposure"
  },
  "Faible": {
    "message": "Low"
  },
  "Femme_parapluie": {
    "message": "Woman with an umbrella"
  },
  "Fenetre": {
    "message": "Window"
  },
  "FinPdc": {
    "message": "End of DOF"
  },
  "FlouAA": {
    "message": "Anti-aliasing filter blur"
  },
  "FlouAbbChro": {
    "message": "Chromatic Abberation"
  },
  "FlouArriere": {
    "message": "Background blur"
  },
  "FlouAvant": {
    "message": "Foreground blur"
  },
  "FlouBouge": {
    "message": "Shake blur"
  },
  "FlouDeMap": {
    "message": "Focus blur"
  },
  "FlouDiff": {
    "message": "Diffraction"
  },
  "FlouRes": {
    "message": "limited sharpness blur"
  },
  "FocEqu": {
    "message": "35mm equivalent focal length"
  },
  "FormatCapteur": {
    "message": "Sensor ratio"
  },
  "GrandSoleil": {
    "message": "Sunny"
  },
  "Hauteur": {
    "message": "Height"
  },
  "Histogramme": {
    "message": "Histogram"
  },
  "Hyperfocale": {
    "message": "Hyperfocal"
  },
  "ISO": {
    "message": "ISO"
  },
  "JustePourCopier": {
    "message": "OSEF"
  },
  "JustePourMarquerLaFin": {
    "message": "OSEF"
  },
  "Largeur": {
    "message": "Width"
  },
  "Laxiste": {
    "message": "Permissive (Diag/1440)"
  },
  "Longueur_focale": {
    "message": "Foc. lenght"
  },
  "Luminosite": {
    "message": "Luminosity"
  },
  /*
  "MAU_AA": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAnti-aliasing filter.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameter:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EAnti-aliasing filter blur\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitation: moir\u00E9 patterning isn't modeled."
  },
  "MAU_AC": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAverage lateral chromatic aberration (value from DxO).\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameter:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EChromatic aberration blur\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitation: chromatic aberration is constant"
  },
  "MAU_AF": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAutofocus."
  },
  "MAU_AFC": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EContinuous Autofocus."
  },
  "MAU_AFS": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESingle Autofocus."
  },
  "MAU_Calc": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECalculations (DoF, filed of view, blurs,...)"
  },
  "MAU_Infos": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDisplay contextual help"
  },
  "MAU_MF": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EManual focus."
  },
  "MAU_RAZ": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMove mouse over something to see informations"
  },
  "MAU_Reglages": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EGeneral settings"
  },
  "MAU_Settings3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E3D view settings"
  },
  "MAUvueReglagesVuePhoto": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EPhoto view settings"
  },
  "MAU_VR": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EVibration Reduction.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EShake blur\u003C/li\u003E\r\n                  \u003Cli\u003EMin shutter speed (permit the use of shutter speeds 3 stops slower)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_btn1Fenetre": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDisplay 1 window."
  },
  "MAU_btn2Fenetre": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDisplay 2 window."
  },
  "MAU_btn4Fenetre": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDisplay 4 window."
  },
  "MAU_btnFocus": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EClic to select focus point on photo view."
  },
  "MAU_btnRotation": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ERotational movement in 3D view."
  },
  "MAU_btnTranslation": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ETranslational movement in 3D view."
  },
  "MAU_btn_camera_flou_viseur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESet 3D view in order to see blurs at sensor level."
  },
  "MAU_btn_camera_optique": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESet 3D view in order to see ptical drawings"
  },
  "MAU_cadrageCst": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EFraming @ subject (blue illustration) remains constant.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EDistance to the subject changes when focal length changes\u003C/li\u003E\r\n                  \u003Cli\u003EFocal length changes when sensor siez changes.\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  This option allows to understand equivalent focal length and telephoto lense compression."
  },
  "MAU_calculs": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ENumerical values of parameters calculated.\u003Cbr/\u003E\r\n      \u003Cbr/\u003E\r\n     3 units are used for blurs:\r\n      \u003Cbr/\u003E\r\n      \u003Cul\u003E        \r\n      \u003Cli\u003Emeter\u003C/li\u003E\r\n      \u003Cli\u003Esensor pixel size\u003C/li\u003E\r\n      \u003Cli\u003Ecircle of Confusion size\u003C/li\u003E\r\n      \u003C/ul\u003E"
  },
  "MAU_cdc": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECircle of Confusion.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EDof / Hyperfocal\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Circle of Confusion = max blur diameter (@ sensor level) tha t will be see sharp.\u003Cbr/\u003E\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EPermissive/Classical/Severe: common settings\u003C/li\u003E\r\n                  \u003Cli\u003ESensor pixel: blur can be seen if \u2265 1 sensor pixel\u003C/li\u003E\r\n                  \u003Cli\u003EScreen: blur can be seen even on the photo view (that is unzoomed)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_chk_bruit": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShow noise modeling.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitation:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EIt's a very simplified modeling\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Noise depends of ISO, low light ISO and shutter speed."
  },
  "MAU_chk_expo": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShow Exposure modeling.\u003Cbr/\u003E\r\n               Limitation:\r\n                  \u003Cul\u003E \r\n                  \u003Cli\u003ESome strange results with Shake blur.\u003C/li\u003E       \r\n                  \u003C/ul\u003E\r\n               \u003Cbr/\u003E\r\n               Exposure depends of aperture, ISO, shutter speed, luminosity and sensor dynamic range."
  },
  "MAU_chk_flou": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShow Focus blur modeling.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitations:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EFocus blur is a gaussian blur\u003C/li\u003E\r\n                  \u003Cli\u003ECan slow down application\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Focus blur depends of focus distance, focal length, aperture and sensor size."
  },
  "MAU_chk_flouBouge": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShow Shake blur modeling.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Limitations:\r\n                  \u003Cul\u003E \r\n                  \u003Cli\u003EShake blur modeling is simplified\u003C/li\u003E       \r\n                  \u003Cli\u003ESome strange results with exposure modeling\u003C/li\u003E\r\n                  \u003Cli\u003ECan slow down application\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Shake blur depends of focal length, shutter speed, sensor size, VR system and photographer tremors."
  },
  "MAU_chk_pdc": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDraw depth of field at ground level.\u003Cbr/\u003E"
  },
  "MAU_definition": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESensor resolution.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EPixel size\u003C/li\u003E\r\n                  \u003Cli\u003EAnti-aliasing filter blur\u003C/li\u003E\r\n                  \u003Cli\u003ECircle of Confusion (if c.o.c = 1 pixel)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_distances": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EForeground, Subject and Background distances from photographer.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELeft clic + mouse move: change distances\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n"
  },
  "MAU_drawBoitier": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDraw camera housing, lenses, mirrors,..."
  },
  "MAU_drawDiaph": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine le diaphragme de l'objectif."
  },
  "MAU_drawIllustrations": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine les 3 illustrations utilis\u00E9es \u00E0 l'avant plan, la distance de map et \u00E0 l'arri\u00E8re plan ainsi que le photographe."
  },
  "MAU_drawMiroirs": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDraw mirros used by SLR view."
  },
  "MAU_drawObjectif": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDessine l'objectif."
  },
  "MAU_drawPdc3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EDraw depth of filed at ground."
  },
  "MAU_dynamique": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESensor Dynamic Range @ 100ISO (value from DxO).\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameter:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EExposure\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Dynamic looses 1 EV when ISO doubles.\u003Cbr/\u003E\r\n                  High dynamic range allows a good control of exposure."
  },
  "MAU_expo": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShow current exposure.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EEV\u003C0: underexposed\u003C/li\u003E\r\n                  \u003Cli\u003EEV=0: correct exposure\u003C/li\u003E\r\n                  \u003Cli\u003EEV\u003E0: overexposed\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Adjust exposure by adjusting aperture, shutter speed and ISO.\u003Cbr\u003E\r\n                  Exposure also depends on luminosity and sensor dynamic range."
  },
  "MAU_flousCapteur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESelect blurs to display on sensor in 3D view.\u003Cbr/\u003E\r\n      pixel are also drawn."
  },
  "vueFlouDeMiseAuPoint": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EFocus blur vs distance.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EBlue area show depth of field (blur \u003C c.o.c)\u003C/li\u003E\r\n                  \u003Cli\u003EForeground, Focus and Background distances are shown \u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELeft clic + mouse move: adjust distances\u003C/li\u003E\r\n                  \u003Cli\u003EMouse wheel: zoom/un-zoom\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Focus blur depends on focus distance, focal length, aperture and sensor size."
  },
  "MAU_grillePerspective": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E.Draw a perspective gring at ground level."
  },
  "MAU_histogramme": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ELuminosity histogram.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003Ehorizontal axis: luminosity, from 0 to 255\u003C/li\u003E\r\n                  \u003Cli\u003Evertical axis: number of pixels at a given luminosity\u003C/li\u003E\r\n                  \u003Cli\u003Elimitation: histogram computation doesn't take into account the focus blur\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Histogram depends on exposure."
  },
  "MAU_lst_N_min": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMinimum aperture.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameter:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EAperture (if \u003E to minimum aperture)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lst_camera": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAutomatically adjusts 3D view, camera can be seen:\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ERear side\u003C/li\u003E\r\n                  \u003Cli\u003ERight side\u003C/li\u003E\r\n                  \u003Cli\u003EFront side\u003C/li\u003E\r\n                  \u003Cli\u003ETop side\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n      "
  },
  "MAU_lst_capteur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESensor size.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ESensor format (3:2, 4:3,...)\u003C/li\u003E\r\n                  \u003Cli\u003ECrop factor / 35 mm equivalent focal length\u003C/li\u003E\r\n                  \u003Cli\u003EFiled of view\u003C/li\u003E\r\n                  \u003Cli\u003EDof / Focus blur / Hyperfocal\u003C/li\u003E\r\n                  \u003Cli\u003EAnti-aliasing filter blur\u003C/li\u003E\r\n                  \u003Cli\u003EShake blur\u003C/li\u003E\r\n                  \u003Cli\u003EPixel size\u003C/li\u003E\r\n                  \u003Cli\u003ECircle of Confusion (if c.o.c = 1 pixel)\u003C/li\u003E\r\n                  \u003Cli\u003EFocal length (constant framing mode)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lst_scene": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E brightness level of the scene.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EExposure\u003C/li\u003E\r\n                  \u003Cli\u003EHistogram\u003C/li\u003E\r\n                  \u003Cli\u003EAperture (S mode)\u003C/li\u003E\r\n                  \u003Cli\u003EShutter speed (A mode)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lst_tremblote": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EPhotographer tremors.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ENormal: min shutter speed = 1/equivalent focal length\u003C/li\u003E\r\n                  \u003Cli\u003ELow: min shutter speed is divided by 2\u003C/li\u003E\r\n                  \u003Cli\u003EHigh: min shutter speed is muliplied by 1.5\u003C/li\u003E\r\n                  \u003Cli\u003EVery high: min shutter speed is doubled\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n\r\n                  Affected parameters:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003EShake blur\u003C/li\u003E\r\n                  \u003Cli\u003EMin shutter speed\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_lowLightISO": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ELow Light ISO (value from DxO).\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameter:\r\n                  \u003Cul\u003E        \r\n                  \u003Cli\u003ENoise\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Above this value noise can be clearly seen."
  },
  "MAU_moletteReglage": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECommand dial for adjusting Aperture, Shutter speed and ISO.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELeft clic + mouse move: adjust value (1/3EV step)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_onglet_3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E3D view settings."
  },
  "MAU_onglet_apn": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ECamera specifications.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Choose from a list of real cameras or manually defines the specifications."
  },
  "MAU_onglet_fenetres": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EChoose windows to display."
  },
  "MAU_onglet_objectif": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ELense sepecifications.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Choose from a list of predefined lenses or manually defines the specifications."
  },
  "MAU_onglet_scene": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShooting conditions:\u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELuminosity\u003C/li\u003E\r\n                  \u003Cli\u003EDistances and drawings\u003C/li\u003E\r\n                  \u003Cli\u003EPhotographer tremors\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_onglet_viseur": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EPhoto view settings."
  },
  "MAU_rb_3D_dim": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EShow field of view, from sensor to background."
  },
  "MAU_rb_3D_flou_arrierePlan": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EBackground blur, affected by:\r\n      \u003Cbr/\u003E\r\n      \u003Cul\u003E        \r\n      \u003Cli\u003Ebackground distance\u003C/li\u003E\r\n      \u003Cli\u003Eaperture\u003C/li\u003E\r\n      \u003Cli\u003Efocal length\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E"
  },
  "MAU_rb_3D_flou_avantPlan": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EForeground blur, affected by:\r\n      \u003Cbr/\u003E\r\n      \u003Cul\u003E        \r\n      \u003Cli\u003Eforeground distance\u003C/li\u003E\r\n      \u003Cli\u003Eaperture\u003C/li\u003E\r\n      \u003Cli\u003Efocal length\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E"
  },
  "MAU_rb_3D_visee": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESee reflective view.\u003Cbr/\u003E"
  },
  "MAU_rb_triangle_ISO": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAdjust ISO.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EExposure\u003C/li\u003E\r\n                  \u003Cli\u003ENoise\u003C/li\u003E\r\n                  \u003Cli\u003ESensor dynamic range\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_rb_triangle_ouverture": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAdjust Aperture.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EExposure\u003C/li\u003E\r\n                  \u003Cli\u003EDepth of field / Focus blur\u003C/li\u003E\r\n                  \u003Cli\u003EHyperfocal distance\u003C/li\u003E\r\n                  \u003Cli\u003EDiffraction\u003C/li\u003E\r\n                  \u003Cli\u003EShutter speed (A mode)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_rb_triangle_vitesse": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAdjust Shutter speed.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EExposure\u003C/li\u003E\r\n                  \u003Cli\u003EShake blur / min shutter speed \u003C/li\u003E\r\n                  \u003Cli\u003ENoise\u003C/li\u003E\r\n                  \u003Cli\u003EAperture (S mode)\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_resolution": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ELense Sharpness (value from DxO).\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameter:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELense Sharpness blur\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  limitation: predefined lense Sharpness is given for a 36Mpx sensor."
  },
  "MAU_roueMode": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EMode dial.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EM (Manual): aperture, shutter speed and ISO can be set independently\u003C/li\u003E\r\n                  \u003Cli\u003EA (Aperture priority): shutter speed is set automatically\u003C/li\u003E\r\n                  \u003Cli\u003ES (Shutter priority): aperture is set automatically\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  Be careful: A and S mode can require ajusting ISO in order to have a correct exposure."
  },
  "MAU_sldFocus": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EFocus 'Ring'."
  },
  "MAU_sld_focale": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003EAdjust Focal length.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  Affected parameters:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003EField of view\u003C/li\u003E\r\n                  \u003Cli\u003EDepth of field / Focus blur\u003C/li\u003E\r\n                  \u003Cli\u003EHyperfocal distance\u003C/li\u003E\r\n                  \u003Cli\u003EShake blur / min shutter speed \u003C/li\u003E\r\n                  \u003Cli\u003E35 mm equivalent focal length\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "MAU_sld_photo": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003ESet size of photo view window. (1 window mode).\u003Cbr/\u003E\r\n      \u003Cbr/\u003E\r\n       \u003Cul\u003E        \r\n      \u003Cli\u003EUse a higher size for a more precise view.\u003C/li\u003E\r\n      \u003Cli\u003EUse a lower size if computer becomes too slow.\u003C/li\u003E\r\n      \u003C/ul\u003E\r\n      \u003Cbr/\u003E"
  },
  "MAU_viseur": {
    "message": "\u003Cspan  style='font-style:normal;'\u003E\u24D8 \u003C/span \u003EPhoto as it would be with current settings.\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  For moving photographer:\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELeft clic + mouse move: left/right, up/down\u003C/li\u003E\r\n                  \u003Cli\u003EMouse wheel: backward/frontward\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  This view takes into account: field of view, exposure, focus blur, noise and shake blur.\u003Cbr/\u003E\u003Cbr/\u003ELeft-clic to focus in autofocus mode.\u003Cbr/\u003EHold Shift key to switch Focus mode \u003C=\u003E Moving mode."
  },
  "MAU_vue3D": {
    "message": "\u003Cspan style='font-style:normal;'\u003E\u24D8 \u003C/span\u003E3D view of camera, optical phenomena, distances,..\u003Cbr/\u003E\r\n                  \u003Cbr/\u003E\r\n                  \u003Cul\u003E\r\n                  \u003Cli\u003ELeft clic + mouse move: Moving by Rotation or Translation\u003C/li\u003E\r\n                  \u003Cli\u003EPress shift: change from Rotation to transation and vice versa\u003C/li\u003E\r\n                  \u003Cli\u003EMouse wheel: zoom/un-zoom\u003C/li\u003E\r\n                  \u003C/ul\u003E\r\n                  \u003Cbr/\u003E\r\n                  You can zoom from meters (to see the whole scene) to \u00B5m (sensor level, to see blurs)."
  },
  */
  "MasqueGaz": {
    "message": "Gas mask"
  },
  "MerNeige": {
    "message": "Mountain"
  },
  "Non": {
    "message": "No"
  },
  "Normal": {
    "message": "Classical (Diag/1730)"
  },
  "Normal_": {
    "message": "Normal"
  },
  "Nuageux": {
    "message": "Cloudy"
  },
  "ObjPreDef": {
    "message": "predefined lenses"
  },
  "Objectif": {
    "message": "Lense"
  },
  "Oui": {
    "message": "Yes"
  },
  "OuvMin": {
    "message": "minimum aperture"
  },
  "Ouverture": {
    "message": "Aperture"
  },
  "Pdc": {
    "message": "DOF"
  },
  "Photo": {
    "message": "Photo"
  },
  "PixelCapteur": {
    "message": "Sensor pixel"
  },
  "PixelEcran": {
    "message": "Screen"
  },
  "PleineLune": {
    "message": "Full moon"
  },
  "PrioMan": {
    "message": "Manual"
  },
  "PrioOuv": {
    "message": "Aperture priority"
  },
  "PrioVit": {
    "message": "Shutter priority"
  },
  "ReglGene": {
    "message": "General settings"
  },
  "Reglages": {
    "message": "Settings"
  },
  "Resolution": {
    "message": "Sharpness"
  },
  "Severe": {
    "message": "Severe (Diag/3000)"
  },
  "Severe_": {
    "message": "High"
  },
  "Statue_liberte": {
    "message": "Statue of Liberty"
  },
  "TaillePixel": {
    "message": "Pixel size"
  },
  "Tremblote": {
    "message": "Tremors"
  },
  "TresSevere": {
    "message": "Very high"
  },
  "VilleNuit": {
    "message": "City at night"
  },
  "ViseeReflex": {
    "message": "SLR viewfinder"
  },
  "Viseur": {
    "message": "Photo view"
  },
  "Vitesse": {
    "message": "Shutter speed"
  },
  "VitesseSecurite": {
    "message": "min shutter speed"
  },
  "Walt": {
    "message": "Walter White"
  },
  "arriere_plan": {
    "message": "background"
  },
  "avant_plan": {
    "message": "foreground"
  },
  "cdc_abv": {
    "message": "CoC"
  },
  "chrome_extension_description": {
    "message": "Learn Photography with this emulator - BETA version"
  },
  "definition": {
    "message": "Sharpness"
  },
  "distances_et_illustrations": {
    "message": "Distances:"
  },
  "dynamique": {
    "message": "Dynamic"
  },
  "extName": {
    "message": "LPEF - Camera Simulator"
  },
  "filtre_aa": {
    "message": "Anti-aliasing filter"
  },
  "flou": {
    "message": "blur"
  },
  "info_flags_chrome": {
    "message": "\u003Cul\u003E\r\n                  \u003Cli\u003EGo to     \u003Cb\u003E\u003Cu\u003Echrome://flags/\u003C/u\u003E\u003C/b\u003E\u003C/li\u003E\r\n                  \u003Cli\u003EEnable or Disable \u003Cb\u003E\u003Cu\u003E'Disable accelerated 2D canvas'\u003C/u\u003E\u003C/b\u003E can significantly improve performances\u003C/li\u003E\r\n                  \u003C/ul\u003E"
  },
  "libre": {
    "message": "Free"
  },
  "luminosite": {
    "message": "luminosity"
  },
  "map": {
    "message": "focus"
  },
  "nbr_de_pixels": {
    "message": "Frequency"
  },
  "nom_acceleration": {
    "message": "Fast display (experimental )"
  },
  "nom_aucune": {
    "message": "None"
  },
  "nom_cadrage_constant": {
    "message": "Constant framing"
  },
  "chargementEnCours": {
    "message": "Loading"
  },
  "nom_chk_drawBoitier": {
    "message": "Camera housing"
  },
  "nom_chk_drawDiaph": {
    "message": "Diaphragm"
  },
  "nom_chk_drawIllustrations": {
    "message": "Silhouettes"
  },
  "nom_chk_drawMiroirs": {
    "message": "Mirrors"
  },
  "nom_chk_illu_flou_AA": {
    "message": "Anti-aliasing filter"
  },
  "nom_chk_illu_flou_AC": {
    "message": "Chromatic Abberation"
  },
  "nom_chk_illu_flou_arriere": {
    "message": "Focus blur (background)"
  },
  "nom_chk_illu_flou_avant": {
    "message": "Focus blur (foreground)"
  },
  "nom_chk_illu_flou_bouge": {
    "message": "Shake blur"
  },
  "nom_chk_illu_flou_cdc": {
    "message": "Circle of Confusion"
  },
  "nom_chk_illu_flou_diff": {
    "message": "Diffraction"
  },
  "nom_chk_illu_flou_res": {
    "message": "Lense sharpness"
  },
  "nom_elements_a_afficher": {
    "message": "Silhouettes"
  },
  "nom_fenetres": {
    "message": "Windows"
  },
  "nom_flagChrome": {
    "message": "Speed up Chrome:"
  },
  "nom_flous_capteur": {
    "message": "Blur (@sensor level)"
  },
  "nom_grillePerspective": {
    "message": "Perspective Grid"
  },
  "nom_illu_optiques": {
    "message": "Optical drawings"
  },
  "nom_modeliser": {
    "message": "Modelize"
  },
  "nom_parametres": {
    "message": "Parameters"
  },
  "nom_prise_de_vue": {
    "message": "Shooting"
  },
  "nom_reglages_rapides": {
    "message": "Fast Settings"
  },
  "nom_taille_fenetre_photo": {
    "message": "size:"
  },
  "nom_valeurs_calculees": {
    "message": "Calculated values"
  },
  "predefini": {
    "message": "Predefined "
  },
  "sujet": {
    "message": "subject"
  }
};