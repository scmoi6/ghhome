
Highcharts.chart('container', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Rendimento de Carteira e Ações'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%d'
    },
    title: {
      text: 'Date'
    }
  },
  yAxis: {
    title: {
      text: 'Variação (%)'
    },
    //min: "mmmm",
    //max: "MMMM",
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x: %H:%M}, {point.y:.2f} %',
  },

  plotOptions: {
    series: {
      lineWidth: 1,
      marker: {
        enabled: false
      }
    }
  },

  colors: ['#d95319','#FFB92A'],

  series: [

  { 
 name: "C2",
 data: [
[Date.UTC(1971, 4, 3, 15, 37, 18), -0.8931906001941381],
[Date.UTC(1971, 4, 3, 15, 38, 57), -0.9059894319094042],
[Date.UTC(1971, 4, 3, 15, 40, 26), -0.8766150640383108],
[Date.UTC(1971, 4, 3, 15, 42, 10), -0.8602493447958603],
[Date.UTC(1971, 4, 3, 15, 43, 39), -0.8606689786226029],
[Date.UTC(1971, 4, 3, 15, 45, 09), -0.8547941050483732],
[Date.UTC(1971, 4, 3, 15, 46, 38), -0.8505977667810805],
[Date.UTC(1971, 4, 3, 15, 48, 16), -0.8359105828455449],
[Date.UTC(1971, 4, 3, 15, 49, 48), -0.8149288915090591],
[Date.UTC(1971, 4, 3, 15, 51, 31), -0.8262590048307539],
[Date.UTC(1971, 4, 3, 15, 53, 00), -0.807795116454646],
[Date.UTC(1971, 4, 3, 15, 54, 31), -0.7970944538730373],
[Date.UTC(1971, 4, 3, 15, 56, 09), -0.7939472001725734],
[Date.UTC(1971, 4, 3, 15, 57, 54), -0.8279375401376798],
[Date.UTC(1971, 4, 3, 15, 59, 24), -0.837379301239094],
[Date.UTC(1971, 4, 3, 16, 00, 51), -0.8231117511302677],
[Date.UTC(1971, 4, 3, 16, 02, 28), -0.871789275030932],
[Date.UTC(1971, 4, 3, 16, 04, 13), -0.8579413587488482],
[Date.UTC(1971, 4, 3, 16, 05, 52), -0.8392676534593746],
[Date.UTC(1971, 4, 3, 16, 07, 25), -0.9148017422707322],
[Date.UTC(1971, 4, 3, 16, 08, 59), -0.6349059798420265],
[Date.UTC(1971, 4, 3, 16, 10, 36), -0.45614196965516607],
[Date.UTC(1971, 4, 3, 16, 12, 15), -0.4676818998902377],
[Date.UTC(1971, 4, 3, 16, 13, 44), -0.4676818998902377],
[Date.UTC(1971, 4, 3, 16, 15, 24), -0.4676818998902377],
[Date.UTC(1971, 4, 3, 16, 17, 02), -0.4236203480836087],
[Date.UTC(1971, 4, 3, 16, 18, 36), -0.4236203480836087],
[Date.UTC(1971, 4, 3, 16, 20, 09), -0.4236203480836087],
[Date.UTC(1971, 4, 3, 16, 21, 38), -0.5010427891152469],
[Date.UTC(1971, 4, 3, 16, 23, 15), -0.5230735650185614],
[Date.UTC(1971, 4, 3, 16, 24, 46), -0.5230735650185614],
[Date.UTC(1971, 4, 3, 16, 26, 23), -0.5230735650185614],
[Date.UTC(1971, 4, 3, 16, 27, 52), -0.5230735650185614],
[Date.UTC(1971, 4, 3, 16, 29, 20), -0.5230735650185614],
[Date.UTC(1971, 4, 3, 16, 31, 04), -0.5230735650185614],
[Date.UTC(1971, 4, 3, 16, 32, 40), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 34, 19), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 35, 53), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 37, 25), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 38, 58), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 40, 33), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 42, 01), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 43, 39), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 45, 13), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 46, 52), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 48, 24), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 49, 51), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 51, 22), -0.5218146635383669],
[Date.UTC(1971, 4, 3, 16, 52, 54), -0.5218146635383669],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 15, 37, 18), -0.1803240439043452],
[Date.UTC(1971, 4, 3, 15, 38, 57), -0.1541352419053177],
[Date.UTC(1971, 4, 3, 15, 40, 26), 0.08849879340755429],
[Date.UTC(1971, 4, 3, 15, 42, 10), 0.03262559043439861],
[Date.UTC(1971, 4, 3, 15, 43, 39), 0.00432251486170987],
[Date.UTC(1971, 4, 3, 15, 45, 09), -0.009800832610318277],
[Date.UTC(1971, 4, 3, 15, 46, 38), -0.03593325398073555],
[Date.UTC(1971, 4, 3, 15, 48, 16), -0.12360513150170283],
[Date.UTC(1971, 4, 3, 15, 49, 48), -0.3522379773712614],
[Date.UTC(1971, 4, 3, 15, 51, 31), -0.2698094983129562],
[Date.UTC(1971, 4, 3, 15, 53, 00), -0.09761366170288888],
[Date.UTC(1971, 4, 3, 15, 54, 31), 0.023989957482428714],
[Date.UTC(1971, 4, 3, 15, 56, 09), 0.024347034797100875],
[Date.UTC(1971, 4, 3, 15, 57, 54), -0.0025747153741484397],
[Date.UTC(1971, 4, 3, 15, 59, 24), 0.028227901401178812],
[Date.UTC(1971, 4, 3, 16, 00, 51), 0.0364030925526615],
[Date.UTC(1971, 4, 3, 16, 02, 28), 0.11098526745982884],
[Date.UTC(1971, 4, 3, 16, 04, 13), 0.2345528118757878],
[Date.UTC(1971, 4, 3, 16, 05, 52), 0.13220317736790665],
[Date.UTC(1971, 4, 3, 16, 07, 25), 0.2066913845607088],
[Date.UTC(1971, 4, 3, 16, 08, 59), 0.13348113828355324],
[Date.UTC(1971, 4, 3, 16, 10, 36), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 12, 15), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 13, 44), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 15, 24), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 17, 02), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 18, 36), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 20, 09), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 21, 38), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 23, 15), 0.0983748001893936],
[Date.UTC(1971, 4, 3, 16, 24, 46), -0.034457960864886505],
[Date.UTC(1971, 4, 3, 16, 26, 23), -0.034457960864886505],
[Date.UTC(1971, 4, 3, 16, 27, 52), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 29, 20), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 31, 04), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 32, 40), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 34, 19), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 35, 53), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 37, 25), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 38, 58), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 40, 33), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 42, 01), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 43, 39), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 45, 13), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 46, 52), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 48, 24), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 49, 51), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 51, 22), -0.05302598122730595],
[Date.UTC(1971, 4, 3, 16, 52, 54), -0.05302598122730595],
]
 },


  ],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        plotOptions: {
          series: {
            marker: {
              radius: 1
            }
          }
        }
      }
    }]
  }
});