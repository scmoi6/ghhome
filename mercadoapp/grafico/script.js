
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
[Date.UTC(1971, 4, 3, 11, 44, 00), 1.01787912634419],
[Date.UTC(1971, 4, 3, 11, 45, 29), 1.0327580162567074],
[Date.UTC(1971, 4, 3, 12, 34, 27), 0.6338814743553245],
[Date.UTC(1971, 4, 3, 12, 36, 01), 0.6257286579648857],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 44, 00), 1.0555312296756103],
[Date.UTC(1971, 4, 3, 11, 45, 29), 1.0742956350338284],
[Date.UTC(1971, 4, 3, 12, 34, 27), 1.3626345688661612],
[Date.UTC(1971, 4, 3, 12, 36, 01), 1.3528645981903287],
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