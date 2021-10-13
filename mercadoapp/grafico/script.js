
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
[Date.UTC(1971, 4, 3, 11, 44, 00), 1.01787912634419],
[Date.UTC(1971, 4, 3, 11, 45, 29), 1.0327580162567074],
[Date.UTC(1971, 4, 3, 12, 34, 27), 0.6338814743553245],
[Date.UTC(1971, 4, 3, 12, 36, 01), 0.6257286579648857],
[Date.UTC(1971, 4, 3, 12, 37, 35), 0.6746455563074294],
[Date.UTC(1971, 4, 3, 12, 39, 16), 0.6393846254188595],
[Date.UTC(1971, 4, 3, 12, 40, 41), 0.6469259805799821],
[Date.UTC(1971, 4, 3, 12, 42, 11), 0.6933970340054163],
[Date.UTC(1971, 4, 3, 12, 43, 42), 0.7374222425136745],
[Date.UTC(1971, 4, 3, 12, 45, 14), 0.7502629283286044],
[Date.UTC(1971, 4, 3, 12, 46, 42), 0.7586195651287708],
[Date.UTC(1971, 4, 3, 13, 17, 28), 1.0924773963165713],
[Date.UTC(1971, 4, 3, 13, 19, 06), 1.1208084332732682],
[Date.UTC(1971, 4, 3, 13, 20, 33), 1.4660802074076607],
[Date.UTC(1971, 4, 3, 13, 22, 05), 1.434080403075244],
[Date.UTC(1971, 4, 3, 13, 23, 34), 1.4033035212014155],
[Date.UTC(1971, 4, 3, 13, 25, 04), 1.4100295947234942],
[Date.UTC(1971, 4, 3, 13, 26, 34), 1.3843482230936788],
[Date.UTC(1971, 4, 3, 13, 28, 05), 1.4198129743919985],
[Date.UTC(1971, 4, 3, 13, 29, 29), 1.4006538558745119],
[Date.UTC(1971, 4, 3, 13, 31, 01), 1.3955583456304987],
[Date.UTC(1971, 4, 3, 13, 32, 29), 1.4220549988993803],
[Date.UTC(1971, 4, 3, 13, 34, 27), 1.381698557766775],
[Date.UTC(1971, 4, 3, 13, 36, 01), 1.4210358968505643],
[Date.UTC(1971, 4, 3, 13, 37, 36), 1.4338765826654942],
[Date.UTC(1971, 4, 3, 13, 39, 03), 1.4159403866065512],
[Date.UTC(1971, 4, 3, 13, 40, 33), 1.4245008438165119],
[Date.UTC(1971, 4, 3, 13, 42, 01), 1.4424370398754327],
[Date.UTC(1971, 4, 3, 13, 43, 26), 1.4477363705291957],
[Date.UTC(1971, 4, 3, 13, 45, 00), 1.4300039948800247],
[Date.UTC(1971, 4, 3, 13, 46, 30), 1.4723986401102174],
[Date.UTC(1971, 4, 3, 13, 47, 58), 1.5046022648523838],
[Date.UTC(1971, 4, 3, 13, 49, 22), 1.4874813504325068],
[Date.UTC(1971, 4, 3, 13, 50, 50), 1.4913539382179541],
[Date.UTC(1971, 4, 3, 13, 52, 19), 1.4687298727345421],
[Date.UTC(1971, 4, 3, 13, 53, 51), 1.4825896605982436],
[Date.UTC(1971, 4, 3, 13, 55, 19), 1.4813667381397],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 44, 00), 1.0555312296756103],
[Date.UTC(1971, 4, 3, 11, 45, 29), 1.0742956350338284],
[Date.UTC(1971, 4, 3, 12, 34, 27), 1.3626345688661612],
[Date.UTC(1971, 4, 3, 12, 36, 01), 1.3528645981903287],
[Date.UTC(1971, 4, 3, 12, 37, 35), 1.310531029997386],
[Date.UTC(1971, 4, 3, 12, 39, 16), 1.2292423779965977],
[Date.UTC(1971, 4, 3, 12, 40, 41), 1.2802227268059463],
[Date.UTC(1971, 4, 3, 12, 42, 11), 1.3291082370123553],
[Date.UTC(1971, 4, 3, 12, 43, 42), 1.3298570303853285],
[Date.UTC(1971, 4, 3, 12, 45, 14), 1.314533508859994],
[Date.UTC(1971, 4, 3, 12, 46, 42), 1.2469459927431314],
[Date.UTC(1971, 4, 3, 13, 17, 28), 1.6067233800390213],
[Date.UTC(1971, 4, 3, 13, 19, 06), 1.652052121723857],
[Date.UTC(1971, 4, 3, 13, 20, 33), 1.6114657380678077],
[Date.UTC(1971, 4, 3, 13, 22, 05), 1.542362806791342],
[Date.UTC(1971, 4, 3, 13, 23, 34), 1.4122867008591777],
[Date.UTC(1971, 4, 3, 13, 25, 04), 1.3584805484875728],
[Date.UTC(1971, 4, 3, 13, 26, 34), 1.323340745199153],
[Date.UTC(1971, 4, 3, 13, 28, 05), 1.370015532113955],
[Date.UTC(1971, 4, 3, 13, 29, 29), 1.3224404103102438],
[Date.UTC(1971, 4, 3, 13, 31, 01), 1.3304542822423215],
[Date.UTC(1971, 4, 3, 13, 32, 29), 1.3484788084344057],
[Date.UTC(1971, 4, 3, 13, 34, 27), 1.389501988224695],
[Date.UTC(1971, 4, 3, 13, 36, 01), 1.3937005796373914],
[Date.UTC(1971, 4, 3, 13, 37, 36), 1.373697099531035],
[Date.UTC(1971, 4, 3, 13, 39, 03), 1.3822547380792027],
[Date.UTC(1971, 4, 3, 13, 40, 33), 1.4188742996999126],
[Date.UTC(1971, 4, 3, 13, 42, 01), 1.4356508369370635],
[Date.UTC(1971, 4, 3, 13, 43, 26), 1.3957330187925887],
[Date.UTC(1971, 4, 3, 13, 45, 00), 1.4079543963441798],
[Date.UTC(1971, 4, 3, 13, 46, 30), 1.4739373552332902],
[Date.UTC(1971, 4, 3, 13, 47, 58), 1.448424895311562],
[Date.UTC(1971, 4, 3, 13, 49, 22), 1.3911154596592867],
[Date.UTC(1971, 4, 3, 13, 50, 50), 1.3380135296265472],
[Date.UTC(1971, 4, 3, 13, 52, 19), 1.3812741753288948],
[Date.UTC(1971, 4, 3, 13, 53, 51), 1.3890027926427129],
[Date.UTC(1971, 4, 3, 13, 55, 19), 1.4007873740600862],
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