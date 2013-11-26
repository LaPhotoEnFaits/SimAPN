VueReglagesAPN = function() {
	this.nom = 'ReglagesAPN';
	this.init = initVueReglagesAPN;
	this.initIHM = initIHMVues;
};

function initVueReglagesAPN() {
	if (vueReglagesAPN.lstTypeDeCapteurVisible) {
		initLstTypeDeCapteur();
		show('ensembleLstTypeDeCapteur');
	} else
		hide('ensembleLstTypeDeCapteur');

	if (vueReglagesAPN.inpDefinitionCapteur) {
		initInpDefinitionCapteur();
		show('ensembleInpDefinitionCapteur');
	} else
		hide('ensembleInpDefinitionCapteur');
}



////INPUT DEFINITION DU CAPTEUR
function initInpDefinitionCapteur() {
	document.getElementById('nomInpDefinitionCapteur').innerHTML = getTraduction("definition");
	document.getElementById('inpDefinitionCapteur').value = 1.0*apnChoisi.capteurDefinition;
	document.getElementById('outputInpDefinitionCapteur').innerHTML = 'Mpx';	
}
document.getElementById('inpDefinitionCapteur').addEventListener('change', function() {
	apnChoisi.capteurDefinition=1.0*document.getElementById('inpDefinitionCapteur').value;
	onModifDefinitionCapteur();
}, false);


////LISTE TYPE DE CAPTEUR
function initLstTypeDeCapteur() {
	document.getElementById('nomLstTypeDeCapteur').innerHTML = getTraduction("Capteur");
	initSelectedLst('lstTypeDeCapteur', apnChoisi.capteurFormat, 1);
}

document.getElementById('lstTypeDeCapteur').addEventListener('change', function() {
	apnChoisi.capteurFormat = document.getElementById('lstTypeDeCapteur').options[document.getElementById('lstTypeDeCapteur').selectedIndex].value;
	onModifCapteur();
}, false);

////OUVRIR/FERMER
document.getElementById('btnVueReglagesAPN').addEventListener('click', function() {
	vueReglagesAPN.visible = 1;
	show('vueReglagesAPN');
}, false);

document.getElementById('btnCloseVueReglagesAPN').addEventListener('click', function() {
	vueReglagesAPN.visible = 0;
	hide('vueReglagesAPN');
}, false);