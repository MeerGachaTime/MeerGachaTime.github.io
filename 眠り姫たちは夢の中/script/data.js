
function localSave(){
 for(var elem in blocks){
  localStorage.setItem(elem+"Block", blocks[elem].name);
 }
 for(var elem in event){
  localStorage.setItem(elem+"Event", event[elem].happen);
 }
 for(var elem in heros){
  localStorage.setItem(elem+"Costume", heros[elem].costume);
 }
 localStorage.setItem("selectHeroLocal", selectHero);
 localStorage.setItem("selectEquipmentLocal", selectEquipment);
 localStorage.setItem("levelLocal", level);
 localStorage.setItem("restPosi0Local", restPosi[0]);
 localStorage.setItem("restPosi1Local", restPosi[1]);console.log(localStorage.getItem('restPosi1Local'));
 localStorage.setItem("restPosi2Local", restPosi[2]);
 localStorage.setItem("fontSizeLocal", fontSize);
 localStorage.setItem("buttonLocal", buttonSize);
 localStorage.setItem("pcOrPhoneLocal", pcOrPhone);
 localStorage.setItem("helpAppLocal", helpApp);
 
 console.log(localStorage.getItem('restPosi1Local'));
 /*
 event.happen
 blocks[].name
 selectEquipment
 f_checkPoint→f_returnAdventureから始める（攻撃力や体力を反映させるため）
 level(難易度)
 restPosi（スタートする場所）
 fontSize
 buttonSize
 pcOrPhone
 helpApp
 */
}

function localLoad(){
 for(var elem in blocks){
  blocks[elem].name=localStorage.getItem(elem+'Block');
 }
 for(var elem in event){
  event[elem].happen=Number(localStorage.getItem(elem+'Event'));
 }
 for(var elem in heros){
  heros[elem].costume=localStorage.getItem(elem+'Costume');
 }
 selectHero=localStorage.getItem('selectHeroLocal');
 selectEquipment=localStorage.getItem('selectEquipmentLocal');
 level=Number(localStorage.getItem('levelLocal'));
 restPosi[0]=Number(localStorage.getItem('restPosi0Local'));
 restPosi[1]=Number(localStorage.getItem('restPosi1Local'));console.log(restPosi[1]);
 restPosi[2]=localStorage.getItem('restPosi2Local');
 fontSize=Number(localStorage.getItem('fontSizeLocal'));
 buttonSize=Number(localStorage.getItem('buttonLocal'));
 pcOrPhone=localStorage.getItem('pcOrPhoneLocal');
 helpApp=localStorage.getItem('helpAppLocal');
 var windowH = window.innerHeight*0.95;
 windowW=windowH*1.817;
 var windowL = String((window.innerWidth-windowW)/2)+"px";
 windowLN=(window.innerWidth-windowW)/2;
 document.documentElement.style.setProperty('--homeColor', localStorage.getItem("localColor"));console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont2'  , windowH*0.01*fontSize*0.5+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont3'  , windowH*0.01*fontSize*0.6+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont3_5', windowH*0.01*fontSize*0.7+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont4'  , windowH*0.01*fontSize*0.8+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont4_5', windowH*0.01*fontSize*0.9+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont5'  , windowH*0.01*fontSize*1.0+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--speechFont6'  , windowH*0.01*fontSize*1.2+"px");console.log(restPosi);
 document.documentElement.style.setProperty('--controllerButton1', Number(windowLN)*buttonSize+"px");
 document.documentElement.style.setProperty('--controllerButton4', Number(windowLN)/2*buttonSize+"px");
 document.documentElement.style.setProperty('--controllerButton4L', -1*windowLN+"px");
 document.documentElement.style.setProperty('--controllerButton5L', -1*Number(windowLN)/2*(2-buttonSize)+"px");
 document.documentElement.style.setProperty('--buttonPosi', windowW-(Number(windowLN)*(buttonSize-1))+"px");
 document.documentElement.style.setProperty('--helpSide', Number(windowLN)*(buttonSize-1)+windowW*0.02+"px");
 switch(selectEquipment){
  case "なし":
   MaxHP=100;
   heros[selectHero].attack=10;
  break;
  case "ふわふわとびばこ":
   MaxHP=120;
   heros[selectHero].attack=10;
  break;
  case "ねこよりとろけるメロン":
   MaxHP=100;
   heros[selectHero].attack=10;
  break;
  case "ふんわりチョコけしごむ":
   MaxHP=100;
   heros[selectHero].attack=12;
  break;
  case "まっくろたんぽぽ":
   MaxHP=50;
   heros[selectHero].attack=20;
  break;
 }
 heroPosi=[restPosi[0],restPosi[1]];console.log("restPosi:"+restPosi+",heroPosi:"+heroPosi)
 selectStage=restPosi[2];console.log(restPosi);
 /*
 document.documentElement.style.setProperty('--homeColor', localStorage.getItem("localColor"));
 
 document.documentElement.style.setProperty('--speechFont2'  , windowH*0.01*fontSize*0.5+"px");
 document.documentElement.style.setProperty('--speechFont3'  , windowH*0.01*fontSize*0.6+"px");
 document.documentElement.style.setProperty('--speechFont3_5', windowH*0.01*fontSize*0.7+"px");
 document.documentElement.style.setProperty('--speechFont4'  , windowH*0.01*fontSize*0.8+"px");
 document.documentElement.style.setProperty('--speechFont4_5', windowH*0.01*fontSize*0.9+"px");
 document.documentElement.style.setProperty('--speechFont5'  , windowH*0.01*fontSize*1.0+"px");
 document.documentElement.style.setProperty('--speechFont6'  , windowH*0.01*fontSize*1.2+"px");
 
 document.documentElement.style.setProperty('--controllerButton4', Number(windowLN)/2*buttonSize+"px");
 document.documentElement.style.setProperty('--controllerButton4L', -1*windowLN+"px");
 document.documentElement.style.setProperty('--controllerButton5L', -1*Number(windowLN)/2*(2-buttonSize)+"px");
 document.documentElement.style.setProperty('--buttonPosi', windowW-(Number(windowLN)*(buttonSize-1))+"px");
 */
}

