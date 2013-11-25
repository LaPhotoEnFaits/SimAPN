VueReglagesPhotographe = function(activee, visible, fermable) {
	this.nom = 'ReglagesPhotographe';
	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesPhotographe;
	this.initIHM = initIHMVues;
};

function initVueReglagesPhotographe() {
	if (vueReglagesPhotographe.tremblementsVisible) {
		initListeTremblements();
		majOutputListeTremblements();
		show('ensembleListeTremblements');
	} else
		hide('ensembleListeTremblements');

	if (vueReglagesPhotographe.CdCVisible) {
		initListeCdC();
		show('ensembleListeCdC');
	} else
		hide('ensembleListeCdC');
}


////LISTE TREMBLEMENTS
function initListeTremblements() {

	document.getElementById('nomListeListeTremblements').innerHTML = getTraduction("Tremblote") + ':';
	document.getElementById('listeTremblements').options[0].text = getTraduction("Faible");
	document.getElementById('listeTremblements').options[1].text = getTraduction("Normal_");
	document.getElementById('listeTremblements').options[2].text = getTraduction("Severe_");
	document.getElementById('listeTremblements').options[3].text = getTraduction("TresSevere");

	initSelectedListe('listeTremblements', photographe.tremblements);
}

function majOutputListeTremblements() {
	document.getElementById('outputListeTremblements').innerHTML = 'x ' + photographe.tremblements;
}

document.getElementById('listeTremblements').addEventListener('change', function() {
	photographe.tremblements = 1.0 * document.getElementById('listeTremblements').options[document.getElementById('listeTremblements').selectedIndex].value;
	onModifTremblements();
}, false);


////LISTE CDC
function initListeCdC() {
	document.getElementById('nomListeCdC').innerHTML = getTraduction("Cdc");
	document.getElementById('ListeCdC').options[0].text = getTraduction("Laxiste");
	document.getElementById('ListeCdC').options[1].text = getTraduction("Normal");
	document.getElementById('ListeCdC').options[2].text = getTraduction("Severe");
	document.getElementById('ListeCdC').options[3].text = getTraduction("PixelCapteur");
	document.getElementById('ListeCdC').options[4].text = getTraduction("PixelEcran");

	initSelectedListe('ListeCdC', photographe.typeDeCdc);
}

document.getElementById('ListeCdC').addEventListener('change', function() {
	photographe.typeDeCdc = 1.0 * document.getElementById('ListeCdC').options[document.getElementById('ListeCdC').selectedIndex].value;
	onModifCdC();
}, false);


////OUVRIR/FERMER
document.getElementById('btnVueReglagesPhotographe').addEventListener('click', function() {
	vueReglagesPhotographe.visible = 1;
	show('vueReglagesPhotographe');
}, false);

document.getElementById('btnCloseVueReglagesPhotographe').addEventListener('click', function() {
	vueReglagesPhotographe.visible = 0;
	hide('vueReglagesPhotographe');
}, false);