APN = function(marque, modele, gamme, date, prix, capteurFormat, capteurHauteur, capteurLargeur, capteurDefinition, capteurTechno, capteurProfCouleur, capteurDynamique, capteurLowLightISO, ISOmin, ISOmax, ISOboost, ptsAF, FPS, xGross, visee, tropicalisation, viseeElec, tailleEcran, poids, boitierLargeur, boitierHauteur, boitierProfondeur, filtreAntiAliasing) {
	this.marque = marque;
	this.modele = modele;
	this.gamme = gamme;
	this.date = date;
	this.prix = prix;
	this.capteurFormat = capteurFormat;
	this.capteurLargeur = capteurLargeur;
	this.capteurHauteur = capteurHauteur;
	this.capteurDefinition = capteurDefinition;
	this.capteurTechno = capteurTechno;
	this.capteurProfCouleur = capteurProfCouleur;
	this.capteurDynamique = capteurDynamique;
	this.capteurLowLightISO = capteurLowLightISO;
	this.ISOmin = ISOmin;
	this.ISOmax = ISOmax;
	this.ISOboost = ISOboost;
	this.ptsAF = ptsAF;
	this.FPS = FPS;
	this.xGross = xGross;
	this.visee = visee;
	this.tropicalisation = tropicalisation;
	this.viseeElec = viseeElec;
	this.tailleEcran = tailleEcran;
	this.poids = poids;
	this.boitierLargeur = boitierLargeur;
	this.boitierHauteur = boitierHauteur;
	this.boitierProfondeur = boitierProfondeur;
	this.filtreAntiAliasing = filtreAntiAliasing;

	this.vitesse = 0;
	this.ISO = 0;
	this.dynamiqueCourante = 0;
	this.cropFactor = 0;
	this.taillePixel = 0;

	this.typeDeFocus = 'auto';
	this.modeDeFocus = 'AFC';
	this.focusEnCours = 0;

	this.modeDePriorite = 'PrioriteManuel';
};

function vitesse2cpt(vitesseNombre) {

	var cptVitesse;

	switch (vitesseNombre) {
		case 0.000125:
			cptVitesse = 1;
			break;
		case 0.00015625:
			cptVitesse = 2;
			break;
		case 0.0002:
			cptVitesse = 3;
			break;
		case 0.00025:
			cptVitesse = 4;
			break;
		case 0.0003125:
			cptVitesse = 5;
			break;
		case 0.0004:
			cptVitesse = 6;
			break;
		case 0.0005:
			cptVitesse = 7;
			break;
		case 0.000625:
			cptVitesse = 8;
			break;
		case 0.0008:
			cptVitesse = 9;
			break;
		case 0.001:
			cptVitesse = 10;
			break;
		case 0.00125:
			cptVitesse = 11;
			break;
		case 0.0015625:
			cptVitesse = 12;
			break;
		case 0.002:
			cptVitesse = 13;
			break;
		case 0.0025:
			cptVitesse = 14;
			break;
		case 0.003125:
			cptVitesse = 15;
			break;
		case 0.004:
			cptVitesse = 16;
			break;
		case 0.005:
			cptVitesse = 17;
			break;
		case 0.00625:
			cptVitesse = 18;
			break;
		case 0.008:
			cptVitesse = 19;
			break;
		case 0.01:
			cptVitesse = 20;
			break;
		case 0.0125:
			cptVitesse = 21;
			break;
		case 0.0166666666666667:
			cptVitesse = 22;
			break;
		case 0.02:
			cptVitesse = 23;
			break;
		case 0.025:
			cptVitesse = 24;
			break;
		case 0.0333333333333333:
			cptVitesse = 25;
			break;
		case 0.04:
			cptVitesse = 26;
			break;
		case 0.05:
			cptVitesse = 27;
			break;
		case 0.0666666666666667:
			cptVitesse = 28;
			break;
		case 0.0769230769230769:
			cptVitesse = 29;
			break;
		case 0.1:
			cptVitesse = 30;
			break;
		case 0.125:
			cptVitesse = 31;
			break;
		case 0.166666666666667:
			cptVitesse = 32;
			break;
		case 0.2:
			cptVitesse = 33;
			break;
		case 0.25:
			cptVitesse = 34;
			break;
		case 0.333333333333333:
			cptVitesse = 35;
			break;
		case 0.4:
			cptVitesse = 36;
			break;
		case 0.5:
			cptVitesse = 37;
			break;
		case 0.625:
			cptVitesse = 38;
			break;
		case 0.769230769230769:
			cptVitesse = 39;
			break;
		case 1:
			cptVitesse = 40;
			break;
		case 1.3:
			cptVitesse = 41;
			break;
		case 1.6:
			cptVitesse = 42;
			break;
		case 2:
			cptVitesse = 43;
			break;
		case 2.5:
			cptVitesse = 44;
			break;
		case 3:
			cptVitesse = 45;
			break;
		case 4:
			cptVitesse = 46;
			break;
		case 5:
			cptVitesse = 47;
			break;
		case 6:
			cptVitesse = 48;
			break;
		case 8:
			cptVitesse = 49;
			break;
		case 10:
			cptVitesse = 50;
			break;
		case 13:
			cptVitesse = 51;
			break;
		case 15:
			cptVitesse = 52;
			break;
		case 20:
			cptVitesse = 53;
			break;
		case 25:
			cptVitesse = 54;
			break;
		case 30:
			cptVitesse = 55;
			break;
		case 40:
			cptVitesse = 56;
			break;
		case 50:
			cptVitesse = 57;
			break;
		case 60:
			cptVitesse = 58;
			break;
	}

	return {
		cpt: cptVitesse
	};
}

