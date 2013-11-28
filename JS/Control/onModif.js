function onModifDistanceDeMAP() {
	calcFlousPlans();
	calcPDC();
	drawFlousEtExpo();
	drawPlans();
	drawVueHistogrammes();
	drawVueFlouDeMiseAuPoint();
}


function onModifDistancePlan(numeroDuPlan) {

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

	if (priseDeVue.planDeMAP === numeroDuPlan) {
		setDistanceDeMAP();
		onModifDistanceDeMAP();
	} else {
		calcFlouPlan(numeroDuPlan);
		drawFlouEtExpo(numeroDuPlan);
		drawPlan(numeroDuPlan);
		drawVueHistogrammes();
		drawVueFlouDeMiseAuPoint();
	}
}



function onModifProfondeurPhotographe() {
	calcFlousPlans();
	calcPDC();

	drawPlans();
	drawFlouBouge();
	drawSol();
	drawGrillePerspective();
	drawFlousEtExpo();
	drawBruit();
	drawVueHistogrammes();
	drawVueFlouDeMiseAuPoint();
	setDistancesPlans();
}

function onModifHorizontalVerticalPhotographe() {
	drawPlans();
	drawFlouBouge();
	drawSol();
	drawGrillePerspective();
	drawBruit();
	drawVueHistogrammes();
}

function onModifDefinitionCapteur() {
	calcTaillePixel();

	if (photographe.typeDeCdc === 1) {
		calcCdc();
		calcVitesseDeSecurite();
		calcFlouDeBouge();
		calcPDC();

		drawPlans();
		drawFlouBouge();
		drawVueHistogrammes();
	}

	drawVueFlouDeMiseAuPoint();
}

function onModifCapteur() {
	setDimensionsCapteur();
	calcHauteurVuePhoto();
	initVuePhoto();
	calcCropFactor();
	setFocalesMinMaxChoisie();
	calcTaillePixel();
	calcCdc();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcAnglesDeChamp();
	calcFlousPlans();
	calcPDC();

	drawVuePhoto();
	drawVueHistogrammes();
	drawVueFlouDeMiseAuPoint();
}

function onModifCdC() {
	calcCdc();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcPDC();

	drawPlans();
	drawFlouBouge();
	drawVueHistogrammes();
	drawVueFlouDeMiseAuPoint();
}

function onModifAntiVibration() {
	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
	drawVueHistogrammes();
}

function onModifTremblements() {
	majOutputLstTremblements();

	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
	drawVueHistogrammes();
}

function onModifOuverture() {
	majOutputSldOuverture();

	calcFlousPlans();
	calcExposition();
	calcPDC();

	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
	drawVueFlouDeMiseAuPoint();
}

function onModifVitesse() {
	majOutputSldVitesse();

	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcExposition();

	drawPlans();
	drawFlouBouge();
	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}

function onModifISO() {
	majOutputSldISO();

	calcDynamiqueCourante();
	calcExposition();

	drawBruit();
	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}

function onModifFocale() {
	majOutputSldFocale();

	calcAnglesDeChamp();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcFlousPlans();
	calcPDC();

	drawVuePhoto();
	drawVueHistogrammes();
	drawVueFlouDeMiseAuPoint();
}

function onModifLuminosite() {
	majOutputLstLuminosite();
	majOutputSldLuminosite();

	calcExposition();

	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}