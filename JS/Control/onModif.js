FlagMAJ = function() {
	this.majOutputLstLuminosite = new ItemPourMAJ(majOutputLstLuminosite);
	this.majOutputSldLuminosite = new ItemPourMAJ(majOutputSldLuminosite);
	this.majOutputLstTremblements = new ItemPourMAJ(majOutputLstTremblements);
	this.majOutputSldOuverture = new ItemPourMAJ(majOutputSldOuverture);
	this.majOutputSldVitesse = new ItemPourMAJ(majOutputSldVitesse);
	this.majOutputSldISO = new ItemPourMAJ(majOutputSldISO);
	this.majOutputSldFocale = new ItemPourMAJ(majOutputSldFocale);
	this.majOutputDistancesPlans = new ItemPourMAJ(majOutputDistancesPlans);
	this.majVueFocus = new ItemPourMAJ(majVueFocus);
	this.majSldFocus = new ItemPourMAJ(majSldFocus);
	this.majOutputInpDefinitionCapteur = new ItemPourMAJ(majOutputInpDefinitionCapteur);
	this.majSelectionLstTypeDeCapteur = new ItemPourMAJ(majSelectionLstTypeDeCapteur);

	this.setDistancesApresDelacement = new ItemPourMAJ(setDistancesApresDelacement);
	this.setDistanceDeMAP = new ItemPourMAJ(setDistanceDeMAP);
	this.setDimensionsCapteur = new ItemPourMAJ(setDimensionsCapteur);

	this.calcDynamiqueCourante = new ItemPourMAJ(calcDynamiqueCourante);
	this.calcExposition = new ItemPourMAJ(calcExposition);
	this.calcHauteurVuePhoto = new ItemPourMAJ(calcHauteurVuePhoto);
	this.calcTaillePixel = new ItemPourMAJ(calcTaillePixel);
	this.calcCropFactor = new ItemPourMAJ(calcCropFactor);
	this.calcCdc = new ItemPourMAJ(calcCdc);
	this.calcModePriorite = new ItemPourMAJ(calcModePriorite);
	this.calcPDC = new ItemPourMAJ(calcPDC);
	this.calcChamps = new ItemPourMAJ(calcChamps);
	this.calcFlousPlans = new ItemPourMAJ(calcFlousPlans);
	this.calcVitesseDeSecurite = new ItemPourMAJ(calcVitesseDeSecurite);
	this.calcFlouDeBouge = new ItemPourMAJ(calcFlouDeBouge);

	this.setFocalesMinMaxChoisie = new ItemPourMAJ(setFocalesMinMaxChoisie);

	this.initVuePhoto = new ItemPourMAJ(initVuePhoto);

	this.drawVuePhoto = new ItemPourMAJ(drawVuePhoto);
	this.drawVueFlouDeMiseAuPoint = new ItemPourMAJ(drawVueFlouDeMiseAuPoint);
	this.drawPlans = new ItemPourMAJ(drawPlans);
	this.drawSol = new ItemPourMAJ(drawSol);
	this.drawPDCVuePhoto = new ItemPourMAJ(drawPDCVuePhoto);
	this.drawGrillePerspective = new ItemPourMAJ(drawGrillePerspective);
	this.drawBruit = new ItemPourMAJ(drawBruit);
	this.drawFlouBouge = new ItemPourMAJ(drawFlouBouge);
	this.drawFlousEtExpo = new ItemPourMAJ(drawFlousEtExpo);
	this.drawCurseurExposition = new ItemPourMAJ(drawCurseurExposition);
	this.drawVueHistogrammes = new ItemPourMAJ(drawVueHistogrammes);
	this.drawVueEXIF = new ItemPourMAJ(drawVueEXIF);

	this.setPtsCapteurs3D = new ItemPourMAJ(setPtsCapteurs3D);
	this.setCotesAPN3D = new ItemPourMAJ(setCotesAPN3D);
	this.setPtsAPN3D = new ItemPourMAJ(setPtsAPN3D);
	this.extrapoleObjectif = new ItemPourMAJ(extrapoleObjectif);
	this.setPtsObjectifChoisi3D = new ItemPourMAJ(setPtsObjectifChoisi3D);

	this.drawVue3D = new ItemPourMAJ(drawVue3D);
};

