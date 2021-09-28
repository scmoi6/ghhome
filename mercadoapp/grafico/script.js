
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
[Date.UTC(1971, 4, 3, 12, 55, 56), -1.5793105419386944],
[Date.UTC(1971, 4, 3, 12, 57, 15), -1.5740026212962],
[Date.UTC(1971, 4, 3, 12, 58, 33), -1.581556200672074],
[Date.UTC(1971, 4, 3, 12, 59, 51), -1.589109780047937],
[Date.UTC(1971, 4, 3, 13, 01, 09), -1.578493938762926],
[Date.UTC(1971, 4, 3, 13, 02, 33), -1.6185074943756428],
[Date.UTC(1971, 4, 3, 13, 04, 02), -1.6119746689694847],
[Date.UTC(1971, 4, 3, 13, 05, 22), -1.616874288024106],
[Date.UTC(1971, 4, 3, 13, 06, 45), -1.6166701372301584],
[Date.UTC(1971, 4, 3, 13, 08, 01), -1.5940093991025472],
[Date.UTC(1971, 4, 3, 13, 09, 17), -1.557262256192904],
[Date.UTC(1971, 4, 3, 13, 10, 30), -1.564815835568778],
[Date.UTC(1971, 4, 3, 13, 11, 58), -1.5578747085747469],
[Date.UTC(1971, 4, 3, 13, 13, 21), -1.5921720419570629],
[Date.UTC(1971, 4, 3, 13, 14, 47), -1.6160576848483377],
[Date.UTC(1971, 4, 3, 13, 16, 04), -1.5660407403324417],
[Date.UTC(1971, 4, 3, 13, 17, 23), -1.5954384546601474],
[Date.UTC(1971, 4, 3, 13, 19, 04), -1.612791272145253],
[Date.UTC(1971, 4, 3, 13, 20, 17), -1.6248361689878643],
[Date.UTC(1971, 4, 3, 13, 21, 41), -1.6474969071154644],
[Date.UTC(1971, 4, 3, 13, 23, 03), -1.5848226133751475],
[Date.UTC(1971, 4, 3, 13, 24, 30), -1.6005422245087053],
[Date.UTC(1971, 4, 3, 13, 25, 53), -1.6285108832788109],
[Date.UTC(1971, 4, 3, 13, 27, 06), -1.621978057872664],
[Date.UTC(1971, 4, 3, 13, 28, 32), -1.6062584467391061],
[Date.UTC(1971, 4, 3, 13, 29, 59), -1.5966633594238],
[Date.UTC(1971, 4, 3, 13, 31, 17), -1.5670614943021577],
[Date.UTC(1971, 4, 3, 13, 32, 44), -1.563386780011189],
[Date.UTC(1971, 4, 3, 13, 34, 05), -1.5735943197083047],
[Date.UTC(1971, 4, 3, 13, 35, 25), -1.6009505260966006],
[Date.UTC(1971, 4, 3, 13, 36, 42), -1.3831216289600157],
[Date.UTC(1971, 4, 3, 13, 38, 09), -1.3629107003597207],
[Date.UTC(1971, 4, 3, 13, 39, 49), -1.35719447812932],
[Date.UTC(1971, 4, 3, 13, 41, 05), -1.3114647002862134],
[Date.UTC(1971, 4, 3, 13, 42, 23), -1.3420873193775829],
[Date.UTC(1971, 4, 3, 13, 43, 36), -1.3298382717410462],
[Date.UTC(1971, 4, 3, 13, 44, 52), -1.3333088352380673],
[Date.UTC(1971, 4, 3, 13, 47, 11), -1.6525826189398796],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 12, 55, 56), -2.1647427727086943],
[Date.UTC(1971, 4, 3, 12, 57, 15), -2.250072436009576],
[Date.UTC(1971, 4, 3, 12, 58, 33), -2.237482524895229],
[Date.UTC(1971, 4, 3, 12, 59, 51), -2.234999759206946],
[Date.UTC(1971, 4, 3, 13, 01, 09), -2.395736827189199],
[Date.UTC(1971, 4, 3, 13, 02, 33), -2.2714224601020905],
[Date.UTC(1971, 4, 3, 13, 04, 02), -2.2969456435429914],
[Date.UTC(1971, 4, 3, 13, 05, 22), -2.3639362964584243],
[Date.UTC(1971, 4, 3, 13, 06, 45), -2.3366875028228318],
[Date.UTC(1971, 4, 3, 13, 08, 01), -2.300115131655689],
[Date.UTC(1971, 4, 3, 13, 09, 17), -2.3643324824725087],
[Date.UTC(1971, 4, 3, 13, 10, 30), -2.3597015081745054],
[Date.UTC(1971, 4, 3, 13, 11, 58), -2.3320389202575287],
[Date.UTC(1971, 4, 3, 13, 13, 21), -2.2742838035371693],
[Date.UTC(1971, 4, 3, 13, 14, 47), -2.4907246251001713],
[Date.UTC(1971, 4, 3, 13, 16, 04), -2.4595139713237013],
[Date.UTC(1971, 4, 3, 13, 17, 23), -2.3943369699394257],
[Date.UTC(1971, 4, 3, 13, 19, 04), -2.448042185182453],
[Date.UTC(1971, 4, 3, 13, 20, 17), -2.3983252424812473],
[Date.UTC(1971, 4, 3, 13, 21, 41), -2.5551444709908666],
[Date.UTC(1971, 4, 3, 13, 23, 03), -2.407199809196814],
[Date.UTC(1971, 4, 3, 13, 24, 30), -2.4334801481313173],
[Date.UTC(1971, 4, 3, 13, 25, 53), -2.479640220839363],
[Date.UTC(1971, 4, 3, 13, 27, 06), -2.4916226467321057],
[Date.UTC(1971, 4, 3, 13, 28, 32), -2.6161923336949777],
[Date.UTC(1971, 4, 3, 13, 29, 59), -2.554959584184291],
[Date.UTC(1971, 4, 3, 13, 31, 17), -2.5087642949416455],
[Date.UTC(1971, 4, 3, 13, 32, 44), -2.5081392014527637],
[Date.UTC(1971, 4, 3, 13, 34, 05), -2.4431118703404753],
[Date.UTC(1971, 4, 3, 13, 35, 25), -2.4944135570980186],
[Date.UTC(1971, 4, 3, 13, 36, 42), -2.5903698097101024],
[Date.UTC(1971, 4, 3, 13, 38, 09), -2.536180367116525],
[Date.UTC(1971, 4, 3, 13, 39, 49), -2.5425721681438085],
[Date.UTC(1971, 4, 3, 13, 41, 05), -2.465764906212653],
[Date.UTC(1971, 4, 3, 13, 42, 23), -2.4037926094756634],
[Date.UTC(1971, 4, 3, 13, 43, 36), -2.4498822491145433],
[Date.UTC(1971, 4, 3, 13, 44, 52), -2.4308917328392687],
[Date.UTC(1971, 4, 3, 13, 47, 11), -2.438533720844338],
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