VueReglagesScene = function(activee, visible, fermable) {

	this.nom = 'ReglagesScene';
	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesScene;
	this.initIHM = initIHMVues;
};

function initVueReglagesScene() {

	if (vueReglagesScene.lstLuminositeVisible) {
		initLstLuminosite();
		show('ensembleLstLuminosite');
	} else
		hide('ensembleLstLuminosite');

	if (vueReglagesScene.sldLuminositeVisible) {
		initSldLuminositeScene();
		show('ensembleSldLuminositeScene');
	} else
		hide('ensembleSldLuminositeScene');

	if (vueReglagesScene.inpDistancesPlansVisible) {
		initInpDistancesPlans();
		show('ensembleInpDistancesPlans');
	} else
		hide('ensembleInpDistancesPlans');

}

////SAISIE DES DISTANCES DES PLANS
function initInpDistancesPlans() {
	for (var i = 0; i != 3; i++) {
		document.getElementById('nomInpDistancePlan' + i).innerHTML = getTraduction("Plan#") + (i + 1);
		setDistancePlan(i);
		document.getElementById('outputDistancePlan' + i).innerHTML = 'm';
	}	
}



function setDistancePlan(numero) {	
	document.getElementById('inpDistancePlan' + numero).value = scene.plans[numero].distance.toFixed(2);
}

function setDistancesPlans() {
	for (var i = 0; i != 3; i++)
		setDistancePlan(i);
}

document.getElementById('inpDistancePlan0').addEventListener('change', function() {
	if (isNumber(document.getElementById('inpDistancePlan0').value)) {
		scene.plans[0].distance = 1.0 * document.getElementById('inpDistancePlan0').value;
		onModifDistancePlan(0);
	} else
		setDistancePlan(0);


}, false);
document.getElementById('inpDistancePlan1').addEventListener('change', function() {
	if (isNumber(document.getElementById('inpDistancePlan1').value)) {
		scene.plans[1].distance = 1.0 * document.getElementById('inpDistancePlan1').value;
		onModifDistancePlan(1);
	} else
		setDistancePlan(1);

}, false);
document.getElementById('inpDistancePlan2').addEventListener('change', function() {
	if (isNumber(document.getElementById('inpDistancePlan2').value)) {
		scene.plans[2].distance = 1.0 * document.getElementById('inpDistancePlan2').value;
		onModifDistancePlan(2);
	} else
		setDistancePlan(2);

}, false);



////LISTE LUMINOSITE
function initLstLuminosite() {
	document.getElementById('nomLstLuminositeScene').innerHTML = getTraduction("CondLum");
	document.getElementById('lstLuminositeScene').options[0].text = getTraduction("PleineLune");
	document.getElementById('lstLuminositeScene').options[1].text = getTraduction("VilleNuit");
	document.getElementById('lstLuminositeScene').options[2].text = getTraduction("Nuageux");
	document.getElementById('lstLuminositeScene').options[3].text = getTraduction("CoucherSoleil");
	document.getElementById('lstLuminositeScene').options[4].text = getTraduction("CielVoile");
	document.getElementById('lstLuminositeScene').options[5].text = getTraduction("GrandSoleil");
	document.getElementById('lstLuminositeScene').options[6].text = getTraduction("MerNeige");

	initSelectedLst('lstLuminositeScene', scene.luminosite);

	majOutputLstLuminosite();
}

function majOutputLstLuminosite() {
	if (scene.luminosite > 0)
		document.getElementById('outputLstLuminosite').innerHTML = '+';
	else if (scene.luminosite < 0)
		document.getElementById('outputLstLuminosite').innerHTML = '';

	document.getElementById('outputLstLuminosite').innerHTML += scene.luminosite + 'EV';
}

document.getElementById('lstLuminositeScene').addEventListener('change', function() {
	scene.luminosite = 1.0 * document.getElementById('lstLuminositeScene').options[document.getElementById('lstLuminositeScene').selectedIndex].value;
	onModifLuminosite();
}, false);


////SLIDER LUMINOSITE
function initSldLuminositeScene() {
	document.getElementById('nomSldLuminositeScene').innerHTML = getTraduction("CondLum");
	document.getElementById('sldLuminosite').min = vueReglagesScene.sldLuminositeMin;
	document.getElementById('sldLuminosite').max = vueReglagesScene.sldLuminositeMax;
	document.getElementById('sldLuminosite').step = 1 / 3;
	document.getElementById('sldLuminosite').value = scene.luminosite;
	majOutputSldLuminosite();
}

function majOutputSldLuminosite() {

	var luminositeString = '';
	if (scene.luminosite < 0)
		luminositeString = '-';
	else if (scene.luminosite > 0)
		luminositeString = '+';

	luminositeString += scene.luminosite.toFixed(1);
	luminositeString += 'EV';
	document.getElementById('outputSldLuminosite').innerHTML = luminositeString;
}


function modifSldLuminosite() {
	scene.luminosite = 1.0 * document.getElementById('sldLuminosite').value;
	onModifLuminosite();
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("sldLuminosite").addEventListener('change', modifSldLuminosite, false);
}, false);

document.getElementById("sldLuminosite").oninput = function() {
	modifSldLuminosite();
};


////OUVRIR/FERMER
document.getElementById('btnVueReglagesScene').addEventListener('click', function() {
	vueReglagesScene.visible = 1;
	show('vueReglagesScene');
}, false);

document.getElementById('btnCloseVueReglagesScene').addEventListener('click', function() {
	vueReglagesScene.visible = 0;
	hide('vueReglagesScene');
}, false);