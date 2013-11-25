VueReglagesAPN = function() {
	this.nom = 'ReglagesAPN';
	this.init = initVueReglagesAPN;
	this.initIHM = initIHMVues;
};

function initVueReglagesAPN() {
	if (vueReglagesAPN.typeDeCapteurVisible) {
		initListeTypeDeCapteur();
		show('ensembleListeTypeDeCapteur');
	} else
		hide('ensembleListeTypeDeCapteur');
}


////LISTE TYPE DE CAPTEUR
function initListeTypeDeCapteur() {
	document.getElementById('nomListeTypeDeCapteur').innerHTML = getTraduction("Capteur");
	initSelectedListe('listeTypeDeCapteur', apnChoisi.capteurFormat, 1);
}

document.getElementById('listeTypeDeCapteur').addEventListener('change', function() {
	apnChoisi.capteurFormat = document.getElementById('listeTypeDeCapteur').options[document.getElementById('listeTypeDeCapteur').selectedIndex].value;
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