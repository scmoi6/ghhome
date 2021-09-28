
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
[Date.UTC(1971, 4, 3, 11, 38, 45), -1.455186859221691],
[Date.UTC(1971, 4, 3, 11, 40, 10), -1.4888717402222085],
[Date.UTC(1971, 4, 3, 11, 41, 23), -1.4517162957246699],
[Date.UTC(1971, 4, 3, 11, 42, 53), -1.4392630972941856],
[Date.UTC(1971, 4, 3, 11, 44, 05), -1.4439585655548481],
[Date.UTC(1971, 4, 3, 11, 45, 41), -1.4533495020762066],
[Date.UTC(1971, 4, 3, 11, 47, 16), -1.4584532719247645],
[Date.UTC(1971, 4, 3, 11, 48, 40), -1.4063948194694587],
[Date.UTC(1971, 4, 3, 11, 49, 59), -1.4353842322092913],
[Date.UTC(1971, 4, 3, 11, 51, 20), -1.4374257401487012],
[Date.UTC(1971, 4, 3, 11, 52, 48), -1.4278306528334062],
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
[Date.UTC(1971, 4, 3, 11, 38, 45), -2.131938570742231],
[Date.UTC(1971, 4, 3, 11, 40, 10), -2.1251065630326194],
[Date.UTC(1971, 4, 3, 11, 41, 23), -2.077203271862582],
[Date.UTC(1971, 4, 3, 11, 42, 53), -2.007870719397209],
[Date.UTC(1971, 4, 3, 11, 44, 05), -2.0225296019184547],
[Date.UTC(1971, 4, 3, 11, 45, 41), -2.063521648176081],
[Date.UTC(1971, 4, 3, 11, 47, 16), -2.0597534789754235],
[Date.UTC(1971, 4, 3, 11, 48, 40), -2.019571413013266],
[Date.UTC(1971, 4, 3, 11, 49, 59), -1.956727507045286],
[Date.UTC(1971, 4, 3, 11, 51, 20), -1.9426320890774118],
[Date.UTC(1971, 4, 3, 11, 52, 48), -1.9504941804236342],
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