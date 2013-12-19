var LARGEUR_VUE_3D = 300;
var COULEUR_SOL_3D = 'rgba(220,220,220,1)';
var COULEUR_GRILLE_3D = 'rgba(240,240,240,1)';


Vue3D = function() {
	this.nom = '3D';

	this.init = initVue3D;
	this.initIHM = initIHMVues;
	this.draw = drawVue3D;
};

function initVue3D() {

	vue3D.largeurCanvas = LARGEUR_VUE_3D;
	vue3D.hauteurCanvas = 3 * vue3D.largeurCanvas / 4;
	vue3D.X0 = 3 * vue3D.largeurCanvas / 8;
	vue3D.Y0 = (vue3D.hauteurCanvas - 1) / 2;
	vue3D.hauteurEnMetre = 3;
	calcKHauteurNormalisee();
	vue3D.cvs = "cvsVue3D";

	vue3D.thetaX = Math.PI / 20;
	vue3D.thetaY = Math.PI / 20;
	vue3D.thetaP = 0;

	majTrigoVue3D();

	vue3D.matriceDeRotation = new Array(3);
	for (i = 0; i !== 3; i++)
		vue3D.matriceDeRotation[i] = new Array(3);

	for (i = 0; i !== 3; i++) {
		for (var ii = 0; ii !== 3; ii++)
			vue3D.matriceDeRotation[i][ii] = 0;
		vue3D.matriceDeRotation[i][i] = 1;
	}

	vue3D.translationX = 0;
	vue3D.translationY = 0;
	vue3D.translationP = 0;

	vue3D.vecteurLuminositeX = 0;
	vue3D.vecteurLuminositeY = 0;
	vue3D.vecteurLuminositeP = 1;

	vue3D.luminositeFaceEclairee = 0;
	vue3D.luminositeFaceOmbre = 0;

	vue3D.orientationHaut = 0;
	vue3D.orientationBas = 0;
	vue3D.orientationDroite = 0;
	vue3D.orientationGauche = 0;
	vue3D.orientationDevant = 0;
	vue3D.orientationDerriere = 0;

	vue3D.typeDeDeplacement = 'translation';
}

function calcKHauteurNormalisee() {
	vue3D.kHauteurNormalisee = 1 / (vue3D.hauteurEnMetre / 2);
}

function majTrigoVue3D() {
	vue3D.cosX = Math.cos(vue3D.thetaX);
	vue3D.sinX = Math.sin(vue3D.thetaX);
	vue3D.cosY = Math.cos(vue3D.thetaY);
	vue3D.sinY = Math.sin(vue3D.thetaY);
	vue3D.cosP = Math.cos(vue3D.thetaP);
	vue3D.sinP = Math.sin(vue3D.thetaP);
}

function drawCadreVue3D() {
	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');
	ct.fillStyle = '#000000';
	ct.beginPath();
	ct.fillRect(0, 0, vue3D.largeurCanvas, 1);
	ct.fillRect(0, vue3D.hauteurCanvas - 1, vue3D.largeurCanvas, 1);
	ct.fillRect(0, 0, 1, vue3D.hauteurCanvas);
	ct.fillRect(vue3D.largeurCanvas - 1, 0, 1, vue3D.hauteurCanvas);
}

function drawSolVue3D() {
	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');

	ct.fillStyle = COULEUR_SOL_3D;
	ct.beginPath();

	var coord_3D = xyp2XYmaj(-DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, -DIMENSION_MAX_3D + photographe.deplacementProfondeur);
	var xt = coord_3D.X;
	var yt = coord_3D.Y;
	ct.moveTo(xt, yt);
	coord_3D = xyp2XYmaj(DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, -DIMENSION_MAX_3D + photographe.deplacementProfondeur);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.lineTo(xt, yt);
	coord_3D = xyp2XYmaj(DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, DIMENSION_MAX_3D + photographe.deplacementProfondeur);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.lineTo(xt, yt);
	coord_3D = xyp2XYmaj(-DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, DIMENSION_MAX_3D + photographe.deplacementProfondeur);

	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.lineTo(xt, yt);

	ct.closePath();
	ct.fill();

	if (vue3D.orientationHaut) {
		ct.strokeStyle = COULEUR_GRILLE_3D;

		for (var i = 0; i < DIMENSION_MAX_3D + photographe.deplacementProfondeur; i += PAS_GRILLE_SOL) {
			drawLine3D(-DIMENSION_MAX_3D - (-photographe.deplacementHorizontal), 0, i, DIMENSION_MAX_3D - (-photographe.deplacementHorizontal), 0, i);
			drawLine3D(-DIMENSION_MAX_3D - (-photographe.deplacementHorizontal), 0, -1 * i, DIMENSION_MAX_3D - (-photographe.deplacementHorizontal), 0, -1 * i);
		}

		for (i = 0; i < DIMENSION_MAX_3D - (-photographe.deplacementHorizontal); i += PAS_GRILLE_SOL) {
			drawLine3D(i, 0, -1 * (DIMENSION_MAX_3D + photographe.deplacementProfondeur), i, 0, DIMENSION_MAX_3D + photographe.deplacementProfondeur);
			drawLine3D(-1 * i, 0, -1 * (DIMENSION_MAX_3D + photographe.deplacementProfondeur), -1 * i, 0, DIMENSION_MAX_3D + photographe.deplacementProfondeur);
		}
	}
}

