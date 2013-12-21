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
	vueReglagesVuePhoto.chkPDCVisible = 1;

	vueReglagesAPN.activee = 1;
	vueReglagesAPN.fermable = 1;
	vueReglagesAPN.lstTypeDeCapteurVisible = 1;
	vueReglagesAPN.ensembleAPNManuelVisible = 1;
	vueReglagesAPN.ensembleAPNExistantVisible = 1;

	vueFlouDeMiseAuPoint.activee = 1;
	vueFlouDeMiseAuPoint.fermable = 1;

	vueReglagesPhotographe.activee = 1;
	vueReglagesPhotographe.fermable = 1;
	vueReglagesPhotographe.tremblementsVisible = 1;
	vueReglagesPhotographe.lstCdCVisible = 1;

	vueReglagesScene.activee = 1;
	vueReglagesScene.fermable = 1;
	vueReglagesScene.lstScenesVisible = 1;

	vueEXIF.activee = 1;
	vueEXIF.visible = 1;

	vue3D.activee = 1;
	vue3D.fermable = 1;
	vue3D.visible = 1;

	vueReglagesVue3D.activee = 1;
	vueReglagesVue3D.fermable = 1;
	vueReglagesVue3D.chkSilhouettesVisible = 1;
	vueReglagesVue3D.chkBoitierVisible = 1;
	vueReglagesVue3D.chkObjectifVisible = 1;
	vueReglagesVue3D.chkDiaphragmeVisible = 1;
	vueReglagesVue3D.chkPDCVisible = 1;

	vue3D.silhouettesVisible = 0;
	vue3D.boitierVisible = 1;
	vue3D.objectifVisible = 1;
	vue3D.diaphragmeVisible = 1;
	vue3D.PDCVisible = 0;
	vue3D.rayonsOptiques = 'rayonsOptiquesChampsDeVision';
}

function configMateriel() {
	apnChoisi.vitesse = 1 / 50;
	apnChoisi.ISO = 200;

	objectifChoisi.ouverture = 2.2;
	priseDeVue.distanceDeMAP = scene.plans[1].distance;	
}

function configVues(){
	vue3D.hauteurEnMetre = 0.21491003423134872;
	calcKHauteurNormalisee();

	vue3D.thetaX = 0;
	vue3D.thetaY = 0;
	vue3D.thetaP = 0;

	majTrigoVue3D();

	vue3D.matriceDeRotation[0][0] =0.8606332494582706;
	vue3D.matriceDeRotation[0][1] = 0.0024796250163417557;
	vue3D.matriceDeRotation[0][2] = 0.5092192665116644;

	vue3D.matriceDeRotation[1][0] = 0.11982671589075364;
	vue3D.matriceDeRotation[1][1] = 0.970922275569809;
	vue3D.matriceDeRotation[1][2] = -0.20724741967315452;

	vue3D.matriceDeRotation[2][0] = -0.49492622489188753;
	vue3D.matriceDeRotation[2][1] = 0.2393820926095405;
	vue3D.matriceDeRotation[2][2] = 0.8353108676727132;

	vue3D.translationP = -0.08882507759832559;
	vue3D.translationX =-0.0888888888888889;
	vue3D.translationY = 0.062499999999999944;
}