//function init() {
 //loadJSON(function(response) {
  // Parse JSON string into object
//    var text = JSON.parse(response);
 //});
//}
$(document).ready(function(response) {



$.loadJSON = function(response) {
var obj = JSON.parse(response);
var tableaumacrospie = tabmacropie(obj)
//var tableaumacros = tabmacro(obj);
//var tableaumodules = tabmodule(obj);
document.getElementById("pieChart").innerHTML = tabmacropie(obj);
  var series = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
};

function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("/json");
   xobj.open('GET', 'http://localhost/Reportmacro/json/convertcsv.json', true);
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 ) { //&& xobj.status == "200"
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         };
   };
   xobj.send(null);
}

function MyMonth(str){
  var reg=new RegExp("[/]+", "g");
  var tableau=str.split(reg);
return parseInt(tableau[1]);
}

function tabmacropie(obj){
// Création d'un tableau contenant la liste des macros
// et du nombre d'utilisation par mois (en chiffre)
// ex macros[Grille de percage][8] = 215
  var macrospie = [];
  var itemMacro = [];
      for (var iter = 1; iter < obj.utilmacro.length; iter++) {
        var id = replacechar(obj.utilmacro[iter].Macro);
          if (typeof (macros[id]) == 'undefined') {
            //La macro ne fait pas partie du tableau. on l'Ajoute
            itemMacro = [id,1];
            mcropie.push(itemMacro);
          } else {
            // Ajoute +1 à la macro en cours
            macrospie[id][1]++;
          }
  };
return macrospie;
}

function tabmacro(obj){
// Création d'un tableau contenant la liste des macros
// et du nombre d'utilisation par mois (en chiffre)
// ex macros[Grille de percage][8] = 215
  var macros = {};
      for (var iter = 1; iter < obj.utilmacro.length; iter++) {
        var id = replacechar(obj.utilmacro[iter].Macro);
        var mois = MyMonth(obj.utilmacro[iter].Date);
          if (typeof (macros[id]) == 'undefined') {
            //La macro ne fait pas partie du tableau. on l'Ajoute
            //On crée les 12 mois (=0) et on ajoute 1 au mois correspondant
            macros[id] = {};
            macros[id]= pushmois(macros[id]);
            macros[id][mois]++;
          } else {
            // Ajoute +1 à la macro en cours
            macros[id][mois]++;
          }
  };
return macros;
}

function tabmodule(obj) {
// Création d'un tableau contenant la liste des macros
// et du nombre d'utilisation par mois (en chiffre)
// ex macros[Grille de percage][8] = 215
  var modules = {};
      for (var iter = 1; iter < obj.utilmacro.length; iter++) {
        var id = replacechar(obj.utilmacro[iter].Module);
        var mois = MyMonth(obj.utilmacro[iter].Date);
          if (typeof (modules[id]) == 'undefined') {
            //La macro ne fait pas partie du tableau. on l'Ajoute
            //On crée les 12 mois (=0) et on ajoute 1 au mois correspondant
            modules[id] = {};
            modules[id]= pushmois(modules[id]);
            modules[id][mois]++;
          } else {
            // Ajoute +1 à la macro en cours
            modules[id][mois]++;
          }
  };
return modules;
}

function pushmois(tab) {
  //
    for (var i = 1 ; i<13; i++){
        tab[i]=0;
    };
    return tab;
}

function replacechar(str) {
  //str = str.replace(' ','_');
  str = str.replace('�','c');
  return str;
}

});

//function pushseries(tab) {
//  var mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
//  for(var i = 1; i <13; i++){
//    tab[mois.i]=0;
//  };
//  return tab;
//}
