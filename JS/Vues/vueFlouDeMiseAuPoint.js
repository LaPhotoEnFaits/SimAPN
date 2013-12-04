var LARGEUR_CVS_FDMAP = 300;
var HAUTEUR_CVS_FDMAP = Math.round(LARGEUR_CVS_FDMAP * 2 / 3);
var MARGE_HAUT_CVS_FDMAP = 10;
var MARGE_BAS_CVS_FDMAP = 35;
var MARGE_GAUCHE_CVS_FDMAP = 30;
var MARGE_DROITE_CVS_FDMAP = 40;

var flagClicVueFlouDeMiseAuPoint = 0;
var X0VueFlouDeMiseAuPoint;
var Y0VueFlouDeMiseAuPoint;
var X0ScdVueFlouDeMiseAuPoint;
var Y0ScdVueFlouDeMiseAuPoint;


VueFlouDeMiseAuPoint = function() {
	this.nom = 'FlouDeMiseAuPoint';

	this.init = initVueFlouDeMiseAuPoint;
	this.initIHM = initIHMVues;
	this.draw = drawVueFlouDeMiseAuPoint;
};

function initVueFlouDeMiseAuPoint() {
	vueFlouDeMiseAuPoint.hauteurEnMetre = 10 * priseDeVue.cdc;
}

function drawVueFlouDeMiseAuPoint() {

	if (vueFlouDeMiseAuPoint.visible) {

		var cvs = document.getElementById('cvsFlouDeMiseAuPoint');
		var ct = cvs.getContext('2d');

		cvs.width = LARGEUR_CVS_FDMAP;
		cvs.height = HAUTEUR_CVS_FDMAP;

		var distanceMax = Math.max(scene.plans[0].distance, scene.plans[1].distance, scene.plans[2].distance);
		var X0 = MARGE_GAUCHE_CVS_FDMAP;
		var Y0 = HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP;
		var distance2px = (LARGEUR_CVS_FDMAP - MARGE_GAUCHE_CVS_FDMAP - MARGE_DROITE_CVS_FDMAP) / (1.25 * distanceMax);
		var flou2px = (HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP - MARGE_HAUT_CVS_FDMAP) / vueFlouDeMiseAuPoint.hauteurEnMetre;
		var largeurAxeX = Math.round(1.25 * distanceMax * distance2px);

		//FOND, AXES ET LEGENDES
		ct.beginPath();
		ct.fillStyle = 'rgba(255,255,255,0.9)';
		ct.fillRect(0, 0, LARGEUR_CVS_FDMAP - 1, HAUTEUR_CVS_FDMAP - 1);

		ct.fillStyle = COLOR_POLICE_AXE;
		ct.font = POLICE_AXES;
		ct.fillText(getTraduction('flou'), 2, MARGE_HAUT_CVS_FDMAP + 10);
		ct.fillText('distance', X0 + largeurAxeX - 15, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP + 10);

		demiFlecheHorizontale(ct, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP - 1, X0, X0 + largeurAxeX, COLOR_AXE);
		demiFlecheVerticale(ct, X0, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP - 1, MARGE_HAUT_CVS_FDMAP, COLOR_AXE);

		//VALEURS DES DISTANCES, TRAITS VERTICAUX ET ROND DE SELECTION
		var flou;
		for (var i = 0; i !== 3; i++) {

			var X = X0 + Math.round(scene.plans[i].distance * distance2px);

			ct.fillStyle = scene.plans[i].couleur;
			ct.fillText(scene.plans[i].distance.toFixed(2) + 'm', X - 10, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP + 10 * (i + 1));

			flou = calcFlou(scene.plans[i].distance).flou;
			flou = flou * flou2px;
			ct.beginPath();
			ct.fillRect(X, Y0 - flou, 1, flou);

			if (scene.planSelectionne === i) {
				ct.beginPath();
				ct.arc(X, Y0, 3, 0, 2 * Math.PI);
				ct.fill();
			}
		}

		//COURBE DE FLOU DE MAP
		ct.strokeStyle = 'rgb(220,57,18)';
		ct.lineWidth = 1;
		ct.beginPath();

		for (i = 1; i !== largeurAxeX; i++) {
			flou = calcFlou(i / distance2px).flou;
			flou = flou * flou2px;

			if (i === 1)
				ct.moveTo(X0 + i, Y0 - flou);
			else
				ct.lineTo(X0 + i, Y0 - flou);
		}
		ct.stroke();

		//SURFACE DE PDC
		ct.fillStyle = 'rgba(51,102,204,0.15)';
		var Xdebut = X0 + distance2px * priseDeVue.debutDeLaPDC;
		var Xfin = X0 + distance2px * priseDeVue.finDeLaPDC;

		if (Xfin > LARGEUR_CVS_FDMAP - 1)
			Xfin = LARGEUR_CVS_FDMAP - 1;

		ct.beginPath();
		ct.fillRect(Xdebut, MARGE_HAUT_CVS_FDMAP, Xfin - Xdebut, HAUTEUR_CVS_FDMAP - MARGE_HAUT_CVS_FDMAP - MARGE_BAS_CVS_FDMAP);


		//REPERE CERCLE DE CONFUSION
		var Ycdc = Y0 - flou2px * priseDeVue.cdc;

		if (Ycdc > 0) {
			ct.fillStyle = 'rgb(51,102,204)';
			ct.fillText(getTraduction('cdc_abv'), 7, Ycdc + 4);
			ct.fillStyle = 'rgba(51,102,204,0.35)';
			ct.fillRect(X0, Ycdc, largeurAxeX, 1);
		}


		//ECHELLE: 0.1,1,10,1000 ou 1000px
		var tailleEchelle;

		if (vueFlouDeMiseAuPoint.hauteurEnMetre > 1000 * apnChoisi.taillePixel)
			tailleEchelle = 1000;
		else if (vueFlouDeMiseAuPoint.hauteurEnMetre > 100 * apnChoisi.taillePixel)
			tailleEchelle = 100;
		else if (vueFlouDeMiseAuPoint.hauteurEnMetre > 10 * apnChoisi.taillePixel)
			tailleEchelle = 10;
		else if (vueFlouDeMiseAuPoint.hauteurEnMetre > 1 * apnChoisi.taillePixel)
			tailleEchelle = 1;
		else
			tailleEchelle = 0.1;

		ct.font = POLICE_ECHELLE;
		ct.fillStyle = COLOR_POLICE_ECHELLE;
		flecheVerticale(ct, X0 + largeurAxeX + 5, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP - tailleEchelle * apnChoisi.taillePixel * flou2px, COLOR_ECHELLE);
		ct.fillText(tailleEchelle + 'px', X0 + largeurAxeX + 6, HAUTEUR_CVS_FDMAP - MARGE_BAS_CVS_FDMAP - 0.5 * tailleEchelle * apnChoisi.taillePixel * flou2px + 3);
	}
}

