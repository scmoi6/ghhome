
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