function configSimulateur() {

	titre = "Le triangle d'exposition";

	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1;
	photographe.typeDeCdc = 1440;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 400;
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
	vueReglagesScene.lstScenesVisible=1;

	vueHistogrammes.activee = 1;
	vueHistogrammes.fermable = 1;
}

function configMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 5.6;

	scene.luminosite=15;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}

