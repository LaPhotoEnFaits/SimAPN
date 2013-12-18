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
		document.getElementById('EXIFCapteur').innerHTML = apnChoisi.capteurFormat;
		document.getElementById('EXIFFocale').innerHTML = objectifChoisi.focale + 'mm';
		document.getElementById('EXIFOuverture').innerHTML = 'f/' + objectifChoisi.ouverture;
		document.getElementById('EXIFVitesse').innerHTML = cpt2vitesse(vitesse2cpt(1.0 * apnChoisi.vitesse).cpt).vitesseString;
		document.getElementById('EXIFISO').innerHTML = 'ISO' + apnChoisi.ISO;
	}
}