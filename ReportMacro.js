$(document).ready(function() {

loadJSON = function(response) {
var obj = JSON.parse(response);
datapie = tabmacropie(obj);

}
});

function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("/json");
   xobj.open('GET', 'http://localhost/Reportmacro/json/convertcsv.json', true);
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 ) {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         };
   };
   xobj.send(null);
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

function replacechar(str) {
  //str = str.replace(' ','_');
  str = str.replace('�','c');
  return str;
}
