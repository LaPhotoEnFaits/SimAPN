function configSimulateur() {

	titre = 'Profondeur de champ & Flou de mise au point';

	photographe.deplacementHorizontal = 0;
	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1;
	photographe.typeDeCdc = 1440;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 400;
	vuePhoto.flouDeMapVisible = 1;

	vueReglagesRapides.activee = 1;
	vueReglagesRapides.visible = 1;
	vueReglagesRapides.sldOuvertureVisible = 1;
	vueReglagesRapides.sldFocaleVisible = 1;
	vueReglagesRapides.chkCadrageConstantVisible = 1;

	vueReglagesPhotographe.activee = 1;
	vueReglagesPhotographe.fermable = 1;
	vueReglagesPhotographe.lstCdCVisible = 1;

	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.lstTypeDeCapteurVisible = 1;
	vueReglagesAPN.inpDefinitionCapteurVisible = 1;
	vueReglagesAPN.ensembleAPNManuelVisible = 1;
	vueReglagesAPN.ensembleAPNExistantVisible = 1;

	vueFlouDeMiseAuPoint.activee = 1;
	vueFlouDeMiseAuPoint.fermable = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.fermable = 1;
	vueReglagesScene.inpDistancesPlansVisible = 1;
	vueReglagesScene.lstScenesVisible = 1;

	vueReglagesFocus.activee = 1;
	vueReglagesFocus.fermable = 1;
	vueReglagesFocus.rdbTypeDeFocusVisible = 1;
	vueReglagesFocus.sldFocusVisible = 1;

	vueReglagesVuePhoto.activee = 1;
	vueReglagesVuePhoto.fermable = 1;
	vueReglagesVuePhoto.chkPDCVisible = 1;
}

function configMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 1.4;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}