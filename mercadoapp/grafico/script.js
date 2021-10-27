
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

  colors: ['#d95319','#5A8F29 '],

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