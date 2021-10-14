
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
[Date.UTC(1971, 4, 3, 14, 58, 04), -0.4003740838557923],
[Date.UTC(1971, 4, 3, 14, 59, 34), -0.4033844153133681],
[Date.UTC(1971, 4, 3, 15, 01, 06), -0.39776512992589774],
[Date.UTC(1971, 4, 3, 15, 02, 34), -0.41843607260116933],
[Date.UTC(1971, 4, 3, 15, 04, 02), -0.4144222973244127],
[Date.UTC(1971, 4, 3, 15, 05, 33), -0.4037857928410271],
[Date.UTC(1971, 4, 3, 15, 07, 02), -0.4063947467709217],
[Date.UTC(1971, 4, 3, 15, 08, 27), -0.504130174759776],
[Date.UTC(1971, 4, 3, 15, 09, 55), -0.5015212208298814],
[Date.UTC(1971, 4, 3, 15, 11, 19), -0.49670469049778454],
[Date.UTC(1971, 4, 3, 15, 12, 47), -0.501721909593722],
[Date.UTC(1971, 4, 3, 15, 14, 14), -0.5075418837450107],
[Date.UTC(1971, 4, 3, 15, 15, 45), -0.5153687455346834],
[Date.UTC(1971, 4, 3, 15, 17, 15), -0.480850278154632],
[Date.UTC(1971, 4, 3, 15, 18, 42), -0.5137632354239807],
[Date.UTC(1971, 4, 3, 15, 20, 11), -0.504130174759776],
[Date.UTC(1971, 4, 3, 15, 21, 42), -0.46479517704762774],
[Date.UTC(1971, 4, 3, 15, 23, 11), -0.4778399466970673],
[Date.UTC(1971, 4, 3, 15, 24, 38), -0.5143653017154914],
[Date.UTC(1971, 4, 3, 15, 26, 08), -0.5203859646306208],
[Date.UTC(1971, 4, 3, 15, 27, 32), -0.5254031837265583],
[Date.UTC(1971, 4, 3, 15, 29, 04), -0.5195832095752695],
[Date.UTC(1971, 4, 3, 15, 30, 31), -0.09030994372687395],
[Date.UTC(1971, 4, 3, 15, 31, 55), -0.10415746843165374],
[Date.UTC(1971, 4, 3, 15, 33, 23), -0.09633060664200332],
[Date.UTC(1971, 4, 3, 15, 34, 55), -0.1699833829703623],
[Date.UTC(1971, 4, 3, 15, 36, 19), -0.13606698188181054],
[Date.UTC(1971, 4, 3, 15, 37, 49), -0.15633654702940092],
[Date.UTC(1971, 4, 3, 15, 39, 19), -0.4710165287265977],
[Date.UTC(1971, 4, 3, 15, 40, 49), -0.4770371916417271],
[Date.UTC(1971, 4, 3, 15, 42, 17), -0.4519510961620399],
[Date.UTC(1971, 4, 3, 15, 43, 42), -0.45435936132808274],
[Date.UTC(1971, 4, 3, 15, 45, 11), -0.47302341636495937],
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
[Date.UTC(1971, 4, 3, 14, 58, 04), -0.41212481464166784],
[Date.UTC(1971, 4, 3, 14, 59, 34), -0.41212481464166784],
[Date.UTC(1971, 4, 3, 15, 01, 06), -0.42706453748733164],
[Date.UTC(1971, 4, 3, 15, 02, 34), -0.3875513944093911],
[Date.UTC(1971, 4, 3, 15, 04, 02), -0.3997411505719528],
[Date.UTC(1971, 4, 3, 15, 05, 33), -0.40146869374467764],
[Date.UTC(1971, 4, 3, 15, 07, 02), -0.4114990209413416],
[Date.UTC(1971, 4, 3, 15, 08, 27), -0.43804677622816257],
[Date.UTC(1971, 4, 3, 15, 09, 55), -0.43037859990029403],
[Date.UTC(1971, 4, 3, 15, 11, 19), -0.43605481318206296],
[Date.UTC(1971, 4, 3, 15, 12, 47), -0.4264387437870165],
[Date.UTC(1971, 4, 3, 15, 14, 14), -0.42647399977012723],
[Date.UTC(1971, 4, 3, 15, 15, 45), -0.44238326215150225],
[Date.UTC(1971, 4, 3, 15, 17, 15), -0.5428363720465179],
[Date.UTC(1971, 4, 3, 15, 18, 42), -0.5229167415856328],
[Date.UTC(1971, 4, 3, 15, 20, 11), -0.5535101209350746],
[Date.UTC(1971, 4, 3, 15, 21, 42), -0.5489180291341378],
[Date.UTC(1971, 4, 3, 15, 23, 11), -0.5369926928449398],
[Date.UTC(1971, 4, 3, 15, 24, 38), -0.6151023234397979],
[Date.UTC(1971, 4, 3, 15, 26, 08), -0.6596570721034145],
[Date.UTC(1971, 4, 3, 15, 27, 32), -0.6396140457016197],
[Date.UTC(1971, 4, 3, 15, 29, 04), -0.6053276021207199],
[Date.UTC(1971, 4, 3, 15, 30, 31), -0.5591775202210658],
[Date.UTC(1971, 4, 3, 15, 31, 55), -0.5363933411319577],
[Date.UTC(1971, 4, 3, 15, 33, 23), -0.5433563977974898],
[Date.UTC(1971, 4, 3, 15, 34, 55), -0.5820145832848622],
[Date.UTC(1971, 4, 3, 15, 36, 19), -0.5209776625142215],
[Date.UTC(1971, 4, 3, 15, 37, 49), -0.48478739584500996],
[Date.UTC(1971, 4, 3, 15, 39, 19), -0.4739109250535334],
[Date.UTC(1971, 4, 3, 15, 40, 49), -0.4135350539663296],
[Date.UTC(1971, 4, 3, 15, 42, 17), -0.3996530106141649],
[Date.UTC(1971, 4, 3, 15, 43, 42), -0.4156944829322273],
[Date.UTC(1971, 4, 3, 15, 45, 11), -0.42064794856011556],
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