function cpt2vitesse(cpt) {

	var vitesseString;
	var vitesseNombre;

	switch (cpt) {

		case 1:
			vitesseString = '1/8000';
			vitesseNombre = 0.000125;
			break;
		case 2:
			vitesseString = '1/6400';
			vitesseNombre = 0.00015625;
			break;
		case 3:
			vitesseString = '1/5000';
			vitesseNombre = 0.0002;
			break;
		case 4:
			vitesseString = '1/4000';
			vitesseNombre = 0.00025;
			break;
		case 5:
			vitesseString = '1/3200';
			vitesseNombre = 0.0003125;
			break;
		case 6:
			vitesseString = '1/2500';
			vitesseNombre = 0.0004;
			break;
		case 7:
			vitesseString = '1/2000';
			vitesseNombre = 0.0005;
			break;
		case 8:
			vitesseString = '1/1600';
			vitesseNombre = 0.000625;
			break;
		case 9:
			vitesseString = '1/1250';
			vitesseNombre = 0.0008;
			break;
		case 10:
			vitesseString = '1/1000';
			vitesseNombre = 0.001;
			break;
		case 11:
			vitesseString = '1/800';
			vitesseNombre = 0.00125;
			break;
		case 12:
			vitesseString = '1/640';
			vitesseNombre = 0.0015625;
			break;
		case 13:
			vitesseString = '1/500';
			vitesseNombre = 0.002;
			break;
		case 14:
			vitesseString = '1/400';
			vitesseNombre = 0.0025;
			break;
		case 15:
			vitesseString = '1/320';
			vitesseNombre = 0.003125;
			break;
		case 16:
			vitesseString = '1/250';
			vitesseNombre = 0.004;
			break;
		case 17:
			vitesseString = '1/200';
			vitesseNombre = 0.005;
			break;
		case 18:
			vitesseString = '1/160';
			vitesseNombre = 0.00625;
			break;
		case 19:
			vitesseString = '1/125';
			vitesseNombre = 0.008;
			break;
		case 20:
			vitesseString = '1/100';
			vitesseNombre = 0.01;
			break;
		case 21:
			vitesseString = '1/80';
			vitesseNombre = 0.0125;
			break;
		case 22:
			vitesseString = '1/60';
			vitesseNombre = 0.0166666666666667;
			break;
		case 23:
			vitesseString = '1/50';
			vitesseNombre = 0.02;
			break;
		case 24:
			vitesseString = '1/40';
			vitesseNombre = 0.025;
			break;
		case 25:
			vitesseString = '1/30';
			vitesseNombre = 0.0333333333333333;
			break;
		case 26:
			vitesseString = '1/25';
			vitesseNombre = 0.04;
			break;
		case 27:
			vitesseString = '1/20';
			vitesseNombre = 0.05;
			break;
		case 28:
			vitesseString = '1/15';
			vitesseNombre = 0.0666666666666667;
			break;
		case 29:
			vitesseString = '1/13';
			vitesseNombre = 0.0769230769230769;
			break;
		case 30:
			vitesseString = '1/10';
			vitesseNombre = 0.1;
			break;
		case 31:
			vitesseString = '1/8';
			vitesseNombre = 0.125;
			break;
		case 32:
			vitesseString = '1/6';
			vitesseNombre = 0.166666666666667;
			break;
		case 33:
			vitesseString = '1/5';
			vitesseNombre = 0.2;
			break;
		case 34:
			vitesseString = '1/4';
			vitesseNombre = 0.25;
			break;
		case 35:
			vitesseString = '1/3';
			vitesseNombre = 0.333333333333333;
			break;
		case 36:
			vitesseString = '1/2.5';
			vitesseNombre = 0.4;
			break;
		case 37:
			vitesseString = '1/2';
			vitesseNombre = 0.5;
			break;
		case 38:
			vitesseString = '1/1.6';
			vitesseNombre = 0.625;
			break;
		case 39:
			vitesseString = '1/1.3';
			vitesseNombre = 0.769230769230769;
			break;
		case 40:
			vitesseString = '1"';
			vitesseNombre = 1;
			break;
		case 41:
			vitesseString = '1.3"';
			vitesseNombre = 1.3;
			break;
		case 42:
			vitesseString = '1.6"';
			vitesseNombre = 1.6;
			break;
		case 43:
			vitesseString = '2"';
			vitesseNombre = 2;
			break;
		case 44:
			vitesseString = '2.5"';
			vitesseNombre = 2.5;
			break;
		case 45:
			vitesseString = '3"';
			vitesseNombre = 3;
			break;
		case 46:
			vitesseString = '4"';
			vitesseNombre = 4;
			break;
		case 47:
			vitesseString = '5"';
			vitesseNombre = 5;
			break;
		case 48:
			vitesseString = '6"';
			vitesseNombre = 6;
			break;
		case 49:
			vitesseString = '8"';
			vitesseNombre = 8;
			break;
		case 50:
			vitesseString = '10"';
			vitesseNombre = 10;
			break;
		case 51:
			vitesseString = '13"';
			vitesseNombre = 13;
			break;
		case 52:
			vitesseString = '15"';
			vitesseNombre = 15;
			break;
		case 53:
			vitesseString = '20"';
			vitesseNombre = 20;
			break;
		case 54:
			vitesseString = '25"';
			vitesseNombre = 25;
			break;
		case 55:
			vitesseString = '30"';
			vitesseNombre = 30;
			break;
		case 56:
			vitesseString = '40"';
			vitesseNombre = 40;
			break;
		case 57:
			vitesseString = '50"';
			vitesseNombre = 50;
			break;
		case 58:
			vitesseString = '60"';
			vitesseNombre = 60;
			break;
	}

	return {
		vitesseString: vitesseString,
		vitesseNombre: vitesseNombre
	};
}

