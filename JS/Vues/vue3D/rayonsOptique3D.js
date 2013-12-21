function majCDGRayonsOptiques3D() {
	rayons3D.CDGMaj = apn3D[10].CDGMaj + ESPACE_CAPTEUR_RAYON;
	listeDeTousLesPolygones.listeDesCDG[findPolygoneByName(rayons3D.nom)] = 1.0 * rayons3D.CDGMaj;
}

function initRayonsOptiques3D() {
	rayons3D.nom = 'rayon3D';
}

function drawRayonsOptiques3D() {
	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');

	var xo, yo, po, xa, ya, pa, xb, yb, pb, xc, yc, pc, xd, yd, pd, xe, ye, pe, xf, yf, pf, xg, yg, pg, xh, yh, ph, xi, yi, pi, xj, yj, pj, xk, yk, pk, xl, yl, pl;
	var xt, yt;

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var focaleEquivalenteEnMetre = focaleEnMetre * apnChoisi.cropFactor;

	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var dfeq = (focaleEquivalenteEnMetre * focaleEquivalenteEnMetre) / (priseDeVue.distanceDeMAP - focaleEquivalenteEnMetre);

	var p_f = df + focaleEnMetre;

	xa = -apnChoisi.capteurLargeur / 2000 - (-photographe.deplacementHorizontal);
	ya = apnChoisi.capteurHauteur / 2000 + photographe.deplacementVertical;
	xb = apnChoisi.capteurLargeur / 2000 - (-photographe.deplacementHorizontal);
	yd = -apnChoisi.capteurHauteur / 2000 + photographe.deplacementVertical;
	var X0_cc = (xa + xb) / 2;
	var Y0_cc = (ya + yd) / 2;
	var inc_angle = 2 * Math.PI / 50;

	var coord_3D;

	//--CHAMP DE VISION
	if (vue3D.rayonsOptiques === 'rayonsOptiquesChampsDeVision') {

		var dxc = scene.plans[2].distance * Math.tan(priseDeVue.angleChampHorizontal * Math.PI / 360.0);
		var dyc = scene.plans[2].distance * Math.tan(priseDeVue.angleChampVertical * Math.PI / 360.0);

		//Arrière plan
		xa = dxc - (-photographe.deplacementHorizontal);
		ya = dyc + photographe.deplacementVertical;
		pa = scene.plans[2].distance + photographe.deplacementProfondeur + p_f;
		xb = -1 * dxc - (-photographe.deplacementHorizontal);
		yb = dyc + photographe.deplacementVertical;
		pb = scene.plans[2].distance + photographe.deplacementProfondeur + p_f;
		xc = -1 * dxc - (-photographe.deplacementHorizontal);
		yc = -1 * dyc + photographe.deplacementVertical;
		pc = scene.plans[2].distance + photographe.deplacementProfondeur + p_f;
		xd = dxc - (-photographe.deplacementHorizontal);
		yd = -1 * dyc + photographe.deplacementVertical;
		pd = scene.plans[2].distance + photographe.deplacementProfondeur + p_f;

		//Centre du diaph
		xo = photographe.deplacementHorizontal;
		yo = photographe.deplacementVertical;
		po = p_f + photographe.deplacementProfondeur;

		//Sur le sol
		var k = yo / (yo - yc);
		xe = xa;
		ye = 0;
		pe = pa;
		xf = xb;
		yf = 0;
		pf = pb;
		xh = xo - k * (xc - xo);
		yh = 0;
		ph = po + k * (pc - po);
		xg = xo - k * (xe - xo);
		yg = 0;
		pg = po + k * (pe - po);

		//Capteur
		xi = 0.018 - (-photographe.deplacementHorizontal);
		yi = 0.012 + photographe.deplacementVertical;
		pi = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);
		xj = -0.018 - (-photographe.deplacementHorizontal);
		yj = 0.012 + photographe.deplacementVertical;
		pj = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);
		xk = -0.018 - (-photographe.deplacementHorizontal);
		yk = -0.012 + photographe.deplacementVertical;
		pk = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);
		xl = 0.018 - (-photographe.deplacementHorizontal);
		yl = -0.012 + photographe.deplacementVertical;
		pl = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);

		ct.strokeStyle = 'rgba(' + COULEUR_PDC + ',0.5)';

		//si une partie du champ est sur le sol
		if (pg < pf) {

			ct.beginPath();
			coord_3D = xyp2XYmaj(xi, yi, pi);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xg, yg, pg);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xf, yf, pf);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xb, yb, pb);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xl, yl, pl);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xk, yk, pk);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xe, ye, pe);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xh, yh, ph);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xj, yj, pj);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.closePath();
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xb, yb, pb);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xe, ye, pe);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xf, yf, pf);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xh, yh, ph);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xg, yg, pg);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xl, yl, pl);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xi, yi, pi);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xj, yj, pj);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xk, yk, pk);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.closePath();
			ct.stroke();
		} else {

			//Arrière plan
			ct.beginPath();
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xb, yb, pb);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xc, yc, pc);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xd, yd, pd);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.closePath();
			ct.stroke();

			//Capteur
			ct.beginPath();
			coord_3D = xyp2XYmaj(xi, yi, pi);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xj, yj, pj);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xk, yk, pk);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xl, yl, pl);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.closePath();
			ct.stroke();

			//Rayons
			ct.beginPath();
			coord_3D = xyp2XYmaj(xi, yi, pi);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xc, yc, pc);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xj, yj, pj);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xd, yd, pd);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xl, yl, pl);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xb, yb, pb);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();

			ct.beginPath();
			coord_3D = xyp2XYmaj(xk, yk, pk);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.stroke();
		}
	}

	//--FLOU AVANT
	else if (vue3D.rayonsOptiques === 'rayonsOptiquesFlouAvantPlan') {

		//ct.fillStyle = 'rgba(' + color_avantPlan + ',0.5)';
		ct.fillStyle = scene.plans[0].couleur;
		ct.globalAlpha = 0.5;
		ct.lineWidth = 1;

		xa = photographe.deplacementHorizontal;
		ya = photographe.deplacementVertical;
		pa = scene.plans[0].distance + photographe.deplacementProfondeur + p_f;
		pb = p_f + photographe.deplacementProfondeur;
		pc = photographe.deplacementProfondeur;
		pd = photographe.deplacementProfondeur;
		pe = p_f + photographe.deplacementProfondeur;

		for (i = 0; i <= 2 * Math.PI; i += inc_angle) {

			xb = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.cos(i) - (-photographe.deplacementHorizontal);
			yb = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.sin(i) + photographe.deplacementVertical;
			var flouAvantPlan = calcFlou(scene.plans[0].distance).flou;
			xc = (flouAvantPlan / 2) * Math.cos(i) + X0_cc;
			yc = (flouAvantPlan / 2) * Math.sin(i) + Y0_cc;
			xd = (flouAvantPlan / 2) * Math.cos(i + inc_angle) + X0_cc;
			yd = (flouAvantPlan / 2) * Math.sin(i + inc_angle) + Y0_cc;
			xe = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.cos(i + inc_angle) - (-photographe.deplacementHorizontal);
			ye = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.sin(i + inc_angle) + photographe.deplacementVertical;

			ct.beginPath();
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xb, yb, pb);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xc, yc, pc);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xd, yd, pd);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xe, ye, pe);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.closePath();
			ct.fill();
		}

		ct.globalAlpha = 1;
	}
	//--FLOU ARRIERE
	else if (vue3D.rayonsOptiques === 'rayonsOptiquesFlouArrierePlan') {
		//-Arrière plan
		//ct.fillStyle = 'rgba(' + color_arrierePlan + ',0.5)';
		ct.fillStyle = scene.plans[2].couleur;
		ct.globalAlpha = 0.5;
		ct.lineWidth = 1;

		xa = photographe.deplacementHorizontal;
		ya = photographe.deplacementVertical;
		pa = scene.plans[2].distance + photographe.deplacementProfondeur + p_f;
		pb = p_f + photographe.deplacementProfondeur;
		pc = photographe.deplacementProfondeur;
		pd = photographe.deplacementProfondeur;
		pe = p_f + photographe.deplacementProfondeur;

		for (i = 0; i <= 2 * Math.PI; i += inc_angle) {

			xb = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.cos(i) - (-photographe.deplacementHorizontal);
			yb = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.sin(i) + photographe.deplacementVertical;
			var flouArrierePlan = calcFlou(scene.plans[2].distance).flou;
			xc = -1 * ((flouArrierePlan / 2) * Math.cos(i) - X0_cc);
			yc = -1 * ((flouArrierePlan / 2) * Math.sin(i) - Y0_cc);
			xd = -1 * ((flouArrierePlan / 2) * Math.cos(i + inc_angle) - X0_cc);
			yd = -1 * ((flouArrierePlan / 2) * Math.sin(i + inc_angle) - Y0_cc);
			xe = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.cos(i + inc_angle) - (-photographe.deplacementHorizontal);
			ye = (focaleEnMetre / (2 * objectifChoisi.ouverture)) * Math.sin(i + inc_angle) + photographe.deplacementVertical;

			ct.beginPath();
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(xb, yb, pb);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xc, yc, pc);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xd, yd, pd);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(xe, ye, pe);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			ct.closePath();
			ct.fill();
		}

		ct.globalAlpha = 1;
	}
	//--VISEE REFLEX
	/*
	else if (vue3D.rayonsOptiques === 'visee_reflex') {

		ct.beginPath();
		ct.strokeStyle = 'rgba(' + COULEUR_PDC + ',0.5)';
		ct.fillStyle = 'rgba(' + COULEUR_PDC + ',0.5)';
		ct.lineWidth = 1;

		drawLine3D(photographe.deplacementHorizontal, photographe.deplacementVertical, priseDeVue.distanceDeMAP + photographe.deplacementProfondeur + p_f, mod_miroir.CDG[0], mod_miroir.CDG[1], mod_miroir.CDG[2]);
		drawLine3D(mod_miroir.CDG[0], mod_miroir.CDG[1], mod_miroir.CDG[2], mod_miroir_haut.CDG[0], mod_miroir_haut.CDG[1], mod_miroir_haut.CDG[2]);
		drawLine3D(mod_miroir_haut.CDG[0], mod_miroir_haut.CDG[1], mod_miroir_haut.CDG[2], mod_miroir_bas.CDG[0], mod_miroir_bas.CDG[1], mod_miroir_bas.CDG[2]);
		drawLine3D(mod_miroir_bas.CDG[0], mod_miroir_bas.CDG[1], mod_miroir_bas.CDG[2], -(-photographe.deplacementHorizontal), photographe.deplacementVertical + y_foyer_corps + h_finVisee - (h_finVisee - h_debutVisee) / 2, photographe.deplacementProfondeur - p_foyer_corps);

	}
	*/
}