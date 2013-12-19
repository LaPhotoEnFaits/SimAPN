listePolygonesObjectifChoisi = new Array(NBR_CYLINDRES_OBJECTIF_3D);

function initObjectif3D() {

	for (var i = 0; i !== NBR_CYLINDRES_OBJECTIF_3D; i++)
		listePolygonesObjectifChoisi[i] = new Array(NBR_POLYGONES_PAR_CYLINDRE);

	extrapoleObjectif();
	setPtsObjectifChoisi3D();
}

function extrapoleObjectif() {
	var i = 0;
	var ii = 0;
	var iii = 0;

	//Cherche les 2 objectifs prédéfinis qui entourent le courant
	for (i = 0; i < listeObjectif.length; i++) {
		if ((objectifChoisi.focale >= listeObjectif[i].focale) && ((i === listeObjectif.length - 1) || (objectifChoisi.focale < listeObjectif[i + 1].focale)))
			ii = i;
	}

	//On tombe sur une valeur connue
	if (objectifChoisi.focale === listeObjectif[ii].focale) {

		objectifExtrapole.nbrCylindres = listeObjectif[ii].nbrCylindres;
		objectifExtrapole.numBague = listeObjectif[ii].numBague;

		i = 0;
		iii = 0;
		while (i !== objectifExtrapole.nbrCylindres) {
			if (iii !== 0) {
				objectifExtrapole.ecartCyclindre[iii - 1] = listeObjectif[ii].ecartCyclindre[iii - 1];
				i++;
			}
			objectifExtrapole.longueurCylindre[iii] = listeObjectif[ii].longueurCylindre[iii];
			objectifExtrapole.diametreCylindre[iii] = listeObjectif[ii].diametreCylindre[iii];

			i++;
			iii++;
		}
	}

	//On tombe entre 2 valeurs connues
	else {

		//Nombre de polygones et place de la numBague comme sur l'objo dont la focale est la plus proche
		var f1 = listeObjectif[ii].focale;
		var f2 = listeObjectif[ii + 1].focale;

		objectifExtrapole.focale = objectifChoisi.focale;

		if ((objectifChoisi.focale - f1) < (f2 - objectifChoisi.focale)) { //plus proche du premier
			objectifExtrapole.nbrCylindres = listeObjectif[ii].nbrCylindres;
			objectifExtrapole.numBague = listeObjectif[ii].numBague;
		} else { //Plus proche du second
			objectifExtrapole.nbrCylindres = listeObjectif[ii + 1].nbrCylindres;
			objectifExtrapole.numBague = listeObjectif[ii + 1].numBague;
		}


		var k = (objectifChoisi.focale - f1) / (f2 - f1); //coeff qui module linéairement les dimensions en fonction de la position de f p/r à f1 et f2

		i = 0;
		iii = 0;
		var l_a, l_b, e_a, e_b, d_a, d_b; //pour stocker les longueurs, diamètres et épaisseurs pour les calculs

		while (i !== objectifExtrapole.nbrCylindres) {

			//Pour gérer le fait que le nombre de polynomes n'est pas cst d'un objo à l'autre
			if (listeObjectif[ii].longueurCylindre[iii])
				l_a = listeObjectif[ii].longueurCylindre[iii];
			else
				l_a = 0;

			if (listeObjectif[ii + 1].longueurCylindre[iii])
				l_b = listeObjectif[ii + 1].longueurCylindre[iii];
			else
				l_b = 0;

			if (listeObjectif[ii].ecartCyclindre[iii - 1])
				e_a = listeObjectif[ii].ecartCyclindre[iii - 1];
			else
				e_a = 0;

			if (listeObjectif[ii + 1].ecartCyclindre[iii - 1])
				e_b = listeObjectif[ii + 1].ecartCyclindre[iii - 1];
			else
				e_b = 0;

			if (listeObjectif[ii].diametreCylindre[iii])
				d_a = listeObjectif[ii].diametreCylindre[iii];
			else
				d_a = 0;

			if (listeObjectif[ii + 1].diametreCylindre[iii])
				d_b = listeObjectif[ii + 1].diametreCylindre[iii];
			else
				d_b = 0;

			if (iii !== 0) {
				objectifExtrapole.ecartCyclindre[iii - 1] = e_a + k * (e_b - e_a);
				i++;
			}

			objectifExtrapole.longueurCylindre[iii] = l_a + k * (l_b - l_a);
			objectifExtrapole.diametreCylindre[iii] = d_a + k * (d_b - d_a);

			i++;
			iii++;
		}
	}

	objectifChoisi.nbrCylindres = objectifExtrapole.nbrCylindres;
	objectifChoisi.indiceOuvertureMax = 22;
}

