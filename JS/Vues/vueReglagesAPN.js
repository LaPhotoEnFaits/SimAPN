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
	document.getElementById('inpDefinitionCapteur').value = 1.0 * apnChoisi.capteurDefinition;
	document.getElementById('outputInpDefinitionCapteur').innerHTML = 'Mpx';
	document.getElementById('inpDefinitionCapteur').size=5;
}
document.getElementById('inpDefinitionCapteur').addEventListener('change', function() {
	if (isNumber(document.getElementById('inpDefinitionCapteur').value)) {
		apnChoisi.capteurDefinition = 1.0 * document.getElementById('inpDefinitionCapteur').value;
		onModifDefinitionCapteur();
	} else {
		document.getElementById('inpDefinitionCapteur').value = 1.0 * apnChoisi.capteurDefinition;
	}
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

