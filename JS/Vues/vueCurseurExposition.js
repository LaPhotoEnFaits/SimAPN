VueCurseurExposition = function() {
	this.nom='CurseurExpo';

	this.init = initVueCurseurExpo;
	this.initIHM =initIHMVues;
	this.draw=drawCurseurExposition;
};

function initVueCurseurExpo() {
}

function drawCurseurExposition() {

	if (vueCurseurExpo.visible) {
		var cvs = document.getElementById('cvsCurseurExposition');
		var ct = cvs.getContext('2d');

		cvs.width = vueCurseurExpo.largeur;
		cvs.height = vueCurseurExpo.hauteur;

		ct.fillStyle = "#000000";
		ct.beginPath();
		ct.fillRect(0, 0, vueCurseurExpo.largeur - 1, vueCurseurExpo.hauteur - 1);

		ct.font = "12px 'Trebuchet MS'";
		ct.fillStyle = "#ffffff";

		var expoString = 1.0 * priseDeVue.exposition;
		if (expoString !== 0)
			expoString = expoString.toFixed(1);
		if (expoString > 0)
			expoString = '+' + expoString;

		var X0 = (vueCurseurExpo.largeur - 1) / 2;
		var Y0 = 25;
		var c = 3; //côté d'un carré de l'indicateur d'EV
		var e = 1; //espace entre 2 indications

		ct.beginPath();
		ct.fillRect(X0, Y0 - c - e, c, 3 * c + e);

		for (var i = 1; i !== 3; i++) {
			ct.fillRect(X0 + i * 3 * (c + e), Y0 - c - e, c, c);
			ct.fillRect(X0 - i * 3 * (c + e), Y0 - c - e, c, c);
		}

		ct.fillText('-', X0 - 6 * (c + e) - 4, Y0 - 2 * c);
		ct.fillText(expoString + 'EV', X0 - 10, Y0 - 2 * c - 2);
		ct.fillText('+', X0 + 7 * (c + e), Y0 - 2 * c);

		var ii = 0;
		for (i = Math.abs(priseDeVue.exposition); i >= 0 & ii < 7; i -= 0.333) {
			if (priseDeVue.exposition > 0)
				ct.fillRect(X0 + ii * (c + e), Y0, c, 2 * c);
			else
				ct.fillRect(X0 - ii * (c + e), Y0, c, 2 * c);
			ii++;
		}

		if (priseDeVue.exposition > 2) {
			ct.moveTo(X0 + 7 * (c + e), Y0);
			ct.lineTo(X0 + 7 * (c + e) + 1.732 * c, Y0 + c);
			ct.lineTo(X0 + 7 * (c + e), Y0 + 2 * c);
			ct.lineTo(X0 + 7 * (c + e), Y0);
			ct.fill();
		}
		if (priseDeVue.exposition < -2) {
			ct.moveTo(X0 - 6 * (c + e), Y0);
			ct.lineTo(X0 - 6 * (c + e) - 1.732 * c, Y0 + c);
			ct.lineTo(X0 - 6 * (c + e), Y0 + 2 * c);
			ct.lineTo(X0 - 6 * (c + e), Y0);
			ct.fill();
		}
	}
}