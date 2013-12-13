var LARGEUR_VUE_3D = 200;
var COULEUR_SOL_3D = 'rgba(220,220,220,1)';
var COULEUR_GRILLE_3D = 'rgba(240,240,240,1)';
var DIMENSION_MAX_3D = 50;

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

	vue3D.typeDeDeplacement = 'rotation';
}

function calcKHauteurNormalisee(){
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

	//SOL
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

	//GRILLE
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

function drawVue3D() {

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

	drawCadreVue3D();
}