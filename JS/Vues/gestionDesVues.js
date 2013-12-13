function initIHMVues() {

	//LES VUES ACTIVES SONT INITIALISEES
	if (this.activee) {

		this.init();

		//GESTION DES BOUTONS OUVRIR ET FERMER
		if (this.fermable) {

			document.getElementById('btnCloseVue' + this.nom).innerHTML = '<img src="' + adresseDuCode + '/Images/Icones/btnClose.png"/>';
			document.getElementById('btnVue' + this.nom).innerHTML = '<img src="' + adresseDuCode + '/Images/Icones/btn' + this.nom + '.png"/>';

			var vue = this;

			document.getElementById('btnVue' + this.nom).addEventListener('click', function() {
				vue.visible = 1;

				try {
					vue.draw();
				} catch (err) {}

				show('vue' + vue.nom);
			}, false);

			document.getElementById('btnCloseVue' + this.nom).addEventListener('click', function() {
				vue.visible = 0;
				hide('vue' + vue.nom);
			}, false);


			show('btnCloseVue' + this.nom);
			if (!this.visible)
				show('btnVue' + this.nom);

		} else {
			hide('btnCloseVue' + this.nom);
			hide('btnVue' + this.nom);
		}

		if (this.visible) {
			show('vue' + this.nom);

		} else
			hide('vue' + this.nom);

		//LES VUES INACTIVES SONT CACHEES
	} else {
		hide('vue' + this.nom);
		hide('btnCloseVue' + this.nom);
		hide('btnVue' + this.nom);
	}
}

function RAZconfig() {

	titre += "";

	photographe.deplacementHorizontal = 0;
	photographe.deplacementVertical = 0;
	photographe.deplacementProfondeur = 0;
	photographe.tremblements = 0;
	photographe.typeDeCdc = 0;

	apnChoisi.typeDeFocus = 'auto';
	apnChoisi.modeDeFocus = 'AFC';

	////VUES
	vuePhoto.activee = 0;
	vuePhoto.visible = 0;
	vuePhoto.fermable = 0;
	vuePhoto.largeur = 0;
	vuePhoto.expositionVisible = 0;
	vuePhoto.flouDeMapVisible = 0;
	vuePhoto.flouDeBougeVisible = 0;
	vuePhoto.bruitVisible = 0;
	vuePhoto.affichageRapide = 0;
	vuePhoto.pdcVisible = 0;

	vueCurseurExpo.activee = 0;
	vueCurseurExpo.visible = 0;
	vueCurseurExpo.fermable = 0;
	vueCurseurExpo.largeur = 0;
	vueCurseurExpo.hauteur = 0;

	vueReglagesRapides.activee = 0;
	vueReglagesRapides.visible = 0;
	vueReglagesRapides.fermable = 0;
	vueReglagesRapides.sldOuvertureVisible = 0;
	vueReglagesRapides.sldVitesseVisible = 0;
	vueReglagesRapides.sldISOVisible = 0;
	vueReglagesRapides.sldFocaleVisible = 0;
	vueReglagesRapides.chkCadrageConstantVisible = 0;
	vueReglagesRapides.ensembleRdbModeDePrioriteVisible = 0;

	vueReglagesVuePhoto.activee = 0;
	vueReglagesVuePhoto.visible = 0;
	vueReglagesVuePhoto.fermable = 0;
	vueReglagesVuePhoto.chkExpositionVisible = 0;
	vueReglagesVuePhoto.chkFlouDeMapVisible = 0;
	vueReglagesVuePhoto.chkFlouDeBougeVisible = 0;
	vueReglagesVuePhoto.chkBruitVisible = 0;
	vueReglagesVuePhoto.chkPDCVisible = 0;

	vueReglagesScene.activee = 0;
	vueReglagesScene.visible = 0;
	vueReglagesScene.fermable = 0;
	vueReglagesScene.lstLuminositeVisible = 0;
	vueReglagesScene.sldLuminositeVisible = 0;
	vueReglagesScene.sldLuminositeMin = -15;
	vueReglagesScene.sldLuminositeMax = 16;
	vueReglagesScene.inpDistancesPlansVisible = 0;
	vueReglagesScene.lstScenesVisible = 0;

	vueReglagesPhotographe.activee = 0;
	vueReglagesPhotographe.visible = 0;
	vueReglagesPhotographe.fermable = 0;
	vueReglagesPhotographe.tremblementsVisible = 0;
	vueReglagesPhotographe.lstCdCVisible = 0;

	vueReglagesObjectif.activee = 0;
	vueReglagesObjectif.visible = 0;
	vueReglagesObjectif.fermable = 0;
	vueReglagesObjectif.lstAntiVibrationVisible = 0;

	vueReglagesAPN.activee = 0;
	vueReglagesAPN.visible = 0;
	vueReglagesAPN.fermable = 0;
	vueReglagesAPN.lstTypeDeCapteurVisible = 0;
	vueReglagesAPN.inpDefinitionCapteurVisible = 0;
	vueReglagesAPN.ensembleAPNManuelVisible = 0;
	vueReglagesAPN.ensembleAPNExistantVisible = 0;


	vueHistogrammes.activee = 0;
	vueHistogrammes.visible = 0;
	vueHistogrammes.fermable = 0;

	vueFlouDeMiseAuPoint.activee = 0;
	vueFlouDeMiseAuPoint.visible = 0;
	vueFlouDeMiseAuPoint.fermable = 0;

	vueEXIF.activee = 0;
	vueEXIF.visible = 0;
	vueEXIF.fermable = 0;

	vueReglagesFocus.activee = 0;
	vueReglagesFocus.visible = 0;
	vueReglagesFocus.fermable = 0;
	vueReglagesFocus.rdbTypeDeFocusVisible = 0;
	vueReglagesFocus.rdbModeDeFocusVisible = 0;
	vueReglagesFocus.sldFocusVisible = 0;

	vue3D.activee = 0;
	vue3D.visible = 0;
	vue3D.fermable = 0;
}

function drawVues() {
	for (var i = 0; i < listeDesVues.length; i++) {
		try {
			listeDesVues[i].draw();
		} catch (err) {}
	}
}

function initVues() {

	scene.plans[0].couleur = 'rgb(221,68,119)';
	scene.plans[1].couleur = 'rgb(51,102,204)';
	scene.plans[2].couleur = 'rgb(102,170,20)';

	initSldTailleFenetres();

	for (var i = 0; i < listeDesVues.length; i++) {
		listeDesVues[i].initIHM();
	}
}