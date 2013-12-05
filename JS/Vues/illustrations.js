function illustration(nom, srcImage, hauteurEnMetre, offsetXEnMetre, offsetYEnMetre) {
	this.nom = nom;
	this.image = document.createElement("IMG");
	this.image.crossOrigin = "anonymous";
	this.image.src = srcImage;
	this.hauteurEnMetre = hauteurEnMetre;
	this.offsetXEnMetre = offsetXEnMetre;
	this.offsetYEnMetre = offsetYEnMetre;
	this.image.onload = imageTelechargee;
}


function imageTelechargee() {

	if (cptImagesTelechargees !== NBR_PLANS) {
		cptImagesTelechargees++;

		document.getElementById('infoUtilisateur').innerHTML = getTraduction('chargementEnCours') + ' (';
		document.getElementById('infoUtilisateur').innerHTML += Math.round(100 * cptImagesTelechargees / NBR_PLANS) + '%)';

		if (scene.illustrations[0] && scene.illustrations[1] && scene.illustrations[2] && scene.illustrations[3]) {
			if (scene.illustrations[0].image.complete && scene.illustrations[1].image.complete && scene.illustrations[2].image.complete && scene.illustrations[3].image.complete) {
				cptImagesTelechargees = NBR_PLANS;
				initPostTelechargement();
			}
		}
	}
}