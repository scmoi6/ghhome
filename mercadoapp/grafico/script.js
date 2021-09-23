
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
    pointFormat: '{point.x: %H:%M} %, {point.y:.2f} %',
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
[Date.UTC(1971, 4, 3, 09, 01, 45), 0.7638372810960803],
[Date.UTC(1971, 4, 3, 09, 03, 36), 0.7638372810960803],
[Date.UTC(1971, 4, 3, 09, 05, 00), 0.7638372810960803],
[Date.UTC(1971, 4, 3, 09, 07, 25), 0.7638372810960803],
[Date.UTC(1971, 4, 3, 09, 08, 59), 0.7638372810960803],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 09, 01, 45), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 09, 03, 36), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 09, 05, 00), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 09, 07, 25), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 09, 08, 59), 1.8435872813475473],
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