ItemPourMAJ = function(MAJ) {
	this.actif = 0;
	this.MAJ = MAJ;
};

function doMAJ() {

	if (flagMAJ.drawVuePhoto.actif) {
		flagMAJ.drawPlans.actif = 0;
		flagMAJ.drawFlouBouge.actif = 0;
		flagMAJ.drawSol.actif = 0;
		flagMAJ.drawPDCVuePhoto.actif = 0;
		flagMAJ.drawGrillePerspective.actif = 0;
		flagMAJ.drawFlousEtExpo.actif = 0;
		flagMAJ.drawBruit.actif = 0;
	}

	for (var propName in flagMAJ) {
		if (flagMAJ.hasOwnProperty(propName)) {
			if (flagMAJ[propName].actif) {
				flagMAJ[propName].MAJ();
				flagMAJ[propName].actif = 0;
			}
		}
	}
}


////MODIFS DE FAMILLES D'ITEMS
function onModifExposition(appelInterne) {

	flagMAJ.calcExposition.actif = 1;

	flagMAJ.drawFlousEtExpo.actif = 1;
	flagMAJ.drawCurseurExposition.actif = 1;
	flagMAJ.drawVueHistogrammes.actif = 1;

	if (!appelInterne)
		doMAJ();
}

function onModifChamps(appelInterne) {

	flagMAJ.calcChamps.actif = 1;

	flagMAJ.drawVuePhoto.actif = 1;
	flagMAJ.drawVueHistogrammes.actif = 1;

	if (!appelInterne)
		doMAJ();
}

function onModifFlouDeMAP(appelInterne) {

	flagMAJ.calcFlousPlans.actif = 1;
	flagMAJ.calcPDC.actif = 1;

	flagMAJ.drawFlousEtExpo.actif = 1;
	flagMAJ.drawPDCVuePhoto.actif = 1;
	flagMAJ.drawVueFlouDeMiseAuPoint.actif = 1;
	flagMAJ.drawVue3D.actif = 1;

	if (!appelInterne)
		doMAJ();
}

function onModifFlouDeBouge(appelInterne) {

	flagMAJ.calcVitesseDeSecurite.actif = 1;
	flagMAJ.calcFlouDeBouge.actif = 1;
	flagMAJ.drawPlans.actif = 1;
	flagMAJ.drawFlouBouge.actif = 1;
	flagMAJ.drawVueHistogrammes.actif = 1;

	if (!appelInterne)
		doMAJ();
}

function onChangeAPN(appelInterne) {

	if (apnChoisi.numeroAPNExistant !== 'X') {
		flagMAJ.majOutputInpDefinitionCapteur.actif = 1;
		flagMAJ.majSelectionLstTypeDeCapteur.actif = 1;
	}

	flagMAJ.setCotesAPN3D.actif = 1;
	flagMAJ.setPtsAPN3D.actif = 1;	
	flagMAJ.extrapoleObjectif.actif = 1;
	flagMAJ.setPtsObjectifChoisi3D.actif = 1;
	flagMAJ.drawVue3D.actif = 1;

	onModifDefinitionCapteur(1);
	onModifCapteur(2); //2 pour pouvoir faire la maj de la focale en cas de cadrage constant
	onModifDynamiqueDuCapteur(1);
	onModifLowLightISO(1);

	if (!appelInterne)
		doMAJ();
}

function onDeplacePhotographe(appelInterne){
	flagMAJ.drawVueHistogrammes.actif = 1;
	flagMAJ.drawVue3D.actif = 1;
	flagMAJ.setPtsCapteurs3D.actif = 1;
	flagMAJ.setPtsAPN3D.actif = 1;
	flagMAJ.setPtsObjectifChoisi3D.actif = 1;

	if (vuePhoto.affichageRapide)
		flagMAJ.drawFlousEtExpo.actif = 1;
}


