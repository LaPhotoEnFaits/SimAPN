var LONGUEUR_AXE_X_HISTO = 256;
var OFFSET_X_HISTO = 10;
var HAUTEUR_AXE_Y_HISTO = 100;
var OFFSET_Y_HISTO = 15;

var LARGEUR_CVS_HISTO = LONGUEUR_AXE_X_HISTO + 2 * OFFSET_X_HISTO;
var HAUTEUR_CVS_HISTO = HAUTEUR_AXE_Y_HISTO + 2 * OFFSET_Y_HISTO;


VueHistogrammes = function() {
	this.nom = 'Histogrammes';

	this.nbrPixelLuminosite = new Array(256);

	this.init = initVueHistogrammes;
	this.initIHM = initIHMVues;

};


function initVueHistogrammes() {
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

		//Cherche le max
		var max = 0;
		for (i = 1; i <= 250; i++) {
			if (vueHistogrammes.nbrPixelLuminosite[i] > max)
				max = vueHistogrammes.nbrPixelLuminosite[i];
		}


		var nbrPixelLuminosite_norm = new Array(256);

		for (var i = 0; i <= 255; i++)
			nbrPixelLuminosite_norm[i] = Math.round(HAUTEUR_AXE_Y_HISTO * vueHistogrammes.nbrPixelLuminosite[i] / max);


		var k = LONGUEUR_AXE_X_HISTO / 256;

		for (i = 0; i <= 255; i++) {
			ct.fillStyle = 'rgb(' + i + ',' + i + ',' + i + ')';
			ct.fillRect(OFFSET_X_HISTO + k * i, OFFSET_Y_HISTO + HAUTEUR_AXE_Y_HISTO - nbrPixelLuminosite_norm[i] + 1, k, nbrPixelLuminosite_norm[i]);
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

	for (i = 0; i < 256; i++)
		vueHistogrammes.nbrPixelLuminosite[i] = 0;

	var brightness = Math.pow(2, priseDeVue.exposition * 8.0 / apnChoisi.dynamiqueCourante);
	if (vuePhoto.expositionVisible === 0 || vuePhoto.affichageRapide)
		brightness = 1;

	for (i = 0; i < nombreDePixels; i++) {

		if (ValPixA[i] !== 0) {
			
			lum=brightness*(0.3 * valPixR[i] + 0.6 * valPixV[i] + 0.1 * valPixB[i])
			lum = Math.round(lum);
			if (lum > 255)
				lum = 255;

			vueHistogrammes.nbrPixelLuminosite[lum]++;
		}
	}
}

////OUVRIR/FERMER
document.getElementById('btnVueHistogrammes').addEventListener('click', function() {
	vueHistogrammes.visible = 1;
	drawVueHistogrammes();
	show('vueHistogrammes');
}, false);

document.getElementById('btnCloseVueHistogrammes').addEventListener('click', function() {
	vueHistogrammes.visible = 0;
	hide('vueHistogrammes');
}, false);
