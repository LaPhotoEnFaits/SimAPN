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



function createListeObjectif() {
	listeObjectif[0] = new Objectif('14mm f/2.8', 14, 2.8, 0, 13, 21, 7, [10.3, 23.5, 17.5, 24.9], [63.8, 76.9, 76.9, 87], [5.9, 0, 4.4], 4);
	listeObjectif[1] = new Objectif('16mm f/2.8', 16, 2.8, 0, 14, 20, 7, [9, 21, 9, 17], [63, 61.9, 61.9, 60.8], [0, 0, 1], 4);
	listeObjectif[2] = new Objectif('20mm f/2.8', 20, 2.8, 0, 15, 18, 7, [10, 16.5, 10, 6], [65.2, 65.2, 69, 66.5], [0, 0, 0], 4);
	listeObjectif[3] = new Objectif('24mm f/2.8', 24, 2.8, 0, 15, 17, 7, [15, 14.5, 10.5, 4], [63.4, 64.5, 64.5, 53.8], [2, 0, 0], 4);
	listeObjectif[4] = new Objectif('28mm f/2.8', 28, 2.8, 0, 15, 16, 7, [12.5, 16, 10, 4.5], [61.6, 65, 65, 53], [1.5, 0, 0], 4);
	listeObjectif[5] = new Objectif('35mm f/2', 35, 2, 0, 16, 6, 7, [13.5, 16.5, 10, 2], [62.2, 64.5, 64.5, 55.4], [1.5, 0, 0], 4);
	listeObjectif[6] = new Objectif('50mm f/1.8', 50, 1.8, 0, 17, 7, 7, [11.3, 16, 7.5, 2], [63.5, 63.5, 63.5, 55.4], [2.2, 0, 0], 4);
	listeObjectif[7] = new Objectif('85mm f/1.8', 85, 1.8, 0, 17, 4, 7, [13.5, 29, 12, 1.5], [62.7, 69, 71.5, 64], [2.5, 0, 0], 4);
	listeObjectif[8] = new Objectif('105mm f/2', 105, 2, 0, 17, 2, 9, [14, 15, 12, 33.5, 32.1], [62.4, 72.1, 75.5, 77.6, 79], [2.8, 2.8, 0, 1.4], 6);
	listeObjectif[9] = new Objectif('135mm f/2', 135, 2, 1, 17, 4, 9, [13.5, 13.5, 50.5, 35, 2.5], [64.6, 74.2, 79, 79, 74.2], [5, 3, 0, 0], 4);
	listeObjectif[10] = new Objectif('180mm f/2.8', 180, 2.8, 0, 18, 7, 7, [14, 54.5, 28, 39.5, 2.9], [65.7, 69.9, 75.6, 78.5, 74.2], [2.1, 3, 3, 0], 4);
	listeObjectif[11] = new Objectif('200mm f/2', 200, 2, 1, 19, 6, 7, [1, 55, 22, 93], [60.9, 94.7, 101.5, 124], [21, 0, 11], 4);
	listeObjectif[12] = new Objectif('300mm f/2.8', 300, 2.8, 1, 24, 6, 9, [14.1, 18.8, 107.9, 35, 73], [49.1, 84.2, 100.6, 107.6, 114.6], [7, 0, 4.7, 7], 6);
	listeObjectif[13] = new Objectif('400mm f/2.8', 400, 2.8, 1, 25, 4, 9, [23.5, 117.5, 44.5, 68, 65], [60.9, 92.8, 107.3, 121.8, 153.7], [6, 6, 9, 18], 4);
}

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