////MODIFS DES ITEMS DES VUES
function onModifTypeDeFocus(appelInterne) {
	flagMAJ.majVueFocus.actif = 1;
	if (!appelInterne)
		doMAJ();
}

function onModifDistanceDeMAP(appelInterne) {

	onModifFlouDeMAP(1);

	flagMAJ.setPtsObjectifChoisi3D.actif = 1;
	flagMAJ.majSldFocus.actif = 1;

	flagMAJ.drawPlans.actif = 1;
	flagMAJ.drawFlouBouge.actif = 1;
	flagMAJ.drawVueHistogrammes.actif = 1;


	if (!appelInterne)
		doMAJ();
}

function onModifDistancePlan(numeroDuPlan, appelInterne) {

	if (numeroDuPlan === 0) {
		if (scene.plans[0].distance > scene.plans[1].distance)
			scene.plans[0].distance = scene.plans[1].distance;
	}

	if (numeroDuPlan === 2) {
		if (scene.plans[2].distance < scene.plans[1].distance)
			scene.plans[2].distance = scene.plans[1].distance;

		if (scene.plans[2].distance > DISTANCE_MAX)
			scene.plans[2].distance = DISTANCE_MAX;
	}

	if (numeroDuPlan === 1) {
		if (scene.plans[1].distance < scene.plans[0].distance)
			scene.plans[1].distance = scene.plans[0].distance;

		if (scene.plans[1].distance > scene.plans[2].distance)
			scene.plans[1].distance = scene.plans[2].distance;
	}

	document.getElementById('inpDistancePlan' + numeroDuPlan).value = scene.plans[numeroDuPlan].distance.toFixed(2);

	flagMAJ.drawVue3D.actif = 1;

	if (priseDeVue.planDeMAP === numeroDuPlan && apnChoisi.modeDeFocus === 'AFC') {

		flagMAJ.setDistanceDeMAP.actif = 1;
		onModifDistanceDeMAP(1);

		if (!appelInterne)
			doMAJ();

	} else {
		calcFlouPlan(numeroDuPlan);

		flagMAJ.drawVueHistogrammes.actif = 1;
		flagMAJ.drawVueFlouDeMiseAuPoint.actif = 1;

		if (!appelInterne)
			doMAJ();

		drawFlouEtExpo(numeroDuPlan);
		drawPlan(numeroDuPlan);
	}
}

function onModifProfondeurPhotographe(appelInterne) {
	flagMAJ.majOutputDistancesPlans.actif = 1;
	flagMAJ.setDistancesApresDelacement.actif = 1;
	flagMAJ.drawVuePhoto.actif = 1;

	onModifChamps(1);
	onModifFlouDeMAP(1);
	onDeplacePhotographe(1);

	if (!appelInterne)
		doMAJ();
}

function onModifHorizontalVerticalPhotographe(appelInterne) {
	flagMAJ.drawPlans.actif = 1;
	flagMAJ.drawFlouBouge.actif = 1;
	flagMAJ.drawSol.actif = 1;
	flagMAJ.drawPDCVuePhoto.actif = 1;
	flagMAJ.drawGrillePerspective.actif = 1;
	flagMAJ.drawBruit.actif = 1;

	onDeplacePhotographe(1);

	if (!appelInterne)
		doMAJ();
}

function onModifCdC(appelInterne) {
	flagMAJ.calcCdc.actif = 1;
	flagMAJ.calcPDC.actif = 1;
	flagMAJ.drawVueFlouDeMiseAuPoint.actif = 1;

	onModifFlouDeBouge(1);

	if (!appelInterne)
		doMAJ();
}

function onModifDefinitionCapteur(appelInterne) {
	flagMAJ.calcTaillePixel.actif = 1;
	flagMAJ.drawVue3D.actif = 1;

	if (photographe.typeDeCdc === 1)
		onModifCdC(1);

	flagMAJ.drawVueFlouDeMiseAuPoint.actif = 1;

	if (!appelInterne)
		doMAJ();
}

