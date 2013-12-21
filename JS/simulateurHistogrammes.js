function configSimulateur() {
	titre = "L'histogramme";

	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1.0;
	photographe.typeDeCdc = 2;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 524;
	vuePhoto.expositionVisible = 1;

	vueCurseurExpo.activee = 1;
	vueCurseurExpo.visible = 1;
	vueCurseurExpo.largeur = 75;
	vueCurseurExpo.hauteur = 30;

	vueReglagesScene.activee = 1;
	vueReglagesScene.visible = 1;
	vueReglagesScene.sldLuminositeVisible = 1;
	vueReglagesScene.sldLuminositeMin = -6;
	vueReglagesScene.sldLuminositeMax = 6;
	vueReglagesScene.lstScenesVisible=1;

	vueHistogrammes.activee = 1;
	vueHistogrammes.visible = 1;
	vueHistogrammes.histoRVBVIsible = 1;
}

function configMateriel() {
	apnChoisi.vitesse = 3;
	apnChoisi.ISO = 100;
	objectifChoisi.ouverture = 1.8;
	apnChoisi.capteurDynamique =8;

	scene.luminosite = 0;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}

function configVues(){}