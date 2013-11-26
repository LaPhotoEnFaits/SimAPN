function RAZconfig() {

	titre += "";

	photographe.deplacementHorizontal = 0;
	photographe.deplacementVertical = 0;
	photographe.deplacementProfondeur = 0;
	photographe.tremblements = 0;
	photographe.typeDeCdc = 0;


	////VUES
	vuePhoto.activee = 0;
	vuePhoto.visible = 0;
	vuePhoto.fermable = 0;
	vuePhoto.largeur = 0;
	vuePhoto.expositionVisible = 0;
	vuePhoto.flouDeMapVisible = 0;
	vuePhoto.flouDeBougeVisible = 0;
	vuePhoto.bruitVisible = 0;
	vuePhoto.affichageRapide = 0;

	vueCurseurExpo.activee = 0;
	vueCurseurExpo.visible = 0;
	vueCurseurExpo.fermable = 0;
	vueCurseurExpo.largeur = 0;
	vueCurseurExpo.hauteur = 0;

	vueReglagesRapides.activee = 0;
	vueReglagesRapides.visible = 0;
	vueReglagesRapides.fermable = 0;
	vueReglagesRapides.SliderOuvertureVisible = 0;
	vueReglagesRapides.SliderVitesseVisible = 0;
	vueReglagesRapides.SliderISOVisible = 0;
	vueReglagesRapides.SliderFocaleVisible = 0;

	vueReglagesVuePhoto.activee = 0;
	vueReglagesVuePhoto.visible = 0;
	vueReglagesVuePhoto.fermable = 0;
	vueReglagesVuePhoto.ExpositionVisible = 0;
	vueReglagesVuePhoto.FlouDeMapVisible = 0;
	vueReglagesVuePhoto.FlouDeBougeVisible = 0;
	vueReglagesVuePhoto.BruitVisible = 0;

	vueReglagesScene.activee = 0;
	vueReglagesScene.visible = 0;
	vueReglagesScene.fermable = 0;
	vueReglagesScene.luminositeVisible = 0;

	vueReglagesPhotographe.activee = 0;
	vueReglagesPhotographe.visible = 0;
	vueReglagesPhotographe.fermable = 0;
	vueReglagesPhotographe.tremblementsVisible = 0;
	vueReglagesPhotographe.CdCVisible = 0;

	vueReglagesObjectif.activee = 0;
	vueReglagesObjectif.visible = 0;
	vueReglagesObjectif.fermable = 0;
	vueReglagesObjectif.antiVibrationVisible = 0;

	vueReglagesAPN.activee = 0;
	vueReglagesAPN.visible = 0;
	vueReglagesAPN.fermable = 0;
	vueReglagesAPN.typeDeCapteurVisible = 0;

	vueHistogrammes.activee = 0;
	vueHistogrammes.visible = 0;
	vueHistogrammes.fermable = 0;

}

function initIHMVues() {

	if (this.activee) {

		this.init();

		if (this.visible)
			show('vue' + this.nom);
		else
			hide('vue' + this.nom);

		if (this.fermable) {
			document.getElementById('btnCloseVue' + this.nom).innerHTML = '<img src="' + adresseDuCode + '/Images/Icones/btnClose.png"/>';
			document.getElementById('btnVue' + this.nom).innerHTML = '<img src="' + adresseDuCode + '/Images/Icones/btn' + this.nom + '.png"/>';
			show('btnCloseVue' + this.nom);
			show('btnVue' + this.nom);
		} else {
			hide('btnCloseVue' + this.nom);
			hide('btnVue' + this.nom);
		}
	} else {
		hide('vue' + this.nom);
		hide('btnCloseVue' + this.nom);
		hide('btnVue' + this.nom);
	}
}

function drawVues() {

	if (vuePhoto.visible) {
		valideAccelerationMaterielle();
		drawVuePhoto();
	}
	if (vueCurseurExpo.visible)
		drawCurseurExposition();

	if (vueHistogrammes.visible)
		drawVueHistogrammes();
}

function initVues() {

	initSliderTailleFenetres();

	vuePhoto.initIHM();
	vueCurseurExpo.initIHM();
	vueReglagesRapides.initIHM();
	vueReglagesVuePhoto.initIHM();
	vueReglagesScene.initIHM();
	vueReglagesPhotographe.initIHM();
	vueReglagesObjectif.initIHM();
	vueReglagesAPN.initIHM();
	vueHistogrammes.initIHM();
}