function f_restartB(){
 blocks["marionette"].name="marionetteA";
 blocks["marionetteB"].name="marionetteD";
 blocks["skeleton"].name="skeletonC";
 blocks["skeletonB"].name="skeletonA";
 blocks["mother"].name="mother";
 blocks["lastBoss"].name="lastBossA";
 blocks["lastBossB"].name="lastBossB";
 blocks["princess"].name="princessA";
 blocks["princess"].name="princessC";
 blocks["niziiro"].name="niziiro";
 blocks["luruca"].name="luruca";
 blocks["angel"].name="angel";
 blocks["eventBlockA"].name="eventBlock";
 blocks["eventBlockB"].name="eventBlock";
 blocks["door"].name="door";
 blocks["giraffeB"].name="rock_giraffe";
 blocks["giraffeC"].name="rock_giraffe";
 blocks["giraffeE"].name="rock_giraffe";
 blocks["hamsterA"].name="hamster";
 blocks["hamsterB"].name="hamster";
 blocks["hamsterC"].name="hamster";
 blocks["hamsterD"].name="hamster";
 blocks["hamsterE"].name="hamster";
 blocks["itemB"].name="item";
 blocks["partA"].name="part";
 blocks["partB"].name="part";
 blocks["partC"].name="part";
 blocks["partD"].name="part";
 blocks["partE"].name="part";
 blocks["partF"].name="part";
 blocks["partG"].name="part";
 blocks["partH"].name="part";
 blocks["sweetB"].name="sweet";
 blocks["sweetD"].name="sweet";
 blocks["sweetF"].name="sweet";
 blocks["sweetG"].name="sweet";
 blocks["sweetI"].name="sweet";
 blocks["sweetJ"].name="sweet";
 blocks["sweetK"].name="sweet";
 blocks["dreamRockA"].name="dreamRock";
 blocks["dreamRockB"].name="dreamRock";
 blocks["dreamRockC"].name="dreamRock";
 for(var elem in event){
  if(elem!="dreamMachine"&&elem!="nikolaEncount"&&elem!="lyricaEncount"&&elem!="aliceEncount"&&elem!="amairoEncount"&&elem!="pierreEncount"&&elem!="thirteenEncount"&&elem!="coclicoEncount"&&elem!="niziiro"&&elem!="luruca"&&elem!="angel"&&elem!="allClear"){
   event[elem].happen=0;
  }
 }
 localSave();
 selectStage="coclicoDream9";
 heroPosi[8,5];
 setTimeout(function(){f_stageChange();},500);
 setTimeout(function(){f_returnAdventure();lacalSave();},1300);
}

