
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

  colors: ['#0072BD','#5A8F29 '],

  series: [

  { 
 name: "C2",
 data: [
[Date.UTC(1971, 4, 3, 11, 07, 15), 0.18751477697971364],
[Date.UTC(1971, 4, 3, 11, 08, 50), 0.15775699715465663],
[Date.UTC(1971, 4, 3, 11, 10, 08), 0.1261648336417842],
[Date.UTC(1971, 4, 3, 11, 11, 51), 0.1365596745395603],
[Date.UTC(1971, 4, 3, 11, 13, 20), 0.13024124183700359],
[Date.UTC(1971, 4, 3, 11, 14, 38), 0.17447027075503385],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 07, 15), 0.6311169287205765],
[Date.UTC(1971, 4, 3, 11, 08, 50), 0.6513967492383754],
[Date.UTC(1971, 4, 3, 11, 10, 08), 0.6447824077771891],
[Date.UTC(1971, 4, 3, 11, 11, 51), 0.6113452179915768],
[Date.UTC(1971, 4, 3, 11, 13, 20), 0.6389525165162446],
[Date.UTC(1971, 4, 3, 11, 14, 38), 0.6099456875206855],
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