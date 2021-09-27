
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
[Date.UTC(1971, 4, 3, 11, 18, 25), 0.3371244547715202],
[Date.UTC(1971, 4, 3, 11, 20, 07), 0.37034772328889964],
[Date.UTC(1971, 4, 3, 11, 21, 39), 0.5660185071949764],
[Date.UTC(1971, 4, 3, 11, 22, 55), 0.561534385063811],
[Date.UTC(1971, 4, 3, 11, 24, 15), 0.5472667237373274],
[Date.UTC(1971, 4, 3, 11, 25, 42), 0.5690758631935022],
[Date.UTC(1971, 4, 3, 11, 26, 59), 0.542578777872893],
[Date.UTC(1971, 4, 3, 11, 28, 22), 0.5493049610696632],
[Date.UTC(1971, 4, 3, 11, 29, 39), 0.5570502629326235],
[Date.UTC(1971, 4, 3, 11, 30, 59), 0.5760058701235193],
[Date.UTC(1971, 4, 3, 11, 32, 23), 0.5692796869267491],
[Date.UTC(1971, 4, 3, 11, 33, 49), 0.5766173413232156],
[Date.UTC(1971, 4, 3, 11, 35, 10), 0.5531776120011545],
[Date.UTC(1971, 4, 3, 11, 36, 29), 0.5093555093555135],
[Date.UTC(1971, 4, 3, 11, 38, 00), 0.5166931637520022],
[Date.UTC(1971, 4, 3, 11, 39, 19), 0.5413558354735004],
[Date.UTC(1971, 4, 3, 11, 40, 49), 0.4840813664342969],
[Date.UTC(1971, 4, 3, 11, 42, 08), 0.475113122171944],
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
[Date.UTC(1971, 4, 3, 11, 18, 25), 0.2800075245401601],
[Date.UTC(1971, 4, 3, 11, 20, 07), 0.24701042092316605],
[Date.UTC(1971, 4, 3, 11, 21, 39), 0.2295938116571472],
[Date.UTC(1971, 4, 3, 11, 22, 55), 0.1259151112875445],
[Date.UTC(1971, 4, 3, 11, 24, 15), 0.0893870174493605],
[Date.UTC(1971, 4, 3, 11, 25, 42), 0.0861120240192026],
[Date.UTC(1971, 4, 3, 11, 26, 59), 0.058658575049475026],
[Date.UTC(1971, 4, 3, 11, 28, 22), -0.013038181391733517],
[Date.UTC(1971, 4, 3, 11, 29, 39), 0.017725570910354094],
[Date.UTC(1971, 4, 3, 11, 30, 59), 0.08355205610883765],
[Date.UTC(1971, 4, 3, 11, 32, 23), 0.0881511708719529],
[Date.UTC(1971, 4, 3, 11, 33, 49), 0.07001070861059056],
[Date.UTC(1971, 4, 3, 11, 35, 10), 0.09513370403435584],
[Date.UTC(1971, 4, 3, 11, 36, 29), 0.11970939597381047],
[Date.UTC(1971, 4, 3, 11, 38, 00), 0.11959463879160914],
[Date.UTC(1971, 4, 3, 11, 39, 19), 0.15513405536786706],
[Date.UTC(1971, 4, 3, 11, 40, 49), 0.16148101029045403],
[Date.UTC(1971, 4, 3, 11, 42, 08), 0.06710646915366603],
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