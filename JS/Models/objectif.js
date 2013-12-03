Objectif = function(nom, focale, indiceOuvertureMin, indiceOuvertureMax, antiVibration, resolution, abbChro, nbrCylindres, longueurCylindre, diametreCylindre, ecartCyclindre, numBague) {
	this.nom = nom;
	this.focale = focale;
	this.indiceOuvertureMin = indiceOuvertureMin;
	this.indiceOuvertureMax = indiceOuvertureMax;
	this.antiVibration = antiVibration;
	this.resolution = resolution;
	this.abbChro = abbChro;
	this.nbrCylindres = nbrCylindres;
	this.longueurCylindre = longueurCylindre;
	this.diametreCylindre = diametreCylindre;
	this.ecartCyclindre = ecartCyclindre;
	this.numBague = numBague;

	this.ouverture = 0;
};

function cpt2ouverture(cpt) {

	var temp = 1.8;

	switch (cpt) {
		case 1:
			temp = 0.7;
			break;
		case 2:
			temp = 0.8;
			break;
		case 3:
			temp = 0.9;
			break;
		case 4:
			temp = 1;
			break;
		case 5:
			temp = 1.1;
			break;
		case 6:
			temp = 1.2;
			break;
		case 7:
			temp = 1.4;
			break;
		case 8:
			temp = 1.6;
			break;
		case 9:
			temp = 1.8;
			break;
		case 10:
			temp = 2;
			break;
		case 11:
			temp = 2.2;
			break;
		case 12:
			temp = 2.5;
			break;
		case 13:
			temp = 2.8;
			break;
		case 14:
			temp = 3.2;
			break;
		case 15:
			temp = 3.5;
			break;
		case 16:
			temp = 4;
			break;
		case 17:
			temp = 4.5;
			break;
		case 18:
			temp = 5;
			break;
		case 19:
			temp = 5.6;
			break;
		case 20:
			temp = 6.3;
			break;
		case 21:
			temp = 7.1;
			break;
		case 22:
			temp = 8;
			break;
		case 23:
			temp = 9;
			break;
		case 24:
			temp = 10;
			break;
		case 25:
			temp = 11;
			break;
		case 26:
			temp = 13;
			break;
		case 27:
			temp = 14;
			break;
		case 28:
			temp = 16;
			break;
		case 29:
			temp = 18;
			break;
		case 30:
			temp = 20;
			break;
		case 31:
			temp = 22;
			break;
		case 32:
			temp = 25;
			break;
		case 33:
			temp = 29;
			break;
		case 34:
			temp = 32;
			break;
		case 35:
			temp = 36;
			break;
		case 36:
			temp = 42;
			break;
		case 37:
			temp = 45;
			break;
	}

	temp = 1.0 * temp;

	return {
		N: temp
	};
}

function ouverture2cpt(N) {

	var temp = 1.8;

	switch (N) {

		case 0.7:
			temp = 1;
			break;
		case 0.8:
			temp = 2;
			break;
		case 0.9:
			temp = 3;
			break;
		case 1:
			temp = 4;
			break;
		case 1.1:
			temp = 5;
			break;
		case 1.2:
			temp = 6;
			break;
		case 1.4:
			temp = 7;
			break;
		case 1.6:
			temp = 8;
			break;
		case 1.8:
			temp = 9;
			break;
		case 2:
			temp = 10;
			break;
		case 2.2:
			temp = 11;
			break;
		case 2.5:
			temp = 12;
			break;
		case 2.8:
			temp = 13;
			break;
		case 3.2:
			temp = 14;
			break;
		case 3.5:
			temp = 15;
			break;
		case 4:
			temp = 16;
			break;
		case 4.5:
			temp = 17;
			break;
		case 5:
			temp = 18;
			break;
		case 5.6:
			temp = 19;
			break;
		case 6.3:
			temp = 20;
			break;
		case 7.1:
			temp = 21;
			break;
		case 8:
			temp = 22;
			break;
		case 9:
			temp = 23;
			break;
		case 10:
			temp = 24;
			break;
		case 11:
			temp = 25;
			break;
		case 13:
			temp = 26;
			break;
		case 14:
			temp = 27;
			break;
		case 16:
			temp = 28;
			break;
		case 18:
			temp = 29;
			break;
		case 20:
			temp = 30;
			break;
		case 22:
			temp = 31;
			break;
		case 25:
			temp = 32;
			break;
		case 29:
			temp = 33;
			break;
		case 32:
			temp = 34;
			break;
		case 36:
			temp = 35;
			break;
		case 42:
			temp = 36;
			break;
		case 45:
			temp = 37;
			break;
	}

	temp = 1.0 * temp;

	return {
		cpt: temp
	};
}