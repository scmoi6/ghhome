
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
[0.567934037225446,0.2636363636363636],
[0.5688626078341604,0.2681818181818182],
[0.5706648550306649,0.2727272727272727],
[0.5733325482024038,0.2772727272727273],
[0.5768536615131973,0.2818181818181818],
[0.58121269699134,0.2863636363636364],
[0.5863909699019664,0.2909090909090909],
[0.5923669932701399,0.29545454545454547],
[0.599116895575234,0.3],
[0.6066148441347283,0.3045454545454545],
[0.6148334725878294,0.3090909090909091],
[0.6237491080292203,0.3136363636363636],
[0.6333222663583643,0.3181818181818182],
[0.6435287385055365,0.3227272727272727],
[0.6543390849240266,0.32727272727272727],
[0.6657238317181693,0.3318181818181818],
[0.6776540014592922,0.33636363636363636],
[0.6901013347761605,0.3409090909090909],
[0.7030383649094049,0.3454545454545454],
[0.7164385526522482,0.35],
[0.7302764371968721,0.3545454545454545],
[0.7445275859534705,0.35909090909090907],
[0.7591687332661557,0.3636363636363636],
[0.7741777540140007,0.36818181818181817],
[0.7895336682314874,0.3727272727272727],
[0.8052166286689391,0.37727272727272726],
[0.8212078950729947,0.3818181818181818],
[0.8374897995279079,0.38636363636363635],
[0.8540457178243333,0.3909090909090909],
[0.8708633751548069,0.39545454545454545],
[0.8879178291461206,0.39999999999999997],
[0.905206041428955,0.40454545454545454],
[0.922714783173143,0.40909090909090906],
[0.9404208866419126,0.41363636363636364],
[0.958324588758334,0.41818181818181815],
[0.9764111162703943,0.4227272727272727],
[0.9946706180500675,0.42727272727272725],
[1.0130936773970238,0.43181818181818177],
[1.031666799587511,0.43636363636363634],
[1.05039163700555,0.44090909090909086],
[1.0693188953194754,0.44545454545454544],
[1.0884752443930252,0.44999999999999996],
[1.1078455463539514,0.45454545454545453],
[1.127420888214456,0.45909090909090905],
[1.1471903927087725,0.4636363636363636],
[1.167237907625041,0.46818181818181814],
[1.1876053894907017,0.4727272727272727],
[1.2082760668323784,0.47727272727272724],
[1.2292347995988357,0.4818181818181818],
[1.2504671479614382,0.48636363636363633],
[1.2719594100545022,0.49090909090909085],
[1.2936986323424984,0.4954545454545454],
[1.3156725735595038,0.5],
]
 },
{ 
 name: "Carteira 5184",
 data: [
[0.514044628112148,0.23636363636363633],
[0.5156049217195711,0.2409090909090909],
[0.5193210856611546,0.24545454545454543],
[0.525147342042522,0.25],
[0.5330144921494016,0.2545454545454545],
[0.5428287378106705,0.2590909090909091],
[0.5544958214896425,0.2636363636363636],
[0.5678974658792727,0.2681818181818182],
[0.5829140465689479,0.2727272727272727],
[0.5994242052527614,0.2772727272727273],
[0.6175871927414079,0.2818181818181818],
[0.6379944035199245,0.2863636363636364],
[0.660513430347316,0.2909090909090909],
[0.6849381005878644,0.29545454545454547],
[0.7110657559363182,0.3],
[0.7387220110232151,0.3045454545454545],
[0.7677386742305989,0.3090909090909091],
[0.7979675289015622,0.3136363636363636],
[0.8292765969118416,0.3181818181818182],
[0.8615486676651435,0.3227272727272727],
[0.8946791585178291,0.32727272727272727],
[0.9285760570441438,0.3318181818181818],
[0.9631709305397718,0.33636363636363636],
[0.9998137460711879,0.3409090909090909],
[1.0392064340143106,0.3454545454545454],
[1.0810478300799198,0.35],
[1.1250647177593136,0.3545454545454545],
[1.1710130766507847,0.35909090909090907],
[1.2193940962918557,0.3636363636363636],
[1.27134464876198,0.36818181818181817],
[1.326733875001092,0.3727272727272727],
[1.3851486604609322,0.37727272727272726],
[1.4462224335182445,0.3818181818181818],
[1.5105768786323002,0.38636363636363635],
[1.5796232079722872,0.3909090909090909],
[1.6528221834644734,0.39545454545454545],
[1.7296466658198297,0.39999999999999997],
[1.8096349723991811,0.40454545454545454],
[1.8923859537659453,0.40909090909090906],
[1.9775528283740604,0.41363636363636364],
[2.064836677366986,0.41818181818181815],
[2.1539801632279936,0.4227272727272727],
[2.2484284783657307,0.42727272727272725],
[2.3567418846667554,0.43181818181818177],
[2.4775627671669875,0.43636363636363634],
[2.609154170464947,0.44090909090909086],
[2.7499703581948074,0.44545454545454544],
[2.8986672320807134,0.44999999999999996],
[3.0540939310079875,0.45454545454545453],
[3.2152746417987563,0.45909090909090905],
[3.3813866343057226,0.4636363636363636],
[3.551738079422743,0.46818181818181814],
[3.7257475041493024,0.4727272727272727],
[3.902925673161205,0.47727272727272724],
[4.082882180535258,0.4818181818181818],
[4.266885392359355,0.48636363636363633],
[4.455404161548538,0.49090909090909085],
[4.64788906642313,0.4954545454545454],
[4.843867312863187,0.5],
]
 },
{ 
 name: "Carteira 5423",
 data: [
[0.5262183423489928,0.2409090909090909],
[0.5283872370938273,0.24545454545454543],
[0.5342048734877155,0.25],
[0.5435529144462001,0.2545454545454545],
[0.5562536625497776,0.2590909090909091],
[0.5720856781839276,0.2636363636363636],
[0.5907934027908276,0.2681818181818182],
[0.6121165780980193,0.2727272727272727],
[0.6357910387540849,0.2772727272727273],
[0.6615646807504981,0.2818181818181818],
[0.6892019078838171,0.2863636363636364],
[0.7184876531609395,0.2909090909090909],
[0.7492285970749828,0.29545454545454547],
[0.7812530051703583,0.3],
[0.8144094317582584,0.3045454545454545],
[0.8485652097037345,0.3090909090909091],
[0.8836044464894438,0.3136363636363636],
[0.9194261505626871,0.3181818181818182],
[0.9559423460956885,0.3227272727272727],
[0.9930763909060293,0.32727272727272727],
[1.0314876763826104,0.3318181818181818],
[1.0722607473149597,0.33636363636363636],
[1.1152695830307264,0.3409090909090909],
[1.1610401110054676,0.3454545454545454],
[1.2094035665701204,0.35],
[1.2600614209893546,0.3545454545454545],
[1.3127480836039818,0.35909090909090907],
[1.3672432890783468,0.3636363636363636],
[1.426009068402227,0.36818181818181817],
[1.4913884634726602,0.3727272727272727],
[1.5625978959316567,0.37727272727272726],
[1.6388775944021894,0.3818181818181818],
[1.7195529372885665,0.38636363636363635],
[1.80403430912018,0.3909090909090909],
[1.8918118887639106,0.39545454545454545],
[1.982447882314938,0.39999999999999997],
[2.0755678594934595,0.40454545454545454],
[2.1708521880289973,0.40909090909090906],
[2.268028098331033,0.41363636363636364],
[2.366862614730441,0.41818181818181815],
[2.467156413533388,0.4227272727272727],
[2.5687385718110773,0.42727272727272725],
[2.6716496552564726,0.43181818181818177],
[2.7773029319624114,0.43636363636363634],
[2.890840030865986,0.44090909090909086],
[3.0142988075923633,0.44545454545454544],
[3.1465115966850385,0.44999999999999996],
[3.2864220459215714,0.45454545454545453],
[3.433089164148004,0.45909090909090905],
[3.585683932430012,0.4636363636363636],
[3.743481538195195,0.46818181818181814],
[3.9058514436106027,0.4727272727272727],
[4.072246760883596,0.47727272727272724],
[4.242193839598103,0.4818181818181818],
[4.4152825700227245,0.48636363636363633],
[4.591157640812824,0.49090909090909085],
[4.769510824148191,0.4954545454545454],
[4.950074265075704,0.5],
]
 },
{ 
 name: "Carteira 4703",
 data: [
[0.5767487063917136,0.2636363636363636],
[0.5773521788417163,0.2681818181818182],
[0.5789330264435834,0.2727272727272727],
[0.5814832807438673,0.2772727272727273],
[0.5849902632675072,0.2818181818181818],
[0.5894368870103205,0.2863636363636364],
[0.5948021208752808,0.2909090909090909],
[0.6010614172026163,0.29545454545454547],
[0.6081871903371792,0.3],
[0.6161491384636498,0.3045454545454545],
[0.6249150313182996,0.3090909090909091],
[0.6344519234247341,0.3136363636363636],
[0.6447255995082818,0.3181818181818182],
[0.6557014331081379,0.3227272727272727],
[0.6673447761185606,0.32727272727272727],
[0.6796213229351867,0.3318181818181818],
[0.6924973982573703,0.33636363636363636],
[0.7059401973511318,0.3409090909090909],
[0.7199179740115418,0.3454545454545454],
[0.734400182210267,0.35],
[0.749357576360236,0.3545454545454545],
[0.7647622756318426,0.35909090909090907],
[0.7805877971113642,0.3636363636363636],
[0.7968090707807077,0.36818181818181817],
[0.8134024156250119,0.3727272727272727],
[0.8303455298597187,0.37727272727272726],
[0.847617435406753,0.3818181818181818],
[0.8651984436116623,0.38636363636363635],
[0.8830737959400139,0.3909090909090909],
[0.9012152502944555,0.39545454545454545],
[0.919618602945497,0.39999999999999997],
[0.9382680652941986,0.40454545454545454],
[0.9571335836185401,0.40909090909090906],
[0.9762204011244409,0.41363636363636364],
[0.9955095648665199,0.41818181818181815],
[1.014989537699274,0.4227272727272727],
[1.0346495407590917,0.42727272727272725],
[1.054498625260646,0.43181818181818177],
[1.074615346323778,0.43636363636363634],
[1.0949960752830727,0.44090909090909086],
[1.115626373286935,0.44545454545454544],
[1.1364920343100837,0.44999999999999996],
[1.1575804692216056,0.45454545454545453],
[1.178880439402267,0.45909090909090905],
[1.2003836496265137,0.4636363636363636],
[1.2221900939127057,0.46818181818181814],
[1.24433101673922,0.4727272727272727],
[1.2667901166826743,0.47727272727272724],
[1.2895509468732895,0.4818181818181818],
[1.312639801695566,0.48636363636363633],
[1.3360713129773882,0.49090909090909085],
[1.3598277649980077,0.4954545454545454],
[1.3838924226115081,0.5],
]
 },
{ 
 name: "Carteira 5942",
 data: [
[0.8653225542451666,0.39545454545454545],
[0.8660499507808379,0.39999999999999997],
[0.8675780744946413,0.40454545454545454],
[0.869903809996971,0.40909090909090906],
[0.873020418797436,0.41363636363636364],
[0.8769194628516004,0.41818181818181815],
[0.8815905634848478,0.4227272727272727],
[0.8870215232525603,0.42727272727272725],
[0.8931984825974651,0.43181818181818177],
[0.9001060839572772,0.43636363636363634],
[0.9077291756654298,0.44090909090909086],
[0.9160464394384716,0.44545454545454544],
[0.9250409879406849,0.44999999999999996],
[0.9346935494191595,0.45454545454545453],
[0.9449838962923304,0.45909090909090905],
[0.9558914026353345,0.4636363636363636],
[0.9673951390282249,0.46818181818181814],
[0.9794740805550058,0.4727272727272727],
[0.9921072115795453,0.47727272727272724],
[1.0052736480650755,0.4818181818181818],
[1.0189527004266796,0.48636363636363633],
[1.033124020788279,0.49090909090909085],
[1.047767754650733,0.4954545454545454],
[1.0628642088343887,0.5],
]
 },
{ 
 name: "Carteira 4878",
 data: [
[0.5480266575849757,0.25],
[0.5512459736803597,0.2545454545454545],
[0.5580917864758543,0.2590909090909091],
[0.5684320610550121,0.2636363636363636],
[0.5820808488475833,0.2681818181818182],
[0.5988128936830369,0.2727272727272727],
[0.6183776635073249,0.2772727272727273],
[0.6405154817661693,0.2818181818181818],
[0.6649688149076416,0.2863636363636364],
[0.6914924511016334,0.2909090909090909],
[0.7198574817989494,0.29545454545454547],
[0.7498552841257281,0.3],
[0.7812975302120485,0.3045454545454545],
[0.8140168455468071,0.3090909090909091],
[0.847865488419051,0.3136363636363636],
[0.8827134274994474,0.3181818181818182],
[0.9184452042209246,0.3227272727272727],
[0.9560446396506841,0.32727272727272727],
[0.9972337887919692,0.3318181818181818],
[1.041632219913743,0.33636363636363636],
[1.0888466774165801,0.3409090909090909],
[1.1385266831537175,0.3454545454545454],
[1.1903678529237267,0.35],
[1.2443966184337767,0.3545454545454545],
[1.3016433235961185,0.35909090909090907],
[1.3618908301908588,0.3636363636363636],
[1.4249684779397358,0.36818181818181817],
[1.4913884634833783,0.3727272727272727],
[1.5625978959316587,0.37727272727272726],
[1.638877594402189,0.3818181818181818],
[1.7195529372951053,0.38636363636363635],
[1.8040343091201803,0.3909090909090909],
[1.891811888963649,0.39545454545454545],
[1.982447882314938,0.39999999999999997],
[2.075567859493457,0.40454545454545454],
[2.170852188028996,0.40909090909090906],
[2.268028098331031,0.41363636363636364],
[2.3668626147304423,0.41818181818181815],
[2.4671564135333885,0.4227272727272727],
[2.5687385718613167,0.42727272727272725],
[2.6716496548969086,0.43181818181818177],
[2.777302931962412,0.43636363636363634],
[2.8908400308659865,0.44090909090909086],
[3.0142988075923647,0.44545454545454544],
[3.14651159668504,0.44999999999999996],
[3.286422045921574,0.45454545454545453],
[3.433089164148004,0.45909090909090905],
[3.5856839324300123,0.4636363636363636],
[3.7434815381951947,0.46818181818181814],
[3.9058514436106,0.4727272727272727],
[4.072246760883598,0.47727272727272724],
[4.242193839598104,0.4818181818181818],
[4.415282570022726,0.48636363636363633],
[4.591157640812827,0.49090909090909085],
[4.7695108241482,0.4954545454545454],
[4.950074265075712,0.5],
]
 },
{ 
 name: "Carteira 6002",
 data: [
[0.58209907075166,0.2636363636363636],
[0.5828353802984553,0.2681818181818182],
[0.5845493615278294,0.2727272727272727],
[0.5872420117206714,0.2772727272727273],
[0.5908961597305226,0.2818181818181818],
[0.5954917584038887,0.2863636363636364],
[0.6010123436857993,0.2909090909090909],
[0.6074300936344352,0.29545454545454547],
[0.6147160245637147,0.3],
[0.6228403821155385,0.3045454545454545],
[0.631771735079804,0.3090909090909091],
[0.6414756960560243,0.3136363636363636],
[0.6519177635015335,0.3181818181818182],
[0.6630629065532243,0.3227272727272727],
[0.674876353015774,0.32727272727272727],
[0.6873232644453645,0.3318181818181818],
[0.70036941538473,0.33636363636363636],
[0.7139833982803675,0.3409090909090909],
[0.7281336767798857,0.3454545454545454],
[0.7427878379300242,0.35],
[0.7579175862767211,0.3545454545454545],
[0.7734949314439107,0.35909090909090907],
[0.7894934107561591,0.3636363636363636],
[0.805888113984189,0.36818181818181817],
[0.8226551581939483,0.3727272727272727],
[0.8397722341685833,0.37727272727272726],
[0.8572183697268329,0.3818181818181818],
[0.8749738791906001,0.38636363636363635],
[0.8930203076396337,0.3909090909090909],
[0.9113403931730215,0.39545454545454545],
[0.9299179722385117,0.39999999999999997],
[0.9487378641988293,0.40454545454545454],
[0.9677859273525559,0.40909090909090906],
[0.9870489432015165,0.41363636363636364],
[1.0065145520920127,0.41818181818181815],
[1.0261711853576372,0.4227272727272727],
[1.0460079803772084,0.42727272727272725],
[1.0660157915841766,0.43181818181818177],
[1.0861825284923439,0.43636363636363634],
[1.1065047220073208,0.44090909090909086],
[1.126975175555294,0.44545454545454544],
[1.1476683768031415,0.44999999999999996],
[1.1685940170660618,0.45454545454545453],
[1.18973915216123,0.45909090909090905],
[1.2110924029336672,0.4636363636363636],
[1.2326429538256094,0.46818181818181814],
[1.2543806359426348,0.4727272727272727],
[1.2762958877969888,0.47727272727272724],
[1.2983797179049683,0.4818181818181818],
[1.3206236693076348,0.48636363636363633],
[1.3430208107997306,0.49090909090909085],
[1.3656072092524592,0.4954545454545454],
[1.3885222554968848,0.5],
]
 },
{ 
 name: "Carteira 3833",
 data: [
[0.5820988171401018,0.2636363636363636],
[0.5828313346781971,0.2681818181818182],
[0.5845484148306501,0.2727272727272727],
[0.5872403488928436,0.2772727272727273],
[0.5908939907181063,0.2818181818181818],
[0.5954916298736015,0.2863636363636364],
[0.6010116162019307,0.2909090909090909],
[0.6074288032108661,0.29545454545454547],
[0.614714982834127,0.3],
[0.622839622500141,0.3045454545454545],
[0.631770587733561,0.3090909090909091],
[0.6414777565082252,0.3136363636363636],
[0.6519169486198733,0.3181818181818182],
[0.6630618926269992,0.3227272727272727],
[0.6748733690248334,0.32727272727272727],
[0.6873204749321168,0.3318181818181818],
[0.7003677259202801,0.33636363636363636],
[0.713982213938066,0.3409090909090909],
[0.7281321562675764,0.3454545454545454],
[0.7427869650342059,0.35],
[0.7579173666682396,0.3545454545454545],
[0.7734953304672985,0.35909090909090907],
[0.7894940033301376,0.3636363636363636],
[0.805888720480317,0.36818181818181817],
[0.8226557246341643,0.3727272727272727],
[0.8397697844199816,0.37727272727272726],
[0.8572158558139612,0.3818181818181818],
[0.8749713203376525,0.38636363636363635],
[0.8930195356125418,0.3909090909090909],
[0.9113388897632241,0.39545454545454545],
[0.929915757401369,0.39999999999999997],
[0.948735260341293,0.40454545454545454],
[0.9677835476237785,0.40909090909090906],
[0.9870465442724293,0.41363636363636364],
[1.0065125056059705,0.41818181818181815],
[1.0261706266123913,0.4227272727272727],
[1.046007861030716,0.42727272727272725],
[1.0660147572808085,0.43181818181818177],
[1.0861872285796597,0.43636363636363634],
[1.1065037028826652,0.44090909090909086],
[1.1269745319659847,0.44545454545454544],
[1.1476681572573966,0.44999999999999996],
[1.1685936980700342,0.45454545454545453],
[1.189738851700058,0.45909090909090905],
[1.2110921220676842,0.4636363636363636],
[1.2326426941839257,0.46818181818181814],
[1.254380399015262,0.4727272727272727],
[1.2762956749232062,0.47727272727272724],
[1.298379530267793,0.4818181818181818],
[1.320623507924129,0.48636363636363633],
[1.3430208108001,0.49090909090909085],
[1.3656072093451208,0.4954545454545454],
[1.388522254811222,0.5],
]
 },
{ 
 name: "Carteira 4331",
 data: [
[0.5379694442972766,0.24545454545454543],
[0.5403530283218554,0.25],
[0.5448454950290392,0.2545454545454545],
[0.5513951902957688,0.2590909090909091],
[0.5599302364798955,0.2636363636363636],
[0.5704934481132097,0.2681818181818182],
[0.5836900085414917,0.2727272727272727],
[0.5994525813698852,0.2772727272727273],
[0.6175874553081585,0.2818181818181818],
[0.6379948225476221,0.2863636363636364],
[0.6605137594296908,0.2909090909090909],
[0.6849356928217324,0.29545454545454547],
[0.7110648376219951,0.3],
[0.7387205898050673,0.3045454545454545],
[0.7677375000727158,0.3090909090909091],
[0.7979670286476689,0.3136363636363636],
[0.8292766204982748,0.3181818181818182],
[0.8615485349727127,0.3227272727272727],
[0.8946785812301584,0.32727272727272727],
[0.9285747978051895,0.3318181818181818],
[0.9631702480128503,0.33636363636363636],
[0.9998154854701784,0.3409090909090909],
[1.039206536773016,0.3454545454545454],
[1.0810478237001162,0.35],
[1.1250645705486073,0.3545454545454545],
[1.1710115381623185,0.35909090909090907],
[1.2193933480174561,0.3636363636363636],
[1.2713446497655978,0.36818181818181817],
[1.3267338747785136,0.3727272727272727],
[1.385148660471258,0.37727272727272726],
[1.4462224335281386,0.3818181818181818],
[1.510576878501627,0.38636363636363635],
[1.5796232069993181,0.3909090909090909],
[1.6528221835579178,0.39545454545454545],
[1.7296466661190617,0.39999999999999997],
[1.8096349718621019,0.40454545454545454],
[1.8923859537659442,0.40909090909090906],
[1.977552828374061,0.41363636363636364],
[2.0648366773669857,0.41818181818181815],
[2.1539801632279936,0.4227272727272727],
[2.248428478365728,0.42727272727272725],
[2.3567418846667523,0.43181818181818177],
[2.47756276716699,0.43636363636363634],
[2.6091541704649472,0.44090909090909086],
[2.7499703581948083,0.44545454545454544],
[2.8986672320807134,0.44999999999999996],
[3.0540939310079858,0.45454545454545453],
[3.215274641798757,0.45909090909090905],
[3.3813866343057213,0.4636363636363636],
[3.5517380794227433,0.46818181818181814],
[3.7257475041493042,0.4727272727272727],
[3.9029256731612034,0.47727272727272724],
[4.082882180535257,0.4818181818181818],
[4.266885392359356,0.48636363636363633],
[4.45540416154854,0.49090909090909085],
[4.647889066423129,0.4954545454545454],
[4.843867312863182,0.5],
]
 },
{ 
 name: "Carteira 3678",
 data: [
[0.505842770874831,0.2318181818181818],
[0.5090009035515748,0.23636363636363633],
[0.5143677204822821,0.2409090909090909],
[0.5218750478029163,0.24545454545454543],
[0.5314321678142873,0.25],
[0.5429306428643136,0.2545454545454545],
[0.5562549413355713,0.2590909090909091],
[0.5720849459149704,0.2636363636363636],
[0.5907938092013668,0.2681818181818182],
[0.612117162559748,0.2727272727272727],
[0.6357917510020819,0.2772727272727273],
[0.6615653942039289,0.2818181818181818],
[0.6892027271891343,0.2863636363636364],
[0.7184886175144732,0.2909090909090909],
[0.7492297011187936,0.29545454545454547],
[0.7812542829907742,0.3],
[0.8144106104829438,0.3045454545454545],
[0.8485637248679803,0.3090909090909091],
[0.8836052193461041,0.3136363636363636],
[0.919426732051307,0.3181818181818182],
[0.95594277202493,0.3227272727272727],
[0.9930767111359645,0.32727272727272727],
[1.0314875519044184,0.3318181818181818],
[1.0722603797621308,0.33636363636363636],
[1.1152695857827783,0.3409090909090909],
[1.1610406338627266,0.3454545454545454],
[1.2094050355861352,0.35],
[1.2600619687154622,0.3545454545454545],
[1.3127481462588577,0.35909090909090907],
[1.3672438195138692,0.3636363636363636],
[1.4260090684022255,0.36818181818181817],
[1.4913884634748467,0.3727272727272727],
[1.5625978959316567,0.37727272727272726],
[1.6388775944021896,0.3818181818181818],
[1.719552937288566,0.38636363636363635],
[1.8040343091201796,0.3909090909090909],
[1.8918118887639108,0.39545454545454545],
[1.9824478823149372,0.39999999999999997],
[2.075567859493459,0.40454545454545454],
[2.1708521880289973,0.40909090909090906],
[2.26802809833103,0.41363636363636364],
[2.36686261473044,0.41818181818181815],
[2.4671564135333885,0.4227272727272727],
[2.568738571811078,0.42727272727272725],
[2.6716496548969086,0.43181818181818177],
[2.7773029319624123,0.43636363636363634],
[2.890840030865988,0.44090909090909086],
[3.014298807592362,0.44545454545454544],
[3.146511596685037,0.44999999999999996],
[3.2864220459215736,0.45454545454545453],
[3.433089164148003,0.45909090909090905],
[3.5856839324300136,0.4636363636363636],
[3.743481538195195,0.46818181818181814],
[3.9058514436106013,0.4727272727272727],
[4.072246760883594,0.47727272727272724],
[4.242193839598101,0.4818181818181818],
[4.415282570022724,0.48636363636363633],
[4.591157640812829,0.49090909090909085],
[4.769510824148198,0.4954545454545454],
[4.950074265075711,0.5],
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