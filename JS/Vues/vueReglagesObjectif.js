VueReglagesObjectif = function(activee, visible, fermable) {

	this.nom = 'ReglagesObjectif';
	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesObjectif;
	this.initIHM = initIHMVues;
};

function initVueReglagesObjectif() {
	if (vueReglagesObjectif.antiVibrationVisible) {
		initListeAntiVibration();
		show('ensembleListeAntiVibration');
	} else
		hide('ensembleListeAntiVibration');
}


////LISTE ANTI VIBRATION
function initListeAntiVibration(){
	document.getElementById('nomListeAntiVibration').innerHTML = getTraduction("Anti_vibration");
	document.getElementById('listeAntiVibration').options[0].text = getTraduction("Oui");
	document.getElementById('listeAntiVibration').options[1].text = getTraduction("Non");

	initSelectedListe('listeAntiVibration', objectifChoisi.antiVibration);
}

document.getElementById('listeAntiVibration').addEventListener('change', function() {
	objectifChoisi.antiVibration = 1.0 * document.getElementById('listeAntiVibration').options[document.getElementById('listeAntiVibration').selectedIndex].value;
	onModifAntiVibration();
}, false);

////OUVRIR/FERMER
document.getElementById('btnVueReglagesObjectif').addEventListener('click', function() {
	vueReglagesObjectif.visible = 1;
	show('vueReglagesObjectif');
}, false);

document.getElementById('btnCloseVueReglagesObjectif').addEventListener('click', function() {
	vueReglagesObjectif.visible = 0;
	hide('vueReglagesObjectif');
}, false);