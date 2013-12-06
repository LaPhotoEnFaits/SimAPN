var FOCALE_MIN_FF = 8;
var FOCALE_MAX_FF = 300;

VueReglagesRapides = function() {
	this.nom = 'ReglagesRapides';

	this.init = initVueReglagesRapides;
	this.initIHM = initIHMVues;
};

function initVueReglagesRapides() {

	if (vueReglagesRapides.chkCadrageConstantVisible) {
		initChkCadrageConstant();
		show('ensembleChkCadrageConstant');
	} else
		hide('ensembleChkCadrageConstant');

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

	if (vueReglagesRapides.ensembleRdbModeDePrioriteVisible) {
		initEnsembleRdbModeDePriorite();
		show('ensembleRdbModeDePriorite');
	} else
		hide('ensembleRdbModeDePriorite');

	if (apnChoisi.modeDePriorite === 'PrioriteVitesse')
		hide('ensembleSldOuverture');

	if (apnChoisi.modeDePriorite === 'PrioriteOuverture')
		hide('ensembleSldVitesse');
}


////MODES DE PRIORITE
function initEnsembleRdbModeDePriorite() {
	document.getElementById('nomPrioriteManuel').innerHTML = getTraduction('nomPrioriteManuel');
	document.getElementById('nomPrioriteOuverture').innerHTML = getTraduction('nomPrioriteOuverture');
	document.getElementById('nomPrioriteVitesse').innerHTML = getTraduction('nomPrioriteVitesse');

	document.getElementById('rdb' + apnChoisi.modeDePriorite).checked = true;
}

document.getElementById('rdbPrioriteManuel').addEventListener('change', function() {
	apnChoisi.modeDePriorite = 'PrioriteManuel';
	if (vueReglagesRapides.sldOuvertureVisible)
		show('ensembleSldOuverture');
	if (vueReglagesRapides.sldVitesseVisible)
		show('ensembleSldVitesse');
}, false);

document.getElementById('rdbPrioriteOuverture').addEventListener('change', function() {
	apnChoisi.modeDePriorite = 'PrioriteOuverture';
	if (vueReglagesRapides.sldOuvertureVisible)
		show('ensembleSldOuverture');
	hide('ensembleSldVitesse');
}, false);

document.getElementById('rdbPrioriteVitesse').addEventListener('change', function() {
	apnChoisi.modeDePriorite = 'PrioriteVitesse';
	hide('ensembleSldOuverture');
	if (vueReglagesRapides.sldVitesseVisible)
		show('ensembleSldVitesse');
}, false);


////CADRAGE CONSTANT
function initChkCadrageConstant() {
	document.getElementById('nomChkCadrageConstant').innerHTML = getTraduction('nom_cadrage_constant');

	document.getElementById('chkCadrageConstant').addEventListener('change', function() {
		if (document.getElementById('chkCadrageConstant').checked)
			priseDeVue.cadrageConstant = 1;
		else
			priseDeVue.cadrageConstant = 0;
	}, false);
}



////SLIDER FOCALE
function initSldFocale() {
	document.getElementById('nomSldFocale').innerHTML = 'Focale';
	document.getElementById('sldFocale').value = 1.0 * objectifChoisi.focale;
	setFocalesMinMaxChoisie();

	document.getElementById('sldFocale').addEventListener('change', modifSldFocale, false);
	document.getElementById('sldFocale').oninput = function() {
		modifSldFocale();
	};


	document.getElementById('sldFocale').addEventListener('touchstart', function(e) {
		if (navigateur.mobile)
			vuePhoto.affichageRapide = 1;
	}, false);

	document.getElementById('sldFocale').addEventListener('touchend', function(e) {
		if (navigateur.mobile) {
			vuePhoto.affichageRapide = 0;
			drawVuePhoto();
		}
	}, false);

}

function majOutputSldFocale() {
	document.getElementById('outputSldFocale').innerHTML = objectifChoisi.focale + 'mm';

	if (apnChoisi.cropFactor < 0.99 || apnChoisi.cropFactor > 1.01)
		document.getElementById('outputSldFocale').innerHTML += '<br/><i>' + Math.round(objectifChoisi.focale * apnChoisi.cropFactor) + 'mm eq.</i>';
}

function modifSldFocale() {
	objectifChoisi.focale = 1.0 * document.getElementById("sldFocale").value;
	onModifFocale();
}

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

	document.getElementById("sldOuverture").addEventListener('change', modifSldOuverture, false);
	document.getElementById("sldOuverture").oninput = function() {
		modifSldOuverture();
	};
}

function majOutputSldOuverture() {
	document.getElementById('outputSldOuverture').innerHTML = 'f/' + objectifChoisi.ouverture;
}

function modifSldOuverture() {
	objectifChoisi.ouverture = cpt2ouverture(1.0 * document.getElementById("sldOuverture").min + 1.0 * document.getElementById("sldOuverture").max - 1.0 * document.getElementById("sldOuverture").value).N;
	onModifOuverture();
}



////SLIDER VITESSE
function initSldVitesse() {
	document.getElementById('nomSldVitesse').innerHTML = 'Vitesse';
	document.getElementById('sldVitesse').min = 1.0;
	document.getElementById('sldVitesse').max = CPT_VITESSE_MAX;
	document.getElementById('sldVitesse').step = 1.0;
	document.getElementById('sldVitesse').value = vitesse2cpt(1.0 * apnChoisi.vitesse).cpt;
	majOutputSldVitesse();

	document.getElementById("sldVitesse").addEventListener('change', modifSldVitesse, false);
	document.getElementById("sldVitesse").oninput = function() {
		modifSldVitesse();
	};
}

function majOutputSldVitesse() {
	document.getElementById('outputSldVitesse').innerHTML = cpt2vitesse(vitesse2cpt(1.0 * apnChoisi.vitesse).cpt).vitesseString;
}

function modifSldVitesse() {
	apnChoisi.vitesse = cpt2vitesse(1.0 * document.getElementById('sldVitesse').value).vitesseNombre;
	onModifVitesse();
}



////SLIDER ISO
function initSldISO() {
	document.getElementById('nomSldISO').innerHTML = 'ISO';
	document.getElementById('sldISO').min = ISO2cpt(1.0 * apnChoisi.ISOmin).cpt;
	document.getElementById('sldISO').max = ISO2cpt(1.0 * apnChoisi.ISOboost).cpt;
	document.getElementById('sldISO').step = 1.0;
	document.getElementById('sldISO').value = ISO2cpt(1.0 * apnChoisi.ISO).cpt;
	majOutputSldISO();

	document.getElementById("sldISO").addEventListener('change', modifSldISO, false);
	document.getElementById("sldISO").oninput = function() {
		modifSldISO();
	};
}

function majOutputSldISO() {
	document.getElementById('outputSldISO').innerHTML = apnChoisi.ISO;
}

function modifSldISO() {
	apnChoisi.ISO = cpt2ISO(1.0 * document.getElementById('sldISO').value).ISO;
	onModifISO();
}