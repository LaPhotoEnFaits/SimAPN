function xyp2XY(x, y, p) {

	x = vue3D.kHauteurNormalisee * x;
	y = vue3D.kHauteurNormalisee * y;

	var X = vue3D.X0 + x * vue3D.X0;
	var Y = vue3D.Y0 - y * vue3D.Y0;

	return {
		X: X,
		Y: Y
	};
}

function majCoord3D(x, y, p, flag, flagPolygone) {


	flagPolygone = 0;

	var temp_x, temp_y, temp_p;

	x = vue3D.kHauteurNormalisee * x;
	y = vue3D.kHauteurNormalisee * y;
	p = vue3D.kHauteurNormalisee * p;

	if (flag === 'translation' && !flagPolygone) {
		x = x - photographe.deplacementHorizontal * vue3D.kHauteurNormalisee;
		y = y - photographe.deplacementVertical * vue3D.kHauteurNormalisee;
		p = p - photographe.deplacementProfondeur * vue3D.kHauteurNormalisee;
	}

	//tetha_x
	temp_x = x;
	temp_y = y * vue3D.cosX - p * vue3D.sinX;
	temp_p = y * vue3D.sinX + p * vue3D.cosX;
	x = temp_x;
	y = temp_y;
	p = temp_p;

	//tetha_y
	temp_x = x * vue3D.cosY + p * vue3D.sinY;
	temp_y = y;
	temp_p = -1 * x * vue3D.sinY + p * vue3D.cosY;
	x = temp_x;
	y = temp_y;
	p = temp_p;

	//tetha_p
	temp_x = x * vue3D.cosP - y * vue3D.sinP;
	temp_y = x * vue3D.sinP + y * vue3D.cosP;
	temp_p = p;
	x = temp_x;
	y = temp_y;
	p = temp_p;

	//-Rotation autour d'un vecteur qq (arcball)
	temp_x = x * vue3D.matriceDeRotation[0][0] + y * vue3D.matriceDeRotation[0][1] + p * vue3D.matriceDeRotation[0][2];
	temp_y = x * vue3D.matriceDeRotation[1][0] + y * vue3D.matriceDeRotation[1][1] + p * vue3D.matriceDeRotation[1][2];
	temp_p = x * vue3D.matriceDeRotation[2][0] + y * vue3D.matriceDeRotation[2][1] + p * vue3D.matriceDeRotation[2][2];

	//-Translation manuelle
	if (flag === 'translation') {
		temp_x = temp_x + vue3D.translationX;
		temp_y = temp_y + vue3D.translationY;
		temp_p = temp_p + vue3D.translationP;
	}

	return {
		x: temp_x,
		y: temp_y,
		p: temp_p
	};
}

function XY2xyp(X, Y, flag) {

	var temp_x, temp_y, temp_p;
	var temp_xyp;
	var temp_XY;
	var X0, Y0;

	//Pour tenir compte du déplacement du centre par translation
	if (flag === 'translation') {

		temp_x = capteurChoisi3D.CDG[0];
		temp_y = capteurChoisi3D.CDG[1];
		temp_p = capteurChoisi3D.CDG[2];

		temp_xyp = majCoord3D(temp_x, temp_y, temp_p, 'translation');
		temp_x = temp_xyp.x / vue3D.kHauteurNormalisee;
		temp_y = temp_xyp.y / vue3D.kHauteurNormalisee;
		temp_p = temp_xyp.p / vue3D.kHauteurNormalisee;

		temp_XY = xyp2XY(temp_x, temp_y, temp_p);
		X0 = temp_XY.X;
		Y0 = temp_XY.Y;

		temp_x = (X - X0) / X0;
		temp_y = (Y0 - Y) / Y0;

		if (((X - X0) * (X - X0) + (Y - Y0) * (Y - Y0)) < X0 * X0)
			temp_p = Math.sqrt(X0 * X0 - (X - X0) * (X - X0) - (Y - Y0) * (Y - Y0)) / X0;
		else
			temp_p = 0;
	} else {
		temp_x = (X - vue3D.X0) / vue3D.X0;
		temp_y = (vue3D.Y0 - Y) / vue3D.Y0;

		if (((X - vue3D.X0) * (X - vue3D.X0) + (Y - vue3D.Y0) * (Y - vue3D.Y0)) < vue3D.X0 * vue3D.X0)
			temp_p = Math.sqrt(vue3D.X0 * vue3D.X0 - (X - vue3D.X0) * (X - vue3D.X0) - (Y - vue3D.Y0) * (Y - vue3D.Y0)) / vue3D.X0;
		else
			temp_p = 0;
	}
	return {
		x: temp_x,
		y: temp_y,
		p: temp_p
	};
}


function xyp2XYmaj(x, y, p, flagPolygone) {

	var temp_XY;
	var temp_xyp;
	var temp_x, temp_y, temp_p;
	var X, Y;

	temp_xyp = majCoord3D(x, y, p, 'translation', flagPolygone);

	temp_x = (temp_xyp.x) / vue3D.kHauteurNormalisee;
	temp_y = (temp_xyp.y) / vue3D.kHauteurNormalisee;
	temp_p = (temp_xyp.p) / vue3D.kHauteurNormalisee;

	temp_XY = xyp2XY(temp_x, temp_y, temp_p);
	X = temp_XY.X;
	Y = temp_XY.Y;

	return {
		X: X,
		Y: Y
	};
}

