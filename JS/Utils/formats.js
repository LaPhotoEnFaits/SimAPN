function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function huitBits(nbr){

	if(nbr<0)
		nbr=0;
	if(nbr>255)
		nbr=255;

	return(nbr);
}

function sortNumber(a, b) {
	return a - b;
}