function deplacementSourisVueFlouDeMiseAuPoint(X1VueFlouDeMiseAuPoint) {

	var distanceMax = Math.max(scene.plans[0].distance, scene.plans[1].distance, scene.plans[2].distance);
	var distance2px = (LARGEUR_CVS_FDMAP - MARGE_GAUCHE_CVS_FDMAP - MARGE_DROITE_CVS_FDMAP) / (1.25 * distanceMax);
	var Xplan = new Array(3);

	for (var i = 0; i !== 3; i++)
		Xplan[i] = distance2px * scene.plans[i].distance;

	var planSelectionneTemporaire = "?";

	if (flagClicVueFlouDeMiseAuPoint === 0) {

		if (X1VueFlouDeMiseAuPoint < (Xplan[0] + Xplan[1]) / 2)
			planSelectionneTemporaire = 0;
		else if (X1VueFlouDeMiseAuPoint > (Xplan[1] + Xplan[2]) / 2)
			planSelectionneTemporaire = 2;
		else
			planSelectionneTemporaire = 1;

	} else {
		if (scene.planSelectionne === 0) {
			if (scene.plans[0].distance <= scene.plans[1].distance)
				planSelectionneTemporaire = 0;
		}
		if (scene.planSelectionne === 1) {
			if (scene.plans[0].distance <= scene.plans[1].distance <= scene.plans[2].distance)
				planSelectionneTemporaire = 1;
		}
		if (scene.planSelectionne === 2) {
			if (scene.plans[1].distance <= scene.plans[2].distance)
				planSelectionneTemporaire = 2;
		}
	}

	if (flagClicVueFlouDeMiseAuPoint) {
		scene.plans[planSelectionneTemporaire].distance += (X1VueFlouDeMiseAuPoint - X0VueFlouDeMiseAuPoint) / distance2px;
		X0VueFlouDeMiseAuPoint = X1VueFlouDeMiseAuPoint;
		scene.planSelectionne = planSelectionneTemporaire;
		onModifDistancePlan(scene.planSelectionne);
	} else {
		scene.planSelectionne = planSelectionneTemporaire;
		drawVueFlouDeMiseAuPoint();
	}
}


