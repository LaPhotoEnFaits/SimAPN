var DP_PHOTOGRAPHE = 0.1;

function drawImg2Dto3D(img, X0, Y0, X1, Y1, X2, Y2, h) {

	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');

	X1 -= X0;
	Y1 -= Y0;
	X2 -= X0;
	Y2 -= Y0;

	var U0 = 0;
	var V0 = 0;
	var U1 = img.width - 1;
	var V1 = 0;
	var U2 = 0;
	var V2 = img.height - 1;

	var det = 1 / (U1 * V2 - U2 * V1);

	var A = (V2 * X1 - V1 * X2) * det;
	var B = (V2 * Y1 - V1 * Y2) * det;
	var C = (U1 * X2 - U2 * X1) * det;
	var D = (U1 * Y2 - U2 * Y1) * det;
	var E = X0 - A * U0 - C * V0;
	var F = Y0 - B * U0 - D * V0;

	ct.save();
	ct.transform(A, B, C, D, E, F);

	if (h)
		ct.drawImage(img, 0, 0, img.width, h, 0, 0, img.width, h);
	else
		ct.drawImage(img, 0, 0, img.width, img.height);

	ct.restore();
}

function initSilhouettes3D() {
	silhouettePlan[0] = new Polygone();
	silhouettePlan[1] = new Polygone();
	silhouettePlan[2] = new Polygone();

	silhouettePlan[0].nom = 'silhouettePlan0';
	silhouettePlan[1].nom = 'silhouettePlan1';
	silhouettePlan[2].nom = 'silhouettePlan2';

	silhouettePhotographe.nom = 'silhouettePhotographe';
}

function drawSilhouette3D(numero) {

	var largeurEnMetre = scene.illustrations[numero].hauteurEnMetre * scene.illustrations[numero].image.width / scene.illustrations[numero].image.height;

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var p_f = df + focaleEnMetre;

	var x1 = largeurEnMetre / 2 - scene.illustrations[numero].offsetXEnMetre;
	var y1 = scene.illustrations[numero].hauteurEnMetre - scene.illustrations[numero].offsetYEnMetre;
	var p1 = scene.plans[numero].distance + photographe.deplacementProfondeur + p_f;
	var x2 = -largeurEnMetre / 2 - scene.illustrations[numero].offsetXEnMetre;
	var y2 = y1;
	var p2 = p1;
	var x4 = x1;
	var y4 = -scene.illustrations[numero].offsetYEnMetre;
	var p4 = p1;

	var proj_temp = xyp2XYmaj(x1, y1, p1);
	x1 = proj_temp.X;
	y1 = proj_temp.Y;
	proj_temp = xyp2XYmaj(x2, y2, p2);
	x2 = proj_temp.X;
	y2 = proj_temp.Y;
	proj_temp = xyp2XYmaj(x4, y4, p4);
	x4 = proj_temp.X;
	y4 = proj_temp.Y;

	if (scene.illustrations[numero].image.width)
		drawImg2Dto3D(scene.illustrations[numero].image, x1, y1, x2, y2, x4, y4);
}

function drawSilhouettePhotographe() {
	var hauteurAPN = 1.68;
	var largeurEnMetre = illustrationPhotographe.hauteurEnMetre * illustrationPhotographe.image.width / illustrationPhotographe.image.height;

	var x1 = photographe.deplacementHorizontal + largeurEnMetre / 2;
	var y1 = photographe.deplacementVertical - hauteurAPN + illustrationPhotographe.hauteurEnMetre;
	var p1 = photographe.deplacementProfondeur - DP_PHOTOGRAPHE;
	var x2 = photographe.deplacementHorizontal - largeurEnMetre / 2;
	var y2 = y1;
	var p2 = p1;
	var x4 = x1;
	var y4 = photographe.deplacementVertical - hauteurAPN;
	var p4 = p1;

	var proj_temp = xyp2XYmaj(x1, y1, p1);
	x1 = proj_temp.X;
	y1 = proj_temp.Y;
	proj_temp = xyp2XYmaj(x2, y2, p2);
	x2 = proj_temp.X;
	y2 = proj_temp.Y;
	proj_temp = xyp2XYmaj(x4, y4, p4);
	x4 = proj_temp.X;
	y4 = proj_temp.Y;


	var hauteur = (illustrationPhotographe.hauteurEnMetre - hauteurAPN) * illustrationPhotographe.image.height / illustrationPhotographe.hauteurEnMetre + photographe.deplacementVertical * illustrationPhotographe.image.height / illustrationPhotographe.hauteurEnMetre;

	if (hauteur > illustrationPhotographe.image.height)
		hauteur = illustrationPhotographe.image.height;

	if (illustrationPhotographe.image.width) {
		drawImg2Dto3D(illustrationPhotographe.image, x1, y1, x2, y2, x4, y4, hauteur);

		//ombre
		if (photographe.deplacementVertical > hauteurAPN) {

			var p_ombre = 0.05;

			//--pdC
			var cvs = document.getElementById('cvsVue3D');
			var ct = cvs.getContext('2d');
			ct.strokeStyle = 'rgba(0,0,0,0.75)';
			ct.fillStyle = 'rgba(0,0,0,0.75)';

			var xt = 1.0;
			var yt = 1.0;


			ct.beginPath();

			coord_3D = xyp2XYmaj(photographe.deplacementHorizontal - largeurEnMetre / 2, 0, photographe.deplacementProfondeur + p_ombre / 2);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.moveTo(xt, yt);
			coord_3D = xyp2XYmaj(photographe.deplacementHorizontal + largeurEnMetre / 2, 0, photographe.deplacementProfondeur + p_ombre / 2);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(photographe.deplacementHorizontal + largeurEnMetre / 2, 0, photographe.deplacementProfondeur - p_ombre / 2);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
			coord_3D = xyp2XYmaj(photographe.deplacementHorizontal - largeurEnMetre / 2, 0, photographe.deplacementProfondeur - p_ombre / 2);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);

			ct.closePath();

			ct.stroke();
			ct.fill();
		}
	}
}

function majCDGSilhouettes3D() {

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var p_f = df + focaleEnMetre;

	for (var i = 0; i !== 3; i++) {
		silhouettePlan[i].CDGMaj = 1.0 * majCoord3D(0, 0, scene.plans[i].distance + photographe.deplacementProfondeur + p_f).p.toFixed(6);
		listeDeTousLesPolygones.listeDesCDG[findPolygoneByName(silhouettePlan[i].nom)] = 1.0 * silhouettePlan[i].CDGMaj;
	}

	silhouettePhotographe.CDGMaj = 1.0 * majCoord3D(photographe.deplacementHorizontal, photographe.deplacementVertical, photographe.deplacementProfondeur - 0.1).p.toFixed(6);
	listeDeTousLesPolygones.listeDesCDG[findPolygoneByName(silhouettePhotographe.nom)] = 1.0 * silhouettePhotographe.CDGMaj;
}