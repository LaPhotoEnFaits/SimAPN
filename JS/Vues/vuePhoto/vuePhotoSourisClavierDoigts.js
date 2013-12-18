var flagClicVuePhoto = 0;
var flagSourisSurVuePhoto = 0;
var flagPinchToZoom = 0;

var X0VuePhoto;
var Y0VuePhoto;
var X0ScdVuePhoto;
var Y0ScdVuePhoto;

var HAUTEUR_PHOTOGRAPHE_MIN = 0.01;
var HAUTEUR_PHOTOGRAPHE_MAX = 2.00;


function rouletteSourisVuePhoto(e) {
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	if (!e) {
		e = window.event;
	}
	if (e.preventDefault) {
		e.preventDefault();
	}

	var deplacement;
	var nouvelleDistanceDeMap;

	if (delta < 0)
		nouvelleDistanceDeMap = 1.05 * priseDeVue.distanceDeMAP;
	else
		nouvelleDistanceDeMap = priseDeVue.distanceDeMAP / 1.05;

	if (nouvelleDistanceDeMap < DISTANCE_DE_MAP_MIN)
		nouvelleDistanceDeMap = DISTANCE_DE_MAP_MIN;

	deplacement = nouvelleDistanceDeMap - priseDeVue.distanceDeMAP;

	photographe.deplacementProfondeurCourant = deplacement;

	onModifProfondeurPhotographe();
}

function pinchToZoomVuePhoto(e) {

	var X0 = X0VuePhoto - X0ScdVuePhoto;
	var Y0 = Y0VuePhoto - Y0ScdVuePhoto;
	var l0 = Math.sqrt(X0 * X0 + Y0 * Y0);

	var X1 = e.touches[0].clientX - e.touches[1].clientX;
	var Y1 = e.touches[0].clientY - e.touches[1].clientY;
	var l1 = Math.sqrt(X1 * X1 + Y1 * Y1);

	X0VuePhoto = e.touches[0].clientX;
	X0ScdVuePhoto = e.touches[1].clientX;
	Y0VuePhoto = e.touches[0].clientY;
	Y0ScdVuePhoto = e.touches[1].clientY;

	var k = l0 / l1;

	var deplacement;
	var nouvelleDistanceDeMap = k * priseDeVue.distanceDeMAP;

	if (nouvelleDistanceDeMap < DISTANCE_DE_MAP_MIN)
		nouvelleDistanceDeMap = DISTANCE_DE_MAP_MIN;

	deplacement = nouvelleDistanceDeMap - priseDeVue.distanceDeMAP;

	photographe.deplacementProfondeurCourant = deplacement;

	onModifProfondeurPhotographe();
}

function deplacementsVuePhoto(X, Y) {

	var deltaX = X - X0VuePhoto;
	var deltaY = Y - Y0VuePhoto;

	var deplacementMax = apnChoisi.capteurLargeur * scene.plans[1].distance / objectifChoisi.focale;

	photographe.deplacementHorizontal += deplacementMax * deltaX / vuePhoto.largeur;
	photographe.deplacementVertical += deplacementMax * deltaY / vuePhoto.hauteur;

	if (photographe.deplacementVertical < HAUTEUR_PHOTOGRAPHE_MIN)
		photographe.deplacementVertical = HAUTEUR_PHOTOGRAPHE_MIN;

	if (photographe.deplacementVertical > HAUTEUR_PHOTOGRAPHE_MAX)
		photographe.deplacementVertical = HAUTEUR_PHOTOGRAPHE_MAX;

	X0VuePhoto = X;
	Y0VuePhoto = Y;

	onModifHorizontalVerticalPhotographe();
}

