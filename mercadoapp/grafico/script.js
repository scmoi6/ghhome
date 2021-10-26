
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
[Date.UTC(1971, 4, 3, 13, 24, 58), -0.5678691504956257],
[Date.UTC(1971, 4, 3, 13, 26, 37), -0.8714720014053823],
[Date.UTC(1971, 4, 3, 13, 28, 08), -0.8762844518333202],
[Date.UTC(1971, 4, 3, 13, 29, 52), -0.8691703946789864],
[Date.UTC(1971, 4, 3, 13, 31, 23), -0.8827707980622601],
[Date.UTC(1971, 4, 3, 13, 33, 00), -0.6193414463769531],
[Date.UTC(1971, 4, 3, 13, 34, 34), -0.6115996782972255],
[Date.UTC(1971, 4, 3, 13, 36, 11), -0.6072057018195687],
[Date.UTC(1971, 4, 3, 13, 37, 44), -0.6406836178399322],
[Date.UTC(1971, 4, 3, 13, 39, 15), -0.660561130477022],
[Date.UTC(1971, 4, 3, 13, 40, 55), -0.6480069119693899],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 13, 24, 58), -1.8727668007640252],
[Date.UTC(1971, 4, 3, 13, 26, 37), -1.8245579823491842],
[Date.UTC(1971, 4, 3, 13, 28, 08), -1.9418099969139346],
[Date.UTC(1971, 4, 3, 13, 29, 52), -1.861406775817953],
[Date.UTC(1971, 4, 3, 13, 31, 23), -1.8396341612047284],
[Date.UTC(1971, 4, 3, 13, 33, 00), -1.8772188267347834],
[Date.UTC(1971, 4, 3, 13, 34, 34), -1.7707473378678396],
[Date.UTC(1971, 4, 3, 13, 36, 11), -1.4567047373143627],
[Date.UTC(1971, 4, 3, 13, 37, 44), -1.535001524634927],
[Date.UTC(1971, 4, 3, 13, 39, 15), -1.5730553086040433],
[Date.UTC(1971, 4, 3, 13, 40, 55), -1.578114429025368],
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