var FOCALE_MIN_FF = 8;
var FOCALE_MAX_FF = 300;

VueReglagesRapides = function() {
	this.nom = 'ReglagesRapides';

	this.init = initVueReglagesRapides;
	this.initIHM = initIHMVues;
};

function initVueReglagesRapides() {

	if (vueReglagesRapides.sldOuvertureVisible) {
		initSldOuverture();
		show('ensembleSldOuverture');
	} else
		hide('ensembleSldOuverture');

	if (vueReglagesRapides.sldVitesseVisible) {
		initSldVitesse();
		show('ensembleSldVitesse');
	} else
		hide('ensembleSldVitesse');

	if (vueReglagesRapides.sldISOVisible) {
		initSldISO();
		show('ensembleSldISO');
	} else
		hide('ensembleSldISO');

	if (vueReglagesRapides.sldFocaleVisible) {
		initSldFocale();
		show('ensembleSldFocale');
	} else
		hide('ensembleSldFocale');
}

////SLIDER FOCALE
function initSldFocale() {
	document.getElementById('nomSldFocale').innerHTML = 'Focale';
	document.getElementById("sldFocale").value = 1.0 * objectifChoisi.focale;
	setFocalesMinMaxChoisie();
}

function majOutputSldFocale() {
	document.getElementById('outputSldFocale').innerHTML = objectifChoisi.focale + 'mm';

	if (apnChoisi.cropFactor < 0.99 || apnChoisi.cropFactor > 1.01)
		document.getElementById('outputSldFocale').innerHTML += '<br/><i>' + Math.round(objectifChoisi.focale * apnChoisi.cropFactor) + 'mm eq.</i>'
}

function modifSldFocale() {
	objectifChoisi.focale = 1.0 * document.getElementById("sldFocale").value;
	onModifFocale();
}

document.getElementById('sldFocale').addEventListener('change', modifSldFocale, false);
document.getElementById('sldFocale').oninput = function() {
	modifSldFocale();
};


function setFocalesMinMaxChoisie() {

	var focaleMin = Math.ceil(FOCALE_MIN_FF / apnChoisi.cropFactor);
	var focaleMax = Math.floor(FOCALE_MAX_FF / apnChoisi.cropFactor);

	document.getElementById("sldFocale").min = focaleMin;
	document.getElementById("sldFocale").max = focaleMax;

	if (objectifChoisi.focale > focaleMax)
		objectifChoisi.focale = focaleMax;

	if (objectifChoisi.focale < focaleMin)
		objectifChoisi.focale = focaleMin;

	document.getElementById('sldFocale').value = objectifChoisi.focale;

	majOutputSldFocale();
}

////SLIDER OUVERTURE
function initSldOuverture() {
	document.getElementById('nomSldOuverture').innerHTML = 'Ouverture';
	document.getElementById("sldOuverture").min = ouverture2cpt(1.0 * objectifChoisi.indiceOuvertureMin).cpt;
	document.getElementById("sldOuverture").max = ouverture2cpt(1.0 * objectifChoisi.indiceOuvertureMax).cpt;
	document.getElementById("sldOuverture").step = 1.0;
	document.getElementById("sldOuverture").value = 1.0 * document.getElementById("sldOuverture").min + 1.0 * document.getElementById("sldOuverture").max - ouverture2cpt(1.0 * objectifChoisi.ouverture).cpt;
	majOutputSldOuverture();
}

function majOutputSldOuverture() {
	document.getElementById('outputSldOuverture').innerHTML = 'f/' + objectifChoisi.ouverture;
}

function modifSldOuverture() {
	objectifChoisi.ouverture = cpt2ouverture(1.0 * document.getElementById("sldOuverture").min + 1.0 * document.getElementById("sldOuverture").max - 1.0 * document.getElementById("sldOuverture").value).N;
	onModifOuverture();
}


document.getElementById("sldOuverture").addEventListener('change', modifSldOuverture, false);


document.getElementById("sldOuverture").oninput = function() {
	modifSldOuverture();
};

////SLIDER VITESSE
function initSldVitesse() {
	document.getElementById('nomSldVitesse').innerHTML = 'Vitesse';
	document.getElementById('sldVitesse').min = 1.0;
	document.getElementById('sldVitesse').max = CPT_VITESSE_MAX;
	document.getElementById('sldVitesse').step = 1.0;
	document.getElementById('sldVitesse').value = vitesse2cpt(1.0 * apnChoisi.vitesse).cpt;
	majOutputSldVitesse();
}

function majOutputSldVitesse() {
	document.getElementById('outputSldVitesse').innerHTML = cpt2vitesse(vitesse2cpt(1.0 * apnChoisi.vitesse).cpt).vitesseString;
}

function modifSldVitesse() {
	apnChoisi.vitesse = cpt2vitesse(1.0 * document.getElementById('sldVitesse').value).vitesseNombre;
	onModifVitesse();
}


document.getElementById("sldVitesse").addEventListener('change', modifSldVitesse, false);

document.getElementById("sldVitesse").oninput = function() {
	modifSldVitesse();
};

////SLIDER ISO
function initSldISO() {
	document.getElementById('nomSldISO').innerHTML = 'ISO';
	document.getElementById('sldISO').min = ISO2cpt(1.0 * apnChoisi.ISOmin).cpt;
	document.getElementById('sldISO').max = ISO2cpt(1.0 * apnChoisi.ISOboost).cpt;
	document.getElementById('sldISO').step = 1.0;
	document.getElementById('sldISO').value = ISO2cpt(1.0 * apnChoisi.ISO).cpt;
	majOutputSldISO();
}

function majOutputSldISO() {
	document.getElementById('outputSldISO').innerHTML = apnChoisi.ISO;
}

function modifSldISO() {
	apnChoisi.ISO = cpt2ISO(1.0 * document.getElementById('sldISO').value).ISO;
	onModifISO();
}


document.getElementById("sldISO").addEventListener('change', modifSldISO, false);


document.getElementById("sldISO").oninput = function() {
	modifSldISO();
};