document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('mousemove', function(e) {

	var cvs = document.getElementById('cvsFlouDeMiseAuPoint');
	var X1VueFlouDeMiseAuPoint = e.clientX - cvs.getBoundingClientRect().left - document.documentElement.scrollLeft - MARGE_GAUCHE_CVS_FDMAP;

	deplacementSourisVueFlouDeMiseAuPoint(X1VueFlouDeMiseAuPoint);
}, false);

document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('mousedown', function(e) {
	flagClicVueFlouDeMiseAuPoint = 1;
	var cvs = document.getElementById('cvsFlouDeMiseAuPoint');
	X0VueFlouDeMiseAuPoint = e.clientX - cvs.getBoundingClientRect().left - document.documentElement.scrollLeft - MARGE_GAUCHE_CVS_FDMAP;
}, false);

document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('mouseup', function() {
	flagClicVueFlouDeMiseAuPoint = 0;
	drawVueFlouDeMiseAuPoint();
}, false);

document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('mouseover', function() {
	document.body.style.cursor = 'e-resize';
}, false);

document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('mouseout', function() {
	scene.planSelectionne = '?';
	flagClicVueFlouDeMiseAuPoint = 0;
	document.body.style.cursor = 'default';
	drawVueFlouDeMiseAuPoint();
}, false);


////DOIGTS
document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('touchstart', function(e) {

		e.preventDefault();

		if (e.touches[1]) {
			X0ScdVueFlouDeMiseAuPoint = 1.0 * e.touches[1].clientX - MARGE_GAUCHE_CVS_FDMAP;
			Y0ScdVueFlouDeMiseAuPoint = 1.0 * e.touches[1].clientY;
		} else {
			flagClicVueFlouDeMiseAuPoint = 1;
			X0VueFlouDeMiseAuPoint = 1.0 * e.touches[0].clientX - MARGE_GAUCHE_CVS_FDMAP;
			Y0VueFlouDeMiseAuPoint = 1.0 * e.touches[0].clientY;
		}
	}, false);

document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('touchmove', function(e) {
	e.preventDefault();

	if (e.touches[1]){
		//pinchToZoomVueFlouDeMiseAuPoint(e);
	}
	else {
		var X1VueFlouDeMiseAuPoint = e.touches[0].clientX - MARGE_GAUCHE_CVS_FDMAP;
		deplacementSourisVueFlouDeMiseAuPoint(X1VueFlouDeMiseAuPoint);
	}
}, false);


function rouletteSourisVueFlouDeMiseAuPoint(e) {
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	if (!e)
		e = window.event;

	if (e.preventDefault)
		e.preventDefault();

	if (delta > 0)
		vueFlouDeMiseAuPoint.hauteurEnMetre = vueFlouDeMiseAuPoint.hauteurEnMetre / 1.1;
	else
		vueFlouDeMiseAuPoint.hauteurEnMetre = 1.1 * vueFlouDeMiseAuPoint.hauteurEnMetre;

	drawVueFlouDeMiseAuPoint();
}

document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('DOMMouseScroll', function(e) {
	rouletteSourisVueFlouDeMiseAuPoint(e);
}, false);
document.getElementById('cvsFlouDeMiseAuPoint').addEventListener('mousewheel', function(e) {
	rouletteSourisVueFlouDeMiseAuPoint(e);
}, false);