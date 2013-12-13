var LONGUEUR_AXE_X_HISTO = 256;
var OFFSET_X_HISTO = 10;
var HAUTEUR_AXE_Y_HISTO = 100;
var OFFSET_Y_HISTO = 15;
var OFFSET_Y_HISTO_RVB = 8;
var HAUTEUR_AXE_Y_HISTO_RVB = 66;

var LARGEUR_CVS_HISTO = LONGUEUR_AXE_X_HISTO + 2 * OFFSET_X_HISTO;
var HAUTEUR_CVS_HISTO = HAUTEUR_AXE_Y_HISTO + 2 * OFFSET_Y_HISTO;


VueHistogrammes = function() {
	this.nom = 'Histogrammes';

	this.nbrPixelLuminosite = new Array(256);
	this.nbrPixelR = new Array(256);
	this.nbrPixelV = new Array(256);
	this.nbrPixelB = new Array(256);

	this.init = initVueHistogrammes;
	this.initIHM = initIHMVues;
	this.draw = drawVueHistogrammes;

	this.histoRVBVIsible = 0;
};


function initVueHistogrammes() {
	document.getElementById('nomChkHistoRVB').innerHTML = 'afficher les histogrammes RVB'
}


function drawVueHistogrammes() {

	if (vueHistogrammes.visible) {

		calcHistogrammes();

		var cvs = document.getElementById('cvsHistogrammes');
		var ct = cvs.getContext('2d');

		cvs.width = LARGEUR_CVS_HISTO;
		cvs.height = HAUTEUR_CVS_HISTO;

		ct.fillStyle = 'rgba(255,255,255,0.5)';
		ct.beginPath();
		ct.fillRect(0, 0, LARGEUR_CVS_HISTO - 1, HAUTEUR_CVS_HISTO - 1);

		demiFlecheVerticale(ct, OFFSET_X_HISTO, OFFSET_Y_HISTO + HAUTEUR_AXE_Y_HISTO + 1, OFFSET_Y_HISTO, COLOR_AXE);
		demiFlecheHorizontale(ct, OFFSET_Y_HISTO + HAUTEUR_AXE_Y_HISTO + 1, OFFSET_X_HISTO, OFFSET_X_HISTO + LONGUEUR_AXE_X_HISTO, COLOR_AXE);

		ct.fillStyle = COLOR_POLICE_AXE;
		ct.font = POLICE_AXES;
		ct.fillText(getTraduction("nbr_de_pixels"), 2, OFFSET_Y_HISTO - 3);
		ct.fillText(getTraduction("luminosite"), LARGEUR_CVS_HISTO - 65, OFFSET_Y_HISTO + HAUTEUR_AXE_Y_HISTO + 12);
		ct.font = "12px 'Trebuchet MS'";

		var max = 0;
		for (var i = 1; i <= 250; i++) {
			if (vueHistogrammes.nbrPixelLuminosite[i] > max)
				max = vueHistogrammes.nbrPixelLuminosite[i];
		}

		var nbrPixelLuminosite_norm = new Array(256);

		for (i = 0; i <= 255; i++)
			nbrPixelLuminosite_norm[i] = Math.round(HAUTEUR_AXE_Y_HISTO * vueHistogrammes.nbrPixelLuminosite[i] / max);

		var k = LONGUEUR_AXE_X_HISTO / 256;

		for (i = 0; i <= 255; i++) {
			ct.fillStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
			ct.fillRect(OFFSET_X_HISTO + k * i, OFFSET_Y_HISTO + HAUTEUR_AXE_Y_HISTO - nbrPixelLuminosite_norm[i] + 1, k, nbrPixelLuminosite_norm[i]);
		}


		var cvs = document.getElementById('cvsHistoRVB');
		var ct = cvs.getContext('2d');

		if (vueHistogrammes.histoRVBVIsible) {

			cvs.width = LARGEUR_CVS_HISTO;
			var hauteurCanvasHistoRVB = 4 * OFFSET_Y_HISTO_RVB + 3 * HAUTEUR_AXE_Y_HISTO_RVB;
			cvs.height = hauteurCanvasHistoRVB;

			ct.fillStyle = 'rgba(255,255,255,0.5)';

			ct.beginPath();
			ct.fillRect(0, 0, LARGEUR_CVS_HISTO - 1, hauteurCanvasHistoRVB - 1);

			demiFlecheVerticale(ct, OFFSET_X_HISTO, 3 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) + 1, 3 * OFFSET_Y_HISTO_RVB + 2 * HAUTEUR_AXE_Y_HISTO_RVB + 1, COLOR_AXE);
			demiFlecheHorizontale(ct, 3 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) + 1, OFFSET_X_HISTO, OFFSET_X_HISTO + LONGUEUR_AXE_X_HISTO, COLOR_AXE);

			demiFlecheVerticale(ct, OFFSET_X_HISTO, 2 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) + 1, 2 * OFFSET_Y_HISTO_RVB + 1 * HAUTEUR_AXE_Y_HISTO_RVB + 1, COLOR_AXE);
			demiFlecheHorizontale(ct, 2 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) + 1, OFFSET_X_HISTO, OFFSET_X_HISTO + LONGUEUR_AXE_X_HISTO, COLOR_AXE);

			demiFlecheVerticale(ct, OFFSET_X_HISTO, OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB + 1, OFFSET_Y_HISTO_RVB + 1, COLOR_AXE);
			demiFlecheHorizontale(ct, 1 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) + 1, OFFSET_X_HISTO, OFFSET_X_HISTO + LONGUEUR_AXE_X_HISTO, COLOR_AXE);

			var Rmax = 0;
			var Vmax = 0;
			var Bmax = 0;
			var nbrPixelR_norm = new Array(256);
			var nbrPixelV_norm = new Array(256);
			var nbrPixelB_norm = new Array(256);

			for (i = 0; i <= 255; i++) {
				if (vueHistogrammes.nbrPixelR[i] > Rmax)
					Rmax = vueHistogrammes.nbrPixelR[i];
				if (vueHistogrammes.nbrPixelV[i] > Vmax)
					Vmax = vueHistogrammes.nbrPixelV[i];
				if (vueHistogrammes.nbrPixelB[i] > Bmax)
					Bmax = vueHistogrammes.nbrPixelB[i];
			}

			for (i = 0; i <= 255; i++) {
				nbrPixelR_norm[i] = Math.round(HAUTEUR_AXE_Y_HISTO_RVB * vueHistogrammes.nbrPixelR[i] / Rmax);
				nbrPixelV_norm[i] = Math.round(HAUTEUR_AXE_Y_HISTO_RVB * vueHistogrammes.nbrPixelV[i] / Vmax);
				nbrPixelB_norm[i] = Math.round(HAUTEUR_AXE_Y_HISTO_RVB * vueHistogrammes.nbrPixelB[i] / Bmax);
			}

			for (i = 0; i <= 255; i++) {
				ct.beginPath();
				ct.fillStyle = 'rgb(' + i + ',0,0)';
				ct.fillRect(OFFSET_X_HISTO + i, OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB - nbrPixelR_norm[i] + 1, 1, nbrPixelR_norm[i]);
				ct.beginPath();
				ct.fillStyle = 'rgb(0,' + i + ',0)';
				ct.fillRect(OFFSET_X_HISTO + i, 2 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) - nbrPixelV_norm[i] + 1, 1, nbrPixelV_norm[i]);
				ct.beginPath();
				ct.fillStyle = 'rgb(0,0,' + i + ')';
				ct.fillRect(OFFSET_X_HISTO + i, 3 * (OFFSET_Y_HISTO_RVB + HAUTEUR_AXE_Y_HISTO_RVB) - nbrPixelB_norm[i] + 1, 1, nbrPixelB_norm[i]);
			}

		} else {
			cvs.width = 1;
			cvs.height = 1;
		}
	}
}

