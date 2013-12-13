titre = '';
nomDuSoft = 'Virtua Camera';
versionDuSoft = 'beta';

cptImagesTelechargees = 0;

//MODELS
scene = new Scene();
photographe = new Photographe(0, 1.4, 0, 1, 1440);
apnChoisi = new APN('PasDeMarque', 'Complet', 'Expert', '2012/02/07', 2899, 'full-frame', 24, 36, 36.3, 'CMOS', 25.3, 14.4, 2853, 50, 6400, 51200, 51, 4, 0.7, 100, 1, 0, 3.2, 900, 146, 123, 82, 1);
objectifChoisi = new Objectif('PasDeRef', 50, 1.4, 42, 0, 17, 7, 7, [11.3, 16, 7.5, 2], [63.5, 63.5, 63.5, 55.4], [2.2, 0, 0], 4);
priseDeVue = new PriseDeVue();

//VUES
vuePhotoCachee = new VuePhotoCachee();

vuePhoto = new VuePhoto();
vueCurseurExpo = new VueCurseurExposition();
vueReglagesRapides = new VueReglagesRapides();
vueReglagesVuePhoto = new VueReglagesVuePhoto();
vueReglagesScene = new VueReglagesScene();
vueReglagesPhotographe = new VueReglagesPhotographe();
vueReglagesObjectif = new VueReglagesObjectif();
vueReglagesAPN = new VueReglagesAPN();
vueHistogrammes = new VueHistogrammes();
vueFlouDeMiseAuPoint = new VueFlouDeMiseAuPoint();
vueEXIF = new VueEXIF();
vueReglagesFocus = new VueReglagesFocus();
vue3D = new Vue3D();


listeDesVues = [vuePhoto, vueCurseurExpo, vueReglagesRapides, vueReglagesVuePhoto, vueReglagesScene, vueReglagesPhotographe, vueReglagesObjectif, vueReglagesAPN, vueHistogrammes, vueFlouDeMiseAuPoint, vueEXIF, vueReglagesFocus, vue3D];
listeDesScenes = ['Breaking Bad', 'Pamela va à la plage'];


//MATERIEL
listeAPN = new Array(NBR_MODELES_APN);
listeObjectif = new Array(NBR_MODELES_OBJECTIF);
objectifExtrapole = new Objectif("TBD", 0, 0, 0, 0, 0, 0, [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0], 0);

//POLYGONES
capteurChoisi3D = new Polygone();
capteurFullFrame = new Polygone();
listeDeTousLesPolygones = new ListeDeTousLesPolygones();

//GENERAL
flagMAJ = new FlagMAJ();



function initPreTelechargement() {

	RAZconfig();
	configSimulateur();

	document.getElementById('nomDuSoft').innerHTML = nomDuSoft;
	document.getElementById('titre').innerHTML = titre;
	document.getElementById('version').innerHTML = versionDuSoft;

	displayInfoNavigateur();

	document.getElementById('infosPreChargement').style.display = 'none';
	document.getElementById('infoUtilisateur').innerHTML = getTraduction('chargementEnCours');

	scene.sceneChoisie = getSceneRandom();
	initScene(scene.sceneChoisie);
}

function initPostTelechargement() {

	initMateriel();
	configMateriel();
	calcHauteurVuePhoto();
	initCalc();
	initPolygones3D();
	initVues();
	drawVues();
	if (vuePhoto.visible)
		valideAccelerationMaterielle();

	var iMax = 100;
	var incrI = 0.1;

	for (var i = 0.1; i < iMax; i += incrI) {
		for (var ii = 0; ii !== NBR_PLANS; ii++)
			filtreCSS(document.getElementById('cvsPhotoPlan' + ii), 0.5 * i / iMax, i);
	}

	drawFlousEtExpo();

	initInfoBulle();

	document.getElementById('infoUtilisateur').innerHTML = '';
	show('Vues');
	document.body.style.cursor = 'default';
}

function initCalc() {
	setDimensionsCapteur();
	setDistanceDeMAP();
	calcTaillePixel();
	calcCdc();
	calcPDC();
	calcDynamiqueCourante();
	calcCropFactor();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcChamps();
	calcFlousPlans();
	calcExposition();
}

function initMateriel() {
	createListeAPN();
	createListeObjectif();
	objectifChoisi.numeroObjectifExistant = 'X';
}