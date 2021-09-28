
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
[Date.UTC(1971, 4, 3, 10, 09, 39), -0.5550860087294773],
[Date.UTC(1971, 4, 3, 10, 11, 10), -0.6232723739062584],
[Date.UTC(1971, 4, 3, 10, 12, 47), -0.6002033341907631],
[Date.UTC(1971, 4, 3, 10, 14, 05), -0.5822380643238367],
[Date.UTC(1971, 4, 3, 10, 15, 29), -0.617964453263764],
[Date.UTC(1971, 4, 3, 10, 16, 41), -0.6459331120338807],
[Date.UTC(1971, 4, 3, 10, 18, 10), -0.46464720701299145],
[Date.UTC(1971, 4, 3, 10, 19, 27), -0.430962326012474],
[Date.UTC(1971, 4, 3, 10, 20, 40), -0.44770269111577],
[Date.UTC(1971, 4, 3, 10, 22, 01), -0.4534189133461597],
[Date.UTC(1971, 4, 3, 10, 23, 15), -0.5005777467468664],
[Date.UTC(1971, 4, 3, 10, 24, 31), -1.1922406366238314],
[Date.UTC(1971, 4, 3, 10, 25, 46), -1.2832918907221602],
[Date.UTC(1971, 4, 3, 10, 27, 09), -1.4266057480697536],
[Date.UTC(1971, 4, 3, 10, 28, 40), -1.3857755892812684],
[Date.UTC(1971, 4, 3, 10, 30, 05), -1.4529412004883335],
[Date.UTC(1971, 4, 3, 10, 31, 23), -1.4433461131730274],
[Date.UTC(1971, 4, 3, 10, 32, 41), -1.444571017936691],
[Date.UTC(1971, 4, 3, 10, 34, 05), -1.4802974068766184],
[Date.UTC(1971, 4, 3, 10, 35, 18), -1.5054079545315346],
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
[Date.UTC(1971, 4, 3, 10, 09, 39), -1.0977786202355455],
[Date.UTC(1971, 4, 3, 10, 11, 10), -1.1640825507265529],
[Date.UTC(1971, 4, 3, 10, 12, 47), -1.0602465985009468],
[Date.UTC(1971, 4, 3, 10, 14, 05), -0.8963136300050523],
[Date.UTC(1971, 4, 3, 10, 15, 29), -0.9482844309197325],
[Date.UTC(1971, 4, 3, 10, 16, 41), -0.9036386691988585],
[Date.UTC(1971, 4, 3, 10, 18, 10), -1.1170684770548056],
[Date.UTC(1971, 4, 3, 10, 19, 27), -1.2249895472923322],
[Date.UTC(1971, 4, 3, 10, 20, 40), -1.1546621277249147],
[Date.UTC(1971, 4, 3, 10, 22, 01), -1.1123758738212697],
[Date.UTC(1971, 4, 3, 10, 23, 15), -1.1333649284342773],
[Date.UTC(1971, 4, 3, 10, 24, 31), -1.2340578049481077],
[Date.UTC(1971, 4, 3, 10, 25, 46), -1.3008371586560319],
[Date.UTC(1971, 4, 3, 10, 27, 09), -1.3753729541064352],
[Date.UTC(1971, 4, 3, 10, 28, 40), -1.4330048129557404],
[Date.UTC(1971, 4, 3, 10, 30, 05), -1.4504458017092547],
[Date.UTC(1971, 4, 3, 10, 31, 23), -1.5371753222599094],
[Date.UTC(1971, 4, 3, 10, 32, 41), -1.5663170046294805],
[Date.UTC(1971, 4, 3, 10, 34, 05), -1.6734016821705944],
[Date.UTC(1971, 4, 3, 10, 35, 18), -1.6544111658953309],
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