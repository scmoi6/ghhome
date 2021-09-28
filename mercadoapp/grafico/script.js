
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
[Date.UTC(1971, 4, 3, 12, 55, 56), -1.5793105419386944],
[Date.UTC(1971, 4, 3, 12, 57, 15), -1.5740026212962],
[Date.UTC(1971, 4, 3, 12, 58, 33), -1.581556200672074],
[Date.UTC(1971, 4, 3, 12, 59, 51), -1.589109780047937],
[Date.UTC(1971, 4, 3, 13, 01, 09), -1.578493938762926],
[Date.UTC(1971, 4, 3, 13, 02, 33), -1.6185074943756428],
[Date.UTC(1971, 4, 3, 13, 04, 02), -1.6119746689694847],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 12, 55, 56), -2.1647427727086943],
[Date.UTC(1971, 4, 3, 12, 57, 15), -2.250072436009576],
[Date.UTC(1971, 4, 3, 12, 58, 33), -2.237482524895229],
[Date.UTC(1971, 4, 3, 12, 59, 51), -2.234999759206946],
[Date.UTC(1971, 4, 3, 13, 01, 09), -2.395736827189199],
[Date.UTC(1971, 4, 3, 13, 02, 33), -2.2714224601020905],
[Date.UTC(1971, 4, 3, 13, 04, 02), -2.2969456435429914],
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