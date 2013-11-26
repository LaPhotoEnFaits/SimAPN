function configSimulateur() {

	titre += "Flou de bougé";

	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1.0;
	photographe.typeDeCdc = 2;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 400;
	vuePhoto.flouDeBougeVisible = 1;

	vueReglagesRapides.activee = 1;
	vueReglagesRapides.visible = 1;
	vueReglagesRapides.SliderVitesseVisible = 1;
	vueReglagesRapides.SliderFocaleVisible = 1;

	vueReglagesPhotographe.activee = 1;
	vueReglagesPhotographe.visible = 1;
	vueReglagesPhotographe.tremblementsVisible = 1;
	vueReglagesPhotographe.CdCVisible = 1;

	vueReglagesObjectif.activee = 1;
	vueReglagesObjectif.visible = 1;
	vueReglagesObjectif.antiVibrationVisible = 1;

	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.typeDeCapteurVisible = 1;
}

function initMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 5.6;
	objectifChoisi.antiVibration = 0;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}