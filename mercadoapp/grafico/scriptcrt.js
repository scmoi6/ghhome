
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
[0.5679340271494755,0.2636363636363636],
[0.5688688105391069,0.2681818181818182],
[0.5706708264046287,0.2727272727272727],
[0.5733381461162579,0.2772727272727273],
[0.5768587731090785,0.2818181818181818],
[0.581217469569045,0.2863636363636364],
[0.5863953678596032,0.2909090909090909],
[0.5923709754436817,0.29545454545454547],
[0.599120436328659,0.3],
[0.6066179314418705,0.3045454545454545],
[0.6148361084399928,0.3090909090909091],
[0.6237464917923182,0.3136363636363636],
[0.6333198743976834,0.3181818181818182],
[0.6435266748711075,0.3227272727272727],
[0.6543372573915875,0.32727272727272727],
[0.6657222101098709,0.3318181818181818],
[0.6776525796086755,0.33636363636363636],
[0.690100067746238,0.3409090909090909],
[0.7030373573613081,0.3454545454545454],
[0.7164378138520993,0.35],
[0.7302759149997916,0.3545454545454545],
[0.7445272585198057,0.35909090909090907],
[0.7591685721296102,0.3636363636363636],
[0.7741777304745419,0.36818181818181817],
[0.7895337551571742,0.3727272727272727],
[0.8052168011113805,0.37727272727272726],
[0.8212081322266721,0.3818181818181818],
[0.8374900887052688,0.38636363636363635],
[0.8540460629323321,0.3909090909090909],
[0.8708604690346912,0.39545454545454545],
[0.8879185838550374,0.39999999999999997],
[0.9052049853730794,0.40454545454545454],
[0.922709623741475,0.40909090909090906],
[0.9404192227419907,0.41363636363636364],
[0.9583223348438702,0.41818181818181815],
[0.9764083129352442,0.4227272727272727],
[0.994667181797585,0.42727272727272725],
[1.0130895933004755,0.43181818181818177],
[1.0316685646314079,0.43636363636363634],
[1.0503916459394136,0.44090909090909086],
[1.0693197255594735,0.44545454545454544],
[1.0884751753670605,0.44999999999999996],
[1.1078459619266714,0.45454545454545453],
[1.1274212921012956,0.45909090909090905],
[1.1471912210728157,0.4636363636363636],
[1.1672381475728724,0.46818181818181814],
[1.1876051086050636,0.4727272727272727],
[1.2082757553386285,0.47727272727272724],
[1.229234509338984,0.4818181818181818],
[1.2504668822727296,0.48636363636363633],
[1.2719600781769054,0.49090909090909085],
[1.2936984266399743,0.4954545454545454],
[1.315672400877332,0.5],
]
 },
{ 
 name: "Carteira 5184",
 data: [
[0.5140430518085669,0.23636363636363633],
[0.5156027029259747,0.2409090909090909],
[0.5193181807843145,0.24545454545454543],
[0.5251437295508957,0.25],
[0.5330101673054805,0.2545454545454545],
[0.5428287682686532,0.2590909090909091],
[0.5544958405243329,0.2636363636363636],
[0.567897471130577,0.2681818181818182],
[0.5829140428539655,0.2727272727272727],
[0.5994241941333625,0.2772727272727273],
[0.6175872614557417,0.2818181818181818],
[0.6379952440142966,0.2863636363636364],
[0.6605133265725001,0.2909090909090909],
[0.6849354595825693,0.29545454545454547],
[0.7110648390825725,0.3],
[0.7387204140051871,0.3045454545454545],
[0.7677372887276847,0.3090909090909091],
[0.797966923455316,0.3136363636363636],
[0.8292767028576545,0.3181818181818182],
[0.8615488682875624,0.3227272727272727],
[0.8946792834712469,0.32727272727272727],
[0.9285761306203306,0.3318181818181818],
[0.9631703314635973,0.33636363636363636],
[0.9998145403356519,0.3409090909090909],
[1.0392070551660966,0.3454545454545454],
[1.0810483019712647,0.35],
[1.1250650008913339,0.3545454545454545],
[1.171011442720271,0.35909090909090907],
[1.2193933499360872,0.3636363636363636],
[1.2713446492694642,0.36818181818181817],
[1.326733874778514,0.3727272727272727],
[1.385148660805641,0.37727272727272726],
[1.4462224346732067,0.3818181818181818],
[1.5105768786804539,0.38636363636363635],
[1.579623206943024,0.3909090909090909],
[1.6528221834644727,0.39545454545454545],
[1.7296466658241139,0.39999999999999997],
[1.809634971810923,0.40454545454545454],
[1.8923867183057712,0.40909090909090906],
[1.9775528283740624,0.41363636363636364],
[2.064836677366987,0.41818181818181815],
[2.1539801632279936,0.4227272727272727],
[2.2484284783657302,0.42727272727272725],
[2.356741884666755,0.43181818181818177],
[2.47756276716699,0.43636363636363634],
[2.6091541704649486,0.44090909090909086],
[2.7499703581948065,0.44545454545454544],
[2.898667232080716,0.44999999999999996],
[3.054093931007985,0.45454545454545453],
[3.215274641798756,0.45909090909090905],
[3.3813866343057217,0.4636363636363636],
[3.551738079422743,0.46818181818181814],
[3.7257475041493016,0.4727272727272727],
[3.9029256731612048,0.47727272727272724],
[4.082882180535259,0.4818181818181818],
[4.2668853923593515,0.48636363636363633],
[4.455404161548539,0.49090909090909085],
[4.647889066423132,0.4954545454545454],
[4.843867312863184,0.5],
]
 },
{ 
 name: "Carteira 5423",
 data: [
[0.5262234391888301,0.2409090909090909],
[0.5283892364886195,0.24545454545454543],
[0.5342047954160111,0.25],
[0.5435528792908042,0.2545454545454545],
[0.5562541996551723,0.2590909090909091],
[0.5720850937812686,0.2636363636363636],
[0.5907941568044199,0.2681818181818182],
[0.6121178034514165,0.2727272727272727],
[0.6357929765819408,0.2772727272727273],
[0.6615670436595027,0.2818181818181818],
[0.6892045022017629,0.2863636363636364],
[0.7184869301305387,0.2909090909090909],
[0.7492276628498644,0.29545454545454547],
[0.7812518504989769,0.3],
[0.8144081027978842,0.3045454545454545],
[0.8485637297592333,0.3090909090909091],
[0.8836028472478761,0.3136363636363636],
[0.9194244491717682,0.3181818181818182],
[0.9559405768583011,0.3227272727272727],
[0.9930746176383207,0.32727272727272727],
[1.0314891300115991,0.3318181818181818],
[1.0722603796617798,0.33636363636363636],
[1.1152698410317081,0.3409090909090909],
[1.1610406151111967,0.3454545454545454],
[1.2094035664869434,0.35],
[1.2600614205791842,0.3545454545454545],
[1.3127480836039815,0.35909090909090907],
[1.367243289108377,0.3636363636363636],
[1.4260090684022273,0.36818181818181817],
[1.4913884638985235,0.3727272727272727],
[1.5625978959316569,0.37727272727272726],
[1.6388775944021903,0.3818181818181818],
[1.7195529372885665,0.38636363636363635],
[1.80403430912018,0.3909090909090909],
[1.891811888763912,0.39545454545454545],
[1.9824478823149396,0.39999999999999997],
[2.0755678594934595,0.40454545454545454],
[2.1708521880289955,0.40909090909090906],
[2.2680280983310306,0.41363636363636364],
[2.366862614730441,0.41818181818181815],
[2.4671564135333885,0.4227272727272727],
[2.568738571811078,0.42727272727272725],
[2.671649654897082,0.43181818181818177],
[2.7773029319624136,0.43636363636363634],
[2.8908400308659874,0.44090909090909086],
[3.014298807592363,0.44545454545454544],
[3.1465115966850385,0.44999999999999996],
[3.2864220459215714,0.45454545454545453],
[3.4330891641480026,0.45909090909090905],
[3.585683932430013,0.4636363636363636],
[3.7434815381951947,0.46818181818181814],
[3.9058514436106013,0.4727272727272727],
[4.072246760883593,0.47727272727272724],
[4.242193839598098,0.4818181818181818],
[4.415282570022713,0.48636363636363633],
[4.591157640812817,0.49090909090909085],
[4.769510824148192,0.4954545454545454],
[4.95007426507571,0.5],
]
 },
{ 
 name: "Carteira 4703",
 data: [
[0.5767491740338722,0.2636363636363636],
[0.5773525324758623,0.2681818181818182],
[0.5789332279575553,0.2727272727272727],
[0.5814832979668048,0.2772727272727273],
[0.5849900848759673,0.2818181818181818],
[0.5894365393970359,0.2863636363636364],
[0.5948016110224964,0.2909090909090909],
[0.601060711943616,0.29545454545454547],
[0.6081862374270781,0.3],
[0.6161481172656059,0.3045454545454545],
[0.624914370539322,0.3090909090909091],
[0.6344516410130775,0.3136363636363636],
[0.6447256972834292,0.3181818181818182],
[0.6557018865627082,0.3227272727272727],
[0.6673455347417018,0.32727272727272727],
[0.6796223298917997,0.3318181818181818],
[0.6924986027757579,0.33636363636363636],
[0.7059415073307183,0.3409090909090909],
[0.7199192239977709,0.3454545454545454],
[0.7344047721227728,0.35],
[0.749358384641425,0.3545454545454545],
[0.7647632934520617,0.35909090909090907],
[0.7805927779594438,0.3636363636363636],
[0.7968110977085336,0.36818181818181817],
[0.8134050577100587,0.3727272727272727],
[0.8303484273562988,0.37727272727272726],
[0.8476200402173997,0.3818181818181818],
[0.8652006830543344,0.38636363636363635],
[0.8830724512286061,0.3909090909090909],
[0.9012181195596359,0.39545454545454545],
[0.9196175885276733,0.39999999999999997],
[0.9382618465476481,0.40454545454545454],
[0.9571339765998462,0.40909090909090906],
[0.976220769677347,0.41363636363636364],
[0.9955098820390423,0.41818181818181815],
[1.014989781391229,0.4227272727272727],
[1.0346496927937772,0.42727272727272725],
[1.054499217201412,0.43181818181818177],
[1.0746155281397118,0.43636363636363634],
[1.0949972404547406,0.44090909090909086],
[1.1156273595362456,0.44545454545454544],
[1.136492553038517,0.44999999999999996],
[1.1575810779619078,0.45454545454545453],
[1.1788803162238353,0.45909090909090905],
[1.2003843111037102,0.4636363636363636],
[1.2221907941269237,0.46818181818181814],
[1.2443328894423016,0.4727272727272727],
[1.266790955437072,0.47727272727272724],
[1.2895509439539028,0.4818181818181818],
[1.3126411061112742,0.48636363636363633],
[1.3360722227030215,0.49090909090909085],
[1.3598282955578231,0.4954545454545454],
[1.383892683427714,0.5],
]
 },
{ 
 name: "Carteira 5942",
 data: [
[0.8653227510033643,0.39545454545454545],
[0.8660496379025634,0.39999999999999997],
[0.8675781310932636,0.40454545454545454],
[0.869904051700291,0.40909090909090906],
[0.8730209032750428,0.41363636363636364],
[0.8769202203606434,0.41818181818181815],
[0.881591622801041,0.4227272727272727],
[0.8870229070032926,0.42727272727272725],
[0.8931984839793303,0.43181818181818177],
[0.9001081971230852,0.43636363636363634],
[0.907727644937651,0.44090909090909086],
[0.9160482192886912,0.44545454545454544],
[0.9250404120610752,0.44999999999999996],
[0.9346932841193084,0.45454545454545453],
[0.9449838038979302,0.45909090909090905],
[0.9558913793153039,0.4636363636363636],
[0.9673951382815947,0.46818181818181814],
[0.9794740744321068,0.4727272727272727],
[0.9921071821726145,0.47727272727272724],
[1.0052735632930652,0.4818181818181818],
[1.018952549120694,0.48636363636363633],
[1.0331237807295748,0.49090909090909085],
[1.0477672822753616,0.4954545454545454],
[1.0628635366538453,0.5],
]
 },
{ 
 name: "Carteira 4878",
 data: [
[0.5480269632780514,0.25],
[0.5512464937608625,0.2545454545454545],
[0.558091402187812,0.2590909090909091],
[0.5684313687331877,0.2636363636363636],
[0.5820847961068997,0.2681818181818182],
[0.5988148108760314,0.2727272727272727],
[0.6183784972394718,0.2772727272727273],
[0.6405158524272406,0.2818181818181818],
[0.6649669909766938,0.2863636363636364],
[0.6914906709945424,0.2909090909090909],
[0.7198559816692823,0.29545454545454547],
[0.749853948885273,0.3],
[0.7812965339524544,0.3045454545454545],
[0.8140163491017739,0.3090909090909091],
[0.8478655345341757,0.3136363636363636],
[0.8827142577324819,0.3181818181818182],
[0.9184483950909391,0.3227272727272727],
[0.9560444170762606,0.32727272727272727],
[0.997235185850966,0.3318181818181818],
[1.0416340823199741,0.33636363636363636],
[1.088846830132646,0.3409090909090909],
[1.1385267766919849,0.3454545454545454],
[1.1903669508838806,0.35],
[1.2443964980808682,0.3545454545454545],
[1.3016433242133862,0.35909090909090907],
[1.3618908300800432,0.3636363636363636],
[1.4249684767488962,0.36818181818181817],
[1.4913884634759706,0.3727272727272727],
[1.5625978961586537,0.37727272727272726],
[1.6388775944021896,0.3818181818181818],
[1.7195529372885654,0.38636363636363635],
[1.8040343091201803,0.3909090909090909],
[1.8918118887639093,0.39545454545454545],
[1.982447882314939,0.39999999999999997],
[2.0755678594934586,0.40454545454545454],
[2.170852188028995,0.40909090909090906],
[2.268028098331031,0.41363636363636364],
[2.366862614730443,0.41818181818181815],
[2.4671564135333903,0.4227272727272727],
[2.5687385718111035,0.42727272727272725],
[2.6716496548969104,0.43181818181818177],
[2.7773029319624136,0.43636363636363634],
[2.890840030865989,0.44090909090909086],
[3.014298807592365,0.44545454545454544],
[3.1465115966850394,0.44999999999999996],
[3.2864220459215714,0.45454545454545453],
[3.433089164148003,0.45909090909090905],
[3.5856839324300123,0.4636363636363636],
[3.743481538195195,0.46818181818181814],
[3.9058514436106027,0.4727272727272727],
[4.072246760883596,0.47727272727272724],
[4.242193839598105,0.4818181818181818],
[4.4152825700227245,0.48636363636363633],
[4.591157640812829,0.49090909090909085],
[4.769510824148199,0.4954545454545454],
[4.950074265075714,0.5],
]
 },
{ 
 name: "Carteira 6002",
 data: [
[0.5821014052257083,0.2636363636363636],
[0.5828317103252729,0.2681818181818182],
[0.584551086804014,0.2727272727272727],
[0.5872440279195076,0.2772727272727273],
[0.5908939871337717,0.2818181818181818],
[0.5954916231414937,0.2863636363636364],
[0.6010115623961726,0.2909090909090909],
[0.6074286608835611,0.29545454545454547],
[0.6147148229807753,0.3],
[0.6228395492555885,0.3045454545454545],
[0.6317707223008933,0.3090909090909091],
[0.6414739690194003,0.3136363636363636],
[0.6519154924615445,0.3181818181818182],
[0.6630601940878548,0.3227272727272727],
[0.6748732388642242,0.32727272727272727],
[0.6873201668122455,0.3318181818181818],
[0.7003671824710312,0.33636363636363636],
[0.7139813892965847,0.3409090909090909],
[0.7281309728649263,0.3454545454545454],
[0.7427853380569924,0.35],
[0.7579152054310095,0.3545454545454545],
[0.7734926723754345,0.35909090909090907],
[0.7894936677022051,0.3636363636363636],
[0.8058875634823484,0.36818181818181817],
[0.8226537282326443,0.3727272727272727],
[0.8397700958870536,0.37727272727272726],
[0.8572158654509533,0.3818181818181818],
[0.8749714594826614,0.38636363636363635],
[0.89301838399519,0.3909090909090909],
[0.9113391859451238,0.39545454545454545],
[0.9299174990936205,0.39999999999999997],
[0.9487352198485701,0.40454545454545454],
[0.9677833344394174,0.40909090909090906],
[0.9870464542563908,0.41363636363636364],
[1.0065122347519784,0.41818181818181815],
[1.0261712485587087,0.4227272727272727],
[1.0460075442485457,0.42727272727272725],
[1.0660189606770842,0.43181818181818177],
[1.0861823841951985,0.43636363636363634],
[1.1065067907478199,0.44090909090909086],
[1.1269744619178514,0.44545454545454544],
[1.1476683455289074,0.44999999999999996],
[1.168593731232239,0.45454545454545453],
[1.189738877356854,0.45909090909090905],
[1.211092137450661,0.4636363636363636],
[1.2326427048847064,0.46818181818181814],
[1.2543804040151925,0.4727272727272727],
[1.2762956732331436,0.47727272727272724],
[1.2983795210174744,0.4818181818181818],
[1.3206234904849696,0.48636363636363633],
[1.3430210809536336,0.49090909090909085],
[1.3656074645766911,0.4954545454545454],
[1.3885225058686408,0.5],
]
 },
{ 
 name: "Carteira 3833",
 data: [
[0.5820979395856103,0.2636363636363636],
[0.5828327044319267,0.2681818181818182],
[0.5845483188700272,0.2727272727272727],
[0.5872429807827604,0.2772727272727273],
[0.5908972516609928,0.2818181818181818],
[0.5954946784201209,0.2863636363636364],
[0.6010145676355912,0.2909090909090909],
[0.6074317193836231,0.29545454545454547],
[0.6147179333069918,0.3],
[0.6228427015303252,0.3045454545454545],
[0.6317736724935284,0.3090909090909091],
[0.641477173471638,0.3136363636363636],
[0.6519187085951915,0.3181818181818182],
[0.663063411750822,0.3227272727272727],
[0.6748764474219111,0.32727272727272727],
[0.6873233557098467,0.3318181818181818],
[0.7003703410258623,0.33636363636363636],
[0.713984506313358,0.3409090909090909],
[0.7281340362204013,0.3454545454545454],
[0.7427883340437944,0.35],
[0.7579181176634441,0.3545454545454545],
[0.7734954798272073,0.35909090909090907],
[0.7894939180429639,0.3636363636363636],
[0.8058883382780571,0.36818181818181817],
[0.8226550356722397,0.3727272727272727],
[0.8397716545668978,0.37727272727272726],
[0.8572199333268233,0.3818181818181818],
[0.8749727509708536,0.38636363636363635],
[0.8930181277177919,0.3909090909090909],
[0.9113391950293854,0.39545454545454545],
[0.9299192141521867,0.39999999999999997],
[0.9487368003285349,0.40454545454545454],
[0.9677850802458223,0.40909090909090906],
[0.9870481914672102,0.41363636363636364],
[1.0065138849797763,0.41818181818181815],
[1.0261706643294413,0.4227272727272727],
[1.046007774365421,0.42727272727272725],
[1.0660151585136868,0.43181818181818177],
[1.0861834144831002,0.43636363636363634],
[1.1065037507611706,0.44090909090909086],
[1.1269751967674035,0.44545454545454544],
[1.1476684046894423,0.44999999999999996],
[1.1685947775255767,0.45454545454545453],
[1.1897390105155403,0.45909090909090905],
[1.211092565448684,0.4636363636363636],
[1.2326429001263126,0.46818181818181814],
[1.2543806514753344,0.4727272727272727],
[1.2762957580210408,0.47727272727272724],
[1.2983798422440698,0.4818181818181818],
[1.320623758837762,0.48636363636363633],
[1.343020848179723,0.49090909090909085],
[1.36560720932348,0.4954545454545454],
[1.3885222550905998,0.5],
]
 },
{ 
 name: "Carteira 4331",
 data: [
[0.5379695764356326,0.24545454545454543],
[0.5403525923771644,0.25],
[0.5448446087822013,0.2545454545454545],
[0.5513940748527171,0.2590909090909091],
[0.5599288082247209,0.2636363636363636],
[0.5704925552295081,0.2681818181818182],
[0.5836901779316367,0.2727272727272727],
[0.5994524895405852,0.2772727272727273],
[0.6175871629710397,0.2818181818181818],
[0.6379944586397475,0.2863636363636364],
[0.6605132699061347,0.2909090909090909],
[0.684935432221481,0.29545454545454547],
[0.7110680907988473,0.3],
[0.7387214841708345,0.3045454545454545],
[0.7677378921157814,0.3090909090909091],
[0.7979666135555298,0.3136363636363636],
[0.8292762643537874,0.3181818181818182],
[0.8615482546307134,0.3227272727272727],
[0.894678479941478,0.32727272727272727],
[0.9285750636421283,0.3318181818181818],
[0.9631707429200952,0.33636363636363636],
[0.9998143302987615,0.3409090909090909],
[1.0392068938556418,0.3454545454545454],
[1.0810480844803765,0.35],
[1.125065225251311,0.3545454545454545],
[1.1710115360619338,0.35909090909090907],
[1.2193935339818596,0.3636363636363636],
[1.2713450643570763,0.36818181818181817],
[1.3267338923204552,0.3727272727272727],
[1.3851486604609327,0.37727272727272726],
[1.4462224335182434,0.3818181818181818],
[1.5105768785016283,0.38636363636363635],
[1.5796232069430225,0.3909090909090909],
[1.652822183464472,0.39545454545454545],
[1.729646665819829,0.39999999999999997],
[1.8096349718109208,0.40454545454545454],
[1.892385953765944,0.40909090909090906],
[1.9775528283740622,0.41363636363636364],
[2.0648366773669853,0.41818181818181815],
[2.153980163227993,0.4227272727272727],
[2.2484284783657293,0.42727272727272725],
[2.3567418846667536,0.43181818181818177],
[2.47756276716699,0.43636363636363634],
[2.6091541704649486,0.44090909090909086],
[2.749970358194805,0.44545454545454544],
[2.8986672320807134,0.44999999999999996],
[3.0540939310079835,0.45454545454545453],
[3.2152746417987563,0.45909090909090905],
[3.3813866343057213,0.4636363636363636],
[3.5517380794227433,0.46818181818181814],
[3.725747504149303,0.4727272727272727],
[3.9029256731612083,0.47727272727272724],
[4.082882180535257,0.4818181818181818],
[4.266885392359354,0.48636363636363633],
[4.455404161548536,0.49090909090909085],
[4.6478890664231285,0.4954545454545454],
[4.843867312863183,0.5],
]
 },
{ 
 name: "Carteira 3678",
 data: [
[0.5058425153287965,0.2318181818181818],
[0.5090008610946537,0.23636363636363633],
[0.5143674699137444,0.2409090909090909],
[0.521874432654596,0.24545454545454543],
[0.5314311063549233,0.25],
[0.5429292760000772,0.2545454545454545],
[0.5562534101007379,0.2590909090909091],
[0.572084309075777,0.2636363636363636],
[0.5907932895226214,0.2681818181818182],
[0.6121164317091684,0.2727272727272727],
[0.6357940305460781,0.2772727272727273],
[0.6615657214341346,0.2818181818181818],
[0.6892015016571534,0.2863636363636364],
[0.7184884821544746,0.2909090909090909],
[0.7492277576106201,0.29545454545454547],
[0.781252046836636,0.3],
[0.8144084263308194,0.3045454545454545],
[0.8485641919416795,0.3090909090909091],
[0.8836034615043907,0.3136363636363636],
[0.9194251665173464,0.3181818181818182],
[0.9559413959499364,0.3227272727272727],
[0.9930755023149387,0.32727272727272727],
[1.031487457765902,0.3318181818181818],
[1.0722605450619977,0.33636363636363636],
[1.115269583150539,0.3409090909090909],
[1.1610401114500668,0.3454545454545454],
[1.2094035663987066,0.35],
[1.2600614205791818,0.3545454545454545],
[1.3127480836039824,0.35909090909090907],
[1.3672438843081531,0.3636363636363636],
[1.4260090684180347,0.36818181818181817],
[1.4913884634619279,0.3727272727272727],
[1.562597895931656,0.37727272727272726],
[1.6388775944021887,0.3818181818181818],
[1.7195529372885665,0.38636363636363635],
[1.8040343091201794,0.3909090909090909],
[1.8918118887639108,0.39545454545454545],
[1.9824486662491383,0.39999999999999997],
[2.0755678594934586,0.40454545454545454],
[2.170852188028996,0.40909090909090906],
[2.2680280983310297,0.41363636363636364],
[2.366862614730442,0.41818181818181815],
[2.46715641353339,0.4227272727272727],
[2.568738571811077,0.42727272727272725],
[2.6716496549018682,0.43181818181818177],
[2.777302931962411,0.43636363636363634],
[2.890840030865987,0.44090909090909086],
[3.014298807592363,0.44545454545454544],
[3.146511596685038,0.44999999999999996],
[3.2864220459215727,0.45454545454545453],
[3.4330891641480044,0.45909090909090905],
[3.585683932430012,0.4636363636363636],
[3.7434815381951947,0.46818181818181814],
[3.9058514436106013,0.4727272727272727],
[4.072246760883598,0.47727272727272724],
[4.242193839598102,0.4818181818181818],
[4.415282570022724,0.48636363636363633],
[4.5911576408128285,0.49090909090909085],
[4.769510824148201,0.4954545454545454],
[4.950074265075717,0.5],
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