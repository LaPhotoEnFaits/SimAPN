var DUREE_PAUSE_ACC_MATERIELLE = 0;


VuePhoto = function() {
	this.nom = 'Photo';

	this.affichageRapide = 0;
	this.init = initVuePhoto;
	this.initIHM = initIHMVues;
	this.draw = drawVuePhoto;
};

function initVuePhoto() {

	document.getElementById('cvsPhotoCollimateurs').style.zIndex = '8';
	document.getElementById('cvsPhotoBruit').style.zIndex = '7';
	document.getElementById('cvsPhotoPlan0').style.zIndex = '6';
	document.getElementById('cvsPhotoPlan1').style.zIndex = '5';
	document.getElementById('cvsPhotoPlan2').style.zIndex = '4';
	document.getElementById('cvsPhotoPlan3').style.zIndex = '3';
	document.getElementById('cvsPhotoPlan4').style.zIndex = '1';
	document.getElementById('cvsPhotoPlan5').style.zIndex = '2';
	document.getElementById('cvsPhotoPourPositionRelative').style.zIndex = '0';

	document.getElementById('cvsPhotoCollimateurs').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoCollimateurs').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoBruit').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoBruit').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPlan0').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPlan0').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPlan1').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPlan1').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPlan2').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPlan2').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPlan3').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPlan3').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPlan4').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPlan4').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPlan5').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPlan5').width = vuePhoto.largeur;
	document.getElementById('cvsPhotoPourPositionRelative').height = vuePhoto.hauteur;
	document.getElementById('cvsPhotoPourPositionRelative').width = vuePhoto.largeur;

	document.getElementById('cvsPhotoPlan0').style.clip = 'rect(0px,' + vuePhoto.largeur + 'px,' + vuePhoto.hauteur + 'px,0px)';
	document.getElementById('cvsPhotoPlan1').style.clip = 'rect(0px,' + vuePhoto.largeur + 'px,' + vuePhoto.hauteur + 'px,0px)';
	document.getElementById('cvsPhotoPlan2').style.clip = 'rect(0px,' + vuePhoto.largeur + 'px,' + vuePhoto.hauteur + 'px,0px)';
	document.getElementById('cvsPhotoPlan3').style.clip = 'rect(0px,' + vuePhoto.largeur + 'px,' + vuePhoto.hauteur + 'px,0px)';
}

function calcHauteurVuePhoto() {
	vuePhoto.hauteur = vuePhoto.largeur * apnChoisi.capteurHauteur / apnChoisi.capteurLargeur;
	calcHauteurVuePhotoCachee();
}

function valideAccelerationMaterielle() {
	document.getElementById('cvsPhotoCollimateurs').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoBruit').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoPlan0').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoPlan1').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoPlan2').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoPlan3').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoPlan4').style.webkitTransform = 'translateZ(0)';
	document.getElementById('cvsPhotoPlan5').style.webkitTransform = 'translateZ(0)';
}

function inhibeAccelerationMaterielle() {
	document.getElementById('cvsPhotoCollimateurs').style.webkitTransform = '';
	document.getElementById('cvsPhotoBruit').style.webkitTransform = '';
	document.getElementById('cvsPhotoPlan0').style.webkitTransform = '';
	document.getElementById('cvsPhotoPlan1').style.webkitTransform = '';
	document.getElementById('cvsPhotoPlan2').style.webkitTransform = '';
	document.getElementById('cvsPhotoPlan3').style.webkitTransform = '';
	document.getElementById('cvsPhotoPlan4').style.webkitTransform = '';
}

function drawPlan(numero) {

	var cvs = document.getElementById('cvsPhotoPlan' + numero);
	var ct = cvs.getContext('2d');

	cvs.width = vuePhoto.largeur;
	cvs.height = vuePhoto.hauteur;

	if (scene.plans[numero].distance > 0) {

		var largeurSceneMetre = apnChoisi.capteurLargeur * scene.plans[numero].distance / objectifChoisi.focale;
		var hauteurSceneMetre = apnChoisi.capteurHauteur * scene.plans[numero].distance / objectifChoisi.focale;

		var illustrationCourante = scene.illustrations[scene.plans[numero].numeroIllustration];

		var largeurSujetEnMetre = illustrationCourante.hauteurEnMetre * illustrationCourante.image.width / illustrationCourante.image.height;

		var metre2pixel = vuePhoto.hauteur / hauteurSceneMetre;

		var hauteurSujetEnPixel = illustrationCourante.hauteurEnMetre * metre2pixel;
		var largeurSujetEnPixel = largeurSujetEnMetre * metre2pixel;

		var offsetXPixel = (illustrationCourante.offsetXEnMetre + photographe.deplacementHorizontal) * metre2pixel;
		var offsetYPixel = (illustrationCourante.offsetYEnMetre + photographe.deplacementVertical) * metre2pixel;

		var X = (vuePhoto.largeur - 1) / 2 - largeurSujetEnPixel / 2 + offsetXPixel;
		var Y = (vuePhoto.hauteur - 1) / 2 + offsetYPixel - metre2pixel * largeurSujetEnMetre * illustrationCourante.image.height / illustrationCourante.image.width;

		ct.drawImage(illustrationCourante.image, X, Y, largeurSujetEnPixel, hauteurSujetEnPixel);
	}
}

