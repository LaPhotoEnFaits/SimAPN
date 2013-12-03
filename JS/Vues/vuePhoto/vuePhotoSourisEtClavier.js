var flagClicVuePhoto = 0;
var flagSourisSurVuePhoto = 0;
var flagShiftRelache = 1;

var X0VuePhoto;
var Y0VuePhoto;

var HAUTEUR_PHOTOGRAPHE_MIN = 0.01;


function rouletteSourisVuePhoto(e) {
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	if (!e) {
		e = window.event;
	}
	if (e.preventDefault) {
		e.preventDefault();
	}

	var deplacement;

	if (delta > 0)
		deplacement = -0.1;
	else
		deplacement = +0.1;

	photographe.deplacementProfondeurCourant = deplacement;

	onModifProfondeurPhotographe();
}

function deplacementSourisVuePhoto(e) {

	var X = e.clientX;
	var Y = e.clientY;

	var deltaX = X - X0VuePhoto;
	var deltaY = Y - Y0VuePhoto;

	var deplacementMax = apnChoisi.capteurLargeur * scene.plans[1].distance / objectifChoisi.focale;

	photographe.deplacementHorizontal += deplacementMax * deltaX / vuePhoto.largeur;
	photographe.deplacementVertical += deplacementMax * deltaY / vuePhoto.hauteur;

	if (photographe.deplacementVertical < HAUTEUR_PHOTOGRAPHE_MIN)
		photographe.deplacementVertical = HAUTEUR_PHOTOGRAPHE_MIN;

	X0VuePhoto = X;
	Y0VuePhoto = Y;

	onModifHorizontalVerticalPhotographe();
}

document.getElementById('cvsPhotoCollimateurs').addEventListener('DOMMouseScroll', function(e) {
	rouletteSourisVuePhoto(e);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mousewheel', function(e) {
	rouletteSourisVuePhoto(e);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mousedown', function(e) {

	if (apnChoisi.focusEnCours) {
		onFocusClic(e);
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
		deplacementSourisVuePhoto(e);
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