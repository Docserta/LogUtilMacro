
loadJSON(function(response) {
var obj = JSON.parse(response);
//var jour = Date.parse(obj.utilmacro[1].Date);
var mois = MyMonth(obj.utilmacro[1].Date);
//document.getElementById("demo").innerHTML = obj.utilmacro[1].Date;
document.getElementById("demo").innerHTML = mois;
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