function drawEchelleVue3D() {

	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');

	var tailleFlecheEnPixel;
	var tailleFelecheEnMetre;
	var uniteEchelle;

	if (vue3D.hauteurEnMetre >= 100) {
		tailleFelecheEnMetre = 100;
		uniteEchelle = '100m';
	} else if (vue3D.hauteurEnMetre >= 10) {
		tailleFelecheEnMetre = 10;
		uniteEchelle = '10m';
	} else if (vue3D.hauteurEnMetre >= 1) {
		tailleFelecheEnMetre = 1;
		uniteEchelle = '1m';
	} else if (vue3D.hauteurEnMetre >= 0.1) {
		tailleFelecheEnMetre = 0.1;
		uniteEchelle = '10cm';
	} else if (vue3D.hauteurEnMetre >= 0.01) {
		tailleFelecheEnMetre = 0.01;
		uniteEchelle = '1cm';
	} else if (vue3D.hauteurEnMetre >= 0.001) {
		tailleFelecheEnMetre = 0.001;
		uniteEchelle = '1mm';
	} else if (vue3D.hauteurEnMetre >= 0.0001) {
		tailleFelecheEnMetre = 0.0001;
		uniteEchelle = '100µm';
	} else if (vue3D.hauteurEnMetre >= 0.00001) {
		tailleFelecheEnMetre = 0.00001;
		uniteEchelle = '10µm';
	} else if (vue3D.hauteurEnMetre >= 0.000001) {
		tailleFelecheEnMetre = 0.000001;
		uniteEchelle = '1µm';
	}

	tailleFlecheEnPixel = tailleFelecheEnMetre * vue3D.hauteurCanvas / vue3D.hauteurEnMetre;
	flecheHorizontale(ct, vue3D.hauteurCanvas - 5.5, 5, 5 + tailleFlecheEnPixel, '#000000');
	ct.fillStyle = '#000000';
	ct.fillText(uniteEchelle, 5, vue3D.hauteurCanvas - 10);

	tailleFlecheEnPixel = apnChoisi.taillePixel * vue3D.hauteurCanvas / vue3D.hauteurEnMetre;

	if (tailleFlecheEnPixel > 10) {
		flecheHorizontale(ct, vue3D.hauteurCanvas - 25.5, 5, 5 + tailleFlecheEnPixel, 'rgb(120,120,120)');
		ct.fillStyle = 'rgb(120,120,120)';
		ct.fillText('1 pixel', 5, vue3D.hauteurCanvas - 30);
	}
}

function drawVue3D() {

	if (vue3D.visible) {

		var cvs = document.getElementById('cvsVue3D');
		var ct = cvs.getContext('2d');
		cvs.width = vue3D.largeurCanvas;
		cvs.height = vue3D.hauteurCanvas;

		ct.fillStyle = '#FFFFFF';
		ct.beginPath();
		ct.fillRect(0, 0, vue3D.largeurCanvas - 1, vue3D.hauteurCanvas - 1);

		majVecteurLuminosite3D();
		majOrientation3D();
		majCoordoneesPolygones3D();

		majListeCDG3D();

		if (vue3D.orientationHaut)
			drawSolVue3D();

		drawByCDG();

		if (vue3D.orientationBas)
			drawSolVue3D();

		drawEchelleVue3D();
		drawCadreVue3D();
	}
}