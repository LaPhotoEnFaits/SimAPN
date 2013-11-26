function configSimulateur() {
	titre += "L'histogramme";

	photographe.deplacementVertical = 1.4;
	photographe.tremblements = 1.0;
	photographe.typeDeCdc = 2;

	vuePhoto.activee = 1;
	vuePhoto.visible = 1;
	vuePhoto.largeur = 400;
	vuePhoto.expositionVisible = 1;

	vueCurseurExpo.activee = 1;
	vueCurseurExpo.visible = 1;
	vueCurseurExpo.largeur = 75;
	vueCurseurExpo.hauteur = 30;

	vueReglagesScene.activee = 1;
	vueReglagesScene.visible = 1;
	vueReglagesScene.luminositeVisible = 1;

	vueHistogrammes.activee = 1;
	vueHistogrammes.visible = 1;
}

function initMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 5.6;

	scene.luminosite = 15;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}