function f_restartC(){console.log("c");
blocks={"0"         :{name:"0"           },
        "alice"     :{name:"alice"       },
        "amairo"     :{name:"amairo"     },
        "coclico"   :{name:"coclico"     },
        "lyrica"    :{name:"lyrica"      },
        "marcos"    :{name:"marcos"      },
        "nikola"    :{name:"nikola"      },
        "thirteen"  :{name:"thirteen"    },
        "pierre"    :{name:"pierre"      },
        "rabit"     :{name:"rabit"       },
        "bear"      :{name:"bear"        },
        "devil"     :{name:"devil"       },
        "omochi"    :{name:"omochi"      },
        "sheep"     :{name:"sheep"       },
        "rabitEX"   :{name:"rabitEX"     },
        "bearEX"    :{name:"bearEX"      },
        "marionette":{name:"marionetteA" },
       "marionetteB":{name:"marionetteD" },
        "skeleton"  :{name:"skeletonC"   },
        "skeletonB" :{name:"skeletonA"   },
        "mother"    :{name:"mother"      },
        "lastBoss"  :{name:"lastBossA"   },
        "lastBossA" :{name:"0"           },
        "lastBossB" :{name:"lastBossB"   },
        "lastBossC" :{name:"0"           },
        "princessA" :{name:"princess"    },
        "princess"  :{name:"princessC"   },
        "niziiro"   :{name:"niziiro"     },
        "luruca"    :{name:"luruca"      },
        "angel"     :{name:"angel"       },
       "eventBlockA":{name:"eventBlock"  },
       "eventBlockB":{name:"eventBlock"  },
        "mirror"    :{name:"mirror"      },
        "door"      :{name:"door"        },
        "splinter"  :{name:"splinter"    },
        "giraffeA"  :{name:"giraffe"     },
        "giraffeB"  :{name:"rock_giraffe"},
        "giraffeC"  :{name:"rock_giraffe"},
        "giraffeD"  :{name:"giraffe"     },
        "giraffeE"  :{name:"rock_giraffe"},
        "hamsterA"  :{name:"hamster"     },
        "hamsterB"  :{name:"hamster"     },
        "hamsterC"  :{name:"hamster"     },
        "hamsterD"  :{name:"hamster"     },
        "hamsterE"  :{name:"hamster"     },
        "itemA"     :{name:"item"        ,item:"ふわふわとびばこ"      },
        "itemB"     :{name:"item"        ,item:"壊れた懐中時計"        },
        "itemD"     :{name:"item"        ,item:"ふんわりチョコけしごむ"},
        "itemE"     :{name:"item"        ,item:"まっくろたんぽぽ"      },
        "itemF"     :{name:"item"        ,item:"夢の欠片"              },
        "itemG"     :{name:"item"        ,item:"夢の欠片"              },
        "itemH"     :{name:"item"        ,item:"夢の欠片"              },
        "partA"     :{name:"part"        },
        "partB"     :{name:"part"        },
        "partC"     :{name:"part"        },
        "partD"     :{name:"part"        },
        "partE"     :{name:"part"        },
        "partF"     :{name:"part"        },
        "partG"     :{name:"part"        },
        "partH"     :{name:"part"        },
        "sweetA"    :{name:"sweet"       },//マルコスコスチューム
        "sweetB"    :{name:"sweet"       },//パーツ
        "sweetC"    :{name:"sweet"       },//テスラコスチューム
        "sweetD"    :{name:"sweet"       },//パーツ
        "sweetE"    :{name:"sweet"       },//メロン
        "sweetF"    :{name:"sweet"       },//パーツ
        "sweetG"    :{name:"sweet"       },//パーツ
        "sweetH"    :{name:"sweet"       },//夢の欠片
        "sweetI"    :{name:"sweet"       },//パーツ
        "sweetJ"    :{name:"sweet"       },//パーツ
        "sweetK"    :{name:"sweet"       },//パーツ
        "sweetL"    :{name:"sweet"       },//ピエールコスチューム
        "sweetM"    :{name:"sweet"       },//アリスコスチューム
        "dreamRockA":{name:"dreamRock"   },
        "dreamRockB":{name:"dreamRock"   },
        "dreamRockC":{name:"dreamRock"   },
       }
event={"damage":{happen:0},
       "jump":{happen:0},
       "giraffe":{happen:0},
       "rock_giraffeClear":{happen:0},
       "mirrorClear":{happen:0},
       "sweetClear":{happen:0},
       "hamsterClear":{happen:0},
       "allClear":{happen:0},
       "dreamRock":{happen:0},
       "dreamMachine":{happen:0},
       "nikolaEncount":{happen:0},
       "lyricaEncount":{happen:0},
       "aliceEncount":{happen:0},
       "amairoEncount":{happen:0},
       "pierreEncount":{happen:0},
       "thirteenEncount":{happen:0},
       "coclicoEncount":{happen:0},
       "marionette":{happen:0},
       "skeleton":{happen:0},
       "lastBoss":{happen:0},
       "princess":{happen:0},
       "niziiro":{happen:0},
       "luruca":{happen:0},
       "angel":{happen:0},
       
       "stage1":{happen:0},
       "stage2":{happen:0},
       "stage3":{happen:0},
       "stage4":{happen:0},
       "stage5":{happen:0},
       "stage6":{happen:0},
       "stage7":{happen:0},
       "stage8":{happen:0},
       "stage9":{happen:1},
       "stage10":{happen:0},
       "stage11":{happen:0},
       "stage12":{happen:0},
       
       "freeTalk1" :{happen:0},
       "freeTalk2" :{happen:0},
       "freeTalk3" :{happen:0},
       "freeTalk4" :{happen:0},
       "freeTalk5" :{happen:0},
       "freeTalk6" :{happen:0},
       "freeTalk7" :{happen:0},
       "freeTalk8" :{happen:0},
       "freeTalk9" :{happen:0},
       "freeTalk10":{happen:0},
       "freeTalk11":{happen:0},
       "freeTalk12":{happen:0},
       "freeTalk13":{happen:0},
       "freeTalk14":{happen:0},
       "freeTalk15":{happen:0},
       "freeTalk16":{happen:0},
       "freeTalk17":{happen:0},
       "freeTalk18":{happen:0},
       "freeTalk19":{happen:0},
       "freeTalk20":{happen:0},
       "freeTalk21":{happen:0},
       "freeTalk22":{happen:0},
       "freeTalk23":{happen:0},
       "freeTalk24":{happen:0},
       "freeTalk25":{happen:0},
       "freeTalk26":{happen:0},
       "freeTalk27":{happen:0},
       "freeTalk28":{happen:0},
       "freeTalk29":{happen:0},
       "freeTalk30":{happen:0},
       "freeTalk31":{happen:0},
       "freeTalk32":{happen:0},
       "freeTalk33":{happen:0},
       "freeTalk34":{happen:0},
      }
heros={
       "marcos"      :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "nikola"      :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "lyrica"      :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "alice"       :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "amairo"      :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "pierre"      :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "thirteen"    :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
       "coclico"     :{usable:0,attack:10 ,costume:"オリジナル",walkNum:2,battleSkillGauge:30},
      }
dataBaseList={"マルコス’55"            :{get:1,img:"marcos"       ,detail:"marcosData1"},
              "二コラ　テスラ"          :{get:0,img:"nikola"       ,detail:"nikolaData1"},
              "リリカ"                  :{get:0,img:"lyrica"       ,detail:"lyricaData1"},
              "青春アリス"              :{get:0,img:"alice"        ,detail:"aliceData1"},
              "狐ヶ咲甘色"              :{get:0,img:"amairo"       ,detail:"amairoData1"},
              "ピエール77世"            :{get:0,img:"pierre"       ,detail:"pierreData1"},
              "13†サーティーン†"      :{get:0,img:"thirteen"     ,detail:"thirteenData1"},
              "コクリコット　ブランシュ":{get:0,img:"coclico"      ,detail:"coclicoData1"},
              "ぴんくのきりん"          :{get:1,img:"giraffe"      ,detail:"giraffeData1"},
              "石化しているキリン"      :{get:0,img:"rock_giraffe" ,detail:"rockData1"},
              "鏡"                      :{get:0,img:"mirror"       ,detail:"mirrorData1"},
              "囁くお菓子"              :{get:0,img:"sweet"        ,detail:"sweetData1"},
              "はらぺこはむすたー"      :{get:0,img:"hamster"      ,detail:"hamsterData1"},
              "とげ"                    :{get:0,img:"splinter"     ,detail:"splinterData1"},
              "びりびりうさぎ"          :{get:0,img:"rabit"        ,detail:"rabitData1"},
              "嗤い熊"                  :{get:0,img:"bear"         ,detail:"bearData1"},
              "赤い羊"                  :{get:0,img:"sheep"        ,detail:"sheepData1"},
              "焦がれゆく夢魔"          :{get:0,img:"devil"        ,detail:"devilData1"},
              "かぶりつきおもち"        :{get:0,img:"omochi"       ,detail:"omochiData1"},
              "びりびりうさぎEX"        :{get:0,img:"rabitEX"      ,detail:"rabitEXData1"},
              "嗤い熊EX"                :{get:0,img:"bearEX"       ,detail:"bearEXData1"},
              "茨のマリオネット"        :{get:0,img:"marionetteD"  ,detail:"marionetteData1"},
              "髑髏"                    :{get:0,img:"skeletonA"    ,detail:"skeletonData1"},
              "永遠の眠り姫"            :{get:0,img:"princess"     ,detail:"princessData1"},
              "狐ヶ咲虹色"              :{get:0,img:"niziiro"      ,detail:"niziiroData1"},
              "ルルカ"                  :{get:0,img:"luruca"       ,detail:"lurucaData1"},
              "影月宮天使長？"          :{get:0,img:"angel"        ,detail:"angelData1"},
              "ミオソティス？"          :{get:0,img:"lastBossA"    ,detail:"LBData1"},
              "壊れた懐中時計"          :{get:0,img:"item"         ,detail:"brokenClocData1"},
              "懐中時計のパーツ"        :{get:0,img:"item"         ,detail:"partData1"},
              "命の懐中時計"            :{get:0,img:"item"         ,detail:"clockData1"},
              "ふわふわとびばこ"        :{get:0,img:"item"         ,detail:"tobibakoData1"},
              "ねこよりとろけるメロン"  :{get:0,img:"item"         ,detail:"melonData1"},
              "ふんわりチョコけしごむ"  :{get:0,img:"item"         ,detail:"eraserData1"},
              "まっくろたんぽぽ"        :{get:0,img:"item"         ,detail:"tanpopoData1"},
             }
 BGM1.pause();
 BGM2.pause();
 BGM3.pause();
 BGM4.pause();
 BGM5.pause();
 heroPosi=[8,5];//[y,x]...[8,5]
 restPosi=[8,5,"coclicoDream9"];
 selectEquipment="なし";
 selectHero="marcos";
 selectBack=f_arrayMake(coclicoDream9Back);
 selectGimmick=f_arrayMake(coclicoDream9Gimmick);
 selectHit=f_arrayMake(coclicoDream9Hit);
 selectFront=f_arrayMake(coclicoDream9Front);
 selectStage="coclicoDream9";
 setTimeout(function(){f_stageChange();},200);
 setTimeout(function(){f_firstCheck(0);},1000);
}

