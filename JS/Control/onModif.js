function onModifCapteur(){
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

function onModifCdC(){
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
	majOutputListeTremblements();

	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
	drawVueHistogrammes();
}

function onModifOuverture() {
	majOutputSliderOuverture();

	calcFlousPlans();
	calcExposition();

	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}

function onModifVitesse() {
	majOutputSliderVitesse();
	
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
	majOutputSliderISO();

	calcDynamiqueCourante();
	calcExposition();

	drawBruit();
	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}

function onModifFocale() {
	majOutputSliderFocale();

	calcAnglesDeChamp();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcFlousPlans();

	drawVuePhoto();
	drawVueHistogrammes();
}

function onModifLuminosite() {
	majOutputListeLuminosite();

	calcExposition();

	drawFlousEtExpo();
	drawCurseurExposition();
	drawVueHistogrammes();
}