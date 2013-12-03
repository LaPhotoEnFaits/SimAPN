VueEXIF = function() {
	this.nom = 'EXIF';

	this.init = initVueEXIF;
	this.initIHM = initIHMVues;
};

function initVueEXIF() {
	drawVueEXIF();
}

function drawVueEXIF() {
	if (vueEXIF.visible) {

		var zoneDeTexte = document.getElementById('donneesEXIF');
		var separateur = '&nbsp;&nbsp;&nbsp;';

		zoneDeTexte.innerHTML = apnChoisi.capteurFormat;
		zoneDeTexte.innerHTML += separateur + objectifChoisi.focale + 'mm';
		zoneDeTexte.innerHTML += separateur + 'f/' + objectifChoisi.ouverture;
		zoneDeTexte.innerHTML += separateur + cpt2vitesse(vitesse2cpt(1.0 * apnChoisi.vitesse).cpt).vitesseString;
		zoneDeTexte.innerHTML += separateur + 'ISO' + apnChoisi.ISO;
	}
}