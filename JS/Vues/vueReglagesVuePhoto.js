VueReglagesVuePhoto = function(activee, visible, fermable) {
	this.nom = 'ReglagesVuePhoto';

	this.activee = activee;
	this.visible = visible;
	this.fermable = fermable;
	this.init = initVueReglagesVuePhoto;
	this.initIHM = initIHMVues;
};

function initVueReglagesVuePhoto() {

	document.getElementById('nomChkVuePhotoExpo').innerHTML = 'Exposition';
	document.getElementById('nomChkVuePhotoFlouMap').innerHTML = 'Flou de mise au point';
	document.getElementById('nomChkVuePhotoFlouBouge').innerHTML = 'Flou de bougé';
	document.getElementById('nomChkVuePhotoBruit').innerHTML = 'Bruit';

	if (vueReglagesVuePhoto.ExpositionVisible) {
		//initSliderLuminositeScene();
		show('ensembleChkExpo');
	} else
		hide('ensembleChkExpo');

	if (vueReglagesVuePhoto.FlouDeMapVisible) {
		
		show('ensembleChkFlouDeMap');
	} else
		hide('ensembleChkFlouDeMap');

	if (vueReglagesVuePhoto.FlouDeBougeVisible) {
		
		show('ensembleChkFlouDeBouge');
	} else
		hide('ensembleChkFlouDeBouge');

	if (vueReglagesVuePhoto.BruitVisible) {
		
		show('ensembleChkBruit');
	} else
		hide('ensembleChkBruit');



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

////OUVRIR/FERMER
document.getElementById('btnVueReglagesVuePhoto').addEventListener('click', function() {
	vueReglagesVuePhoto.visible = 1;
	show('vueReglagesVuePhoto');
}, false);

document.getElementById('btnCloseVueReglagesVuePhoto').addEventListener('click', function() {
	vueReglagesVuePhoto.visible = 0;
	hide('vueReglagesVuePhoto');
}, false);