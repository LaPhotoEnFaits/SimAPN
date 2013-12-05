var k_SLIDER_FOCUS = 0.00015;

VueReglagesFocus = function() {
	this.nom = 'ReglagesFocus';
	this.init = initVueReglagesFocus;
	this.initIHM = initIHMVues;
};

function initVueReglagesFocus() {

	if (vueReglagesFocus.sldFocusVisible) {
		initSldFocus();
		show('ensembleSldFocus');
	} else
		hide('ensembleSldFocus');

	if (vueReglagesFocus.rdbTypeDeFocusVisible) {
		initRdbTypeDeFocus();

		show('ensembleRdbTypeDeFocus');
	} else
		hide('ensembleRdbTypeDeFocus');

	if (vueReglagesFocus.rdbModeDeFocusVisible) {
		initRdbModeDeFocus();
		show('ensembleRdbModeDeFocus');
	} else
		hide('ensembleRdbModeDeFocus');

	initBtnFocus();

	majVueFocus();
}

function majVueFocus() {
	if (apnChoisi.typeDeFocus === 'auto') {
		if (vueReglagesFocus.rdbModeDeFocusVisible)
			show('ensembleRdbModeDeFocus');
		show('btnFocus');
		hide('ensembleSldFocus');
	} else {
		hide('ensembleRdbModeDeFocus');
		hide('btnFocus');
		show('ensembleSldFocus');
		priseDeVue.planDeMAP = PLAN_DE_MAP_MANUEL;
	}
}



////CLIC POUR FOCUS
function onFocusClic(X,Y) {

	//var X;
	//var Y;

	for (var i = 0; i < 4; i++) {

		var cvs = document.getElementById('cvsPhotoPlan' + i);
		var ct = cvs.getContext('2d');

	//	if (i === 0) {
	//		var rect = cvs.getBoundingClientRect(),
	//			root = document.documentElement;
	//		X = e.clientX - rect.left - root.scrollLeft;
	//		Y = e.clientY - rect.top - root.scrollTop;
	//	}

		var pixel = ct.getImageData(X, Y, 1, 1);
		if (pixel.data[3] !== 0) {
			priseDeVue.planDeMAP = i;
			i = 51;
		}

	}

	if (i !== 4) {
		priseDeVue.distanceDeMAP = scene.plans[priseDeVue.planDeMAP].distance;
		onModifDistanceDeMAP();
	}
}



////BOUTON FOCUS
function initBtnFocus() {
	document.getElementById('btnFocus').innerHTML = '<img src="' + adresseDuCode + '/Images/Icones/btnFocus.png"/>';
}

document.getElementById('btnFocus').addEventListener('mousedown', function() {
	if (apnChoisi.focusEnCours) {
		apnChoisi.focusEnCours = 0;
		drawBouton('btnFocus','OFF');
	} else {
		apnChoisi.focusEnCours = 1;
		drawBouton('btnFocus','ON');
	}
}, false);

////RDB TYPE DE FOCUS
function initRdbTypeDeFocus() {
	if (apnChoisi.typeDeFocus === 'auto')
		document.getElementById('rdbAutoFocus').checked = true;
	else
		document.getElementById('rdbManualFocus').checked = true;
}

document.getElementById('rdbAutoFocus').addEventListener('change', function() {
	apnChoisi.typeDeFocus = 'auto';
	priseDeVue.planDeMAP = 1;
	onModifTypeDeFocus();
}, false);

document.getElementById('rdbManualFocus').addEventListener('change', function() {
	apnChoisi.typeDeFocus = 'manuel';
	apnChoisi.focusEnCours = 0;
	drawBouton('btnFocus','OFF');
	priseDeVue.planDeMAP = PLAN_DE_MAP_MANUEL;
	onModifTypeDeFocus();
}, false);


////RDB MODE DE FOCUS
function initRdbModeDeFocus() {
	if (apnChoisi.modeDeFocus === 'AFC')
		document.getElementById('rdbFocusAFC').checked = true;
	else
		document.getElementById('rdbFocusAFS').checked = true;
}

document.getElementById('rdbFocusAFC').addEventListener('change', function() {
	apnChoisi.modeDeFocus = 'AFC';
}, false);

document.getElementById('rdbFocusAFS').addEventListener('change', function() {
	apnChoisi.modeDeFocus = 'AFS';
}, false);


////SLIDER FOCUS
function initSldFocus() {
	document.getElementById('nomSldFocus').innerHTML = 'Focus';
	document.getElementById('sldFocus').min = 0;
	document.getElementById('sldFocus').max = 300;
	//document.getElementById('sldFocus').step = 1;
	majSldFocus();

	document.getElementById("sldFocus").addEventListener('change', modifSldFocus, false);
	document.getElementById("sldFocus").oninput = function() {
		modifSldFocus();
	};
}

function modifSldFocus() {

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var sliderMax = 1.0 * document.getElementById('sldFocus').max;
	var valeurDuSlider = 1.0 * document.getElementById("sldFocus").value;

	if (valeurDuSlider === sliderMax)
		priseDeVue.distanceDeMAP = d_max;
	else
		priseDeVue.distanceDeMAP = focaleEnMetre * (1 + 1 / (k_SLIDER_FOCUS * (sliderMax - valeurDuSlider)));

	if (priseDeVue.distanceDeMAP < focaleEnMetre)
		priseDeVue.distanceDeMAP = focaleEnMetre;

	onModifDistanceDeMAP();
}

function majSldFocus() {
	if (vueReglagesFocus.sldFocusVisible) {

		var sliderMax = 1.0 * document.getElementById('sldFocus').max;
		var focaleEnMetre = objectifChoisi.focale / 1000;
		var valeurDuSlider = Math.round(sliderMax - focaleEnMetre / (k_SLIDER_FOCUS * (priseDeVue.distanceDeMAP - focaleEnMetre)));

		if (valeurDuSlider < 0)
			valeurDuSlider = 0;
		if (valeurDuSlider > sliderMax)
			valeurDuSlider = sliderMax;

		document.getElementById('sldFocus').value = valeurDuSlider;
		document.getElementById('outputSldFocus').innerHTML = priseDeVue.distanceDeMAP.toFixed(2) + 'm';
	}
}

