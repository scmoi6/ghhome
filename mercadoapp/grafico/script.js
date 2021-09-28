
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
[Date.UTC(1971, 4, 3, 11, 27, 56), -1.5376637799744297],
[Date.UTC(1971, 4, 3, 11, 29, 20), -1.5613452720717569],
[Date.UTC(1971, 4, 3, 11, 30, 33), -1.503774748179998],
[Date.UTC(1971, 4, 3, 11, 31, 50), -1.5674697958900308],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 27, 56), -2.1884346963511603],
[Date.UTC(1971, 4, 3, 11, 29, 20), -2.1963584166329153],
[Date.UTC(1971, 4, 3, 11, 30, 33), -2.2456351526517926],
[Date.UTC(1971, 4, 3, 11, 31, 50), -2.271167140226349],
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