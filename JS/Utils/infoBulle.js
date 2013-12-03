var flagInfoBulleActif = 1;

function setInfoBulle() {

	var all = document.getElementsByTagName("*");

	for (var i = 0, max = all.length; i < max; i++) {
		try {
			var texte = getTraduction('INFO' + all[i].id);
			if (flagInfoBulleActif)
				document.getElementById(all[i].id).title = texte;
			else
				document.getElementById(all[i].id).title = '';
		} catch (err) {}
	}
}

function initInfoBulle() {

	document.getElementById('btnInformationsUtilisateur').innerHTML = '<img src="' + adresseDuCode + '/Images/Icones/btnInformationsUtilisateur.png"/>';
	setInfoBulle();

	drawBouton('btnInformationsUtilisateur', 'ON');
}

document.getElementById('btnInformationsUtilisateur').addEventListener('mousedown', function() {
	if (flagInfoBulleActif) {
		flagInfoBulleActif = 0;
		drawBouton('btnInformationsUtilisateur', 'OFF');
	} else {
		flagInfoBulleActif = 1;
		drawBouton('btnInformationsUtilisateur', 'ON');
	}

	setInfoBulle();
}, false);