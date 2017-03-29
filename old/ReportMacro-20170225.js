
loadJSON(function(response) {
var obj = JSON.parse(response);
var tableau = tab(obj);
document.getElementById("demo").innerHTML = tab(obj);
});

//function init() {
 //loadJSON(function(response) {
  // Parse JSON string into object
//    var text = JSON.parse(response);
 //});
//}

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
return tableau[1];
}

function tab(obj){
  var series = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
  var macros = {};
  var id = obj.utilmacro[0].Module;
  //macros[id]= new pushserie();
      for (var iter = 1; iter < obj.utilmacro.length; iter++) {
        var id = obj.utilmacro[iter].Module;
        var mois = MyMonth(obj.utilmacro[iter].Date);
          //if (macros.length==0){
          if (macros[id]==true) {
            var toto = "Aout";
            macros[id].Aout++;
          } else {
            // Ajoute +1 à la macro en cours
              macros[id]= new pushserie();
          }
        // test si la macro est déja présente dans le tableau
        //if (macros.id.length > 0) { // On regarde le nombre d'items

          //macros[id] = pushserie(macros[id]);
          //for(var nomois = 1; nomois <13; nomois++){
          //  macros.id.series[nomois] = 0
          //};
          //};

  };
return macros;
}

function pushserie() {
//  var mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
//  for(var nomois = 1; nomois <13; nomois++){
    this.Janvier = 0;
    this.Fevrier = 0;
    this.Mars = 0;
    this.Avril = 0;
    this.Mai = 0;
    this.Juin = 0;
    this.Juillet = 0;
    this.Aout = 0;
    this.Septembre = 0;
    this.Octobre = 0;
    this.Novembre = 0;
    this.Decembre = 0;
}
