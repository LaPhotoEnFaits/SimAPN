var POINTE_FLECHE = 3;



function demiFlecheHorizontale(ct, y, xDebut, xFin, couleur) {

    var temp;

    if (xFin < xDebut) {
        temp = xDebut;
        xDebut = xFin;
        xFin = temp;
    }
    ct.beginPath();
    ct.strokeStyle = couleur;
    ct.moveTo(xDebut, y);
    ct.lineTo(xFin, y);
    ct.lineTo(xFin - POINTE_FLECHE, y - POINTE_FLECHE);
    ct.lineTo(xFin, y);
    ct.lineTo(xFin - POINTE_FLECHE, y + POINTE_FLECHE);
    ct.stroke();
};

function flecheHorizontale(ct, y, xDebut, xFin, couleur) {

    var temp;

    if (xFin < xDebut) {
        temp = xDebut;
        xDebut = xFin;
        xFin = temp;
    }
    ct.strokeStyle = couleur;
    ct.beginPath();
    ct.moveTo(xDebut + POINTE_FLECHE, y - POINTE_FLECHE);
    ct.lineTo(xDebut, y);
    ct.lineTo(xDebut + POINTE_FLECHE, y + POINTE_FLECHE);
    ct.lineTo(xDebut, y);
    ct.lineTo(xFin, y);
    ct.lineTo(xFin - POINTE_FLECHE, y - POINTE_FLECHE);
    ct.lineTo(xFin, y);
    ct.lineTo(xFin - POINTE_FLECHE, y + POINTE_FLECHE);
    ct.stroke();
};

function flecheVerticale(ct, x, yDebut, yFin, couleur) {

    var temp;

    if (yDebut < yFin) {
        temp = yDebut;
        yDebut = yFin;
        yFin = temp;
    }

    ct.beginPath();
    ct.strokeStyle = couleur;
    ct.moveTo(x - POINTE_FLECHE, yDebut - POINTE_FLECHE);
    ct.lineTo(x, yDebut);
    ct.lineTo(x + POINTE_FLECHE, yDebut - POINTE_FLECHE);
    ct.lineTo(x, yDebut);
    ct.lineTo(x, yFin);
    ct.lineTo(x - POINTE_FLECHE, yFin + POINTE_FLECHE);
    ct.lineTo(x, yFin);
    ct.lineTo(x + POINTE_FLECHE, yFin + POINTE_FLECHE);

    ct.stroke();
};

function demiFlecheVerticale(ct, x, yDebut, yFin, couleur) {

    var temp;

    if (yDebut < yFin) {
        temp = yDebut;
        yDebut = yFin;
        yFin = temp;
    }
    ct.beginPath();
    ct.strokeStyle = couleur;
    ct.lineTo(x, yDebut);
    ct.lineTo(x, yFin);
    ct.lineTo(x - POINTE_FLECHE, yFin + POINTE_FLECHE);
    ct.lineTo(x, yFin);
    ct.lineTo(x + POINTE_FLECHE, yFin + POINTE_FLECHE);

    ct.stroke();
};