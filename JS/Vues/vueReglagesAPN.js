VueReglagesAPN = function() {
	this.nom = 'ReglagesAPN';
	this.init = initVueReglagesAPN;
	this.initIHM = initIHMVues;
};

function initVueReglagesAPN() {

	document.getElementById('nomVueReglagesAPN').innerHTML = "Caractéristiques de l'APN";

	if (vueReglagesAPN.ensembleAPNManuelVisible) {
		initEnsembleRdBAPNManuel();
		show('ensembleAPNManuel');
	} else
		hide('ensembleAPNManuel');

	if (vueReglagesAPN.ensembleAPNExistantVisible) {
		initEnsembleRdBAPNExistant();
		initLstAPNExistant();
		show('ensembleAPNExistant');
	} else
		hide('ensembleAPNExistant');

	if (vueReglagesAPN.lstTypeDeCapteurVisible) {
		initLstTypeDeCapteur();
		show('ensembleLstTypeDeCapteur');
	} else
		hide('ensembleLstTypeDeCapteur');

	if (vueReglagesAPN.inpDefinitionCapteurVisible) {
		initInpDefinitionCapteur();
		show('ensembleInpDefinitionCapteur');
	} else
		hide('ensembleInpDefinitionCapteur');

	inhibeInputsNonUtilisesReglageAPN();
}


function inhibeInputsNonUtilisesReglageAPN() {
	if (apnChoisi.numeroAPNExistant !== 'X') {
		valide('lstAPNExistant');
		inhibe('lstTypeDeCapteur');
		inhibe('inpDefinitionCapteur');
	} else {
		inhibe('lstAPNExistant');
		valide('lstTypeDeCapteur');
		valide('inpDefinitionCapteur');
	}
}


////CHOIX EXTISTANT / MANUEL
function initEnsembleRdBAPNExistant() {
	document.getElementById('nomAPNExistant').innerHTML = 'APN du commerce';
	if (apnChoisi.numeroAPNExistant !== 'X')
		document.getElementById('rdbAPNExistant').checked = true;
}

function initEnsembleRdBAPNManuel() {
	document.getElementById('nomAPNManuel').innerHTML = "Définition manuelle de l'APN";
	if (apnChoisi.numeroAPNExistant === 'X')
		document.getElementById('rdbAPNManuel').checked = true;
}

document.getElementById('rdbAPNExistant').addEventListener('change', function() {
	majAPNDepuisExistant();
	inhibeInputsNonUtilisesReglageAPN();
	onChangeAPN();
}, false);

document.getElementById('rdbAPNManuel').addEventListener('change', function() {
	apnChoisi.numeroAPNExistant = 'X';
	inhibeInputsNonUtilisesReglageAPN();
}, false);



////LISTE DES APN EXISTANTS
function initLstAPNExistant() {

	var i, option;

	resetLst('lstAPNExistant');
	var select = document.getElementById('lstAPNExistant');

	for (i = 0; i !== NBR_MODELES_APN; i++) {
		option = document.createElement("option");

		if (i === apnChoisi.numeroAPNExistant)
			option.setAttribute("selected", "selected");

		option.setAttribute("value", i);
		option.innerHTML = listeAPN[i].marque + ' ' + listeAPN[i].modele;
		select.appendChild(option);
	}

	document.getElementById('nomLstAPNExistant').innerHTML = 'choix:';
}

document.getElementById('lstAPNExistant').addEventListener('change', function() {
	majAPNDepuisExistant();
	onChangeAPN();
}, false);


function majAPNDepuisExistant() {
	var numeroChoisi = document.getElementById('lstAPNExistant').options[document.getElementById('lstAPNExistant').selectedIndex].value;

	apnChoisi.capteurFormat = listeAPN[numeroChoisi].capteurFormat;
	apnChoisi.capteurLargeur = listeAPN[numeroChoisi].capteurLargeur;
	apnChoisi.capteurHauteur = listeAPN[numeroChoisi].capteurHauteur;
	apnChoisi.capteurDefinition = listeAPN[numeroChoisi].capteurDefinition;
	apnChoisi.capteurDynamique = listeAPN[numeroChoisi].capteurDynamique;
	apnChoisi.capteurLowLightISO = listeAPN[numeroChoisi].capteurLowLightISO;
	if (apnChoisi.capteurLowLightISO === 0)
		apnChoisi.capteurLowLightISO = LOW_LIGHT_ISO_DEFAUT;
	apnChoisi.boitierLargeur=listeAPN[numeroChoisi].boitierLargeur;
	apnChoisi.boitierHauteur=listeAPN[numeroChoisi].boitierHauteur;
	apnChoisi.boitierProfondeur=listeAPN[numeroChoisi].boitierProfondeur;
	apnChoisi.numeroAPNExistant = numeroChoisi;
}


////INPUT DEFINITION DU CAPTEUR
function initInpDefinitionCapteur() {
	document.getElementById('nomInpDefinitionCapteur').innerHTML = getTraduction("definition");
	majOutputInpDefinitionCapteur();
	document.getElementById('outputInpDefinitionCapteur').innerHTML = 'Mpx';
	document.getElementById('inpDefinitionCapteur').size = 5;
}
document.getElementById('inpDefinitionCapteur').addEventListener('change', function() {
	if (isNumber(document.getElementById('inpDefinitionCapteur').value)) {
		apnChoisi.capteurDefinition = 1.0 * document.getElementById('inpDefinitionCapteur').value;
		onModifDefinitionCapteur();
	} else {
		document.getElementById('inpDefinitionCapteur').value = 1.0 * apnChoisi.capteurDefinition;
	}
}, false);

function majOutputInpDefinitionCapteur() {
	document.getElementById('inpDefinitionCapteur').value = 1.0 * apnChoisi.capteurDefinition;
}

////LISTE TYPE DE CAPTEUR
function initLstTypeDeCapteur() {
	document.getElementById('nomLstTypeDeCapteur').innerHTML = getTraduction("Capteur");
	majSelectionLstTypeDeCapteur();
}

function majSelectionLstTypeDeCapteur() {
	initSelectedLst('lstTypeDeCapteur', apnChoisi.capteurFormat, 1);
}



document.getElementById('lstTypeDeCapteur').addEventListener('change', function() {
	apnChoisi.capteurFormat = document.getElementById('lstTypeDeCapteur').options[document.getElementById('lstTypeDeCapteur').selectedIndex].value;
	onModifCapteur();
}, false);