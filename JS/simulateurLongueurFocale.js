function configSimulateur() {

	titre = 'Influence de la longueur focale';

	photographe.deplacementHorizontal = 0;
	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1;
	photographe.typeDeCdc = 2;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 400;
	vuePhoto.flouDeMapVisible = 1;
	vuePhoto.flouDeBougeVisible = 1;
	
	vueReglagesRapides.activee = 1;
	vueReglagesRapides.visible = 1;
	vueReglagesRapides.sldFocaleVisible = 1;
	vueReglagesRapides.chkCadrageConstantVisible = 1;

	vueReglagesVuePhoto.activee = 1;
	vueReglagesVuePhoto.fermable = 1;
	vueReglagesVuePhoto.chkFlouDeMapVisible = 1;
	vueReglagesVuePhoto.chkFlouDeBougeVisible = 1;
	
	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.lstTypeDeCapteurVisible = 1;
	
	vueFlouDeMiseAuPoint.activee = 1;
	vueFlouDeMiseAuPoint.fermable = 1;

	vueEXIF.activee = 1;
	vueEXIF.visible = 1;
}

function initMateriel() {
	apnChoisi.vitesse = 1 / 50;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 2.2;	
	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}