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
	vueReglagesAPN.fermable = 1;
	vueReglagesPhotographe.lstCdCVisible = 1;

	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.lstTypeDeCapteurVisible = 1;
	vueReglagesAPN.inpDefinitionCapteur = 1;

	vueFlouDeMiseAuPoint.activee = 1;
	vueFlouDeMiseAuPoint.visible = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.fermable = 1;
	vueReglagesScene.inpDistancesPlansVisible = 1;
}

function initMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 1.4;
	
	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}