function onModifFocale(appelInterne) {

	flagMAJ.majOutputSldFocale.actif = 1;
	flagMAJ.drawVueEXIF.actif = 1;
	flagMAJ.setPtsObjectifChoisi3D.actif = 1;
	flagMAJ.extrapoleObjectif.actif = 1;
	flagMAJ.setPtsCapteurs3D.actif = 1;

	if (priseDeVue.cadrageConstant && !appelInterne) {
		setProfondeurPhotographeCadrageConstant();
		onModifProfondeurPhotographe(1);
	}

	onModifChamps(1);
	onModifFlouDeMAP(1);
	onModifFlouDeBouge(1);

	if (!appelInterne)
		doMAJ();
}

function onModifCapteur(appelInterne) {
	if (apnChoisi.numeroAPNExistant === 'X')
		flagMAJ.setDimensionsCapteur.actif = 1;

	flagMAJ.calcHauteurVuePhoto.actif = 1;
	flagMAJ.initVuePhoto.actif = 1;
	flagMAJ.calcCropFactor.actif = 1;
	flagMAJ.setFocalesMinMaxChoisie.actif = 1;
	flagMAJ.calcTaillePixel.actif = 1;
	flagMAJ.drawVueEXIF.actif = 1;
	flagMAJ.setCotesAPN3D.actif = 1;
	flagMAJ.setPtsAPN3D.actif = 1;
	flagMAJ.setPtsCapteurs3D.actif = 1;
	flagMAJ.drawVue3D.actif = 1;

	if (priseDeVue.cadrageConstant && appelInterne !== 1) {
		setDimensionsCapteur();
		flagMAJ.setDimensionsCapteur.actif = 0;
		setFocaleCadrageConstant();
		onModifFocale(1);
	}

	onModifCdC(1);
	onModifFlouDeBouge(1);
	onModifChamps(1);
	onModifFlouDeMAP(1);

	if (!appelInterne)
		doMAJ();
}

function onModifAntiVibration(appelInterne) {
	onModifFlouDeBouge(1);

	if (!appelInterne)
		doMAJ();
}

function onModifTremblements(appelInterne) {
	flagMAJ.majOutputLstTremblements.actif = 1;

	onModifFlouDeBouge(1);

	if (!appelInterne)
		doMAJ();
}

function onModifOuverture(appelInterne) {

	if (apnChoisi.modeDePriorite === 'PrioriteOuverture')
		flagMAJ.calcModePriorite.actif = 1;

	flagMAJ.majOutputSldOuverture.actif = 1;
	flagMAJ.drawVueEXIF.actif = 1;
	flagMAJ.drawVue3D.actif = 1;

	onModifFlouDeMAP(1);
	onModifExposition(1);

	if (!appelInterne)
		doMAJ();
}

function onModifVitesse(appelInterne) {

	if (apnChoisi.modeDePriorite === 'PrioriteVitesse')
		flagMAJ.calcModePriorite.actif = 1;

	flagMAJ.majOutputSldVitesse.actif = 1;
	flagMAJ.drawVueEXIF.actif = 1;

	onModifFlouDeBouge(1);
	onModifExposition(1);

	if (!appelInterne)
		doMAJ();
}

function onModifISO(appelInterne) {

	if (apnChoisi.modeDePriorite !== 'PrioriteManuel')
		flagMAJ.calcModePriorite.actif = 1;

	flagMAJ.majOutputSldISO.actif = 1;
	flagMAJ.calcDynamiqueCourante.actif = 1;
	flagMAJ.drawBruit.actif = 1;
	flagMAJ.drawVueEXIF.actif = 1;

	onModifExposition(1);

	if (!appelInterne)
		doMAJ();
}

function onModifLuminosite(appelInterne) {

	flagMAJ.majOutputLstLuminosite.actif = 1;
	flagMAJ.majOutputSldLuminosite.actif = 1;

	onModifExposition(1);

	if (!appelInterne)
		doMAJ();
}

function onModifDynamiqueDuCapteur(appelInterne) {
	flagMAJ.calcDynamiqueCourante.actif = 1;

	onModifExposition(1);

	if (!appelInterne)
		doMAJ();
}

function onModifLowLightISO(appelInterne) {
	flagMAJ.drawBruit.actif = 1;

	if (!appelInterne)
		doMAJ();
}