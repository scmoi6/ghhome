
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
[Date.UTC(1971, 4, 3, 09, 59, 55), -0.2582507543371748],
[Date.UTC(1971, 4, 3, 10, 01, 30), -0.25702584957353336],
[Date.UTC(1971, 4, 3, 10, 02, 49), -0.3333782465079982],
[Date.UTC(1971, 4, 3, 10, 04, 02), -0.27703262737988066],
[Date.UTC(1971, 4, 3, 10, 05, 18), -0.350118611611272],
[Date.UTC(1971, 4, 3, 10, 06, 57), -0.6120440802394156],
[Date.UTC(1971, 4, 3, 10, 08, 21), -0.5999991833968266],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 09, 59, 55), -0.6167823867319622],
[Date.UTC(1971, 4, 3, 10, 01, 30), -0.6520693543867195],
[Date.UTC(1971, 4, 3, 10, 02, 49), -0.9348053023070957],
[Date.UTC(1971, 4, 3, 10, 04, 02), -1.011894296514937],
[Date.UTC(1971, 4, 3, 10, 05, 18), -0.9718178801565558],
[Date.UTC(1971, 4, 3, 10, 06, 57), -0.9319263506047171],
[Date.UTC(1971, 4, 3, 10, 08, 21), -1.109083127837518],
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