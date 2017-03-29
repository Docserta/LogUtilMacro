$(document).ready(function() {

var chart;
var colors = ["#98DF8A", "#FFBB78", "#8C564B"];

var options = {};

options.chart = {
  renderTo: 'macroChart',
  width: 588,
  height: 400,
  marginTop: 70,
  marginLeft: 100,
  marginRight: 100,
  type:'line'
};

options.credits = {
  enabled: false
};

options.colors = colors;

options.title = {
  text: "Utilisation des macro Catia du groupe eXcent",
  margin: 10
};

options.tooltip = {
  formatter: function() {
    return "Nb utilisation : " + number_format(this.y,3,',',' ') + "€" ;
  }
};


options.xAxis = {
  categories: [],
  labels: {
    rotation: -45,
		y: 20
  }
};

options.yAxis = [
  {
    title : {
      text: "Utilisation mensuelle des macros"
    },
    labels: {
    formatter: function() {
  		return this.value ;
    },
    style: {
  		color: '#000'
    }
  }
  },{
  title: {
    text: "Macros Catia"
  },
  labels: {
		formatter: function() {
			return this.value ;
		},
		style: {
			color: '#8C564B'
		}
	},
  opposite: true

}];




options.series = [
  {
    name: 'Macros GSE',
    data: []
  },
  {
    name: 'Macros Grilles',
    data: []
  },
//  {
//    name: 'Baryl de pétrole ($US)',
//    yAxis: 1,
//    data: []
//  }
]




  $.getJSON('http://undisconnected.com/sandbox/highcharts-essence/prix-essence.json', function(essence) {

    $.each(essence, function(i,e){

      var theDate = new Date(parseInt(i),0,1);

      options.series[0].data.push(e.gazoil);
      options.series[1].data.push(e.super95);
		  options.series[2].data.push(e.brent);
		  options.xAxis.categories.push(i);

    })
    console.log(options.categories)
		chart = new Highcharts.Chart(options);

  });



});
