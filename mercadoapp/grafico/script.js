
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
[Date.UTC(1971, 4, 3, 15, 49, 19), -0.4367432517865866],
[Date.UTC(1971, 4, 3, 15, 50, 48), -0.43594298930048625],
[Date.UTC(1971, 4, 3, 15, 52, 15), -0.43074128314086746],
[Date.UTC(1971, 4, 3, 15, 53, 47), -0.39933098056162963],
[Date.UTC(1971, 4, 3, 15, 55, 20), -0.3793244184092437],
[Date.UTC(1971, 4, 3, 15, 56, 51), -0.39512960250962514],
[Date.UTC(1971, 4, 3, 15, 58, 15), -0.40513288358581256],
[Date.UTC(1971, 4, 3, 15, 59, 47), -0.41153498347457074],
[Date.UTC(1971, 4, 3, 16, 01, 16), -0.39492953688810006],
[Date.UTC(1971, 4, 3, 16, 03, 02), -0.4181371489848651],
[Date.UTC(1971, 4, 3, 16, 04, 32), -0.23687769588425223],
[Date.UTC(1971, 4, 3, 16, 06, 09), -0.296697316719885],
[Date.UTC(1971, 4, 3, 16, 07, 33), -0.22807480853719309],
[Date.UTC(1971, 4, 3, 16, 09, 05), -0.22947526788786865],
[Date.UTC(1971, 4, 3, 16, 10, 38), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 12, 05), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 13, 37), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 15, 13), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 16, 41), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 18, 05), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 19, 32), -0.1840603718019529],
[Date.UTC(1971, 4, 3, 16, 21, 03), 2.2381341079874106],
[Date.UTC(1971, 4, 3, 16, 22, 45), 2.403988508230692],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 15, 49, 19), 1.2854210628430396],
[Date.UTC(1971, 4, 3, 15, 50, 48), 1.3259297924079982],
[Date.UTC(1971, 4, 3, 15, 52, 15), 1.320142831041582],
[Date.UTC(1971, 4, 3, 15, 53, 47), 1.3336162907114923],
[Date.UTC(1971, 4, 3, 15, 55, 20), 1.356932002232103],
[Date.UTC(1971, 4, 3, 15, 56, 51), 1.3282799171766557],
[Date.UTC(1971, 4, 3, 15, 58, 15), 1.32578843151967],
[Date.UTC(1971, 4, 3, 15, 59, 47), 1.3784276923152872],
[Date.UTC(1971, 4, 3, 16, 01, 16), 1.3717395552857115],
[Date.UTC(1971, 4, 3, 16, 03, 02), 1.3791433318125268],
[Date.UTC(1971, 4, 3, 16, 04, 32), 1.3772791350975533],
[Date.UTC(1971, 4, 3, 16, 06, 09), 1.3659879341413772],
[Date.UTC(1971, 4, 3, 16, 07, 33), 1.3665357075836937],
[Date.UTC(1971, 4, 3, 16, 09, 05), 1.3398980151871243],
[Date.UTC(1971, 4, 3, 16, 10, 38), 1.340436953573887],
[Date.UTC(1971, 4, 3, 16, 12, 05), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 13, 37), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 15, 13), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 16, 41), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 18, 05), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 19, 32), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 21, 03), 1.330444505779349],
[Date.UTC(1971, 4, 3, 16, 22, 45), 1.330444505779349],
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