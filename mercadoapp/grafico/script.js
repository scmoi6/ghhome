
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
[Date.UTC(1971, 4, 3, 10, 53, 09), -0.07645899289170366],
[Date.UTC(1971, 4, 3, 10, 54, 50), -0.12802899070147866],
[Date.UTC(1971, 4, 3, 10, 56, 19), -0.12125918403919078],
[Date.UTC(1971, 4, 3, 10, 57, 32), -0.0806403440654746],
[Date.UTC(1971, 4, 3, 10, 58, 59), -0.0983613085637991],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 10, 53, 09), 0.6653850504857672],
[Date.UTC(1971, 4, 3, 10, 54, 50), 0.6574788592965453],
[Date.UTC(1971, 4, 3, 10, 56, 19), 0.7007867157193814],
[Date.UTC(1971, 4, 3, 10, 57, 32), 0.672993065321581],
[Date.UTC(1971, 4, 3, 10, 58, 59), 0.6584095309450921],
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