
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
[Date.UTC(1971, 4, 3, 10, 34, 08), 0.14797361748617455],
[Date.UTC(1971, 4, 3, 10, 35, 49), 0.10822863758286339],
[Date.UTC(1971, 4, 3, 10, 37, 25), 0.13227944593459107],
[Date.UTC(1971, 4, 3, 10, 38, 59), 0.0627766862062451],
[Date.UTC(1971, 4, 3, 10, 40, 31), 0.03424182883977611],
[Date.UTC(1971, 4, 3, 10, 42, 06), 0.03546475129834192],
[Date.UTC(1971, 4, 3, 10, 43, 32), 0.03892969826426729],
[Date.UTC(1971, 4, 3, 10, 45, 04), 0.0440252085082804],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 10, 34, 08), 0.13735901290492514],
[Date.UTC(1971, 4, 3, 10, 35, 49), 0.17536919078968705],
[Date.UTC(1971, 4, 3, 10, 37, 25), 0.09972323170661657],
[Date.UTC(1971, 4, 3, 10, 38, 59), 0.08291995184901424],
[Date.UTC(1971, 4, 3, 10, 40, 31), 0.03524677377026997],
[Date.UTC(1971, 4, 3, 10, 42, 06), 0.09633583311463578],
[Date.UTC(1971, 4, 3, 10, 43, 32), 0.09966083225887434],
[Date.UTC(1971, 4, 3, 10, 45, 04), 0.05708658048173554],
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