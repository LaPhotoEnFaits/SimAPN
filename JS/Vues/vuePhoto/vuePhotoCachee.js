VuePhotoCachee = function() {	
	this.largeur = 100;	
};

function calcHauteurVuePhotoCachee() {
	vuePhotoCachee.hauteur = Math.round(vuePhotoCachee.largeur * apnChoisi.capteurHauteur / apnChoisi.capteurLargeur);
}