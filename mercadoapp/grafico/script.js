
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
[Date.UTC(1971, 4, 3, 14, 47, 28), -0.6883624599625993],
[Date.UTC(1971, 4, 3, 14, 48, 55), -0.6857535060327047],
[Date.UTC(1971, 4, 3, 14, 50, 41), -0.6967913880437715],
[Date.UTC(1971, 4, 3, 14, 52, 12), -0.4352939287635138],
[Date.UTC(1971, 4, 3, 14, 53, 40), -0.4039864816048677],
[Date.UTC(1971, 4, 3, 14, 55, 07), -0.4206436490033827],
[Date.UTC(1971, 4, 3, 14, 56, 35), -0.4098064557561565],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 14, 47, 28), -0.26919705908691194],
[Date.UTC(1971, 4, 3, 14, 48, 55), -0.2771560972754883],
[Date.UTC(1971, 4, 3, 14, 50, 41), -0.27704151533036736],
[Date.UTC(1971, 4, 3, 14, 52, 12), -0.2933562215175711],
[Date.UTC(1971, 4, 3, 14, 53, 40), -0.3178679437794041],
[Date.UTC(1971, 4, 3, 14, 55, 07), -0.3681694176910333],
[Date.UTC(1971, 4, 3, 14, 56, 35), -0.4087843102413613],
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