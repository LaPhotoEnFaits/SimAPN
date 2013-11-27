PriseDeVue = function() {
	this.angleChampHorizontal = 0;
	this.angleChampVertical = 0;
	this.distanceDeMAP = 0;
	this.planDeMAP = 1;
	this.vitesseDeSecurite = 0;
	this.cdc = 0;
	this.exposition = 0;
	this.flouDeBouge = 0;
	this.debutDeLaPDC = 0;
	this.finDeLaPDC = 0;
	this.tailleDeLaPDC = 0;
};



function setDistanceDeMAP() {
	if (priseDeVue.planDeMAP !== PLAN_DE_MAP_MANUEL)
		priseDeVue.distanceDeMAP = scene.plans[priseDeVue.planDeMAP].distance;
}


function calcPDC() {

	var focaleEnMetre = objectifChoisi.focale / 1000;
	priseDeVue.debutDeLaPDC = priseDeVue.distanceDeMAP / (1.0 + priseDeVue.cdc * objectifChoisi.ouverture * (priseDeVue.distanceDeMAP - focaleEnMetre) / (focaleEnMetre * focaleEnMetre));
	priseDeVue.finDeLaPDC = priseDeVue.distanceDeMAP / (1.0 - priseDeVue.cdc * objectifChoisi.ouverture * (priseDeVue.distanceDeMAP - focaleEnMetre) / (focaleEnMetre * focaleEnMetre));

	if (priseDeVue.finDeLaPDC < 0) {
		priseDeVue.finDeLaPDC = PDC_INFINIE;
		priseDeVue.tailleDeLaPDC = PDC_INFINIE;
	} else
		priseDeVue.tailleDeLaPDC = priseDeVue.finDeLaPDC - priseDeVue.debutDeLaPDC;
}

function calcAnglesDeChamp() {
	priseDeVue.angleChampHorizontal = 2.0 * Math.atan(apnChoisi.capteurLargeur / (2.0 * objectifChoisi.focale)) * 180.0 / Math.PI;
	priseDeVue.angleChampVertical = 2.0 * Math.atan(apnChoisi.capteurHauteur / (2.0 * objectifChoisi.focale)) * 180.0 / Math.PI;
}

function calcVitesseDeSecurite() {
	if (objectifChoisi.antiVibration)
		priseDeVue.vitesseDeSecurite = 8.0 / (apnChoisi.cropFactor * objectifChoisi.focale * photographe.tremblements);
	else
		priseDeVue.vitesseDeSecurite = 1.0 / (apnChoisi.cropFactor * objectifChoisi.focale * photographe.tremblements);
}

function calcFlouDeBouge() {
	priseDeVue.flouDeBouge = (apnChoisi.vitesse / priseDeVue.vitesseDeSecurite) * priseDeVue.cdc;

	if (photographe.typeDeCdc === 2)
		priseDeVue.flouDeBouge = 10 * priseDeVue.flouDeBouge;
}

function calcCdc() {
	if (photographe.typeDeCdc === 1)
		priseDeVue.cdc = apnChoisi.taillePixel;
	else if (photographe.typeDeCdc === 2) {
		priseDeVue.cdc = 0.5 * (apnChoisi.capteurLargeur / 1000) / vuePhoto.largeur;
	} else {
		var diagonaleCapteur = Math.sqrt((apnChoisi.capteurLargeur * apnChoisi.capteurLargeur + apnChoisi.capteurHauteur * apnChoisi.capteurHauteur) / 1000000);
		priseDeVue.cdc = diagonaleCapteur / photographe.typeDeCdc;
	}
}



function calcFlou(distance) {

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var flou;

	if (distance >= DISTANCE_MIN_SUJET) {
		if (distance < priseDeVue.distanceDeMAP)
			flou = (focaleEnMetre * focaleEnMetre * (priseDeVue.distanceDeMAP - distance)) / (objectifChoisi.ouverture * distance * (priseDeVue.distanceDeMAP - focaleEnMetre));
		else
			flou = (focaleEnMetre * focaleEnMetre * (distance - priseDeVue.distanceDeMAP)) / (objectifChoisi.ouverture * distance * (priseDeVue.distanceDeMAP - focaleEnMetre));
	} else
		flou = 0;

	return {
		flou: flou
	};
}

function calcFlouPlan(numero) {
	scene.plans[numero].flou = calcFlou(scene.plans[numero].distance).flou;
}

function calcFlousPlans() {
	for (var i = 0; i != 4; i++)
		calcFlouPlan(i);
}

