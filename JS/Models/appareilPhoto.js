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

	this.numeroAPNExistant='X';
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

function createListeAPN() {

	listeAPN[0] = new APN('Canon', '1000D', 'Débutant', '2008/06/10', 449, 'aps-c', 14.8, 22.2, 10.1, 'CMOS', 22, 10.9, 719, 100, 1600, 0, 7, 3, 0.81, 95, 0, 0, 2.5, 450, 126, 98, 62, 1);
	listeAPN[1] = new APN('Canon', '100D', 'Débutant', '2013/03/21', 649, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 21.8, 11.3, 843, 100, 12800, 25600, 9, 4, 0.87, 95, 0, 0, 3, 407, 117, 91, 69, 1);
	listeAPN[2] = new APN('Canon', '10D', 'Enthousiaste', '2003/02/27', 2199, 'aps-c', 15.1, 22.7, 6.3, 'CMOS', 21.1, 10.9, 571, 100, 1600, 3200, 7, 3, 0.88, 95, 0, 0, 1.8, 790, 150, 108, 75, 1);
	listeAPN[3] = new APN('Canon', '1100D', 'Débutant', '2011/02/07', 449, 'aps-c', 14.8, 22.2, 12.2, 'CMOS', 21.9, 11, 755, 100, 6400, 0, 9, 3, 0.87, 95, 0, 0, 2.7, 495, 130, 100, 78, 1);
	listeAPN[4] = new APN('Canon', '1D', 'Pro', '2001/01/01', 5999, 'aps-h', 19.1, 28.7, 4.1, 'CCD', 0, 0, 0, 200, 1600, 3200, 45, 8, 0.72, 100, 1, 0, 2, 1250, 156, 158, 80, 1);
	listeAPN[5] = new APN('Canon', '1D-C', 'Pro', '2012/04/12', 9999, 'full-frame', 24, 36, 18.1, 'CMOS', 0, 0, 0, 100, 51200, 204800, 61, 12, 0.76, 100, 1, 0, 3.2, 1340, 158, 164, 83, 1);
	listeAPN[6] = new APN('Canon', '1DMarkII', 'Pro', '2004/01/29', 4599, 'aps-h', 19.1, 28.7, 8.2, 'CMOS', 22.3, 11.1, 1003, 100, 1600, 3200, 45, 8.5, 0.72, 100, 0, 0, 2, 1220, 156, 158, 80, 1);
	listeAPN[7] = new APN('Canon', '1DMarkIII', 'Pro', '2007/02/22', 3999, 'aps-h', 18.7, 28.7, 10.1, 'CMOS', 22.7, 11.7, 1078, 100, 3200, 6400, 19, 10, 0.76, 100, 1, 0, 3, 1155, 156, 157, 80, 1);
	listeAPN[8] = new APN('Canon', '1DMarkIIN', 'Pro', '2005/08/22', 4499, 'aps-h', 19.1, 28.7, 8.2, 'CMOS', 22.3, 11.2, 975, 100, 1600, 3200, 45, 8.5, 0.72, 100, 0, 0, 2.5, 1225, 156, 158, 80, 1);
	listeAPN[9] = new APN('Canon', '1DMarkIV', 'Pro', '2009/10/20', 4599, 'aps-h', 18.6, 27.9, 16.1, 'CMOS', 22.8, 12, 1320, 100, 12800, 102400, 45, 10, 0.76, 100, 1, 0, 3, 1180, 156, 157, 80, 1);
	listeAPN[10] = new APN('Canon', '1Ds', 'Pro', '2002/09/24', 7999, 'full-frame', 23.8, 35.8, 11.4, 'CMOS', 21.8, 11, 954, 100, 1250, 0, 45, 3, 0.7, 100, 0, 0, 2, 1265, 156, 158, 80, 1);
	listeAPN[11] = new APN('Canon', '1DsMarkII', 'Pro', '2004/09/21', 7999, 'full-frame', 24, 36, 16.7, 'CMOS', 23.3, 11.3, 1480, 100, 1600, 3200, 45, 4.5, 0.7, 100, 1, 0, 2, 1215, 156, 158, 80, 1);
	listeAPN[12] = new APN('Canon', '1DsMarkIII', 'Pro', '2007/08/20', 7999, 'full-frame', 24, 36, 21.1, 'CMOS', 24, 12, 1663, 100, 1600, 3200, 45, 5, 0.76, 100, 1, 0, 3, 1205, 156, 160, 80, 1);
	listeAPN[13] = new APN('Canon', '1D-X', 'Pro', '2011/10/18', 8649, 'full-frame', 24, 36, 18.1, 'CMOS', 23.8, 11.8, 2786, 100, 51200, 102400, 61, 12, 0.76, 100, 1, 0, 3.2, 1340, 158, 164, 83, 1);
	listeAPN[14] = new APN('Canon', '20D', 'Enthousiaste', '2004/08/19', 1779, 'aps-c', 15, 22.5, 8.2, 'CMOS', 21.9, 11, 721, 100, 1600, 3200, 9, 5, 0.9, 95, 0, 0, 1.8, 685, 144, 106, 72, 1);
	listeAPN[15] = new APN('Canon', '20Da', 'Astro', '2005/06/01', 2549, 'aps-c', 15, 22.5, 8.2, 'CMOS', 0, 0, 0, 100, 1600, 3200, 9, 5, 0.9, 95, 0, 0, 1.8, 685, 144, 106, 72, 1);
	listeAPN[16] = new APN('Canon', '300D', 'Amateur', '2003/08/20', 899, 'aps-c', 15.1, 22.7, 6.3, 'CMOS', 21, 10.8, 544, 100, 1600, 0, 7, 2.5, 0.8, 95, 0, 0, 1.8, 560, 142, 99, 73, 1);
	listeAPN[17] = new APN('Canon', '30D', 'Enthousiaste', '2006/02/21', 1549, 'aps-c', 15, 22.5, 8.2, 'CMOS', 21.5, 10.8, 736, 100, 1600, 3200, 9, 5, 0.9, 95, 0, 0, 2.5, 700, 144, 106, 74, 1);
	listeAPN[18] = new APN('Canon', '350D', 'Amateur', '2005/02/17', 999, 'aps-c', 14.8, 22.2, 8.0, 'CMOS', 21.8, 10.8, 637, 100, 1600, 0, 7, 3, 0.8, 95, 0, 0, 1.8, 485, 127, 94, 64, 1);
	listeAPN[19] = new APN('Canon', '400D', 'Amateur', '2006/08/24', 799, 'aps-c', 14.8, 22.2, 10.1, 'CMOS', 22.1, 11, 664, 100, 1600, 0, 9, 3, 0.8, 95, 0, 0, 2.5, 510, 127, 94, 65, 1);
	listeAPN[20] = new APN('Canon', '40D', 'Enthousiaste', '2007/08/20', 1349, 'aps-c', 14.8, 22.2, 10.1, 'CMOS', 22.1, 11.3, 703, 100, 1600, 3200, 9, 3, 0.95, 95, 0, 0, 3, 740, 146, 108, 74, 1);
	listeAPN[21] = new APN('Canon', '450D', 'Amateur', '2008/01/24', 489, 'aps-c', 14.8, 22.2, 12.2, 'CMOS', 21.9, 10.8, 692, 100, 1600, 0, 9, 3.5, 0.87, 95, 0, 0, 3, 475, 129, 98, 62, 1);
	listeAPN[22] = new APN('Canon', '500D', 'Amateur', '2009/03/25', 899, 'aps-c', 14.9, 22.3, 15.1, 'CMOS', 21.7, 11.5, 663, 100, 3200, 12800, 9, 3.4, 0.87, 95, 0, 0, 3, 480, 129, 98, 62, 1);
	listeAPN[23] = new APN('Canon', '50D', 'Enthousiaste', '2008/08/26', 1499, 'aps-c', 14.9, 22.3, 15.1, 'CMOS', 21.8, 11.4, 696, 100, 3200, 12800, 9, 3, 0.95, 95, 1, 0, 3, 730, 146, 108, 74, 1);
	listeAPN[24] = new APN('Canon', '550D', 'Amateur', '2010/02/26', 799, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 22.1, 11.5, 784, 100, 6400, 12800, 9, 3.7, 0.87, 95, 0, 0, 3, 530, 129, 98, 62, 1);
	listeAPN[25] = new APN('Canon', '5D', 'Expert', '2005/08/22', 3699, 'full-frame', 23.8, 35.8, 12.8, 'CMOS', 22.9, 11.1, 1368, 100, 1600, 3200, 9, 3, 0.71, 96, 1, 0, 2.5, 810, 152, 113, 75, 1);
	listeAPN[26] = new APN('Canon', '5DMarkII', 'Expert', '2008/09/17', 2960, 'full-frame', 24, 36, 21.1, 'CMOS', 23.7, 11.9, 1815, 100, 6400, 25600, 9, 3.9, 0.71, 98, 1, 0, 3, 810, 152, 114, 75, 1);
	listeAPN[27] = new APN('Canon', '5DMarkIII', 'Expert', '2012/03/02', 3299, 'full-frame', 24, 36, 22.3, 'CMOS', 24, 11.7, 2293, 100, 25600, 102400, 61, 6, 0.71, 100, 1, 0, 3.2, 860, 152, 116, 76, 1);
	listeAPN[28] = new APN('Canon', '600D', 'Amateur', '2011/02/07', 799, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 22.1, 11.5, 793, 100, 6400, 12800, 9, 3.7, 0.85, 95, 0, 0, 3, 560, 133, 100, 80, 1);
	listeAPN[29] = new APN('Canon', '60D', 'Enthousiaste', '2010/08/26', 1199, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 22.2, 11.5, 813, 100, 6400, 12800, 9, 5.3, 0.95, 96, 1, 0, 3, 675, 144, 106, 79, 1);
	listeAPN[30] = new APN('Canon', '60Da', 'Astro', '2012/04/03', 1499, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 0, 0, 0, 100, 6400, 12800, 9, 5.3, 0.95, 96, 1, 0, 3, 675, 146, 106, 79, 1);
	listeAPN[31] = new APN('Canon', '650D', 'Amateur', '2012/06/08', 849, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 21.7, 11.2, 722, 100, 12800, 25600, 9, 5, 0.85, 95, 0, 0, 3, 520, 133, 100, 80, 1);
	listeAPN[32] = new APN('Canon', '6D', 'Enthousiaste', '2012/09/17', 2099, 'full-frame', 23.9, 35.8, 20.2, 'CMOS', 23.8, 12.1, 2340, 100, 25600, 102400, 11, 4.5, 0.71, 97, 1, 0, 3, 680, 145, 111, 71, 1);
	listeAPN[33] = new APN('Canon', '700D', 'Amateur', '2011/03/21', 749, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 21.7, 11.2, 681, 100, 12800, 25600, 9, 5, 0.85, 95, 0, 0, 3, 580, 133, 100, 79, 1);
	listeAPN[34] = new APN('Canon', '70D', 'Enthousiaste', '2013/07/02', 1199, 'aps-c', 15, 22.5, 19.6, 'CMOS', 0, 0, 0, 100, 12800, 25600, 19, 7, 0.95, 98, 0, 0, 3, 755, 139, 104, 79, 1);
	listeAPN[35] = new APN('Canon', '7D', 'Expert', '2009/09/01', 1799, 'aps-c', 14.9, 22.3, 18.0, 'CMOS', 22, 11.7, 854, 100, 6400, 12800, 19, 8, 1, 100, 1, 0, 3, 820, 148, 111, 76, 1);
	listeAPN[36] = new APN('Canon', 'D30', 'Enthousiaste', '2000/05/17', 2799, 'aps-c', 15.1, 22.7, 3.1, 'CMOS', 0, 0, 0, 100, 1600, 0, 3, 3, 0.88, 95, 0, 0, 1.8, 750, 150, 107, 75, 1);
	listeAPN[37] = new APN('Canon', 'D60', 'Enthousiaste', '2002/03/01', 2199, 'aps-c', 15.1, 22.7, 6.3, 'CMOS', 0, 0, 0, 100, 1000, 0, 3, 3, 0.88, 95, 0, 0, 1.8, 780, 150, 107, 75, 1);
	listeAPN[38] = new APN('Nikon', 'D1', 'Pro', '1999/02/01', 5200, 'aps-c', 15.5, 23.7, 2.6, 'CCD', 0, 0, 0, 200, 1600, 0, 5, 4.5, 0.8, 96, 0, 0, 2, 1100, 157, 153, 85, 1);
	listeAPN[39] = new APN('Nikon', 'D100', 'Expert', '2002/02/01', 1999, 'aps-c', 15.5, 23.7, 6.0, 'CCD', 0, 0, 0, 200, 1600, 6400, 5, 3, 0.8, 95, 0, 0, 1.8, 730, 144, 116, 81, 1);
	listeAPN[40] = new APN('Nikon', 'D1H', 'Pro', '2001/02/01', 4000, 'aps-c', 15.5, 23.7, 2.6, 'CCD', 0, 0, 0, 200, 1600, 0, 5, 5, 0.8, 96, 0, 0, 2, 1100, 157, 153, 85, 1);
	listeAPN[41] = new APN('Nikon', 'D1X', 'Pro', '2001/02/01', 7500, 'aps-c', 15.5, 23.7, 5.3, 'CCD', 0, 0, 0, 125, 800, 0, 5, 3, 0.8, 96, 0, 0, 2, 1100, 157, 153, 85, 1);
	listeAPN[42] = new APN('Nikon', 'D200', 'Expert', '2005/11/01', 1999, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.3, 11.5, 583, 100, 1600, 3200, 11, 5, 0.94, 95, 1, 0, 2.5, 830, 147, 113, 74, 1);
	listeAPN[43] = new APN('Nikon', 'D2H', 'Pro', '2003/07/22', 4199, 'aps-c', 15.5, 23.7, 4.0, 'JFET', 18.9, 10, 352, 200, 1600, 0, 11, 8, 0.86, 100, 0, 0, 2.5, 1070, 158, 150, 86, 1);
	listeAPN[44] = new APN('Nikon', 'D2Hs', 'Pro', '2005/02/01', 3200, 'aps-c', 15.4, 23.2, 4.1, 'JFET', 0, 0, 0, 200, 1600, 0, 11, 8, 0.86, 100, 1, 0, 2.5, 1070, 158, 150, 86, 1);
	listeAPN[45] = new APN('Nikon', 'D2X', 'Pro', '2004/09/16', 5199, 'aps-c', 15.5, 23.7, 12.2, 'CMOS', 22.1, 10.9, 476, 100, 800, 3200, 11, 5, 0.86, 100, 0, 0, 2.5, 1070, 158, 150, 86, 1);
	listeAPN[46] = new APN('Nikon', 'D2Xs', 'Pro', '2006/06/01', 4999, 'aps-c', 15.7, 23.7, 12.4, 'CMOS', 22.2, 10.9, 489, 100, 800, 3200, 11, 5, 0.86, 100, 0, 0, 2.5, 1070, 158, 150, 86, 1);
	listeAPN[47] = new APN('Nikon', 'D3', 'Pro', '2007/08/23', 4999, 'full-frame', 23.9, 36, 12.1, 'CMOS', 23.5, 12.2, 2290, 200, 6400, 25600, 51, 9, 0.7, 100, 1, 0, 3, 1240, 160, 157, 88, 1);
	listeAPN[48] = new APN('Nikon', 'D300', 'Expert', '2007/08/23', 1899, 'aps-c', 15.8, 23.6, 12.3, 'CMOS', 22.1, 12, 679, 200, 3200, 6400, 51, 6, 0.94, 100, 1, 0, 3, 825, 147, 114, 74, 1);
	listeAPN[49] = new APN('Nikon', 'D3000', 'Débutant', '2009/04/14', 439, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.3, 11.1, 563, 100, 1600, 3200, 11, 3, 0.8, 95, 0, 0, 3, 485, 126, 97, 65, 1);
	listeAPN[50] = new APN('Nikon', 'D300s', 'Expert', '2009/07/30', 1749, 'aps-c', 15.8, 23.6, 12.3, 'CMOS', 22.5, 12.2, 787, 200, 3200, 6400, 51, 7, 0.94, 100, 1, 0, 3, 840, 147, 114, 74, 1);
	listeAPN[51] = new APN('Nikon', 'D3100', 'Débutant', '2010/10/01', 579, 'aps-c', 15.4, 23.1, 14.2, 'CMOS', 22.5, 11.3, 919, 100, 3200, 12800, 11, 3, 0.8, 95, 0, 0, 3, 455, 124, 96, 77, 1);
	listeAPN[52] = new APN('Nikon', 'D3200', 'Débutant', '2012/04/19', 629, 'aps-c', 15.4, 23.2, 24.2, 'CMOS', 24.1, 13.2, 1131, 100, 6400, 12800, 11, 4, 0.8, 95, 0, 0, 3, 455, 125, 96, 77, 1);
	listeAPN[53] = new APN('Nikon', 'D3S', 'Pro', '2009/10/14', 5199, 'full-frame', 23.9, 36, 12.1, 'CMOS', 23.5, 12, 3253, 200, 12800, 102400, 51, 9, 0.7, 100, 1, 0, 3, 1240, 160, 157, 88, 1);
	listeAPN[54] = new APN('Nikon', 'D3X', 'Pro', '2008/12/01', 7499, 'full-frame', 23.9, 36, 24.5, 'CMOS', 24.7, 13.7, 1192, 100, 1600, 6400, 51, 5, 0.7, 100, 1, 0, 3, 1220, 160, 157, 88, 1);
	listeAPN[55] = new APN('Nikon', 'D4', 'Pro', '2012/01/06', 5999, 'full-frame', 23.9, 36, 16.2, 'CMOS', 24.7, 13.1, 2965, 100, 12800, 204800, 51, 10, 0.7, 100, 1, 0, 3.2, 1180, 160, 157, 91, 1);
	listeAPN[56] = new APN('Nikon', 'D40', 'Débutant', '2006/11/16', 499, 'aps-c', 15.6, 23.7, 6.1, 'CCD', 21, 11, 561, 200, 1600, 3200, 3, 2.5, 0.8, 95, 0, 0, 2.5, 475, 126, 94, 64, 1);
	listeAPN[57] = new APN('Nikon', 'D40x', 'Débutant', '2007/03/06', 599, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.4, 11.4, 516, 100, 1600, 3200, 3, 3, 0.8, 95, 0, 0, 2.5, 475, 126, 94, 64, 1);
	listeAPN[58] = new APN('Nikon', 'D50', 'Amateur', '2005/04/20', 799, 'aps-c', 15.6, 23.7, 6.1, 'CCD', 20.9, 10.8, 560, 200, 1600, 0, 5, 2.5, 0.75, 95, 0, 0, 2, 544, 133, 102, 76, 1);
	listeAPN[59] = new APN('Nikon', 'D5000', 'Amateur', '2009/04/14', 649, 'aps-c', 15.8, 23.6, 12.3, 'CMOS', 22.7, 12.5, 868, 200, 3200, 6400, 11, 4, 0.78, 95, 0, 0, 2.7, 560, 127, 104, 80, 1);
	listeAPN[60] = new APN('Nikon', 'D5100', 'Amateur', '2011/04/05', 699, 'aps-c', 15.6, 23.6, 16.2, 'CMOS', 23.5, 13.6, 1183, 100, 6400, 102400, 11, 4, 0.78, 95, 0, 0, 3, 510, 128, 97, 79, 1);
	listeAPN[61] = new APN('Nikon', 'D5200', 'Amateur', '2012/11/06', 809, 'aps-c', 15.6, 23.5, 24.1, 'CMOS', 24.2, 13.9, 1284, 100, 6400, 25600, 39, 5, 0.78, 95, 0, 0, 3, 505, 129, 98, 78, 1);
	listeAPN[62] = new APN('Nikon', 'D60', 'Débutant', '2008/01/29', 449, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.5, 11.4, 562, 100, 1600, 3200, 3, 3, 0.8, 95, 0, 0, 2.5, 495, 126, 94, 64, 1);
	listeAPN[63] = new APN('Nikon', 'D600', 'Enthousiaste', '2012/09/13', 2099, 'full-frame', 24, 35.9, 24.3, 'CMOS', 25.1, 14.2, 2980, 100, 6400, 25600, 39, 5.5, 0.7, 100, 1, 0, 3.2, 760, 141, 113, 82, 1);
	listeAPN[64] = new APN('Nikon', 'D70', 'Enthousiaste', '2004/01/28', 999, 'aps-c', 15.6, 23.7, 6.1, 'CCD', 20.4, 10.3, 529, 200, 1600, 0, 5, 3, 0.75, 95, 0, 0, 1.8, 595, 140, 111, 78, 1);
	listeAPN[65] = new APN('Nikon', 'D700', 'Expert', '2008/07/01', 2799, 'full-frame', 23.9, 36, 12.1, 'CMOS', 23.5, 12.2, 2303, 200, 6400, 25600, 51, 5, 0.72, 95, 1, 0, 3, 995, 147, 123, 77, 1);
	listeAPN[66] = new APN('Nikon', 'D7000', 'Enthousiaste', '2010/09/15', 1249, 'aps-c', 15.6, 23.6, 16.2, 'CMOS', 23.5, 13.9, 1167, 100, 6400, 25600, 39, 6, 0.94, 100, 1, 0, 3, 690, 132, 105, 77, 1);
	listeAPN[67] = new APN('Nikon', 'D70s', 'Enthousiaste', '2005/04/20', 1049, 'aps-c', 15.6, 23.7, 6.1, 'CCD', 20.4, 10.3, 529, 200, 1600, 0, 5, 3, 0.75, 95, 0, 0, 2, 595, 140, 111, 78, 1);
	listeAPN[68] = new APN('Nikon', 'D7100', 'Enthousiaste', '2013/02/21', 1149, 'aps-c', 15.6, 23.5, 24.1, 'CMOS', 24.2, 13.7, 1256, 100, 6400, 25600, 51, 6, 0.94, 100, 1, 0, 3.2, 765, 136, 107, 76, 0);
	listeAPN[69] = new APN('Nikon', 'D80', 'Enthousiaste', '2006/08/09', 1159, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.1, 11.2, 524, 100, 1600, 3200, 11, 3, 0.95, 95, 0, 0, 2.5, 585, 132, 103, 77, 1);
	listeAPN[70] = new APN('Nikon', 'D800', 'Expert', '2012/02/07', 2899, 'full-frame', 24, 36, 36.3, 'CMOS', 25.3, 14.4, 2853, 100, 6400, 12800, 51, 4, 0.7, 100, 1, 0, 3.2, 900, 146, 123, 82, 1);
	listeAPN[71] = new APN('Nikon', 'D800E', 'Expert', '2012/02/07', 3199, 'full-frame', 24, 36, 36.3, 'CMOS', 25.6, 14.3, 2979, 100, 6400, 12800, 51, 4, 0.7, 100, 1, 0, 3.2, 900, 146, 123, 82, 0);
	listeAPN[72] = new APN('Nikon', 'D90', 'Enthousiaste', '2008/08/27', 949, 'aps-c', 15.8, 23.6, 12.3, 'CMOS', 22.7, 12.5, 977, 200, 3200, 6400, 11, 4.5, 0.96, 96, 0, 0, 3, 620, 132, 103, 77, 1);
	listeAPN[73] = new APN('Pentax', '*ist-D', 'Enthousiaste', '2003/02/26', 1699, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 11, 2.7, 0.95, 95, 0, 0, 1.8, 510, 129, 95, 60, 1);
	listeAPN[74] = new APN('Pentax', '*ist-DL', 'Débutant', '2005/06/01', 899, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 3, 2.8, 0.85, 95, 0, 0, 2.5, 470, 125, 93, 67, 1);
	listeAPN[75] = new APN('Pentax', '*ist-DL2', 'Débutant', '2006/01/27', 0, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 5, 2.8, 0.85, 95, 0, 0, 2.5, 470, 125, 93, 66, 1);
	listeAPN[76] = new APN('Pentax', '*ist-Ds', 'Amateur', '2004/09/13', 899, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 11, 2.8, 0.95, 95, 0, 0, 2, 505, 129, 95, 60, 1);
	listeAPN[77] = new APN('Pentax', '*ist-Ds2', 'Amateur', '2005/08/22', 899, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 11, 2.8, 0.95, 95, 0, 0, 2.5, 505, 125, 93, 66, 1);
	listeAPN[78] = new APN('Pentax', 'K100D', 'Amateur', '2006/05/22', 599, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 11, 2.8, 0.85, 96, 0, 0, 2.5, 565, 129, 93, 70, 1);
	listeAPN[79] = new APN('Pentax', 'K100Dsuper', 'Amateur', '2007/06/27', 599, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 11, 2.8, 0.85, 96, 0, 0, 2.5, 565, 129, 91, 71, 1);
	listeAPN[80] = new APN('Pentax', 'K10D', 'Enthousiaste', '2006/09/13', 899, 'aps-c', 15.7, 23.5, 10.2, 'CCD', 22.7, 11.6, 522, 100, 1600, 0, 11, 3, 0.95, 95, 0, 0, 2.5, 710, 142, 101, 70, 1);
	listeAPN[81] = new APN('Pentax', 'K110D', 'Amateur', '2006/05/22', 499, 'aps-c', 15.7, 23.5, 6.1, 'CCD', 0, 0, 0, 200, 3200, 0, 11, 2.8, 0.86, 96, 0, 0, 2.5, 520, 129, 93, 70, 1);
	listeAPN[82] = new APN('Pentax', 'K200D', 'Amateur', '2008/01/23', 649, 'aps-c', 15.7, 23.5, 10.2, 'CCD', 22.4, 11.4, 561, 100, 1600, 0, 11, 2.8, 0.85, 96, 1, 0, 2.7, 630, 134, 95, 74, 1);
	listeAPN[83] = new APN('Pentax', 'K20D', 'Enthousiaste', '2008/01/23', 1299, 'aps-c', 15.6, 23.4, 14.6, 'CMOS', 0, 0, 0, 100, 3200, 6400, 11, 3, 0.95, 95, 1, 0, 2.7, 715, 142, 101, 70, 1);
	listeAPN[84] = new APN('Pentax', 'K30', 'Amateur', '2012/05/22', 799, 'aps-c', 15.7, 23.7, 16.3, 'CMOS', 23.7, 13, 1129, 100, 12800, 25600, 11, 6.3, 0.92, 100, 1, 0, 3, 590, 130, 97, 71, 1);
	listeAPN[85] = new APN('Pentax', 'K5', 'Expert', '2010/09/20', 1159, 'aps-c', 15.7, 23.6, 16.3, 'CMOS', 23.7, 14.1, 1162, 100, 12800, 51200, 11, 7, 0.92, 100, 1, 0, 3, 670, 131, 97, 73, 1);
	listeAPN[86] = new APN('Pentax', 'K50', 'Amateur', '2013/06/12', 599, 'aps-c', 15.7, 23.7, 16.15, 'CMOS', 23.7, 13, 1120, 100, 51600, 0, 11, 6, 0.92, 100, 1, 0, 3, 590, 130, 97, 71, 1);
	listeAPN[87] = new APN('Pentax', 'K500', 'Amateur', '2013/06/12', 600, 'aps-c', 15.7, 23.7, 16.08, 'CMOS', 0, 0, 0, 100, 51600, 0, 11, 6, 0.92, 100, 0, 0, 3, 586, 130, 97, 71, 1);
	listeAPN[88] = new APN('Pentax', 'K5-II', 'Expert', '2012/09/11', 1099, 'aps-c', 15.7, 23.7, 16.3, 'CMOS', 23.8, 14.1, 1235, 100, 12800, 51200, 11, 7, 0.92, 100, 1, 0, 3, 700, 131, 97, 73, 1);
	listeAPN[89] = new APN('Pentax', 'K5-IIs', 'Expert', '2012/09/11', 1299, 'aps-c', 15.7, 23.7, 16.3, 'CMOS', 23.9, 14.1, 1208, 100, 12800, 51200, 11, 7, 0.92, 100, 1, 0, 3, 700, 131, 97, 73, 0);
	listeAPN[90] = new APN('Pentax', 'K7', 'Expert', '2009/05/20', 1249, 'aps-c', 15.6, 23.4, 14.6, 'CMOS', 22.6, 10.6, 536, 100, 3200, 6400, 11, 5.2, 0.92, 100, 1, 0, 3, 670, 131, 97, 73, 1);
	listeAPN[91] = new APN('Pentax', 'Km', 'Débutant', '2008/09/22', 499, 'aps-c', 15.7, 23.5, 10.2, 'CCD', 22.4, 11.4, 513, 100, 3200, 0, 5, 3.5, 0.85, 96, 0, 0, 2.8, 525, 123, 92, 68, 1);
	listeAPN[92] = new APN('Pentax', 'K-r', 'Débutant', '2010/10/09', 649, 'aps-c', 15.8, 23.6, 12.4, 'CMOS', 22.9, 12.4, 755, 200, 12800, 25600, 11, 6, 0.56, 96, 0, 0, 3, 520, 125, 97, 68, 1);
	listeAPN[93] = new APN('Pentax', 'K-x', 'Débutant', '2009/09/17', 599, 'aps-c', 15.8, 23.6, 12.4, 'CMOS', 22.8, 12.5, 811, 200, 6400, 12800, 11, 4.7, 0.85, 96, 0, 0, 2.7, 515, 123, 92, 68, 1);
	listeAPN[94] = new APN('Sony', 'A100', 'Amateur', '2006/06/05', 499, 'aps-c', 15.8, 23.6, 10.0, 'CCD', 22, 11.2, 476, 100, 1600, 0, 9, 3, 0.83, 95, 0, 0, 2.5, 545, 133, 95, 71, 1);
	listeAPN[95] = new APN('Sony', 'A200', 'Débutant', '2008/01/07', 399, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.3, 11.3, 521, 100, 3200, 0, 9, 3, 0.83, 95, 0, 0, 2.7, 545, 132, 99, 71, 1);
	listeAPN[96] = new APN('Sony', 'A230', 'Débutant', '2009/05/18', 499, 'aps-c', 15.7, 23.5, 10.2, 'CCD', 22.3, 11.4, 531, 100, 3200, 0, 9, 2.5, 0.83, 95, 0, 0, 2.7, 450, 128, 97, 68, 1);
	listeAPN[97] = new APN('Sony', 'A290', 'Débutant', '2010/06/01', 449, 'aps-c', 15.7, 23.5, 14.2, 'CCD', 22.6, 11.5, 615, 100, 3200, 0, 9, 2.5, 0.83, 95, 0, 0, 2.7, 480, 128, 97, 86, 1);
	listeAPN[98] = new APN('Sony', 'A300', 'Amateur', '2008/01/30', 649, 'aps-c', 15.8, 23.6, 10.2, 'CCD', 22.5, 11.4, 538, 100, 3200, 0, 9, 3, 0.74, 95, 0, 0, 2.7, 570, 131, 99, 75, 1);
	listeAPN[99] = new APN('Sony', 'A33', 'Débutant', '2010/08/24', 649, 'aps-c', 15.6, 23.5, 14.2, 'CMOS', 22.8, 12.6, 591, 100, 12800, 25600, 15, 7, 1.1, 100, 0, 1, 3, 450, 124, 92, 85, 1);
	listeAPN[100] = new APN('Sony', 'A330', 'Amateur', '2009/05/18', 599, 'aps-c', 15.7, 23.5, 10.2, 'CCD', 22.4, 11.5, 535, 100, 3200, 0, 9, 2.5, 0.74, 95, 0, 0, 2.7, 470, 128, 97, 71, 1);
	listeAPN[101] = new APN('Sony', 'A35', 'Débutant', '2011/06/08', 649, 'aps-c', 15.6, 23.5, 16.2, 'CMOS', 23.3, 12.7, 763, 100, 25600, 0, 15, 5.5, 1.1, 100, 0, 1, 3, 380, 124, 92, 85, 1);
	listeAPN[102] = new APN('Sony', 'A350', 'Amateur', '2008/01/30', 749, 'aps-c', 15.8, 23.6, 14.2, 'CCD', 22.6, 11.5, 595, 100, 3200, 0, 9, 3, 0.74, 95, 0, 0, 2.7, 582, 131, 99, 75, 1);
	listeAPN[103] = new APN('Sony', 'A37', 'Débutant', '2012/05/17', 549, 'aps-c', 15.6, 23.5, 16.1, 'CMOS', 23.3, 12.9, 799, 100, 16000, 25600, 15, 5.5, 1.09, 100, 0, 1, 2.6, 448, 124, 92, 85, 1);
	listeAPN[104] = new APN('Sony', 'A380', 'Amateur', '2009/05/18', 749, 'aps-c', 15.8, 23.6, 14.2, 'CCD', 22.6, 11.8, 614, 100, 3200, 0, 9, 2.5, 0.74, 95, 0, 0, 2.7, 470, 128, 97, 71, 1);
	listeAPN[105] = new APN('Sony', 'A390', 'Amateur', '2010/06/09', 499, 'aps-c', 15.7, 23.5, 14.2, 'CCD', 22.5, 11.5, 607, 100, 3200, 0, 9, 2.5, 0.74, 95, 0, 0, 2.7, 480, 128, 97, 86, 1);
	listeAPN[106] = new APN('Sony', 'A450', 'Amateur', '2010/01/05', 549, 'aps-c', 15.6, 23.4, 14.2, 'CMOS', 21.8, 11.8, 769, 200, 12800, 0, 9, 7, 0.8, 95, 0, 0, 2.7, 500, 137, 104, 81, 1);
	listeAPN[107] = new APN('Sony', 'A500', 'Enthousiaste', '2009/08/27', 649, 'aps-c', 15.6, 23.5, 12.3, 'CMOS', 21.8, 11.6, 772, 200, 12800, 0, 9, 5, 0.8, 95, 0, 0, 3, 597, 137, 104, 84, 1);
	listeAPN[108] = new APN('Sony', 'A55', 'Amateur', '2010/08/24', 749, 'aps-c', 15.6, 23.5, 16.2, 'CMOS', 23, 12.4, 816, 100, 12800, 25600, 15, 6, 1.1, 100, 0, 1, 3, 441, 124, 92, 85, 1);
	listeAPN[109] = new APN('Sony', 'A550', 'Enthousiaste', '2009/08/27', 749, 'aps-c', 15.6, 23.4, 14.2, 'CMOS', 21.9, 11.8, 807, 200, 12800, 0, 9, 7, 0.8, 95, 0, 0, 3, 599, 137, 104, 84, 1);
	listeAPN[110] = new APN('Sony', 'A560', 'Enthousiaste', '2010/08/24', 649, 'aps-c', 15.6, 23.5, 14.2, 'CMOS', 22.5, 12.3, 817, 100, 12800, 25600, 15, 7, 0.8, 95, 0, 0, 3, 520, 137, 104, 84, 1);
	listeAPN[111] = new APN('Sony', 'A57', 'Amateur', '2012/03/12', 649, 'aps-c', 15.6, 23.5, 16.1, 'CMOS', 23.4, 13, 785, 100, 3200, 25600, 15, 12, 1.04, 100, 0, 1, 3, 560, 132, 98, 81, 1);
	listeAPN[112] = new APN('Sony', 'A58', 'Amateur', '2013/01/20', 450, 'aps-c', 15.6, 23.5, 20.1, 'CMOS', 23.3, 12.5, 753, 100, 16000, 25600, 15, 8, 0.88, 100, 0, 1, 2.7, 492, 129, 95, 78, 1);
	listeAPN[113] = new APN('Sony', 'A580', 'Enthousiaste', '2010/08/24', 799, 'aps-c', 15.6, 23.5, 16.2, 'CMOS', 23.8, 13.3, 1121, 100, 12800, 25600, 15, 7, 0.8, 95, 0, 0, 3, 520, 137, 104, 84, 1);
	listeAPN[114] = new APN('Sony', 'A65', 'Enthousiaste', '2011/08/24', 899, 'aps-c', 15.6, 23.5, 24.3, 'CMOS', 23.4, 12.6, 717, 100, 12800, 25600, 15, 10, 1.1, 100, 0, 1, 3, 560, 132, 97, 81, 1);
	listeAPN[115] = new APN('Sony', 'A700', 'Expert', '2007/09/06', 999, 'aps-c', 15.6, 23.5, 12.4, 'CMOS', 22.3, 11.9, 581, 100, 6400, 0, 11, 5, 0.9, 95, 0, 0, 3, 690, 142, 105, 80, 1);
	listeAPN[116] = new APN('Sony', 'A77', 'Expert', '2011/08/24', 1299, 'aps-c', 15.6, 23.5, 24.3, 'CMOS', 24, 13.2, 801, 100, 16000, 25600, 19, 12, 1.1, 100, 1, 1, 3, 635, 143, 104, 81, 1);
	listeAPN[117] = new APN('Sony', 'A850', 'Expert', '2009/08/27', 1999, 'full-frame', 24, 35.9, 24.6, 'CMOS', 23.8, 12.2, 1415, 200, 3200, 6400, 9, 3, 0.74, 98, 0, 0, 3, 850, 156, 117, 82, 1);
	listeAPN[118] = new APN('Sony', 'A900', 'Expert', '2008/09/09', 2799, 'full-frame', 24, 35.9, 24.6, 'CMOS', 23.7, 12.3, 1431, 100, 6400, 0, 9, 3, 0.74, 100, 1, 0, 3, 850, 156, 117, 82, 1);
	listeAPN[119] = new APN('Sony', 'A99', 'Expert', '2012/09/12', 2800, 'full-frame', 23.8, 35.8, 24.3, 'CMOS', 25, 14, 1555, 100, 25600, 0, 19, 2.5, 0.71, 100, 1, 1, 3, 733, 147, 111, 78, 1);
}