function cpt2ISO(cpt) {

	var ISO;

	switch (cpt) {
		case 1:
			ISO = 25;
			break;
		case 2:
			ISO = 32;
			break;
		case 3:
			ISO = 40;
			break;
		case 4:
			ISO = 50;
			break;
		case 5:
			ISO = 64;
			break;
		case 6:
			ISO = 80;
			break;
		case 7:
			ISO = 100;
			break;
		case 8:
			ISO = 125;
			break;
		case 9:
			ISO = 160;
			break;
		case 10:
			ISO = 200;
			break;
		case 11:
			ISO = 250;
			break;
		case 12:
			ISO = 320;
			break;
		case 13:
			ISO = 400;
			break;
		case 14:
			ISO = 500;
			break;
		case 15:
			ISO = 640;
			break;
		case 16:
			ISO = 800;
			break;
		case 17:
			ISO = 1000;
			break;
		case 18:
			ISO = 1250;
			break;
		case 19:
			ISO = 1600;
			break;
		case 20:
			ISO = 2000;
			break;
		case 21:
			ISO = 2500;
			break;
		case 22:
			ISO = 3200;
			break;
		case 23:
			ISO = 4000;
			break;
		case 24:
			ISO = 5000;
			break;
		case 25:
			ISO = 6400;
			break;
		case 26:
			ISO = 8000;
			break;
		case 27:
			ISO = 10000;
			break;
		case 28:
			ISO = 12800;
			break;
		case 29:
			ISO = 16000;
			break;
		case 30:
			ISO = 20000;
			break;
		case 31:
			ISO = 25600;
			break;
		case 32:
			ISO = 32000;
			break;
		case 33:
			ISO = 40000;
			break;
		case 34:
			ISO = 51200;
			break;
		case 35:
			ISO = 64000;
			break;
		case 36:
			ISO = 80000;
			break;
		case 37:
			ISO = 102400;
			break;
		case 38:
			ISO = 128000;
			break;
		case 39:
			ISO = 160000;
			break;
		case 40:
			ISO = 204800;
			break;
		case 41:
			ISO = 256000;
			break;
		case 42:
			ISO = 320000;
			break;
	}
	return {
		ISO: ISO
	};
}

