
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

  colors: ['#0072BD','#5A8F29 '],

  series: [

  { 
 name: "C2",
 data: [
[Date.UTC(1971, 4, 3, 09, 01, 34), -1.2220902430304714],
[Date.UTC(1971, 4, 3, 09, 05, 25), -1.2220902430304714],
[Date.UTC(1971, 4, 3, 09, 09, 25), -1.2220902430304714],
[Date.UTC(1971, 4, 3, 09, 11, 51), -1.2220902430304714],
[Date.UTC(1971, 4, 3, 09, 13, 06), -1.2220902430304714],
[Date.UTC(1971, 4, 3, 09, 14, 25), -1.2220902430304714],
[Date.UTC(1971, 4, 3, 11, 14, 26), 0.31796502384737746],
[Date.UTC(1971, 4, 3, 11, 15, 48), 0.32509885451061926],
[Date.UTC(1971, 4, 3, 11, 17, 06), 0.34201622436915713],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 09, 01, 34), -0.6853060850909087],
[Date.UTC(1971, 4, 3, 09, 05, 25), -0.6853060850909087],
[Date.UTC(1971, 4, 3, 09, 09, 25), -0.6853060850909087],
[Date.UTC(1971, 4, 3, 09, 11, 51), -0.6853060850909087],
[Date.UTC(1971, 4, 3, 09, 13, 06), -0.6853060850909087],
[Date.UTC(1971, 4, 3, 09, 14, 25), -0.6853060850909087],
[Date.UTC(1971, 4, 3, 11, 14, 26), 0.2437266000174576],
[Date.UTC(1971, 4, 3, 11, 15, 48), 0.24922611728697142],
[Date.UTC(1971, 4, 3, 11, 17, 06), 0.24119311453374426],
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