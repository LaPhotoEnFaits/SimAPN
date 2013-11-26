function onModifProfondeurPhotographe() {
	calcFlousPlans();
	drawPlans();
	drawFlouBouge();
	drawSol();
	drawGrillePerspective();
	drawFlousEtExpo();
	drawBruit();
	drawVueHistogrammes();
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

	if (photographe.typeDeCdc === 1)
		onModifCdC();
}

function onModifCapteur() {
	setDimensionsCapteur();
	calcCropFactor();
	setFocalesMinMaxChoisie();
	calcTaillePixel();
	calcCdc();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcAnglesDeChamp();
	calcFlousPlans();

	drawVuePhoto();
	drawVueHistogrammes();
}

function onModifCdC() {
	calcCdc();
	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
	drawVueHistogrammes();
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

	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
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

	drawVuePhoto();
	drawVueHistogrammes();
}

function onModifLuminosite() {
	majOutputLstLuminosite();
	majOutputSldLuminosite();

	calcExposition();

	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}