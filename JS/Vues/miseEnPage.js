function miseEnPage() {

  if (!vueReglagesRapides.chkCadrageConstantVisible) document.getElementById('ensembleTriangleExpo').style.marginTop = 0;

  var i = 0;
  if (vueReglagesRapides.sldOuvertureVisible) i++;
  if (vueReglagesRapides.sldVitesseVisible) i++;
  if (vueReglagesRapides.sldISOVisible) i++;


  if (i < 2) {
    document.getElementById('ensembleFocale').style.marginTop = '12px';
    document.getElementById('ensembleTriangleExpo').style.marginTop = '12px';
  }
  if (i === 0) document.getElementById('ensembleTriangleExpo').style.marginTop = 0;

  if (vueReglagesRapides.sldFocaleVisible === 0) document.getElementById('ensembleFocale').style.marginTop = '0px';
}