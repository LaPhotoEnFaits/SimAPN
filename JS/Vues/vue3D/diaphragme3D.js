var DELTA_ANGLE_DIAPHRAGME = 2 * Math.PI / 50;

function initDiaphragme3D() {
	diaphragme3D.nom = 'diaphragme3D';
}

function majCDGdiaphragme3D() {
	var focaleEnMetre = objectifChoisi.focale / 1000;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var p_f = df + focaleEnMetre;
	var p = p_f + photographe.deplacementProfondeur - apnChoisi.p_foyer_corps;

	diaphragme3D.CDGMaj = 1.0 * majCoord3D(photographe.deplacementHorizontal, photographe.deplacementVertical, p).p.toFixed(6);
	listeDeTousLesPolygones.listeDesCDG[findPolygoneByName(diaphragme3D.nom)] = 1.0 * diaphragme3D.CDGMaj;
}

function drawDiaphragme3D() {

	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var p_f = df + focaleEnMetre;

	//Le centre du daphragme est en (0,0)
	//point sur le grand cercle
	var xa = 1.0;
	var ya = 1.0;
	//point sur le petit cercle
	var xb = 1.0;
	var yb = 1.0;
	//point entre A et B
	var XM = 1.0;

	//centre du nouveau cercle
	var xc = 1.0;
	var yc = 1.0;

	var AB = 1.0; //distance entre A et B
	var MC = 1.0; //distance entre M et C

	//angle entre l'axe des abscices et le premier point puis entre le second point
	var omega0 = 1.0;
	var omega1 = 1.0;
	var omega2 = 1.0;


	var R = (focaleEnMetre / objectifChoisi.indiceOuvertureMin) / 2;
	var r = focaleEnMetre / (2 * objectifChoisi.ouverture);


	R = R / apnChoisi.cropFactor;
	r = r / apnChoisi.cropFactor;

	//-Disque plein
	ct.beginPath();
	xa = R - (-photographe.deplacementHorizontal);
	ya = 0 + photographe.deplacementVertical;
	pa = p_f + photographe.deplacementProfondeur;
	var coord_3D = xyp2XYmaj(xa, ya, pa);
	var xt = coord_3D.X;
	var yt = coord_3D.Y;
	ct.moveTo(xt, yt);
	for (var i = DELTA_ANGLE_DIAPHRAGME; i <= 2 * Math.PI; i += DELTA_ANGLE_DIAPHRAGME) {
		xa = R * Math.cos(i) - (-photographe.deplacementHorizontal);
		ya = R * Math.sin(i) + photographe.deplacementVertical;
		pa = p_f + photographe.deplacementProfondeur;
		coord_3D = xyp2XYmaj(xa, ya, pa);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.lineTo(xt, yt);
	}

	var luminositeMaximale = 20;
	var luminositeCourante = Math.round(vue3D.luminositeFaceEclairee * luminositeMaximale);
	ct.fillStyle = 'rgba(' + luminositeCourante + ',' + luminositeCourante + ',' + luminositeCourante + ',0.66)';
	ct.fill();


	//-Trou
	ct.beginPath();
	xa = r - (-photographe.deplacementHorizontal);
	ya = 0 + photographe.deplacementVertical;
	pa = p_f + photographe.deplacementProfondeur;
	coord_3D = xyp2XYmaj(xa, ya, pa);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.moveTo(xt, yt);
	for (i = DELTA_ANGLE_DIAPHRAGME; i <= 2 * Math.PI; i += DELTA_ANGLE_DIAPHRAGME) {
		xa = r * Math.cos(i) - (-photographe.deplacementHorizontal);
		ya = r * Math.sin(i) + photographe.deplacementVertical;
		pa = p_f + photographe.deplacementProfondeur;
		coord_3D = xyp2XYmaj(xa, ya, pa);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.lineTo(xt, yt);
	}
	ct.fillStyle = 'rgba(255,255,255,0.5)';
	ct.fill();

	//-Lamelles
	var theta0 = 0; //angle entre le centre et le point sur le grand cercle
	var NbrLamelles = 6;
	var deltaAngleLamelles = 2 * Math.PI / NbrLamelles;



	for (i = 0; i !== NbrLamelles; i++) {

		xa = R * Math.cos(theta0 + i * deltaAngleLamelles) - (-photographe.deplacementHorizontal);
		ya = R * Math.sin(theta0 + i * deltaAngleLamelles) + photographe.deplacementVertical;

		xb = r * Math.cos(theta0 + (i + 1) * deltaAngleLamelles) - (-photographe.deplacementHorizontal);
		yb = r * Math.sin(theta0 + (i + 1) * deltaAngleLamelles) + photographe.deplacementVertical;

		XM = (xa + xb) / 2;
		YM = (ya + yb) / 2;

		AB = Math.sqrt((xa - xb) * (xa - xb) + (ya - yb) * (ya - yb));

		MC = Math.sqrt(R * R - (AB / 2) * (AB / 2));

		if (xa >= xb)
			omega0 = Math.atan((ya - yb) / (xa - xb)) - Math.PI / 2;
		else
			omega0 = Math.PI + Math.atan((ya - yb) / (xa - xb)) - Math.PI / 2;

		xc = XM + MC * Math.cos(omega0);
		yc = YM + MC * Math.sin(omega0);

		if (yc <= ya)
			omega1 = Math.acos((xa - xc) / R);
		else
			omega1 = 2 * Math.PI - Math.acos((xa - xc) / R);

		if (yc <= yb)
			omega2 = Math.acos((xb - xc) / R);
		else
			omega2 = 2 * Math.PI - Math.acos((xb - xc) / R);

		ct.beginPath();

		ct.lineWidth = 2;
		ct.strokeStyle = 'rgba(255,255,255,0.5)';

		var angleDeDepart = omega1;
		var angleDeFin = omega2;
		var deltaAngle = (angleDeFin - angleDeDepart) / 10;

		if (angleDeFin < angleDeDepart) {
			angleDeDepart = angleDeDepart - 2 * Math.PI;
			deltaAngle = (angleDeFin + angleDeDepart) / 10;
		}

		if (deltaAngle < Math.PI / 200)
			deltaAngle = Math.PI / 200;

		xa = xc + R * Math.cos(angleDeDepart);
		ya = yc + R * Math.sin(angleDeDepart);
		pa = p_f + photographe.deplacementProfondeur;


		coord_3D = xyp2XYmaj(xa, ya, pa);
		xt = coord_3D.X;
		yt = coord_3D.Y;

		ct.beginPath();
		ct.lineWidth = 1;
		ct.strokeStyle = '#ffffff';
		ct.moveTo(xt, yt);

		for (var ii = angleDeDepart + deltaAngle; ii <= angleDeFin; ii += deltaAngle) {
			xa = xc + R * Math.cos(ii);
			ya = yc + R * Math.sin(ii);
			coord_3D = xyp2XYmaj(xa, ya, pa);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
		}
		ct.stroke();
	}
}