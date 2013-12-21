function majCDGPDC3D() {
	var focaleEnMetre = objectifChoisi.focale / 1000;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var p_f = df + focaleEnMetre;

	pdc3D.CDGMaj = 1.0 * majCoord3D(0, 0, priseDeVue.finDeLaPDC + photographe.deplacementProfondeur + p_f, 'translation').p.toFixed(6);
	listeDeTousLesPolygones.listeDesCDG[findPolygoneByName(pdc3D.nom)] = 1.0 * pdc3D.CDGMaj;
}

function initPDC3D() {
	pdc3D.nom = 'pdc3D';
}

function drawPDC3D() {
	var cvs = document.getElementById('cvsVue3D');
	var ct = cvs.getContext('2d');

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var p_f = df + focaleEnMetre;

	ct.strokeStyle = 'rgba(' + COULEUR_PDC + ',0.5)';
	ct.fillStyle = 'rgba(' + COULEUR_PDC + ',0.5)';

	var xt = 1.0;
	var yt = 1.0;

	var finPDC_t = priseDeVue.finDeLaPDC;

	if (finPDC_t > PDC_INFINIE)
		finPDC_t = PDC_INFINIE;

	if (finPDC_t > DIMENSION_MAX_3D)
		finPDC_t = DIMENSION_MAX_3D;

	ct.beginPath();

	var coord_3D = xyp2XYmaj(-DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, priseDeVue.debutDeLaPDC + photographe.deplacementProfondeur + p_f);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.moveTo(xt, yt);
	coord_3D = xyp2XYmaj(-DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, finPDC_t + photographe.deplacementProfondeur + p_f);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.lineTo(xt, yt);
	coord_3D = xyp2XYmaj(DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, finPDC_t + photographe.deplacementProfondeur + p_f);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.lineTo(xt, yt);
	coord_3D = xyp2XYmaj(DIMENSION_MAX_3D + photographe.deplacementHorizontal, 0, priseDeVue.debutDeLaPDC + photographe.deplacementProfondeur + p_f);
	xt = coord_3D.X;
	yt = coord_3D.Y;
	ct.lineTo(xt, yt);

	ct.closePath();
	ct.stroke();
	ct.fill();
}