////Souris
document.getElementById('cvsPhotoCollimateurs').addEventListener('DOMMouseScroll', function(e) {
	rouletteSourisVuePhoto(e);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mousewheel', function(e) {
	rouletteSourisVuePhoto(e);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mousedown', function(e) {

	if (apnChoisi.focusEnCours) {
		//onFocusClic(e);
		var cvs = document.getElementById('cvsPhotoPlan0');
		var ct = cvs.getContext('2d');
		var rect = cvs.getBoundingClientRect(),
			root = document.documentElement;
		X = e.clientX - rect.left - root.scrollLeft;
		Y = e.clientY - rect.top - root.scrollTop;
		onFocusClic(X, Y);

	} else {
		flagClicVuePhoto = 1;
		X0VuePhoto = e.clientX;
		Y0VuePhoto = e.clientY;
		curseurCSS('mainFermee');
	}
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mouseup', function() {
	flagClicVuePhoto = 0;
	if (!apnChoisi.focusEnCours)
		curseurCSS('mainOuverte');
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mousemove', function(e) {
	if (flagClicVuePhoto)
		deplacementsVuePhoto(e.clientX, e.clientY);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mouseout', function() {
	flagSourisSurVuePhoto = 0;
	flagClicVuePhoto = 0;
	document.body.style.cursor = 'default';
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mouseover', function() {

	flagSourisSurVuePhoto = 1;

	if (apnChoisi.focusEnCours)
		document.body.style.cursor = 'crosshair';
	else
		curseurCSS('mainOuverte');
}, false);

////CLAVIER
window.addEventListener('keydown', function(event) {

	var touche;
	if (event.keyIdentifier)
		touche = event.keyIdentifier;
	else if (event.key)
		touche = event.key;

	if (touche === "Shift" && flagClicVuePhoto === 0 && flagSourisSurVuePhoto && flagShiftRelache && apnChoisi.typeDeFocus !== 'manuel') {

		flagShiftRelache = 0;

		if (apnChoisi.focusEnCours) {
			apnChoisi.focusEnCours = 0;
			curseurCSS('mainOuverte');
			drawBouton('btnFocus', 'OFF');
		} else {
			apnChoisi.focusEnCours = 1;
			document.body.style.cursor = 'crosshair';
			drawBouton('btnFocus', 'ON');
		}

	}
}, false);

window.addEventListener('keyup', function(event) {

	var touche;
	if (event.keyIdentifier)
		touche = event.keyIdentifier;
	else if (event.key)
		touche = event.key;

	if (touche === "Shift")
		flagShiftRelache = 1;

	if (touche === "Shift" && flagClicVuePhoto === 0 && flagSourisSurVuePhoto && apnChoisi.typeDeFocus !== 'manuel') {

		if (apnChoisi.focusEnCours) {
			apnChoisi.focusEnCours = 0;
			curseurCSS('mainOuverte');
			drawBouton('btnFocus', 'OFF');
		} else {
			apnChoisi.focusEnCours = 1;
			document.body.style.cursor = 'crosshair';
			drawBouton('btnFocus', 'ON');
		}
	}
}, false);

////TOUCH
document.getElementById('cvsPhotoCollimateurs').addEventListener('touchstart', function(e) {

	e.preventDefault();

	if (navigateur.mobile)
		vuePhoto.affichageRapide = 1;

	if (e.touches.length === 2) {
		X0ScdVuePhoto = 1.0 * e.touches[1].clientX;
		Y0ScdVuePhoto = 1.0 * e.touches[1].clientY;
	} else if (e.touches.length === 1) {
		flagPinchToZoom = 0;
		if (apnChoisi.focusEnCours) {
			var cvs = document.getElementById('cvsPhotoPlan0');
			var ct = cvs.getContext('2d');

			var rect = cvs.getBoundingClientRect(),
				root = document.documentElement;
			X = e.touches[0].clientX - rect.left - root.scrollLeft;
			Y = e.touches[0].clientY - rect.top - root.scrollTop;
			onFocusClic(X, Y);
		} else {
			flagClicVuePhoto = 1;
			X0VuePhoto = 1.0 * e.touches[0].clientX;
			Y0VuePhoto = 1.0 * e.touches[0].clientY;
		}
	}
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('touchmove', function(e) {
	e.preventDefault();

	if (e.touches.length === 2) {
		flagPinchToZoom = 1;
		pinchToZoomVuePhoto(e);
	} else if (e.touches.length === 1 && flagClicVuePhoto && !flagPinchToZoom)
		deplacementsVuePhoto(e.touches[0].clientX, e.touches[0].clientY);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('touchend', function(e) {
	e.preventDefault();
	flagPinchToZoom=0;

	if (e.touches.length < 2) {
		vuePhoto.affichageRapide = 0;
		flagClicVuePhoto = 0;
		drawVuePhoto();
	}
}, false);