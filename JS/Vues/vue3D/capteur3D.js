
function setPtsCapteurs3D() {

	var focaleEnMetre = objectifChoisi.focale / 1000;
	var focaleEquivalenteEnMetre = focaleEnMetre * apnChoisi.cropFactor;
	var df = (focaleEnMetre * focaleEnMetre) / (priseDeVue.distanceDeMAP - focaleEnMetre);
	var dfeq = (focaleEquivalenteEnMetre * focaleEquivalenteEnMetre) / (priseDeVue.distanceDeMAP - focaleEquivalenteEnMetre);

	var ff1_x = -0.018 - (-photographe.deplacementHorizontal);
	var ff1_y = 0.012 + photographe.deplacementVertical;
	var ff1_p = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);
	var ff2_x = 0.018 - (-photographe.deplacementHorizontal);
	var ff2_y = 0.012 + photographe.deplacementVertical;
	var ff2_p = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);
	var ff3_x = 0.018 - (-photographe.deplacementHorizontal);
	var ff3_y = -0.012 + photographe.deplacementVertical;
	var ff3_p = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);
	var ff4_x = -0.018 - (-photographe.deplacementHorizontal);
	var ff4_y = -0.012 + photographe.deplacementVertical;
	var ff4_p = photographe.deplacementProfondeur - (focaleEquivalenteEnMetre + dfeq - focaleEnMetre - df);

	var ca1_x = -apnChoisi.capteurLargeur / 2000 - (-photographe.deplacementHorizontal);
	var ca1_y = apnChoisi.capteurHauteur / 2000 + photographe.deplacementVertical;
	var ca1_p = photographe.deplacementProfondeur;
	var ca2_x = apnChoisi.capteurLargeur / 2000 - (-photographe.deplacementHorizontal);
	var ca2_y = apnChoisi.capteurHauteur / 2000 + photographe.deplacementVertical;
	var ca2_p = photographe.deplacementProfondeur;
	var ca3_x = apnChoisi.capteurLargeur / 2000 - (-photographe.deplacementHorizontal);
	var ca3_y = -apnChoisi.capteurHauteur / 2000 + photographe.deplacementVertical;
	var ca3_p = photographe.deplacementProfondeur;
	var ca4_x = -apnChoisi.capteurLargeur / 2000 - (-photographe.deplacementHorizontal);
	var ca4_y = -apnChoisi.capteurHauteur / 2000 + photographe.deplacementVertical;
	var ca4_p = photographe.deplacementProfondeur;

	capteurFullFrame.pts = [
		[ff1_x, ff1_y, ff1_p],
		[ff2_x, ff2_y, ff2_p],
		[ff3_x, ff3_y, ff3_p],
		[ff4_x, ff4_y, ff4_p]
	];
	capteurFullFrame.CDG = [(ff2_x + ff1_x) / 2, (ff1_y + ff3_y) / 2, ff1_p];
	capteurFullFrame.vecteurNormal = [0, 0, 1];
	capteurFullFrame.rayonAffichage = Math.abs(ff1_x - ff2_x);

	capteurChoisi3D.pts = [
		[ca1_x, ca1_y, ca1_p],
		[ca2_x, ca2_y, ca2_p],
		[ca3_x, ca3_y, ca3_p],
		[ca4_x, ca4_y, ca4_p]
	];
	capteurChoisi3D.CDG = [(ca2_x + ca1_x) / 2, (ca1_y + ca3_y) / 2, ca1_p];
	capteurChoisi3D.vecteurNormal = [0, 0, 1];
	capteurChoisi3D.rayonAffichage = Math.abs(ca1_x - ca2_x);
}

function initCapteurChoisi3D() {
	capteurChoisi3D.nom = "capteurChoisi";
	capteurChoisi3D.couleurFondMax = [255, 153, 0, 1];
	capteurChoisi3D.couleurFondMin = [0, 0, 0];
	capteurChoisi3D.contour = [0, 0, 0, 0];
	capteurChoisi3D.pts = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
	capteurChoisi3D.ptsMaj = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	];
	capteurChoisi3D.CDG = [0, 0, 0];
	capteurChoisi3D.CDGMaj = 0;
	capteurChoisi3D.vecteurNormal = [0, 0, 0];
	capteurChoisi3D.vecteurNormalMaj = [0, 0, 0];
	capteurChoisi3D.majPts = majPtsPolygones;
	capteurChoisi3D.draw = drawPolygone;
	capteurChoisi3D.rayonAffichage = 0;
}

function initCapteurFullFrame3D() {
	capteurFullFrame.nom = "capteurFullFrame";
	capteurFullFrame.couleurFondMax = [16, 150, 24, 1];
	capteurFullFrame.couleurFondMin = [0, 0, 0];
	capteurFullFrame.contour = [0, 0, 0, 0];
	capteurFullFrame.pts = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
	capteurFullFrame.ptsMaj = [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	];
	capteurFullFrame.CDG = [0, 0, 0];
	capteurFullFrame.CDGMaj = 0;
	capteurFullFrame.vecteurNormal = [0, 0, 0];
	capteurFullFrame.vecteurNormalMaj = [0, 0, 0];
	capteurFullFrame.majPts = majPtsPolygones;
	capteurFullFrame.draw = drawPolygone;
	capteurFullFrame.rayonAffichage = 0;
}