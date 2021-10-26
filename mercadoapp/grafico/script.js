
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
[Date.UTC(1971, 4, 3, 13, 24, 58), -0.5678691504956257],
[Date.UTC(1971, 4, 3, 13, 26, 37), -0.8714720014053823],
[Date.UTC(1971, 4, 3, 13, 28, 08), -0.8762844518333202],
[Date.UTC(1971, 4, 3, 13, 29, 52), -0.8691703946789864],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 13, 24, 58), -1.8727668007640252],
[Date.UTC(1971, 4, 3, 13, 26, 37), -1.8245579823491842],
[Date.UTC(1971, 4, 3, 13, 28, 08), -1.9418099969139346],
[Date.UTC(1971, 4, 3, 13, 29, 52), -1.861406775817953],
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