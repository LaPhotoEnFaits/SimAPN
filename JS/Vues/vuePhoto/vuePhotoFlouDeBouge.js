function drawFlouBouge() {


	if (vuePhoto.visible && vuePhoto.flouDeBougeVisible && vuePhoto.affichageRapide === 0) {

		var flouEnPixel = priseDeVue.flouDeBouge * vuePhoto.largeur / (apnChoisi.capteurLargeur / 1000.0);

		var cvs_fond = document.getElementById('cvsPhotoPlan3');
		var ct_fond = cvs_fond.getContext('2d');

		var cvs_ar = document.getElementById('cvsPhotoPlan2');
		var ct_ar = cvs_ar.getContext('2d');

		var cvs_map = document.getElementById('cvsPhotoPlan1');
		var ct_map = cvs_map.getContext('2d');

		var cvs_av = document.getElementById('cvsPhotoPlan0');
		var ct_av = cvs_av.getContext('2d');

		var cvs_temp = document.createElement('canvas');
		var ct_temp = cvs_temp.getContext('2d');
		cvs_temp.width = vuePhoto.largeur;
		cvs_temp.height = vuePhoto.hauteur;

		var cvs_save_fond = document.createElement('canvas');
		var ct_save_fond = cvs_save_fond.getContext('2d');
		cvs_save_fond.width = vuePhoto.largeur;
		cvs_save_fond.height = vuePhoto.hauteur;

		var cvs_save_ar = document.createElement('canvas');
		var ct_save_ar = cvs_save_ar.getContext('2d');
		cvs_save_ar.width = vuePhoto.largeur;
		cvs_save_ar.height = vuePhoto.hauteur;

		var cvs_save_map = document.createElement('canvas');
		var ct_save_map = cvs_save_map.getContext('2d');
		cvs_save_map.width = vuePhoto.largeur;
		cvs_save_map.height = vuePhoto.hauteur;

		var cvs_save_av = document.createElement('canvas');
		var ct_save_av = cvs_save_av.getContext('2d');
		cvs_save_av.width = vuePhoto.largeur;
		cvs_save_av.height = vuePhoto.hauteur;


		var di = 2; //incrément pour déplacer les calques transparents (en px), >2 et le décalage des calques se voit

		if (flouEnPixel > vuePhoto.largeur)
			flouEnPixel = vuePhoto.largeur;


		if (priseDeVue.flouDeBouge < priseDeVue.cdc) //Pas de flou si flou de bougé < cdc
			di = flouEnPixel + 1;

		else if (flouEnPixel < 2) //Pour avoir un léger flou entre cdc et 1 pixel visible à l'écran, résultat bof
			di = flouEnPixel / 2;

		else {
			if (flouEnPixel / di > 40) {
				di = flouEnPixel / 40;
				if (di > 4) //pour ne pas trop espacer les calques, 3 est déjà trop
					di = 4;
			}
		}


		var dx = 1; //part du flou reporté en mouvemnt des abscices (en %, 100%=1)
		var dy = 0.5; //part du flou reporté en mouvemnt des ordonées

		var opacite;
		var opaciteMin = 0.01;
		var opaciteMax = 0.2;

		if (flouEnPixel > di) {

			//Sauvegarde et RAZ des canvas
			ct_save_fond.drawImage(cvs_fond, 0, 0);
			ct_save_ar.drawImage(cvs_ar, 0, 0);
			ct_save_map.drawImage(cvs_map, 0, 0);
			ct_save_av.drawImage(cvs_av, 0, 0);

			cvs_fond.width = vuePhoto.largeur;
			cvs_ar.width = vuePhoto.largeur;
			cvs_map.width = vuePhoto.largeur;
			cvs_av.width = vuePhoto.largeur;

			var d_abs = 0;
			var d_ord = 0;

			opacite = 1;

			for (i = 0; i <= flouEnPixel / 2; i += di) {

				d_abs = i * dx;
				opacite = opaciteMax - i * (opaciteMax - opaciteMin) / (flouEnPixel / 2);

				if (opacite < opaciteMin)
					opacite = opaciteMin;

				if (Math.random() > 0.5)
					d_ord += dy;
				else
					d_ord -= dy;

				if (i === 0) {
					d_ord = 0;
					opacite = 10 / (flouEnPixel / di);
				}

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_fond, 0, 0);
				ct_fond.drawImage(cvs_temp, d_abs, d_ord);

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_ar, 0, 0);
				ct_ar.drawImage(cvs_temp, d_abs, d_ord);

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_map, 0, 0);
				ct_map.drawImage(cvs_temp, d_abs, d_ord);

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_av, 0, 0);
				ct_av.drawImage(cvs_temp, d_abs, d_ord);
			}


			d_ord = 0;
			for (i = -di; i >= -flouEnPixel / 2; i -= di) {

				d_abs = i * dx;
				opacite = opaciteMax + i * (opaciteMax - opaciteMin) / (flouEnPixel / 2);

				if (opacite < opaciteMin)
					opacite = opaciteMin;

				if (Math.random() > 0.5)
					d_ord += dy;
				else
					d_ord -= dy;

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_fond, 0, 0);
				ct_fond.drawImage(cvs_temp, d_abs, d_ord);

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_ar, 0, 0);
				ct_ar.drawImage(cvs_temp, d_abs, d_ord);

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_map, 0, 0);
				ct_map.drawImage(cvs_temp, d_abs, d_ord);

				cvs_temp.width = vuePhoto.largeur;
				ct_temp.globalAlpha = opacite;
				ct_temp.drawImage(cvs_save_av, 0, 0);
				ct_av.drawImage(cvs_temp, d_abs, d_ord);
			}
		}
	}
}