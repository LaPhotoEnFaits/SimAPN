BoitierAPN3D = function() {};
listeDesBoitiers3D = new Array(NBR_BOITIERS_APN_3D);

function initListeDesBoitiers3D() {

	//FULL FRAME
	listeDesBoitiers3D[0] = new BoitierAPN3D();
	listeDesBoitiers3D[0].h_viseur = 0.0246;
	listeDesBoitiers3D[0].l_viseur = 0.0499;
	listeDesBoitiers3D[0].k_p_corps = 0.059 / 0.0815;
	listeDesBoitiers3D[0].k_x_foyer_corps = 0.0898 / 0.146;
	listeDesBoitiers3D[0].k_y_foyer_corps = 0.05 / 0.123;
	listeDesBoitiers3D[0].k_p_foyer_corps = 0.0125 / 0.082;
	listeDesBoitiers3D[0].l_poignee = 0.0378;
	listeDesBoitiers3D[0].p_poignee = 0.00968;
	listeDesBoitiers3D[0].h_finVisee = 0.005;

	//APS-C
	listeDesBoitiers3D[1] = new BoitierAPN3D();
	listeDesBoitiers3D[1].h_viseur = 0.02;
	listeDesBoitiers3D[1].l_viseur = 0.03;
	listeDesBoitiers3D[1].k_p_corps = 0.055 / 0.077;
	listeDesBoitiers3D[1].k_x_foyer_corps = 0.0817 / 0.132;
	listeDesBoitiers3D[1].k_y_foyer_corps = 0.0438 / 0.103;
	listeDesBoitiers3D[1].k_p_foyer_corps = 0.0154 / 0.077;
	listeDesBoitiers3D[1].l_poignee = 0.033;
	listeDesBoitiers3D[1].p_poignee = 0.02;
	listeDesBoitiers3D[1].h_finVisee = 0.005;

	//APS-H
	listeDesBoitiers3D[2] = new BoitierAPN3D();
	listeDesBoitiers3D[2].h_viseur = 0.02;
	listeDesBoitiers3D[2].l_viseur = 0.0347;
	listeDesBoitiers3D[2].k_p_corps = 0.75;
	listeDesBoitiers3D[2].k_x_foyer_corps = 5 / 9;
	listeDesBoitiers3D[2].k_y_foyer_corps = 4 / 9;
	listeDesBoitiers3D[2].k_p_foyer_corps = 1 / 8;
	listeDesBoitiers3D[2].l_poignee = 0.0312;
	listeDesBoitiers3D[2].p_poignee = 0.0266;
	listeDesBoitiers3D[2].h_finVisee = 0.005;

	//4/3 (olympus E5)
	listeDesBoitiers3D[3] = new BoitierAPN3D();
	listeDesBoitiers3D[3].h_viseur = 0.0218;
	listeDesBoitiers3D[3].l_viseur = 0.0453;
	listeDesBoitiers3D[3].l_poignee = 0.04;
	listeDesBoitiers3D[3].p_poignee = 0.0186;
	listeDesBoitiers3D[3].h_finVisee = 0;
	listeDesBoitiers3D[3].l_corps = 0.1425;
	listeDesBoitiers3D[3].h_corps = 0.0947;
	listeDesBoitiers3D[3].p_corps = 0.0559;
	listeDesBoitiers3D[3].x_foyer_corps = 0.0766;
	listeDesBoitiers3D[3].y_foyer_corps = 0.0499;
	listeDesBoitiers3D[3].p_foyer_corps = 0.015;
	listeDesBoitiers3D[3].p_viseur = 0.0745;

	//CX (Nikon 1V1)
	listeDesBoitiers3D[4] = new BoitierAPN3D();
	listeDesBoitiers3D[4].h_viseur = 0.008;
	listeDesBoitiers3D[4].l_viseur = 0.02825;
	listeDesBoitiers3D[4].l_poignee = 0.0;
	listeDesBoitiers3D[4].p_poignee = 0.0;
	listeDesBoitiers3D[4].h_finVisee = 0;
	listeDesBoitiers3D[4].l_corps = 0.113;
	listeDesBoitiers3D[4].h_corps = 0.068;
	listeDesBoitiers3D[4].p_corps = 0.0435;
	listeDesBoitiers3D[4].x_foyer_corps = 0.07;
	listeDesBoitiers3D[4].y_foyer_corps = 0.038;
	listeDesBoitiers3D[4].p_foyer_corps = 0.01;
	listeDesBoitiers3D[4].p_viseur = listeDesBoitiers3D[4].p_corps;

	//1/3.2 (Iphone 5)
	listeDesBoitiers3D[5] = new BoitierAPN3D();
	listeDesBoitiers3D[5].h_viseur = 0.0;
	listeDesBoitiers3D[5].l_viseur = 0.0;
	listeDesBoitiers3D[5].l_poignee = 0.0;
	listeDesBoitiers3D[5].p_poignee = 0.0;
	listeDesBoitiers3D[5].h_finVisee = 0;
	listeDesBoitiers3D[5].l_corps = 0.12303;
	listeDesBoitiers3D[5].h_corps = 0.05857;
	listeDesBoitiers3D[5].p_corps = 0.0076;
	listeDesBoitiers3D[5].x_foyer_corps = 0.00735;
	listeDesBoitiers3D[5].y_foyer_corps = 0.0092;
	listeDesBoitiers3D[5].p_foyer_corps = 0.006;
	listeDesBoitiers3D[5].p_viseur = 0;

	//1/1.7 (Canon PowerShot s100)
	listeDesBoitiers3D[6] = new BoitierAPN3D();
	listeDesBoitiers3D[6].h_viseur = 0.0;
	listeDesBoitiers3D[6].l_viseur = 0.0;
	listeDesBoitiers3D[6].l_poignee = 0.0;
	listeDesBoitiers3D[6].p_poignee = 0.0;
	listeDesBoitiers3D[6].h_finVisee = 0;
	listeDesBoitiers3D[6].l_corps = 0.0989;
	listeDesBoitiers3D[6].h_corps = 0.0598;
	listeDesBoitiers3D[6].p_corps = 0.0267;
	listeDesBoitiers3D[6].x_foyer_corps = 0.069;
	listeDesBoitiers3D[6].y_foyer_corps = 0.0329;
	listeDesBoitiers3D[6].p_foyer_corps = 0.01;
	listeDesBoitiers3D[6].p_viseur = 0;

	//2/3 (Nokia Lumia 1020)
	listeDesBoitiers3D[7] = new BoitierAPN3D();
	listeDesBoitiers3D[7].h_viseur = 0.0;
	listeDesBoitiers3D[7].l_viseur = 0.0;
	listeDesBoitiers3D[7].l_poignee = 0.0;
	listeDesBoitiers3D[7].p_poignee = 0.0;
	listeDesBoitiers3D[7].h_finVisee = 0;
	listeDesBoitiers3D[7].l_corps = 0.1304;
	listeDesBoitiers3D[7].h_corps = 0.0714;
	listeDesBoitiers3D[7].p_corps = 0.0104;
	listeDesBoitiers3D[7].x_foyer_corps = 0.1016;
	listeDesBoitiers3D[7].y_foyer_corps = 0.0357;
	listeDesBoitiers3D[7].p_foyer_corps = 0.008;
	listeDesBoitiers3D[7].p_viseur = 0;

	//1/2.3 (Canon IXUS 990)
	listeDesBoitiers3D[8] = new BoitierAPN3D();
	listeDesBoitiers3D[8].h_viseur = 0.0;
	listeDesBoitiers3D[8].l_viseur = 0.0;
	listeDesBoitiers3D[8].l_poignee = 0.0;
	listeDesBoitiers3D[8].p_poignee = 0.0;
	listeDesBoitiers3D[8].h_finVisee = 0;
	listeDesBoitiers3D[8].l_corps = 0.0948;
	listeDesBoitiers3D[8].h_corps = 0.0568;
	listeDesBoitiers3D[8].p_corps = 0.0263;
	listeDesBoitiers3D[8].x_foyer_corps = 0.0279;
	listeDesBoitiers3D[8].y_foyer_corps = 0.025;
	listeDesBoitiers3D[8].p_foyer_corps = 0.01;
	listeDesBoitiers3D[8].p_viseur = 0;
}

