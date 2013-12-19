function configSimulateur() {

	titre = 'Version complète';

	photographe.deplacementHorizontal = 0;
	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1;
	photographe.typeDeCdc = 1440;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 600;
	vuePhoto.expositionVisible = 1;
	vuePhoto.flouDeMapVisible = 1;
	vuePhoto.flouDeBougeVisible = 1;
	vuePhoto.bruitVisible = 1;
	vuePhoto.pdcVisible = 1;

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
	vueReglagesRapides.ensembleRdbModeDePrioriteVisible = 1;

	vueReglagesVuePhoto.activee = 1;
	vueReglagesVuePhoto.fermable = 1;
	vueReglagesVuePhoto.chkExpositionVisible = 1;
	vueReglagesVuePhoto.chkFlouDeMapVisible = 1;
	vueReglagesVuePhoto.chkFlouDeBougeVisible = 1;
	vueReglagesVuePhoto.chkBruitVisible = 1;
	vueReglagesVuePhoto.chkPDCVisible = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.fermable = 1;
	vueReglagesScene.lstLuminositeVisible = 1;
	vueReglagesScene.inpDistancesPlansVisible = 1;
	vueReglagesScene.lstScenesVisible = 1;

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
	vueReglagesAPN.inpDefinitionCapteurVisible = 1;
	vueReglagesAPN.ensembleAPNManuelVisible = 1;
	vueReglagesAPN.ensembleAPNExistantVisible = 1;

	vueHistogrammes.activee = 1;
	vueHistogrammes.fermable = 1;

	vueFlouDeMiseAuPoint.activee = 1;
	vueFlouDeMiseAuPoint.fermable = 1;

	vueEXIF.activee = 1;
	vueEXIF.visible = 1;

	vueReglagesFocus.activee = 1;
	vueReglagesFocus.fermable = 1;
	vueReglagesFocus.rdbTypeDeFocusVisible = 1;
	vueReglagesFocus.rdbModeDeFocusVisible = 1;
	vueReglagesFocus.sldFocusVisible = 1;

	vue3D.activee = 1;
	vue3D.fermable = 1;
	vue3D.silhouettesVisible = 1;
	vue3D.boitierVisible = 1;
	vue3D.objectifVisible = 1;
	vue3D.diaphragmeVisible = 1;
	vue3D.PDCVisible = 1;

	vueReglagesVue3D.activee = 1;
	vueReglagesVue3D.fermable = 1;
	vueReglagesVue3D.chkSilhouettesVisible = 1;
	vueReglagesVue3D.chkBoitierVisible = 1;
	vueReglagesVue3D.chkObjectifVisible = 1;
	vueReglagesVue3D.chkDiaphragmeVisible = 1;
	vueReglagesVue3D.chkPDCVisible = 1;
}

function configMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;
	objectifChoisi.ouverture = 5.6;
	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}