function f_dataReflect(){
 heros["marcos"].usable=1;
 if(event["nikolaEncount"].happen){heros["nikola"].usable=1;    dataBaseList["二コラ　テスラ"].get=1;          }
 if(event["lyricaEncount"].happen){heros["lyrica"].usable=1;    dataBaseList["リリカ"].get=1;                  dataBaseList["びりびりうさぎ"].get=1;  if(blocks["itemA"].name=="0"){dataBaseList["ふわふわとびばこ"].get=1;}}
 if(event["aliceEncount"].happen ){heros["alice"].usable=1;     dataBaseList["青春アリス"].get=1;              dataBaseList["焦がれゆく夢魔"].get=1;  dataBaseList["赤い羊"].get=1;}
 if(event["amairoEncount"].happen){heros["amairo"].usable=1;    dataBaseList["狐ヶ咲甘色"].get=1;              dataBaseList["嗤い熊"].get=1;          if(blocks["itemD"].name=="0"){dataBaseList["ふんわりチョコけしごむ"].get=1;}}
 if(event["pierreEncount"].happen){heros["pierre"].usable=1;    dataBaseList["ピエール77世"].get=1;            dataBaseList["かぶりつきおもち"].get=1;}
 if(event["thirteenEncount"].happen){heros["thirteen"].usable=1;dataBaseList["13†サーティーン†"].get=1;      if(blocks["itemE"].name=="0"){dataBaseList["まっくろたんぽぽ"].get=1;}      dataBaseList["びりびりうさぎEX"].get=1;  }
 if(event["coclicoEncount"].happen){heros["coclico"].usable=1;  dataBaseList["コクリコット　ブランシュ"].get=1;dataBaseList["とげ"].get=1;            if(blocks["sweetE"].name=="0"){dataBaseList["ねこよりとろけるメロン"].get=1;}dataBaseList["嗤い熊EX"].get=1;}
 if(event["marionette"].happen){dataBaseList["茨のマリオネット"].get=1;}
 if(event["skeleton"].happen){dataBaseList["髑髏"].get=1;}
 if(event["princess"].happen){dataBaseList["永遠の眠り姫"].get=1;}
 if(event["niziiro"].happen){dataBaseList["狐ヶ咲虹色"].get=1;}
 if(event["luruca"].happen){dataBaseList["ルルカ"].get=1;}
 if(event["angel"].happen){dataBaseList["影月宮天使長？"].get=1;}
 if(event["lastBoss"].happen){dataBaseList["ミオソティス？"].get=1;}
 
 if(blocks["itemB"].name=="0"){dataBaseList["壊れた懐中時計"].get=1;}
 if(event["rock_giraffeClear"].happen){dataBaseList["石化しているキリン"].get=1;}
 if(event["mirrorClear"].happen){dataBaseList["鏡"].get=1;}
 if(event["sweetClear"].happen){dataBaseList["囁くお菓子"].get=1;}
 if(event["hamsterClear"].happen){dataBaseList["はらぺこはむすたー"].get=1;}
 
 partNum=0;
 if(blocks["partA"].name=="0"){partNum+=1;}
 if(blocks["partB"].name=="0"){partNum+=1;}
 if(blocks["partC"].name=="0"){partNum+=1;}
 if(blocks["partD"].name=="0"){partNum+=1;}
 if(blocks["partE"].name=="0"){partNum+=1;}
 if(blocks["partF"].name=="0"){partNum+=1;}
 if(blocks["partG"].name=="0"){partNum+=1;}
 if(blocks["partH"].name=="0"){partNum+=1;}
 if(blocks["sweetB"].name=="0"){partNum+=1;}
 if(blocks["sweetD"].name=="0"){partNum+=1;}
 if(blocks["sweetF"].name=="0"){partNum+=1;}
 if(blocks["sweetG"].name=="0"){partNum+=1;}
 if(blocks["sweetI"].name=="0"){partNum+=1;}
 if(blocks["sweetJ"].name=="0"){partNum+=1;}
 if(blocks["sweetK"].name=="0"){partNum+=1;}
 
 clearRate=partNum;
 if(blocks["alice"].name=="0"){clearRate+=1;}
 if(blocks["amairo"].name=="0"){clearRate+=1;}
 if(blocks["coclico"].name=="0"){clearRate+=1;}
 if(blocks["lyrica"].name=="0"){clearRate+=1;}
 if(blocks["nikola"].name=="0"){clearRate+=1;}
 if(blocks["thirteen"].name=="0"){clearRate+=1;}
 if(blocks["pierre"].name=="0"){clearRate+=1;}
 if(blocks["itemA"].name=="0"){clearRate+=1;}
 if(blocks["itemB"].name=="0"){clearRate+=1;}
 if(blocks["itemD"].name=="0"){clearRate+=1;}
 if(blocks["itemE"].name=="0"){clearRate+=1;}
 if(blocks["itemF"].name=="0"){clearRate+=1;}
 if(blocks["itemG"].name=="0"){clearRate+=1;}
 if(blocks["itemH"].name=="0"){clearRate+=1;}
 if(blocks["sweetA"].name=="0"){clearRate+=1;}
 if(blocks["sweetC"].name=="0"){clearRate+=1;}
 if(blocks["sweetE"].name=="0"){clearRate+=1;}
 if(blocks["sweetH"].name=="0"){clearRate+=1;}
 if(blocks["sweetL"].name=="0"){clearRate+=1;}
 if(blocks["sweetM"].name=="0"){clearRate+=1;}
 if(blocks["dreamRockA"].name=="0"){clearRate+=1;}
 if(blocks["dreamRockB"].name=="0"){clearRate+=1;}
 if(blocks["dreamRockC"].name=="0"){clearRate+=1;}
 if(event["marionette"].happen==1){clearRate+=1;}
 if(event["skeleton"].happen==1){clearRate+=1;}
 if(event["princess"].happen==1){clearRate+=1;}
 if(event["lastBoss"].happen==1){clearRate+=1;}
 
 clearRate=clearRate/42*100
 if(Math.round(clearRate)>=100&&!event["allClear"].happen){
  event["allClear"].happen=1;
  f_popUpN("null","ゲームクリア率が100%になりました。コクリコのコスチュームを獲得しました。");
 }
}