function initAPN3D() {

	initListeDesBoitiers3D();

	for (var i = 0; i !== NBR_FACES_APN_3D; i++) {
		if (i === 5 || i === 8) {
			apn3D[i] = new Polygone('apnFace' + i, [220, 220, 200, 0.29], [50, 50, 50], [0, 0, 0, 0.5], [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [0, 0, 0], 0, [0, 0, 0], [0, 0, 0], majPtsPolygones, drawPolygone, 0);
		} else if (i === 13) {
			apn3D[i] = new Polygone('apnFace' + i, [220, 220, 200, 0.29], [50, 50, 50], [0, 0, 0, 0.5], [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [0, 0, 0], 0, [0, 0, 0], [0, 0, 0], majPtsPolygones, drawPolygone, 0);

		} else {
			apn3D[i] = new Polygone('apnFace' + i, [220, 220, 200, 0.29], [50, 50, 50], [0, 0, 0, 0.5], [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [0, 0, 0], 0, [0, 0, 0], [0, 0, 0], majPtsPolygones, drawPolygone, 0);
		}
	}

	setCotesAPN3D();
}

function setCotesAPN3D() {

	var numeroDuBoitier;

	switch (apnChoisi.capteurFormat) {

		case 'full-frame':
			numeroDuBoitier = 0;
			break;
		case 'aps-c':
			numeroDuBoitier = 1;
			break;
		case 'aps-h':
			numeroDuBoitier = 2;
			break;

		case '4/3':
			numeroDuBoitier = 3;
			break;

		case 'CX':
			numeroDuBoitier = 4;
			break;

		case '1/3.2':
			numeroDuBoitier = 5;
			break;

		case '1/1.7':
			numeroDuBoitier = 6;
			break;

		case '2/3':
			numeroDuBoitier = 7;
			break;

		case '1/2.3':
			numeroDuBoitier = 8;
			break;

		default:
			numeroDuBoitier = 0;
			break;
	}

	apnChoisi.h_viseur = listeDesBoitiers3D[numeroDuBoitier].h_viseur;
	apnChoisi.l_viseur = listeDesBoitiers3D[numeroDuBoitier].l_viseur;
	apnChoisi.k_p_corps = listeDesBoitiers3D[numeroDuBoitier].k_p_corps;
	apnChoisi.k_x_foyer_corps = listeDesBoitiers3D[numeroDuBoitier].k_x_foyer_corps;
	apnChoisi.k_y_foyer_corps = listeDesBoitiers3D[numeroDuBoitier].k_y_foyer_corps;
	apnChoisi.k_p_foyer_corps = listeDesBoitiers3D[numeroDuBoitier].k_p_foyer_corps;
	apnChoisi.l_poignee = listeDesBoitiers3D[numeroDuBoitier].l_poignee;
	apnChoisi.p_poignee = listeDesBoitiers3D[numeroDuBoitier].p_poignee;
	apnChoisi.h_finVisee = listeDesBoitiers3D[numeroDuBoitier].h_finVisee;

	if (numeroDuBoitier < 3) {
		apnChoisi.l_corps = apnChoisi.boitierLargeur / 1000.0;
		apnChoisi.h_corps = apnChoisi.boitierHauteur / 1000.0 - apnChoisi.h_viseur;
		apnChoisi.p_corps = apnChoisi.k_p_corps * apnChoisi.boitierProfondeur / 1000.0;
		apnChoisi.x_foyer_corps = apnChoisi.k_x_foyer_corps * apnChoisi.boitierLargeur / 1000.0;
		apnChoisi.y_foyer_corps = apnChoisi.k_y_foyer_corps * apnChoisi.boitierHauteur / 1000.0;
		apnChoisi.p_foyer_corps = apnChoisi.k_p_foyer_corps * apnChoisi.boitierProfondeur / 1000.0;
		apnChoisi.p_viseur = apnChoisi.boitierProfondeur / 1000.0;
		apnChoisi.dx_viseur = apnChoisi.x_foyer_corps - apnChoisi.l_viseur / 2;
		apnChoisi.h_poignee = apnChoisi.h_corps;

	} else {
		apnChoisi.l_corps = listeDesBoitiers3D[numeroDuBoitier].l_corps;
		apnChoisi.h_corps = listeDesBoitiers3D[numeroDuBoitier].h_corps;
		apnChoisi.p_corps = listeDesBoitiers3D[numeroDuBoitier].p_corps;
		apnChoisi.x_foyer_corps = listeDesBoitiers3D[numeroDuBoitier].x_foyer_corps;
		apnChoisi.y_foyer_corps = listeDesBoitiers3D[numeroDuBoitier].y_foyer_corps;
		apnChoisi.p_foyer_corps = listeDesBoitiers3D[numeroDuBoitier].p_foyer_corps;
		apnChoisi.p_viseur = listeDesBoitiers3D[numeroDuBoitier].p_viseur;
		apnChoisi.dx_viseur = apnChoisi.x_foyer_corps - apnChoisi.l_viseur / 2;
		apnChoisi.h_poignee = apnChoisi.h_corps;
	}
	apnChoisi.h_debutVisee = apnChoisi.h_finVisee - apnChoisi.capteurHauteur / 1000;
}

function setPtsAPN3D() {

	var a1_x = -(-photographe.deplacementHorizontal) - apnChoisi.x_foyer_corps;
	var a1_y = photographe.deplacementVertical + apnChoisi.y_foyer_corps;
	var a1_p = photographe.deplacementProfondeur - apnChoisi.p_foyer_corps;
	var a2_x = a1_x;
	var a2_y = a1_y;
	var a2_p = a1_p + apnChoisi.p_corps + apnChoisi.p_poignee;
	var a3_x = a1_x;
	var a3_y = a2_y - apnChoisi.h_corps;
	var a3_p = a2_p;
	var a4_x = a1_x;
	var a4_y = a3_y;
	var a4_p = a1_p;

	var b1_x = a1_x + apnChoisi.l_poignee;
	var b1_y = a1_y;
	var b1_p = a1_p + apnChoisi.p_corps;
	var b2_x = b1_x;
	var b2_y = b1_y;
	var b2_p = b1_p + apnChoisi.p_poignee;
	var b3_x = b1_x;
	var b3_y = b2_y - apnChoisi.h_poignee;
	var b3_p = b2_p;
	var b4_x = b1_x;
	var b4_y = b3_y;
	var b4_p = b1_p;

	var c1_x = a1_x + apnChoisi.dx_viseur;
	var c1_y = a1_y + apnChoisi.h_viseur;
	var c1_p = a1_p;
	var c2_x = c1_x;
	var c2_y = c1_y;
	var c2_p = c1_p + apnChoisi.p_viseur;
	var c3_x = c1_x;
	var c3_y = a1_y;
	var c3_p = c2_p;
	var c4_x = c1_x;
	var c4_y = c3_y;
	var c4_p = c1_p;
	var c5_x = c3_x;
	var c5_y = c3_y;
	var c5_p = c3_p - (apnChoisi.p_viseur - apnChoisi.p_corps);

	var d1_x = c1_x + apnChoisi.l_viseur;
	var d1_y = c1_y;
	var d1_p = c1_p;
	var d2_x = d1_x;
	var d2_y = c2_y;
	var d2_p = c2_p;
	var d3_x = d1_x;
	var d3_y = c3_y;
	var d3_p = c3_p;
	var d4_x = d1_x;
	var d4_y = c4_y;
	var d4_p = c4_p;
	var d5_x = d3_x;
	var d5_y = d3_y;
	var d5_p = c5_p;

	var e1_x = a1_x + apnChoisi.l_corps;
	var e1_y = a1_y;
	var e1_p = a1_p;
	var e2_x = e1_x;
	var e2_y = e1_y;
	var e2_p = b1_p;
	var e3_x = e1_x;
	var e3_y = b4_y;
	var e3_p = b4_p;
	var e4_x = e1_x;
	var e4_y = a4_y;
	var e4_p = a4_p;

	//Polygones
	apn3D[0].pts = [
		[a1_x, a1_y, a1_p],
		[a2_x, a2_y, a2_p],
		[a3_x, a3_y, a3_p],
		[a4_x, a4_y, a4_p]
	];
	apn3D[0].CDG = [a1_x, (a1_y + a4_y) / 2, (a2_p + a1_p) / 2];
	apn3D[0].vecteurNormal = [-1, 0, 0];
	apn3D[0].rayonAffichage = Math.abs(a1_p - a2_p);

	apn3D[1].pts = [
		[b1_x, b1_y, b1_p],
		[b2_x, b2_y, b2_p],
		[b3_x, b3_y, b3_p],
		[b4_x, b4_y, b4_p]
	];
	apn3D[1].CDG = [b1_x, (b1_y + b4_y) / 2, (b2_p + b1_p) / 2];
	apn3D[1].vecteurNormal = [1, 0, 0];
	apn3D[1].rayonAffichage = Math.abs(b1_y - b4_y);

	apn3D[2].pts = [
		[c1_x, c1_y, c1_p],
		[c2_x, c2_y, c2_p],
		[c3_x, c3_y, c3_p],
		[c4_x, c4_y, c4_p]
	];
	apn3D[2].CDG = [c1_x, (c1_y + c4_y) / 2, (c2_p + c1_p) / 2];
	apn3D[2].vecteurNormal = [-1, 0, 0];
	apn3D[2].rayonAffichage = Math.abs(c4_p - c3_p);

	apn3D[3].pts = [
		[d1_x, d1_y, d1_p],
		[d2_x, d2_y, d2_p],
		[d3_x, d3_y, d3_p],
		[d4_x, d4_y, d4_p]
	];
	apn3D[3].CDG = [d1_x, (d1_y + d4_y) / 2, (d2_p + d1_p) / 2];
	apn3D[3].vecteurNormal = [1, 0, 0];
	apn3D[3].rayonAffichage = Math.abs(d4_p - d3_p);

	apn3D[4].pts = [
		[e1_x, e1_y, e1_p],
		[e2_x, e2_y, e2_p],
		[e3_x, e3_y, e3_p],
		[e4_x, e4_y, e4_p]
	];
	apn3D[4].CDG = [e1_x, (e1_y + e4_y) / 2, (e2_p + e1_p) / 2];
	apn3D[4].vecteurNormal = [1, 0, 0];
	apn3D[4].rayonAffichage = Math.abs(e1_y - e4_y);

	apn3D[5].pts = [
		[a1_x, a1_y, a1_p],
		[c4_x, c4_y, c4_p],
		[c5_x, c5_y, c5_p],
		[b1_x, b1_y, b1_p],
		[b2_x, b2_y, b2_p],
		[a2_x, a2_y, a2_p]
	];
	apn3D[5].CDG = [(c4_x + a1_x) / 2, a1_y, (a2_p + a1_p) / 2];
	apn3D[5].vecteurNormal = [0, 1, 0];
	apn3D[5].rayonAffichage = Math.abs(a1_p - a2_p);

	apn3D[6].pts = [
		[c1_x, c1_y, c1_p],
		[d1_x, d1_y, d1_p],
		[d2_x, d2_y, d2_p],
		[c2_x, c2_y, c2_p]
	];
	apn3D[6].CDG = [(d1_x + c1_x) / 2, c1_y, (d2_p + d1_p) / 2];
	apn3D[6].vecteurNormal = [0, 1, 0];
	apn3D[6].rayonAffichage = Math.abs(c1_p - c2_p);

	apn3D[7].pts = [
		[d4_x, d4_y, d4_p],
		[e1_x, e1_y, e1_p],
		[e2_x, e2_y, e2_p],
		[d5_x, d5_y, d5_p]
	];
	apn3D[7].CDG = [(e1_x + d4_x) / 2, e1_y, (e2_p + e1_p) / 2];
	apn3D[7].vecteurNormal = [0, 1, 0];
	apn3D[7].rayonAffichage = Math.abs(e1_x - d4_x);

	apn3D[8].pts = [
		[a4_x, a4_y, a4_p],
		[e4_x, e4_y, e4_p],
		[e3_x, e3_y, e3_p],
		[b4_x, b4_y, b4_p],
		[b3_x, b3_y, b3_p],
		[a3_x, a3_y, a3_p]
	];
	apn3D[8].CDG = [(e4_x + a4_x) / 2, a4_y, (a3_p + a4_p) / 2];
	apn3D[8].vecteurNormal = [0, -1, 0];
	apn3D[8].rayonAffichage = Math.abs(e4_x - a4_x);

	apn3D[9].pts = [
		[c5_x, c5_y, c5_p],
		[d5_x, d5_y, d5_p],
		[d3_x, d3_y, d3_p],
		[c3_x, c3_y, c3_p]
	];
	apn3D[9].CDG = [(d3_x + c3_x) / 2, c3_y, (c3_p + c5_p) / 2];
	apn3D[9].vecteurNormal = [0, -1, 0];
	apn3D[9].rayonAffichage = Math.abs(c3_x - d3_x);

	apn3D[10].pts = [
		[a2_x, a2_y, a2_p],
		[b2_x, b2_y, b2_p],
		[b3_x, b3_y, b3_p],
		[a3_x, a3_y, a3_p]
	];
	apn3D[10].CDG = [(b2_x + a2_x) / 2, (a2_y + a3_y) / 2, a2_p];
	apn3D[10].vecteurNormal = [0, 0, 1];
	apn3D[10].rayonAffichage = Math.abs(a2_y - a3_y);

	apn3D[11].pts = [
		[c2_x, c2_y, c2_p],
		[d2_x, d2_y, d2_p],
		[d3_x, d3_y, d3_p],
		[c3_x, c3_y, c3_p]
	];
	apn3D[11].CDG = [(d2_x + c2_x) / 2, (d2_y + d3_y) / 2, d2_p];
	apn3D[11].vecteurNormal = [0, 0, 1];
	apn3D[11].rayonAffichage = Math.abs(c2_x - d2_x);

	apn3D[12].pts = [
		[b1_x, b1_y, b1_p],
		[e2_x, e2_y, e2_p],
		[e3_x, e3_y, e3_p],
		[b4_x, b4_y, b4_p]
	];
	apn3D[12].CDG = [(e2_x + b1_x) / 2, (e2_y + e3_y) / 2, e2_p];
	apn3D[12].vecteurNormal = [0, 0, 1];
	apn3D[12].rayonAffichage = Math.abs(e2_x - b1_x);

	apn3D[13].pts = [
		[a1_x, a1_y, a1_p],
		[c4_x, c4_y, c4_p],
		[c1_x, c1_y, c1_p],
		[d1_x, d1_y, d1_p],
		[d4_x, d4_y, d4_p],
		[e1_x, e1_y, e1_p],
		[e4_x, e4_y, e4_p],
		[a4_x, a4_y, a4_p]
	];
	apn3D[13].CDG = [(e1_x + a1_x) / 2, (c1_y + a4_y) / 2, a1_p];
	apn3D[13].vecteurNormal = [0, 0, -1];
	apn3D[13].rayonAffichage = Math.abs(e1_x - a1_x);
}