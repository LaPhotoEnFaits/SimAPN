VueReglagesScene = function(activee, visible, fermable) {

	this.nom = 'ReglagesScene';
	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesScene;
	this.initIHM = initIHMVues;
};

function initVueReglagesScene() {

	if (vueReglagesScene.luminositeVisible) {
		initListeLuminosite();
		show('ensembleListeLuminosite');
	} else
		hide('ensembleListeLuminosite');
}


////LISTE LUMINOSITE
function initListeLuminosite(){
	document.getElementById('nomListeLuminositeScene').innerHTML = getTraduction("CondLum");
	document.getElementById('listeLuminositeScene').options[0].text = getTraduction("PleineLune");
	document.getElementById('listeLuminositeScene').options[1].text = getTraduction("VilleNuit");
	document.getElementById('listeLuminositeScene').options[2].text = getTraduction("Nuageux");
	document.getElementById('listeLuminositeScene').options[3].text = getTraduction("CoucherSoleil");
	document.getElementById('listeLuminositeScene').options[4].text = getTraduction("CielVoile");
	document.getElementById('listeLuminositeScene').options[5].text = getTraduction("GrandSoleil");
	document.getElementById('listeLuminositeScene').options[6].text = getTraduction("MerNeige");

	initSelectedListe('listeLuminositeScene', scene.luminosite);

	majOutputListeLuminosite();
}

function majOutputListeLuminosite(){
	if(scene.luminosite>0)
		document.getElementById('outputListeLuminosite').innerHTML ='+';
	else if(scene.luminosite<0)
		document.getElementById('outputListeLuminosite').innerHTML ='';

	document.getElementById('outputListeLuminosite').innerHTML += scene.luminosite+'EV';
}

document.getElementById('listeLuminositeScene').addEventListener('change', function() {
	scene.luminosite = 1.0 * document.getElementById('listeLuminositeScene').options[document.getElementById('listeLuminositeScene').selectedIndex].value;
	onModifLuminosite();
}, false);

////OUVRIR/FERMER
document.getElementById('btnVueReglagesScene').addEventListener('click', function() {
	vueReglagesScene.visible = 1;
	show('vueReglagesScene');
}, false);

document.getElementById('btnCloseVueReglagesScene').addEventListener('click', function() {
	vueReglagesScene.visible = 0;
	hide('vueReglagesScene');
}, false);