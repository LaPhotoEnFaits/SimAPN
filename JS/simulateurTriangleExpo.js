//var apnChoisi = new APN('PasDeMarque', 'Complet', 'Expert', '2012/02/07', 2899, 'full-frame', 24, 36, 36.3, 'CMOS', 25.3, 14.4, 2853, 50, 6400, 51200, 51, 4, 0.7, 100, 1, 0, 3.2, 900, 146, 123, 82, 1);
//var objectifChoisi = new Objectif('50mm f/1.4', 50, 1.4, 42, 0, 17, 7, 7, [11.3, 16, 7.5, 2], [63.5, 63.5, 63.5, 55.4], [2.2, 0, 0], 4);

function configSimulateur() {

	titre += "Le triangle d'exposition";

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
	vueReglagesRapides.SliderOuvertureVisible = 1;
	vueReglagesRapides.SliderVitesseVisible = 1;
	vueReglagesRapides.SliderISOVisible = 1;
	
	vueReglagesVuePhoto.activee = 1;
	vueReglagesVuePhoto.fermable = 1;
	vueReglagesVuePhoto.ExpositionVisible = 1;
	vueReglagesVuePhoto.FlouDeMapVisible = 1;
	vueReglagesVuePhoto.FlouDeBougeVisible = 1;
	vueReglagesVuePhoto.BruitVisible = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.visible = 1;
	vueReglagesScene.luminositeVisible = 1;
}

function initMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 5.6;

	scene.luminosite=15;

	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}