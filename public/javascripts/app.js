var app = angular.module('app',[]);
app.controller('myController', function($scope, $http, $interval) {
		$scope.msg = "something";


		$interval(function(){
			refresh();
		},300000);

		refresh();

		function refresh(){

				$http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(function(data){
					console.log(data);

					var chart = AmCharts.makeChart( "chart", {
						  "type": "serial",
						  "theme": "light",
						  "dataProvider": data.data,
						  "valueAxes": [ {
						    "gridColor": "#FFFFFF",
						    "gridAlpha": 0.2,
						    "dashLength": 0
						  } ],
						  "gridAboveGraphs": true,
						  "startDuration": 1,
						  "graphs": [ {
						    "balloonText": "[[category]]: <b>$[[value]]</b>",
						    "fillAlphas": 0.8,
						    "lineAlpha": 0.2,
						    "type": "column",
						    "valueField": "price_usd",
						    "labelText":"$[[price_usd]]",
						    "precision": 2
						  } ],
						  "chartCursor": {
						    "categoryBalloonEnabled": false,
						    "cursorAlpha": 0,
						    "zoomable": false
						  },
						  "categoryField": "name",
						  "categoryAxis": {
						    "gridPosition": "start",
						    "gridAlpha": 0,
						    "tickPosition": "start",
						    "tickLength": 20
						  },
						  "export": {
						    "enabled": true
						  }

					});
				});

			}
});