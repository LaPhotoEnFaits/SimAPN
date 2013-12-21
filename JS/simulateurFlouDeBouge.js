function configSimulateur() {

	titre = 'Le flou de bougé';

	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1.0;
	photographe.typeDeCdc = 2;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 485;
	vuePhoto.flouDeBougeVisible = 1;

	vueReglagesRapides.activee = 1;
	vueReglagesRapides.visible = 1;
	vueReglagesRapides.sldVitesseVisible = 1;
	vueReglagesRapides.sldFocaleVisible = 1;

	vueReglagesPhotographe.activee = 1;
	vueReglagesPhotographe.fermable = 1;
	vueReglagesPhotographe.tremblementsVisible = 1;
	vueReglagesPhotographe.lstCdCVisible = 1;

	vueReglagesObjectif.activee = 1;
	vueReglagesObjectif.fermable = 1;
	vueReglagesObjectif.visible = 1;
	vueReglagesObjectif.lstAntiVibrationVisible = 1;

	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.lstTypeDeCapteurVisible = 1;
	vueReglagesAPN.inpDefinitionCapteurVisible = 1;
	vueReglagesAPN.ensembleAPNManuelVisible = 1;
	vueReglagesAPN.ensembleAPNExistantVisible = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.fermable = 1;
	vueReglagesScene.lstScenesVisible = 1;
}

function configMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 5.6;
	objectifChoisi.antiVibration = 0;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}

function configVues(){}