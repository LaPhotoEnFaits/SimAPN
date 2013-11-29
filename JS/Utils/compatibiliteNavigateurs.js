Navigateur = function() {
  this.nom = '';
  this.version = 0;
  this.langue = '';
};

function filtreCSS(cvs, luminosite, flou) {

  if (navigateur.nom === 'FireFox')
    cvs.style.filter = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'filtre_map\'><feGaussianBlur stdDeviation = \'' + flou + '\'/><feComponentTransfer><feFuncR type=\'linear\' slope=\'' + luminosite + '\'/><feFuncG type=\'linear\' slope=\'' + luminosite + '\'/><feFuncB type=\'linear\' slope=\'' + luminosite + '\'/></feComponentTransfer></filter></svg>#filtre_map")';

  else if (navigateur.nom === 'InternetExplorer')
    cvs.style = 'filter:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0\'/></filter></svg>#grayscale")';
  else
    cvs.style.webkitFilter = 'brightness(' + luminosite + ')blur(' + flou + 'px)';
}

function displayInfoNavigateur() {

  var texte;

  texte = getTraduction('vousUtilisez');
  texte += navigateur.nom;
  texte += ' ';
  texte += navigateur.version;
  texte += ', ';


  switch (navigateur.nom) {

    case 'Chrome':
      if (navigateur.version >= 18)
        document.getElementById('infoNavigateur').style.display = 'none';
      else {
        texte += getTraduction('versionInsuffisante');
        texte += '18';
      }
      break;


    case 'Opera':
      if (navigateur.version >= 15) {
        document.getElementById('infoNavigateur').style.display = 'none';
      } else {
        texte += getTraduction('versionInsuffisante');
        texte += '15';
      }
      texte += getTraduction('RqOP');
      break;


    case 'InternetExplorer':
      if (navigateur.version >= 10) {
        texte += getTraduction('RqIE');
      } else {
        flag_navigateur_OK = 0;
        texte += getTraduction('versionInsuffisante');
        texte += '10';
      }

      break;


    case 'FireFox':
      if (navigateur.version >= 23) {

      } else {
        texte += getTraduction('versionInsuffisante');
        texte += '23';
      }
      texte += getTraduction('RqFF');
      break;


    default:
      texte += getTraduction('navigateurInconnu');
      break;

  }
  document.getElementById('infoNavigateur').innerHTML = texte;
}

function readUserAgent() {

  var userAgent = navigator.userAgent;
  var fabricant = navigator.vendor;
  var nom = navigator.appName;

  navigateur.langue = '';

  if (navigator.language) {
    if (navigator.language.search('fr') !== -1)
      navigateur.langue = 'Francais';
    else
      navigateur.langue = 'Anglais';
  }


  if (navigateur.langue === '') {
    if (navigator.browserLanguage) {
      if (navigator.browserLanguage.search('fr') !== -1)
        navigateur.langue = 'Francais';
      else
        navigateur.langue = 'Anglais';
    }
  }

  navigateur.nom = '';

  if (fabricant) {

    if (fabricant.search('Google') !== -1) {
      navigateur.nom = 'Chrome';
      navigateur.version = 1.0 * userAgent.substr(userAgent.indexOf("Chrome/") + 7, 4);
    }

    if (fabricant.search("Opera") !== -1) {
      navigateur.nom = "Opera";
      navigateur.version = 1.0 * userAgent.substr(userAgent.indexOf("OPR/") + 4, 4);
    }

    if (fabricant.search("Apple") !== -1) {
      navigateur.nom = "Safari";
      navigateur.version = 1.0 * userAgent.substr(userAgent.indexOf("Version/") + 8, 3);

    }
  }

  if (navigateur.nom === '') {

    if (nom.search('Internet Explorer') !== -1) {
      navigateur.nom = "InternetExplorer";
      navigateur.version = userAgent.substr(userAgent.indexOf("MSIE") + 5, 4);

      if (navigateur.version.substr(3, 1) === ';')
        navigateur.version = navigateur.version.substr(0, 3)

      navigateur.version = 1.0 * navigateur.version;
    } else if (userAgent.search('Firefox') !== -1) {
      navigateur.nom = "FireFox";
      navigateur.version = 1.0 * userAgent.substr(userAgent.indexOf("Firefox/") + 8, 4);
    }
  }

  if (navigateur.nom === "")
    navigateur.nom = 'Chrome';
}

function curseurCSS(type) {

  switch (type) {

    case 'mainOuverte':
      if (navigateur.nom === 'FireFox')
        document.body.style.cursor = ' -moz-grab';
      else
        document.body.style.cursor = '-webkit-grab';
      break;


    case 'mainFermee':
      if (navigateur.nom === 'FireFox')
        document.body.style.cursor = ' -moz-grabbing';
      else
        document.body.style.cursor = '-webkit-grabbing';
      break;

    default:
      break;
  }
}