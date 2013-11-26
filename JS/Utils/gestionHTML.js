function hide(id) {
	var o = document.getElementById(id);
	o.style.display = 'none';


	var temp = document.getElementById('btn' + id.replace('vue','Vue'));
	if (temp)
		temp.style.display = '';
}

function show(id) {
	var o = document.getElementById(id);
	o.style.display = '';

	var temp = document.getElementById('btn' + id.replace('vue','Vue'));
	if (temp)
		temp.style.display = 'none';
}

function initSelectedListe(idListe, valeurInitiale, isString) {
	var temp;

	for (var i = 0; i < document.getElementById(idListe).length; i++) {

		if (isString)
			temp = document.getElementById(idListe).options[i].value;
		else
			temp = 1.0 * document.getElementById(idListe).options[i].value;

		if (temp === valeurInitiale)
			document.getElementById(idListe).selectedIndex = i;
	}
}