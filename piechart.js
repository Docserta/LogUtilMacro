$(document).ready(function() {
  $.displayPieChart(colors, datapie);

});

var colors = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"];


$.displayPieChart = function(colors, datapie) {

 var chart;

 var chart = new Highcharts.Chart({
      chart: {
         renderTo: 'pieChart',
         width: 598,
         height: 450,
         marginLeft: 25,
         marginRight: 25,
      },
      colors: colors,
      title: {
         text: "Nombre d'utilisation par macro",
         margin: 10
      },
      tooltip: {
         formatter: function() {
            return "Nombre d'utilisation : " + number_format(this.y,0,',',' ') ;
         }
      },
      plotOptions: {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: true,
               formatter: function() {
                  return "" + this.point.name.toLowerCase() + "";
               }
            }
         },
         series: {
            dataLabels: {
                enabled: true,
                color: 'black',
                fontSize: 3
            }
        }
      },
       series: [{
         type: 'pie',
         data: datapie
      }]
   });





 }




$.loadJSON  = function(response) {
 var obj = JSON.parse(response);
 datapie = tabmacropie(obj);

 };

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