function calcHistogrammes() {

	var cvs = document.getElementById('cvsPhotoCachee');
	var ct = cvs.getContext('2d');

	cvs.width = vuePhotoCachee.largeur;
	cvs.height = vuePhotoCachee.hauteur;

	var nombreDePixels = vuePhotoCachee.largeur * vuePhotoCachee.hauteur;

	ct.drawImage(document.getElementById('cvsPhotoPlan3'), 0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);
	ct.drawImage(document.getElementById('cvsPhotoPlan4'), 0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);
	ct.drawImage(document.getElementById('cvsPhotoPlan2'), 0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);
	ct.drawImage(document.getElementById('cvsPhotoPlan1'), 0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);
	ct.drawImage(document.getElementById('cvsPhotoPlan0'), 0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);

	if (vuePhoto.bruitVisible)
		ct.drawImage(document.getElementById('cvsPhotoBruit'), 0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);

	var imgData = ct.getImageData(0, 0, vuePhotoCachee.largeur, vuePhotoCachee.hauteur);

	var valPixR = new Array(nombreDePixels);
	var valPixV = new Array(nombreDePixels);
	var valPixB = new Array(nombreDePixels);
	var ValPixA = new Array(nombreDePixels);

	for (var i = 0; i < nombreDePixels; i++) {
		valPixR[i] = imgData.data[4 * i];
		valPixV[i] = imgData.data[4 * i + 1];
		valPixB[i] = imgData.data[4 * i + 2];
		ValPixA[i] = imgData.data[4 * i + 3];
	}

	var R, V, B;
	var lum;

	for (i = 0; i < 256; i++) {
		vueHistogrammes.nbrPixelLuminosite[i] = 0;
		vueHistogrammes.nbrPixelR[i] = 0;
		vueHistogrammes.nbrPixelV[i] = 0;
		vueHistogrammes.nbrPixelB[i] = 0;
	}

	var brightness = Math.pow(2, priseDeVue.exposition * 8.0 / apnChoisi.dynamiqueCourante);
	if (vuePhoto.expositionVisible === 0 || vuePhoto.affichageRapide)
		brightness = 1;

	for (i = 0; i < nombreDePixels; i++) {
		if (ValPixA[i] !== 0) {

			lum = brightness * (0.3 * valPixR[i] + 0.6 * valPixV[i] + 0.1 * valPixB[i]);
			lum = Math.round(lum);
			lum = huitBits(lum);

			R = brightness * valPixR[i];
			R = Math.round(R);
			R = huitBits(R);

			V = brightness * valPixV[i];
			V = Math.round(V);
			V = huitBits(V);

			B = brightness * valPixB[i];
			B = Math.round(B);
			B = huitBits(B);

			vueHistogrammes.nbrPixelLuminosite[lum]++;
			vueHistogrammes.nbrPixelR[R]++;
			vueHistogrammes.nbrPixelV[V]++;
			vueHistogrammes.nbrPixelB[B]++;
		}
	}
}

document.getElementById('chkHistoRVB').addEventListener('change', function() {
	if (document.getElementById('chkHistoRVB').checked)
		vueHistogrammes.histoRVBVIsible = 1;
	else
		vueHistogrammes.histoRVBVIsible = 0;

	drawVueHistogrammes();
}, false);