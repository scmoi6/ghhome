
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
[Date.UTC(1971, 4, 3, 16, 43, 15), 0.395301327885611],
[Date.UTC(1971, 4, 3, 16, 44, 45), 0.395301327885611],
[Date.UTC(1971, 4, 3, 16, 46, 21), 0.395301327885611],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 16, 43, 15), 2.0326095399728628],
[Date.UTC(1971, 4, 3, 16, 44, 45), 2.0326095399728628],
[Date.UTC(1971, 4, 3, 16, 46, 21), 2.0326095399728628],
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