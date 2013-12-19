VuePhotoCachee = function() {
	this.largeur = 300;
};

function calcHauteurVuePhotoCachee() {
	vuePhotoCachee.hauteur = Math.round(vuePhotoCachee.largeur * apnChoisi.capteurHauteur / apnChoisi.capteurLargeur);
}