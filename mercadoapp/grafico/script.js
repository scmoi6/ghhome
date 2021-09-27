
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
[Date.UTC(1971, 4, 3, 13, 37, 50), 0.11169540581303927],
[Date.UTC(1971, 4, 3, 13, 39, 10), 0.11964453140922426],
[Date.UTC(1971, 4, 3, 13, 40, 42), 0.11088011088009608],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 13, 37, 50), 0.31402861532130455],
[Date.UTC(1971, 4, 3, 13, 39, 10), 0.33065957926310396],
[Date.UTC(1971, 4, 3, 13, 40, 42), 0.34288563290394425],
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