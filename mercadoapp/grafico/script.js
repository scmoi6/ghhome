
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
[Date.UTC(1971, 4, 3, 11, 14, 24), 0.41756894790601073],
[Date.UTC(1971, 4, 3, 11, 15, 58), 0.4451481103166399],
[Date.UTC(1971, 4, 3, 11, 17, 45), 0.45495403472932683],
[Date.UTC(1971, 4, 3, 11, 19, 17), 0.4547497446373949],
[Date.UTC(1971, 4, 3, 11, 20, 41), 0.4717058222676318],
[Date.UTC(1971, 4, 3, 11, 22, 04), 0.4821246169560922],
[Date.UTC(1971, 4, 3, 11, 23, 36), 0.5195097037793639],
[Date.UTC(1971, 4, 3, 11, 25, 03), 0.43922369765065916],
[Date.UTC(1971, 4, 3, 11, 26, 33), 0.4416751787538198],
[Date.UTC(1971, 4, 3, 13, 04, 59), 0.5303370786516881],
[Date.UTC(1971, 4, 3, 13, 06, 33), 0.5336057201225763],
[Date.UTC(1971, 4, 3, 13, 08, 06), 0.5262512768130723],
[Date.UTC(1971, 4, 3, 13, 09, 42), 0.5946884576097933],
[Date.UTC(1971, 4, 3, 13, 11, 18), 0.6817160367722064],
[Date.UTC(1971, 4, 3, 13, 12, 52), 0.6925434116445306],
[Date.UTC(1971, 4, 3, 13, 14, 24), 0.7007150153217623],
[Date.UTC(1971, 4, 3, 13, 15, 54), 0.8257405515832428],
[Date.UTC(1971, 4, 3, 13, 17, 30), 0.8300306435137905],
[Date.UTC(1971, 4, 3, 13, 19, 10), 0.81613891726251],
[Date.UTC(1971, 4, 3, 13, 20, 52), 0.826966292134812],
[Date.UTC(1971, 4, 3, 13, 22, 25), 0.8426966292134797],
[Date.UTC(1971, 4, 3, 13, 24, 05), 0.8484167517875285],
[Date.UTC(1971, 4, 3, 13, 25, 44), 0.8516853932584167],
[Date.UTC(1971, 4, 3, 13, 27, 17), 0.8762002042900896],
]
 },
{ 
 name: "R2",
 data: [
[Date.UTC(1971, 4, 3, 11, 14, 24), 2.564578353586011],
[Date.UTC(1971, 4, 3, 11, 15, 58), 2.563258107329336],
[Date.UTC(1971, 4, 3, 11, 17, 45), 2.5954684988791055],
[Date.UTC(1971, 4, 3, 11, 19, 17), 2.4731467789201655],
[Date.UTC(1971, 4, 3, 11, 20, 41), 2.4721339872711967],
[Date.UTC(1971, 4, 3, 11, 22, 04), 2.5085311871554827],
[Date.UTC(1971, 4, 3, 11, 23, 36), 2.5456518096461656],
[Date.UTC(1971, 4, 3, 11, 25, 03), 2.5336249088148577],
[Date.UTC(1971, 4, 3, 11, 26, 33), 2.445530120920991],
[Date.UTC(1971, 4, 3, 13, 04, 59), 2.8165916613065667],
[Date.UTC(1971, 4, 3, 13, 06, 33), 2.8029822735237353],
[Date.UTC(1971, 4, 3, 13, 08, 06), 2.8310601134344804],
[Date.UTC(1971, 4, 3, 13, 09, 42), 2.793496394597361],
[Date.UTC(1971, 4, 3, 13, 11, 18), 2.798135342060881],
[Date.UTC(1971, 4, 3, 13, 12, 52), 2.795467721199807],
[Date.UTC(1971, 4, 3, 13, 14, 24), 2.790268121216344],
[Date.UTC(1971, 4, 3, 13, 15, 54), 2.821474763899734],
[Date.UTC(1971, 4, 3, 13, 17, 30), 2.82472112284593],
[Date.UTC(1971, 4, 3, 13, 19, 10), 2.808634012636202],
[Date.UTC(1971, 4, 3, 13, 20, 52), 2.7373135864281695],
[Date.UTC(1971, 4, 3, 13, 22, 25), 2.7325661255736877],
[Date.UTC(1971, 4, 3, 13, 24, 05), 2.802484920481829],
[Date.UTC(1971, 4, 3, 13, 25, 44), 2.7730687487492744],
[Date.UTC(1971, 4, 3, 13, 27, 17), 2.791995292689098],
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