
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
[Date.UTC(1971, 4, 3, 11, 33, 18), -1.5970716610116842],
[Date.UTC(1971, 4, 3, 11, 34, 43), -1.5262313355136725],
[Date.UTC(1971, 4, 3, 11, 35, 56), -1.4862177799009446],
[Date.UTC(1971, 4, 3, 11, 37, 23), -1.4619238354217856],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 27, 56), -2.1884346963511603],
[Date.UTC(1971, 4, 3, 11, 29, 20), -2.1963584166329153],
[Date.UTC(1971, 4, 3, 11, 30, 33), -2.2456351526517926],
[Date.UTC(1971, 4, 3, 11, 31, 50), -2.271167140226349],
[Date.UTC(1971, 4, 3, 11, 33, 18), -2.3176529658793243],
[Date.UTC(1971, 4, 3, 11, 34, 43), -2.2731832868313595],
[Date.UTC(1971, 4, 3, 11, 35, 56), -2.249262455714107],
[Date.UTC(1971, 4, 3, 11, 37, 23), -2.1270874931030526],
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