//IN: x,y,p sans rotation/translation
//OUT: dessine un point en X,Y = (x,y,p) après rotation
function drawPoint3D(x, y, p, R) {

	var coord_3D = xyp2XYmaj(x, y, p);
	var X = coord_3D.X;
	var Y = coord_3D.Y;

	var cvs = document.getElementById(vue3D.cvs);
	var ct = cvs.getContext('2d');

	ct.beginPath();
	ct.lineTo(X, Y);
	ct.arc(X, Y, R, 0, 2 * Math.PI);
	ct.fill();
}

//IN: (xd,yd,pd) et (xf,yf,pf) coordonées des points sans rotation/translation
//OUT: tracé d'une ligne d'un point à l'autre
function drawLine3D(xd, yd, pd, xf, yf, pf) {

	//1ier point
	var temp_xyp = majCoord3D(xd, yd, pd, 'translation');
	var temp_x = temp_xyp.x;
	var temp_y = temp_xyp.y;
	var temp_p = temp_xyp.p;

	var cvs = document.getElementById(vue3D.cvs);
	var ct = cvs.getContext('2d');

	temp_x = temp_x / vue3D.kHauteurNormalisee;
	temp_y = temp_y / vue3D.kHauteurNormalisee;
	temp_p = temp_p / vue3D.kHauteurNormalisee;

	var temp_XY = xyp2XY(temp_x, temp_y, temp_p);
	var X = temp_XY.X;
	var Y = temp_XY.Y;

	ct.beginPath();
	ct.moveTo(X, Y);

	//2nd point
	temp_xyp = majCoord3D(xf, yf, pf, 'translation');
	temp_x = temp_xyp.x;
	temp_y = temp_xyp.y;
	temp_p = temp_xyp.p;

	temp_x = temp_x / vue3D.kHauteurNormalisee;
	temp_y = temp_y / vue3D.kHauteurNormalisee;
	temp_p = temp_p / vue3D.kHauteurNormalisee;

	temp_XY = xyp2XY(temp_x, temp_y, temp_p);
	X = temp_XY.X;
	Y = temp_XY.Y;

	ct.lineTo(X, Y);
	ct.stroke();
}

function majVecteurLuminosite3D() {

	var normalise = vue3D.vecteurLuminositeX * vue3D.vecteurLuminositeX + vue3D.vecteurLuminositeY * vue3D.vecteurLuminositeY + vue3D.vecteurLuminositeP * vue3D.vecteurLuminositeP;

	if (normalise !== 0) {
		normalise = 1 / normalise;
		normalise = Math.sqrt(normalise);
		vue3D.vecteurLuminositeX = vue3D.vecteurLuminositeX * normalise;
		vue3D.vecteurLuminositeY = vue3D.vecteurLuminositeY * normalise;
		vue3D.vecteurLuminositeP = vue3D.vecteurLuminositeP * normalise;
	}

	var coord = majCoord3D(0, 0, 1, 'translation');

	var composanteX = coord.x;
	var composanteY = coord.y;
	var composanteP = coord.p;

	normalise = composanteX * composanteX + composanteY * composanteY + composanteP * composanteP;

	if (normalise !== 0) {
		normalise = 1 / normalise;
		normalise = Math.sqrt(normalise);
		composanteX = composanteX * normalise;
		composanteY = composanteY * normalise;
		composanteP = composanteP * normalise;
		vue3D.luminositeFaceEclairee = composanteX * vue3D.vecteurLuminositeX + composanteY * vue3D.vecteurLuminositeY + composanteP * vue3D.vecteurLuminositeP;
	} else
		vue3D.luminositeFaceEclairee = 0;


	coord = majCoord3D(0, 0, -1, 'translation');

	composanteX = coord.x;
	composanteY = coord.y;
	composanteP = coord.p;

	normalise = composanteX * composanteX + composanteY * composanteY + composanteP * composanteP;

	if (normalise !== 0) {
		normalise = 1 / normalise;
		normalise = Math.sqrt(normalise);
		composanteX = composanteX * normalise;
		composanteY = composanteY * normalise;
		composanteP = composanteP * normalise;
		vue3D.luminositeFaceOmbre = composanteX * vue3D.vecteurLuminositeX + composanteY * vue3D.vecteurLuminositeY + composanteP * vue3D.vecteurLuminositeP;
	} else
		vue3D.luminositeFaceOmbre = 0;
}

function majOrientation3D() {

	var p_temp;

	p_temp = majCoord3D(0, 1, 0, 'pasDeTranslation').p;
	if (p_temp > 0) {
		vue3D.orientationHaut = 1;
		vue3D.orientationBas = 0;
	} else {
		vue3D.orientationHaut = 0;
		vue3D.orientationBas = 1;
	}

	p_temp = majCoord3D(0, 0, 1, 'pasDeTranslation').p;
	if (p_temp > 0) {
		vue3D.orientationDevant = 1;
		vue3D.orientationDerriere = 0;
	} else {
		vue3D.orientationDevant = 0;
		vue3D.orientationDerriere = 1;
	}

	p_temp = majCoord3D(1, 0, 0, 'pasDeTranslation').p;
	if (p_temp < 0) {
		vue3D.orientationGauche = 1;
		vue3D.orientationDroite = 0;
	} else {
		vue3D.orientationGauche = 0;
		vue3D.orientationDroite = 1;
	}
}