function drawPlans() {
	if (vuePhoto.visible) {
		for (var i = 0; i !== 4; i++)
			drawPlan(i);
	}
}

function drawGrillePerspective() {

	if (vuePhoto.visible) {

		var cvs = document.getElementById('cvsPhotoPlan4');
		var ct = cvs.getContext('2d');

		var distanceBasPhoto = objectifChoisi.focale / 1000 + photographe.deplacementVertical * Math.tan((Math.PI - (priseDeVue.angleChampVertical * Math.PI / 180.0)) / 2);
		var largeurBasPhoto = 2 * distanceBasPhoto * Math.tan(priseDeVue.angleChampHorizontal * Math.PI / 360.0); //largeur de la scène au niveau du cadre


		var Xm = (vuePhoto.largeur - 1) / 2;
		var Ym = (vuePhoto.hauteur - 1) / 2;


		ct.lineWidth = 1;

		
		var distancePremierTraitHorizontalVisible = PAS_GRILLE_SOL * Math.ceil((distanceBasPhoto + photographe.deplacementProfondeur) / PAS_GRILLE_SOL);
		var Y = 0;
		var Ylast = -1;
		var flag = 1;
		var alpha = 1;
		var alphaMax = 0.5;
		var alphaMin = 0.05;
		var deltaMinTraitsHorizontaux = 1.0;
		var COLOR_GRILLE = 'rgba(255,255,255,';

		while (flag) {

			var temp = 2 * (distancePremierTraitHorizontalVisible - photographe.deplacementProfondeur) * Math.tan(priseDeVue.angleChampVertical * Math.PI / 360.0);
			Y = Ym + photographe.deplacementVertical * vuePhoto.hauteur / temp; //coordonée Y du trait

			alpha = alphaMax * (Y - (vuePhoto.hauteur / 2)) / (vuePhoto.hauteur / 2);

			if (Math.abs(Ylast - Y) < deltaMinTraitsHorizontaux)
				flag = 0;
			else {
				if (alpha > alphaMin / 2) {
					ct.beginPath();
					ct.strokeStyle = COLOR_GRILLE + alpha + ')';
					ct.moveTo(0, Y);
					ct.lineTo(vuePhoto.largeur - 1, Y);
					ct.stroke();
					Ylast = Y;
				} else
					flag = 0;
			}
			distancePremierTraitHorizontalVisible += PAS_GRILLE_SOL; //incrément d'un ecartLignesSol
		}


		var X = 0;
		var Xmax = 2 * vuePhoto.largeur;
		var i = 0;

		while (flag !== 7) {

			if (photographe.deplacementVertical >= 0)
				X = Xm + i * PAS_GRILLE_SOL * vuePhoto.largeur / largeurBasPhoto + photographe.deplacementHorizontal * vuePhoto.largeur / largeurBasPhoto;
			else
				X = Xm + i * PAS_GRILLE_SOL * vuePhoto.largeur / largeurBasPhoto - photographe.deplacementHorizontal * vuePhoto.largeur / largeurBasPhoto;

			alpha = alphaMax * (1 - Math.abs(X - Xm) / (Xmax - Xm));

			if (alpha < alphaMin)
				flag |= 0x01;
			else {
				ct.strokeStyle = COLOR_GRILLE + alpha + ')';
				ct.beginPath();
				ct.moveTo(Xm, Ym);

				if (photographe.deplacementVertical >= 0)
					ct.lineTo(X, vuePhoto.hauteur - 1);
				else
					ct.lineTo(X, 0);

				ct.stroke();
				flag |= 0x04;
				flag &= ~0x01;
			}

			if (photographe.deplacementVertical >= 0)
				X = Xm - i * PAS_GRILLE_SOL * vuePhoto.largeur / largeurBasPhoto + photographe.deplacementHorizontal * vuePhoto.largeur / largeurBasPhoto;
			else
				X = Xm - i * PAS_GRILLE_SOL * vuePhoto.largeur / largeurBasPhoto - photographe.deplacementHorizontal * vuePhoto.largeur / largeurBasPhoto;

			alpha = alphaMax * (1 - Math.abs(X - Xm) / (Xmax - Xm));

			if (alpha < alphaMin)
				flag |= 0x02;
			else {
				ct.strokeStyle = COLOR_GRILLE + alpha + ')';
				ct.beginPath();
				ct.moveTo(Xm, Ym);

				if (photographe.deplacementVertical >= 0)
					ct.lineTo(X, vuePhoto.hauteur - 1);
				else
					ct.lineTo(X, 0);

				ct.stroke();
				flag |= 0x04;
				flag &= ~0x02;
			}

			i++;

			if (i > 1000)
				flag = 7;
		}
	}
}

