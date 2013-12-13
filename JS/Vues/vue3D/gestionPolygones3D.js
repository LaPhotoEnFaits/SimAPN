listeDesCDG3D = new Array();
listeDesPolygones3D = new Array();



ListeDeTousLesPolygones = function() {
	this.numeroCourant = 0;
	this.listeDesNoms = new Array();
	this.listeDesCDG = new Array();
}

Polygone = function(nom, couleurFondMax, couleurFondMin, contour, pts, ptsMaj, CDG, CDGMaj, vecteurNormal, vecteurNormalMaj, majPts, draw, rayonAffichage) {
	this.nom = nom;
	this.couleurFondMax = couleurFondMax;
	this.couleurFondMin = couleurFondMin;
	this.contour = contour;
	this.pts = pts;
	this.ptsMaj = ptsMaj;
	this.CDG = CDG;
	this.CDGMaj = CDGMaj;
	this.vecteurNormal = vecteurNormal;
	this.vecteurNormalMaj = vecteurNormalMaj;
	this.draw = draw;
	this.majPts = majPts;
	this.rayonAffichage = rayonAffichage;
};

function initPolygones3D() {
	initCapteurChoisi3D();
	initCapteurFullFrame3D();
	
	setPtsCapteurs3D();
	
	listeDeTousLesPolygones.listeDesNoms[listeDeTousLesPolygones.numeroCourant] = capteurChoisi3D.nom;
	listeDeTousLesPolygones.numeroCourant++;
	
	listeDeTousLesPolygones.listeDesNoms[listeDeTousLesPolygones.numeroCourant] = capteurFullFrame.nom;
	listeDeTousLesPolygones.numeroCourant++;
}

function majCoordoneesPolygones3D() {
	capteurChoisi3D.majPts();
	capteurFullFrame.majPts();
}

function majListeCDG3D() {

	for (var i = 0; i != listeDeTousLesPolygones.listeDesCDG.length; i++)
		listeDesCDG3D[i] = listeDeTousLesPolygones.listeDesCDG[i];

	listeDesCDG3D.sort(sortNumber);
}

function majPtsPolygones() {

	for (var i = 0; i !== this.pts.length; i++) {
		var coord_3D = xyp2XYmaj(this.pts[i][0], this.pts[i][1], this.pts[i][2]);
		this.ptsMaj[i][0] = coord_3D.X;
		this.ptsMaj[i][1] = coord_3D.Y;
	}

	this.CDGMaj = 1.0 * (majCoord3D(this.CDG[0], this.CDG[1], this.CDG[2]).p.toFixed(6));

	listeDeTousLesPolygones.listeDesCDG[findPolygoneByName(this.nom)] = this.CDGMaj;

	var coord = majCoord3D(this.vecteurNormal[0], this.vecteurNormal[1], this.vecteurNormal[2], "pas_de_translation");
	var normalise = coord.x * coord.x + coord.y * coord.y + coord.p * coord.p;
	if (normalise !== 0) {
		normalise = 1 / normalise;
		normalise = Math.sqrt(normalise);
		coord.x = coord.x * normalise;
		coord.y = coord.y * normalise;
		coord.p = coord.p * normalise;
	}

	this.vecteurNormalMaj = [coord.x, coord.y, coord.p];
}

function findPolygoneByName(nom) {

	var numero = -1;

	for (var i = 0; i < listeDeTousLesPolygones.listeDesNoms.length; i++) {
		if (listeDeTousLesPolygones.listeDesNoms[i] === nom) {
			numero = i;
			i = listeDeTousLesPolygones.listeDesNoms.length;
		}
	}

	return numero;
}

function findPolygoneByCDG(CDG) {

	var numero = -1;

	for (var i = 0; i < listeDeTousLesPolygones.listeDesCDG.length; i++) {
		if (listeDeTousLesPolygones.listeDesCDG[i] === CDG) {
			numero = i;
			i = listeDeTousLesPolygones.listeDesCDG.length;
		}
	}
	return numero;
}

function drawPolygone() {

	var R = this.rayonAffichage;

	//vecteur vers le CDG
	var vx = this.CDG[0];
	var vy = this.CDG[1];
	var vp = this.CDG[2];
	var coord = majCoord3D(vx, vy, vp);
	vx = coord.x;
	vy = coord.y;
	vp = coord.p;

	var n = Math.sqrt(vx * vx + vy * vy + vp * vp);

	if (n !== 0) {
		vx = vx * (n - R) / n;
		vy = vy * (n - R) / n;
		vp = vp * (n - R) / n;
	}

	vx = vx / vue3D.kHauteurNormalisee;
	vy = vy / vue3D.kHauteurNormalisee;
	vp = vp / vue3D.kHauteurNormalisee;

	coord = xyp2XY(vx, vy, vp);

	if (coord.X >= 0 && coord.X < vue3D.largeurCanvas && coord.Y >= 0 && coord.Y < vue3D.hauteurCanvas) {

		var cvs = document.getElementById('cvsVue3D');
		var ct = cvs.getContext('2d');

		ct.beginPath();

		ct.moveTo(this.ptsMaj[0][0], this.ptsMaj[0][1]);

		for (var i = 1; i !== this.ptsMaj.length; i++)
			ct.lineTo(this.ptsMaj[i][0], this.ptsMaj[i][1]);

		ct.lineTo(this.ptsMaj[0][0], this.ptsMaj[0][1]);


		if (this.couleurFondMax[3] !== 0) {

			var lum_temp = this.vecteurNormalMaj[0] * vue3D.vecteurLuminositeX + this.vecteurNormalMaj[1] * vue3D.vecteurLuminositeY + this.vecteurNormalMaj[2] * vue3D.vecteurLuminositeP;

			if (lum_temp < 0)
				lum_temp = 0;

			var temp_R = Math.round(this.couleurFondMin[0] + lum_temp * (this.couleurFondMax[0] - this.couleurFondMin[0]));
			var temp_V = Math.round(this.couleurFondMin[1] + lum_temp * (this.couleurFondMax[1] - this.couleurFondMin[1]));
			var temp_B = Math.round(this.couleurFondMin[2] + lum_temp * (this.couleurFondMax[2] - this.couleurFondMin[2]));
			ct.fillStyle = 'rgba(' + temp_R + ',' + temp_V + ',' + temp_B + ',' + this.couleurFondMax[3] + ')';
			ct.fill();
		}

		if (this.contour[3] !== 0) {
			ct.strokeStyle = 'rgba(' + this.contour[0] + ',' + this.contour[1] + ',' + this.contour[2] + ',' + this.contour[3] + ')';
			ct.stroke();
		}
	}
}

function drawByCDG() {

	for (var i = 0; i !== listeDesCDG3D.length; i++) {
		//CRADO
		switch (listeDesCDG3D[i]) {

			case capteurChoisi3D.CDGMaj:
				capteurChoisi3D.draw();
				capteurChoisi3D.CDGMaj = 'X';
				break

			case capteurFullFrame.CDGMaj:
				capteurFullFrame.draw();
				capteurFullFrame.CDGMaj = 'X';
				break

		}
	}
}