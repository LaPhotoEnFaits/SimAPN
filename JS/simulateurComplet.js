function configSimulateur() {

	titre = 'Version complète';

	photographe.deplacementHorizontal = 0;
	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1;
	photographe.typeDeCdc = 1440;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 550;
	vuePhoto.expositionVisible = 1;
	vuePhoto.flouDeMapVisible = 1;
	vuePhoto.flouDeBougeVisible = 1;
	vuePhoto.bruitVisible = 1;

	vueCurseurExpo.activee = 1;
	vueCurseurExpo.visible = 1;
	vueCurseurExpo.largeur = 75;
	vueCurseurExpo.hauteur = 30;

	vueReglagesRapides.activee = 1;
	vueReglagesRapides.visible = 1;
	vueReglagesRapides.sldOuvertureVisible = 1;
	vueReglagesRapides.sldVitesseVisible = 1;
	vueReglagesRapides.sldISOVisible = 1;
	vueReglagesRapides.sldFocaleVisible = 1;
	vueReglagesRapides.chkCadrageConstantVisible = 1;

	vueReglagesVuePhoto.activee = 1;
	vueReglagesVuePhoto.fermable = 1;
	vueReglagesVuePhoto.chkExpositionVisible = 1;
	vueReglagesVuePhoto.chkFlouDeMapVisible = 1;
	vueReglagesVuePhoto.chkFlouDeBougeVisible = 1;
	vueReglagesVuePhoto.chkBruitVisible = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.fermable = 1;
	vueReglagesScene.lstLuminositeVisible = 1;
	vueReglagesScene.inpDistancesPlansVisible = 1;

	vueReglagesPhotographe.activee = 1;
	vueReglagesPhotographe.fermable = 1;
	vueReglagesPhotographe.tremblementsVisible = 1;
	vueReglagesPhotographe.lstCdCVisible = 1;

	vueReglagesObjectif.activee = 1;
	vueReglagesObjectif.fermable = 1;
	vueReglagesObjectif.lstAntiVibrationVisible = 1;

	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.lstTypeDeCapteurVisible = 1;
	vueReglagesAPN.inpDefinitionCapteur = 1;

	vueHistogrammes.activee = 1;
	vueHistogrammes.fermable = 1;

	vueFlouDeMiseAuPoint.activee = 1;
	vueFlouDeMiseAuPoint.fermable = 1;

	vueEXIF.activee = 1;
	vueEXIF.visible = 1;
}

function initMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 5.6;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}