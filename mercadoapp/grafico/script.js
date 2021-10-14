
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
[Date.UTC(1971, 4, 3, 10, 18, 03), -0.1944674121585166],
[Date.UTC(1971, 4, 3, 10, 19, 34), -0.22517279302567417],
[Date.UTC(1971, 4, 3, 10, 21, 02), -0.25587817389279843],
[Date.UTC(1971, 4, 3, 10, 22, 34), 0.2233665941511198],
[Date.UTC(1971, 4, 3, 10, 24, 22), 0.17981713239838548],
[Date.UTC(1971, 4, 3, 10, 25, 53), 0.15372759309950634],
[Date.UTC(1971, 4, 3, 10, 27, 21), -0.18503504025817463],
[Date.UTC(1971, 4, 3, 10, 28, 50), -0.1517207054611558],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 10, 18, 03), -0.045436148241539964],
[Date.UTC(1971, 4, 3, 10, 19, 34), -0.047754229131447],
[Date.UTC(1971, 4, 3, 10, 21, 02), -0.14129716633560774],
[Date.UTC(1971, 4, 3, 10, 22, 34), -0.15423611213941646],
[Date.UTC(1971, 4, 3, 10, 24, 22), -0.15526734964557143],
[Date.UTC(1971, 4, 3, 10, 25, 53), -0.1430511514956656],
[Date.UTC(1971, 4, 3, 10, 27, 21), -0.11272219201959865],
[Date.UTC(1971, 4, 3, 10, 28, 50), -0.16393150749648422],
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