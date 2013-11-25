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
}

function onModifCdC(){
	calcCdc();
	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
}

function onModifAntiVibration() {
	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
}

function onModifTremblements() {
	majOutputListeTremblements();

	calcVitesseDeSecurite();
	calcFlouDeBouge();

	drawPlans();
	drawFlouBouge();
}

function onModifOuverture() {
	majOutputSliderOuverture();

	calcFlousPlans();
	calcExposition();

	drawFlousEtExpo();
	drawCurseurExposition();
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
}

function onModifISO() {
	majOutputSliderISO();

	calcDynamiqueCourante();
	calcExposition();

	drawBruit();
	drawFlousEtExpo();
	drawCurseurExposition();
}

function onModifFocale() {
	majOutputSliderFocale();

	calcAnglesDeChamp();
	calcVitesseDeSecurite();
	calcFlouDeBouge();
	calcFlousPlans();

	drawVuePhoto();
}

function onModifLuminosite() {
	majOutputListeLuminosite();

	calcExposition();

	drawFlousEtExpo();
	drawCurseurExposition();
}