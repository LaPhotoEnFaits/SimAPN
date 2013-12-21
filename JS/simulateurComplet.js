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
	vue3D.rayonsOptiques = 'rayonsOptiquesChampsDeVision';

	vueReglagesVue3D.activee = 1;
	vueReglagesVue3D.fermable = 1;
	vueReglagesVue3D.chkSilhouettesVisible = 1;
	vueReglagesVue3D.chkBoitierVisible = 1;
	vueReglagesVue3D.chkObjectifVisible = 1;
	vueReglagesVue3D.chkDiaphragmeVisible = 1;
	vueReglagesVue3D.chkPDCVisible = 1;
	vueReglagesVue3D.lstRayonsOptiquesVisible = 1;
}

function configMateriel() {
	apnChoisi.vitesse = 1 / 2000;
	apnChoisi.ISO = 200;
	objectifChoisi.ouverture = 5.6;
	priseDeVue.distanceDeMAP = scene.plans[1].distance;
}

function configVues() {
	vue3D.hauteurEnMetre = 7.96;
	calcKHauteurNormalisee();

	vue3D.thetaX = 0;
	vue3D.thetaY = 0;
	vue3D.thetaP = 0;

	majTrigoVue3D();

	vue3D.matriceDeRotation[0][0] = -0.9553672228313058;
	vue3D.matriceDeRotation[0][1] = -0.01938500183501702;
	vue3D.matriceDeRotation[0][2] = 0.2946791282117946;

	vue3D.matriceDeRotation[1][0] = 0.022155696069141563;
	vue3D.matriceDeRotation[1][1] = 0.9903298214247283;
	vue3D.matriceDeRotation[1][2] = 0.13694683259461185;

	vue3D.matriceDeRotation[2][0] = -0.29448154001380566;
	vue3D.matriceDeRotation[2][1] = 0.13736455751656548;
	vue3D.matriceDeRotation[2][2] = -0.9457349890950649;

	vue3D.translationP = -0.37960445547067967;
	vue3D.translationX = -0.5777777777777777;
	vue3D.translationY = -0.544642857142857;
}