Scene = function() {
	this.sceneChoisie = '';
	this.luminosite = 0;
	this.illustrations = new Array(4);
	this.plans = new Array(4);
	this.couleurSolHaut = new Array(3);
	this.couleurSolBas = new Array(3);
	this.init = initScene;
	this.planSelectionne = '?';
};


function initScene() {

	cptImagesTelechargees = 0;
	for (var i = 0; i != 4; i++)
		scene.illustrations[i] = null;

	switch (scene.sceneChoisie) {

		case 'Breaking Bad':

			var urlMasqueGaz = adresseDuCode + '/Images/Photos/Breaking%20Bad/MasqueGaz.png';
			var urlCamion = adresseDuCode + '/Images/Photos/Breaking%20Bad/Camion.png';
			var urlWalt = adresseDuCode + '/Images/Photos/Breaking%20Bad/Walt.gif';
			var urlFondBreakinBad = adresseDuCode + '/Images/Photos/Breaking%20Bad/BrBa-Fond.jpg';

			scene.illustrations[0] = new illustration('MasqueGaz', urlMasqueGaz, 0.4, 0.5, 0.05);
			scene.illustrations[1] = new illustration('WalterWalt', urlWalt, 1.8, 0.0, 0.07);
			scene.illustrations[2] = new illustration('Camion', urlCamion, 7.78, -0.5, 0.175);
			scene.illustrations[3] = new illustration('Desert', urlFondBreakinBad, 3750.0, 0.0, 0.0);

			scene.plans[0] = new Plan(0, 2.0);
			scene.plans[1] = new Plan(1, 6.0);
			scene.plans[2] = new Plan(2, 12.0);
			scene.plans[3] = new Plan(3, 2500.0);

			scene.couleurSolHaut = [246, 243, 230];
			scene.couleurSolBas = [224, 192, 153];

			scene.luminosite = 15.0;

			photographe.deplacementHorizontal = 0.186;
			photographe.deplacementVertical = 0.567;
			photographe.deplacementProfondeur = -1.1;

			for (var i = 0; i !== 4; i++)
				scene.plans[i].distance -= photographe.deplacementProfondeur;

			break;

		case 'Pamela va à la plage':

			var urlBarque = adresseDuCode + '/Images/Photos/Plage/Barque.png';
			var urlIlot = adresseDuCode + '/Images/Photos/Plage/Ilot.gif';
			var urlPam = adresseDuCode + '/Images/Photos/Plage/Pam.gif';
			var urlFondPlage = adresseDuCode + '/Images/Photos/Plage/plageFond.jpg';

			scene.illustrations[0] = new illustration('Barque', urlBarque, 1.0, -0.9, 0.05);
			scene.illustrations[1] = new illustration('Pamela', urlPam, 1.7, 0.6, 0.00);
			scene.illustrations[2] = new illustration('Ilot', urlIlot, 5.0, 3, 0.42);
			scene.illustrations[3] = new illustration('Mer', urlFondPlage, 3750.0, 0.0, 0.0);


			scene.plans[0] = new Plan(0, 4.1);
			scene.plans[1] = new Plan(1, 7.8);
			scene.plans[2] = new Plan(2, 11.8);
			scene.plans[3] = new Plan(3, 2500.0);

			scene.couleurSolHaut = [182, 211, 227];
			scene.couleurSolBas = [230, 214, 186];

			scene.luminosite = 15.0;

			photographe.deplacementHorizontal = -0.722;
			photographe.deplacementVertical = 0.777;
			photographe.deplacementProfondeur = 0.4;

			for (var i = 0; i !== 3; i++)
				scene.plans[i].distance -= photographe.deplacementProfondeur;

			break;



		default:
			initScene('Breaking Bad');
			break;
	}
}

Plan = function(numeroIllustration, distance) {
	this.numeroIllustration = numeroIllustration;
	this.distance = distance;

	this.flou = 0;
};


function getSceneRandom() {
	var nbr = Math.random();

	if (nbr < 0.5)
		return ('Breaking Bad');
	else
		return ('Pamela va à la plage');
}