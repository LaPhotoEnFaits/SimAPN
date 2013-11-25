var ISO_LOW = 100;

function borne8bits(couleur) {

	if (couleur > 255)
		couleur = 255;
	if (couleur < 0)
		couleur = 0;

	couleur = Math.round(couleur);

	return {
		couleurBornee: couleur
	};
}


function drawBruit() {

	if (vuePhoto.visible && vuePhoto.affichageRapide === 0) {

		var cvs = document.getElementById('cvsPhotoBruit');
		var ct = cvs.getContext('2d');

		cvs.width = vuePhoto.largeur;
		cvs.height = vuePhoto.hauteur;

		if (vuePhoto.bruitVisible) {

			var pourcentageBruit = 0.0025;
			var k_nbr_ISO = 1 + Math.log(apnChoisi.ISO / ISO_LOW) / Math.log(2);

			var k_nbr_vitesse = apnChoisi.vitesse / 120;

			pourcentageBruit = (k_nbr_ISO + k_nbr_vitesse) * pourcentageBruit;

			var nbrDePixels = Math.round(pourcentageBruit * vuePhoto.largeur * vuePhoto.hauteur);

			var i;

			var R, V, B, A;
			var X, Y;
			var dominante;

			var k_min, k_moy;
			var valeur_moy;


			var A_init = 0.1 + 0.1 * (apnChoisi.ISO - ISO_LOW) / (apnChoisi.capteurLowLightISO - ISO_LOW); //composante alpha	init: 0.13 et 0.15

			if (apnChoisi.ISO > ISO_LOW) {
				k_moy = 0.9 - 0.22 * Math.pow((apnChoisi.ISO - ISO_LOW) / (apnChoisi.capteurLowLightISO - ISO_LOW), 0.33); //max de la composante moyenne
				k_min = 0.86 - 0.54 * Math.pow((apnChoisi.ISO - ISO_LOW) / (apnChoisi.capteurLowLightISO - ISO_LOW), 0.33); //max de la composante minimale
			} else {
				k_moy = 0.9;
				k_min = 0.86;
			}


			ct.beginPath();

			for (i = 0; i < nbrDePixels; i++) {

				A = A_init * (1 + 0.33 * (2 * Math.random() - 1));

				if (A < 0)
					A = 0;
				if (A > 1)
					A = 1;

				dominante = Math.random();
				valeur_moy = Math.random();

				if (dominante < 0.32) {
					R = 255;
					if (valeur_moy < 0.5) {
						V = k_moy * 255 * Math.random();
						B = k_min * 255 * Math.random();
					} else {
						B = k_moy * 255 * Math.random();
						V = k_min * 255 * Math.random();
					}
				} else if (dominante < 0.64) {
					V = 255;
					if (valeur_moy < 0.5) {
						R = k_moy * 255 * Math.random();
						B = k_min * 255 * Math.random();
					} else {
						B = k_moy * 255 * Math.random();
						R = k_min * 255 * Math.random();
					}
				} else {
					B = 255;
					if (valeur_moy < 0.5) {
						V = k_moy * 255 * Math.random();
						R = k_min * 255 * Math.random();
					} else {
						R = k_moy * 255 * Math.random();
						V = k_min * 255 * Math.random();
					}
				}

				R = borne8bits(R).couleurBornee;
				V = borne8bits(V).couleurBornee;
				B = borne8bits(B).couleurBornee;

				X = Math.floor(Math.random() * vuePhoto.largeur);
				Y = Math.floor(Math.random() * vuePhoto.hauteur);

				ct.fillStyle = 'rgba(' + R + ',' + V + ',' + B + ',' + A + ')';
				ct.fillRect(X, Y, 1, 1);
			}
		}
	}
}