function ISO2cpt(ISO) {

	var cpt;

	switch (ISO) {
		case 25:
			cpt = 1;
			break;
		case 32:
			cpt = 2;
			break;
		case 40:
			cpt = 3;
			break;
		case 50:
			cpt = 4;
			break;
		case 64:
			cpt = 5;
			break;
		case 80:
			cpt = 6;
			break;
		case 100:
			cpt = 7;
			break;
		case 125:
			cpt = 8;
			break;
		case 160:
			cpt = 9;
			break;
		case 200:
			cpt = 10;
			break;
		case 250:
			cpt = 11;
			break;
		case 320:
			cpt = 12;
			break;
		case 400:
			cpt = 13;
			break;
		case 500:
			cpt = 14;
			break;
		case 640:
			cpt = 15;
			break;
		case 800:
			cpt = 16;
			break;
		case 1000:
			cpt = 17;
			break;
		case 1250:
			cpt = 18;
			break;
		case 1600:
			cpt = 19;
			break;
		case 2000:
			cpt = 20;
			break;
		case 2500:
			cpt = 21;
			break;
		case 3200:
			cpt = 22;
			break;
		case 4000:
			cpt = 23;
			break;
		case 5000:
			cpt = 24;
			break;
		case 6400:
			cpt = 25;
			break;
		case 8000:
			cpt = 26;
			break;
		case 10000:
			cpt = 27;
			break;
		case 12800:
			cpt = 28;
			break;
		case 16000:
			cpt = 29;
			break;
		case 20000:
			cpt = 30;
			break;
		case 25600:
			cpt = 31;
			break;
		case 32000:
			cpt = 32;
			break;
		case 40000:
			cpt = 33;
			break;
		case 51200:
			cpt = 34;
			break;
		case 64000:
			cpt = 35;
			break;
		case 80000:
			cpt = 36;
			break;
		case 102400:
			cpt = 37;
			break;
		case 128000:
			cpt = 38;
			break;
		case 160000:
			cpt = 39;
			break;
		case 204800:
			cpt = 40;
			break;
		case 256000:
			cpt = 41;
			break;
		case 320000:
			cpt = 42;
			break;
	}

	return {
		cpt: cpt
	};
}

function setDimensionsCapteur() {
	switch (apnChoisi.capteurFormat) {

		case "1/3.2":
			apnChoisi.capteurLargeur = 4.54;
			apnChoisi.capteurHauteur = 3.42;
			break;

		case "1/2.3":
			apnChoisi.capteurLargeur = 5.1;
			apnChoisi.capteurHauteur = 3.8;
			break;
		case "1/1.8":
			apnChoisi.capteurLargeur = 7.1;
			apnChoisi.capteurHauteur = 5.3;
			break;
		case "1/1.7":
			apnChoisi.capteurLargeur = 7.5;
			apnChoisi.capteurHauteur = 5.6;
			break;
		case "1/1.6":
			apnChoisi.capteurLargeur = 8;
			apnChoisi.capteurHauteur = 6;
			break;
		case "2/3":
			apnChoisi.capteurLargeur = 8.8;
			apnChoisi.capteurHauteur = 6.6;
			break;
		case "CX":
			apnChoisi.capteurLargeur = 13.2;
			apnChoisi.capteurHauteur = 8.8;
			break;
		case "4/3":
			apnChoisi.capteurLargeur = 17.8;
			apnChoisi.capteurHauteur = 13.4;
			break;
		case "aps-c":
			apnChoisi.capteurLargeur = 23.4;
			apnChoisi.capteurHauteur = 15.6;
			break;
		case "aps-h":
			apnChoisi.capteurLargeur = 28.7;
			apnChoisi.capteurHauteur = 19.1;
			break;
		case "full-frame":
			apnChoisi.capteurLargeur = 36;
			apnChoisi.capteurHauteur = 24;
			break;
	}
}

function calcCropFactor() {
	var diagonaleCapteur = Math.sqrt((apnChoisi.capteurLargeur * apnChoisi.capteurLargeur + apnChoisi.capteurHauteur * apnChoisi.capteurHauteur) / 1000000);
	var diagonaleCapteurFF = Math.sqrt(0.036 * 0.036 + 0.024 * 0.024);
	apnChoisi.cropFactor = diagonaleCapteurFF / diagonaleCapteur;
}

function calcDynamiqueCourante() {
	if (apnChoisi.ISO > 100) {
		apnChoisi.dynamiqueCourante = apnChoisi.capteurDynamique - (ISO2cpt(apnChoisi.ISO).cpt - 7) / 3;
		if (apnChoisi.dynamiqueCourante < 0)
			apnChoisi.dynamiqueCourante = 0;
	} else
		apnChoisi.dynamiqueCourante = apnChoisi.capteurDynamique;
}

function calcTaillePixel() {
	var temp = apnChoisi.capteurLargeur * apnChoisi.capteurHauteur;
	temp = temp / (1000 * 1000);
	temp = temp / (apnChoisi.capteurDefinition * 1000000);
	apnChoisi.taillePixel = Math.sqrt(temp);
}