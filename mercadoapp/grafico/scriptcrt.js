
Highcharts.chart('container', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Fronteiras de eficiência'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    title: {
      text: 'Risco (%)'
    }
  },
  yAxis: {
    title: {
      text: 'Retorno médio (%)'
    },
    //min: -2.2761161633080285,
    //max: 0.5,
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: 'Risco: {point.x:.2f}%, Retorno: {point.y:.2f} %',
  },

  plotOptions: {
    series: {
      lineWidth: 1,
      marker: {
        enabled: false
      }
    }
  },

  colors: ['#f6998b','#f5c891','#6fa0c6','#76bd92','#01a189','#39342d','#307981','#6ea993','#adcc97','#3b6e96'],

  series: [
  { 
 name: "Carteira 4465",
 data: [
[0.5679340259525515,0.2636363636363636],
[0.5688626002995153,0.2681818181818182],
[0.5706648515414114,0.2727272727272727],
[0.5733325407433373,0.2772727272727273],
[0.5768536611523045,0.2818181818181818],
[0.5812127021407573,0.2863636363636364],
[0.5863909775748105,0.2909090909090909],
[0.5923670033379482,0.29545454545454547],
[0.5991169078659615,0.3],
[0.6066148584208497,0.3045454545454545],
[0.614835112497642,0.3090909090909091],
[0.6237450008564331,0.3136363636363636],
[0.6333184496397244,0.3181818181818182],
[0.643525450614518,0.3227272727272727],
[0.65433638285584,0.32727272727272727],
[0.6657218136633818,0.3318181818181818],
[0.6776527879682048,0.33636363636363636],
[0.6901009998519824,0.3409090909090909],
[0.7030389574513306,0.3454545454545454],
[0.7164401067303534,0.35],
[0.7302789223292705,0.3545454545454545],
[0.7445271815892281,0.35909090909090907],
[0.7591684462226361,0.3636363636363636],
[0.7741775311587081,0.36818181818181817],
[0.7895334598136464,0.3727272727272727],
[0.8052163889180397,0.37727272727272726],
[0.8212075841051408,0.3818181818181818],
[0.8374937781916977,0.38636363636363635],
[0.8540510611626578,0.3909090909090909],
[0.8708607904587976,0.39545454545454545],
[0.8879187977384995,0.39999999999999997],
[0.9052111073426232,0.40454545454545454],
[0.9227145544809902,0.40909090909090906],
[0.9404192392129257,0.41363636363636364],
[0.9583223478953968,0.41818181818181815],
[0.9764083240411013,0.4227272727272727],
[0.9946671920901408,0.42727272727272725],
[1.0130896037296773,0.43181818181818177],
[1.0316667978625764,0.43636363636363634],
[1.0503916427542717,0.44090909090909086],
[1.0693188801450486,0.44545454545454544],
[1.0884744197844247,0.44999999999999996],
[1.1078443005764032,0.45454545454545453],
[1.1274196275628767,0.45909090909090905],
[1.147190472315892,0.4636363636363636],
[1.1672381757545542,0.46818181818181814],
[1.187605305427424,0.4727272727272727],
[1.2082758780723335,0.47727272727272724],
[1.2292345494109453,0.4818181818181818],
[1.2504668960167717,0.48636363636363633],
[1.2719591874133551,0.49090909090909085],
[1.29369844059959,0.4954545454545454],
[1.3156724142306162,0.5],
]
 },
{ 
 name: "Carteira 5184",
 data: [
[0.514043034289764,0.23636363636363633],
[0.5156026797931244,0.2409090909090909],
[0.5193181517516781,0.24545454545454543],
[0.5251436945794146,0.25],
[0.5330101267364687,0.2545454545454545],
[0.542828727899064,0.2590909090909091],
[0.5544958055956631,0.2636363636363636],
[0.5678974442277038,0.2681818181818182],
[0.5829140236033795,0.2727272727272727],
[0.599424173454283,0.2772727272727273],
[0.6175871369302065,0.2818181818181818],
[0.6379944615755162,0.2863636363636364],
[0.6605133479607583,0.2909090909090909],
[0.6849381809835815,0.29545454545454547],
[0.7110662531626937,0.3],
[0.7387219956609767,0.3045454545454545],
[0.7677388183555363,0.3090909090909091],
[0.797967721838481,0.3136363636363636],
[0.829276405477513,0.3181818181818182],
[0.8615478059634536,0.3227272727272727],
[0.8946780361919556,0.32727272727272727],
[0.9285749907910461,0.3318181818181818],
[0.963170274069774,0.33636363636363636],
[0.999813739921203,0.3409090909090909],
[1.0392065125115117,0.3454545454545454],
[1.0810479259493024,0.35],
[1.12506455503676,0.3545454545454545],
[1.171011442566256,0.35909090909090907],
[1.2193933475008998,0.3636363636363636],
[1.2713446488617763,0.36818181818181817],
[1.3267341051288228,0.3727272727272727],
[1.385148660490408,0.37727272727272726],
[1.44622243405982,0.3818181818181818],
[1.5105768785016278,0.38636363636363635],
[1.5796232069430225,0.3909090909090909],
[1.6528221834644732,0.39545454545454545],
[1.7296466658198297,0.39999999999999997],
[1.8096349718109206,0.40454545454545454],
[1.8923859537659435,0.40909090909090906],
[1.9775528283740622,0.41363636363636364],
[2.064836677366985,0.41818181818181815],
[2.1539801632279927,0.4227272727272727],
[2.2484284783657293,0.42727272727272725],
[2.3567418846667536,0.43181818181818177],
[2.4775627671669893,0.43636363636363634],
[2.609154170464946,0.44090909090909086],
[2.749970358194805,0.44545454545454544],
[2.8986672320807156,0.44999999999999996],
[3.0540939310079875,0.45454545454545453],
[3.2152746417987523,0.45909090909090905],
[3.381386634305719,0.4636363636363636],
[3.5517380794227456,0.46818181818181814],
[3.7257475041493007,0.4727272727272727],
[3.902925673161204,0.47727272727272724],
[4.0828821805352575,0.4818181818181818],
[4.266885392359354,0.48636363636363633],
[4.45540416154854,0.49090909090909085],
[4.647889066423126,0.4954545454545454],
[4.843867312863185,0.5],
]
 },
{ 
 name: "Carteira 5423",
 data: [
[0.5262194102097791,0.2409090909090909],
[0.5283887006464996,0.24545454545454543],
[0.5342058931930519,0.25],
[0.5435539440039335,0.2545454545454545],
[0.5562547370387745,0.2590909090909091],
[0.5720850983046856,0.2636363636363636],
[0.5907937163087631,0.2681818181818182],
[0.6121169035017242,0.2727272727272727],
[0.6357915789574797,0.2772727272727273],
[0.6615651330168458,0.2818181818181818],
[0.6892021153413663,0.2863636363636364],
[0.7184875553998544,0.2909090909090909],
[0.7492281995335094,0.29545454545454547],
[0.7812523018454541,0.3],
[0.8144084887898708,0.3045454545454545],
[0.8485640674317396,0.3090909090909091],
[0.8836031476477506,0.3136363636363636],
[0.9194247230127214,0.3181818181818182],
[0.9559408311849626,0.3227272727272727],
[0.9930748595599224,0.32727272727272727],
[1.0314873443765042,0.3318181818181818],
[1.0722609754726125,0.33636363636363636],
[1.1152695829212238,0.3409090909090909],
[1.1610401110247484,0.3454545454545454],
[1.2094035663987066,0.35],
[1.260061420657109,0.3545454545454545],
[1.312748083634206,0.35909090909090907],
[1.367243289094103,0.3636363636363636],
[1.426009068402586,0.36818181818181817],
[1.491388463487258,0.3727272727272727],
[1.5625978959316584,0.37727272727272726],
[1.6388775944021887,0.3818181818181818],
[1.7195529372885665,0.38636363636363635],
[1.8040343091201794,0.3909090909090909],
[1.8918118887639088,0.39545454545454545],
[1.9824478823149396,0.39999999999999997],
[2.07556785949346,0.40454545454545454],
[2.170852188028996,0.40909090909090906],
[2.2680280983310297,0.41363636363636364],
[2.366862614730442,0.41818181818181815],
[2.46715641353339,0.4227272727272727],
[2.568738571811075,0.42727272727272725],
[2.6716496548969086,0.43181818181818177],
[2.7773029319624105,0.43636363636363634],
[2.8908400308659887,0.44090909090909086],
[3.014298807592366,0.44545454545454544],
[3.1465115966850385,0.44999999999999996],
[3.286422045921569,0.45454545454545453],
[3.4330891641480044,0.45909090909090905],
[3.585683932430011,0.4636363636363636],
[3.743481538195196,0.46818181818181814],
[3.9058514436106027,0.4727272727272727],
[4.072246760883598,0.47727272727272724],
[4.2421938395981025,0.4818181818181818],
[4.415282570022725,0.48636363636363633],
[4.591157640812831,0.49090909090909085],
[4.7695108241482,0.4954545454545454],
[4.950074265075709,0.5],
]
 },
{ 
 name: "Carteira 4703",
 data: [
[0.5767481618714269,0.2636363636363636],
[0.5773517315114045,0.2681818181818182],
[0.5789326431552668,0.2727272727272727],
[0.5814829252252044,0.2772727272727273],
[0.5849899004617439,0.2818181818181818],
[0.5894364941892121,0.2863636363636364],
[0.594801636515718,0.2909090909090909],
[0.6010607344785406,0.29545454545454547],
[0.6081862296559726,0.3],
[0.6161482057443509,0.3045454545454545],
[0.6249146763989044,0.3090909090909091],
[0.6344516560383454,0.3136363636363636],
[0.6447254132422832,0.3181818181818182],
[0.6557013166956283,0.3227272727272727],
[0.6673447224326892,0.32727272727272727],
[0.6796213239949969,0.3318181818181818],
[0.6924974463085255,0.33636363636363636],
[0.7059402589540269,0.3409090909090909],
[0.7199179817935055,0.3454545454545454],
[0.7344001356404516,0.35],
[0.7493574092910161,0.3545454545454545],
[0.764764311013179,0.35909090909090907],
[0.7805899153491846,0.3636363636363636],
[0.7968110123093836,0.36818181818181817],
[0.8134042431591887,0.3727272727272727],
[0.8303473345154959,0.37727272727272726],
[0.847619290423161,0.3818181818181818],
[0.8652004016643452,0.38636363636363635],
[0.883072190349073,0.3909090909090909],
[0.901217348781401,0.39545454545454545],
[0.9196196726005399,0.39999999999999997],
[0.9382639804198648,0.40454545454545454],
[0.9571359825194347,0.40909090909090906],
[0.9762219636241843,0.41363636363636364],
[0.995511522052845,0.41818181818181815],
[1.0149905749785342,0.4227272727272727],
[1.0346519356617032,0.42727272727272725],
[1.0544985062995411,0.43181818181818177],
[1.074615552319659,0.43636363636363634],
[1.0949964496067393,0.44090909090909086],
[1.1156267092987506,0.44545454545454544],
[1.1364925213841377,0.44999999999999996],
[1.1575813303129951,0.45454545454545453],
[1.178880605651072,0.45909090909090905],
[1.200384188109636,0.4636363636363636],
[1.2221897423085077,0.46818181818181814],
[1.2443310315175027,0.4727272727272727],
[1.2667903530873117,0.47727272727272724],
[1.2895509439984492,0.4818181818181818],
[1.312639801677058,0.48636363636363633],
[1.3360713143354999,0.49090909090909085],
[1.3598286054728792,0.4954545454545454],
[1.3838924304397295,0.5],
]
 },
{ 
 name: "Carteira 5942",
 data: [
[0.8653225552197872,0.39545454545454545],
[0.8660495815729825,0.39999999999999997],
[0.8675780750967425,0.40454545454545454],
[0.8699056247926116,0.40909090909090906],
[0.8730215708778445,0.41363636363636364],
[0.8769201927055228,0.41818181818181815],
[0.8815912530227331,0.4227272727272727],
[0.8870219664249566,0.42727272727272725],
[0.8931987155035878,0.43181818181818177],
[0.900106153812735,0.43636363636363634],
[0.9077277882058328,0.44090909090909086],
[0.9160459212849725,0.44545454545454544],
[0.9250405214752934,0.44999999999999996],
[0.9346935239035723,0.45454545454545453],
[0.9449841930420245,0.45909090909090905],
[0.95589187706624,0.4636363636363636],
[0.9673952916459982,0.46818181818181814],
[0.9794747865411442,0.4727272727272727],
[0.9921083315764582,0.47727272727272724],
[1.0052749432828632,0.4818181818181818],
[1.0189525499403522,0.48636363636363633],
[1.0331237810053195,0.49090909090909085],
[1.047767282550733,0.4954545454545454],
[1.0628635351475855,0.5],
]
 },
{ 
 name: "Carteira 4878",
 data: [
[0.5480261323897309,0.25],
[0.5512455138273348,0.2545454545454545],
[0.5580955112276411,0.2590909090909091],
[0.5684331374603968,0.2636363636363636],
[0.5820810896785518,0.2681818181818182],
[0.5988128026136104,0.2727272727272727],
[0.6183773187786047,0.2772727272727273],
[0.6405146445873823,0.2818181818181818],
[0.6649684425528556,0.2863636363636364],
[0.6914933397728233,0.2909090909090909],
[0.7198555321723332,0.29545454545454547],
[0.7498531575054107,0.3],
[0.7812953390862135,0.3045454545454545],
[0.8140147017400472,0.3090909090909091],
[0.8478633970836339,0.3136363636363636],
[0.882711516906484,0.3181818181818182],
[0.9184453059989618,0.3227272727272727],
[0.9560438997185524,0.32727272727272727],
[0.9972338863533001,0.3318181818181818],
[1.0416323413567141,0.33636363636363636],
[1.0888468604413266,0.3409090909090909],
[1.1385271015979204,0.3454545454545454],
[1.190367142565244,0.35],
[1.2443964994189396,0.3545454545454545],
[1.3016435540490183,0.35909090909090907],
[1.3618908300974202,0.3636363636363636],
[1.4249684776951208,0.36818181818181817],
[1.4913884637448385,0.3727272727272727],
[1.5625978959316598,0.37727272727272726],
[1.6388775944021903,0.3818181818181818],
[1.7195529372885665,0.38636363636363635],
[1.8040343091201803,0.3909090909090909],
[1.8918118887639113,0.39545454545454545],
[1.982447882314939,0.39999999999999997],
[2.075567859493458,0.40454545454545454],
[2.170852351128822,0.40909090909090906],
[2.2680280983310324,0.41363636363636364],
[2.3668626147304432,0.41818181818181815],
[2.467156413533389,0.4227272727272727],
[2.568738571811078,0.42727272727272725],
[2.671649654896907,0.43181818181818177],
[2.7773029319624114,0.43636363636363634],
[2.890840030865987,0.44090909090909086],
[3.0142988075923616,0.44545454545454544],
[3.1465115966850408,0.44999999999999996],
[3.2864220459215705,0.45454545454545453],
[3.433089164148001,0.45909090909090905],
[3.585683932430012,0.4636363636363636],
[3.7434815381951965,0.46818181818181814],
[3.9058514436106027,0.4727272727272727],
[4.072246760883599,0.47727272727272724],
[4.2421938395981025,0.4818181818181818],
[4.4152825700227245,0.48636363636363633],
[4.591157640812827,0.49090909090909085],
[4.769510824148201,0.4954545454545454],
[4.950074265075711,0.5],
]
 },
{ 
 name: "Carteira 6002",
 data: [
[0.5820981758697539,0.2636363636363636],
[0.5828320572928919,0.2681818181818182],
[0.5845516720926581,0.2727272727272727],
[0.5872455969384708,0.2772727272727273],
[0.590896856661541,0.2818181818181818],
[0.5954920573991145,0.2863636363636364],
[0.6010115623286647,0.2909090909090909],
[0.6074286605367365,0.29545454545454547],
[0.6147148236462996,0.3],
[0.6228409091588439,0.3045454545454545],
[0.6317704883691853,0.3090909090909091],
[0.6414739702640818,0.3136363636363636],
[0.6519154919277523,0.3181818181818182],
[0.6630631110214995,0.3227272727272727],
[0.6748758535709882,0.32727272727272727],
[0.6873221675433578,0.3318181818181818],
[0.7003677613882502,0.33636363636363636],
[0.7139823283903325,0.3409090909090909],
[0.7281322093185785,0.3454545454545454],
[0.7427862845230156,0.35],
[0.7579161911933899,0.3545454545454545],
[0.7734934933727419,0.35909090909090907],
[0.7894919120775253,0.3636363636363636],
[0.805886373620208,0.36818181818181817],
[0.8226531780872977,0.3727272727272727],
[0.8397700480696407,0.37727272727272726],
[0.8572160212739682,0.3818181818181818],
[0.874971411959574,0.38636363636363635],
[0.893022759280361,0.3909090909090909],
[0.9113383105507226,0.39545454545454545],
[0.9299172269572485,0.39999999999999997],
[0.9487379163251047,0.40454545454545454],
[0.9677833647120604,0.40909090909090906],
[0.9870465217200579,0.41363636363636364],
[1.0065123507966596,0.41818181818181815],
[1.026169315790713,0.4227272727272727],
[1.0460066377152546,0.42727272727272725],
[1.06601424373988,0.43181818181818177],
[1.0861827190903572,0.43636363636363634],
[1.1065032619783322,0.44090909090909086],
[1.1269747740998954,0.44545454545454544],
[1.1476686802429152,0.44999999999999996],
[1.1685940145115583,0.45454545454545453],
[1.1897388779890896,0.45909090909090905],
[1.211092290239093,0.4636363636363636],
[1.2326433075846455,0.46818181818181814],
[1.254381610790122,0.4727272727272727],
[1.2762970980528179,0.47727272727272724],
[1.2983806199783592,0.4818181818181818],
[1.320624212244156,0.48636363636363633],
[1.3430208345142527,0.49090909090909085],
[1.3656074932365738,0.4954545454545454],
[1.388522254813551,0.5],
]
 },
{ 
 name: "Carteira 3833",
 data: [
[0.5820979374422399,0.2636363636363636],
[0.5828313473636648,0.2681818181818182],
[0.5845493778252951,0.2727272727272727],
[0.5872404075907313,0.2772727272727273],
[0.5908941031901734,0.2818181818181818],
[0.5954917599903159,0.2863636363636364],
[0.60101169802924,0.2909090909090909],
[0.6074287895881992,0.29545454545454547],
[0.6147149395109237,0.3],
[0.6228396497407097,0.3045454545454545],
[0.6317705697503734,0.3090909090909091],
[0.6414746597303915,0.3136363636363636],
[0.6519179786591054,0.3181818181818182],
[0.6630602168257745,0.3227272727272727],
[0.6748732481846629,0.32727272727272727],
[0.6873210984091467,0.3318181818181818],
[0.7003671903725364,0.33636363636363636],
[0.7139821223800193,0.3409090909090909],
[0.7281310055767269,0.3454545454545454],
[0.7427854018351077,0.35],
[0.7579153082517065,0.3545454545454545],
[0.7734943479777071,0.35909090909090907],
[0.7894928727208446,0.3636363636363636],
[0.8058874729076602,0.36818181818181817],
[0.8226542563271115,0.3727272727272727],
[0.839772698928211,0.37727272727272726],
[0.8572166192075891,0.3818181818181818],
[0.8749748846731684,0.38636363636363635],
[0.8930195792188517,0.3909090909090909],
[0.911340272879089,0.39545454545454545],
[0.9299157531463998,0.39999999999999997],
[0.9487384302980649,0.40454545454545454],
[0.9677854817584539,0.40909090909090906],
[0.9870468340228018,0.41363636363636364],
[1.0065148990091881,0.41818181818181815],
[1.0261715782995635,0.4227272727272727],
[1.046008565379156,0.42727272727272725],
[1.0660158079088211,0.43181818181818177],
[1.086183918174132,0.43636363636363634],
[1.1065041254260397,0.44090909090909086],
[1.1269748814075746,0.44545454545454544],
[1.147668646108565,0.44999999999999996],
[1.1685955815339435,0.45454545454545453],
[1.18973894363422,0.45909090909090905],
[1.2110934055504876,0.4636363636363636],
[1.232642797249922,0.46818181818181814],
[1.2543806124979955,0.4727272727272727],
[1.2762959761286874,0.47727272727272724],
[1.2983799683857122,0.4818181818181818],
[1.320624165469128,0.48636363636363633],
[1.3430219194401196,0.49090909090909085],
[1.3656075064669317,0.4954545454545454],
[1.3885223715863029,0.5],
]
 },
{ 
 name: "Carteira 4331",
 data: [
[0.5379702872851624,0.24545454545454543],
[0.540353400912425,0.25],
[0.5448453060558552,0.2545454545454545],
[0.5513946108246124,0.2590909090909091],
[0.5599291693881302,0.2636363636363636],
[0.5704939052763364,0.2681818181818182],
[0.5836920440979974,0.2727272727272727],
[0.5994529091366323,0.2772727272727273],
[0.6175875900194162,0.2818181818181818],
[0.6379963440656975,0.2863636363636364],
[0.6605160484344419,0.2909090909090909],
[0.6849383494982182,0.29545454545454547],
[0.711067269099953,0.3],
[0.7387219301137998,0.3045454545454545],
[0.767738048384942,0.3090909090909091],
[0.7979667435935573,0.3136363636363636],
[0.82927594469577,0.3181818181818182],
[0.8615478717419099,0.3227272727272727],
[0.8946783158138084,0.32727272727272727],
[0.9285745587111319,0.3318181818181818],
[0.9631714631090393,0.33636363636363636],
[0.9998138992790782,0.3409090909090909],
[1.0392067503916782,0.3454545454545454],
[1.081048210556745,0.35],
[1.1250651472225335,0.3545454545454545],
[1.17101223033303,0.35909090909090907],
[1.2193943440245927,0.3636363636363636],
[1.2713446488059503,0.36818181818181817],
[1.3267338750024347,0.3727272727272727],
[1.3851486605397842,0.37727272727272726],
[1.4462224335182448,0.3818181818181818],
[1.5105768785044273,0.38636363636363635],
[1.5796232069679643,0.3909090909090909],
[1.6528221835606007,0.39545454545454545],
[1.729646665819829,0.39999999999999997],
[1.8096349718109215,0.40454545454545454],
[1.8923859537659435,0.40909090909090906],
[1.9775528283740609,0.41363636363636364],
[2.0648366773669857,0.41818181818181815],
[2.1539801632279945,0.4227272727272727],
[2.24842847836573,0.42727272727272725],
[2.356741884666754,0.43181818181818177],
[2.4775627681666372,0.43636363636363634],
[2.6091541704649486,0.44090909090909086],
[2.749970358194803,0.44545454545454544],
[2.8986672320807125,0.44999999999999996],
[3.054093931007988,0.45454545454545453],
[3.2152746417987537,0.45909090909090905],
[3.3813866343057226,0.4636363636363636],
[3.551738079422742,0.46818181818181814],
[3.7257475041493024,0.4727272727272727],
[3.902925673161204,0.47727272727272724],
[4.082882180535257,0.4818181818181818],
[4.266885392359352,0.48636363636363633],
[4.4554041615485405,0.49090909090909085],
[4.647889066423129,0.4954545454545454],
[4.843867312863188,0.5],
]
 },
{ 
 name: "Carteira 3678",
 data: [
[0.5049092082674196,0.2272727272727273],
[0.5058427203078625,0.2318181818181818],
[0.5090009855342276,0.23636363636363633],
[0.5143676605512467,0.2409090909090909],
[0.5218744453429772,0.24545454545454543],
[0.5314311350099311,0.25],
[0.5429293730074172,0.2545454545454545],
[0.5562535847499811,0.2590909090909091],
[0.57208420785425,0.2636363636363636],
[0.5907950530914158,0.2681818181818182],
[0.6121186736693971,0.2727272727272727],
[0.6357912649577764,0.2772727272727273],
[0.6615653611319017,0.2818181818181818],
[0.6892027473157625,0.2863636363636364],
[0.7184885709397187,0.2909090909090909],
[0.7492290118683425,0.29545454545454547],
[0.7812536861813232,0.3],
[0.8144100068650166,0.3045454545454545],
[0.8485657016889865,0.3090909090909091],
[0.8836048626343758,0.3136363636363636],
[0.9194265204254515,0.3181818181818182],
[0.9559427023967905,0.3227272727272727],
[0.9930767976789188,0.32727272727272727],
[1.0314886008244843,0.3318181818181818],
[1.0722615371515531,0.33636363636363636],
[1.115269840583533,0.3409090909090909],
[1.161040256014423,0.3454545454545454],
[1.2094035670832333,0.35],
[1.2600615172299285,0.3545454545454545],
[1.3127482464523614,0.35909090909090907],
[1.3672432892185504,0.3636363636363636],
[1.4260090685786777,0.36818181818181817],
[1.4913884636488153,0.3727272727272727],
[1.5625978959316569,0.37727272727272726],
[1.6388775944021894,0.3818181818181818],
[1.719552937288565,0.38636363636363635],
[1.8040343091201803,0.3909090909090909],
[1.8918118887639106,0.39545454545454545],
[1.9824478823149392,0.39999999999999997],
[2.0755678594934586,0.40454545454545454],
[2.1708521880289964,0.40909090909090906],
[2.268028098331031,0.41363636363636364],
[2.3668630268039785,0.41818181818181815],
[2.4671564135333885,0.4227272727272727],
[2.568738571811077,0.42727272727272725],
[2.6716496549158415,0.43181818181818177],
[2.7773029319624105,0.43636363636363634],
[2.890840030865988,0.44090909090909086],
[3.014298807592363,0.44545454545454544],
[3.1465115966850385,0.44999999999999996],
[3.2864220459215727,0.45454545454545453],
[3.433089164148003,0.45909090909090905],
[3.5856839324300123,0.4636363636363636],
[3.743481538195195,0.46818181818181814],
[3.905851443610601,0.4727272727272727],
[4.072246760883596,0.47727272727272724],
[4.2421938395981025,0.4818181818181818],
[4.415282570022725,0.48636363636363633],
[4.591157640812827,0.49090909090909085],
[4.769510824148198,0.4954545454545454],
[4.950074265075704,0.5],
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
              radius: 1.0
            }
          }
        }
      }
    }]
  }
});