
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
[Date.UTC(1971, 4, 3, 11, 14, 24), 0.41756894790601073],
[Date.UTC(1971, 4, 3, 11, 15, 58), 0.4451481103166399],
[Date.UTC(1971, 4, 3, 11, 17, 45), 0.45495403472932683],
[Date.UTC(1971, 4, 3, 11, 19, 17), 0.4547497446373949],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 14, 24), 2.564578353586011],
[Date.UTC(1971, 4, 3, 11, 15, 58), 2.563258107329336],
[Date.UTC(1971, 4, 3, 11, 17, 45), 2.5954684988791055],
[Date.UTC(1971, 4, 3, 11, 19, 17), 2.4731467789201655],
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