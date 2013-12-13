var flagClicVue3D = 0;
var flagSourisSurVue3D = 0;
/*var X0Vue3D;
var Y0Vue3D;*/

function souris3D(e) {

	var Xt0, Yt0;
	var Xt1, Yt1;
	var temp_xyp;
	var Ax, Ay, Ap;
	var Bx, By, Bp;

	var cvs = document.getElementById(vue3D.cvs);
	var ct = cvs.getContext('2d');

	var rect = cvs.getBoundingClientRect(),
		root = document.documentElement;

	Xt0 = vue3D.Xt0;
	Yt0 = vue3D.Yt0;

	//Coordonnées dans le canvas de la souris à l'instant courant
	Xt1 = e.clientX - rect.left; // - root.scrollLeft;
	Yt1 = e.clientY - rect.top; // - root.scrollTop;

	//A: point de départ de la souris (à l'instant précédent)
	temp_xyp = XY2xyp(Xt0, Yt0);
	Ax = temp_xyp.x;
	Ay = temp_xyp.y;
	Ap = temp_xyp.p;

	//B: point final de la souris
	temp_xyp = XY2xyp(Xt1, Yt1);
	Bx = temp_xyp.x;
	By = temp_xyp.y;
	Bp = temp_xyp.p;


	//ROTATION
	if (vue3D.typeDeDeplacement === "rotation") {

		//M: OM=OA v OB  ; |OM| = |OA|.|OB|.sin
		var Mx = Ay * Bp - Ap * By;
		var My = Ap * Bx - Ax * Bp;
		var Mp = Ax * By - Ay * Bx;

		//Produit scalaire: |OA|.|OB|.cos
		var produitScalaire = Ax * Bx + Ay * By + Ap * Bp;

		//Normes des vecteurs
		var OA = Math.sqrt(Ax * Ax + Ay * Ay + Ap * Ap);
		var OB = Math.sqrt(Bx * Bx + By * By + Bp * Bp);
		var OM = Math.sqrt(Mx * Mx + My * My + Mp * Mp);

		//Cos et Sin
		var cosTheta = produitScalaire / (OA * OB);
		var sinTheta = OM / (OA * OB);

		//on doit avoir Mx²+My²+Mp²=1
		var normalise = Mx * Mx + My * My + Mp * Mp;

		if (normalise !== 0) {

			normalise = 1 / normalise;
			normalise = Math.sqrt(normalise);

			Mx = Mx * normalise;
			My = My * normalise;
			Mp = Mp * normalise;

			//Mise à jour des coordonées de la matrice de rotation autour d'un axe
			//1ière ligne
			var M1_1 = Mx * Mx + (1 - Mx * Mx) * cosTheta;
			var M1_2 = Mx * My * (1 - cosTheta) - Mp * sinTheta;
			var M1_3 = Mx * Mp * (1 - cosTheta) + My * sinTheta;

			//2nde ligne
			var M2_1 = Mx * My * (1 - cosTheta) + Mp * sinTheta;
			var M2_2 = My * My + (1 - My * My) * cosTheta;
			var M2_3 = My * Mp * (1 - cosTheta) - Mx * sinTheta;

			//3ième ligne
			var M3_1 = Mx * Mp * (1 - cosTheta) - My * sinTheta;
			var M3_2 = My * Mp * (1 - cosTheta) + Mx * sinTheta;
			var M3_3 = Mp * Mp + (1 - Mp * Mp) * cosTheta;

			//Multiplie les anciennes coordonées par les nouvelles
			var Rot1_1_temp = M1_1 * vue3D.matriceDeRotation[0][0] + M1_2 * vue3D.matriceDeRotation[1][0] + M1_3 * vue3D.matriceDeRotation[2][0];
			var Rot1_2_temp = M1_1 * vue3D.matriceDeRotation[0][1] + M1_2 * vue3D.matriceDeRotation[1][1] + M1_3 * vue3D.matriceDeRotation[2][1];
			var Rot1_3_temp = M1_1 * vue3D.matriceDeRotation[0][2] + M1_2 * vue3D.matriceDeRotation[1][2] + M1_3 * vue3D.matriceDeRotation[2][2];

			var Rot2_1_temp = M2_1 * vue3D.matriceDeRotation[0][0] + M2_2 * vue3D.matriceDeRotation[1][0] + M2_3 * vue3D.matriceDeRotation[2][0];
			var Rot2_2_temp = M2_1 * vue3D.matriceDeRotation[0][1] + M2_2 * vue3D.matriceDeRotation[1][1] + M2_3 * vue3D.matriceDeRotation[2][1];
			var Rot2_3_temp = M2_1 * vue3D.matriceDeRotation[0][2] + M2_2 * vue3D.matriceDeRotation[1][2] + M2_3 * vue3D.matriceDeRotation[2][2];

			var Rot3_1_temp = M3_1 * vue3D.matriceDeRotation[0][0] + M3_2 * vue3D.matriceDeRotation[1][0] + M3_3 * vue3D.matriceDeRotation[2][0];
			var Rot3_2_temp = M3_1 * vue3D.matriceDeRotation[0][1] + M3_2 * vue3D.matriceDeRotation[1][1] + M3_3 * vue3D.matriceDeRotation[2][1];
			var Rot3_3_temp = M3_1 * vue3D.matriceDeRotation[0][2] + M3_2 * vue3D.matriceDeRotation[1][2] + M3_3 * vue3D.matriceDeRotation[2][2];

			//MAj de la matrice de rotation
			var matriceDeRotationSave = new Array(3);
			for (i = 0; i != 3; i++)
				matriceDeRotationSave[i] = new Array(3);

			for (i = 0; i != 3; i++) {
				for (ii = 0; ii != 3; ii++)
					matriceDeRotationSave[i][ii] = vue3D.matriceDeRotation[i][ii];
			}

			vue3D.matriceDeRotation[0][0] = Rot1_1_temp;
			vue3D.matriceDeRotation[0][1] = Rot1_2_temp;
			vue3D.matriceDeRotation[0][2] = Rot1_3_temp;
			vue3D.matriceDeRotation[1][0] = Rot2_1_temp;
			vue3D.matriceDeRotation[1][1] = Rot2_2_temp;
			vue3D.matriceDeRotation[1][2] = Rot2_3_temp;
			vue3D.matriceDeRotation[2][0] = Rot3_1_temp;
			vue3D.matriceDeRotation[2][1] = Rot3_2_temp;
			vue3D.matriceDeRotation[2][2] = Rot3_3_temp;

			//Bloque les rotations qui emmènent en dessous du niveau du sol
			majOrientation3D();

			if (vue3D.orientationHaut === 0 || Ap === 0 || Bp === 0) {
				for (i = 0; i != 3; i++) {
					for (ii = 0; ii != 3; ii++)
						vue3D.matriceDeRotation[i][ii] = matriceDeRotationSave[i][ii];
				}
				majOrientation3D();
			}
		}
	}

	//TRANSLATION
	else {

		temp_xyp = XY2xyp(Xt0, Yt0, "pas_de_translation");

		Ax = temp_xyp.x;
		Ay = temp_xyp.y;
		Ap = temp_xyp.p;

		//B: point final de la souris
		temp_xyp = XY2xyp(Xt1, Yt1, "pas_de_translation");
		Bx = temp_xyp.x;
		By = temp_xyp.y;
		Bp = temp_xyp.p;

		vue3D.translationX += (Bx - Ax);
		vue3D.translationY += (By - Ay);
		vue3D.translationP += (Bp - Ap);
	}


	//Sauvegarde les coordonées de la souris
	vue3D.Xt0 = Xt1;
	vue3D.Yt0 = Yt1;


	//MAJ du canvas
	drawVue3D();

	//Indications rotation / translation
	var R = vue3D.hauteurEnMetre / 2;
	var x_temp;
	var y_temp;
	var p_temp;

	ct.fillStyle = 'rgb(50,100,200)';
	ct.strokeStyle = 'rgba(50,100,200,0.15)';

	if (vue3D.typeDeDeplacement === "translation") {
		//l'axe 'x' passe au milieu
		//x
		ct.beginPath();

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal - R, photographe.deplacementVertical, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.moveTo(xt, yt);

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal + R, photographe.deplacementVertical, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.lineTo(xt, yt);
		ct.stroke();

		//y
		ct.beginPath();

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, photographe.deplacementVertical - R, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.moveTo(xt, yt);

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, photographe.deplacementVertical + R, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.lineTo(xt, yt);
		ct.stroke();

		//p
		ct.beginPath();

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, photographe.deplacementVertical, photographe.deplacementProfondeur - R);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.moveTo(xt, yt);

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, photographe.deplacementVertical, photographe.deplacementProfondeur + R);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.lineTo(xt, yt);
		ct.stroke();
	}


	if (vue3D.typeDeDeplacement === "rotation") {
		//centre de rotation

		drawPoint3D(photographe.deplacementHorizontal, photographe.deplacementVertical, photographe.deplacementProfondeur, 2);

		//arcs


		//l'axe 'x' passe au milieu
		ct.beginPath();

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, photographe.deplacementVertical + R, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.moveTo(xt, yt);

		for (i = 0; i < 2 * Math.PI; i += Math.PI / 20) {
			y_temp = photographe.deplacementVertical + R * Math.cos(i);
			p_temp = photographe.deplacementProfondeur + R * Math.sin(i);
			coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, y_temp, p_temp);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
		}
		ct.closePath();
		ct.stroke();


		//l'axe 'y' passe au milieu
		ct.beginPath();

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal + R, photographe.deplacementVertical, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.moveTo(xt, yt);

		for (i = 0; i < 2 * Math.PI; i += Math.PI / 20) {
			x_temp = photographe.deplacementHorizontal + R * Math.cos(i);
			p_temp = photographe.deplacementProfondeur + R * Math.sin(i);
			coord_3D = xyp2XYmaj(x_temp, photographe.deplacementVertical, p_temp);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
		}
		ct.closePath();
		ct.stroke();


		//l'axe 'p' passe au milieu
		ct.beginPath();

		coord_3D = xyp2XYmaj(photographe.deplacementHorizontal, photographe.deplacementVertical + R, photographe.deplacementProfondeur);
		xt = coord_3D.X;
		yt = coord_3D.Y;
		ct.moveTo(xt, yt);

		for (i = 0; i < 2 * Math.PI; i += Math.PI / 20) {
			y_temp = photographe.deplacementVertical + R * Math.cos(i);
			x_temp = photographe.deplacementHorizontal + R * Math.sin(i);
			coord_3D = xyp2XYmaj(x_temp, y_temp, photographe.deplacementProfondeur);
			xt = coord_3D.X;
			yt = coord_3D.Y;
			ct.lineTo(xt, yt);
		}
		ct.closePath();
		ct.stroke();
	}
}

