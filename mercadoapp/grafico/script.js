
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
[Date.UTC(1971, 4, 3, 15, 50, 19), 0.46700715015322025],
[Date.UTC(1971, 4, 3, 15, 51, 51), 0.43799795709906775],
[Date.UTC(1971, 4, 3, 15, 53, 25), 0.4435137895812069],
[Date.UTC(1971, 4, 3, 15, 55, 07), 0.4335035750766103],
[Date.UTC(1971, 4, 3, 15, 56, 36), 0.3963227783452483],
[Date.UTC(1971, 4, 3, 15, 58, 05), 0.41001021450459696],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 15, 50, 19), 2.3667041851715975],
[Date.UTC(1971, 4, 3, 15, 51, 51), 2.176444039689507],
[Date.UTC(1971, 4, 3, 15, 53, 25), 2.154940302714392],
[Date.UTC(1971, 4, 3, 15, 55, 07), 2.1817159819336185],
[Date.UTC(1971, 4, 3, 15, 56, 36), 2.1305790464440033],
[Date.UTC(1971, 4, 3, 15, 58, 05), 2.097292563767228],
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