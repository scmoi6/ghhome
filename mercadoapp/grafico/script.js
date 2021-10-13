
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
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 10, 34, 08), 0.13735901290492514],
[Date.UTC(1971, 4, 3, 10, 35, 49), 0.17536919078968705],
[Date.UTC(1971, 4, 3, 10, 37, 25), 0.09972323170661657],
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