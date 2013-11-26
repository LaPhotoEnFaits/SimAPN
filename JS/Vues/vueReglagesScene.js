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

}


////LISTE LUMINOSITE
function initLstLuminosite(){
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

function majOutputLstLuminosite(){
	if(scene.luminosite>0)
		document.getElementById('outputLstLuminosite').innerHTML ='+';
	else if(scene.luminosite<0)
		document.getElementById('outputLstLuminosite').innerHTML ='';

	document.getElementById('outputLstLuminosite').innerHTML += scene.luminosite+'EV';
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
	document.getElementById('sldLuminosite').step = 1/3;
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