
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
[Date.UTC(1971, 4, 3, 10, 53, 09), -0.07645899289170366],
[Date.UTC(1971, 4, 3, 10, 54, 50), -0.12802899070147866],
[Date.UTC(1971, 4, 3, 10, 56, 19), -0.12125918403919078],
[Date.UTC(1971, 4, 3, 10, 57, 32), -0.0806403440654746],
[Date.UTC(1971, 4, 3, 10, 58, 59), -0.0983613085637991],
[Date.UTC(1971, 4, 3, 11, 00, 19), -0.08601636700316106],
[Date.UTC(1971, 4, 3, 11, 01, 47), -0.1417677159866959],
[Date.UTC(1971, 4, 3, 11, 03, 33), -0.10771957071461502],
[Date.UTC(1971, 4, 3, 11, 04, 54), -0.13002011030801564],
[Date.UTC(1971, 4, 3, 11, 06, 27), -0.09736574876053616],
[Date.UTC(1971, 4, 3, 11, 08, 06), -0.11628138502279839],
[Date.UTC(1971, 4, 3, 11, 09, 32), -0.130418334229343],
[Date.UTC(1971, 4, 3, 11, 11, 11), -0.14734285088504606],
[Date.UTC(1971, 4, 3, 11, 12, 52), -0.16984250243912147],
[Date.UTC(1971, 4, 3, 11, 14, 08), -0.1694442785178163],
[Date.UTC(1971, 4, 3, 11, 15, 39), -0.14316149971127512],
[Date.UTC(1971, 4, 3, 11, 17, 02), -0.13639169304900944],
[Date.UTC(1971, 4, 3, 11, 18, 26), -0.19154570615056432],
[Date.UTC(1971, 4, 3, 11, 19, 44), -0.17063895028174292],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 10, 53, 09), 0.6653850504857672],
[Date.UTC(1971, 4, 3, 10, 54, 50), 0.6574788592965453],
[Date.UTC(1971, 4, 3, 10, 56, 19), 0.7007867157193814],
[Date.UTC(1971, 4, 3, 10, 57, 32), 0.672993065321581],
[Date.UTC(1971, 4, 3, 10, 58, 59), 0.6584095309450921],
[Date.UTC(1971, 4, 3, 11, 00, 19), 0.6266040532467043],
[Date.UTC(1971, 4, 3, 11, 01, 47), 0.7290140771767151],
[Date.UTC(1971, 4, 3, 11, 03, 33), 0.5897205418930573],
[Date.UTC(1971, 4, 3, 11, 04, 54), 0.6135204362844204],
[Date.UTC(1971, 4, 3, 11, 06, 27), 0.689329515230308],
[Date.UTC(1971, 4, 3, 11, 08, 06), 0.6124000160472987],
[Date.UTC(1971, 4, 3, 11, 09, 32), 0.6283388974847925],
[Date.UTC(1971, 4, 3, 11, 11, 11), 0.5353620890994337],
[Date.UTC(1971, 4, 3, 11, 12, 52), 0.4828559439558511],
[Date.UTC(1971, 4, 3, 11, 14, 08), 0.5901000390701405],
[Date.UTC(1971, 4, 3, 11, 15, 39), 0.46606771169346306],
[Date.UTC(1971, 4, 3, 11, 17, 02), 0.4500746163735414],
[Date.UTC(1971, 4, 3, 11, 18, 26), 0.5944913635478111],
[Date.UTC(1971, 4, 3, 11, 19, 44), 0.6005271757928421],
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