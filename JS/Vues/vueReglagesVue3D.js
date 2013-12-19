VueReglagesVue3D = function(activee, visible, fermable) {
	this.nom = 'ReglagesVue3D';
	this.typeDeComposant = 'vue';

	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesVue3D;
	this.initIHM = initIHMVues;
};

function initVueReglagesVue3D() {

	document.getElementById('nomVueReglagesVue3D').innerHTML = 'Réglages de la 3D';
	document.getElementById('nomChkVue3DSilhouettes').innerHTML = 'Silhouettes';
	document.getElementById('nomChkVue3DBoitier').innerHTML = 'Boitier';
	document.getElementById('nomChkVue3DObjectif').innerHTML = 'Objectif';
	document.getElementById('nomChkVue3DDiaphragme').innerHTML = 'Diaphragme';
	document.getElementById('nomChkVue3DPDC').innerHTML = 'PDC';

	if (vueReglagesVue3D.chkSilhouettesVisible)
		show('ensembleChkVue3DSilhouettes');
	else
		hide('ensembleChkVue3DSilhouettes');

	if (vueReglagesVue3D.chkBoitierVisible)
		show('ensembleChkVue3DBoitier');
	else
		hide('ensembleChkVue3DBoitier');

	if (vueReglagesVue3D.chkObjectifVisible)
		show('ensembleChkVue3DObjectif');
	else
		hide('ensembleChkVue3DObjectif');

	if (vueReglagesVue3D.chkDiaphragmeVisible)
		show('ensembleChkVue3DDiaphragme');
	else
		hide('ensembleChkVue3DDiaphragme');

	if (vueReglagesVue3D.chkPDCVisible)
		show('ensembleChkVue3DPDC');
	else
		hide('ensembleChkVue3DPDC');


	if (vue3D.silhouettesVisible)
		document.getElementById('chkVue3DSilhouettes').checked = true;
	else
		document.getElementById('chkVue3DSilhouettes').checked = false;

	if (vue3D.boitierVisible)
		document.getElementById('chkVue3DBoitier').checked = true;
	else
		document.getElementById('chkVue3DBoitier').checked = false;

	if (vue3D.objectifVisible)
		document.getElementById('chkVue3DObjectif').checked = true;
	else
		document.getElementById('chkVue3DObjectif').checked = false;

	if (vue3D.diaphragmeVisible)
		document.getElementById('chkVue3DDiaphragme').checked = true;
	else
		document.getElementById('chkVue3DDiaphragme').checked = false;

	if (vue3D.PDCVisible)
		document.getElementById('chkVue3DPDC').checked = true;
	else
		document.getElementById('chkVue3DPDC').checked = false;
}

document.getElementById('chkVue3DSilhouettes').addEventListener('change', function() {
	if (document.getElementById('chkVue3DSilhouettes').checked)
		vue3D.silhouettesVisible = 1;
	else
		vue3D.silhouettesVisible = 0;

	drawVue3D();
}, false);

document.getElementById('chkVue3DBoitier').addEventListener('change', function() {
	if (document.getElementById('chkVue3DBoitier').checked)
		vue3D.boitierVisible = 1;
	else
		vue3D.boitierVisible = 0;

	drawVue3D();
}, false);

document.getElementById('chkVue3DObjectif').addEventListener('change', function() {
	if (document.getElementById('chkVue3DObjectif').checked)
		vue3D.objectifVisible = 1;
	else
		vue3D.objectifVisible = 0;

	drawVue3D();
}, false);

document.getElementById('chkVue3DDiaphragme').addEventListener('change', function() {
	if (document.getElementById('chkVue3DDiaphragme').checked)
		vue3D.diaphragmeVisible = 1;
	else
		vue3D.diaphragmeVisible = 0;

	drawVue3D();
}, false);

document.getElementById('chkVue3DPDC').addEventListener('change', function() {
	if (document.getElementById('chkVue3DPDC').checked)
		vue3D.PDCVisible = 1;
	else
		vue3D.PDCVisible = 0;

	drawVue3D();
}, false);