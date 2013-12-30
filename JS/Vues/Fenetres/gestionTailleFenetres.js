var LARGEUR_MIN_VUE_PHOTO = 300;
var LARGEUR_MAX_VUE_PHOTO_SIMULATEUR_ARTICLES = 822;
var LARGEUR_MAX_VUE_PHOTO_SIMULATEUR_COMPLET = 1024;


function initSldTailleFenetres() {




  drawCanvasSldTailleFenetres();
  document.getElementById("sldTailleFenetres").min = LARGEUR_MIN_VUE_PHOTO;
  if (typeDeSimulateur === 'simulateurComplet') document.getElementById("sldTailleFenetres").max = LARGEUR_MAX_VUE_PHOTO_SIMULATEUR_COMPLET;
  else document.getElementById("sldTailleFenetres").max = LARGEUR_MAX_VUE_PHOTO_SIMULATEUR_ARTICLES;
  //document.getElementById("sldTailleFenetres").step = 1;
  document.getElementById("sldTailleFenetres").value = vuePhoto.largeur;
}

function drawCanvasSldTailleFenetres() {

  var HAUTEUR_CVS_ICONE = 23;
  var LARGEUR_CVS_ICONE = 23;

  var K_PETITE_FENETRE = 0.33;
  var K_GRANDE_FENETRE = 0.85;
  var RAPPORT_H_L = 2 / 3;

  var Xm = (LARGEUR_CVS_ICONE - 1) / 2;
  var Ym = (HAUTEUR_CVS_ICONE - 1) / 2;


  var cvs = document.getElementById('cvsPetiteFenetre');
  var ct = cvs.getContext('2d');

  cvs.width = LARGEUR_CVS_ICONE;
  cvs.height = HAUTEUR_CVS_ICONE;

  var X0 = Xm - 0.5 * K_PETITE_FENETRE * LARGEUR_CVS_ICONE;
  var Y0 = Ym - 0.5 * K_PETITE_FENETRE * HAUTEUR_CVS_ICONE * RAPPORT_H_L;

  ct.strokeStyle = "#ffffff";
  ct.lineWidth = 1;
  ct.beginPath();
  ct.rect(X0, Y0, K_PETITE_FENETRE * LARGEUR_CVS_ICONE, K_PETITE_FENETRE * HAUTEUR_CVS_ICONE * RAPPORT_H_L);
  ct.stroke();


  cvs = document.getElementById('cvsGrandeFenetre');
  ct = cvs.getContext('2d');

  cvs.width = LARGEUR_CVS_ICONE;
  cvs.height = HAUTEUR_CVS_ICONE;

  X0 = Xm - 0.5 * K_GRANDE_FENETRE * LARGEUR_CVS_ICONE;
  Y0 = Ym - 0.5 * K_GRANDE_FENETRE * HAUTEUR_CVS_ICONE * RAPPORT_H_L;

  ct.strokeStyle = "#ffffff";
  ct.lineWidth = 1;
  ct.beginPath();
  ct.rect(X0, Y0, K_GRANDE_FENETRE * LARGEUR_CVS_ICONE, K_GRANDE_FENETRE * HAUTEUR_CVS_ICONE * RAPPORT_H_L);
  ct.stroke();
}

function modifSldTailleFenetre() {
  vuePhoto.largeur = 1.0 * document.getElementById("sldTailleFenetres").value;
  calcHauteurVuePhoto();
  initVuePhoto();
  drawVuePhoto();
}

document.getElementById("sldTailleFenetres").addEventListener('change', modifSldTailleFenetre, false);

document.getElementById("sldTailleFenetres").oninput = function() {
  modifSldTailleFenetre();
};

document.getElementById('sldTailleFenetres').addEventListener('mousedown', function(e) {
  inhibeAccelerationMaterielle();
  vuePhoto.affichageRapide = 1;
}, false);

document.getElementById('sldTailleFenetres').addEventListener('mouseup', function() {

  if (photographe.typeDeCdc === 2) onModifCdC();

  vuePhoto.affichageRapide = 0;

  valideAccelerationMaterielle();
  drawVuePhoto();
}, false);