function calcExposition() {

	var isoEV;
	var vitesseEV;
	var ouvertureEV;

	switch (apnChoisi.ISO) {
		case 25:
			isoEV = -2;
			break;
		case 32:
			isoEV = -5 / 3;
			break;
		case 40:
			isoEV = -4 / 3;
			break;
		case 50:
			isoEV = -1;
			break;
		case 64:
			isoEV = -2 / 3;
			break;
		case 80:
			isoEV = -1 / 3;
			break;
		case 100:
			isoEV = 0;
			break;
		case 125:
			isoEV = 1 / 3;
			break;
		case 160:
			isoEV = 2 / 3;
			break;
		case 200:
			isoEV = 1;
			break;
		case 250:
			isoEV = 4 / 3;
			break;
		case 320:
			isoEV = 5 / 3;
			break;
		case 400:
			isoEV = 2;
			break;
		case 500:
			isoEV = 7 / 3;
			break;
		case 640:
			isoEV = 8 / 3;
			break;
		case 800:
			isoEV = 3;
			break;
		case 1000:
			isoEV = 10 / 3;
			break;
		case 1250:
			isoEV = 11 / 3;
			break;
		case 1600:
			isoEV = 4;
			break;
		case 2000:
			isoEV = 13 / 3;
			break;
		case 2500:
			isoEV = 14 / 3;
			break;
		case 3200:
			isoEV = 5;
			break;
		case 4000:
			isoEV = 16 / 3;
			break;
		case 5000:
			isoEV = 17 / 3;
			break;
		case 6400:
			isoEV = 6;
			break;
		case 8000:
			isoEV = 19 / 3;
			break;
		case 10000:
			isoEV = 20 / 3;
			break;
		case 12800:
			isoEV = 7;
			break;
		case 16000:
			isoEV = 22 / 3;
			break;
		case 20000:
			isoEV = 23 / 3;
			break;
		case 25600:
			isoEV = 8;
			break;
		case 32000:
			isoEV = 25 / 3;
			break;
		case 40000:
			isoEV = 26 / 3;
			break;
		case 51200:
			isoEV = 9;
			break;
		case 64000:
			isoEV = 28 / 3;
			break;
		case 80000:
			isoEV = 29 / 3;
			break;
		case 102400:
			isoEV = 10;
			break;
		case 128000:
			isoEV = 31 / 3;
			break;
		case 160000:
			isoEV = 32 / 3;
			break;
		case 204800:
			isoEV = 11;
			break;
		case 256000:
			isoEV = 34 / 3;
			break;
		case 320000:
			isoEV = 35 / 3;
			break;
	}
	switch (apnChoisi.vitesse) {
		case 0.000125:
			vitesseEV = -13;
			break;
		case 0.00015625:
			vitesseEV = -38 / 3;
			break;
		case 0.0002:
			vitesseEV = -37 / 3;
			break;
		case 0.00025:
			vitesseEV = -12;
			break;
		case 0.0003125:
			vitesseEV = -35 / 3;
			break;
		case 0.0004:
			vitesseEV = -34 / 3;
			break;
		case 0.0005:
			vitesseEV = -11;
			break;
		case 0.000625:
			vitesseEV = -32 / 3;
			break;
		case 0.0008:
			vitesseEV = -31 / 3;
			break;
		case 0.001:
			vitesseEV = -10;
			break;
		case 0.00125:
			vitesseEV = -29 / 3;
			break;
		case 0.0015625:
			vitesseEV = -28 / 3;
			break;
		case 0.002:
			vitesseEV = -9;
			break;
		case 0.0025:
			vitesseEV = -26 / 3;
			break;
		case 0.003125:
			vitesseEV = -25 / 3;
			break;
		case 0.004:
			vitesseEV = -8;
			break;
		case 0.005:
			vitesseEV = -23 / 3;
			break;
		case 0.00625:
			vitesseEV = -22 / 3;
			break;
		case 0.008:
			vitesseEV = -7;
			break;
		case 0.01:
			vitesseEV = -20 / 3;
			break;
		case 0.0125:
			vitesseEV = -19 / 3;
			break;
		case 0.0166666666666667:
			vitesseEV = -6;
			break;
		case 0.02:
			vitesseEV = -17 / 3;
			break;
		case 0.025:
			vitesseEV = -16 / 3;
			break;
		case 0.0333333333333333:
			vitesseEV = -5;
			break;
		case 0.04:
			vitesseEV = -14 / 3;
			break;
		case 0.05:
			vitesseEV = -13 / 3;
			break;
		case 0.0666666666666667:
			vitesseEV = -4;
			break;
		case 0.0769230769230769:
			vitesseEV = -11 / 3;
			break;
		case 0.1:
			vitesseEV = -10 / 3;
			break;
		case 0.125:
			vitesseEV = -3;
			break;
		case 0.166666666666667:
			vitesseEV = -8 / 3;
			break;
		case 0.2:
			vitesseEV = -7 / 3;
			break;
		case 0.25:
			vitesseEV = -2;
			break;
		case 0.333333333333333:
			vitesseEV = -5 / 3;
			break;
		case 0.4:
			vitesseEV = -4 / 3;
			break;
		case 0.5:
			vitesseEV = -1;
			break;
		case 0.625:
			vitesseEV = -2 / 3;
			break;
		case 0.769230769230769:
			vitesseEV = -1 / 3;
			break;
		case 1:
			vitesseEV = 0;
			break;
		case 1.3:
			vitesseEV = 1 / 3;
			break;
		case 1.6:
			vitesseEV = 2 / 3;
			break;
		case 2:
			vitesseEV = 1;
			break;
		case 2.5:
			vitesseEV = 4 / 3;
			break;
		case 3:
			vitesseEV = 5 / 3;
			break;
		case 4:
			vitesseEV = 2;
			break;
		case 5:
			vitesseEV = 7 / 3;
			break;
		case 6:
			vitesseEV = 8 / 3;
			break;
		case 8:
			vitesseEV = 3;
			break;
		case 10:
			vitesseEV = 10 / 3;
			break;
		case 13:
			vitesseEV = 11 / 3;
			break;
		case 15:
			vitesseEV = 4;
			break;
		case 20:
			vitesseEV = 13 / 3;
			break;
		case 25:
			vitesseEV = 14 / 3;
			break;
		case 30:
			vitesseEV = 5;
			break;
		case 40:
			vitesseEV = 16 / 3;
			break;
		case 50:
			vitesseEV = 17 / 3;
			break;
		case 60:
			vitesseEV = 6;
			break;
	}
	switch (objectifChoisi.ouverture) {
		case 0.7:
			ouvertureEV = 1;
			break;
		case 0.8:
			ouvertureEV = 2 / 3;
			break;
		case 0.9:
			ouvertureEV = 1 / 3;
			break;
		case 1:
			ouvertureEV = 0;
			break;
		case 1.1:
			ouvertureEV = -1 / 3;
			break;
		case 1.2:
			ouvertureEV = -2 / 3;
			break;
		case 1.4:
			ouvertureEV = -1;
			break;
		case 1.6:
			ouvertureEV = -4 / 3;
			break;
		case 1.8:
			ouvertureEV = -5 / 3;
			break;
		case 2:
			ouvertureEV = -2;
			break;
		case 2.2:
			ouvertureEV = -7 / 3;
			break;
		case 2.5:
			ouvertureEV = -8 / 3;
			break;
		case 2.8:
			ouvertureEV = -3;
			break;
		case 3.2:
			ouvertureEV = -10 / 3;
			break;
		case 3.5:
			ouvertureEV = -11 / 3;
			break;
		case 4:
			ouvertureEV = -4;
			break;
		case 4.5:
			ouvertureEV = -13 / 3;
			break;
		case 5:
			ouvertureEV = -14 / 3;
			break;
		case 5.6:
			ouvertureEV = -5;
			break;
		case 6.3:
			ouvertureEV = -16 / 3;
			break;
		case 7.1:
			ouvertureEV = -17 / 3;
			break;
		case 8:
			ouvertureEV = -6;
			break;
		case 9:
			ouvertureEV = -19 / 3;
			break;
		case 10:
			ouvertureEV = -20 / 3;
			break;
		case 11:
			ouvertureEV = -7;
			break;
		case 13:
			ouvertureEV = -22 / 3;
			break;
		case 14:
			ouvertureEV = -23 / 3;
			break;
		case 16:
			ouvertureEV = -8;
			break;
		case 18:
			ouvertureEV = -25 / 3;
			break;
		case 20:
			ouvertureEV = -26 / 3;
			break;
		case 22:
			ouvertureEV = -9;
			break;
		case 25:
			ouvertureEV = -28 / 3;
			break;
		case 29:
			ouvertureEV = -29 / 3;
			break;
		case 32:
			ouvertureEV = -10;
			break;
		case 36:
			ouvertureEV = -31 / 3;
			break;
		case 42:
			ouvertureEV = -32 / 3;
			break;
		case 45:
			ouvertureEV = -11;
			break;
	}

	priseDeVue.exposition = 1.0 * (scene.luminosite + isoEV + vitesseEV + ouvertureEV);
	priseDeVue.exposition = priseDeVue.exposition.toFixed(3);

	if (Math.abs(priseDeVue.exposition) < 0.001)
		priseDeVue.exposition = 0;
}