
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
    pointFormat: '{point.x: %H:%M} %, {point.y:.2f} %',
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
[Date.UTC(1971, 4, 3, 12, 15, 01), 0.6515382919120238],
[Date.UTC(1971, 4, 3, 12, 16, 36), 0.6443919928782016],
[Date.UTC(1971, 4, 3, 12, 18, 25), 0.6478630524089146],
[Date.UTC(1971, 4, 3, 12, 20, 08), 0.6799193080749166],
[Date.UTC(1971, 4, 3, 12, 21, 47), 0.7750671752109195],
[Date.UTC(1971, 4, 3, 12, 23, 26), 0.7450527192688572],
[Date.UTC(1971, 4, 3, 12, 26, 07), 0.7507697584959283],
[Date.UTC(1971, 4, 3, 12, 27, 33), 0.7764964350176706],
[Date.UTC(1971, 4, 3, 12, 28, 57), 0.7648581765911766],
[Date.UTC(1971, 4, 3, 12, 30, 23), 0.8016105716222466],
[Date.UTC(1971, 4, 3, 12, 31, 46), 0.7758838951005043],
[Date.UTC(1971, 4, 3, 12, 33, 17), 0.7907890330853151],
[Date.UTC(1971, 4, 3, 12, 34, 45), 0.7787424147140287],
[Date.UTC(1971, 4, 3, 12, 36, 11), 0.802018931567039],
[Date.UTC(1971, 4, 3, 12, 37, 48), 0.8034481913738123],
[Date.UTC(1971, 4, 3, 12, 39, 18), 0.8406089463496746],
[Date.UTC(1971, 4, 3, 12, 40, 48), 0.8363211669293769],
[Date.UTC(1971, 4, 3, 12, 42, 24), 0.8371378868189616],
[Date.UTC(1971, 4, 3, 12, 44, 00), 0.8281539680335959],
[Date.UTC(1971, 4, 3, 12, 45, 35), 0.8463259855767236],
[Date.UTC(1971, 4, 3, 12, 47, 02), 0.8485719652730817],
[Date.UTC(1971, 4, 3, 12, 48, 35), 1.0637776561772672],
[Date.UTC(1971, 4, 3, 12, 50, 19), 1.202620037405766],
[Date.UTC(1971, 4, 3, 12, 51, 49), 1.1901650590896873],
[Date.UTC(1971, 4, 3, 12, 53, 14), 1.2067036368536677],
[Date.UTC(1971, 4, 3, 12, 54, 41), 1.1969029981787171],
[Date.UTC(1971, 4, 3, 12, 56, 14), 1.1797518804975482],
[Date.UTC(1971, 4, 3, 12, 57, 42), 1.2205878749765198],
[Date.UTC(1971, 4, 3, 12, 59, 13), 1.2295717937619077],
[Date.UTC(1971, 4, 3, 13, 00, 47), 1.2203836950041236],
[Date.UTC(1971, 4, 3, 13, 02, 18), 1.2481521712498278],
[Date.UTC(1971, 4, 3, 13, 03, 48), 1.224263114479629],
[Date.UTC(1971, 4, 3, 13, 05, 11), 1.232226133403036],
[Date.UTC(1971, 4, 3, 13, 06, 33), 1.2062952769088753],
[Date.UTC(1971, 4, 3, 13, 08, 03), 1.209357976494796],
[Date.UTC(1971, 4, 3, 13, 09, 29), 1.2171168154458067],
[Date.UTC(1971, 4, 3, 13, 10, 59), 1.2136457559150937],
[Date.UTC(1971, 4, 3, 13, 12, 34), 1.2040492972125394],
[Date.UTC(1971, 4, 3, 13, 14, 03), 1.2069078168260639],
[Date.UTC(1971, 4, 3, 13, 15, 31), 1.2144624758046563],
[Date.UTC(1971, 4, 3, 13, 17, 03), 1.2167084555010144],
[Date.UTC(1971, 4, 3, 13, 18, 27), 1.1891441592277063],
[Date.UTC(1971, 4, 3, 13, 19, 59), 1.216300095556222],
[Date.UTC(1971, 4, 3, 13, 21, 29), 1.2103788763567769],
[Date.UTC(1971, 4, 3, 13, 22, 56), 1.2293676137894893],
[Date.UTC(1971, 4, 3, 13, 24, 33), 1.203640937267747],
[Date.UTC(1971, 4, 3, 13, 26, 05), 1.1926152187584194],
[Date.UTC(1971, 4, 3, 13, 27, 35), 1.2073161767708562],
[Date.UTC(1971, 4, 3, 13, 29, 01), 1.2228338546728779],
[Date.UTC(1971, 4, 3, 13, 30, 25), 1.2236505745624404],
[Date.UTC(1971, 4, 3, 13, 31, 59), 1.2169126354734106],
[Date.UTC(1971, 4, 3, 13, 33, 33), 1.2062952769088753],
[Date.UTC(1971, 4, 3, 13, 35, 04), 1.2426393119951529],
[Date.UTC(1971, 4, 3, 13, 36, 44), 1.2073161767708562],
[Date.UTC(1971, 4, 3, 13, 38, 19), 1.2310010535686589],
[Date.UTC(1971, 4, 3, 13, 40, 24), 1.2144624758046563],
[Date.UTC(1971, 4, 3, 13, 42, 06), 1.1732181213809145],
[Date.UTC(1971, 4, 3, 13, 43, 55), 1.2426393119951529],
[Date.UTC(1971, 4, 3, 13, 45, 33), 1.246314551498262],
[Date.UTC(1971, 4, 3, 13, 47, 01), 1.2330428532926208],
[Date.UTC(1971, 4, 3, 13, 48, 47), 1.2536650305044805],
[Date.UTC(1971, 4, 3, 13, 50, 13), 1.2354930129613528],
[Date.UTC(1971, 4, 3, 13, 51, 48), 1.214054115859886],
[Date.UTC(1971, 4, 3, 13, 53, 21), 1.1981280780130943],
[Date.UTC(1971, 4, 3, 13, 54, 53), 1.2154833756666372],
[Date.UTC(1971, 4, 3, 13, 56, 31), 1.215075015721867],
[Date.UTC(1971, 4, 3, 13, 58, 14), 1.217320995418203],
[Date.UTC(1971, 4, 3, 13, 59, 46), 1.201190777599015],
[Date.UTC(1971, 4, 3, 14, 01, 12), 1.1844480198626384],
[Date.UTC(1971, 4, 3, 14, 02, 53), 1.1084930701317441],
[Date.UTC(1971, 4, 3, 14, 04, 23), 1.1264609077024978],
[Date.UTC(1971, 4, 3, 14, 05, 55), 1.1252358278680985],
[Date.UTC(1971, 4, 3, 14, 07, 33), 1.1119641296624572],
[Date.UTC(1971, 4, 3, 14, 09, 05), 1.0893001527266355],
[Date.UTC(1971, 4, 3, 14, 10, 47), 1.1054303705458235],
[Date.UTC(1971, 4, 3, 14, 12, 25), 1.1150268292483556],
[Date.UTC(1971, 4, 3, 14, 14, 02), 1.1191104286962794],
[Date.UTC(1971, 4, 3, 14, 15, 36), 1.0176329824160169],
[Date.UTC(1971, 4, 3, 14, 17, 09), 1.123194028144181],
[Date.UTC(1971, 4, 3, 14, 18, 57), 1.1832229400282612],
[Date.UTC(1971, 4, 3, 14, 20, 25), 0.9537246510564312],
[Date.UTC(1971, 4, 3, 14, 22, 09), 1.1203355085306343],
[Date.UTC(1971, 4, 3, 14, 23, 39), 1.0208998619743337],
[Date.UTC(1971, 4, 3, 14, 25, 09), 1.0041571042379571],
[Date.UTC(1971, 4, 3, 14, 26, 42), 0.9845558268880561],
[Date.UTC(1971, 4, 3, 14, 28, 23), 1.0149786427748886],
[Date.UTC(1971, 4, 3, 14, 30, 09), 0.9016587580957358],
[Date.UTC(1971, 4, 3, 14, 31, 53), 0.9657712694277176],
[Date.UTC(1971, 4, 3, 14, 33, 25), 0.9888436063083539],
[Date.UTC(1971, 4, 3, 14, 35, 05), 1.0043612842103533],
[Date.UTC(1971, 4, 3, 14, 36, 43), 0.9569915306147481],
[Date.UTC(1971, 4, 3, 14, 38, 18), 0.951070311415303],
[Date.UTC(1971, 4, 3, 14, 39, 54), 0.8951249989791021],
[Date.UTC(1971, 4, 3, 14, 41, 25), 0.7295350413668578],
[Date.UTC(1971, 4, 3, 14, 43, 10), 0.7472986989652153],
[Date.UTC(1971, 4, 3, 14, 44, 40), 0.7654707165083652],
[Date.UTC(1971, 4, 3, 14, 46, 13), 0.7709835757630179],
[Date.UTC(1971, 4, 3, 14, 47, 47), 0.751790658357887],
[Date.UTC(1971, 4, 3, 14, 49, 23), 0.7689417760390782],
[Date.UTC(1971, 4, 3, 14, 50, 51), 0.7426025596001251],
[Date.UTC(1971, 4, 3, 14, 52, 26), 0.7436234594621061],
[Date.UTC(1971, 4, 3, 14, 54, 02), 0.7236138221674127],
[Date.UTC(1971, 4, 3, 14, 55, 41), 0.7542408180266413],
[Date.UTC(1971, 4, 3, 14, 57, 12), 0.7038083648451154],
[Date.UTC(1971, 4, 3, 14, 58, 46), 0.7403565799037892],
[Date.UTC(1971, 4, 3, 15, 00, 12), 0.7740462753489386],
[Date.UTC(1971, 4, 3, 15, 01, 48), 0.7581202375021467],
[Date.UTC(1971, 4, 3, 15, 03, 18), 0.7775173348796516],
[Date.UTC(1971, 4, 3, 15, 04, 53), 0.7895639532509602],
[Date.UTC(1971, 4, 3, 15, 06, 28), 0.6055977981231697],
[Date.UTC(1971, 4, 3, 15, 08, 08), 0.6113148373502186],
[Date.UTC(1971, 4, 3, 15, 09, 47), 0.6668517898416271],
[Date.UTC(1971, 4, 3, 15, 11, 42), 0.8873661600280913],
[Date.UTC(1971, 4, 3, 15, 13, 11), 0.6995205854248177],
[Date.UTC(1971, 4, 3, 15, 14, 33), 0.704420904762304],
[Date.UTC(1971, 4, 3, 15, 15, 56), 0.663380730310914],
[Date.UTC(1971, 4, 3, 15, 17, 33), 0.7262681618085409],
[Date.UTC(1971, 4, 3, 15, 18, 59), 0.7613871170604636],
[Date.UTC(1971, 4, 3, 15, 20, 29), 0.8114112102971971],
[Date.UTC(1971, 4, 3, 15, 22, 01), 0.7920141129196923],
[Date.UTC(1971, 4, 3, 15, 23, 40), 0.8236620086409019],
[Date.UTC(1971, 4, 3, 15, 25, 04), 0.8063067109873367],
[Date.UTC(1971, 4, 3, 15, 26, 41), 1.0023194844864136],
[Date.UTC(1971, 4, 3, 15, 28, 16), 0.9086008771571619],
[Date.UTC(1971, 4, 3, 15, 29, 48), 0.8471427054663083],
[Date.UTC(1971, 4, 3, 15, 31, 15), 0.8152906297727025],
[Date.UTC(1971, 4, 3, 15, 32, 50), 0.8269288881992187],
[Date.UTC(1971, 4, 3, 15, 34, 13), 0.8071234308768993],
[Date.UTC(1971, 4, 3, 15, 35, 49), 0.9188098757769048],
[Date.UTC(1971, 4, 3, 15, 37, 20), 0.9002294982889847],
[Date.UTC(1971, 4, 3, 15, 39, 58), 0.8908372195588043],
[Date.UTC(1971, 4, 3, 15, 41, 37), 0.9004336782613809],
[Date.UTC(1971, 4, 3, 15, 43, 08), 0.9124802966326451],
[Date.UTC(1971, 4, 3, 15, 44, 33), 0.913501196494626],
[Date.UTC(1971, 4, 3, 15, 46, 07), 0.9702632288204116],
[Date.UTC(1971, 4, 3, 15, 47, 33), 0.9420863926299372],
[Date.UTC(1971, 4, 3, 15, 49, 06), 0.9286105144518553],
[Date.UTC(1971, 4, 3, 15, 50, 35), 0.946578352022609],
[Date.UTC(1971, 4, 3, 15, 52, 13), 0.9598500502282725],
[Date.UTC(1971, 4, 3, 15, 53, 43), 0.9310606741206096],
[Date.UTC(1971, 4, 3, 15, 55, 06), 0.946578352022609],
[Date.UTC(1971, 4, 3, 15, 56, 35), 0.9357568134856775],
[Date.UTC(1971, 4, 3, 15, 58, 13), 0.9688339690136383],
[Date.UTC(1971, 4, 3, 15, 59, 43), 0.9610751300626275],
[Date.UTC(1971, 4, 3, 16, 01, 15), 1.020083142084749],
[Date.UTC(1971, 4, 3, 16, 02, 48), 1.0208998619743337],
[Date.UTC(1971, 4, 3, 16, 04, 21), 1.008649063630629],
[Date.UTC(1971, 4, 3, 16, 07, 53), 0.9767969879370453],
[Date.UTC(1971, 4, 3, 16, 11, 32), 0.9471908919397976],
[Date.UTC(1971, 4, 3, 16, 13, 00), 1.0168162625264543],
[Date.UTC(1971, 4, 3, 16, 15, 34), 1.0168162625264543],
[Date.UTC(1971, 4, 3, 16, 17, 46), 1.0168162625264543],
[Date.UTC(1971, 4, 3, 16, 19, 18), 1.0168162625264543],
[Date.UTC(1971, 4, 3, 16, 20, 54), 0.9208516755008667],
[Date.UTC(1971, 4, 3, 16, 23, 42), 0.7842552739686814],
[Date.UTC(1971, 4, 3, 16, 25, 05), 0.7769047949624852],
[Date.UTC(1971, 4, 3, 16, 26, 35), 0.7769047949624852],
[Date.UTC(1971, 4, 3, 16, 30, 13), 0.7769047949624852],
[Date.UTC(1971, 4, 3, 16, 31, 47), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 34, 09), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 37, 07), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 39, 40), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 41, 52), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 43, 21), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 44, 47), 0.7638372767291957],
[Date.UTC(1971, 4, 3, 16, 46, 17), 0.7638372767291957],
]
 },
{ 
 name: "R1",
 data: [
[Date.UTC(1971, 4, 3, 12, 15, 01), 2.2720781266312384],
[Date.UTC(1971, 4, 3, 12, 16, 36), 2.2320236067698396],
[Date.UTC(1971, 4, 3, 12, 18, 25), 2.26562913124595],
[Date.UTC(1971, 4, 3, 12, 20, 08), 2.3121961387116308],
[Date.UTC(1971, 4, 3, 12, 21, 47), 2.267452264962455],
[Date.UTC(1971, 4, 3, 12, 23, 26), 2.193882923794921],
[Date.UTC(1971, 4, 3, 12, 26, 07), 2.1180822846459613],
[Date.UTC(1971, 4, 3, 12, 27, 33), 2.0998872287487647],
[Date.UTC(1971, 4, 3, 12, 28, 57), 2.1339916206597476],
[Date.UTC(1971, 4, 3, 12, 30, 23), 2.1045221607345344],
[Date.UTC(1971, 4, 3, 12, 31, 46), 2.1380279117236833],
[Date.UTC(1971, 4, 3, 12, 33, 17), 2.174953172220917],
[Date.UTC(1971, 4, 3, 12, 34, 45), 2.2094203768118215],
[Date.UTC(1971, 4, 3, 12, 36, 11), 2.2059283047677347],
[Date.UTC(1971, 4, 3, 12, 37, 48), 2.257012330098229],
[Date.UTC(1971, 4, 3, 12, 39, 18), 2.2758332378682633],
[Date.UTC(1971, 4, 3, 12, 40, 48), 2.265057701275097],
[Date.UTC(1971, 4, 3, 12, 42, 24), 2.2890849710017536],
[Date.UTC(1971, 4, 3, 12, 44, 00), 2.304676845920617],
[Date.UTC(1971, 4, 3, 12, 45, 35), 2.312069154273666],
[Date.UTC(1971, 4, 3, 12, 47, 02), 2.284323054578019],
[Date.UTC(1971, 4, 3, 12, 48, 35), 2.259887620586465],
[Date.UTC(1971, 4, 3, 12, 50, 19), 2.277139363515901],
[Date.UTC(1971, 4, 3, 12, 51, 49), 2.331878726596437],
[Date.UTC(1971, 4, 3, 12, 53, 14), 2.30622787012722],
[Date.UTC(1971, 4, 3, 12, 54, 41), 2.3074160816539013],
[Date.UTC(1971, 4, 3, 12, 56, 14), 2.1422818903955587],
[Date.UTC(1971, 4, 3, 12, 57, 42), 2.171225271934918],
[Date.UTC(1971, 4, 3, 12, 59, 13), 2.1779373065131225],
[Date.UTC(1971, 4, 3, 13, 00, 47), 2.177102837349354],
[Date.UTC(1971, 4, 3, 13, 02, 18), 2.2140643791145775],
[Date.UTC(1971, 4, 3, 13, 03, 48), 2.2210394528857424],
[Date.UTC(1971, 4, 3, 13, 05, 11), 2.220023577382002],
[Date.UTC(1971, 4, 3, 13, 06, 33), 2.1827445745218554],
[Date.UTC(1971, 4, 3, 13, 08, 03), 2.199443028114456],
[Date.UTC(1971, 4, 3, 13, 09, 29), 2.1855291618401163],
[Date.UTC(1971, 4, 3, 13, 10, 59), 2.1596968990309495],
[Date.UTC(1971, 4, 3, 13, 12, 34), 2.200903349151062],
[Date.UTC(1971, 4, 3, 13, 14, 03), 2.1838874344635606],
[Date.UTC(1971, 4, 3, 13, 15, 31), 2.194164103621832],
[Date.UTC(1971, 4, 3, 13, 17, 03), 2.1816017145801725],
[Date.UTC(1971, 4, 3, 13, 18, 27), 2.136059652935196],
[Date.UTC(1971, 4, 3, 13, 19, 59), 2.046571905436867],
[Date.UTC(1971, 4, 3, 13, 21, 29), 2.0517419861254993],
[Date.UTC(1971, 4, 3, 13, 22, 56), 2.069701213780739],
[Date.UTC(1971, 4, 3, 13, 24, 33), 2.0804858206908916],
[Date.UTC(1971, 4, 3, 13, 26, 05), 2.2015836229258845],
[Date.UTC(1971, 4, 3, 13, 27, 35), 2.1889396010312145],
[Date.UTC(1971, 4, 3, 13, 29, 01), 2.178880619480883],
[Date.UTC(1971, 4, 3, 13, 30, 25), 2.127134461009561],
[Date.UTC(1971, 4, 3, 13, 31, 59), 2.1228804823376857],
[Date.UTC(1971, 4, 3, 13, 33, 33), 2.1490846281437603],
[Date.UTC(1971, 4, 3, 13, 35, 04), 2.174055210838155],
[Date.UTC(1971, 4, 3, 13, 36, 44), 2.233737896682375],
[Date.UTC(1971, 4, 3, 13, 38, 19), 2.196168643678309],
[Date.UTC(1971, 4, 3, 13, 40, 24), 2.2272889012970865],
[Date.UTC(1971, 4, 3, 13, 42, 06), 2.2410395018654494],
[Date.UTC(1971, 4, 3, 13, 43, 55), 2.2724862908961363],
[Date.UTC(1971, 4, 3, 13, 45, 33), 2.25867219810878],
[Date.UTC(1971, 4, 3, 13, 47, 01), 2.2901008465054717],
[Date.UTC(1971, 4, 3, 13, 48, 47), 2.1888126165932498],
[Date.UTC(1971, 4, 3, 13, 50, 13), 2.1396968500512425],
[Date.UTC(1971, 4, 3, 13, 51, 48), 2.142608421807468],
[Date.UTC(1971, 4, 3, 13, 53, 21), 2.1132659463202197],
[Date.UTC(1971, 4, 3, 13, 54, 53), 2.1315789163383947],
[Date.UTC(1971, 4, 3, 13, 56, 31), 2.206572297274567],
[Date.UTC(1971, 4, 3, 13, 58, 14), 2.2913888315191366],
[Date.UTC(1971, 4, 3, 13, 59, 46), 2.2650214200071073],
[Date.UTC(1971, 4, 3, 14, 01, 12), 2.296450068403799],
[Date.UTC(1971, 4, 3, 14, 02, 53), 2.287352540455201],
[Date.UTC(1971, 4, 3, 14, 04, 23), 2.4104911640146387],
[Date.UTC(1971, 4, 3, 14, 05, 55), 2.295923990017945],
[Date.UTC(1971, 4, 3, 14, 07, 33), 2.3723595513567286],
[Date.UTC(1971, 4, 3, 14, 09, 05), 2.3600420608739903],
[Date.UTC(1971, 4, 3, 14, 10, 47), 2.3524683461809914],
[Date.UTC(1971, 4, 3, 14, 12, 25), 2.3914797795876686],
[Date.UTC(1971, 4, 3, 14, 14, 02), 2.3339286182378904],
[Date.UTC(1971, 4, 3, 14, 15, 36), 2.314291381938083],
[Date.UTC(1971, 4, 3, 14, 17, 09), 2.5561332440451334],
[Date.UTC(1971, 4, 3, 14, 18, 57), 2.415008181879452],
[Date.UTC(1971, 4, 3, 14, 20, 25), 2.5833169840869585],
[Date.UTC(1971, 4, 3, 14, 22, 09), 2.5608860901518815],
[Date.UTC(1971, 4, 3, 14, 23, 39), 2.474609234870684],
[Date.UTC(1971, 4, 3, 14, 25, 09), 2.5024823190043177],
[Date.UTC(1971, 4, 3, 14, 26, 42), 2.3903913415479483],
[Date.UTC(1971, 4, 3, 14, 28, 23), 2.5151626221669776],
[Date.UTC(1971, 4, 3, 14, 30, 09), 2.5976480849431605],
[Date.UTC(1971, 4, 3, 14, 31, 53), 2.581176389275508],
[Date.UTC(1971, 4, 3, 14, 33, 25), 2.7434806416305912],
[Date.UTC(1971, 4, 3, 14, 35, 05), 2.785947865813365],
[Date.UTC(1971, 4, 3, 14, 36, 43), 2.615453117209454],
[Date.UTC(1971, 4, 3, 14, 38, 18), 2.6069814411336933],
[Date.UTC(1971, 4, 3, 14, 39, 54), 2.565194490725742],
[Date.UTC(1971, 4, 3, 14, 41, 25), 2.548341841744195],
[Date.UTC(1971, 4, 3, 14, 43, 10), 2.589575502815289],
[Date.UTC(1971, 4, 3, 14, 44, 40), 2.616006406546312],
[Date.UTC(1971, 4, 3, 14, 46, 13), 2.6864646289836758],
[Date.UTC(1971, 4, 3, 14, 47, 47), 2.584468914345628],
[Date.UTC(1971, 4, 3, 14, 49, 23), 2.6096753252819793],
[Date.UTC(1971, 4, 3, 14, 50, 51), 2.681249196710067],
[Date.UTC(1971, 4, 3, 14, 52, 26), 2.6566051454275597],
[Date.UTC(1971, 4, 3, 14, 54, 02), 2.4341556210613735],
[Date.UTC(1971, 4, 3, 14, 55, 41), 2.4337565271135064],
[Date.UTC(1971, 4, 3, 14, 57, 12), 2.1827445745218554],
[Date.UTC(1971, 4, 3, 14, 58, 46), 2.2309986609490906],
[Date.UTC(1971, 4, 3, 15, 00, 12), 2.253284429812208],
[Date.UTC(1971, 4, 3, 15, 01, 48), 2.1793976275497506],
[Date.UTC(1971, 4, 3, 15, 03, 18), 2.1674973716488966],
[Date.UTC(1971, 4, 3, 15, 04, 53), 2.0830436500842264],
[Date.UTC(1971, 4, 3, 15, 06, 28), 2.0520685175374087],
[Date.UTC(1971, 4, 3, 15, 08, 08), 1.6623532774184602],
[Date.UTC(1971, 4, 3, 15, 09, 47), 2.057501637418979],
[Date.UTC(1971, 4, 3, 15, 11, 42), 2.0053291740487644],
[Date.UTC(1971, 4, 3, 15, 13, 11), 2.026308817264222],
[Date.UTC(1971, 4, 3, 15, 14, 33), 1.9712247821377815],
[Date.UTC(1971, 4, 3, 15, 15, 56), 1.9977645296727742],
[Date.UTC(1971, 4, 3, 15, 17, 33), 2.0433610132197133],
[Date.UTC(1971, 4, 3, 15, 18, 59), 2.039088893913843],
[Date.UTC(1971, 4, 3, 15, 20, 29), 2.041429035699216],
[Date.UTC(1971, 4, 3, 15, 22, 01), 1.9997872103632242],
[Date.UTC(1971, 4, 3, 15, 23, 40), 2.083950681783975],
[Date.UTC(1971, 4, 3, 15, 25, 04), 2.1299462592788254],
[Date.UTC(1971, 4, 3, 15, 26, 41), 2.2702096413297346],
[Date.UTC(1971, 4, 3, 15, 28, 16), 2.2416653537382647],
[Date.UTC(1971, 4, 3, 15, 29, 48), 2.199252551457498],
[Date.UTC(1971, 4, 3, 15, 31, 15), 2.142027921519629],
[Date.UTC(1971, 4, 3, 15, 32, 50), 2.209955525514662],
[Date.UTC(1971, 4, 3, 15, 34, 13), 2.26870396870813],
[Date.UTC(1971, 4, 3, 15, 35, 49), 2.288214220569973],
[Date.UTC(1971, 4, 3, 15, 37, 20), 2.4135297202088513],
[Date.UTC(1971, 4, 3, 15, 39, 58), 2.392495655091409],
[Date.UTC(1971, 4, 3, 15, 41, 37), 2.2093115330078295],
[Date.UTC(1971, 4, 3, 15, 43, 08), 2.193755939356956],
[Date.UTC(1971, 4, 3, 15, 44, 33), 2.2580100649679524],
[Date.UTC(1971, 4, 3, 15, 46, 07), 2.2831801946362917],
[Date.UTC(1971, 4, 3, 15, 47, 33), 2.141256944574832],
[Date.UTC(1971, 4, 3, 15, 49, 06), 2.137592536507804],
[Date.UTC(1971, 4, 3, 15, 50, 35), 2.11884419127375],
[Date.UTC(1971, 4, 3, 15, 52, 13), 2.1396787094172476],
[Date.UTC(1971, 4, 3, 15, 53, 43), 2.1716878581017784],
[Date.UTC(1971, 4, 3, 15, 55, 06), 2.2041142413682158],
[Date.UTC(1971, 4, 3, 15, 56, 35), 2.2228988678702377],
[Date.UTC(1971, 4, 3, 15, 58, 13), 2.210853486897424],
[Date.UTC(1971, 4, 3, 15, 59, 43), 2.06919327602888],
[Date.UTC(1971, 4, 3, 16, 01, 15), 2.1213475987651],
[Date.UTC(1971, 4, 3, 16, 02, 48), 2.108032373412616],
[Date.UTC(1971, 4, 3, 16, 04, 21), 2.120513129601309],
[Date.UTC(1971, 4, 3, 16, 07, 53), 2.0270344426240428],
[Date.UTC(1971, 4, 3, 16, 11, 32), 2.0229709406091034],
[Date.UTC(1971, 4, 3, 16, 13, 00), 2.064984648942003],
[Date.UTC(1971, 4, 3, 16, 15, 34), 2.064984648942003],
[Date.UTC(1971, 4, 3, 16, 17, 46), 2.064984648942003],
[Date.UTC(1971, 4, 3, 16, 19, 18), 2.064984648942003],
[Date.UTC(1971, 4, 3, 16, 20, 54), 2.064984648942003],
[Date.UTC(1971, 4, 3, 16, 23, 42), 2.064984648942003],
[Date.UTC(1971, 4, 3, 16, 25, 05), 1.8678050277311398],
[Date.UTC(1971, 4, 3, 16, 26, 35), 1.8668072928613944],
[Date.UTC(1971, 4, 3, 16, 30, 13), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 31, 47), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 34, 09), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 37, 07), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 39, 40), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 41, 52), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 43, 21), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 44, 47), 1.8435872813475473],
[Date.UTC(1971, 4, 3, 16, 46, 17), 1.8435872813475473],
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