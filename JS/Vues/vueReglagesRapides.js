var FOCALE_MIN_FF = 8;
var FOCALE_MAX_FF = 300;

VueReglagesRapides = function() {
	this.nom = 'ReglagesRapides';

	this.init = initVueReglagesRapides;
	this.initIHM = initIHMVues;
};

function initVueReglagesRapides() {

	if (vueReglagesRapides.SliderOuvertureVisible) {
		initSliderOuverture();
		show('ensembleSliderOuverture');
	} else
		hide('ensembleSliderOuverture');

	if (vueReglagesRapides.SliderVitesseVisible) {
		initSliderVitesse();
		show('ensembleSliderVitesse');
	} else
		hide('ensembleSliderVitesse');

	if (vueReglagesRapides.SliderISOVisible) {
		initSliderISO();
		show('ensembleSliderISO');
	} else
		hide('ensembleSliderISO');

	if (vueReglagesRapides.SliderFocaleVisible) {
		initSliderFocale();
		show('ensembleSliderFocale');
	} else
		hide('ensembleSliderFocale');
}

////SLIDER FOCALE
function initSliderFocale() {
	document.getElementById('nomSliderFocale').innerHTML = 'Focale';
	document.getElementById("sliderFocale").value = 1.0 * objectifChoisi.focale;
	setFocalesMinMaxChoisie();
}

function majOutputSliderFocale() {
	document.getElementById('outputSliderFocale').innerHTML = objectifChoisi.focale + 'mm';

	if (apnChoisi.cropFactor < 0.99 || apnChoisi.cropFactor > 1.01) {
		document.getElementById('outputSliderFocale').innerHTML += '<br/><i>'+Math.round(objectifChoisi.focale*apnChoisi.cropFactor)+'mm eq.</i>'
	}
}

function modifSliderFocale() {
	objectifChoisi.focale = 1.0 * document.getElementById("sliderFocale").value;
	onModifFocale();
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('sliderFocale').addEventListener('change', modifSliderFocale, false);
}, false);

document.getElementById('sliderFocale').oninput = function() {
	modifSliderFocale();
};


function setFocalesMinMaxChoisie() {

	var focaleMin = Math.ceil(FOCALE_MIN_FF / apnChoisi.cropFactor);
	var focaleMax = Math.floor(FOCALE_MAX_FF / apnChoisi.cropFactor);

	document.getElementById("sliderFocale").min = focaleMin;
	document.getElementById("sliderFocale").max = focaleMax;

	if (objectifChoisi.focale > focaleMax)
		objectifChoisi.focale = focaleMax;

	if (objectifChoisi.focale < focaleMin)
		objectifChoisi.focale = focaleMin;

	document.getElementById('sliderFocale').value = objectifChoisi.focale;

	majOutputSliderFocale();
}

////SLIDER OUVERTURE
function initSliderOuverture() {
	document.getElementById('nomSliderOuverture').innerHTML = 'Ouverture';
	document.getElementById("sliderOuverture").min = ouverture2cpt(1.0 * objectifChoisi.indiceOuvertureMin).cpt;
	document.getElementById("sliderOuverture").max = ouverture2cpt(1.0 * objectifChoisi.indiceOuvertureMax).cpt;
	document.getElementById("sliderOuverture").step = 1.0;
	document.getElementById("sliderOuverture").value = 1.0 * document.getElementById("sliderOuverture").min + 1.0 * document.getElementById("sliderOuverture").max - ouverture2cpt(1.0 * objectifChoisi.ouverture).cpt;
	majOutputSliderOuverture();
}

function majOutputSliderOuverture() {
	document.getElementById('outputSliderOuverture').innerHTML = 'f/' + objectifChoisi.ouverture;
}

function modifSliderOuverture() {
	objectifChoisi.ouverture = cpt2ouverture(1.0 * document.getElementById("sliderOuverture").min + 1.0 * document.getElementById("sliderOuverture").max - 1.0 * document.getElementById("sliderOuverture").value).N;
	onModifOuverture();
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("sliderOuverture").addEventListener('change', modifSliderOuverture, false);
}, false);

document.getElementById("sliderOuverture").oninput = function() {
	modifSliderOuverture();
};

////SLIDER VITESSE
function initSliderVitesse() {
	document.getElementById('nomSliderVitesse').innerHTML = 'Vitesse';
	document.getElementById('sliderVitesse').min = 1.0;
	document.getElementById('sliderVitesse').max = CPT_VITESSE_MAX;
	document.getElementById('sliderVitesse').step = 1.0;
	document.getElementById('sliderVitesse').value = vitesse2cpt(1.0 * apnChoisi.vitesse).cpt;
	majOutputSliderVitesse();
}

function majOutputSliderVitesse() {
	document.getElementById('outputSliderVitesse').innerHTML = cpt2vitesse(vitesse2cpt(1.0 * apnChoisi.vitesse).cpt).vitesseString;
}

function modifSliderVitesse() {
	apnChoisi.vitesse = cpt2vitesse(1.0 * document.getElementById('sliderVitesse').value).vitesseNombre;
	onModifVitesse();
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("sliderVitesse").addEventListener('change', modifSliderVitesse, false);
}, false);

document.getElementById("sliderVitesse").oninput = function() {
	modifSliderVitesse();
};

////SLIDER ISO
function initSliderISO() {
	document.getElementById('nomSliderISO').innerHTML = 'ISO';
	document.getElementById('sliderISO').min = ISO2cpt(1.0 * apnChoisi.ISOmin).cpt;
	document.getElementById('sliderISO').max = ISO2cpt(1.0 * apnChoisi.ISOboost).cpt;
	document.getElementById('sliderISO').step = 1.0;
	document.getElementById('sliderISO').value = ISO2cpt(1.0 * apnChoisi.ISO).cpt;
	majOutputSliderISO();
}

function majOutputSliderISO() {
	document.getElementById('outputSliderISO').innerHTML = apnChoisi.ISO;
}

function modifSliderISO() {
	apnChoisi.ISO = cpt2ISO(1.0 * document.getElementById('sliderISO').value).ISO;
	onModifISO();
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("sliderISO").addEventListener('change', modifSliderISO, false);
}, false);

document.getElementById("sliderISO").oninput = function() {
	modifSliderISO();
};