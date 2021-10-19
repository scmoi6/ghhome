
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
[Date.UTC(1971, 4, 3, 14, 37, 22), -0.34340386676724455],
[Date.UTC(1971, 4, 3, 14, 38, 54), -0.3360593910040177],
[Date.UTC(1971, 4, 3, 14, 40, 22), -0.423399102782962],
[Date.UTC(1971, 4, 3, 14, 41, 49), -0.46349597046330127],
[Date.UTC(1971, 4, 3, 14, 43, 23), -0.47222994164118903],
[Date.UTC(1971, 4, 3, 14, 44, 49), -0.4293540831315279],
[Date.UTC(1971, 4, 3, 14, 46, 15), -0.4301480805113389],
[Date.UTC(1971, 4, 3, 14, 47, 53), -0.35193933860017124],
[Date.UTC(1971, 4, 3, 14, 49, 17), -0.3422128706975225],
[Date.UTC(1971, 4, 3, 14, 50, 52), -0.2572551510580001],
[Date.UTC(1971, 4, 3, 14, 52, 14), -0.2278772480050706],
[Date.UTC(1971, 4, 3, 14, 53, 45), -0.2733335979991369],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 14, 37, 22), -3.1490756909705264],
[Date.UTC(1971, 4, 3, 14, 38, 54), -3.113315269018524],
[Date.UTC(1971, 4, 3, 14, 40, 22), -3.0776684554451594],
[Date.UTC(1971, 4, 3, 14, 41, 49), -3.0455172842913325],
[Date.UTC(1971, 4, 3, 14, 43, 23), -3.0043560948011194],
[Date.UTC(1971, 4, 3, 14, 44, 49), -3.098825831189478],
[Date.UTC(1971, 4, 3, 14, 46, 15), -3.0431315083399912],
[Date.UTC(1971, 4, 3, 14, 47, 53), -3.1156660885456655],
[Date.UTC(1971, 4, 3, 14, 49, 17), -3.2495841496386624],
[Date.UTC(1971, 4, 3, 14, 50, 52), -3.279340805735098],
[Date.UTC(1971, 4, 3, 14, 52, 14), -3.2745692538324045],
[Date.UTC(1971, 4, 3, 14, 53, 45), -3.4896473928013205],
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