function setPtsObjectifChoisi3D() {

	//dimensions pour construire les cylindres
	var l1, l2, l3, l4, l5;
	var d1, d2, d3, d4, d5;
	var e1, e2, e3, e4;

	var numeroCylindrenumBague;
	var nbrPolygonesObjectif;

	if (apnChoisi.capteurFormat === '1/3.2') {
		nbrPolygonesObjectif = 3;
		l1 = 0.001 * objectifChoisi.focale / 3;
		d1 = 0.001 * objectifChoisi.focale / objectifChoisi.indiceOuvertureMin;
		e1 = l1;
		l2 = l1;
		d2 = d1;
		l3 = 0;
		l4 = 0;
		l5 = 0;
		d3 = 0;
		d4 = 0;
		d5 = 0;
		e2 = 0;
		e3 = 0;
		e4 = 0;
	} else {

		if (objectifChoisi.numeroObjectifExistant !== 'X') {

			nbrPolygonesObjectif = listeObjectif[objectifChoisi.numeroObjectifExistant].nbrCylindres;

			l1 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].longueurCylindre[0];
			d1 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].diametreCylindre[0];
			e1 = 0;

			if (nbrPolygonesObjectif >= 3) {
				e1 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].ecartCyclindre[0];
				l2 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].longueurCylindre[1];
				d2 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].diametreCylindre[1];
			}
			if (nbrPolygonesObjectif >= 5) {
				e2 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].ecartCyclindre[1];
				l3 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].longueurCylindre[2];
				d3 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].diametreCylindre[2];
			}
			if (nbrPolygonesObjectif >= 7) {
				e3 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].ecartCyclindre[2];
				l4 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].longueurCylindre[3];
				d4 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].diametreCylindre[3];
			}
			if (nbrPolygonesObjectif >= 9) {
				e4 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].ecartCyclindre[3];
				l5 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].longueurCylindre[4];
				d5 = 0.001 * listeObjectif[objectifChoisi.numeroObjectifExistant].diametreCylindre[4];
			}

			numeroCylindrenumBague = listeObjectif[objectifChoisi.numeroObjectifExistant].numBague;
		} else {
			nbrPolygonesObjectif = objectifExtrapole.nbrCylindres;

			l1 = 0.001 * objectifExtrapole.longueurCylindre[0];
			d1 = 0.001 * objectifExtrapole.diametreCylindre[0];

			if (nbrPolygonesObjectif >= 3) {
				e1 = 0.001 * objectifExtrapole.ecartCyclindre[0];
				l2 = 0.001 * objectifExtrapole.longueurCylindre[1];
				d2 = 0.001 * objectifExtrapole.diametreCylindre[1];
			}

			if (nbrPolygonesObjectif >= 5) {
				e2 = 0.001 * objectifExtrapole.ecartCyclindre[1];
				l3 = 0.001 * objectifExtrapole.longueurCylindre[2];
				d3 = 0.001 * objectifExtrapole.diametreCylindre[2];
			}

			if (nbrPolygonesObjectif >= 7) {
				e3 = 0.001 * objectifExtrapole.ecartCyclindre[2];
				l4 = 0.001 * objectifExtrapole.longueurCylindre[3];
				d4 = 0.001 * objectifExtrapole.diametreCylindre[3];
			}

			if (nbrPolygonesObjectif >= 9) {
				e4 = 0.001 * objectifExtrapole.ecartCyclindre[3];
				l5 = 0.001 * objectifExtrapole.longueurCylindre[4];
				d5 = 0.001 * objectifExtrapole.diametreCylindre[4];
			}
			numeroCylindrenumBague = objectifExtrapole.numBague;
		}

		//Fait en sorte que le diaphragme ne dépace pas de l'objectif (en longueur)
		var focaleEnMetre = objectifChoisi.focale / 1000;
		var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
		var p_f = df + focaleEnMetre;
		var p_diaff = p_f; // + photographe.deplacementProfondeur;
		var k;

		var l_temp = p_diaff - (apnChoisi.p_corps - apnChoisi.p_foyer_corps) - (l1 + l2 + l3 + l4 + l5 + e1 + e2 + e3 + e4);

		if (l_temp > 0) {
			k = (p_diaff - (apnChoisi.p_corps - apnChoisi.p_foyer_corps)) / (l1 + l2 + l3 + l4 + l5 + e1 + e2 + e3 + e4);
			l1 = k * l1;

			if (nbrPolygonesObjectif >= 3) {
				e1 = k * e1;
				l2 = k * l2;
			}
			if (nbrPolygonesObjectif >= 5) {
				e2 = k * e2;
				l3 = k * l3;
			}
			if (nbrPolygonesObjectif >= 9) {
				e3 = k * e3;
				l4 = k * l4;
			}
			if (nbrPolygonesObjectif >= 7) {
				e4 = k * e4;
				l5 = k * l5;
			}
		}


		//Module les diamètres en fonction de l'ouverture min
		var d_temp = focaleEnMetre / objectifChoisi.indiceOuvertureMin;

		if (nbrPolygonesObjectif === 3) {
			k = d_temp / d2;
			if (k > 1)
				d2 = k * d2;
			if (d1 > d2)
				d1 = d2;
		}

		if (nbrPolygonesObjectif === 5) {
			k = d_temp / d3;
			if (k > 1) {
				d3 = k * d3;
				d2 = k * d2;
			}
			if (d2 > d3)
				d2 = d3;
			if (d1 > d2)
				d1 = d2;
		}

		if (nbrPolygonesObjectif === 7) {
			k = d_temp / d4;
			if (k > 1) {
				d4 = k * d4;
				d3 = k * d3;
				d2 = k * d2;
			}
			if (d3 > d4)
				d3 = d4;
			if (d2 > d3)
				d2 = d3;
			if (d1 > d2)
				d1 = d2;
		}

		if (nbrPolygonesObjectif === 9) {
			k = d_temp / d5;
			if (k > 1) {
				d5 = k * d5;
				d4 = k * d4;
				d3 = k * d3;
				d2 = k * d2;
			}
			if (d4 > d5)
				d4 = d5;
			if (d3 > d4)
				d3 = d4;
			if (d2 > d3)
				d2 = d3;
			if (d1 > d2)
				d1 = d2;
		}


		//Fait en sorte que les diamètres soient croissants
		if (nbrPolygonesObjectif === 3) {
			if (d2 < d1)
				d2 = d1;
		}

		if (nbrPolygonesObjectif === 5) {
			if (d2 < d1)
				d2 = d1;
			if (d3 < d2)
				d3 = d2;
		}

		if (nbrPolygonesObjectif === 7) {
			if (d2 < d1)
				d2 = d1;
			if (d3 < d2)
				d3 = d2;
			if (d4 < d3)
				d4 = d3;
		}

		if (nbrPolygonesObjectif === 9) {
			if (d2 < d1)
				d2 = d1;
			if (d3 < d2)
				d3 = d2;
			if (d4 < d3)
				d4 = d3;
			if (d5 < d4)
				d5 = d4;
		}

		d1 = d1 / apnChoisi.cropFactor;
		d2 = d2 / apnChoisi.cropFactor;
		d3 = d3 / apnChoisi.cropFactor;
		d4 = d4 / apnChoisi.cropFactor;
		d5 = d5 / apnChoisi.cropFactor;

	}

	var p0 = photographe.deplacementProfondeur + apnChoisi.p_corps - apnChoisi.p_foyer_corps;

	//Sommets
	var a1_x = 0;
	var a1_y = 0;
	var a1_p = 0;
	var a2_x = 0;
	var a2_y = 0;
	var a2_p = 0;
	var a3_x = 0;
	var a3_y = 0;
	var a3_p = 0;
	var a4_x = 0;
	var a4_y = 0;
	var a4_p = 0;

	var b1_x = 0;
	var b1_y = 0;
	var b1_p = 0;
	var b2_x = 0;
	var b2_y = 0;
	var b2_p = 0;
	var b3_x = 0;
	var b3_y = 0;
	var b3_p = 0;
	var b4_x = 0;
	var b4_y = 0;
	var b4_p = 0;

	var c1_x = 0;
	var c1_y = 0;
	var c1_p = 0;
	var c2_x = 0;
	var c2_y = 0;
	var c2_p = 0;
	var c3_x = 0;
	var c3_y = 0;
	var c3_p = 0;
	var c4_x = 0;
	var c4_y = 0;
	var c4_p = 0;

	var d1_x = 0;
	var d1_y = 0;
	var d1_p = 0;
	var d2_x = 0;
	var d2_y = 0;
	var d2_p = 0;
	var d3_x = 0;
	var d3_y = 0;
	var d3_p = 0;
	var d4_x = 0;
	var d4_y = 0;
	var d4_p = 0;

	var e1_x = 0;
	var e1_y = 0;
	var e1_p = 0;
	var e2_x = 0;
	var e2_y = 0;
	var e2_p = 0;
	var e3_x = 0;
	var e3_y = 0;
	var e3_p = 0;
	var e4_x = 0;
	var e4_y = 0;
	var e4_p = 0;

	var i = 0;
	var u_x = 0;
	var u_y = 1;
	var u_p = 0;
	var v_x = 0;
	var v_y = 1;
	var v_p = 0;
	var w_x = 0;
	var w_y = 1;
	var w_p = 0;


	for (i = 0; i * DELTA_ANGLE_OBJECTIF < 2 * Math.PI; i++) {

		//Sommets
		a1_x = -(-photographe.deplacementHorizontal) + (d1 / 2) * Math.cos(i * DELTA_ANGLE_OBJECTIF);
		a1_y = photographe.deplacementVertical + (d1 / 2) * Math.sin(i * DELTA_ANGLE_OBJECTIF);
		a1_p = p0;
		a2_x = a1_x;
		a2_y = a1_y;
		a2_p = p0 + l1;
		a3_x = -(-photographe.deplacementHorizontal) + (d1 / 2) * Math.cos((i + 1) * DELTA_ANGLE_OBJECTIF);
		a3_y = photographe.deplacementVertical + (d1 / 2) * Math.sin((i + 1) * DELTA_ANGLE_OBJECTIF);
		a3_p = a2_p;
		a4_x = a3_x;
		a4_y = a3_y;
		a4_p = a1_p;

		//u:cb, v:cd, w=u.v
		u_x = a2_x - a3_x;
		u_y = a2_y - a3_y;
		u_p = a2_p - a3_p;
		v_x = a4_x - a3_x;
		v_y = a4_y - a3_y;
		v_p = a4_p - a3_p;
		w_x = u_y * v_p - u_p * v_y;
		w_y = u_p * v_x - u_x * v_p;
		w_p = u_x * v_y - u_y * v_x;

		//MAJ du polynome
		listePolygonesObjectifChoisi[0][i] = new Polygone("Obj0" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
			[a1_x, a1_y, a1_p],
			[a2_x, a2_y, a2_p],
			[a3_x, a3_y, a3_p],
			[a4_x, a4_y, a4_p]
		], [
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		], [(a1_x + a3_x) / 2, (a1_y + a3_y) / 2, (a1_p + a3_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, l1);

		if (numeroCylindrenumBague !== 0)
			listePolygonesObjectifChoisi[0][i].contour[3] = 0;


		if (nbrPolygonesObjectif >= 3) {
			//Sommets
			b1_x = -(-photographe.deplacementHorizontal) + (d2 / 2) * Math.cos(i * DELTA_ANGLE_OBJECTIF);
			b1_y = photographe.deplacementVertical + (d2 / 2) * Math.sin(i * DELTA_ANGLE_OBJECTIF);
			b1_p = a2_p + e1;
			b2_x = b1_x;
			b2_y = b1_y;
			b2_p = b1_p + l2;
			b3_x = -(-photographe.deplacementHorizontal) + (d2 / 2) * Math.cos((i + 1) * DELTA_ANGLE_OBJECTIF);
			b3_y = photographe.deplacementVertical + (d2 / 2) * Math.sin((i + 1) * DELTA_ANGLE_OBJECTIF);
			b3_p = b2_p;
			b4_x = b3_x;
			b4_y = b3_y;
			b4_p = b1_p;

			//Entre les 2 cylindres
			//u:cb, v:cd, w=u.v
			u_x = a3_x - a2_x;
			u_y = a3_y - a2_y;
			u_p = a3_p - a2_p;
			v_x = b1_x - a2_x;
			v_y = b1_y - a2_y;
			v_p = b1_p - a2_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[1][i] = new Polygone("Obj1" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[b1_x, b1_y, b1_p],
				[b4_x, b4_y, b4_p],
				[a3_x, a3_y, a3_p],
				[a2_x, a2_y, a2_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(b4_x + a2_x) / 2, (b4_y + a2_y) / 2, (b4_p + a2_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, d2 - d1);

			if (numeroCylindrenumBague !== 1)
				listePolygonesObjectifChoisi[1][i].contour[3] = 0;

			//2nd cylindre
			//u:cb, v:cd, w=u.v
			u_x = b2_x - b3_x;
			u_y = b2_y - b3_y;
			u_p = b2_p - b3_p;
			v_x = b4_x - b3_x;
			v_y = b4_y - b3_y;
			v_p = b4_p - b3_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[2][i] = new Polygone("Obj2" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[b1_x, b1_y, b1_p],
				[b2_x, b2_y, b2_p],
				[b3_x, b3_y, b3_p],
				[b4_x, b4_y, b4_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(b1_x + b3_x) / 2, (b1_y + b3_y) / 2, (b1_p + b3_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, l2);
			if (numeroCylindrenumBague !== 2)
				listePolygonesObjectifChoisi[2][i].contour[3] = 0;

		}

		if (nbrPolygonesObjectif >= 5) {
			//Sommets
			c1_x = -(-photographe.deplacementHorizontal) + (d3 / 2) * Math.cos(i * DELTA_ANGLE_OBJECTIF);
			c1_y = photographe.deplacementVertical + (d3 / 2) * Math.sin(i * DELTA_ANGLE_OBJECTIF);
			c1_p = b2_p + e2;
			c2_x = c1_x;
			c2_y = c1_y;
			c2_p = c1_p + l3;
			c3_x = -(-photographe.deplacementHorizontal) + (d3 / 2) * Math.cos((i + 1) * DELTA_ANGLE_OBJECTIF);
			c3_y = photographe.deplacementVertical + (d3 / 2) * Math.sin((i + 1) * DELTA_ANGLE_OBJECTIF);
			c3_p = c2_p;
			c4_x = c3_x;
			c4_y = c3_y;
			c4_p = c1_p;

			//Entre les 2 cylindres
			//u:cb, v:cd, w=u.v
			u_x = b3_x - b2_x;
			u_y = b3_y - b2_y;
			u_p = b3_p - b2_p;
			v_x = c1_x - c2_x;
			v_y = c1_y - c2_y;
			v_p = c1_p - c2_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[3][i] = new Polygone("Obj3" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[c1_x, c1_y, c1_p],
				[c4_x, c4_y, c4_p],
				[b3_x, b3_y, b3_p],
				[b2_x, b2_y, b2_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(c4_x + b2_x) / 2, (c4_y + b2_y) / 2, (c4_p + b2_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, d3 - d2);
			if (numeroCylindrenumBague !== 3)
				listePolygonesObjectifChoisi[3][i].contour[3] = 0;

			//2nd cylindre
			//u:cb, v:cd, w=u.v
			u_x = c2_x - c3_x;
			u_y = c2_y - c3_y;
			u_p = c2_p - c3_p;
			v_x = c4_x - c3_x;
			v_y = c4_y - c3_y;
			v_p = c4_p - c3_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[4][i] = new Polygone("Obj4" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[c1_x, c1_y, c1_p],
				[c2_x, c2_y, c2_p],
				[c3_x, c3_y, c3_p],
				[c4_x, c4_y, c4_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(c1_x + c3_x) / 2, (c1_y + c3_y) / 2, (c1_p + c3_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, l3);
			if (numeroCylindrenumBague !== 4)
				listePolygonesObjectifChoisi[4][i].contour[3] = 0;

		}

		if (nbrPolygonesObjectif >= 5) {
			//Sommets
			d1_x = -(-photographe.deplacementHorizontal) + (d4 / 2) * Math.cos(i * DELTA_ANGLE_OBJECTIF);
			d1_y = photographe.deplacementVertical + (d4 / 2) * Math.sin(i * DELTA_ANGLE_OBJECTIF);
			d1_p = c2_p + e3;
			d2_x = d1_x;
			d2_y = d1_y;
			d2_p = d1_p + l4;
			d3_x = -(-photographe.deplacementHorizontal) + (d4 / 2) * Math.cos((i + 1) * DELTA_ANGLE_OBJECTIF);
			d3_y = photographe.deplacementVertical + (d4 / 2) * Math.sin((i + 1) * DELTA_ANGLE_OBJECTIF);
			d3_p = d2_p;
			d4_x = d3_x;
			d4_y = d3_y;
			d4_p = d1_p;

			//Entre les 2 cylindres
			//u:cb, v:cd, w=u.v
			u_x = c3_x - c2_x;
			u_y = c3_y - c2_y;
			u_p = c3_p - c2_p;
			v_x = d1_x - d2_x;
			v_y = d1_y - d2_y;
			v_p = d1_p - d2_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[5][i] = new Polygone("Obj5" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[d1_x, d1_y, d1_p],
				[d4_x, d4_y, d4_p],
				[c3_x, c3_y, c3_p],
				[c2_x, c2_y, c2_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(d4_x + c2_x) / 2, (d4_y + c2_y) / 2, (d4_p + c2_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, d4 - d3);
			if (numeroCylindrenumBague !== 5)
				listePolygonesObjectifChoisi[5][i].contour[3] = 0;
			//2nd cylindre
			//u:cb, v:cd, w=u.v
			u_x = d2_x - d3_x;
			u_y = d2_y - d3_y;
			u_p = d2_p - d3_p;
			v_x = d4_x - d3_x;
			v_y = d4_y - d3_y;
			v_p = d4_p - d3_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[6][i] = new Polygone("Obj6" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[d1_x, d1_y, d1_p],
				[d2_x, d2_y, d2_p],
				[d3_x, d3_y, d3_p],
				[d4_x, d4_y, d4_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(d1_x + d3_x) / 2, (d1_y + d3_y) / 2, (d1_p + d3_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, l4);
			if (numeroCylindrenumBague !== 6)
				listePolygonesObjectifChoisi[6][i].contour[3] = 0;
		}

		if (nbrPolygonesObjectif >= 7) {
			//Sommets
			e1_x = -(-photographe.deplacementHorizontal) + (d5 / 2) * Math.cos(i * DELTA_ANGLE_OBJECTIF);
			e1_y = photographe.deplacementVertical + (d5 / 2) * Math.sin(i * DELTA_ANGLE_OBJECTIF);
			e1_p = d2_p + e4;
			e2_x = e1_x;
			e2_y = e1_y;
			e2_p = e1_p + l5;
			e3_x = -(-photographe.deplacementHorizontal) + (d5 / 2) * Math.cos((i + 1) * DELTA_ANGLE_OBJECTIF);
			e3_y = photographe.deplacementVertical + (d5 / 2) * Math.sin((i + 1) * DELTA_ANGLE_OBJECTIF);
			e3_p = e2_p;
			e4_x = e3_x;
			e4_y = e3_y;
			e4_p = e1_p;

			//Entre les 2 cylindres
			//u:cb, v:cd, w=u.v
			u_x = d3_x - d2_x;
			u_y = d3_y - d2_y;
			u_p = d3_p - d2_p;
			v_x = e1_x - e2_x;
			v_y = e1_y - e2_y;
			v_p = e1_p - e2_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[7][i] = new Polygone("Obj7" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[e1_x, e1_y, e1_p],
				[e4_x, e4_y, e4_p],
				[d3_x, d3_y, d3_p],
				[d2_x, d2_y, d2_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(e4_x + d2_x) / 2, (e4_y + d2_y) / 2, (e4_p + d2_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, d5 - d4);
			if (numeroCylindrenumBague !== 7)
				listePolygonesObjectifChoisi[7][i].contour[3] = 0;
			//2nd cylindre
			//u:cb, v:cd, w=u.v
			u_x = e2_x - e3_x;
			u_y = e2_y - e3_y;
			u_p = e2_p - e3_p;
			v_x = e4_x - e3_x;
			v_y = e4_y - e3_y;
			v_p = e4_p - e3_p;
			w_x = u_y * v_p - u_p * v_y;
			w_y = u_p * v_x - u_x * v_p;
			w_p = u_x * v_y - u_y * v_x;

			//MAJ du polynome
			listePolygonesObjectifChoisi[8][i] = new Polygone("Obj8" + i, [180, 180, 180, 0.8], [50, 50, 50], [10, 10, 10, 1], [
				[e1_x, e1_y, e1_p],
				[e2_x, e2_y, e2_p],
				[e3_x, e3_y, e3_p],
				[e4_x, e4_y, e4_p]
			], [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			], [(e1_x + e3_x) / 2, (e1_y + e3_y) / 2, (e1_p + e3_p) / 2], 0, [w_x, w_y, w_p], [0, 0, 0], majPtsPolygones, drawPolygone, l5);
			if (numeroCylindrenumBague !== 8)
				listePolygonesObjectifChoisi[8][i].contour[3] = 0;
		}
	}
}