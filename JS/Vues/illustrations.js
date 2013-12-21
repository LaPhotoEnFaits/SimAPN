function imageTelechargee() {

	if (cptImagesTelechargees !== NBR_PLANS+1) {
		cptImagesTelechargees++;

		document.getElementById('infoUtilisateur').innerHTML = getTraduction('chargementEnCours') + ' (';
		document.getElementById('infoUtilisateur').innerHTML += Math.round(100 * cptImagesTelechargees / NBR_PLANS) + '%)';

		if (scene.illustrations[0] && scene.illustrations[1] && scene.illustrations[2] && scene.illustrations[3] && illustrationPhotographe) {
			if (scene.illustrations[0].image.complete && scene.illustrations[1].image.complete && scene.illustrations[2].image.complete && scene.illustrations[3].image.complete && illustrationPhotographe.image.complete) {
				cptImagesTelechargees = NBR_PLANS+1;
				initPostTelechargement();
			}
		}
	}
}