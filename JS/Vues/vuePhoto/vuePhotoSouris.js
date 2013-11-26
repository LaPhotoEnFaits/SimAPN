var flagClicVuePhoto = 0;

var X0VuePhoto;
var Y0VuePhoto;

var HAUTEUR_PHOTOGRAPHE_MIN = 0.01;
var DISTANCE_DE_MAP_MIN = 0.1;


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
		deplacement = 0.1;
	else
		deplacement = -0.1;

	for (var i = 0; i != 3; i++)
		scene.plans[i].distance -= deplacement;

	//TEMP
	priseDeVue.distanceDeMAP -= deplacement;

	if (priseDeVue.distanceDeMAP < DISTANCE_DE_MAP_MIN)
		priseDeVue.distanceDeMAP = DISTANCE_DE_MAP_MIN;

	photographe.deplacementProfondeur += deplacement;

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
	flagClicVuePhoto = 1;
	X0VuePhoto = e.clientX;
	Y0VuePhoto = e.clientY;
	curseurCSS('mainFermee');
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mouseup', function() {
	flagClicVuePhoto = 0;
	curseurCSS('mainOuverte');
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mousemove', function(e) {
	if (flagClicVuePhoto)
		deplacementSourisVuePhoto(e);
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mouseout', function() {
	flagClicVuePhoto = 0;
	document.body.style.cursor = 'default';
}, false);

document.getElementById('cvsPhotoCollimateurs').addEventListener('mouseover', function() {
	curseurCSS('mainOuverte');
}, false);