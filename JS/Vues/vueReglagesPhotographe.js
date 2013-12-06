VueReglagesPhotographe = function() {
	this.nom = 'ReglagesPhotographe';

	this.init = initVueReglagesPhotographe;
	this.initIHM = initIHMVues;
};

function initVueReglagesPhotographe() {

	document.getElementById('nomVueReglagesPhotographe').innerHTML="Caractéristiques du photographe";
	
	if (vueReglagesPhotographe.tremblementsVisible) {
		initLstTremblements();
		majOutputLstTremblements();
		show('ensembleLstTremblements');
	} else
		hide('ensembleLstTremblements');

	if (vueReglagesPhotographe.lstCdCVisible) {
		initLstCdC();
		show('ensembleLstCdC');
	} else
		hide('ensembleLstCdC');
}


////LISTE TREMBLEMENTS
function initLstTremblements() {

	document.getElementById('nomLstLstTremblements').innerHTML = getTraduction("Tremblote") + ':';
	document.getElementById('lstTremblements').options[0].text = getTraduction("Faible");
	document.getElementById('lstTremblements').options[1].text = getTraduction("Normal_");
	document.getElementById('lstTremblements').options[2].text = getTraduction("Severe_");
	document.getElementById('lstTremblements').options[3].text = getTraduction("TresSevere");

	initSelectedLst('lstTremblements', photographe.tremblements);
}

function majOutputLstTremblements() {
	document.getElementById('outputLstTremblements').innerHTML = 'x ' + photographe.tremblements;
}

document.getElementById('lstTremblements').addEventListener('change', function() {
	photographe.tremblements = 1.0 * document.getElementById('lstTremblements').options[document.getElementById('lstTremblements').selectedIndex].value;
	onModifTremblements();
}, false);


////LISTE CDC
function initLstCdC() {
	document.getElementById('nomLstCdC').innerHTML = getTraduction("Cdc");
	document.getElementById('LstCdC').options[0].text = getTraduction("Laxiste");
	document.getElementById('LstCdC').options[1].text = getTraduction("Normal");
	document.getElementById('LstCdC').options[2].text = getTraduction("Severe");
	document.getElementById('LstCdC').options[3].text = getTraduction("PixelCapteur");
	document.getElementById('LstCdC').options[4].text = getTraduction("PixelEcran");

	initSelectedLst('LstCdC', photographe.typeDeCdc);
}

document.getElementById('LstCdC').addEventListener('change', function() {
	photographe.typeDeCdc = 1.0 * document.getElementById('LstCdC').options[document.getElementById('LstCdC').selectedIndex].value;
	onModifCdC();
}, false);


