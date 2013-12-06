VueReglagesObjectif = function() {

	this.nom = 'ReglagesObjectif';

	this.init = initVueReglagesObjectif;
	this.initIHM = initIHMVues;
};

function initVueReglagesObjectif() {

	document.getElementById('nomVueReglagesObjectif').innerHTML="Caractéristiques de l'objectif";

	if (vueReglagesObjectif.lstAntiVibrationVisible) {
		initLstAntiVibration();
		show('ensembleLstAntiVibration');
	} else
		hide('ensembleLstAntiVibration');
}


////LISTE ANTI VIBRATION
function initLstAntiVibration(){
	document.getElementById('nomLstAntiVibration').innerHTML = getTraduction("Anti_vibration");
	document.getElementById('lstAntiVibration').options[0].text = getTraduction("Oui");
	document.getElementById('lstAntiVibration').options[1].text = getTraduction("Non");

	initSelectedLst('lstAntiVibration', objectifChoisi.antiVibration);
}

document.getElementById('lstAntiVibration').addEventListener('change', function() {
	objectifChoisi.antiVibration = 1.0 * document.getElementById('lstAntiVibration').options[document.getElementById('lstAntiVibration').selectedIndex].value;
	onModifAntiVibration();
}, false);

