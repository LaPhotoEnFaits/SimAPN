Scene = function() {
	this.theme = '';
	this.luminosite = 0;
	this.illustrations = new Array(4);
	this.plans = new Array(4);
	this.couleurSolHaut = new Array(3);
	this.couleurSolBas = new Array(3);
	this.init = initScene;
};

function initScene(theme) {

	scene.theme = theme;

	switch (theme) {

		case 'BreakingBad':
			
			var urlMasqueGaz = adresseDuCode+'/Images/Photos/Breaking%20Bad/MasqueGaz.png';
			var urlCamion = adresseDuCode+'/Images/Photos/Breaking%20Bad/Camion.png';
			var urlWalt = adresseDuCode+'/Images/Photos/Breaking%20Bad/Walt.gif';
			var urlFondBreakinBad = adresseDuCode+'/Images/Photos/Breaking%20Bad/BrBa-Fond.jpg';
			 
			scene.illustrations[0] = new illustration('MasqueGaz', urlMasqueGaz, 0.3, 0.5, 0.05);
			scene.illustrations[1] = new illustration('WalterWalt', urlWalt, 1.8, 0.0, 0.07);
			scene.illustrations[2] = new illustration('Camion', urlCamion, 7.78, -1.5, 0.175);
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

			for (var i = 0; i != 3; i++)
				scene.plans[i].distance -= photographe.deplacementProfondeur;

			break;


		default:
			initScene('BreakingBad');
			break;
	}
}


Plan = function(numeroIllustration, distance) {
	this.numeroIllustration = numeroIllustration;
	this.distance = distance;

	this.flou = 0;
};

