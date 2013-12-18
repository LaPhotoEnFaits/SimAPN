VueReglagesVuePhoto = function(activee, visible, fermable) {
	this.nom = 'ReglagesVuePhoto';
	this.typeDeComposant = 'vue';

	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesVuePhoto;
	this.initIHM = initIHMVues;
};

function initVueReglagesVuePhoto() {

	document.getElementById('nomVueReglagesVuePhoto').innerHTML = 'Réglages de la photo';
	document.getElementById('nomChkVuePhotoExpo').innerHTML = 'Exposition';
	document.getElementById('nomChkVuePhotoFlouMap').innerHTML = 'Flou de mise au point';
	document.getElementById('nomChkVuePhotoFlouBouge').innerHTML = 'Flou de bougé';
	document.getElementById('nomChkVuePhotoBruit').innerHTML = 'Bruit';
	document.getElementById('nomChkVuePhotoPDC').innerHTML = 'PDC';

	if (vueReglagesVuePhoto.chkExpositionVisible)
		show('ensembleChkExpo');
	else
		hide('ensembleChkExpo');

	if (vueReglagesVuePhoto.chkFlouDeMapVisible)
		show('ensembleChkFlouDeMap');
	else
		hide('ensembleChkFlouDeMap');

	if (vueReglagesVuePhoto.chkFlouDeBougeVisible)

		show('ensembleChkFlouDeBouge');
	else
		hide('ensembleChkFlouDeBouge');

	if (vueReglagesVuePhoto.chkBruitVisible)
		show('ensembleChkBruit');
	else
		hide('ensembleChkBruit');

	if (vueReglagesVuePhoto.chkPDCVisible)
		show('ensembleChkPDC');
	else
		hide('ensembleChkPDC');


	if (vuePhoto.expositionVisible)
		document.getElementById('chkVuePhotoExpo').checked = true;
	else
		document.getElementById('chkVuePhotoExpo').checked = false;

	if (vuePhoto.flouDeMapVisible)
		document.getElementById('chkVuePhotoFlouMap').checked = true;
	else
		document.getElementById('chkVuePhotoFlouMap').checked = false;

	if (vuePhoto.flouDeBougeVisible)
		document.getElementById('chkVuePhotoFlouBouge').checked = true;
	else
		document.getElementById('chkVuePhotoFlouBouge').checked = false;

	if (vuePhoto.bruitVisible)
		document.getElementById('chkVuePhotoBruit').checked = true;
	else
		document.getElementById('chkVuePhotoBruit').checked = false;

	if (vuePhoto.pdcVisible)
		document.getElementById('chkVuePhotoPDC').checked = true;
	else
		document.getElementById('chkVuePhotoPDC').checked = false;
}

////CHECKBOXS
document.getElementById('chkVuePhotoExpo').addEventListener('change', function() {
	if (document.getElementById('chkVuePhotoExpo').checked)
		vuePhoto.expositionVisible = 1;
	else
		vuePhoto.expositionVisible = 0;

	drawFlousEtExpo();
}, false);

document.getElementById('chkVuePhotoFlouMap').addEventListener('change', function() {
	if (document.getElementById('chkVuePhotoFlouMap').checked)
		vuePhoto.flouDeMapVisible = 1;
	else
		vuePhoto.flouDeMapVisible = 0;

	drawFlousEtExpo();
}, false);

document.getElementById('chkVuePhotoFlouBouge').addEventListener('change', function() {
	if (document.getElementById('chkVuePhotoFlouBouge').checked)
		vuePhoto.flouDeBougeVisible = 1;
	else
		vuePhoto.flouDeBougeVisible = 0;

	drawPlans();
	drawFlouBouge();
}, false);

document.getElementById('chkVuePhotoBruit').addEventListener('change', function() {
	if (document.getElementById('chkVuePhotoBruit').checked)
		vuePhoto.bruitVisible = 1;
	else
		vuePhoto.bruitVisible = 0;

	drawBruit();
}, false);

document.getElementById('chkVuePhotoPDC').addEventListener('change', function() {
	if (document.getElementById('chkVuePhotoPDC').checked)
		vuePhoto.pdcVisible = 1;
	else
		vuePhoto.pdcVisible = 0;

	drawPDCVuePhoto();
}, false);