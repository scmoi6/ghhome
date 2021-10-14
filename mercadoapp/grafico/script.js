
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

  colors: ['#0072BD','#FFB92A'],

  series: [

  { 
 name: "C2",
 data: [
[Date.UTC(1971, 4, 3, 10, 18, 03), -0.1944674121585166],
[Date.UTC(1971, 4, 3, 10, 19, 34), -0.22517279302567417],
[Date.UTC(1971, 4, 3, 10, 21, 02), -0.25587817389279843],
[Date.UTC(1971, 4, 3, 10, 22, 34), 0.2233665941511198],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 10, 18, 03), -0.045436148241539964],
[Date.UTC(1971, 4, 3, 10, 19, 34), -0.047754229131447],
[Date.UTC(1971, 4, 3, 10, 21, 02), -0.14129716633560774],
[Date.UTC(1971, 4, 3, 10, 22, 34), -0.15423611213941646],
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