function drawPDCVuePhoto() {

	var cvs = document.getElementById('cvsPhotoPlan5');
	var ct = cvs.getContext('2d');

	cvs.width = vuePhoto.largeur;
	cvs.height = vuePhoto.hauteur;

	if (vuePhoto.pdcVisible) {

		var temp = 2 * priseDeVue.debutDeLaPDC * Math.tan(priseDeVue.angleChampVertical * Math.PI / 360.0);
		var Ym = (vuePhoto.hauteur - 1) / 2;
		var Yav = Ym + photographe.deplacementVertical * vuePhoto.hauteur / temp;
		temp = 2 * priseDeVue.finDeLaPDC * Math.tan(priseDeVue.angleChampVertical * Math.PI / 360.0);
		var Yar = Ym + photographe.deplacementVertical * vuePhoto.hauteur / temp;

		ct.strokeStyle = 'rgba(' + COULEUR_PDC + ',0.5)';
		ct.fillStyle = 'rgba(' + COULEUR_PDC + ',0.5)';

		ct.beginPath();
		ct.moveTo(0, Yav);
		ct.lineTo(0, Yar);
		ct.lineTo(vuePhoto.largeur - 1, Yar);
		ct.lineTo(vuePhoto.largeur - 1, Yav);
		ct.closePath();
		ct.stroke();
		ct.fill();
	}
}

function drawSol() {

	if (vuePhoto.visible) {

		var cvs = document.getElementById('cvsPhotoPlan4');
		var ct = cvs.getContext('2d');

		cvs.width = vuePhoto.largeur;
		cvs.height = vuePhoto.hauteur;

		var color_solhaut = 'rgb(' + scene.couleurSolHaut[0] + ',' + scene.couleurSolHaut[1] + ',' + scene.couleurSolHaut[2] + ')';

		var distanceBasPhoto = objectifChoisi.focale / 1000 + photographe.deplacementVertical * Math.tan((Math.PI - (priseDeVue.angleChampVertical * Math.PI / 180.0)) / 2);

		var my_gradient = ct.createLinearGradient(0, vuePhoto.hauteur / 2, 0, vuePhoto.hauteur);

		var d_fond = 50;

		var R_temp = scene.couleurSolBas[0] + (scene.couleurSolHaut[0] - scene.couleurSolBas[0]) * distanceBasPhoto / d_fond;
		var V_temp = scene.couleurSolBas[1] + (scene.couleurSolHaut[1] - scene.couleurSolBas[1]) * distanceBasPhoto / d_fond;
		var B_temp = scene.couleurSolBas[2] + (scene.couleurSolHaut[2] - scene.couleurSolBas[2]) * distanceBasPhoto / d_fond;

		R_temp = Math.round(R_temp);
		V_temp = Math.round(V_temp);
		B_temp = Math.round(B_temp);

		var color_solBas = 'rgb(' + R_temp + ',' + V_temp + ',' + B_temp + ')';

		my_gradient.addColorStop(0, color_solhaut);
		my_gradient.addColorStop(1, color_solBas);

		ct.fillStyle = my_gradient;

		var kh = 1.1;
		ct.fillRect(0, (vuePhoto.hauteur / 2) / kh, vuePhoto.largeur, kh * vuePhoto.hauteur / 2);
	}
}

function drawFlouEtExpo(numero) {

	var cvs = document.getElementById('cvsPhotoPlan' + numero);

	var flouEnPixel;
	var brightness = Math.pow(2, priseDeVue.exposition * 8.0 / apnChoisi.dynamiqueCourante);

	if (vuePhoto.expositionVisible === 0 || vuePhoto.affichageRapide)
		brightness = 1;

	flouEnPixel = 0;

	if (numero !== 4 && vuePhoto.flouDeMapVisible && vuePhoto.affichageRapide === 0) {

		if (scene.plans[numero].flou > 0)
			flouEnPixel = scene.plans[numero].flou * vuePhoto.largeur / (apnChoisi.capteurLargeur / 1000.0);

		if (flouEnPixel > FLOU_MAX)
			flouEnPixel = FLOU_MAX;
	}

	filtreCSS(cvs, brightness, flouEnPixel);
}

function drawFlousEtExpo() {
	if (vuePhoto.visible) {
		for (var i = 0; i !== 5; i++)
			drawFlouEtExpo(i);
	}
}

function drawVuePhoto() {
	drawPlans();
	drawFlouBouge();
	drawSol();
	drawPDCVuePhoto();
	drawGrillePerspective();
	drawFlousEtExpo();
	drawBruit();
}