document.getElementById('cvsVue3D').addEventListener('mousedown', function(e) {
	//	document.getElementById('liste_camera').selectedIndex = 0;

	flagClicVue3D = 1;
	curseurCSS('mainFermee');

	var cvs = document.getElementById('cvsVue3D');
	var rect = cvs.getBoundingClientRect(),
		root = document.documentElement;
	vue3D.Xt0 = e.clientX - rect.left; // - root.scrollLeft;
	vue3D.Yt0 = e.clientY - rect.top; // - root.scrollTop;
}, false);

document.getElementById('cvsVue3D').addEventListener('mouseup', function() {
	curseurCSS('mainOuverte');
	flagClicVue3D = 0;
	drawVue3D();
}, false);

document.getElementById('cvsVue3D').addEventListener('mousemove', function(e) {
	if (flagClicVue3D)
		souris3D(e);
}, false);


document.getElementById('cvsVue3D').addEventListener('mouseover', function() {
	flagSourisSurVue3D = 1;
	curseurCSS('mainOuverte');
}, false);

document.getElementById('cvsVue3D').addEventListener('mouseout', function() {
	flagSourisSurVue3D = 0;
	document.body.style.cursor = 'default';
	flagClicVue3D = 0;
}, false);



function rouletteSourisVue3D(e) {
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

	if (!e)
		e = window.event;

	if (e.preventDefault)
		e.preventDefault();

	if (delta > 0)
		vue3D.hauteurEnMetre = vue3D.hauteurEnMetre / 1.05;
	else
		vue3D.hauteurEnMetre = 1.05 * vue3D.hauteurEnMetre;

	if (vue3D.hauteurEnMetre < 4 * apnChoisi.taillePixel)
		vue3D.hauteurEnMetre = 4 * apnChoisi.taillePixel;
	
	calcKHauteurNormalisee();
	drawVue3D();
}


document.getElementById('cvsVue3D').addEventListener('DOMMouseScroll', function(e) { // VersionWeb
	rouletteSourisVue3D(e);
}, false);

document.getElementById('cvsVue3D').addEventListener('mousewheel', function(e) {
	rouletteSourisVue3D(e);
}, false);