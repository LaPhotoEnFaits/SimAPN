function hide(id) {
	var o = document.getElementById(id);
	o.style.display = 'none';


	var temp = document.getElementById('btn' + id.replace('vue', 'Vue'));
	if (temp)
		temp.style.display = '';
}

function show(id) {
	var o = document.getElementById(id);
	o.style.display = '';

	var temp = document.getElementById('btn' + id.replace('vue', 'Vue'));
	if (temp)
		temp.style.display = 'none';
}

function initSelectedLst(idLst, valeurInitiale, isString) {
	var temp;

	for (var i = 0; i < document.getElementById(idLst).length; i++) {

		if (isString)
			temp = document.getElementById(idLst).options[i].value;
		else
			temp = 1.0 * document.getElementById(idLst).options[i].value;

		if (temp === valeurInitiale)
			document.getElementById(idLst).selectedIndex = i;
	}
}

function drawBouton(id, state) {

	if (state === 'OFF')
		document.getElementById(id).style.background = '';
	else
		document.getElementById(id).style.background = 'rgba(0,0,0,0.25)';
}

function inhibeSelectionDesElementsDeLaPage() {
	var simulateur = document.getElementById('vueSimulateur');
	simulateur.onselectstart = new Function("return false");
	if (window.sidebar) {
		simulateur.onmousedown = disableselect;
		simulateur.onclick = reEnable;
	}
}