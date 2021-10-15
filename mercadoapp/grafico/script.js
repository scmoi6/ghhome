
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
[Date.UTC(1971, 4, 3, 15, 49, 19), -0.4367432517865866],
[Date.UTC(1971, 4, 3, 15, 50, 48), -0.43594298930048625],
[Date.UTC(1971, 4, 3, 15, 52, 15), -0.43074128314086746],
[Date.UTC(1971, 4, 3, 15, 53, 47), -0.39933098056162963],
[Date.UTC(1971, 4, 3, 15, 55, 20), -0.3793244184092437],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 15, 49, 19), 1.2854210628430396],
[Date.UTC(1971, 4, 3, 15, 50, 48), 1.3259297924079982],
[Date.UTC(1971, 4, 3, 15, 52, 15), 1.320142831041582],
[Date.UTC(1971, 4, 3, 15, 53, 47), 1.3336162907114923],
[Date.UTC(1971, 4, 3, 15, 55, 20), 1.356932002232103],
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