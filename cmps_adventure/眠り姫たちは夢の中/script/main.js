heroPosi=[8,5];//[y,x]...[8,5]
restPosi=[8,5,"coclicoDream9"];console.log(heroPosi);
selectEquipment="なし";
selectHero="marcos";
selectBack=f_arrayMake(coclicoDream9Back);
selectGimmick=f_arrayMake(coclicoDream9Gimmick);
selectHit=f_arrayMake(coclicoDream9Hit);
selectFront=f_arrayMake(coclicoDream9Front);
selectStage="coclicoDream9";
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

enemies={"rabit"     :{HP:20 ,attack:10 },
         "bear"      :{HP:50 ,attack:30 },
         "sheep"     :{HP:35 ,attack:10 },
         "devil"     :{HP:20 ,attack:15 },
         "omochi"    :{HP:50 ,attack:30 },
         "marionette":{HP:200,attack:10 },
         "skeleton"  :{HP:150,attack:15 },
         "rabitEX"   :{HP:40 ,attack:20 },
         "bearEX"    :{HP:70 ,attack:30 },
         "lastBoss"  :{HP:300,attack:20 },
         "princess"  :{HP:250,attack:15 },
         "niziiro"   :{HP:250,attack:15 },
         "luruca"    :{HP:250,attack:20 },
         "angel"     :{HP:250,attack:15 },
        };

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

heroTalk={"debug1"         :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これはデバッグ用台詞だよ"                             ,speech2:"本来見えちゃいけないコメントだから"                   ,nextTalk:"debug2"},
          "debug2"         :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"もしこのコメントが見えちゃったら"                     ,speech2:"ゲーム製作者に教えてあげて欲しいな"                   ,nextTalk:"end"},
          "marcosTutorial1":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"marcosTutorial2"},
          "marcosTutorial2":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"...あれ、ここは？"                                    ,speech2:" "                                                    ,nextTalk:"marcosTutorial3"},
          "marcosTutorial3":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"さっきまでアリーナでバトルをしていたと思うんだけど...",speech2:" "                                                    ,nextTalk:"marcosTutorial4"},
          "marcosTutorial4":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"とりあえず←キーと→キーで辺りを散策してみようかな"   ,speech2:"気になるものがあればEnterキーで確認してみよう"        ,nextTalk:"end"},
          "marcosPhone4_1" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"とりあえず画面左のボタンで辺りを散策してみようかな"   ,speech2:"気になるものがあれば『Enterで確認』をタップしてみよう",nextTalk:"marcosPhone4_2"},
          "marcosPhone4_2" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ボタンが小さければ画面右上のボタンからメニュー、"     ,speech2:"→オプション→設定でボタンの大きさを変えられるよ"     ,nextTalk:"end"},
          "marcosTutorial5":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この生物は攻撃的だね..."                              ,speech2:"Aキーで反撃してみよう"                                ,nextTalk:"end"},
          "marcosPhone5"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この生物は攻撃的だね..."                              ,speech2:"画面右中央のボタンで反撃してみよう"                   ,nextTalk:"end"},
          "marcosTutorial6":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"このくらいの段差ならSキーのジャンプで"                ,speech2:"飛び越えられるかな？"                                 ,nextTalk:"end"},
          "marcosPhone6"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"このくらいの段差なら画面右下のボタンのジャンプで"     ,speech2:"飛び越えられるかな？"                                 ,nextTalk:"end"},
          "marcosTutorial7":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"なかなかすごい色をしているけど"                       ,speech2:"多分これはキリンだよね...？"                          ,nextTalk:"marcosTutorial8"},
          "marcosTutorial8":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"挨拶してくれたのかな..."                              ,speech2:"少なくとも敵意はなさそうだね"                         ,nextTalk:"marcosTutorial9"},
          "marcosTutorial9":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"このキリンの近くでなら休憩するのもありかも"           ,speech2:" "                                                    ,nextTalk:"end"},
          "marcosHamsterD1":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ハムスターかな？"                                     ,speech2:" "                                                    ,nextTalk:"marcosHamsterD2"},
          "marcosHamsterD2":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"お腹を空かせているようだけど"                         ,speech2:"今は食べ物を持っていないからなぁ..."                  ,nextTalk:"end"},
          "nikolaHamsterD1":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"お腹を空かせたハムスター？"                           ,speech2:"どこかにあげられそうな食べ物はないかな..."            ,nextTalk:"end"},
          "lyricaHamsterD1":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"とっても大きなハムスター...だよね？"                  ,speech2:"お腹が減っているみたい"                               ,nextTalk:"lyricaHamsterD2"},
          "lyricaHamsterD2":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカが何かあげられる食べ物を"                       ,speech2:"もっていればよかったんだけど..."                      ,nextTalk:"end"},
          "aliceHamsterD1" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"わぁ！大きなハムスターさん！"                         ,speech2:"でもなんだか元気がないみたいです..."                  ,nextTalk:"aliceHamsterD2"},
          "aliceHamsterD2" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"うーん、お腹が減っているのかな？"                     ,speech2:" "                                                    ,nextTalk:"end"},
          "amairoHamsterD1":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、これはハムスターかな？"                         ,speech2:" "                                                    ,nextTalk:"amairoHamsterD2"},
          "amairoHamsterD2":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"空腹で倒れているようだ"                               ,speech2:"何とかしてあげられないものか"                         ,nextTalk:"end"},
          "hamsterClear1"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、これはハムスターかな？"                         ,speech2:" "                                                    ,nextTalk:"hamsterClear2"},
          "hamsterClear2"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"お腹が減っているみたいですね...？"                    ,speech2:"でもあげられそうな食べ物なんて持って..."              ,nextTalk:"hamsterClear3"},
          "hamsterClear3"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"いるぜっ！"                                           ,speech2:"オレ様が大量のピッツァを持っているぜっ！"             ,nextTalk:"hamsterClear4"},
          "hamsterClear4"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"さぁ、はらぺこハムスター...この大量のピッツァを"      ,speech2:"遠慮なく食うんだっ！"                                 ,nextTalk:"hamsterClear5"},
          "hamsterClear5"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"空腹で困っているやつを"                               ,speech2:"オレ様は放っておけないんだぜっ！"                     ,nextTalk:"hamsterClear6"},
          "hamsterClear6"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"...ハムスターにピザって与えて大丈夫なんでしょうか？"  ,speech2:" "                                                    ,nextTalk:"hamsterClear7"},
          "hamsterClear7"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"うーん...現実だとマズイだろうが、まぁ夢の世界だから"  ,speech2:"<font id=thisSpeech onclick=f_popUpN('null','コクリコの夢の世界のハムスターは大丈夫ですが、現実世界のハムスターにピザを与えると致命的にハムスターの健康を害するので絶対に真似しないでください。'); style=color:#0012ff;z-index:5;>大丈夫なんじゃないだろうか...</font>"                        ,nextTalk:"hamsterClear8"},
          "hamsterClear8"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"腹いっぱいになったら満足したのか"                     ,speech2:"どこかへ行っちまったぜっ！"                           ,nextTalk:"hamsterClear9"},
          "hamsterClear9"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ピエール、そのピザの貯蔵はまだ余裕はあるかい？"       ,speech2:" "                                                    ,nextTalk:"hamsterClear10"},
          "hamsterClear10" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"もちろん山ほどあるぜっ！"                             ,speech2:"お前も食べるかい？"                                   ,nextTalk:"hamsterClear11"},
          "hamsterClear11" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"いや、今は遠慮しておくよ"                             ,speech2:" "                                                    ,nextTalk:"hamsterClear12"},
          "hamsterClear12" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"他にも空腹で倒れているハムスターがいた時に"           ,speech2:"対応できるか聞きたくてね"                             ,nextTalk:"hamsterClear13"},
          "hamsterClear13" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"それなら心配ご無用だっ！"                             ,speech2:"何匹だって「まんぷくはむすたー」にしてやるぜっ！"     ,nextTalk:"end"},
          "marcosHamsterC1":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"はらぺこハムスター発見！"                             ,speech2:"ピエールさん、お願いしまーす"                         ,nextTalk:"marcosHamsterC2"},
          "marcosHamsterC2":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様の出番だな...任せなっ！"                        ,speech2:" "                                                    ,nextTalk:"endD"},
          "nikolaHamsterC1":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"こんなところにもはらぺこハムスターが..."              ,speech2:"ピエールさん、お願いしまーす"                         ,nextTalk:"nikolaHamsterC2"},
          "nikolaHamsterC2":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"なんだってっ？！"                                     ,speech2:"急患だっ！すぐにピッツァをっ！"                       ,nextTalk:"endD"},
          "lyricaHamsterC1":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"こんなところでもハムスターが倒れている..."            ,speech2:"ピエールさんお願い、助けてあげて"                     ,nextTalk:"lyricaHamsterC2"},
          "lyricaHamsterC2":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"任せなっ！すぐにウルトラカロリカル元気なハムスターに" ,speech2:"してやるぜっ！"                                       ,nextTalk:"endD"},
          "aliceHamsterC1" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"大変！ここでもハムスターさんが倒れちゃってます！！"   ,speech2:"ピエールさん！大至急ピザをお願いします！"             ,nextTalk:"aliceHamsterC2"},
          "aliceHamsterC2" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ヘイ、おまち！！"                                     ,speech2:"あつあつのカロリカルピッツァだぜっ！！"               ,nextTalk:"endD"},
          "amairoHamsterC1":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"よしよし、オレ様のピッツァをたんと食らうといいぜっ！" ,speech2:"甘色も食べるか？デザートピッツァもあるぜっ！"         ,nextTalk:"amairoHamsterC2"},
          "amairoHamsterC2":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"デ、デザートピザ？！"                                 ,speech2:" "                                                    ,nextTalk:"amairoHamsterC3"},
          "amairoHamsterC3":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"あ...い、いや、遠慮しておくよ..."                     ,speech2:"剣士たるもの堕落は禁物だからね......"                 ,nextTalk:"endD"},
          "pierreHamsterC1":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"伊達男は..."                                          ,speech2:"お腹を空かせている人を放っておけないんだぜっ！"       ,nextTalk:"pierreHamsterC2"},
          "pierreHamsterC2":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（なんかアンパ●マンみたいだな...）"                  ,speech2:" "                                                    ,nextTalk:"endD"},
        "thirteenHamsterC1":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ハムスターが倒れてらぁ..."                            ,speech2:"おいピエール、出番だぞ"                               ,nextTalk:"thirteenHamsterC2"},
        "thirteenHamsterC2":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"呼ばれて飛び出て、オレ様参上だぜっ！"                 ,speech2:"さぁこのピッツァを欲望のままに食べるんだっ！"         ,nextTalk:"endD"},
         "coclicoHamsterC1":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"このハムスターさんおなかすいてるみたい"               ,speech2:"だいじょうぶかな..."                                  ,nextTalk:"coclicoHamsterC2"},
         "coclicoHamsterC2":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"安心しな嬢ちゃん、オレ様が今からコイツに"             ,speech2:"しっかりがっちり最高のピッツァをご馳走するからなっ！" ,nextTalk:"endD"},
          "marcosMirrorD1" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"鏡が道を塞いでいる..."                                ,speech2:"この厚さだと壊すのは難しいかな"                       ,nextTalk:"end"},
          "nikolaMirrorD1" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この先に道は続いてるっぽいんだけど"                   ,speech2:"この鏡邪魔だなぁ..."                                  ,nextTalk:"end"},
          "lyricaMirrorD1" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"これは鏡...？"                                        ,speech2:"こんなところに置いてあったら先に進めないよ..."        ,nextTalk:"end"},
          "amairoMirrorD1" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや～、こんなところに大きな鏡が"                     ,speech2:"なんとかどかせないものかな..."                        ,nextTalk:"end"},
          "pierreMirrorD1" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"おっと、こんなところにとんでもない"                   ,speech2:"イケぽっちゃり系伊達男がっ！"                         ,nextTalk:"pierreMirrorD2"},
          "pierreMirrorD2" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"...って鏡に映ったオレ様だったぜっ！"                  ,speech2:"あまりのイケぽっちゃりぶりに驚いちまったっ！"         ,nextTalk:"end"},
          "mirrorClear1"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"困ったな..."                                          ,speech2:"鏡が道を塞いじゃってる"                               ,nextTalk:"mirrorClear2"},
          "mirrorClear2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"お困りのようですね...？"                              ,speech2:" "                                                    ,nextTalk:"mirrorClear3"},
          "mirrorClear3"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ここはあたしに任せてください！"                       ,speech2:"鏡さん、お願いします！"                               ,nextTalk:"mirrorClear4"},
          "mirrorClear4"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"すごーい！鏡の反対側これた！"                         ,speech2:" "                                                    ,nextTalk:"mirrorClear5"},
          "mirrorClear5"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"どうやらこの世界の鏡さんもあたしがお願いすると"       ,speech2:"通してくれるみたいなんです！"                         ,nextTalk:"mirrorClear6"},
          "mirrorClear6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"どうしてコクリコちゃんの世界なのに"                   ,speech2:"あたしの声に反応に反応するのかはよくわかりませんが...",nextTalk:"mirrorClear7"},
          "mirrorClear7"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ともかく！鏡さんに通して欲しい時は"                   ,speech2:"あたしに任せてください！"                             ,nextTalk:"mirrorClear8"},
          "mirrorClear8"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"大体の鏡さんは反応してくれると思います！"             ,speech2:" "                                                    ,nextTalk:"end"},
          "marcosMirrorC1" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"鏡が道を塞いでいるね..."                              ,speech2:"アリスちゃん、頼んでもいいかな？"                     ,nextTalk:"marcosMirrorC2"},
          "marcosMirrorC2" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もちろんいいですよ！"                                 ,speech2:"鏡さん、お願いします！"                               ,nextTalk:"marcosMirrorC3"},
          "marcosMirrorC3" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ありがとう！助かったよ"                               ,speech2:" "                                                    ,nextTalk:"end"},
          "nikolaMirrorC1" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"「鏡さん、お願いします！」"                           ,speech2:"......うーん、アリスの声の録音じゃ反応しないか"       ,nextTalk:"nikolaMirrorC2"},
          "nikolaMirrorC2" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"勝手にあたしの声を録音しないでください！"             ,speech2:" "                                                    ,nextTalk:"endC"},
          "lyricaMirrorC1" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"こんなところにも鏡が..."                              ,speech2:"アリスちゃん、お願い！"                               ,nextTalk:"lyricaMirrorC2"},
          "lyricaMirrorC2" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あたしの出番ですね、任せてください！！"               ,speech2:"鏡さん、お願いします！"                               ,nextTalk:"lyricaMirrorC3"},
          "lyricaMirrorC3" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ありがとう、アリスちゃん"                             ,speech2:"これでこっち側も探索できるね"                         ,nextTalk:"end"},
          "aliceMirrorC1"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"鏡さんがこんなところにも..."                          ,speech2:"早速お願いしてみましょう！"                           ,nextTalk:"aliceMirrorC2"},
          "aliceMirrorC2"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"鏡さん、お願いします！"                               ,speech2:" "                                                    ,nextTalk:"endC"},
          "amairoMirrorC1" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ここでも鏡が道を塞いでいるね"                         ,speech2:"アリス、頼んでもいいかな？"                           ,nextTalk:"amairoMirrorC2"},
          "amairoMirrorC2" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もちろんです！"                                       ,speech2:"鏡さん、お願いします！"                               ,nextTalk:"amairoMirrorC3"},
          "amairoMirrorC3" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ありがとうアリス、助かったよ"                         ,speech2:" "                                                    ,nextTalk:"end"},
          "pierreMirrorC1" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"鏡に映ったオレ様がカッコよすぎて"                     ,speech2:"先に進めないぜっ！"                                   ,nextTalk:"pierreMirrorC2"},
          "pierreMirrorC2" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あのー、通りたいんでちょっとどいてもらっても"         ,speech2:"いいですか？"                                         ,nextTalk:"endC"},
         "thirteenMirrorC1":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"「鏡さん、お願いします！」"                           ,speech2:"......どうやら俺様の声真似じゃ不満らしい"             ,nextTalk:"thirteenMirrorC2"},
         "thirteenMirrorC2":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"（あのクオリティの声真似で"                           ,speech2:"どうしていけると思ったんだろう...）"                  ,nextTalk:"endC"},
          "coclicoMirrorC1":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"アリスおねえちゃん、あのかがみとおるやつ"             ,speech2:"やってやって～"                                       ,nextTalk:"coclicoMirrorC2"},
          "coclicoMirrorC2":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"いいですよ～"                                         ,speech2:"鏡さん、お願いします！"                               ,nextTalk:"coclicoMirrorC3"},
          "coclicoMirrorC3":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"すごーい、コクリコたちまでとおりぬけられた！"         ,speech2:"アリスおねえちゃん、ありがとう～"                     ,nextTalk:"end"},
          "marcosRockD1"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"キリンが石化しちゃっている...？"                      ,speech2:" "                                                    ,nextTalk:"marcosRockD2"},
          "marcosRockD2"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"なんとかしてあげたいけど"                             ,speech2:"今の僕にしてあげられることはないかな..."              ,nextTalk:"end"},
          "nikolaRockD1"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"石像...ではなさそうだね"                              ,speech2:" "                                                    ,nextTalk:"nikolaRockD2"},
          "nikolaRockD2"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"キリンが石化しているように見えるな"                   ,speech2:"一体何があったんだろう"                               ,nextTalk:"end"},
          "amairoRockD1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや～？キリンの匂いはするけれど"                     ,speech2:"これはどう見ても生きているキリンではないよね？"       ,nextTalk:"amairoRockD2"},
          "amairoRockD2"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"実は生きているけど石化しているだけ？"                 ,speech2:"うーん...判断しかねるな"                              ,nextTalk:"end"},
          "pierreRockD1"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"なかなかに石像に見えるが..."                          ,speech2:" "                                                    ,nextTalk:"pierreRockD2"},
          "pierreRockD2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様にはわかる"                                     ,speech2:"これは石像ではなく生きているキリンだぜっ！"           ,nextTalk:"pierreRockD3"},
          "pierreRockD3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"パッションで感じるんだ...このキリンの"                ,speech2:"「腹が減ったぜっ！」っていう悲鳴がっ！"               ,nextTalk:"pierreRockD4"},
          "pierreRockD4"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"何とかして食事ができるようにしてやらないと..."        ,speech2:"伊達男はは困っている動物を放っておけないんだぜっ！"   ,nextTalk:"end"},
          "rockGiraffeC1"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"キリンが石化しちゃっている...？"                      ,speech2:" "                                                    ,nextTalk:"rockGiraffeC2"},
          "rockGiraffeC2"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"可哀想だけど、一体どうしてあげたら..."                ,speech2:" "                                                    ,nextTalk:"rockGiraffeC3"},
          "rockGiraffeC3"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"これは......"                                         ,speech2:"もしかしたらリリカの魔法で助けられるかも...！"        ,nextTalk:"rockGiraffeC4"},
          "rockGiraffeC4"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"え！ほんと...？！"                                    ,speech2:" "                                                    ,nextTalk:"rockGiraffeC5"},
          "rockGiraffeC5"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"試してみるね"                                         ,speech2:" "                                                    ,nextTalk:"rockGiraffeC6"},
          "rockGiraffeC6"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカル☆マジカル！"                                 ,speech2:" "                                                    ,nextTalk:"rockGiraffeC7"},
          "rockGiraffeC7"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"すごい！"                                             ,speech2:"本当に石化が解けた！！"                               ,nextTalk:"rockGiraffeC8"},
          "rockGiraffeC8"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"さっすがリリカちゃん！！"                             ,speech2:" "                                                    ,nextTalk:"rockGiraffeC9"},
          "rockGiraffeC9"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"えへへ...上手くいってよかった～"                      ,speech2:" "                                                    ,nextTalk:"rockGiraffeC10"},
          "rockGiraffeC10" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"これでもし他に石化しちゃったキリンさんがいても"       ,speech2:"リリカが助けてあげられるね"                           ,nextTalk:"end"},
          "marcosRockC1"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"こんなところにも石化しちゃっているキリンが..."        ,speech2:"リリカちゃん、お願いしてもいい？"                     ,nextTalk:"marcosRockC2"},
          "marcosRockC2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"もちろん！リリカに任せて"                             ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"marcosRockC3"},
          "marcosRockC3"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ありがとう、リリカちゃん！"                           ,speech2:"きっとキリンも喜んでいるよ！"                         ,nextTalk:"end"},
          "nikolaRockC1"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これも石化したキリンだね..."                          ,speech2:"リリカ、お願いできる？"                               ,nextTalk:"nikolaRockC2"},
          "nikolaRockC2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"もちろん！リリカに任せて"                             ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"nikolaRockC3"},
          "nikolaRockC3"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"石化が解けたね"                                       ,speech2:"魔法っていうのは本当に不思議だなぁ..."                ,nextTalk:"end"},
          "lyricaRockC1"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"たいへん！キリンさんが石化しちゃってる！！"           ,speech2:" "                                                    ,nextTalk:"lyricaRockC2"},
          "lyricaRockC2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"今助けてあげるからね！"                               ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"lyricaRockC3"},
          "lyricaRockC3"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"よかった、これでもう大丈夫だね"                       ,speech2:" "                                                    ,nextTalk:"end"},
          "aliceRockC1"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"わわ、キリンさんが石化しちゃっています！！"           ,speech2:"どうしましょう..."                                    ,nextTalk:"aliceRockC2"},
          "aliceRockC2"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"大丈夫！リリカに任せて"                               ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"aliceRockC3"},
          "aliceRockC3"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"リリカちゃんすごい！"                                 ,speech2:"キリンさんが元通りになりました！！"                   ,nextTalk:"end"},
          "amairoRockC1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、キリンが石化してしまっているね"                 ,speech2:"リリカ、頼まれてくれるかい？"                         ,nextTalk:"amairoRockC2"},
          "amairoRockC2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"もちろん！リリカに任せて"                             ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"amairoRockC3"},
          "amairoRockC3"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"石化が解けたようだね"                                 ,speech2:"ありがとう、助かったよ"                               ,nextTalk:"end"},
          "pierreRockC1"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"これまたガッチリ固まっているな..."                    ,speech2:"リリカ、頼んだぜっ！"                                 ,nextTalk:"pierreRockC2"},
          "pierreRockC2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"はーい！じゃあいくよ！！"                             ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"pierreRockC3"},
          "pierreRockC3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"これでコイツも美味しく食事できるだろう..."            ,speech2:"キリンに代わって礼をいうぜっ！マジで感謝だっ！"       ,nextTalk:"end"},
          "thirteenRockC1" :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"このキリン、また随分ガッチガチに固まってやがるな"     ,speech2:"これはリリカに頼めばいいんだったか？"                 ,nextTalk:"thirteenRockC2"},
          "thirteenRockC2" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うん、リリカの魔法で石化を解いてあげるの！"           ,speech2:"いくよ？リリカル☆マジカル！"                         ,nextTalk:"thirteenRockC3"},
          "thirteenRockC3" :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"お～、大したもんだな"                                 ,speech2:"これでここも休憩所として使えるな"                     ,nextTalk:"end"},
          "coclicoRockC1"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"たいへん！きりんさんがいしになっちゃってる！"         ,speech2:" "                                                    ,nextTalk:"coclicoRockC2"},
          "coclicoRockC2"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"大丈夫！リリカがすぐに治してあげるからね"             ,speech2:"リリカル☆マジカル！"                                 ,nextTalk:"coclicoRockC3"},
          "coclicoRockC3"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"わぁ！きりんがなおった！"                             ,speech2:"リリカおねえちゃんすごーい！"                         ,nextTalk:"end"},
          "sweetClear1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、この匂いは..."                                  ,speech2:"皆、ちょっと待ってくれるかい？"                       ,nextTalk:"sweetClear2"},
          "sweetClear2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"どうかしたの？"                                       ,speech2:" "                                                    ,nextTalk:"sweetClear3"},
          "sweetClear3"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"恐らくこのあたりに...うん、やっぱりいたね"            ,speech2:"「囁くお菓子」だ"                                     ,nextTalk:"sweetClear4"},
          "sweetClear4"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"囁くお菓子？"                                         ,speech2:" "                                                    ,nextTalk:"sweetClear5"},
          "sweetClear5"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ほらここを見てご覧、小さなお菓子たちがいるだろう？"   ,speech2:" "                                                    ,nextTalk:"sweetClear6"},
          "sweetClear6"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ほんとだ～、よくこんな小さいのを"                     ,speech2:"見つけられるね"                                       ,nextTalk:"sweetClear7"},
          "sweetClear7"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"僕は鼻がいいからね"                                   ,speech2:" "                                                    ,nextTalk:"sweetClear8"},
          "sweetClear8"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"お菓子たちの発するわずかな甘い匂いで"                 ,speech2:"お菓子たちを見つけることができるんだ"                 ,nextTalk:"sweetClear9"},
          "sweetClear9"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"...このお菓子たち、とても小さくだけど"                ,speech2:"何か音？...声？を出している？"                        ,nextTalk:"sweetClear10"},
          "sweetClear10"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"まるで僕らに囁きかけているようだろ？"                 ,speech2:"だから僕は「囁くお菓子」と呼んでいる"                 ,nextTalk:"sweetClear11"},
          "sweetClear11"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この囁くお菓子たちは......ほら、こんな風に"           ,speech2:"僕らにアイテムをくれるんだ"                           ,nextTalk:"sweetClear12"},
          "sweetClear12"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これは...懐中時計のパーツだ！"                        ,speech2:" "                                                    ,nextTalk:"sweetClear13"},
          "sweetClear13"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"だから囁くお菓子を見つけたら"                         ,speech2:"なるべく足を止めるようにしているんだ"                 ,nextTalk:"sweetClear14"},
          "sweetClear14"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ふむふむ、たしかにこれはありがたいね"                 ,speech2:" "                                                    ,nextTalk:"sweetClear15"},
          "sweetClear15"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"囁くお菓子がいそうな場所には"                         ,speech2:"黄色の丸で印をつけておくことにするよ"                 ,nextTalk:"sweetClear16"},
          "sweetClear16"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"見かけてたら是非立ち寄ってみて欲しい"                 ,speech2:" "                                                    ,nextTalk:"end"},
          "amairoSweet1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、この匂いは..."                                  ,speech2:"この辺りにも囁くお菓子がいるようだね"                 ,nextTalk:"amairoSweet2"},
          "marcosSweet2"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"どれどれ～、あ！いた！"                               ,speech2:"たしかに近づけばほんのり甘い匂がするね"               ,nextTalk:"end"},
          "nikolaSweet2"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"たしかに何か囁いているっぽいけど"                     ,speech2:"正確に聞き取るのは難しいなぁ..."                      ,nextTalk:"end"},
          "lyricaSweet2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"またアイテムをくれるみたい！"                         ,speech2:"ありがたく使わせてもらおう"                           ,nextTalk:"end"},
          "aliceSweet2"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"お菓子が何か囁いてくるなんて"                         ,speech2:"本当にここは不思議なことだらけですね～"               ,nextTalk:"end"},
          "amairoSweet2"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"またアイテムをくれるのかい？"                         ,speech2:"ありがとう、大切に使わせてもらうよ"                   ,nextTalk:"end"},
          "pierreSweet2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"こんな親切にしてもらえると"                           ,speech2:"普段のお菓子も食べずらくなっちまうぜっ！"             ,nextTalk:"end"},
          "thirteenSweet2" :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"こんなちっせぇ菓子たちをよく匂いだけで見つけられんな" ,speech2:"この距離でもほとんど匂いなんてしねぇのに"             ,nextTalk:"end"},
          "coclicoSweet2"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"これ、コクリコたちにくれるの？"                       ,speech2:"ありがとう～"                                         ,nextTalk:"end"},
          "marcosItem1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ん？なんだろこれ"                                     ,speech2:" "                                                    ,nextTalk:"marcosItem2"},
          "marcosItem2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"...上手く加工すれば何かに使えるかも！"                ,speech2:" "                                                    ,nextTalk:"end"},
          "nikolaItem1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これはなんだろう..."                                  ,speech2:" "                                                    ,nextTalk:"nikolaItem2"},
          "nikolaItem2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"何かいい使い道はあるかな？"                           ,speech2:" "                                                    ,nextTalk:"end"},
          "lyricaItem1"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あれ？こんなところに何か落ちてる"                     ,speech2:" "                                                    ,nextTalk:"lyricaItem2"},
          "lyricaItem2"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"マルコスくんならこれも"                               ,speech2:"何かいい使い道を見つけてくれるかな？"                 ,nextTalk:"end"},
          "aliceItem1"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"おっとっと..."                                        ,speech2:"こんなところに何か落ちてますね"                       ,nextTalk:"aliceItem2"},
          "aliceItem2"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"せっかくなので拾っていきましょうか"                   ,speech2:"使い道はちょっとあたしには思いつきませんが..."        ,nextTalk:"end"},
          "amairoItem1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、何か落ちているようだね"                         ,speech2:"これは..."                                            ,nextTalk:"amairoItem2"},
          "amairoItem2"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"これもマルコスに頼めば"                               ,speech2:"何か使い道を見出してくれるだろうか"                   ,nextTalk:"end"},
          "pierreItem1"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"これは...ぱっと見は違うが、恐らく本質は"              ,speech2:"ピッツァだぜっ！！！"                                 ,nextTalk:"pierreItem2"},
          "pierreItem2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"どーーーー頑張って考えても多分これピザではないよ"     ,speech2:" "                                                    ,nextTalk:"end"},
          "thirteenItem1"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"うおっ！...とぅ、何か踏んだか？"                      ,speech2:" "                                                    ,nextTalk:"thirteenItem2"},
          "thirteenItem2"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"これもマルコスにパスだな"                             ,speech2:"いい感じに使えるようにしといてくれ"                   ,nextTalk:"end"},
          "coclicoItem1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あれ～？なにかおちてるよ？"                           ,speech2:" "                                                    ,nextTalk:"coclicoItem2"},
          "coclicoItem2"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"わぁ！（デバッグ）だぁ"                               ,speech2:" "                                                    ,nextTalk:"end"},
          "marcosPart1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"お、懐中時計のパーツだ"                               ,speech2:"テスラっちに渡しておこう"                             ,nextTalk:"end"},
          "nikolaPart1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これは...懐中時計のパーツだね"                        ,speech2:"この調子で集めていこう！"                             ,nextTalk:"end"},
          "lyricaPart1"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"これは...懐中時計のパーツかな...？"                   ,speech2:"あとでテスラちゃんに聞いてみよっと"                   ,nextTalk:"end"},
          "alicePart1"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"懐中時計のパーツってこれのことでしょうか...？"        ,speech2:"自信ないですが、とりあえず回収しておきましょう！"     ,nextTalk:"end"},
          "amairoPart1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、これは懐中時計のパーツじゃないかい？"           ,speech2:"これでまた一つ集まったね"                             ,nextTalk:"end"},
          "pierrePart1"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"懐中時計のパーツを見つけたぜっ！"                     ,speech2:"う～ん、なかなか珍しい金属を使ってるようだなっ！"     ,nextTalk:"end"},
          "thirteenPart1"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"これが懐中時計のパーツなのか？"                       ,speech2:"正直俺様にはガラクタにしか見えないんだが..."          ,nextTalk:"end"},
          "coclicoPart1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"これ、とけいのパーツかな...？"                        ,speech2:"テスラおにいちゃんにとどけてあげよっと"               ,nextTalk:"end"},
          "marcosDoor1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"これまた重厚な扉だね"                                 ,speech2:" "                                                    ,nextTalk:"marcosDoor2"},
          "marcosDoor2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"このままだと動かなさそうかな？"                       ,speech2:"何か鍵となるものが必要なようだけど......"             ,nextTalk:"end"},
          "nikolaDoor1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"大きな扉だね"                                         ,speech2:"窪みのようなものがあるけど何かをはめるのかな？"       ,nextTalk:"nikolaDoor2"},
          "nikolaDoor2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この形、どっかで見たような......"                     ,speech2:" "                                                    ,nextTalk:"end"},
          "lyricaDoor1"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"これは......大きな扉かな？"                           ,speech2:" "                                                    ,nextTalk:"lyricaDoor2"},
          "lyricaDoor2"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"えいっ！......うーん、普通に開けるのは無理そう"       ,speech2:"鍵がかかっているのかな？"                             ,nextTalk:"end"},
          "aliceDoor1"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"立派な扉ですね～"                                     ,speech2:"一体この扉の先には何があるんでしょう？"               ,nextTalk:"end"},
          "amairoDoor1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや～、これまた随分と立派な扉だね"                   ,speech2:" "                                                    ,nextTalk:"amairoDoor2"},
          "amairoDoor2"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"何かをはめ込むためのような窪みがあるが"               ,speech2:"一体何をはめ込むのだろう"                             ,nextTalk:"end"},
          "pierreDoor1"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様の家のものほどではないが"                       ,speech2:"なかなかに立派な扉だぜっ！"                           ,nextTalk:"pierreDoor2"},
          "pierreDoor2"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"鍵もしっかりかかっているようだなっ！"                 ,speech2:"セキュリティもバッチリだぜっ！"                       ,nextTalk:"end"},
          "thirteenDoor1"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"こりゃまた随分御大層な扉だねぇ"                       ,speech2:" "                                                    ,nextTalk:"thirteenDoor2"},
          "thirteenDoor2"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"押しても引いてもびくともしねぇ"                       ,speech2:"力づくで開けんのは無理だな"                           ,nextTalk:"end"},
          "coclicoDoor1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"とってもおおきなとびらだね～"                         ,speech2:" "                                                    ,nextTalk:"coclicoDoor2"},
          "coclicoDoor2"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"このとびらのむこうには"                               ,speech2:"なにがあるのかなぁ？"                                 ,nextTalk:"end"},
          "clockClear1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"このパーツで最後だね"                                 ,speech2:"後はこれを組み立てて..."                              ,nextTalk:"clockClear2"},
          "clockClear2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"よし！懐中時計の修理できたよ！"                       ,speech2:" "                                                    ,nextTalk:"clockClear3"},
          "clockClear3"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや？これはもしかして"                               ,speech2:"コクリコがいつもつけている時計じゃないかい？"         ,nextTalk:"clockClear4"},
          "clockClear4"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そうみたいだね"                                       ,speech2:" "                                                    ,nextTalk:"clockClear5"},
          "clockClear5"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"コクリコの夢の中だから"                               ,speech2:"コクリコの私物がこの世界にあるのも不思議じゃない"     ,nextTalk:"clockClear6"},
          "clockClear6"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"不思議なのはこの時計の機構だよ"                       ,speech2:" "                                                    ,nextTalk:"clockClear7"},
          "clockClear7"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"数がXⅢまでふってあったり、針の進みが妙に早かったり"  ,speech2:"元から不思議なところはたくさんあったけど"             ,nextTalk:"clockClear8"},
          "clockClear8"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"修理して新たに判明したのは"                           ,speech2:"この時計、他の機械と連動する仕組みみたいなんだ"       ,nextTalk:"clockClear9"},
          "clockClear9"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"他の機械と連動...？"                                  ,speech2:" "                                                    ,nextTalk:"clockClear10"},
          "clockClear10"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"おそらくこの懐中時計の時計としての機構は多分おまけ...",speech2:" "                                                    ,nextTalk:"clockClear11"},
          "clockClear11"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これの対となる機械を見つけてその機械に連動させた時"   ,speech2:"この時計は真価を発揮するんだと思う"                   ,nextTalk:"clockClear12"},
          "clockClear12"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"その真価...って？"                                    ,speech2:" "                                                    ,nextTalk:"clockClear13"},
          "clockClear13"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"多分だけどその対となる機械の"                         ,speech2:"起動の鍵になるんじゃないかな"                         ,nextTalk:"clockClear14"},
          "clockClear14"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ふ～む、興味深い話だが肝心のその「対となる機械」"     ,speech2:"についての情報は何もないのかっ？"                     ,nextTalk:"clockClear15"},
          "clockClear15"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この世界のどこかには多分あるんだろうけど"             ,speech2:"逆にいえばそれくらいしか情報はない..."                ,nextTalk:"clockClear16"},
          "clockClear16"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"僕らはこの世界をたくさん探検してきたんだし"           ,speech2:"もしかしたらもう既に見つけてる可能性もある"           ,nextTalk:"clockClear17"},
          "clockClear17"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"懐中時計と連動しそうな機械がどこかになかったか"       ,speech2:"少し思い返してみてもいいかも...？"                    ,nextTalk:"end"},
          "doorClear1"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これは......扉かな"                                   ,speech2:"ここの窪みに何かをはめ込んで動かすのかな？"           ,nextTalk:"doorClear2"},
          "doorClear2"     :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"その窪みの形、"                                       ,speech2:"この前修理した懐中時計にピッタリじゃない？"           ,nextTalk:"doorClear3"},
          "doorClear3"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ほんとだ！ぴったりはまりそうな形と大きさだね"         ,speech2:" "                                                    ,nextTalk:"doorClear4"},
          "doorClear4"     :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"この前言ってた懐中時計と対になる機械ってのは"         ,speech2:"これのことかっ！"                                     ,nextTalk:"doorClear5"},
          "doorClear5"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"で、どうすんだ？そいつをはめてみんのか？"             ,speech2:"それともコクリコの母親探し優先でに上へ向かうか？"     ,nextTalk:"doorClear6"},
          "doorClear6"     :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"......このおっきなとびら、うごかせるの？"             ,speech2:" "                                                    ,nextTalk:"doorClear7"},
          "doorClear7"     :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコうごくところみてみたーい！"                   ,speech2:" "                                                    ,nextTalk:"doorClear8"},
          "doorClear8"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクもかなり興味があるよ"                             ,speech2:"いいよね？動かしてみても"                             ,nextTalk:"doorClear9"},
          "doorClear9"     :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"夢の主も見てみたいって言ってるんだし"                 ,speech2:"いんじゃない？"                                       ,nextTalk:"doorClear10"},
          "doorClear10"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"よし、じゃあ時計入れてみるよ......？"                 ,speech2:" "                                                    ,nextTalk:"doorClear11"},
          "doorClear11"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"おぉ、動きましたね"                                   ,speech2:"さらに奥へ続く道になっているようです"                 ,nextTalk:"doorClear12"},
          "doorClear12"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"何があるのか気になるところですが"                     ,speech2:" "                                                    ,nextTalk:"doorClear13"},
          "doorClear13"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"コクリコちゃんのお母さんがいる方とは"                 ,speech2:"反対方向なんですよね......"                           ,nextTalk:"doorClear14"},
          "doorClear14"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"気が向いたら探索してみよう......"                     ,speech2:"くらいの感じでいいかもね"                             ,nextTalk:"end"},
          "marcosBreak"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ふぃー、ちょっと休憩にしようか"                       ,speech2:" "                                                    ,nextTalk:"endA"},
          "nikolaBreak"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この辺でそろそろ休憩にしない？"                       ,speech2:" "                                                    ,nextTalk:"endA"},
          "lyricaBreak"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"だいぶ探索したね～"                                   ,speech2:"そろそろ少し休憩しない？"                             ,nextTalk:"endA"},
          "aliceBreak"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もう足がクタクタです～...."                           ,speech2:"そろそろ休憩しませんか？"                             ,nextTalk:"endA"},
          "amairoBreak"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや～、皆疲れが見えてきているね"                     ,speech2:"少し休息をとろう"                                     ,nextTalk:"endA"},
          "pierreBreak"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"おっと、おやつの時間だっ！"                           ,speech2:"ここらで休憩にしようぜっ！"                           ,nextTalk:"endA"},
          "thirteenBreak"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ちょっと休憩にしようぜ～？"                           ,speech2:"ぼくちんもう疲れた～"                                 ,nextTalk:"endA"},
          "coclicoBreak"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"ふみゅう...コクリコ、もうつかれてきちゃった"          ,speech2:" "                                                    ,nextTalk:"endA"},
          "nikolaEncount1" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ん？あれはもしや..."                                  ,speech2:" "                                                    ,nextTalk:"nikolaEncount2"},
          "nikolaEncount2" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"わーん！<font id=thisSpeech onclick=f_popUpN('null','テスラ→マルコスの呼び方は＃コンパス学園（2024）では「マルコスくん」でしたが、ライアリでは「マルコス」呼びでした。本作はライアリの方の呼び方を採用しております。'); style=color:#0012ff;z-index:5;>マルコス</font>だー！！"                             ,speech2:" "                                                    ,nextTalk:"nikolaEncount3"},
          "nikolaEncount3" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"し、知っている人がいてよかった～"                     ,speech2:"僕一人だったらどうしようかと..."                      ,nextTalk:"nikolaEncount4"},
          "nikolaEncount4" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"テスラっちも来てたんだね"                             ,speech2:" "                                                    ,nextTalk:"nikolaEncount5"},
          "nikolaEncount5" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"その様子だとテスラっちもここがどこだかは"             ,speech2:"把握してない感じかな？"                               ,nextTalk:"nikolaEncount6"},
          "nikolaEncount6" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ここがどこだかはわからないけど..."                    ,speech2:" "                                                    ,nextTalk:"nikolaEncount7"},
          "nikolaEncount7" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"いきなりこんなところに飛ばされた原因には"             ,speech2:"心当たりあるかも..."                                  ,nextTalk:"nikolaEncount8"},
          "nikolaEncount8" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"悪戯に失敗でもした？"                                 ,speech2:" "                                                    ,nextTalk:"nikolaEncount9"},
          "nikolaEncount9" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"今回は違うよ！"                                       ,speech2:" "                                                    ,nextTalk:"nikolaEncount10"},
          "nikolaEncount10":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"以前マルコスと勇者に使ってもらった"                   ,speech2:"<font id=thisSpeech onclick=f_popUpN('null','ライブアリーナストーリーイベント「かけだしくえすと～おどりくるうものたち～」にてマルコスと勇者が使用したテスラの発明品。装置を身に着けると使用者は眠ってしまい、夢の中で妄想の世界へ入り込むことができる。夢から覚めるためには使用者の願いを叶えなくてはならない。'); style=color:#0012ff;z-index:5;>妄想体験マシーン</font>を覚えている？<script>f_opacityButton('thisSpeech');</script>"                     ,nextTalk:"nikolaEncount11"},
          "nikolaEncount11":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あー...あったね"                                      ,speech2:"あの時はたしかライブアリーナの仮眠室で使ったんだっけ" ,nextTalk:"nikolaEncount12"},
          "nikolaEncount12":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"あれをコクリコが使いたいっていうから貸したんだけど"   ,speech2:" "                                                    ,nextTalk:"nikolaEncount13"},
          "nikolaEncount13":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"マシーンを起動したらいきなり装置をつけていない"       ,speech2:"僕まで眠気に襲われて"                                 ,nextTalk:"nikolaEncount14"},
          "nikolaEncount14":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"気が付いたらここに..."                                ,speech2:" "                                                    ,nextTalk:"nikolaEncount15"},
          "nikolaEncount15":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"僕らがこの世界に来たのはタイミング的に考えて"         ,speech2:"あの装置が原因だろうけど"                             ,nextTalk:"nikolaEncount16"},
          "nikolaEncount16":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"装置をつけていないボクやその場にすらいなかった"       ,speech2:"マルコスまであの装置に影響を受けてるとは考え難いし...",nextTalk:"nikolaEncount17"},
          "nikolaEncount17":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"nikolaEncount18"},
          "nikolaEncount18":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"細かい原因まではわからないけど"                       ,speech2:" "                                                    ,nextTalk:"nikolaEncount19"},
          "nikolaEncount19":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ここは多分コクリコちゃんの"                           ,speech2:"妄想あるいは夢の世界なんじゃないかな"                 ,nextTalk:"nikolaEncount20"},
          "nikolaEncount20":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクもその可能性は考えたけど、コクリコの妄想の世界が" ,speech2:"こんな不気味な感じとは思えなくて..."                  ,nextTalk:"nikolaEncount21"},
          "nikolaEncount21":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この世界に来てから僕は「ぴんくのきりん」や"           ,speech2:"「びりびりうさぎ」を見たよ"                           ,nextTalk:"nikolaEncount22"},
          "nikolaEncount22":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この動物たちっていつもコクリコちゃんが"               ,speech2:"寝言で言っている動物じゃない？"                       ,nextTalk:"nikolaEncount23"},
          "nikolaEncount23":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"「びりびりうさぎ」...あの放電するうさぎのことだね"    ,speech2:"「ピンクのきりん」も見た気がする"                     ,nextTalk:"nikolaEncount24"},
          "nikolaEncount24":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"言われてみればたしかにコクリコの寝言と一致する......" ,speech2:" "                                                    ,nextTalk:"nikolaEncount25"},
          "nikolaEncount25":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"う～ん、そういわれてみれば"                           ,speech2:"ここがコクリコの世界という説も有力な気がしてくるね"   ,nextTalk:"nikolaEncount26"},
          "nikolaEncount26":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁ正直今ある情報だけだとそれも仮説止まりだけどね"   ,speech2:" "                                                    ,nextTalk:"nikolaEncount27"},
          "nikolaEncount27":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"もう少しあたりを探索しいて情報を集めないと"           ,speech2:" "                                                    ,nextTalk:"end"},
          "lyricaEncount1" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あ！あそこにいるのは！！"                             ,speech2:" "                                                    ,nextTalk:"lyricaEncount2"},
          "lyricaEncount2" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"わぁ！みんなもここに来てたんだね！"                   ,speech2:" "                                                    ,nextTalk:"lyricaEncount3"},
          "lyricaEncount3" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"よかった～、リリカ一人ぼっちなのかと思ったよ..."      ,speech2:" "                                                    ,nextTalk:"lyricaEncount4"},
          "lyricaEncount4" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"リリカも気が付いたらこの世界に来ていたって感じ？"     ,speech2:" "                                                    ,nextTalk:"lyricaEncount5"},
          "lyricaEncount5" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そう！さっきまでバトルしていたと思うのに"             ,speech2:"いつのまにかこんなところに..."                        ,nextTalk:"lyricaEncount6"},
          "lyricaEncount6" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクやマルコスとほぼ同じ状況だね"                     ,speech2:" "                                                    ,nextTalk:"lyricaEncount7"},
          "lyricaEncount7" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そうだな..."                                          ,speech2:"まずは情報の共有からしてしてもいいかな？"             ,nextTalk:"lyricaEncount8"},
          "lyricaEncount8" :{img:"0"                 ,name:" "                       ,speech1:"（情報共有中）"                                       ,speech2:" "                                                    ,nextTalk:"lyricaEncount9"},
          "lyricaEncount9" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"......という訳でボクらはこの世界が"                   ,speech2:"コクリコの夢の世界じゃないかって仮説を立てているんだ" ,nextTalk:"lyricaEncount10"},
          "lyricaEncount10":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁまだ仮説の段階だから"                             ,speech2:"とりあえず情報収集中って感じ"                         ,nextTalk:"lyricaEncount11"},
          "lyricaEncount11":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"........."                                            ,speech2:" "                                                    ,nextTalk:"lyricaEncount12"},
          "lyricaEncount12":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:".........リリカのせいかも..."                         ,speech2:" "                                                    ,nextTalk:"lyricaEncount13"},
          "lyricaEncount13":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"え...？"                                              ,speech2:" "                                                    ,nextTalk:"lyricaEncount14"},
          "lyricaEncount14":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカたちがこの世界にとばされたの"                   ,speech2:"リリカのせいかもしれない..."                          ,nextTalk:"lyricaEncount15"},
          "lyricaEncount15":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"何か心当たりがあるの...？"                            ,speech2:" "                                                    ,nextTalk:"lyricaEncount16"},
          "lyricaEncount16":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ここに来る前に、コクリコちゃんに魔法をかけたの..."    ,speech2:" "                                                    ,nextTalk:"lyricaEncount17"},
          "lyricaEncount17":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"魔法？"                                               ,speech2:" "                                                    ,nextTalk:"lyricaEncount18"},
          "lyricaEncount18":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うん、夢の力を強くする魔法..."                        ,speech2:" "                                                    ,nextTalk:"lyricaEncount19"},
          "lyricaEncount19":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"コクリコちゃんがね、なかなか帰ってこないお母さんに"   ,speech2:"せめて夢の中で会えたらなって言っていたの"             ,nextTalk:"lyricaEncount20"},
          "lyricaEncount20":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"コクリコちゃん、しばらくお母さんに"                   ,speech2:"会えていないらしくって"                               ,nextTalk:"lyricaEncount21"},
          "lyricaEncount21":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"せめて夢の中でならお母さんに会わせてあげたいなって"   ,speech2:"思って、見る夢を強くする魔法をかけたの..."            ,nextTalk:"lyricaEncount22"},
          "lyricaEncount22":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"夢の力が強くなると起きても夢を覚えていやすいんだよ"   ,speech2:" "                                                    ,nextTalk:"lyricaEncount23"},
          "lyricaEncount23":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"だからもしコクリコちゃんがお母さんの夢を見れたら"     ,speech2:"しっかりそのことを覚えていられるようにって..."        ,nextTalk:"lyricaEncount24"},
          "lyricaEncount24":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"テスラちゃんのマシーン、妄想を夢としてみるんだよね？" ,speech2:" "                                                    ,nextTalk:"lyricaEncount25"},
          "lyricaEncount25":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"マシーンが変な動きをしちゃったのだとしたら"           ,speech2:"リリカの魔法が原因なのかもって..."                    ,nextTalk:"lyricaEncount26"},
          "lyricaEncount26":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"あー...なるほど......"                                ,speech2:" "                                                    ,nextTalk:"lyricaEncount27"},
          "lyricaEncount27":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"たしかに魔法の影響を受けているのだとしたら"           ,speech2:"マシーンの挙動がボクに予測不可能なのも納得できるね...",nextTalk:"lyricaEncount28"},
          "lyricaEncount28":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"流石のボクも魔法は専門外だから..."                    ,speech2:" "                                                    ,nextTalk:"lyricaEncount29"},
          "lyricaEncount29":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"やっぱりリリカのせい...だよね？"                      ,speech2:" "                                                    ,nextTalk:"lyricaEncount30"},
          "lyricaEncount30":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ごめんなさい...みんなに迷惑かけちゃった..."           ,speech2:" "                                                    ,nextTalk:"lyricaEncount31"},
          "lyricaEncount31":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"仕方ないよ、コクリコちゃんに魔法をかけたからといって" ,speech2:"こんなことになるなんて"                               ,nextTalk:"lyricaEncount32"},
          "lyricaEncount32":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"誰にも予測できないもん"                               ,speech2:" "                                                    ,nextTalk:"lyricaEncount33"},
          "lyricaEncount33":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そうそう、リリカが気に病む必要はないよ"               ,speech2:" "                                                    ,nextTalk:"lyricaEncount34"},
          "lyricaEncount34":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"実験に事故はつきものだしね"                           ,speech2:" "                                                    ,nextTalk:"lyricaEncount35"},
          "lyricaEncount35":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ありがとう、マルコスくん、テスラちゃん..."            ,speech2:" "                                                    ,nextTalk:"end"},
          "aliceEncount1"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うぅ...びっくりした～"                                ,speech2:"まさか床が抜けちゃうなんて"                           ,nextTalk:"aliceEncount2"},
          "aliceEncount2"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"......！！"                                           ,speech2:" "                                                    ,nextTalk:"aliceEncount3"},
          "aliceEncount3"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"び、びっくりしたのはあたしもですよー！！"             ,speech2:"いきなり天井から皆さんが降ってくるなんて"             ,nextTalk:"aliceEncount4"},
          "aliceEncount4"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"アリスちゃん？！"                                     ,speech2:" "                                                    ,nextTalk:"aliceEncount5"},
          "aliceEncount5"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"アリスちゃんもこの世界にとばされてきたんだね"         ,speech2:" "                                                    ,nextTalk:"aliceEncount6"},
          "aliceEncount6"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"「も」ってことは"                                     ,speech2:"皆さんもとばされてきたってことですか？"               ,nextTalk:"aliceEncount7"},
          "aliceEncount7"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうだね"                                             ,speech2:"リリカたちも気が付いたらここにいたって感じ"           ,nextTalk:"aliceEncount8"},
          "aliceEncount8"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"そうですか..."                                        ,speech2:" "                                                    ,nextTalk:"aliceEncount9"},
          "aliceEncount9"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ひとまずこの世界で一人ぼっちじゃないことがわかって"   ,speech2:"少しだけ安心しました"                                 ,nextTalk:"aliceEncount10"},
          "aliceEncount10" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"それにしてもこの世界は何なんでしょう"                 ,speech2:"なんだか不気味というか..."                            ,nextTalk:"aliceEncount11"},
          "aliceEncount11" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それについてはボクの方から説明しようかな"             ,speech2:" "                                                    ,nextTalk:"aliceEncount12"},
          "aliceEncount12" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"説明...ってことは"                                    ,speech2:"この世界の正体はわかっているんですか？"               ,nextTalk:"aliceEncount13"},
          "aliceEncount13" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"大体は予測できたよ"                                   ,speech2:"さっそく説明するね"                                   ,nextTalk:"aliceEncount14"},
          "aliceEncount14" :{img:"0"                 ,name:" "                       ,speech1:"（情報共有中）"                                       ,speech2:" "                                                    ,nextTalk:"aliceEncount15"},
          "aliceEncount15" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"......という訳なんだ"                                 ,speech2:" "                                                    ,nextTalk:"aliceEncount16"},
          "aliceEncount16" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なるほど、つまりあたしたちはその妄想体験マシーン"     ,speech2:"って機械の力とリリカちゃんの魔法の合わせ技で"         ,nextTalk:"aliceEncount17"},
          "aliceEncount17" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"コクリコちゃんの夢の世界にきてしまった"               ,speech2:"...という訳ですね？"                                  ,nextTalk:"aliceEncount18"},
          "aliceEncount18" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"簡潔にまとめるとそうなるかな"                         ,speech2:" "                                                    ,nextTalk:"aliceEncount19"},
          "aliceEncount19" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ここがコクリコちゃんの夢の世界というのは"             ,speech2:"わかったんですけど"                                   ,nextTalk:"aliceEncount20"},
          "aliceEncount20" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"元の世界に戻るにはどうしたらいいんでしょう...？"      ,speech2:" "                                                    ,nextTalk:"aliceEncount21"},
          "aliceEncount21" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"妄想体験マシーンの仕組み通りなら"                     ,speech2:"使用者の願いを叶えれば脱出できるはず"                 ,nextTalk:"aliceEncount22"},
          "aliceEncount22" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"夢の世界を作っているのがコクリコちゃんだけなことを"   ,speech2:"考えると"                                             ,nextTalk:"aliceEncount23"},
          "aliceEncount23" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"使用者として登録されているのは"                       ,speech2:"コクリコちゃんだけかな？"                             ,nextTalk:"aliceEncount24"},
          "aliceEncount24" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"つまりコクリコちゃんの願いを叶えてあげれば"           ,speech2:"脱出できる可能性が高い？"                             ,nextTalk:"aliceEncount25"},
          "aliceEncount25" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"今までの話から考えるとコクリコちゃんの願いは"         ,speech2:"たぶん夢の中でお母さんと会うこと..."                  ,nextTalk:"aliceEncount26"},
          "aliceEncount26" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"となると当面の目標は"                                 ,speech2:"コクリコとコクリコのお母さんをこの世界で見つけて"     ,nextTalk:"aliceEncount27"},
          "aliceEncount27" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"二人を会わせることになるかな"                         ,speech2:" "                                                    ,nextTalk:"aliceEncount28"},
          "aliceEncount28" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"コクリコちゃんはともかく、この世界にコクリコちゃんの" ,speech2:"お母さんはいるんでしょうか..."                        ,nextTalk:"aliceEncount29"},
          "aliceEncount29" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"いなかったらいなかったでまた別の方法を考えよう"       ,speech2:" "                                                    ,nextTalk:"aliceEncount30"},
          "aliceEncount30" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"コクリコちゃんはたぶんいるだろうから"                 ,speech2:"まずはコクリコちゃん探しかな"                         ,nextTalk:"end"},
          "amairoEncount1" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"あ、あそこにいるの甘色じゃない？"                     ,speech2:" "                                                    ,nextTalk:"amairoEncount2"},
          "amairoEncount2" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや！君たちもこの世界にきていたのかい？"             ,speech2:" "                                                    ,nextTalk:"amairoEncount3"},
          "amairoEncount3" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうだよ～"                                           ,speech2:" "                                                    ,nextTalk:"amairoEncount4"},
          "amairoEncount4" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そのリアクションを見るに、甘色ちゃんも気付いたら"     ,speech2:"この世界にいたって感じかな？"                         ,nextTalk:"amairoEncount5"},
          "amairoEncount5" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"恥ずかしながらその通りだ"                             ,speech2:"どういった経緯でこの世界にきたのか全く覚えていない"   ,nextTalk:"amairoEncount6"},
          "amairoEncount6" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この世界に来る前の最後の記憶は"                       ,speech2:"アリーナでいつも通りバトルをしていたこと..."          ,nextTalk:"amairoEncount7"},
          "amairoEncount7" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"恥じることはないよ"                                   ,speech2:"みんなそんな感じだもん"                               ,nextTalk:"amairoEncount8"},
          "amairoEncount8" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そうか..."                                            ,speech2:" "                                                    ,nextTalk:"amairoEncount9"},
          "amairoEncount9" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ひとまず情報の整理がしたい"                           ,speech2:"現時点でお互いの持つ情報を共有しないかい？"           ,nextTalk:"amairoEncount10"},
          "amairoEncount10":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"おっけー、じゃあまずは僕らの持つ情報から共有しようか" ,speech2:" "                                                    ,nextTalk:"amairoEncount11"},
          "amairoEncount11":{img:"0"                 ,name:" "                       ,speech1:"（情報共有中）"                                       ,speech2:" "                                                    ,nextTalk:"amairoEncount12"},
          "amairoEncount12":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......というのが今僕らの持っている情報だよ"           ,speech2:" "                                                    ,nextTalk:"amairoEncount13"},
          "amairoEncount13":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"なるほど、コクリコの夢の世界か..."                    ,speech2:" "                                                    ,nextTalk:"amairoEncount14"},
          "amairoEncount14":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"にわかには信じがたいが"                               ,speech2:"君らの立てた仮説であれば信憑性は高いね"               ,nextTalk:"amairoEncount15"},
          "amairoEncount15":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"甘色の方は何かいい情報ある？"                         ,speech2:" "                                                    ,nextTalk:"amairoEncount16"},
          "amairoEncount16":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そうだな...君らの情報ほどの価値はないかもしれないが"  ,speech2:"先ほど向こうの方で"                                   ,nextTalk:"amairoEncount17"},
          "amairoEncount17":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"「マルゲリータアタァックっ！"                         ,speech2:"...ふぅ、なかなか頑丈な羊だぜっ！」"                  ,nextTalk:"amairoEncount18"},
          "amairoEncount18":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"という聞き馴染みのある声を聞いたよ"                   ,speech2:" "                                                    ,nextTalk:"amairoEncount19"},
          "amairoEncount19":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......なんでだろう、直接その声を聞いた訳じゃないのに" ,speech2:"僕にとっても聞き馴染みのある声な気がしてならない"     ,nextTalk:"amairoEncount20"},
          "amairoEncount20":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"奇遇だね、ボクもだよ"                                 ,speech2:" "                                                    ,nextTalk:"amairoEncount21"},
          "amairoEncount21":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"その声の正体を探ろうと思ったんだが"                   ,speech2:"大きな鏡が道を塞いでいてね"                           ,nextTalk:"amairoEncount22"},
          "amairoEncount22":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"まだあの声の主まで辿り着けていないんだ"               ,speech2:" "                                                    ,nextTalk:"amairoEncount23"},
          "amairoEncount23":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"つまりその大きな鏡をなんとかする手段があれば"         ,speech2:"声の主に辿りつけると"                                 ,nextTalk:"amairoEncount24"},
          "amairoEncount24":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"おそらくね"                                           ,speech2:" "                                                    ,nextTalk:"amairoEncount25"},
          "amairoEncount25":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"よし、次に目指すことは大体きまったかな"               ,speech2:"鏡を何とかして声の主に会いにいってみよう"             ,nextTalk:"end"},
          "pierreEncount1" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"あ、いたいた"                                         ,speech2:"おーい、ピエールー"                                   ,nextTalk:"pierreEncount2"},
          "pierreEncount2" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"お～う、お前たちも来ていたのかっ！"                   ,speech2:"会えてうれしいぜっ！"                                 ,nextTalk:"pierreEncount3"},
          "pierreEncount3" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"元気そうで何よりだよ"                                 ,speech2:" "                                                    ,nextTalk:"pierreEncount4"},
          "pierreEncount4" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ピエールさんも僕らと同じように"                       ,speech2:"気が付いたらこの世界にいたって感じかな？"             ,nextTalk:"pierreEncount5"},
          "pierreEncount5" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"その通りだっ！バトルをしていたはずなのに"             ,speech2:"気が付いたら赤い羊の群れのど真ん中に飛ばされて"       ,nextTalk:"pierreEncount6"},
          "pierreEncount6" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"大量の羊たちに追いかけられたのさっ！"                 ,speech2:" "                                                    ,nextTalk:"pierreEncount7"},
          "pierreEncount7" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"随分可哀想な場所に飛ばされていたんだね..."            ,speech2:" "                                                    ,nextTalk:"pierreEncount8"},
          "pierreEncount8" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"よーし、じゃあとりあえず"                             ,speech2:"恒例の情報共有からしていこうか～"                     ,nextTalk:"pierreEncount9"},
          "pierreEncount9" :{img:"0"                 ,name:" "                       ,speech1:"（情報共有中）"                                       ,speech2:" "                                                    ,nextTalk:"pierreEncount10"},
          "pierreEncount10":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"なるほどな...大体事情はわかったぜっ！"                ,speech2:" "                                                    ,nextTalk:"pierreEncount11"},
          "pierreEncount11":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"因みにオレ様から皆に共有できる情報は"                 ,speech2:"「赤い羊の頭突きは痛い」ってことくらいだぜっ！"       ,nextTalk:"pierreEncount12"},
          "pierreEncount12":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ずっと羊さんたちに追いかけられていたんだもんね..."    ,speech2:"かわいそう..."                                        ,nextTalk:"pierreEncount13"},
          "pierreEncount13":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ピエールとも合流できたことだし"                       ,speech2:"次はコクリコ探しかな？"                               ,nextTalk:"pierreEncount14"},
          "pierreEncount14":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コクリコちゃんもだけど"                               ,speech2:" "                                                    ,nextTalk:"pierreEncount15"},
          "pierreEncount15":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"もう一人この世界にとばされてきていそうなヒーローが"   ,speech2:"いるんだよね～"                                       ,nextTalk:"pierreEncount16"},
          "pierreEncount16":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ついでにその人を探してもいいかもしれない"             ,speech2:"人手は多いに越したことはないでしょ？"                 ,nextTalk:"pierreEncount17"},
          "pierreEncount17":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"この世界にとばされてきていそうなヒーロー...ですか？"  ,speech2:" "                                                    ,nextTalk:"pierreEncount18"},
          "pierreEncount18":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"妄想体験マシーンの側にいたテスラっちは例外として"     ,speech2:"その他5人には共通点がある"                            ,nextTalk:"pierreEncount19"},
          "pierreEncount19":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカとマルコスくん、甘色ちゃんにアリスちゃん"       ,speech2:"そしてピエールさん......あ！"                         ,nextTalk:"pierreEncount20"},
          "pierreEncount20":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"なるほど"                                             ,speech2:"ここにとばされる前にバトルをしていたメンバーか"       ,nextTalk:"pierreEncount21"},
          "pierreEncount21":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"たしか...マルコスくん、リリカちゃん、ピエールさん対"  ,speech2:"あたし、甘色ちゃん、サーティーンさんでしたね"         ,nextTalk:"pierreEncount22"},
          "pierreEncount22":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"つまり！サーティーンもこの世界にいるんじゃないかって" ,speech2:"ことだなっ！"                                         ,nextTalk:"pierreEncount23"},
          "pierreEncount23":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この世界にとばされてきた人たちには"                   ,speech2:"ちゃんと共通点があったんだね"                         ,nextTalk:"pierreEncount24"},
          "pierreEncount24":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それを踏まえて考えると..."                            ,speech2:" "                                                    ,nextTalk:"pierreEncount25"},
          "pierreEncount25":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"「妄想体験マシーンを使った部屋と"                     ,speech2:"みんながバトルをしていたエリアが近くにあった」"       ,nextTalk:"pierreEncount26"},
          "pierreEncount26":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"という仮説の上でなら「妄想体験マシーンの"             ,speech2:"近くにいた人がこの世界にとばされた」"                 ,nextTalk:"pierreEncount27"},
          "pierreEncount27":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"っていうことになる..."                                ,speech2:" "                                                    ,nextTalk:"pierreEncount28"},
          "pierreEncount28":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"使用者であるコクリコの次にマシーンに近かったボクが"   ,speech2:"この世界に来ているんだから、その説が有力そうだね"     ,nextTalk:"pierreEncount29"},
          "pierreEncount29":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"さーて、じゃあそろそろコクリコちゃんと"               ,speech2:"そのお母さん、ついでにサーティーン探ししていきますか" ,nextTalk:"end"},
         "thirteenEncount1":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"お～っと、あのブラックオリーブのように"               ,speech2:"真っ黒な人影は......."                                ,nextTalk:"thirteenEncount2"},
         "thirteenEncount2":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あん？なんだ、お前らも来てたのか？"                   ,speech2:" "                                                    ,nextTalk:"thirteenEncount3"},
         "thirteenEncount3":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"サーティーン発見～"                                   ,speech2:"コクリコより先に見つけられたね"                       ,nextTalk:"thirteenEncount4"},
         "thirteenEncount4":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"thirteenEncount5"},
         "thirteenEncount5":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......本当にお前らなのか？"                           ,speech2:" "                                                    ,nextTalk:"thirteenEncount6"},
         "thirteenEncount6":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"えーと、もしかして偽物だと思われています......？"     ,speech2:" "                                                    ,nextTalk:"thirteenEncount7"},
         "thirteenEncount7":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"そうだな...偽物なのか幻覚なのか"                      ,speech2:" "                                                    ,nextTalk:"thirteenEncount8"},
         "thirteenEncount8":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"何にせよ、今のお前らに対しては違和感バリバリだ"       ,speech2:" "                                                    ,nextTalk:"thirteenEncount9"},
         "thirteenEncount9":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"何しろ肉体に魂がくっついてないんだからな"             ,speech2:" "                                                    ,nextTalk:"thirteenEncount10"},
        "thirteenEncount10":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"魂......？あそっか、死神さんだから"                   ,speech2:"魂がくっついているかどうかがわかるんですね！"         ,nextTalk:"thirteenEncount11"},
        "thirteenEncount11":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"......って、えぇーー！！"                             ,speech2:"今のあたしたち魂なし状態なんですか？！"               ,nextTalk:"thirteenEncount12"},
        "thirteenEncount12":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカたち幽霊になっちゃったってこと...？"            ,speech2:" "                                                    ,nextTalk:"thirteenEncount13"},
        "thirteenEncount13":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"いや、幽霊は寧ろ逆で"                                 ,speech2:"魂はあるけど肉体はない状態にちかい"                   ,nextTalk:"thirteenEncount14"},
        "thirteenEncount14":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この状態はそうだな......"                             ,speech2:"「ゾンビ」というやつに近いんじゃないかい？"           ,nextTalk:"thirteenEncount15"},
        "thirteenEncount15":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"どっちでもいやですよ！"                               ,speech2:"あたしまだやり残したことがたくさん......"             ,nextTalk:"thirteenEncount16"},
        "thirteenEncount16":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"はい、一旦みんな落ち着いて！"                         ,speech2:"ボクらは別にゾンビにも幽霊にもなってない！"           ,nextTalk:"thirteenEncount17"},
        "thirteenEncount17":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ここは夢の世界なんだよ？"                             ,speech2:"魂が見えないとしても不思議じゃない"                   ,nextTalk:"thirteenEncount18"},
        "thirteenEncount18":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"魂のある実体は今頃現実世界で寝てるだろうからね"       ,speech2:" "                                                    ,nextTalk:"thirteenEncount19"},
        "thirteenEncount19":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そっか、リリカたちは魂まで夢の中に"                   ,speech2:"入っちゃった訳じゃないんだね"                         ,nextTalk:"thirteenEncount20"},
        "thirteenEncount20":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"よかった～、安心しました"                             ,speech2:" "                                                    ,nextTalk:"thirteenEncount21"},
        "thirteenEncount21":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"待て、俺様を残して勝手に安心するな"                   ,speech2:"なんだ夢の世界って"                                   ,nextTalk:"thirteenEncount22"},
        "thirteenEncount22":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あー......そういえばまだ説明してないんだっけか"       ,speech2:" "                                                    ,nextTalk:"thirteenEncount23"},
        "thirteenEncount23":{img:"0"                 ,name:" "                       ,speech1:"（情報共有中）"                                       ,speech2:" "                                                    ,nextTalk:"thirteenEncount24"},
        "thirteenEncount24":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ほーん、まぁ大体事情はわかった"                       ,speech2:"あとはコクリコとその母親を探すだけってことか"         ,nextTalk:"thirteenEncount25"},
        "thirteenEncount25":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"（コクリコの母親ねぇ..."                              ,speech2:"まぁ夢の中ってんなら可能性は......）"                 ,nextTalk:"thirteenEncount26"},
        "thirteenEncount26":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"サーティーンも見つかったことだし"                     ,speech2:"さぁ先へ進もう！"                                     ,nextTalk:"end"},
          "coclicoEncount1":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"お、あそこにいるのはコクリコちゃんじゃない？"         ,speech2:" "                                                    ,nextTalk:"coclicoEncount2"},
          "coclicoEncount2":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"マルコスおにいちゃんだぁ"                             ,speech2:"みんなもいる～"                                       ,nextTalk:"coclicoEncount3"},
          "coclicoEncount3":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なかなか見つからないと思ったら"                       ,speech2:"こんなところにいたんですね"                           ,nextTalk:"coclicoEncount4"},
          "coclicoEncount4":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あのね、コクリコね、テスラおにいちゃんに"             ,speech2:"ましーん？をかりてゆめのせかいにきたんだー"           ,nextTalk:"coclicoEncount5"},
          "coclicoEncount5":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"みんなもコクリコのゆめのせかいに"                     ,speech2:"あそびにきたの？"                                     ,nextTalk:"coclicoEncount6"},
          "coclicoEncount6":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"まぁ......大体そんなところだぜっ！"                   ,speech2:" "                                                    ,nextTalk:"coclicoEncount7"},
          "coclicoEncount7":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"コクリコはお母さんに会いに夢の世界に来たんだよね？"   ,speech2:"お母さんにはもう会えた？"                             ,nextTalk:"coclicoEncount8"},
          "coclicoEncount8":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"えーとねー、まだあえてないけど......"                 ,speech2:" "                                                    ,nextTalk:"coclicoEncount9"},
          "coclicoEncount9":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"さっきあっちからおかあさんのこえが"                   ,speech2:"きこえたの"                                           ,nextTalk:"coclicoEncount10"},
         "coclicoEncount10":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"だからいまこえのしたほうに"                           ,speech2:"むかってるんだ～"                                     ,nextTalk:"coclicoEncount11"},
         "coclicoEncount11":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"えーと、そのあっちというのはどの方向だろうか？"       ,speech2:" "                                                    ,nextTalk:"coclicoEncount12"},
         "coclicoEncount12":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさんのこえはね～"                               ,speech2:"うえのほうからきこえたよ"                             ,nextTalk:"coclicoEncount13"},
         "coclicoEncount13":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ふむ、となるとこの上のエリアにコクリコのお母さんが"   ,speech2:"いるとみてよさそうかな？"                             ,nextTalk:"coclicoEncount14"},
         "coclicoEncount14":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"みんなもいっしょにおかあさんにあいにいく？"           ,speech2:"おかあさんもよろこぶとおもうな～"                     ,nextTalk:"coclicoEncount15"},
         "coclicoEncount15":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうだね、是非一緒に会いにいかせてよ"                 ,speech2:" "                                                    ,nextTalk:"end"},
          "marcosLocal1"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この世界の正体の見当はついてきたかも..."              ,speech2:"でもまだちょっと確信はできないなー"                   ,nextTalk:"marcosLocal2"},
          "marcosLocal2"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"それに元の世界に戻る方法もまだわからない..."          ,speech2:" "                                                    ,nextTalk:"marcosLocal3"},
          "marcosLocal3"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"「魔法少女リリカ☆ルルカ第二期リマスター版」の"       ,speech2:"予約受付開始時刻までにはなんとしても帰らないと...！"  ,nextTalk:"end"},
          "clockGet1"      :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"これは...壊れているみたいだけど懐中時計かな？"        ,speech2:" "                                                    ,nextTalk:"clockGet2"},
          "clockGet2"      :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ちょっと見せてくれる？"                               ,speech2:" "                                                    ,nextTalk:"clockGet3"},
          "clockGet3"      :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ふむふむ...パーツさえあれば直せそうな感じだね"        ,speech2:" "                                                    ,nextTalk:"clockGet4"},
          "clockGet4"      :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"おー、じゃあせっかく拾ったんだし"                     ,speech2:"探索ついてでにパーツを探して直してみてもいいかもね"   ,nextTalk:"end"},
          "dreamPieceGet1" :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なんでしょうこれ......"                               ,speech2:"虹色の...石？"                                        ,nextTalk:"dreamPieceGet2"},
          "dreamPieceGet2" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"この石...リリカの魔法にちかい何かを感じる..."         ,speech2:"夢の力が含まれているのかも...？"                      ,nextTalk:"dreamPieceGet3"},
          "dreamPieceGet3" :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"夢の力かぁ...、その力を抽出して"                      ,speech2:"リリカがパワーアップ！...とかできない？"              ,nextTalk:"dreamPieceGet4"},
          "dreamPieceGet4" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うーん...少なくともこのままの状態ではどうにも..."     ,speech2:" "                                                    ,nextTalk:"dreamPieceGet5"},
          "dreamPieceGet5" :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"他のアイテムのように"                                 ,speech2:"マルコスが加工して使えるようにはできないのかっ？"     ,nextTalk:"dreamPieceGet6"},
          "dreamPieceGet6" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まだ詳しく調べてないからわからないけど"               ,speech2:" "                                                    ,nextTalk:"dreamPieceGet7"},
          "dreamPieceGet7" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"これに関しては他のアイテム以上に"                     ,speech2:"不可思議な存在の気がする"                             ,nextTalk:"dreamPieceGet8"},
          "dreamPieceGet8" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"だからちょっとこれ単体だと"                           ,speech2:"いい使用用途を見出すのは難しそう"                     ,nextTalk:"dreamPieceGet9"},
          "dreamPieceGet9" :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうだな...あと3つくらいサンプルがあれば"             ,speech2:"この石について何かわかるかも"                         ,nextTalk:"dreamPieceGet10"},
          "dreamPieceGet10":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ではその石を見かけたときには拾っておくことにしよう"   ,speech2:" "                                                    ,nextTalk:"dreamPieceGet11"},
          "dreamPieceGet11":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この石とかその石とか呼ぶのわかりにくいから"           ,speech2:"何か名前をつけない？"                                 ,nextTalk:"dreamPieceGet12"},
          "dreamPieceGet12":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうだなぁ...夢の力を含む石だから"                    ,speech2:"無難につけるなら夢力石とか？"                         ,nextTalk:"dreamPieceGet13"},
          "dreamPieceGet13":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なんか堅苦しいですね..."                              ,speech2:" "                                                    ,nextTalk:"dreamPieceGet14"},
          "dreamPieceGet14":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"「夢の欠片」なんていかがでしょう？"                   ,speech2:"なんだか響きもかわいくないですか？"                   ,nextTalk:"dreamPieceGet15"},
          "dreamPieceGet15":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ふむ、そちらの方が覚えやすくもありそうだね"           ,speech2:" "                                                    ,nextTalk:"dreamPieceGet16"},
          "dreamPieceGet16":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"じゃあそっちにしよう"                                 ,speech2:"この石の名前は「夢の欠片」で決定～"                   ,nextTalk:"end"},
      "marcosDreamPieceGet":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"お～、夢の欠片だ"                                     ,speech2:"もう<font id=dreamPieceNumID></font>個あれば何かいい利用法を見つけられそう......"   ,nextTalk:"end"},
      "nikolaDreamPieceGet":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"夢の欠片だね"                                         ,speech2:"う～ん、もう<font id=dreamPieceNumID></font>個くらいサンプルが欲しいな......"       ,nextTalk:"end"},
      "lyricaDreamPieceGet":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"夢の欠片だ！"                                         ,speech2:"あと<font id=dreamPieceNumID></font>個欲しいってマルコスくんたちは言っていたっけ..."  ,nextTalk:"end"},
       "aliceDreamPieceGet":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"これは......夢の欠片です！"                           ,speech2:"たしかあと<font id=dreamPieceNumID></font>個あればいいんでしたっけ？"                 ,nextTalk:"end"},
      "amairoDreamPieceGet":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、夢の欠片だね"                                   ,speech2:"これで必要なサンプル数はあと<font id=dreamPieceNumID></font>個になった訳だ"           ,nextTalk:"end"},
      "pierreDreamPieceGet":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"夢の欠片！GETだぜっ！"                                ,speech2:"あと<font id=dreamPieceNumID></font>個あればユメモンマスターになれるんだったか？" ,nextTalk:"end"},
    "thirteenDreamPieceGet":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"夢の欠片あったぞ～"                                   ,speech2:"たしかあと<font id=dreamPieceNumID></font>個欲しいんだったか？めんどくせぇ......"     ,nextTalk:"end"},
     "coclicoDreamPieceGet":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"ゆめのかけらみつけたよ～"                             ,speech2:"たしかあと<font id=dreamPieceNumID></font>こあればいいんだよね！"                     ,nextTalk:"end"},
         "dreamPieceClear1":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"夢の欠片か、これで四つ目か？"                         ,speech2:"欲しがってた分の数は集まったことになるな"             ,nextTalk:"dreamPieceClear2"},
         "dreamPieceClear2":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"うん、これだけあれば十分だと思うな"                   ,speech2:"テスラっち、ちょっと手伝ってもらえる？"               ,nextTalk:"dreamPieceClear3"},
         "dreamPieceClear3":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"もちろんいいよー！"                                   ,speech2:" "                                                    ,nextTalk:"dreamPieceClear4"},
         "dreamPieceClear4":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あと、その、リリカちゃんにも手伝ってもらえたら"       ,speech2:"ありがたいかな...って"                                ,nextTalk:"dreamPieceClear5"},
         "dreamPieceClear5":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカも！？"                                         ,speech2:"リリカに手伝えることあるかな......"                   ,nextTalk:"dreamPieceClear6"},
         "dreamPieceClear6":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"夢の力が含まれている石なんでしょ？"                   ,speech2:"その性質を活かすならリリカの助けは必須だよ"           ,nextTalk:"dreamPieceClear7"},
         "dreamPieceClear7":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"だってこの中で一番夢の力に詳しいもん"                 ,speech2:" "                                                    ,nextTalk:"dreamPieceClear8"},
         "dreamPieceClear8":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"たしかに！リリカちゃんは夢の専門家ですもんね"         ,speech2:" "                                                    ,nextTalk:"dreamPieceClear9"},
         "dreamPieceClear9":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカが一番......リリカが専門家......"               ,speech2:" "                                                    ,nextTalk:"dreamPieceClear10"},
        "dreamPieceClear10":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......よーし！リリカがんばるよ！！"                   ,speech2:"絶対みんなの期待に応えるからね！"                     ,nextTalk:"dreamPieceClear11"},
        "dreamPieceClear11":{img:"0"                 ,name:" "                       ,speech1:"（数時間後）"                                         ,speech2:" "                                                    ,nextTalk:"dreamPieceClear12"},
        "dreamPieceClear12":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"みんなお待たせ！"                                     ,speech2:" "                                                    ,nextTalk:"dreamPieceClear13"},
        "dreamPieceClear13":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、思っていたより早かったね"                       ,speech2:" "                                                    ,nextTalk:"dreamPieceClear14"},
        "dreamPieceClear14":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"一体なにができたんだっ！？"                           ,speech2:" "                                                    ,nextTalk:"dreamPieceClear15"},
        "dreamPieceClear15":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"今回作ったのはこの「二次発生夢体験マシーン」！！"     ,speech2:" "                                                    ,nextTalk:"dreamPieceClear16"},
        "dreamPieceClear16":{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"にぎはせいむらいけんましーん？"                       ,speech2:" "                                                    ,nextTalk:"dreamPieceClear17"},
        "dreamPieceClear17":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"また随分と難しい名前つけましたね......"               ,speech2:" "                                                    ,nextTalk:"dreamPieceClear18"},
        "dreamPieceClear18":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"んでそのニジハセ？は何ができるんだ？"                 ,speech2:" "                                                    ,nextTalk:"dreamPieceClear19"},
        "dreamPieceClear19":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"二次発生夢体験マシーン！頑張って考えたんだから"       ,speech2:"変な略し方しないで！"                                 ,nextTalk:"dreamPieceClear20"},
        "dreamPieceClear20":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁ名前は一旦置いておいて"                           ,speech2:"ひとまずこれの使い方の話をしようか"                   ,nextTalk:"dreamPieceClear21"},
        "dreamPieceClear21":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この世界のところどころにあった虹色の岩は覚えている？" ,speech2:" "                                                    ,nextTalk:"dreamPieceClear22"},
        "dreamPieceClear22":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"あの異質な雰囲気を感じる岩か"                         ,speech2:"あの岩がどうかしたのかい？"                           ,nextTalk:"dreamPieceClear23"},
        "dreamPieceClear23":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうその岩の正体がね"                                 ,speech2:"どうやら僕たちの見ている夢らしいんだ"                 ,nextTalk:"dreamPieceClear24"},
        "dreamPieceClear24":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"虹色の岩の正体が夢...？"                              ,speech2:"あんまりピンとこないんですが......"                   ,nextTalk:"dreamPieceClear25"},
        "dreamPieceClear25":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカたちは今コクリコちゃんの夢の中にいるけど"       ,speech2:"現実世界では眠っている状態なの"                       ,nextTalk:"dreamPieceClear26"},
        "dreamPieceClear26":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"眠っている状態なんだから夢を見ていても不思議じゃない" ,speech2:" "                                                    ,nextTalk:"dreamPieceClear27"},
        "dreamPieceClear27":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"本来眠っているリリカはリリカの夢の中にいるはずなのに" ,speech2:"今はコクリコちゃんの夢の中にいる"                     ,nextTalk:"dreamPieceClear28"},
        "dreamPieceClear28":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"今本来リリカがいるべきリリカの夢の世界は"             ,speech2:"どうなっていると思う？"                               ,nextTalk:"dreamPieceClear29"},
        "dreamPieceClear29":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"さっぱりだぜっ！"                                     ,speech2:" "                                                    ,nextTalk:"dreamPieceClear30"},
        "dreamPieceClear30":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"どうやらその主を失っている夢の世界がこの世界で"       ,speech2:"虹色の岩として顕現しているみたいなんだ"               ,nextTalk:"dreamPieceClear31"},
        "dreamPieceClear31":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そしてなんと！このマシーンを使えばその夢の世界に"     ,speech2:"ボクらの誰でも入ることができるんだ！"                 ,nextTalk:"dreamPieceClear32"},
        "dreamPieceClear32":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"話が複雑でわかりくーい"                               ,speech2:"もっと簡潔に頼むわ"                                   ,nextTalk:"dreamPieceClear33"},
        "dreamPieceClear33":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コクリコちゃん以外の夢の世界にも入れるようになった"   ,speech2:" "                                                    ,nextTalk:"dreamPieceClear34"},
        "dreamPieceClear34":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"わかりやすーい"                                       ,speech2:" "                                                    ,nextTalk:"dreamPieceClear35"},
        "dreamPieceClear35":{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だがそれはこの世界の脱出とは"                         ,speech2:"直接の関係はないんじゃないかっ！？"                   ,nextTalk:"dreamPieceClear36"},
        "dreamPieceClear36":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"多分そうだね～"                                       ,speech2:"この世界の脱出とは関係ないと思う"                     ,nextTalk:"dreamPieceClear37"},
        "dreamPieceClear37":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"だからまぁ、気が向いたら虹色の石へ行っみてもいいかも" ,speech2:"って感じでいいんじゃないかな"                         ,nextTalk:"end"},
          "dreamRockEvent1":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この虹色の岩......これまでもちょくちょく見かけたよね" ,speech2:" "                                                    ,nextTalk:"dreamRockEvent2"},
          "dreamRockEvent2":{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この世界の中でも特に異質なもののような気がして"       ,speech2:"ならないんだが、上手くその異質さが表現できないな"     ,nextTalk:"dreamRockEvent3"},
          "dreamRockEvent3":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"甘色ちゃんもこの岩から何か違和感感じます？"           ,speech2:" "                                                    ,nextTalk:"dreamRockEvent4"},
          "dreamRockEvent4":{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なんというか、この世界にあるものなのに"               ,speech2:"この世界のものじゃない...みたいな感じがするんですよね",nextTalk:"dreamRockEvent5"},
          "dreamRockEvent5":{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカも何というか、この岩はコクリコちゃんの夢とは"   ,speech2:"関係ないもののような気がするの......"                 ,nextTalk:"dreamRockEvent6"},
          "dreamRockEvent6":{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺様もこの岩にはなんか妙な雰囲気を感じるんだよな..."  ,speech2:"おいマルコス、テスラ、何かわかんねぇのか？"           ,nextTalk:"dreamRockEvent7"},
          "dreamRockEvent7":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"正直今の時点では何もわからないけど"                   ,speech2:"気になるようなら後で調べてみるよ"                     ,nextTalk:"dreamRockEvent8"},
          "dreamRockEvent8":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"何かわかったらまた知らせるね"                         ,speech2:" "                                                    ,nextTalk:"end"},
          "marionetteEnc1" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あそこに吊るされているのは......お人形？"             ,speech2:" "                                                    ,nextTalk:"marionetteEnc2"},
          "marionetteEnc2" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"全身が鋭い棘だらけになっているようだね"               ,speech2:"触っただけでも怪我をしてしまいそうだ"                 ,nextTalk:"marionetteEnc3"},
          "marionetteEnc3" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"か、勝手に落ちて、勝手に浮き上がった...？！"          ,speech2:" "                                                    ,nextTalk:"marionetteEnc4"},
          "marionetteEnc4" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"残念ながらただの人形ではないらしい"                   ,speech2:"皆、気を付けて...！"                                  ,nextTalk:"endD"},
          "marionetteEnd1" :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"な、なんとか勝てた～......"                           ,speech2:" "                                                    ,nextTalk:"marionetteEnd2"},
          "marionetteEnd2" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや～、皆だいぶ消耗しているようだね"                 ,speech2:"無理もない、他の敵とは一線を画する相手だったからね"   ,nextTalk:"marionetteEnd3"},
          "marionetteEnd3" :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"あの人形を倒したことで先へ進む道も開けたようだが、"   ,speech2:"先へ進む前に一度休憩をはさんでもいいかもしれないな"   ,nextTalk:"end"},
          "skeletonEnc1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あれは......ガイコツさんでしょうか？"                 ,speech2:" "                                                    ,nextTalk:"skeletonEnc2"},
          "skeletonEnc2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"あのポーズ...「お手をどうぞ」ってところか？"          ,speech2:"どうやらオレ様たちとダンスしたいらしいなっ！"         ,nextTalk:"skeletonEnc3"},
          "skeletonEnc3"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"でもなんか、普通に楽しく踊りましょう！"               ,speech2:"って感じではなさそうですよね......"                   ,nextTalk:"endD"},
          "skeletonEnd1"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ふぅ......なかなか情熱的なダンスだったぜっ！"         ,speech2:" "                                                    ,nextTalk:"skeletonEnd2"},
          "skeletonEnd2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"うぅ...ライブアリーナの普通のダンスが恋しいです"      ,speech2:" "                                                    ,nextTalk:"end"},
          "LBenc1"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あ！おかあさんだ！！"                                 ,speech2:" "                                                    ,nextTalk:"LBenc2"},
          "LBenc2"         :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"あれがお嬢ちゃんのマッマかっ！"                       ,speech2:" "                                                    ,nextTalk:"LBenc3"},
          "LBenc3"         :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"優しそうな方ですね"                                   ,speech2:"無事見つかってよかった～"                             ,nextTalk:"LBenc4"},
          "LBenc4"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさーーん！！"                                   ,speech2:" "                                                    ,nextTalk:"LBenc5"},
          "LBenc5"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさん？！"                                       ,speech2:" "                                                    ,nextTalk:"LBenc6"},
          "LBenc6"         :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"大変！コクリコちゃんのお母さんが大きなガイコツに"     ,speech2:"食べられちゃった！！"                                 ,nextTalk:"LBenc7"},
          "LBenc7"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"はやくおかあさんをたすけないと！"                     ,speech2:" "                                                    ,nextTalk:"LBenc8"},
          "LBenc8"         :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そうだね、親子の再会に水を差すような輩は"             ,speech2:"僕たちが許さないよ！"                                 ,nextTalk:"LBenc9"},
          "LBenc9"         :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ったく、世話の焼ける親子だぜ"                         ,speech2:" "                                                    ,nextTalk:"LBenc10"},
          "LBenc10"        :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"あいつを倒してコクリコのお母さんを解放するのが"       ,speech2:"元の世界に帰る最後の課題かな"                         ,nextTalk:"LBenc11"},
          "LBenc11"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうなるだろうね"                                     ,speech2:"よーしじゃあ最後までがんばっていこう！"               ,nextTalk:"endD"},
          "LBend1"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさーーーーん！！"                               ,speech2:" "                                                    ,nextTalk:"LBend2"},
          "LBend2"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あのね、あのね、コクリコね"                           ,speech2:"ちゃんとおるすばんできてるよ"                         ,nextTalk:"LBend3"},
          "LBend3"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"でもね、おかあさんがかえってくるのがおそいから"       ,speech2:"ゆめのなかであいにきちゃったの"                       ,nextTalk:"LBend4"},
          "LBend4"         :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"それでね、それでね......"                             ,speech2:" "                                                    ,nextTalk:"LBend5"},
          "LBend5"         :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"よかった、コクリコちゃんのお母さんは無事そうだね"     ,speech2:" "                                                    ,nextTalk:"LBend6"},
          "LBend6"         :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......そうだな、ここじゃちゃんと無事そうだ"           ,speech2:" "                                                    ,nextTalk:"LBend7"},
          "LBend7"         :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"これでコクリコの願いは叶えられたということかな"       ,speech2:" "                                                    ,nextTalk:"LBend8"},
          "LBend8"         :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"そうだと思うぜっ！"                                   ,speech2:"ほらこの世界の様子が......"                           ,nextTalk:"LBend9"},
          "LBend9"         :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もうこの世界ともお別れですか～"                       ,speech2:" "                                                    ,nextTalk:"LBend10"},
          "LBend10"        :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この世界の冒険も長ったような短かったような......"     ,speech2:" "                                                    ,nextTalk:"LBend11"},
          "LBend11"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"名残惜しい？"                                         ,speech2:" "                                                    ,nextTalk:"LBend12"},
          "LBend12"        :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"う～ん、名残惜しさもなくはないですが"                 ,speech2:"早く帰りたい気持ちの方が強いですかね......"           ,nextTalk:"LBend13"},
          "LBend13"        :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクも名残惜しさよりちゃんと帰れそうなことに"         ,speech2:"安心してるよ"                                         ,nextTalk:"LBend14"},
          "LBend14"        :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクの発明品のせいで皆ここから帰れなくなる..."        ,speech2:"みたいな展開は流石に嫌だったからね"                   ,nextTalk:"LBend15"},
          "LBend15"        :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"でも何というか、このメンバーで一致団結して"           ,speech2:"一つの目標のために頑張るって経験は"                   ,nextTalk:"LBend16"},
          "LBend16"        :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"正直、ちょっとだけ楽しかったかもしれない"             ,speech2:" "                                                    ,nextTalk:"LBend17"},
          "LBend17"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"それは僕も同感できちゃうな～"                         ,speech2:" "                                                    ,nextTalk:"LBend18"},
          "LBend18"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"こんな大人数で一つの目標のために団結するってのは"     ,speech2:"僕も初めての経験だったかもしれない"                   ,nextTalk:"LBend19"},
          "LBend19"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"事故から起きた冒険だったけど"                         ,speech2:"結果的にはいい思い出になったよ"                       ,nextTalk:"LBend20"},
          "LBend20"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁそれでもやっぱり流石にそろそろ帰らないと"         ,speech2:" "                                                    ,nextTalk:"LBend21"},
          "LBend21"        :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"きっと僕らの帰りを待つ人が"                           ,speech2:"たくさんいるだろうからね......"                       ,nextTalk:"LBend22"},
          "LBend22"        :{img:"0"                 ,name:" "                       ,speech1:"ーーーEndーーー"                                      ,speech2:" "                                                    ,nextTalk:"endE"},
          "princessEnc1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あれれ～？コクリコがもうひとりいるよ？"               ,speech2:" "                                                    ,nextTalk:"princessEnc2"},
          "princessEnc2"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"おー、そうだな。けど......"                           ,speech2:" "                                                    ,nextTalk:"princessEnc3"},
          "princessEnc3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あっちのコクリコはこっちのコクリコより"               ,speech2:"どうやらちっとばかし悪い子らしい"                     ,nextTalk:"princessEnc4"},
          "princessEnc4"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ちょいとお説教が必要みたいだな！"                     ,speech2:" "                                                    ,nextTalk:"endD"},
          "princessEnd1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"なんだったんだろ～、コクリコのにせもの？"             ,speech2:" "                                                    ,nextTalk:"princessEnd2"},
          "princessEnd2"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ま～そんなとこじゃねぇか？"                           ,speech2:"激しめの戦いだったが、怪我はねぇか？"                 ,nextTalk:"princessEnd3"},
          "princessEnd3"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"だいじょうぶだよ！コクリコつよいもん！"               ,speech2:"でもちょっとだけつかれちゃった......"                 ,nextTalk:"princessEnd4"},
          "princessEnd4"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"おうそうか。んじゃまぁ...先へ進む前に"                ,speech2:"一度休憩をはさんどいた方がいいかもしんねぇな"         ,nextTalk:"end"},
          "niziiroEnc1"    :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"さてさて、ここは一体どいつの夢の中なのやら"           ,speech2:" "                                                    ,nextTalk:"niziiroEnc2"},
          "niziiroEnc2"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"あれは......"                                         ,speech2:" "                                                    ,nextTalk:"niziiroEnc3"},
          "niziiroEnc3"    :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"お前の知り合いか？そういや同じ狐面だもんな"           ,speech2:" "                                                    ,nextTalk:"niziiroEnc4"},
          "niziiroEnc4"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"うん、僕の祖母だよ"                                   ,speech2:"狐ヶ咲一族当主、狐ヶ咲虹色だ"                         ,nextTalk:"niziiroEnc5"},
          "niziiroEnc5"    :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"......甘色"                                           ,speech2:" "                                                    ,nextTalk:"niziiroEnc6"},
          "niziiroEnc6"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"は、はいっ！"                                         ,speech2:" "                                                    ,nextTalk:"niziiroEnc7"},
          "niziiroEnc7"    :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"<font id=thisSpeech onclick=f_popUpN('null','甘色の使う刀は狐ヶ咲黒漆祓拵為次といい、一族の中で最も才ある者が受け継ぐ刀である。甘色は虹色からこの刀を託された。'); style=color:#0012ff;z-index:5;>為次</font>をそこに置け"                                     ,speech2:" "                                                    ,nextTalk:"niziiroEnc8"},
          "niziiroEnc8"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......！"                                             ,speech2:" "                                                    ,nextTalk:"niziiroEnc9"},
          "niziiroEnc9"    :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"それをお前に託したのは間違いだった"                   ,speech2:"故にそれをここに置いていけと言っている"               ,nextTalk:"niziiroEnc10"},
          "niziiroEnc10"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"な......"                                             ,speech2:" "                                                    ,nextTalk:"niziiroEnc11"},
          "niziiroEnc11"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ま、待ってください！ババ様！"                         ,speech2:"たしかに僕はまだ未熟ですが、まだ未熟ですが......！"   ,nextTalk:"niziiroEnc12"},
          "niziiroEnc12"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"おい、甘色"                                           ,speech2:" "                                                    ,nextTalk:"niziiroEnc13"},
          "niziiroEnc13"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"言われた通りこの刀に恥じぬよう精進してきました！"     ,speech2:"これからも、いやこれからはさらにいっそう...！"        ,nextTalk:"niziiroEnc14"},
          "niziiroEnc14"   :{img:"0"                 ,name:" "                       ,speech1:"（ポカッ）"                                           ,speech2:" "                                                    ,nextTalk:"niziiroEnc15"},
          "niziiroEnc15"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"いった！"                                             ,speech2:"いきなり何をするんだサーティーン！"                   ,nextTalk:"niziiroEnc16"},
          "niziiroEnc16"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"テンパり過ぎだ、ちと冷静になれ"                       ,speech2:" "                                                    ,nextTalk:"niziiroEnc17"},
          "niziiroEnc17"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ここはお前の夢の世界なんだろ？"                       ,speech2:"だったらあの婆さんも本物のお前の婆さんじゃねぇだろ"   ,nextTalk:"niziiroEnc18"},
          "niziiroEnc18"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"コンパスにヒーローとしていない奴なんだから"           ,speech2:"俺たちみたく夢の世界に迷い込んだ訳でもないだろうしな" ,nextTalk:"niziiroEnc19"},
          "niziiroEnc19"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"た、たしかに......"                                   ,speech2:" "                                                    ,nextTalk:"niziiroEnc20"},
          "niziiroEnc20"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"取り乱してすまなかったね......"                       ,speech2:" "                                                    ,nextTalk:"niziiroEnc21"},
          "niziiroEnc21"   :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"niziiroEnc22"},
          "niziiroEnc22"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"（そうだこれは夢だ。ババ様に見放される悪い夢......）" ,speech2:" "                                                    ,nextTalk:"niziiroEnc23"},
          "niziiroEnc23"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"（いや、ただの悪い夢で片づけていいのか？"             ,speech2:"何故僕はこんな夢を見ているんだ？）"                   ,nextTalk:"niziiroEnc24"},
          "niziiroEnc24"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"（...きっとこれは僕の不安が可視化されたものだ）"      ,speech2:" "                                                    ,nextTalk:"niziiroEnc25"},
          "niziiroEnc25"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"（自分では為次を持つのに相応しくはないんじゃないか"   ,speech2:"という不安が恐らくこうして夢になっているんだろう）"   ,nextTalk:"niziiroEnc26"},
          "niziiroEnc26"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"niziiroEnc27"},
          "niziiroEnc27"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ババ様、貴方に挑ませてください"                       ,speech2:" "                                                    ,nextTalk:"niziiroEnc28"},
          "niziiroEnc28"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"貴方が僕の抱える不安の権化であるなら"                 ,speech2:"僕は貴方と向き合わねばならない"                       ,nextTalk:"niziiroEnc29"},
          "niziiroEnc29"   :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"私に勝てば自身の抱える不安を払拭できるとでも？"       ,speech2:" "                                                    ,nextTalk:"niziiroEnc30"},
          "niziiroEnc30"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"わかりません。でも貴方の言う通りに為次を置き"         ,speech2:"尻尾を巻いて逃げるようなことはできない"               ,nextTalk:"niziiroEnc31"},
          "niziiroEnc31"   :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"niziiroEnc32"},
          "niziiroEnc32"   :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"いいだろう、かかってくるといい"                       ,speech2:" "                                                    ,nextTalk:"end"},
          "niziiroEnd1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"か、勝った......？"                                   ,speech2:" "                                                    ,nextTalk:"niziiroEnd2"},
          "niziiroEnd2"    :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"随分と腕を上げたじゃないか甘色"                       ,speech2:"大したものだ"                                         ,nextTalk:"niziiroEnd3"},
          "niziiroEnd3"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ババ様......"                                         ,speech2:" "                                                    ,nextTalk:"niziiroEnd4"},
          "niziiroEnd4"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"いや、まだまだ僕は道半ばです"                         ,speech2:"きっと現実の貴方に対してはこうはいかない"             ,nextTalk:"niziiroEnd5"},
          "niziiroEnd5"    :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"私もまだお前がその刀に見合う実力があるとは"           ,speech2:"思っていない。だが..."                                ,nextTalk:"niziiroEnd6"},
          "niziiroEnd6"    :{img:"niziiro_normal"    ,name:"狐ヶ咲虹色"              ,speech1:"己の抱える不安と真っ向から向き合える"                 ,speech2:"その心構えがあれば......"                             ,nextTalk:"niziiroEnd7"},
          "niziiroEnd7"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ババ様......"                                         ,speech2:" "                                                    ,nextTalk:"niziiroEnd8"},
          "niziiroEnd8"    :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"niziiroEnd9"},
          "niziiroEnd9"    :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"大丈夫か？"                                           ,speech2:" "                                                    ,nextTalk:"niziiroEnd10"},
          "niziiroEnd10"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"あぁ、道草を食ってしまって悪かったね"                 ,speech2:" "                                                    ,nextTalk:"niziiroEnd11"},
          "niziiroEnd11"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"僕は大丈夫だ"                                         ,speech2:"先を急ごう"                                           ,nextTalk:"end"},
          "lurucaEnc1"     :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"さーて、ここは一体誰の夢なんだっ！"                   ,speech2:" "                                                    ,nextTalk:"lurucaEnc2"},
          "lurucaEnc2"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"この景色は......マジカルスクウェアと戦った場所？"     ,speech2:"ってことはここはリリカの夢なのかな"                   ,nextTalk:"lurucaEnc3"},
          "lurucaEnc3"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"リリカ......"                                         ,speech2:" "                                                    ,nextTalk:"lurucaEnc4"},
          "lurucaEnc4"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あ、ルルカだ！"                                       ,speech2:" "                                                    ,nextTalk:"lurucaEnc5"},
          "lurucaEnc5"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"......ねぇリリカ、どうして今あなたの隣にいるのは"     ,speech2:"ルルカじゃないの？"                                   ,nextTalk:"lurucaEnc6"},
          "lurucaEnc6"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"えーと、どうしてって言われたら夢の世界に来てから"     ,speech2:"今までルルカと会えてなかったからだけど......"         ,nextTalk:"lurucaEnc7"},
          "lurucaEnc7"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"私のリリカ、私だけの可愛いリリカ、私の助けがないと"   ,speech2:"満足に戦えもしないか弱いリリカ......"                 ,nextTalk:"lurucaEnc8"},
          "lurucaEnc8"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"そうよ、リリカには私がいないとダメなの"               ,speech2:"ルルカがいなくても平気なリリカなんて......"           ,nextTalk:"lurucaEnc9"},
          "lurucaEnc9"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"そんなの...そんなの......"                            ,speech2:" "                                                    ,nextTalk:"lurucaEnc10"},
          "lurucaEnc10"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ル、ルルカ......？"                                   ,speech2:" "                                                    ,nextTalk:"lurucaEnc11"},
          "lurucaEnc11"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"なにやら様子がおかしいぜっ！気を付けるんだっ！"       ,speech2:" "                                                    ,nextTalk:"lurucaEnc12"},
          "lurucaEnc12"    :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"そんなの......"                                       ,speech2:" "                                                    ,nextTalk:"lurucaEnc13"},
          "lurucaEnc13"    :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"私のリリカじゃ、ない"                                 ,speech2:" "                                                    ,nextTalk:"end"},
          "lurucaEnd1"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ルルカ！！"                                           ,speech2:" "                                                    ,nextTalk:"lurucaEnd2"},
          "lurucaEnd2"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"違う違う違う違う！リリカじゃない！！"                 ,speech2:"私が...私がいなくてもこんなに強いリリカなんて...！"   ,nextTalk:"lurucaEnd3"},
          "lurucaEnd3"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"違う...ちが......"                                    ,speech2:" "                                                    ,nextTalk:"lurucaEnd4"},
          "lurucaEnd4"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ルルカ！お願い聞いて！！"                             ,speech2:" "                                                    ,nextTalk:"lurucaEnd5"},
          "lurucaEnd5"     :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"......！"                                             ,speech2:" "                                                    ,nextTalk:"lurucaEnd6"},
          "lurucaEnd6"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ルルカの前にいるリリカは本物のリリカだよ"             ,speech2:" "                                                    ,nextTalk:"lurucaEnd7"},
          "lurucaEnd7"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"何度もルルカに迷惑かけて"                             ,speech2:"何度もルルカに助けられたリリカだよ"                   ,nextTalk:"lurucaEnd8"},
          "lurucaEnd8"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"でもね、リリカ少しは強くなれたと思ってるの"           ,speech2:" "                                                    ,nextTalk:"lurucaEnd9"},
          "lurucaEnd9"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"いつまでもルルカの足を引っ張りたくはないから"         ,speech2:"リリカなりにいっぱい頑張ったつもりだよ"               ,nextTalk:"lurucaEnd10"},
          "lurucaEnd10"    :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"リリカ...私は......"                                  ,speech2:" "                                                    ,nextTalk:"lurucaEnd11"},
          "lurucaEnd11"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカ一人での頑張りで強くなるには限界はあるけど"     ,speech2:"今はリリカを助けてくれる仲間がこんなにたくさんいるの" ,nextTalk:"lurucaEnd12"},
          "lurucaEnd12"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"みんなの助けがあったから"                             ,speech2:"夢の中でなら、ルルカに勝てるほど強くなれたんだと思う" ,nextTalk:"lurucaEnd13"},
          "lurucaEnd13"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"もちろんみんなの中にはルルカも入るよ"                 ,speech2:" "                                                    ,nextTalk:"lurucaEnd14"},
          "lurucaEnd14"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ルルカたちのお蔭でリリカは強くなれたの"               ,speech2:" "                                                    ,nextTalk:"lurucaEnd15"},
          "lurucaEnd15"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"だから前よりちょっとだけ強くなれたリリカのことも"     ,speech2:"認めて欲しいなって"                                   ,nextTalk:"lurucaEnd16"},
          "lurucaEnd16"    :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"違うのリリカ、私は、私は......！"                     ,speech2:" "                                                    ,nextTalk:"lurucaEnd17"},
          "lurucaEnd17"    :{img:"luruca_normal"     ,name:"ルルカ"                  ,speech1:"あなたを認められないんじゃない！"                     ,speech2:"私はただ、あなたが...私の元から......"                ,nextTalk:"lurucaEnd18"},
          "lurucaEnd18"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あれ？ここはコクリコちゃんの夢の世界？"               ,speech2:"戻ってきたの？"                                       ,nextTalk:"lurucaEnd19"},
          "lurucaEnd19"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"どうやらそうみたいだぜっ！"                           ,speech2:" "                                                    ,nextTalk:"lurucaEnd20"},
          "lurucaEnd20"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そっか......"                                         ,speech2:" "                                                    ,nextTalk:"lurucaEnd21"},
          "lurucaEnd21"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"lurucaEnd22"},
          "lurucaEnd22"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ねぇピエールさん、さっきの世界って"                   ,speech2:"リリカの夢の世界だったと思う？"                       ,nextTalk:"lurucaEnd23"},
          "lurucaEnd23"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"お嬢ちゃんは違うと思うのか？"                         ,speech2:" "                                                    ,nextTalk:"lurucaEnd24"},
          "lurucaEnd24"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......うん"                                           ,speech2:" "                                                    ,nextTalk:"lurucaEnd25"},
          "lurucaEnd25"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"さっきの世界のルルカは、なんというか"                 ,speech2:"リリカの知っているルルカとは少し違うような気がして...",nextTalk:"lurucaEnd26"},
          "lurucaEnd26"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ふ～む......"                                         ,speech2:" "                                                    ,nextTalk:"lurucaEnd27"},
          "lurucaEnd27"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様にはあの世界の持ち主が誰かはわからないし"       ,speech2:"確認する術もないぜっ！"                               ,nextTalk:"lurucaEnd28"},
          "lurucaEnd28"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だから考えても仕方ないことは一旦置いといて"           ,speech2:"気分転換にピッツァを食べることをおすすめするぜっ！"   ,nextTalk:"lurucaEnd29"},
          "lurucaEnd29"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......そうだね"                                       ,speech2:" "                                                    ,nextTalk:"lurucaEnd30"},
          "lurucaEnd30"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"考えてもわからないことに悩んでも仕方ないもんね"       ,speech2:"ありがとう、ピエールさん"                             ,nextTalk:"end"},
          "angelEnc1"      :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"またなんとも不思議な雰囲気の世界だね？"               ,speech2:"ここは誰の夢のなんだろう"                             ,nextTalk:"angelEnc2"},
          "angelEnc2"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:".......おいおい、まさかここは"                        ,speech2:" "                                                    ,nextTalk:"angelEnc3"},
          "angelEnc3"      :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"......."                                              ,speech2:" "                                                    ,nextTalk:"angelEnc4"},
          "angelEnc4"      :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あれは......サーティーン？"                           ,speech2:"でも様子というか姿が......"                           ,nextTalk:"angelEnc5"},
          "angelEnc5"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"おい、あんまジロジロ見んな"                           ,speech2:"あいつは......そうだな"                               ,nextTalk:"angelEnc6"},
          "angelEnc6"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺様の因縁？みたいなやつよ"                           ,speech2:"かっけぇだろ"                                         ,nextTalk:"angelEnc7"},
          "angelEnc7"      :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:".......貴方は変わっていませんね"                      ,speech2:"自分の過去ですらそうやって揶揄して誤魔化そうとする...",nextTalk:"angelEnc8"},
          "angelEnc8"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"その声！"                                             ,speech2:"テメェ、<font id=thisSpeech onclick=f_popUpN('null','サーティンの知り合いの熾天使。詳細は「月影の堕天使」のシーズン文を参照。'); style=color:#0012ff;z-index:5;>ファースト</font>か......？"                         ,nextTalk:"angelEnc9"},
          "angelEnc9"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"なんで俺の姿で......"                                 ,speech2:" "                                                    ,nextTalk:"angelEnc10"},
          "angelEnc10"     :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"わかりませんか？では教えてさしあげましょう"           ,speech2:" "                                                    ,nextTalk:"angelEnc11"},
          "angelEnc11"     :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"私は貴方に天使長としての振る舞いを教えに来たのです"   ,speech2:" "                                                    ,nextTalk:"angelEnc12"},
          "angelEnc12"     :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"貴方自身の姿を模して手本を見せた方が"                 ,speech2:"わかりやすいかと思ってこのような形をとりました"       ,nextTalk:"angelEnc13"},
          "angelEnc13"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"今の俺様にとっちゃ余計なお世話でしかねぇな"           ,speech2:"生憎そっちに戻るつもりもないんでね"                   ,nextTalk:"angelEnc14"},
          "angelEnc14"     :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"戻るつもりがない？"                                   ,speech2:"では貴方は一体どこに身を寄せる気ですか？"             ,nextTalk:"angelEnc15"},
          "angelEnc15"     :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"何一つ当たり前のこともできず"                         ,speech2:"ただ堕落を貪るだけの今の貴方を必要とする場所など"     ,nextTalk:"angelEnc16"},
          "angelEnc16"     :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"ある訳がないでしょう"                                 ,speech2:" "                                                    ,nextTalk:"angelEnc17"},
          "angelEnc17"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"そう思うじゃん？でもな......"                         ,speech2:" "                                                    ,nextTalk:"angelEnc18"},
          "angelEnc18"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"こんな出来損ないにも今は帰る場所があんだよ"           ,speech2:" "                                                    ,nextTalk:"angelEnc19"},
          "angelEnc19"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"さっさとそこを退きな！"                               ,speech2:"俺様は相棒のとこに帰んなきゃいけねんだ"               ,nextTalk:"end"},
          "angelEnd1"      :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"サ、サーティーンス......"                             ,speech2:" "                                                    ,nextTalk:"angelEnd2"},
          "angelEnd2"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"夢の中のテメェに言っても意味ねぇだろうが"             ,speech2:"一応言っとくわ"                                       ,nextTalk:"angelEnd3"},
          "angelEnd3"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"他の天使どもと＃によろしくな"                         ,speech2:" "                                                    ,nextTalk:"angelEnd4"},
          "angelEnd4"      :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"あの時にも言いましたが"                               ,speech2:"間に合わないことなどありません......"                 ,nextTalk:"angelEnd5"},
          "angelEnd5"      :{img:"angel_normal"      ,name:"影月宮天使長？"          ,speech1:"＃に許しを......"                                     ,speech2:" "                                                    ,nextTalk:"angelEnd6"},
          "angelEnd6"      :{img:"0"                 ,name:" "                       ,speech1:"（ドンッ！）"                                         ,speech2:" "                                                    ,nextTalk:"angelEnd7"},
          "angelEnd7"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺もあん時言ったことをもう一度伝えておくわ"           ,speech2:" "                                                    ,nextTalk:"angelEnd8"},
          "angelEnd8"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ファースト、俺は案外お前の事......"                   ,speech2:" "                                                    ,nextTalk:"angelEnd9"},
          "angelEnd9"      :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ったく、とんだ悪夢だったな"                           ,speech2:" "                                                    ,nextTalk:"angelEnd10"},
          "angelEnd10"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"道草食って悪かったな"                                 ,speech2:" "                                                    ,nextTalk:"angelEnd11"},
          "angelEnd11"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"angelEnd12"},
          "angelEnd12"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"大丈夫？なんかこう、疲れたりとかしてない？"           ,speech2:" "                                                    ,nextTalk:"angelEnd13"},
          "angelEnd13"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ぜ～んぜん大丈夫、俺様の心配はいらねぇよ"             ,speech2:" "                                                    ,nextTalk:"angelEnd14"},
          "angelEnd14"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ほら、さっさと元の世界に帰ろうぜ？"                   ,speech2:"きっと相棒が寂しがってるだろうからよ"                 ,nextTalk:"end"},
          
          "freeTalk1_1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"さっきのバトルでのリリカちゃんも可愛かったなー"       ,speech2:" "                                                    ,nextTalk:"freeTalk1_2"},
          "freeTalk1_2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"HS貯めている時もずっとドキドキしっぱなしだったよ..."  ,speech2:" "                                                    ,nextTalk:"freeTalk1_3"},
          "freeTalk1_3"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"やっぱり何年経っても推しがすぐ近くにいると"           ,speech2:"緊張しちゃうものだね"                                 ,nextTalk:"endA"},
          "freeTalk2_1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そういえばさっきのバトルの結果ってどうなったんだろう" ,speech2:" "                                                    ,nextTalk:"freeTalk2_2"},
          "freeTalk2_2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"もし僕だけがこんなところに来てしまったのなら"         ,speech2:"バトルにいた皆には迷惑かけちゃっただろうな..."        ,nextTalk:"freeTalk2_3"},
          "freeTalk2_3"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"後で謝っておかないと"                                 ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk3_1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"探索に出る前に、ちょっと操作法でも確認しますかー"     ,speech2:" "                                                    ,nextTalk:"freeTalk3_2"},
          "freeTalk3_2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"←キー、→キーが移動で、Sキーでジャンプ！"            ,speech2:"Aキーで攻撃して、気になるものはEnterキーで確認！"     ,nextTalk:"freeTalk3_3"},
          "freeTalk3_3"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"大事なことだから"                                     ,speech2:"メニュー画面で確認できるようにしておこうかな"         ,nextTalk:"endA"},
          "freeTalk4_1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ここがコクリコの夢の世界なんじゃないかって"           ,speech2:"よくすぐに予測できたよね"                             ,nextTalk:"freeTalk4_2"},
          "freeTalk4_2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"言われてみれば納得だけど"                             ,speech2:" "                                                    ,nextTalk:"freeTalk4_3"},
          "freeTalk4_3"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"いきなりこんなところに飛ばされて冷静な状況判断なんて" ,speech2:"普通はできないよ"                                     ,nextTalk:"freeTalk4_4"},
          "freeTalk4_4"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁハイスペックなんで☆"                             ,speech2:" "                                                    ,nextTalk:"freeTalk4_5"},
          "freeTalk4_5"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"何かムカつくな...    "                                ,speech2:" "                                                    ,nextTalk:"freeTalk4_6"},
          "freeTalk4_6"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"それにここが現実世界じゃないってのは他の要素からも"   ,speech2:"気付いていたから、その上でテスラっちの話を聞いて"     ,nextTalk:"freeTalk4_7"},
          "freeTalk4_7"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ここがコクリコちゃんの夢の中かもって思えたんだ"       ,speech2:" "                                                    ,nextTalk:"freeTalk4_8"},
          "freeTalk4_8"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"他の要素って...？"                                    ,speech2:" "                                                    ,nextTalk:"freeTalk4_9"},
          "freeTalk4_9"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"例えば...痛覚の遅延かな"                              ,speech2:" "                                                    ,nextTalk:"freeTalk4_10"},
          "freeTalk4_10"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この世界でダメージを受けたとき"                       ,speech2:" "                                                    ,nextTalk:"freeTalk4_11"},
          "freeTalk4_11"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"明らかに「ダメージを受けた」という認識の後に"         ,speech2:"「痛み」が発生した"                                   ,nextTalk:"freeTalk4_12"},
          "freeTalk4_12"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"これは現実世界で絶対起きないとは言わないけど"         ,speech2:"そうそう起こり得る現象ではない"                       ,nextTalk:"freeTalk4_13"},
          "freeTalk4_13"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"だからこの世界では少なくとも僕の身体は物理現象よりも" ,speech2:"自身の感覚に依存した存在だとわかる"                   ,nextTalk:"freeTalk4_14"},
          "freeTalk4_14"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"僕はこの感覚が<font id=thisSpeech onclick=f_popUpN('null','ライブアリーナストーリーイベント「かけだしくえすと～おどりくるうものたち～」、＃コンパスメディアミックス　ヒーロー観察記録でマルコスは意図的に発生された夢の世界を経験している。'); style=color:#0012ff;z-index:5;>初めてじゃない</font>から"                     ,speech2:"ここが夢の世界かもって仮説がすぐにたった訳よ"         ,nextTalk:"freeTalk4_15"},
          "freeTalk4_15"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"う～ん...理屈はギリギリわからないでもないけど"        ,speech2:" "                                                    ,nextTalk:"freeTalk4_16"},
          "freeTalk4_16"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"「ダメージを受けた」って認識と「痛み」の時差って"     ,speech2:"人間に知覚できるものなの...？"                        ,nextTalk:"freeTalk4_17"},
          "freeTalk4_17"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁハイスペックなんで☆"                             ,speech2:" "                                                    ,nextTalk:"freeTalk4_18"},
          "freeTalk4_18"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"便利な設定だねそれ..."                                ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk5_1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ここの動物ってキリンやハムスターは大人しいのに"       ,speech2:"ウサギやクマはやけに攻撃的だよね..."                  ,nextTalk:"freeTalk5_2"},
          "freeTalk5_2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"他の動物もいるかもしれないし"                         ,speech2:"攻撃的な動物かどうか見分ける指標が欲しいな"           ,nextTalk:"freeTalk5_3"},
          "freeTalk5_3"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"これまで見てきた動物に限定すれば"                     ,speech2:" "                                                    ,nextTalk:"freeTalk5_4"},
          "freeTalk5_4"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"攻撃的→目が赤い　攻撃的でない→目が黒い"             ,speech2:"っていう共通点があるね"                               ,nextTalk:"freeTalk5_5"},
          "freeTalk5_5"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"母数が少ないから信頼性はイマイチだけど"               ,speech2:"目安にはなるんじゃない？"                             ,nextTalk:"freeTalk5_6"},
          "freeTalk5_6"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"たしかに！"                                           ,speech2:"じゃあ今後は目の赤い動物には注意していこう"           ,nextTalk:"endA"},
          "freeTalk6_1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"今起きている現象..."                                  ,speech2:"本当に妄想体験マシーンが原因なのかな...？"            ,nextTalk:"freeTalk6_2"},
          "freeTalk6_2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ここがコクリコの世界という"                           ,speech2:"マルコスの仮説に違和感はない"                         ,nextTalk:"freeTalk6_3"},
          "freeTalk6_3"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"でもマシーンと全然違うところにいたマルコスが"         ,speech2:"影響を受けるを受けるのは流石におかしいよ"             ,nextTalk:"freeTalk6_4"},
          "freeTalk6_4"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"コクリコに使わせる前も"                               ,speech2:"しっかりマシーンのメンテナンスはした"                 ,nextTalk:"freeTalk6_5"},
          "freeTalk6_5"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"その時にマシーンにおかしな様子はどこにもなかった"     ,speech2:" "                                                    ,nextTalk:"freeTalk6_6"},
          "freeTalk6_6"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"もし万が一マシーンが故障していたとしても"             ,speech2:" "                                                    ,nextTalk:"freeTalk6_7"},
          "freeTalk6_7"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"影響を受けるのはマシーンを付けいてるコクリコか"       ,speech2:"せいぜいマシーンを起動したボク..."                    ,nextTalk:"freeTalk6_8"},
          "freeTalk6_8"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"やっぱり何か他にも原因があったとしか"                 ,speech2:"考えられないよ..."                                    ,nextTalk:"endA"},
          "freeTalk7_1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクほどではないけど"                                 ,speech2:"マルコスもちょいちょいすごいものを作っているよね"     ,nextTalk:"freeTalk7_2"},
          "freeTalk7_2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そうだね、あると便利なものや嬉しいものは"             ,speech2:"時々自作してる"                                       ,nextTalk:"freeTalk7_3"},
          "freeTalk7_3"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そういう時っていつも完全に自分一人で作っているの？"   ,speech2:"それとも誰かと協力して作ってみることもある？"         ,nextTalk:"freeTalk7_4"},
          "freeTalk7_4"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ん～、自分一人で作っていることが多いけど..."          ,speech2:"急にどうしてそんな質問を？"                           ,nextTalk:"freeTalk7_5"},
          "freeTalk7_5"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"今度作ろうとしているイタズr...便利なマシーンが"       ,speech2:"ちょっと大規模なものになりそうでね"                   ,nextTalk:"freeTalk7_6"},
          "freeTalk7_6"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"一人で作るのは大変そうだから"                         ,speech2:"誰かとの共同制作を考えていて"                         ,nextTalk:"freeTalk7_7"},
          "freeTalk7_7"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"共同制作のノウハウを聞けたらな～と思ったんだけど..."  ,speech2:" "                                                    ,nextTalk:"freeTalk7_8"},
          "freeTalk7_8"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"なるほどね～、共同制作のノウハウか..."                ,speech2:" "                                                    ,nextTalk:"freeTalk7_9"},
          "freeTalk7_9"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ノウハウって言っていいのかはわからないけど"           ,speech2:" "                                                    ,nextTalk:"freeTalk7_10"},
          "freeTalk7_10"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"共同制作の相手が信頼できるっていうのが"               ,speech2:"かなり大事なんじゃないかなと僕は思うよ"               ,nextTalk:"freeTalk7_11"},
          "freeTalk7_11"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"信頼関係...たしかに大事な要素だね"                    ,speech2:" "                                                    ,nextTalk:"freeTalk7_12"},
          "freeTalk7_12"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"うんうん、大事だよ"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk7_13"},
          "freeTalk7_13"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"信頼できない人と組んで"                               ,speech2:"制作物に変なものとか仕込まれたら大変だからね"         ,nextTalk:"freeTalk7_14"},
          "freeTalk7_14"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"...実体験があったの？"                                ,speech2:" "                                                    ,nextTalk:"freeTalk7_15"},
          "freeTalk7_15"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁ...ちょっとね～"                                  ,speech2:" "                                                    ,nextTalk:"freeTalk7_16"},
          "freeTalk7_16"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（僕も<font id=thisSpeech onclick=f_popUpN('null','＃コンパスメディアミックス　ヒーロー観察記録参照。ネタバレを含むため詳細は省く。'); style=color:#0012ff;z-index:5;>あの件</font>までは"                                   ,speech2:"あの人を信頼してはいたんだけどね...）"                ,nextTalk:"endA"},
          "freeTalk8_1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ねぇリリカちゃん、リリカちゃんはこの世界のことを"     ,speech2:"どんな世界だと思った？"                               ,nextTalk:"freeTalk8_2"},
          "freeTalk8_2"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"この世界...コクリコちゃんの夢の世界のこと...？"       ,speech2:" "                                                    ,nextTalk:"freeTalk8_3"},
          "freeTalk8_3"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そう、このコクリコちゃんの夢の世界のこと"             ,speech2:" "                                                    ,nextTalk:"freeTalk8_4"},
          "freeTalk8_4"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"テスラっちは最初、コクリコちゃんの妄想の世界が"       ,speech2:"こんな不気味な世界とは思えないと言ったんだ"           ,nextTalk:"freeTalk8_5"},
          "freeTalk8_5"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"僕も正直その感覚はわかってしまった"                   ,speech2:" "                                                    ,nextTalk:"freeTalk8_6"},
          "freeTalk8_6"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"でも完全に納得もできなかったんだ"                     ,speech2:"この世界は不気味という表現では表しきれないきがして"   ,nextTalk:"freeTalk8_7"},
          "freeTalk8_7"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"だからちょっと気になったんだ"                         ,speech2:"リリカちゃんならこの世界をどう表現するんだろうって"   ,nextTalk:"freeTalk8_8"},
          "freeTalk8_8"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そっか..."                                            ,speech2:" "                                                    ,nextTalk:"freeTalk8_9"},
          "freeTalk8_9"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカから見たこの世界はね"                           ,speech2:"ちょっとだけ寂しそうな世界に見えるかな..."            ,nextTalk:"freeTalk8_10"},
          "freeTalk8_10"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"寂しそうな...世界？"                                  ,speech2:" "                                                    ,nextTalk:"freeTalk8_11"},
          "freeTalk8_11"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うん..."                                              ,speech2:" "                                                    ,nextTalk:"freeTalk8_12"},
          "freeTalk8_12"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"キリンにウサギ、クマにハムスター"                     ,speech2:"この世界には色んな生き物がいて賑やかだけど"           ,nextTalk:"freeTalk8_13"},
          "freeTalk8_13"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"人間は...リリカたちみたいに夢の外から来た人しかいない",speech2:"少なくともこれまでには見ていない"                     ,nextTalk:"freeTalk8_14"},
          "freeTalk8_14"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"人間の言葉を喋る生き物もいない"                       ,speech2:" "                                                    ,nextTalk:"freeTalk8_15"},
          "freeTalk8_15"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカたちに攻撃してこない生き物もいるけど"           ,speech2:"ペットのように友達や家族にはなってくれなさそう"       ,nextTalk:"freeTalk8_16"},
          "freeTalk8_16"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"コクリコちゃんがもし一人でこの世界にいたら"           ,speech2:" "                                                    ,nextTalk:"freeTalk8_17"},
          "freeTalk8_17"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"退屈はしないかもだけど"                               ,speech2:"寂しくはなっちゃうんじゃないかな"                     ,nextTalk:"freeTalk8_18"},
          "freeTalk8_18"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"なるほど..."                                          ,speech2:"寂しい世界...か"                                      ,nextTalk:"freeTalk8_19"},
          "freeTalk8_19"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この世界の寂しさはやっぱり"                           ,speech2:" "                                                    ,nextTalk:"freeTalk8_20"},
          "freeTalk8_20"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コクリコちゃんの家族に会えない寂しさから"             ,speech2:"できるものなのかな...？"                              ,nextTalk:"freeTalk8_21"},
          "freeTalk8_21"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"わからないけど"                                       ,speech2:"そうかもしれない..."                                  ,nextTalk:"freeTalk8_22"},
          "freeTalk8_22"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"........."                                            ,speech2:" "                                                    ,nextTalk:"freeTalk8_23"},
          "freeTalk8_23"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"........."                                            ,speech2:" "                                                    ,nextTalk:"freeTalk8_24"},
          "freeTalk8_24"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......リリカたちじゃコクリコちゃんの寂しさを"         ,speech2:"埋めてあげることも"                                   ,nextTalk:"freeTalk8_25"},
          "freeTalk8_25"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"家族の代わりになってあげることもできないけど"         ,speech2:" "                                                    ,nextTalk:"freeTalk8_26"},
          "freeTalk8_26"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"寂しい時に一緒にいてあげることはできる"               ,speech2:"友達として寄り添ってあげることはできる"               ,nextTalk:"freeTalk8_27"},
          "freeTalk8_27"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカたちがすべきことはこの世界の寂しさを眺めて"     ,speech2:"しょんぼりすることじゃないよ！"                       ,nextTalk:"freeTalk8_28"},
          "freeTalk8_28"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......そうだね"                                       ,speech2:"しょんぼりしていても仕方ない！"                       ,nextTalk:"freeTalk8_29"},
          "freeTalk8_29"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"僕らは僕らにできることをやっていこう"                 ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk9_1"    :{img:"0"                 ,name:"？？？"                  ,speech1:"コソコソ"                                             ,speech2:" "                                                    ,nextTalk:"freeTalk9_2"},
          "freeTalk9_2"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk9_3"},
          "freeTalk9_3"    :{img:"0"                 ,name:"？？？"                  ,speech1:"ガサゴソ"                                             ,speech2:" "                                                    ,nextTalk:"freeTalk9_4"},
          "freeTalk9_4"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"...そんなところに隠れて何をしているんだい？テスラ"    ,speech2:" "                                                    ,nextTalk:"freeTalk9_5"},
          "freeTalk9_5"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"おおかた僕を驚かそうと何か目論んでいるんだろうが"     ,speech2:"隠れて何か仕掛けているのがバレバレだよ"               ,nextTalk:"freeTalk9_6"},
          "freeTalk9_6"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"さぁ大人しく何を企んでいたのか白状して...あれ？"      ,speech2:" "                                                    ,nextTalk:"freeTalk9_7"},
          "freeTalk9_7"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"工作アームズしかいない...？"                          ,speech2:"本人は一体どこn..."                                   ,nextTalk:"freeTalk9_8"},
          "freeTalk9_8"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"うしろから～....ばぁ！！！！"                         ,speech2:" "                                                    ,nextTalk:"freeTalk9_9"},
          "freeTalk9_9"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ひゃぇやあぁ！！！！"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk9_10"},
          "freeTalk9_10"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ニシシッ見事にひっかかったね！"                       ,speech2:"工作アームズおとり作戦、大成功～！！"                 ,nextTalk:"freeTalk9_11"},
          "freeTalk9_11"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"甘色は驚いた顔は見れないけれど"                       ,speech2:"それでも十分いいリアクションをしてくれるね～"         ,nextTalk:"freeTalk9_12"},
          "freeTalk9_12"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"い、いつもいつも"                                     ,speech2:"よくまぁこんな手の込んだことを考える..."              ,nextTalk:"freeTalk9_13"},
          "freeTalk9_13"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"甘色に対しては普通にイタズラを仕掛けても"             ,speech2:"すぐにバレちゃうから色々と工夫してるんだ"             ,nextTalk:"freeTalk9_14"},
          "freeTalk9_14"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"多分これは褒められているのだろうが"                   ,speech2:"素直に喜べないな"                                     ,nextTalk:"freeTalk9_15"},
          "freeTalk9_15"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"いやしかし、工作アームズに気をとられ周囲への警戒が"   ,speech2:"薄れていたのは我ながら不覚だった"                     ,nextTalk:"freeTalk9_16"},
          "freeTalk9_16"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"囮を用いた戦術の有用性を痛感するな"                   ,speech2:" "                                                    ,nextTalk:"freeTalk9_17"},
          "freeTalk9_17"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"テスラからの悪戯は新たな気付きを得られることも多い"   ,speech2:" "                                                    ,nextTalk:"freeTalk9_18"},
          "freeTalk9_18"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それはつまり、これからもいっぱいイタズラを仕掛けて"   ,speech2:"いいってこと！？"                                     ,nextTalk:"freeTalk9_19"},
          "freeTalk9_19"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"違う！断じて違う！！"                                 ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk10_1"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"この世界の敵って色んな種類がいるね"                   ,speech2:" "                                                    ,nextTalk:"freeTalk10_2"},
          "freeTalk10_2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"今のところは戦えているけど"                           ,speech2:"もっと強い敵が現れたらどうしよう......"               ,nextTalk:"freeTalk10_3"},
          "freeTalk10_3"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"元の世界の常識が通用しない相手も"                     ,speech2:"いるかもしれないからね"                               ,nextTalk:"freeTalk10_4"},
          "freeTalk10_4"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"警戒することは大事だ"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk10_5"},
          "freeTalk10_5"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"しかしここにいる面子は皆強い"                         ,speech2:"極端に怯える必要もないと思うよ"                       ,nextTalk:"freeTalk10_6"},
          "freeTalk10_6"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"た、たしかに！甘色ちゃんたちすっごく強いもんね"       ,speech2:"リリカちょっと不安になり過ぎちゃってたかも"           ,nextTalk:"freeTalk10_7"},
          "freeTalk10_7"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"こんな状況では不安になるのも無理はない"               ,speech2:" "                                                    ,nextTalk:"freeTalk10_8"},
          "freeTalk10_8"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"しかしここにはハイスペックなニートに天才発明家、"     ,speech2:"そして仲間想いで身も心も強い魔法少女までいるんだ"     ,nextTalk:"freeTalk10_9"},
          "freeTalk10_9"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"どうとでもできてしまうような万能感さえあるだろう？"   ,speech2:" "                                                    ,nextTalk:"freeTalk10_10"},
          "freeTalk10_10"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"甘色ちゃん......"                                     ,speech2:" "                                                    ,nextTalk:"freeTalk10_11"},
          "freeTalk10_11"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうだね、強くて優しい素敵な討魔士さんが言うんだから" ,speech2:"本当にどんなことでもできちゃいそう！"                 ,nextTalk:"endA"},
          "freeTalk11_1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"前から気になっていたのだが......"                     ,speech2:" "                                                    ,nextTalk:"freeTalk11_2"},
          "freeTalk11_2"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"マルコスの使っているその枝は本当にただの枝なのかい？" ,speech2:"枝にしては少々頑丈過ぎる思うんだが......"             ,nextTalk:"freeTalk11_3"},
          "freeTalk11_3"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この枝もこと？"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk11_4"},
          "freeTalk11_4"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ふっふっふっ...良く気付いたね"                        ,speech2:"これはたしかにただの枝じゃない"                       ,nextTalk:"freeTalk11_5"},
          "freeTalk11_5"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この枝の正体はなんと......"                           ,speech2:" "                                                    ,nextTalk:"freeTalk11_6"},
          "freeTalk11_6"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"なんと......？"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk11_7"},
          "freeTalk11_7"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"伝説の剣なのだー！！"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk11_8"},
          "freeTalk11_8"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk11_9"},
          "freeTalk11_9"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"............"                                         ,speech2:" "                                                    ,nextTalk:"freeTalk11_10"},
          "freeTalk11_10"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ちょ、ノーリアクションが一番つらいんだけど"           ,speech2:"せめて何か言って"                                     ,nextTalk:"freeTalk11_11"},
          "freeTalk11_11"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"いやその、一瞬信じてしまってね"                       ,speech2:""                                                     ,nextTalk:"freeTalk11_12"},
          "freeTalk11_12"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"木の枝ではあり得ない耐久力や威力も"                   ,speech2:"不可思議な武器なら説明はつくのか？と考えてしまった"   ,nextTalk:"freeTalk11_13"},
          "freeTalk11_13"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"伝説の剣ってのはただの<font id=thisSpeech onclick=f_popUpN('null','マルコスはそこらに落ちていた枝を伝説の剣だと妄想しながら戦っているという設定がある。（マルコス’55誕生秘話参照）2023年のエイプリルフールイベントではリリカ☆ルルカのグッズと言っていたが、本作では前者の設定を採用。'); style=color:#0012ff;z-index:5;>設定</font>で、"                       ,speech2:"実際はそこらへんに落ちてた木の枝を使ってるだけだよ"   ,nextTalk:"freeTalk11_14"},
          "freeTalk11_14"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そうなのか......いや、それはそれで疑問が出てくる"     ,speech2:"何故ただの木の枝であのような戦い方ができるんだい？"   ,nextTalk:"freeTalk11_15"},
          "freeTalk11_15"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"それは僕がハイスペックだからだね"                     ,speech2:" "                                                    ,nextTalk:"freeTalk11_16"},
          "freeTalk11_16"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"全然回答になっていないんだが"                         ,speech2:" "                                                    ,nextTalk:"freeTalk11_17"},
          "freeTalk11_17"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"えー、ハイスペックだからじゃダメ？"                   ,speech2:"じゃあそうだなぁ......"                               ,nextTalk:"freeTalk11_18"},
          "freeTalk11_18"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"刀だってさ、力のかけ方次第じゃ"                       ,speech2:"刃こぼれしちゃったり折れちゃったりするけど"           ,nextTalk:"freeTalk11_19"},
          "freeTalk11_19"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"上手く扱ってあげたらさほど刀を傷つけることなく"       ,speech2:"対象を切ることができるでしょ？"                       ,nextTalk:"freeTalk11_20"},
          "freeTalk11_20"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"ふむ、たしかにそうだね"                               ,speech2:" "                                                    ,nextTalk:"freeTalk11_21"},
          "freeTalk11_21"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"枝だって同じように上手く扱ってあげれば"               ,speech2:"威力も耐久力も上げることができるんだよ"               ,nextTalk:"freeTalk11_22"},
          "freeTalk11_22"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"な、なるほど。そういうことだったのか......"           ,speech2:" "                                                    ,nextTalk:"freeTalk11_23"},
          "freeTalk11_23"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"............"                                         ,speech2:" "                                                    ,nextTalk:"freeTalk11_24"},
          "freeTalk11_24"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"何か、上手くはぐらかされただけのような気もするな..."  ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk12_1"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"テスラちゃんの工作アームズは夢の世界にも"             ,speech2:"ついてきてくれたんだね"                               ,nextTalk:"freeTalk12_2"},
          "freeTalk12_2"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そうだね、ボクにとって工作アームズは"                 ,speech2:"もはや身体の一部みたいなものだから持ってこれたのかも" ,nextTalk:"freeTalk12_3"},
          "freeTalk12_3"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"身体の一部みたいな......"                             ,speech2:" "                                                    ,nextTalk:"freeTalk12_4"},
          "freeTalk12_4"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカのステッキや髪飾りが"                           ,speech2:"夢の世界に持ってこれているのも"                       ,nextTalk:"freeTalk12_5"},
          "freeTalk12_5"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ステッキや髪飾りを身体の一部と思い込んでいるから"     ,speech2:"なのかな？"                                           ,nextTalk:"freeTalk12_6"},
          "freeTalk12_6"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"うーん、難しい質問だね"                               ,speech2:" "                                                    ,nextTalk:"freeTalk12_7"},
          "freeTalk12_7"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"身体......というよりは自分を構成する一部分と"         ,speech2:"認識しているからだと思う"                             ,nextTalk:"freeTalk12_8"},
          "freeTalk12_8"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"えっと、それは身体の一部分と思い込むのとは"           ,speech2:"どう違うの？"                                         ,nextTalk:"freeTalk12_9"},
          "freeTalk12_9"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そうだな......反例を挙げるのがわかりやすいかな？"     ,speech2:" "                                                    ,nextTalk:"freeTalk12_10"},
          "freeTalk12_10"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"リリカはそのステッキ、自分の身体の一部だと思ってる？" ,speech2:" "                                                    ,nextTalk:"freeTalk12_11"},
          "freeTalk12_11"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うーん、ああは言ったけど正直身体の一部とまでは"       ,speech2:"思ってないかも"                                       ,nextTalk:"freeTalk12_12"},
          "freeTalk12_12"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ならそれが反例になるね"                               ,speech2:" "                                                    ,nextTalk:"freeTalk12_13"},
          "freeTalk12_13"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"「あなたはどんな姿をしていますか」と言われて"         ,speech2:"頭の中に思い描く姿に映っている範囲が"                 ,nextTalk:"freeTalk12_14"},
          "freeTalk12_14"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"自分を構成する要素として捉えている部分だと"           ,speech2:"ボクは解釈してる"                                     ,nextTalk:"freeTalk12_15"},
          "freeTalk12_15"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"なるほど......"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk12_16"},
          "freeTalk12_16"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカがそう言われて自分で思い描く自分の姿......"     ,speech2:"魔法少女の服を着ていて、ステッキを持っていて......"   ,nextTalk:"freeTalk12_17"},
          "freeTalk12_17"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そこに映っている要素であれば"                         ,speech2:"この世界に持ち込めるってことだと思うよ"               ,nextTalk:"freeTalk12_18"},
          "freeTalk12_18"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"例え身体の一部とまでは思っていなくてもね"             ,speech2:" "                                                    ,nextTalk:"freeTalk12_19"},
          "freeTalk12_19"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"なるほど、わかりやすい！"                             ,speech2:"さすがテスラちゃんだね"                               ,nextTalk:"endA"},
          "freeTalk13_1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"おや？マルコスくん何をしているんですか？"             ,speech2:" "                                                    ,nextTalk:"freeTalk13_2"},
          "freeTalk13_2"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"『データベース』を作っているんだよ"                   ,speech2:" "                                                    ,nextTalk:"freeTalk13_3"},
          "freeTalk13_3"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"データベース？"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk13_4"},
          "freeTalk13_4"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"この世界の敵、アイテム、仕掛け、そういったものを"     ,speech2:"データとして記録しているんだ"                         ,nextTalk:"freeTalk13_5"},
          "freeTalk13_5"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"こうやってまとめておいた方が"                         ,speech2:"後から見直す時に便利だからね"                         ,nextTalk:"freeTalk13_6"},
          "freeTalk13_6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なるほど～"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk13_7"},
          "freeTalk13_7"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あれ？このデータは記録者が"                           ,speech2:"マルコスくんではないんですね"                         ,nextTalk:"freeTalk13_8"},
          "freeTalk13_8"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"僕一人でやってもいいんだけど、せっかくだから"         ,speech2:"皆にも手伝ってもらってるんだ"                         ,nextTalk:"freeTalk13_9"},
          "freeTalk13_9"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"アリスちゃんもやってみる？"                           ,speech2:" "                                                    ,nextTalk:"freeTalk13_10"},
          "freeTalk13_10"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"いいんですか？"                                       ,speech2:"じゃあせっかくなのでやってみます！"                   ,nextTalk:"endA"},
          "freeTalk14_1"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この世界の鏡って本当に不思議だよね......"             ,speech2:" "                                                    ,nextTalk:"freeTalk14_2"},
          "freeTalk14_2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"それはやっぱりあたしの声に反応することですか？"       ,speech2:" "                                                    ,nextTalk:"freeTalk14_3"},
          "freeTalk14_3"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それも不思議だし"                                     ,speech2:"鏡を通り抜けられるということも不思議"                 ,nextTalk:"freeTalk14_4"},
          "freeTalk14_4"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"そして何のために置いてある鏡なのかが全くわからない"   ,speech2:" "                                                    ,nextTalk:"freeTalk14_5"},
          "freeTalk14_5"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"言われてみれば何でこんなところに？って場所に"         ,speech2:"置いてありますよね"                                   ,nextTalk:"freeTalk14_6"},
          "freeTalk14_6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"う～ん、前髪が崩れてないか小まめに確認できるように...",speech2:"とか？"                                               ,nextTalk:"freeTalk14_7"},
          "freeTalk14_7"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それならこんな大きな鏡である必要ないよね？"           ,speech2:" "                                                    ,nextTalk:"freeTalk14_8"},
          "freeTalk14_8"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"た、たしかに！じゃあ全身の身だしなみの確認？"         ,speech2:" "                                                    ,nextTalk:"freeTalk14_9"},
          "freeTalk14_9"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それにしても大きすぎない？"                           ,speech2:"ボクらの背丈の倍くらいの大きさがあるんだよ？"         ,nextTalk:"freeTalk14_10"},
          "freeTalk14_10"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それに身だしなみを確認するための鏡だったとして"       ,speech2:"誰が使う用の鏡なのかって話になってくる"               ,nextTalk:"freeTalk14_11"},
          "freeTalk14_11"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"う～ん、そうですね......"                             ,speech2:" "                                                    ,nextTalk:"freeTalk14_12"},
          "freeTalk14_12"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あたしたちの倍くらいの大きさで身だしなみに"           ,speech2:"気を付けている人が"                                   ,nextTalk:"freeTalk14_13"},
          "freeTalk14_13"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"この世界のどこかにいるんでしょうか？"                 ,speech2:"まだあたしたちは見ていないですけど"                   ,nextTalk:"freeTalk14_14"},
          "freeTalk14_14"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"うーん、その説は有力かな"                             ,speech2:" "                                                    ,nextTalk:"freeTalk14_15"},
          "freeTalk14_15"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ボクらの倍くらいの背丈で身だしなみに気を遣うほどの"   ,speech2:"高い知能を持った生物がこの世界のどこかに......"       ,nextTalk:"freeTalk14_16"},
          "freeTalk14_16"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk14_17"},
          "freeTalk14_17"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それすごいボクらの驚異になる生物なんじゃ......"       ,speech2:" "                                                    ,nextTalk:"freeTalk14_18"},
          "freeTalk14_18"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ゆ、友好的な方だと信じましょう！"                     ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk15_1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"天井からリリカちゃんたちが降ってきた時は"             ,speech2:"ほんとにびっくりしましたよ～"                         ,nextTalk:"freeTalk15_2"},
          "freeTalk15_2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"攻撃的な動物さんが来たのかと思って身構えちゃいました" ,speech2:" "                                                    ,nextTalk:"freeTalk15_3"},
          "freeTalk15_3"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ごめんね、驚かせちゃって......"                       ,speech2:"あの時はアリスちゃんの真上には落ちなくてよかった～"   ,nextTalk:"freeTalk15_4"},
          "freeTalk15_4"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"いきなり床が落ちたのはリリカもびっくりしちゃった"     ,speech2:"だいぶ床がボロボロだったのかな......"                 ,nextTalk:"freeTalk15_5"},
          "freeTalk15_5"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"床が......"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk15_6"},
          "freeTalk15_6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"リリカちゃん？"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk15_7"},
          "freeTalk15_7"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"床がボロボロだったから落ちちゃったんだよね？"         ,speech2:"リリカが重たかった訳じゃないよね......？"             ,nextTalk:"freeTalk15_8"},
          "freeTalk15_8"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ゆ、床がボロボロだっただけですよ！きっと！"           ,speech2:"リリカちゃんとっても軽いですもん！......たぶん！"     ,nextTalk:"freeTalk15_9"},
          "freeTalk15_9"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そ、そうだよね！"                                     ,speech2:" "                                                    ,nextTalk:"freeTalk15_10"},
          "freeTalk15_10"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ちょっとアップルパイ食べすぎだったとか"               ,speech2:"筋トレのしすぎで体重が増えちゃったとか"               ,nextTalk:"freeTalk15_11"},
          "freeTalk15_11"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そんなことはないよね！たぶん！うん！！"               ,speech2:" "                                                    ,nextTalk:"freeTalk15_12"},
          "freeTalk15_12"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"そうですそうです！床が落ちたのは絶対リリカちゃんの"   ,speech2:"体重のせいではないです！たぶん！"                     ,nextTalk:"freeTalk15_13"},
          "freeTalk15_13"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ルルカからもらったクッキーが美味し過ぎて"             ,speech2:"いっぱい食べちゃったとか"                             ,nextTalk:"freeTalk15_14"},
          "freeTalk15_14"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"筋トレの後に食べると筋トレの効果上がるよって聞いて"   ,speech2:"鮭おにぎりいっぱい食べちゃってたとか......"           ,nextTalk:"freeTalk15_15"},
          "freeTalk15_15"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"か、関係...関係な......"                              ,speech2:" "                                                    ,nextTalk:"freeTalk15_16"},
          "freeTalk15_16"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk15_17"},
          "freeTalk15_17"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk15_18"},
          "freeTalk15_18"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......アリスちゃん"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk15_19"},
          "freeTalk15_19"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"はい......"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk15_20"},
          "freeTalk15_20"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカ、元の世界に戻ったら体重確認してみようと思う"   ,speech2:" "                                                    ,nextTalk:"freeTalk15_21"},
          "freeTalk15_21"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"一人で確認するの怖いから"                             ,speech2:"その時は一緒にいてくれる......？"                     ,nextTalk:"freeTalk15_22"},
          "freeTalk15_22"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もちろん......お供します........."                    ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk16_1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"何もないところからいきなり出てきたり"                 ,speech2:"おもちになりすまして噛みついてきたり"                 ,nextTalk:"freeTalk16_2"},
          "freeTalk16_2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"この世界の敵には怖いのがたくさんいますね......"       ,speech2:" "                                                    ,nextTalk:"freeTalk16_3"},
          "freeTalk16_3"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"たしかにそうだね"                                     ,speech2:"初めて見る相手は度肝を抜かれることも多い"             ,nextTalk:"freeTalk16_4"},
          "freeTalk16_4"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"でも甘色ちゃん全然驚いたり怖がったり"                 ,speech2:"してなくないですか？"                                 ,nextTalk:"freeTalk16_5"},
          "freeTalk16_5"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"普段からそういった相手と戦うことが多いからかな"       ,speech2:"怨霊もいきなり現れるようなことは少なくない"           ,nextTalk:"freeTalk16_6"},
          "freeTalk16_6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なるほど～、甘色ちゃんにとってはここでの戦いも"       ,speech2:"普段のお仕事とあんまり変わらないってことですかね？"   ,nextTalk:"freeTalk16_7"},
          "freeTalk16_7"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"まぁそうだね。多種多様で不可思議な存在との戦いは"     ,speech2:"慣れたものだ"                                         ,nextTalk:"freeTalk16_8"},
          "freeTalk16_8"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"しかしアリスとてそれは同じではないか？"               ,speech2:" "                                                    ,nextTalk:"freeTalk16_9"},
          "freeTalk16_9"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"いやそんな、あたしは普段あんな色んな相手と戦っては...",speech2:" "                                                    ,nextTalk:"freeTalk16_10"},
          "freeTalk16_10"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"妖怪の長や戦闘用ロボ、死神にどらごんと"               ,speech2:"十分多種多用な相手と普段から戦っていると思うが"       ,nextTalk:"freeTalk16_11"},
          "freeTalk16_11"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"い、言われてみればたしかに......"                     ,speech2:"日常的に色んな方と戦ってましたね"                     ,nextTalk:"freeTalk16_12"},
          "freeTalk16_12"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"いきなり後ろから奇襲されたり、透明化してるところから" ,speech2:"いきなり現れるのも日常でした......"                   ,nextTalk:"freeTalk16_13"},
          "freeTalk16_13"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"それに気付ければここの敵も"                           ,speech2:"さほど怖くはなくなるんじゃないかい？"                 ,nextTalk:"freeTalk16_14"},
          "freeTalk16_14"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"はい！なんだかあんまり怖くないような気がしてきました" ,speech2:" "                                                    ,nextTalk:"freeTalk16_15"},
          "freeTalk16_15"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ありがとう、甘色ちゃん！"                             ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk17_1"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ん～マルコス、お前ちょっと細すぎじゃないかっ！"       ,speech2:"ちゃんと毎日三食食べているのかっ？"                   ,nextTalk:"freeTalk17_2"},
          "freeTalk17_2"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ちゃんと食べてるよ～"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk17_3"},
          "freeTalk17_3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"...毎日サプリメントだけとかではないよなっ...？"       ,speech2:" "                                                    ,nextTalk:"freeTalk17_4"},
          "freeTalk17_4"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ちゃんと一日に必要な栄養素を"                         ,speech2:"しっかり補給できる調合してるから大丈夫"               ,nextTalk:"freeTalk17_5"},
          "freeTalk17_5"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"全然大丈夫じゃないぜっ！"                             ,speech2:" "                                                    ,nextTalk:"freeTalk17_6"},
          "freeTalk17_6"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"いいか？食事ってのはな？作業じゃないんだぜっ！"       ,speech2:" "                                                    ,nextTalk:"freeTalk17_7"},
          "freeTalk17_7"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"家族やアミーコと共に食卓を囲み、楽しく談笑しながら"   ,speech2:"”美味しいもの”を食べるのが大事なんだぜっ！"         ,nextTalk:"freeTalk17_8"},
          "freeTalk17_8"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（めんどくさー......）"                               ,speech2:" "                                                    ,nextTalk:"freeTalk17_9"},
          "freeTalk17_9"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"「めんどくさー...」って顔をするんじゃないぜっ！"      ,speech2:" "                                                    ,nextTalk:"freeTalk17_10"},
          "freeTalk17_10"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様の言ってることがただの綺麗事でないことは"       ,speech2:"お前ならわかってるはずだっ！"                         ,nextTalk:"freeTalk17_11"},
          "freeTalk17_11"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コミュニケーションの促進やストレス解消が期待できる"   ,speech2:"って話でしょ？"                                       ,nextTalk:"freeTalk17_12"},
          "freeTalk17_12"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あとはセロトニンやドーパミンの分泌も起きるんだっけ？" ,speech2:" "                                                    ,nextTalk:"freeTalk17_13"},
          "freeTalk17_13"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"その通りだっ！良質な食事は良質な心を育むんだぜっ！"   ,speech2:" "                                                    ,nextTalk:"freeTalk17_14"},
          "freeTalk17_14"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"お前もオレ様の大事なアミーコの一人だ、"               ,speech2:"常に健康でいてほしいんだぜっ！"                       ,nextTalk:"freeTalk17_15"},
          "freeTalk17_15"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ピエール......"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk17_16"},
          "freeTalk17_16"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"そうだっ！今度オレ様のうちのディナーに招待しようっ！" ,speech2:"勿論リリカたち他の皆も誘ってなっ！"                   ,nextTalk:"freeTalk17_17"},
          "freeTalk17_17"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"来てくれるだろ、アミーコ？"                           ,speech2:" "                                                    ,nextTalk:"freeTalk17_18"},
          "freeTalk17_18"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"それはいかない訳にはいかないね"                       ,speech2:"楽しみにさせてもらうよ"                               ,nextTalk:"freeTalk17_19"},
          "freeTalk17_19"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"是非そうしてくれっ！"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk17_20"},
          "freeTalk17_20"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"プニャトフスキ一族総出でもてなして"                   ,speech2:"食事の楽しさを教えてやるぜっ！"                       ,nextTalk:"endA"},
          "freeTalk18_1"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"（もぐもぐもぐもぐ）"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk18_2"},//ハムスターイベント後
          "freeTalk18_2"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"（もぐ......ごくんっ！）"                             ,speech2:" "                                                    ,nextTalk:"freeTalk18_3"},
          "freeTalk18_3"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ふー、ありがとうピエール"                             ,speech2:"ピザ美味しかったよ、ごちそうさま"                     ,nextTalk:"freeTalk18_4"},
          "freeTalk18_4"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"礼には及ばないぜっ！"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk18_5"},
          "freeTalk18_5"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"腹が減ってるやつにピッツァを分け与えるのは"           ,speech2:"伊達男として当然のことだからなっ！"                   ,nextTalk:"freeTalk18_6"},
          "freeTalk18_6"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"おかわりもあるぜっ！まだ食べるかい？"                 ,speech2:" "                                                    ,nextTalk:"freeTalk18_7"},
          "freeTalk18_7"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"いや、流石にもういいかな......"                       ,speech2:"お腹いっぱいだよ"                                     ,nextTalk:"freeTalk18_8"},
          "freeTalk18_8"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"本当にピエールからはいくらでもピザが出てくるよね"     ,speech2:"しかも何故か毎回熱々の状態で......"                   ,nextTalk:"freeTalk18_9"},
          "freeTalk18_9"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ピザ釜を持ち歩いてる訳でもないのに"                   ,speech2:"どうしていつも熱々のピザを出せるの？"                 ,nextTalk:"freeTalk18_10"},
          "freeTalk18_10"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"......知りたいかい？"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk18_11"},
          "freeTalk18_11"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"知りたい！"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk18_12"},
          "freeTalk18_12"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"それは......"                                         ,speech2:" "                                                    ,nextTalk:"freeTalk18_13"},
          "freeTalk18_13"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"それは......？"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk18_14"},
          "freeTalk18_14"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ピッツァは熱々の状態が一番うまいからだぜっ！"         ,speech2:" "                                                    ,nextTalk:"freeTalk18_15"},
          "freeTalk18_15"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"........."                                            ,speech2:" "                                                    ,nextTalk:"freeTalk18_16"},
          "freeTalk18_16"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"答えになってなくない......？"                         ,speech2:" "                                                    ,nextTalk:"freeTalk18_17"},
          "freeTalk18_17"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ピッツァはたしかに多少冷めててもうまい......"         ,speech2:"しかーし！やはり一番うまいのは熱々の状態なんだぜっ！" ,nextTalk:"freeTalk18_18"},
          "freeTalk18_18"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"一番うまい状態でピッツァを食べてもらいたいっ！"       ,speech2:"だからオレ様は熱々の状態でピッツァを出せるんだぜっ！" ,nextTalk:"freeTalk18_19"},
          "freeTalk18_19"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"（あ、これ多分追求しても答えが出ないタイプのやつだ）" ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk19_1"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"はぁ......"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk19_2"},
          "freeTalk19_2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"お～う、どうしたんだい嬢ちゃん？"                     ,speech2:"そんな炭酸が抜けきっちまったコーラみたいな顔して"     ,nextTalk:"freeTalk19_3"},
          "freeTalk19_3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"悩みがあるならこのオレ様に話してみるといいぜっ！"     ,speech2:"無理にとは言わないがなっ！"                           ,nextTalk:"freeTalk19_4"},
          "freeTalk19_4"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ピエールさん......"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk19_5"},
          "freeTalk19_5"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"悩みっていっていいのかはわからないんだけど"           ,speech2:" "                                                    ,nextTalk:"freeTalk19_6"},
          "freeTalk19_6"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"今回またリリカのせいで皆に迷惑をかけちゃって"         ,speech2:"ちょっとだけ落ち込んじゃってたっていうか......"       ,nextTalk:"freeTalk19_7"},
          "freeTalk19_7"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"コクリコ嬢ちゃんに魔法をかけたせいで"                 ,speech2:"この世界に来ちまったかもしれないって話かっ！"         ,nextTalk:"freeTalk19_8"},
          "freeTalk19_8"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"うん......"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk19_9"},
          "freeTalk19_9"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"みんな優しいから仕方ないよって、気にしないでって"     ,speech2:"言ってくれるけど"                                     ,nextTalk:"freeTalk19_10"},
          "freeTalk19_10"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"いつもリリカばかりが迷惑をかけるのは"                 ,speech2:"やっぱり申し訳なくって......"                         ,nextTalk:"freeTalk19_11"},
          "freeTalk19_11"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ふ～む......"                                         ,speech2:" "                                                    ,nextTalk:"freeTalk19_12"},
          "freeTalk19_12"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"本当にいつも嬢ちゃんは迷惑をかけていると思うかっ？"   ,speech2:" "                                                    ,nextTalk:"freeTalk19_13"},
          "freeTalk19_13"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"え......？"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk19_14"},
          "freeTalk19_14"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"本当にいつも嬢ちゃんばかりが迷惑をかけていると"       ,speech2:"思っているのか？"                                     ,nextTalk:"freeTalk19_15"},
          "freeTalk19_15"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様が落とし穴に落ちた時"                           ,speech2:"抜け出すのを手伝ってくれたのは嬢ちゃんだぜっ！"       ,nextTalk:"freeTalk19_16"},
          "freeTalk19_16"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あー、テスラちゃんの罠に嵌って"                       ,speech2:"抜け出せなくなってたことあったね......"               ,nextTalk:"freeTalk19_17"},
          "freeTalk19_17"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"穴の中からリリカに助けを求められた時は"               ,speech2:"流石にちょっとびっくりしたな"                         ,nextTalk:"freeTalk19_18"},
          "freeTalk19_18"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"マルコスはアリーナで勝率が出なくて落ち込んでいた時"   ,speech2:" "                                                    ,nextTalk:"freeTalk19_19"},
          "freeTalk19_19"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"嬢ちゃんに応援してもらって元気が出たと"               ,speech2:"言っていたぜっ！"                                     ,nextTalk:"freeTalk19_20"},
          "freeTalk19_20"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あの時はマルコスくん本当に落ち込んでたから"           ,speech2:"少しでも元気になってくれたらなって"                   ,nextTalk:"freeTalk19_21"},
          "freeTalk19_21"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk19_22"},
          "freeTalk19_22"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"嬢ちゃんはこれらの時、迷惑を被ったと感じたかい？"     ,speech2:" "                                                    ,nextTalk:"freeTalk19_23"},
          "freeTalk19_23"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"え？"                                                 ,speech2:"いや...全然そんな風には思ってないけど......"          ,nextTalk:"freeTalk19_24"},
          "freeTalk19_24"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だがオレ様はあの時、迷惑をかけたなと思ったし、"       ,speech2:"マルコスは気を遣わせてしまったと思ったらしいぜっ！"   ,nextTalk:"freeTalk19_25"},
          "freeTalk19_25"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうだったの？！"                                     ,speech2:"そんな風に思う必要まったくないのに......"             ,nextTalk:"freeTalk19_26"},
          "freeTalk19_26"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様たちだって同じだぜっ！嬢ちゃんに迷惑を"         ,speech2:"かけられたなんて全く思ってないし、"                   ,nextTalk:"freeTalk19_27"},
          "freeTalk19_27"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"申し訳ないと思う必要だって全くないと思うぜっ！"       ,speech2:" "                                                    ,nextTalk:"freeTalk19_28"},
          "freeTalk19_28"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ピエールさん......"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk19_29"},
          "freeTalk19_29"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"申し訳ないと思うことは仕方ないし"                     ,speech2:"時には必要なことだと思うぜっ！"                       ,nextTalk:"freeTalk19_30"},
          "freeTalk19_30"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だがオレ様たちは案外お互いに迷惑かけあいながら"       ,speech2:"生きてるんだっ！"                                     ,nextTalk:"freeTalk19_31"},
          "freeTalk19_31"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"そう思うことができれば"                               ,speech2:"少しくらい気持ちも楽になるんじゃないかっ？"           ,nextTalk:"freeTalk19_32"},
          "freeTalk19_32"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうだね......ちょっとだけ気持ちが楽になったかも"     ,speech2:" "                                                    ,nextTalk:"freeTalk19_33"},
          "freeTalk19_33"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ありがとう、ピエールさん"                             ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk20_1"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ほらほら嬢ちゃん、食べなくていいのかい？"             ,speech2:"デザートピッツァだってこんなにたくさんあるんだぜっ！" ,nextTalk:"freeTalk20_2"},
          "freeTalk20_2"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"お、お、お気遣い...なく......"                        ,speech2:"と、討魔士たるもの、甘味にかまけている訳には......"   ,nextTalk:"freeTalk20_3"},
          "freeTalk20_3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"......聞くところによれば"                             ,speech2:"ここは夢の世界らしいじゃないかっ！"                   ,nextTalk:"freeTalk20_4"},
          "freeTalk20_4"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ここでなら欲望のままにピッツァを食べても"             ,speech2:"現実の身体に影響はないんじゃないかっ！？"             ,nextTalk:"freeTalk20_5"},
          "freeTalk20_5"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"『欲望我慢スル事ナカレ』...だぜっ！"                  ,speech2:" "                                                    ,nextTalk:"freeTalk20_6"},
          "freeTalk20_6"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"た、たしかに！ここでならいくら甘いものを食べても..."  ,speech2:" "                                                    ,nextTalk:"freeTalk20_7"},
          "freeTalk20_7"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"っていやいや違う違う。甘味を食べて"                   ,speech2:"心に油断が生ずるのがダメだんだ......！"               ,nextTalk:"freeTalk20_8"},
          "freeTalk20_8"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"例え身体への影響がなかったとしても"                   ,speech2:"我慢しないと......！"                                 ,nextTalk:"freeTalk20_9"},
          "freeTalk20_9"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ふ～む、ピッツァの耳くらい強情だなっ！"               ,speech2:"かくなる上は......"                                   ,nextTalk:"freeTalk20_10"},
          "freeTalk20_10"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"（バクバクもぐもぐバクバクもぐもぐ）"                 ,speech2:" "                                                    ,nextTalk:"freeTalk20_11"},
          "freeTalk20_11"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ふぅー、オレ様としたことが"                           ,speech2:" "                                                    ,nextTalk:"freeTalk20_12"},
          "freeTalk20_12"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"デザートピッツァ意外の全てのピッツァを"               ,speech2:"食べきっちまったぜっ！"                               ,nextTalk:"freeTalk20_13"},
          "freeTalk20_13"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だが嬢ちゃんはまだ腹ごしらえが済んでないよな？"       ,speech2:" "                                                    ,nextTalk:"freeTalk20_14"},
          "freeTalk20_14"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"これはデザートピッツァを食べるしか"                   ,speech2:"ないんじゃないかっ！"                                 ,nextTalk:"freeTalk20_15"},
          "freeTalk20_15"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"た、たし...かに？"                                    ,speech2:" "                                                    ,nextTalk:"freeTalk20_16"},
          "freeTalk20_16"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"腹が減っては戦はできぬぜっ！"                         ,speech2:" "                                                    ,nextTalk:"freeTalk20_17"},
          "freeTalk20_17"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"一流の討魔士なら、戦闘前にコンディションを整えるのも" ,speech2:"大事なことなんじゃないかっ！"                         ,nextTalk:"freeTalk20_18"},
          "freeTalk20_18"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そ、そうだね！"                                       ,speech2:"戦闘前に多少の腹ごしらえはしておかないと！！"         ,nextTalk:"freeTalk20_19"},
          "freeTalk20_19"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"たまたま食べれるものがデザートピザしかないから"       ,speech2:"これは不可抗力だ！！"                                 ,nextTalk:"freeTalk20_20"},
          "freeTalk20_20"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"それでは早速いただきます"                             ,speech2:" "                                                    ,nextTalk:"freeTalk20_21"},
          "freeTalk20_21"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......ん～～っ！！これ美味しい～～！！！"             ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk21_1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ピエールさんはこっちの世界にきてすぐに羊さんの群れに" ,speech2:"追いかけまわされていたんでしたっけ？"                 ,nextTalk:"freeTalk21_2"},
          "freeTalk21_2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"その通りだぜっ！"                                     ,speech2:" "                                                    ,nextTalk:"freeTalk21_3"},
          "freeTalk21_3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"最初はちゃんと戦っていたんだが"                       ,speech2:"あまりの数の多さから高い足場に逃げ込んだんだぜっ！"   ,nextTalk:"freeTalk21_4"},
          "freeTalk21_4"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"そういえば羊さんたちがいる位置より"                   ,speech2:"ちょっと高い位置にいましたね......"                   ,nextTalk:"freeTalk21_5"},
          "freeTalk21_5"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"あそこでしばらく待機してたら"                         ,speech2:"段々その場から羊も離れていったんだぜっ！"             ,nextTalk:"freeTalk21_6"},
          "freeTalk21_6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"たしかにあたしたちが着いた時には"                     ,speech2:"相手できなくはないくらいの数にはなってましたね"       ,nextTalk:"freeTalk21_7"},
          "freeTalk21_7"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だが羊が減っていても結局はあの鏡に道を塞がれていて"   ,speech2:"できることはなかったぜっ！"                           ,nextTalk:"freeTalk21_8"},
          "freeTalk21_8"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"嬢ちゃんの鏡を通り抜ける力がなければオレ様は"         ,speech2:"今でもあそこで羊たちを眺めていたと思うぜっ！"         ,nextTalk:"freeTalk21_9"},
          "freeTalk21_9"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"マジで感謝だっ！"                                     ,speech2:" "                                                    ,nextTalk:"freeTalk21_10"},
          "freeTalk21_10"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"いやいや、あたしはただ鏡さんにお願いするしか"         ,speech2:"してないので......"                                   ,nextTalk:"freeTalk21_11"},
          "freeTalk21_11"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"お礼であれば鏡さんに言ってあげてください"             ,speech2:" "                                                    ,nextTalk:"freeTalk21_12"},
          "freeTalk21_12"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"既に言ってみたが"                                     ,speech2:"全くのノーリアクションだったぜっ！"                   ,nextTalk:"freeTalk21_13"},
          "freeTalk21_13"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だからオレ様はやはり、あの鏡には嬢ちゃんの言葉しか"   ,speech2:"届かないんだと思うんだっ！"                           ,nextTalk:"freeTalk21_14"},
          "freeTalk21_14"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"という訳だから、嬢ちゃんには鏡へのお礼を"             ,speech2:"伝えて欲しいんだぜっ！"                               ,nextTalk:"freeTalk21_15"},
          "freeTalk21_15"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"助けてもらった上に伝言まで頼むのは申し訳ないがなっ！" ,speech2:" "                                                    ,nextTalk:"freeTalk21_16"},
          "freeTalk21_16"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"いやいやそんな、お気になさらず"                       ,speech2:" "                                                    ,nextTalk:"freeTalk21_17"},
          "freeTalk21_17"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"伝言は伝えられるかはわかりませんが、"                 ,speech2:"一応伝えようとはしてみます！"                         ,nextTalk:"freeTalk21_18"},
          "freeTalk21_18"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"重ね重ねマジ感謝だぜっ！"                             ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk22_1"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"こっちの世界に来てから"                               ,speech2:"どんくれぇ時間が経ったんだろうな？"                   ,nextTalk:"freeTalk22_2"},
          "freeTalk22_2"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あんま帰りが遅くなると俺様のファンたちが"             ,speech2:"俺様の心配のし過ぎで失神しちまうよ"                   ,nextTalk:"freeTalk22_3"},
          "freeTalk22_3"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ほーん、サーティーンにも"                             ,speech2:"熱心なファンなんているんだねー"                       ,nextTalk:"freeTalk22_4"},
          "freeTalk22_4"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"いやそのリアクションはおかしいだろ"                   ,speech2:"俺様の熱心なファンなんてたくさんいるに決まってる"     ,nextTalk:"freeTalk22_5"},
          "freeTalk22_5"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"<font id=thisSpeech onclick=f_popUpN('null','2020年8月に行われたアンケートに基づき集計されたランキングにて、サーティーンは再推しヒーローランキングで1位をとっている。'); style=color:#0012ff;z-index:5;>2020年の最推しヒーローランキング</font>1位よ？"              ,speech2:" "                                                    ,nextTalk:"freeTalk22_6"},
          "freeTalk22_6"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そんな何年も前のメタネタ引っ張ってきても"             ,speech2:"通じる人ほとんどいないよ......"                       ,nextTalk:"freeTalk22_7"},
          "freeTalk22_7"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"まぁファンとしてはともかく、友達として慕ってる人は"   ,speech2:"コンパスにもけっこういるだろうから"                   ,nextTalk:"freeTalk22_8"},
          "freeTalk22_8"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"心配はされてるかもね"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk22_9"},
          "freeTalk22_9"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......僕のことも向こうで誰かが心配してくれてたり"     ,speech2:"するかな"                                             ,nextTalk:"freeTalk22_10"},
          "freeTalk22_10"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"もし誰かが心配していてくれてたら"                     ,speech2:"ちょっとだけ嬉しいかも......"                         ,nextTalk:"freeTalk22_11"},
          "freeTalk22_11"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk22_12"},
          "freeTalk22_12"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"好きなだけ嬉しがっとけばいいと思うぞ"                 ,speech2:"おめーも大概人には好かれてる。心配はされてるだろうよ" ,nextTalk:"freeTalk22_13"},
          "freeTalk22_13"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"...こういう時は冷やかさず素直に褒めくれるよね"        ,speech2:" "                                                    ,nextTalk:"freeTalk22_14"},
          "freeTalk22_14"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"サーティーンって"                                     ,speech2:"意外とこうやって人の心を掴むのが上手い"               ,nextTalk:"freeTalk22_15"},
          "freeTalk22_15"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"意外ってなんだ意外って"                               ,speech2:" "                                                    ,nextTalk:"freeTalk22_16"},
          "freeTalk22_16"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コンパスでは弄られ役が板についちゃってるけど"         ,speech2:" "                                                    ,nextTalk:"freeTalk22_17"},
          "freeTalk22_17"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コンパスに来る前のさらに元の世界じゃ"                 ,speech2:"本当にファンとして慕ってくれる子もいるんじゃない？"   ,nextTalk:"freeTalk22_18"},
          "freeTalk22_18"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk22_19"},
          "freeTalk22_19"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"元の世界で......俺様を慕って......"                   ,speech2:" "                                                    ,nextTalk:"freeTalk22_20"},
          "freeTalk22_20"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......サーティーン？"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk22_21"},
          "freeTalk22_21"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......そ、そうだな、たくさんいたぜ？"                 ,speech2:"俺様を慕ってくれるやつは"                             ,nextTalk:"freeTalk22_22"},
          "freeTalk22_22"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"向こうにいた時はそれはもう毎日サインくれだの"         ,speech2:"握手してくれだのせがまれたもんよ"                     ,nextTalk:"freeTalk22_23"},
          "freeTalk22_23"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ふーん？"                                             ,speech2:" "                                                    ,nextTalk:"freeTalk22_24"},
          "freeTalk22_24"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"お前から話振ってきたクセになんでそんな"               ,speech2:"信じてない感じのリアクションなんだ！"                 ,nextTalk:"freeTalk22_25"},
          "freeTalk22_25"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"いやいや、信じてないことはないよ、ほんとほんと"       ,speech2:" "                                                    ,nextTalk:"freeTalk22_26"},
          "freeTalk22_26"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（多分慕ってくれてた子がいたってのは"                 ,speech2:"嘘じゃないんだろうな......）"                         ,nextTalk:"freeTalk22_27"},
          "freeTalk22_27"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（でも咄嗟に出た表現が『いた』っていう過去形なことを" ,speech2:"考えると）"                                           ,nextTalk:"freeTalk22_28"},
          "freeTalk22_28"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（<font id=thisSpeech onclick=f_popUpN('null','サーティーンの大切な「物」とされた下位天使たちは罪の浄化のために罰を与えられた。罰を生き延びた下位天使たちもその後の反逆において皆殺しにされたと思われる。詳細は「月影の堕天使」のシーズン文を参照。'); style=color:#0012ff;z-index:5;>サーティーンを慕っててたって子</font>は多分もう......）"   ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk23_1"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"なぁ、そこのかわいいかわいいテスラちゃん"             ,speech2:" "                                                    ,nextTalk:"freeTalk23_2"},
          "freeTalk23_2"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺様のカックイー漆黒のコートの背中に"                 ,speech2:"「膝枕募集中♡」って刺繍したの"                        ,nextTalk:"freeTalk23_3"},
          "freeTalk23_3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"どこのテスラちゃんだかご存じなぁい？"                 ,speech2:" "                                                    ,nextTalk:"freeTalk23_4"},
          "freeTalk23_4"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"ご存じないなー、ごめんね力になれなくて"               ,speech2:" "                                                    ,nextTalk:"freeTalk23_5"},
          "freeTalk23_5"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"いやいやいいのよー...ってなるかー！！"                ,speech2:" "                                                    ,nextTalk:"freeTalk23_6"},
          "freeTalk23_6"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"なにご丁寧に刺繍までしてくれちゃってるのよ"           ,speech2:"せめてシールで貼るとかでよくない？それでも許さんけど" ,nextTalk:"freeTalk23_7"},
          "freeTalk23_7"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"悪戯に手を抜くのは僕の美学に反するからね☆"           ,speech2:" "                                                    ,nextTalk:"freeTalk23_8"},
          "freeTalk23_8"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......白状したな？"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk23_9"},
          "freeTalk23_9"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"あ......"                                             ,speech2:" "                                                    ,nextTalk:"freeTalk23_10"},
          "freeTalk23_10"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"........."                                            ,speech2:" "                                                    ,nextTalk:"freeTalk23_11"},
          "freeTalk23_11"  :{img:"0"                 ,name:" "                       ,speech1:"（ピューンっ！）"                                     ,speech2:" "                                                    ,nextTalk:"freeTalk23_12"},
          "freeTalk23_12"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あ、コラ！待ちやがれテスラ！！"                       ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk24_1"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"あ！こんなところにいた"                               ,speech2:" "                                                    ,nextTalk:"freeTalk24_2"},//コクリコ合流後
          "freeTalk24_2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"サーティーンさん、コクリコちゃんが探してたよ？"       ,speech2:" "                                                    ,nextTalk:"freeTalk24_3"},
          "freeTalk24_3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あぁ？コクリコが？なんで名指しで俺様なんだ......"     ,speech2:"他にも遊び相手なんていっぱいいるだろうがよ"           ,nextTalk:"freeTalk24_4"},
          "freeTalk24_4"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"行ってあげないの？"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk24_5"},
          "freeTalk24_5"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"面倒だからパース、俺様子守りは苦手なんだ"             ,speech2:" "                                                    ,nextTalk:"freeTalk24_6"},
          "freeTalk24_6"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうなの？"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk24_7"},
          "freeTalk24_7"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"そうだよ？"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk24_8"},
          "freeTalk24_8"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"この前こっそりテディラビのほつれを"                   ,speech2:"直してあげてたのに？"                                 ,nextTalk:"freeTalk24_9"},
          "freeTalk24_9"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"なんで知ってんだよ"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk24_10"},
          "freeTalk24_10"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"その前はソファで寝落ちしてたコクリコちゃんを"         ,speech2:"ベッドに運んであげてたのに？"                         ,nextTalk:"freeTalk24_11"},
          "freeTalk24_11"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"だからなんで知ってんだよ"                             ,speech2:" "                                                    ,nextTalk:"freeTalk24_12"},
          "freeTalk24_12"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"コクリコちゃんがお菓子作り失敗ちちゃった時には......" ,speech2:" "                                                    ,nextTalk:"freeTalk24_13"},
          "freeTalk24_13"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あーー！覚えてなーい！！俺様全然覚えてなーーい！！"   ,speech2:"誰かと間違えてるんじゃないかなーーー！！"             ,nextTalk:"freeTalk24_14"},
          "freeTalk24_14"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あ、そーだ！コクリコが俺様探してるんだっけー！！"     ,speech2:"めんどくせーけど行ってやるかーー！！じゃあなリリカ！" ,nextTalk:"freeTalk24_15"},
          "freeTalk24_15"  :{img:"0"                 ,name:" "                       ,speech1:"（タッタッタッ......）"                               ,speech2:" "                                                    ,nextTalk:"freeTalk24_16"},
          "freeTalk24_16"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk24_17"},
          "freeTalk24_17"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"最初から普通に行ってあげたらいいのに......"           ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk25_1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"サーティーンさんと再会できた場所は"                   ,speech2:"けっこう強い敵もたくさんいる場所でしたね"             ,nextTalk:"freeTalk25_2"},
          "freeTalk25_2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もしかしてこの世界に飛ばされてきて早々に"             ,speech2:"強敵とたくさん戦う...みたいな状況だったんですか？"    ,nextTalk:"freeTalk25_3"},
          "freeTalk25_3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"そうだなぁ......"                                     ,speech2:" "                                                    ,nextTalk:"freeTalk25_4"},
          "freeTalk25_4"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺様にかかれば強敵ってほどじゃなかったが"             ,speech2:"厄介なやつはちょいちょいいたな"                       ,nextTalk:"freeTalk25_5"},
          "freeTalk25_5"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あの青い兎やピンクの熊以外にも"                       ,speech2:" "                                                    ,nextTalk:"freeTalk25_6"},
          "freeTalk25_6"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"やたらとデカいキリギリスだとか"                       ,speech2:"いきなり降ってくる天使みてぇなのとか"                 ,nextTalk:"freeTalk25_7"},
          "freeTalk25_7"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あの辺は流石の俺様もちょっとだけ手を焼いたぜ"         ,speech2:" "                                                    ,nextTalk:"freeTalk25_8"},
          "freeTalk25_8"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"そ、そんな敵とあたしたちも"                           ,speech2:"これから戦うことになるんでしょうか......"             ,nextTalk:"freeTalk25_9"},
          "freeTalk25_9"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"あー、そいつはどうだろうな"                           ,speech2:" "                                                    ,nextTalk:"freeTalk25_10"},
          "freeTalk25_10"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺がそいつらとやりあった場所は"                       ,speech2:"こことは随分離れた場所だったし"                       ,nextTalk:"freeTalk25_11"},
          "freeTalk25_11"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"そんなとこまで行かなくてもコクリコの母親が見つかれば" ,speech2:"戦う必要がねぇかもな"                                 ,nextTalk:"freeTalk25_12"},
          "freeTalk25_12"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なるほど......いやでも、そんな遠くからここまで来た"   ,speech2:"サーティーンさんも"                                   ,nextTalk:"freeTalk25_13"},
          "freeTalk25_13"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"まだコクリコちゃんのお母さんを"                       ,speech2:"見つけられてないんですよね？"                         ,nextTalk:"freeTalk25_14"},
          "freeTalk25_14"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"だったらやっぱりそんなとこまで"                       ,speech2:"探しにいかなきゃなんじゃ......"                       ,nextTalk:"freeTalk25_15"},
          "freeTalk25_15"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"いや、こんなとこまで”吹っ飛ばされてきた”だけだら"   ,speech2:"ここまでの道のりをくまなく確認できてた訳じゃない"     ,nextTalk:"freeTalk25_16"},
          "freeTalk25_16"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"その途中にいた可能性だって全然ある"                   ,speech2:" "                                                    ,nextTalk:"freeTalk25_17"},
          "freeTalk25_17"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"吹っ飛ばされてきた......？"                           ,speech2:" "                                                    ,nextTalk:"freeTalk25_18"},
          "freeTalk25_18"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"おうよ、猫耳みたいなんが付いたクジラに"               ,speech2:"ドガーンッ！と吹っ飛とばされちまったのさ"             ,nextTalk:"freeTalk25_19"},
          "freeTalk25_19"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"な、なるほど......"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk25_20"},
          "freeTalk25_20"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"本当にピンポイントで"                                 ,speech2:"大変な場所に飛ばされてきちゃったんですね......"       ,nextTalk:"endA"},
          "freeTalk26_1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"コクリコちゃんのお母さんは長らく帰ってないと"         ,speech2:"言っていたね......"                                   ,nextTalk:"freeTalk26_2"},
          "freeTalk26_2"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"まだあんな小さい子を置いて一体何処へ行っているんだ"   ,speech2:" "                                                    ,nextTalk:"freeTalk26_3"},
          "freeTalk26_3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......どこだと思う？"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk26_4"},
          "freeTalk26_4"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、サーティーンは知っているのかい？"               ,speech2:" "                                                    ,nextTalk:"freeTalk26_5"},
          "freeTalk26_5"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"まあな、俺様のよーく知っているところに行っちまった"   ,speech2:" "                                                    ,nextTalk:"freeTalk26_6"},
          "freeTalk26_6"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"勿体ぶらずに教えてくれないかい？"                     ,speech2:"それとも何か言えない事情が？"                         ,nextTalk:"freeTalk26_7"},
          "freeTalk26_7"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......あの世だよ、あの世"                             ,speech2:" "                                                    ,nextTalk:"freeTalk26_8"},
          "freeTalk26_8"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......！"                                             ,speech2:" "                                                    ,nextTalk:"freeTalk26_9"},
          "freeTalk26_9"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"コクリコちゃんはそのことを知らず、"                   ,speech2:"お母さんの帰りを待ち続けているということ......？"     ,nextTalk:"freeTalk26_10"},
          "freeTalk26_10"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そんなのって......"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk26_11"},
          "freeTalk26_11"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"じゃあアンタがコクリコの教えてやるか？"               ,speech2:"君のお母さんはもう帰ってきませんよって"               ,nextTalk:"freeTalk26_12"},
          "freeTalk26_12"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"言える訳ないだろ！"                                   ,speech2:"そんなこと......"                                     ,nextTalk:"freeTalk26_13"},
          "freeTalk26_13"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"だよなぁ？死神の俺様だってそんなこと言えねぇ"         ,speech2:" "                                                    ,nextTalk:"freeTalk26_14"},
          "freeTalk26_14"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"だからアイツはずっとこのままだ"                       ,speech2:"帰らぬ人の帰りをいつまでも待ち続けるのさ"             ,nextTalk:"freeTalk26_15"},
          "freeTalk26_15"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......っ！"                                           ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk27_1"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"なぁピエール、何か食い物ねぇ？"                       ,speech2:"小腹空いちまってよ"                                   ,nextTalk:"freeTalk27_2"},
          "freeTalk27_2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"それならここにピッザがあr..."                         ,speech2:" "                                                    ,nextTalk:"freeTalk27_3"},
          "freeTalk27_3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"いや、ピザは食い飽きたから別のもんがいい"             ,speech2:" "                                                    ,nextTalk:"freeTalk27_4"},
          "freeTalk27_4"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ならこっちに大きな大きなトマトがあるぜっ！"           ,speech2:" "                                                    ,nextTalk:"freeTalk27_5"},
          "freeTalk27_5"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"トマト......ただの生トマト？"                         ,speech2:" "                                                    ,nextTalk:"freeTalk27_6"},
          "freeTalk27_6"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"すんごーい生トマトだぜっ！！"                         ,speech2:" "                                                    ,nextTalk:"freeTalk27_7"},
          "freeTalk27_7"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......もうちょっとこう、軽食っぽいものはねぇのか？"   ,speech2:" "                                                    ,nextTalk:"freeTalk27_8"},
          "freeTalk27_8"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ならばこっちにすんごーいミニトマトもあるぜっ！！"     ,speech2:" "                                                    ,nextTalk:"freeTalk27_9"},
          "freeTalk27_9"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"うん、もうトマトでいいや。トマト一つくれ"             ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk28_1"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コクリコちゃんのお母さんってどんな人なの？"           ,speech2:" "                                                    ,nextTalk:"freeTalk28_2"},
          "freeTalk28_2"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"えーっとね、とーってもやさしくて"                     ,speech2:"コクリコのこといっぱいよしよししてくれるの！"         ,nextTalk:"freeTalk28_3"},
          "freeTalk28_3"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ふむふむ、なるほど"                                   ,speech2:"どんな外見......見た目なのかも聞いていい？"           ,nextTalk:"freeTalk28_4"},
          "freeTalk28_4"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"みため？うーんとね......"                             ,speech2:" "                                                    ,nextTalk:"freeTalk28_5"},
          "freeTalk28_5"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"やさしそうなおかおで、かみがながくて"                 ,speech2:"よくスカートのついたおようふくをきてるの！"           ,nextTalk:"freeTalk28_6"},
          "freeTalk28_6"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"スカートのついた......"                               ,speech2:"コクリコちゃんのお洋服に似てるお洋服かな？"           ,nextTalk:"freeTalk28_7"},
          "freeTalk28_7"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"そうかも！コクリコのおようふくにそっくり！"           ,speech2:" "                                                    ,nextTalk:"freeTalk28_8"},
          "freeTalk28_8"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"お母さんの髪の色は何色？"                             ,speech2:" "                                                    ,nextTalk:"freeTalk28_9"},
          "freeTalk28_9"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"しろいろかなー？"                                     ,speech2:"ぎんいろかもしれない......"                           ,nextTalk:"freeTalk28_10"},
          "freeTalk28_10"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（ふむ、あとはそうだな......"                         ,speech2:"確信を得ることができそうな質問は......）"             ,nextTalk:"freeTalk28_11"},
          "freeTalk28_11"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"コクリコちゃんのお母さんの小さい頃って"               ,speech2:"今のコクリコちゃんに似ていたと思う？"                 ,nextTalk:"freeTalk28_12"},
          "freeTalk28_12"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"うーん、そんなのわかんないよ......"                   ,speech2:" "                                                    ,nextTalk:"freeTalk28_13"},
          "freeTalk28_13"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"難しく考えなくてもいいよ"                             ,speech2:"コクリコちゃんのお母さんが小さい時を想像してみて？"   ,nextTalk:"freeTalk28_14"},
          "freeTalk28_14"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさんがちいさいとき......"                       ,speech2:" "                                                    ,nextTalk:"freeTalk28_15"},
          "freeTalk28_15"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"う～ん、コクリコににてるんじゃないかな......？"       ,speech2:" "                                                    ,nextTalk:"freeTalk28_16"},
          "freeTalk28_16"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"なるほど......"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk28_17"},
          "freeTalk28_17"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"質問に答えてくれてありがとね、コクリコちゃん"         ,speech2:"コクリコちゃんのお母さんを探す手がかりになりそうだよ" ,nextTalk:"freeTalk28_18"},
          "freeTalk28_18"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"ほんとう？！おかあさんはやくみつかるといいな～"       ,speech2:" "                                                    ,nextTalk:"freeTalk28_19"},
          "freeTalk28_19"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"......"                                               ,speech2:" "                                                    ,nextTalk:"freeTalk28_20"},
          "freeTalk28_20"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（このコクリコちゃんの夢の世界、"                     ,speech2:"僕たち部外者以外の人間があまりもいない......）"       ,nextTalk:"freeTalk28_21"},
          "freeTalk28_21"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（だからコクリコちゃんのお母さんが人間以外の姿で"     ,speech2:"顕現してる可能性も危惧したんだけど）"                 ,nextTalk:"freeTalk28_22"},
          "freeTalk28_22"  :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"（コクリコちゃん自身がちゃんとお母さんを人間の姿で"   ,speech2:"認識してそうだし、杞憂だったっぽいね）"               ,nextTalk:"endA"},
          "freeTalk29_1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"テスラおにいちゃん"                                   ,speech2:"ましーんをかしてくれて、ありがとう"                   ,nextTalk:"freeTalk29_2"},
          "freeTalk29_2"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"どういたしまして！"                                   ,speech2:"......でもどうしてこのタイミングでお礼を？"           ,nextTalk:"freeTalk29_3"},
          "freeTalk29_3"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"お母さんに会えた後に言われるならわかるんだけど......" ,speech2:" "                                                    ,nextTalk:"freeTalk29_4"},
          "freeTalk29_4"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさんにあえるのもたのしみだけど......"           ,speech2:" "                                                    ,nextTalk:"freeTalk29_5"},
          "freeTalk29_5"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"みんなでいっしょにコクリコのゆめのせかいを"           ,speech2:"ぼうけんできるのも、すっごくたのしいの！"             ,nextTalk:"freeTalk29_6"},
          "freeTalk29_6"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おかあさんにあえたら"                                 ,speech2:"おかあさんにあえたおれいもいうよ"                     ,nextTalk:"freeTalk29_7"},
          "freeTalk29_7"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"さっきのおれいは"                                     ,speech2:"いっしょにぼうけんできてうれしいからのおれい！"       ,nextTalk:"freeTalk29_8"},
          "freeTalk29_8"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"コクリコ......"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk29_9"},
          "freeTalk29_9"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"一つの発明品でこんな何度もお礼を言ってもらえるなんて" ,speech2:"発明家冥利に尽きるよ"                                 ,nextTalk:"freeTalk29_10"},
          "freeTalk29_10"  :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"（こんなトラブルこそ起きちゃったけど"                 ,speech2:"妄想体験マシーン、作ってよかったな......）"           ,nextTalk:"endA"},
          "freeTalk30_1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"きりんさんいいこだね～"                               ,speech2:"よしよーし"                                           ,nextTalk:"freeTalk30_2"},
          "freeTalk30_2"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（そういえばこのピンクのキリンさんたち、"             ,speech2:"動物園で見た大人のキリンよりはだいぶ小さいような...）",nextTalk:"freeTalk30_3"},
          "freeTalk30_3"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（みんな子供のキリンさんなのかな......）"             ,speech2:" "                                                    ,nextTalk:"freeTalk30_4"},
          "freeTalk30_4"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコ、ほんもののきりんさんにあえるのは"           ,speech2:"はじめてなんだー"                                     ,nextTalk:"freeTalk30_5"},
          "freeTalk30_5"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうなの？"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk30_6"},
          "freeTalk30_6"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"うん！"                                               ,speech2:"だからいま、すっごくかんどーしてるの！"               ,nextTalk:"freeTalk30_7"},
          "freeTalk30_7"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（見たことないない動物でも"                           ,speech2:"夢に出てくることってあるんだ......）"                 ,nextTalk:"freeTalk30_8"},
          "freeTalk30_8"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（あ、いやでももしかして......）"                     ,speech2:" "                                                    ,nextTalk:"freeTalk30_9"},
          "freeTalk30_9"   :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"本物を見るのが初めてってことは"                       ,speech2:"本物以外は見たことあるの？"                           ,nextTalk:"freeTalk30_10"},
          "freeTalk30_10"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"うん！えほんのなかのきりんさんや"                     ,speech2:"おにんぎょうのきりんさんにはあったことあるよ"         ,nextTalk:"freeTalk30_11"},
          "freeTalk30_11"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"おっきくてやさしくて、じつはとってもつよいんだって！" ,speech2:" "                                                    ,nextTalk:"freeTalk30_12"},
          "freeTalk30_12"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"だからコクリコ、いつかきりんさんと"                   ,speech2:"おともだちになってみたかったんだ～"                   ,nextTalk:"freeTalk30_13"},
          "freeTalk30_13"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"そうだったんだね"                                     ,speech2:"このキリンさんとはお友達になれそう？"                 ,nextTalk:"freeTalk30_14"},
          "freeTalk30_14"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"よしよしさせてくれるし、あいさつもしてくれるの！"     ,speech2:"だからきっとなれるんじゃないかな～"                   ,nextTalk:"freeTalk30_15"},
          "freeTalk30_15"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"リリカおねえちゃんたちも"                             ,speech2:"きっときりんさんのおともだちになれるよ"               ,nextTalk:"freeTalk30_16"},
          "freeTalk30_16"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ふふ、そうだったら嬉しいな"                           ,speech2:" "                                                    ,nextTalk:"freeTalk30_17"},
          "freeTalk30_17"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（このキリンさんたちはきっとコクリコちゃんの中の"     ,speech2:"キリンさんのイメージが反映されてるんだろうな......）" ,nextTalk:"freeTalk30_18"},
          "freeTalk30_18"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（コクリコちゃんから見たらこの大きさでも"             ,speech2:"きっと十分に大きい）"                                 ,nextTalk:"freeTalk30_19"},
          "freeTalk30_19"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（優しくて、強くて......は戦ってないから"             ,speech2:"わからないけど）"                                     ,nextTalk:"freeTalk30_20"},
          "freeTalk30_20"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（それじゃあ色がピンクなのにも"                       ,speech2:"何か理由はあるのかな......）"                         ,nextTalk:"freeTalk30_21"},
          "freeTalk30_21"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（キリンさんがピンク色の理由、うーん......）"         ,speech2:" "                                                    ,nextTalk:"freeTalk30_22"},
          "freeTalk30_22"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"リリカおねえちゃん、どうかしたの？"                   ,speech2:" "                                                    ,nextTalk:"freeTalk30_23"},
          "freeTalk30_23"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"ん？いや、どうもしてないよ"                           ,speech2:"ちょっと考え事してただけ"                             ,nextTalk:"freeTalk30_24"},
          "freeTalk30_24"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"（案外深い理由もないかもしれないし、"                 ,speech2:"考えても仕方ないかな）"                               ,nextTalk:"endA"},
          "freeTalk31_1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコもかがみさんとなかよくなって、コクリコだけで" ,speech2:"もかがみさんのなかにはいれるようになりたい！"         ,nextTalk:"freeTalk31_2"},
          "freeTalk31_2"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"アリスおねえちゃん、どうやったらコクリコも"           ,speech2:"かがみさんとなかよくなれるかな......"                 ,nextTalk:"freeTalk31_3"},
          "freeTalk31_3"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ど、どうやったらですか......"                         ,speech2:" "                                                    ,nextTalk:"freeTalk31_4"},
          "freeTalk31_4"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"うーん、あたしにも正直なところわからないんですよね...",speech2:" "                                                    ,nextTalk:"freeTalk31_5"},
          "freeTalk31_5"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ここの鏡さんたちはほぼ初対面なのに"                   ,speech2:"お願いを聞いてくれていますし......"                   ,nextTalk:"freeTalk31_6"},
          "freeTalk31_6"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"マルコスくんやテスラちゃんもこの仕組みは"             ,speech2:"わからないと言っていたました......"                   ,nextTalk:"freeTalk31_7"},
          "freeTalk31_7"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"わからないの......？"                                 ,speech2:" "                                                    ,nextTalk:"freeTalk31_8"},
          "freeTalk31_8"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"はい、ごめんなさい......"                             ,speech2:" "                                                    ,nextTalk:"freeTalk31_9"},
          "freeTalk31_9"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"そっか、わからないんじゃしょうがないね"               ,speech2:"コクリコもかがみさんとなかよくなりたかったな......"   ,nextTalk:"freeTalk31_10"},
          "freeTalk31_10"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"うーん......あ、そうだ！"                             ,speech2:" "                                                    ,nextTalk:"freeTalk31_11"},
          "freeTalk31_11"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"もしかしたらあたしと同じことをすれば"                 ,speech2:"あたしと同じことができるようになるかもしれません！"   ,nextTalk:"freeTalk31_12"},
          "freeTalk31_12"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"アリスおねえちゃんとおなじことを......？"             ,speech2:" "                                                    ,nextTalk:"freeTalk31_13"},
          "freeTalk31_13"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"条件を揃えれば現象は再現できる......みたいなことを"   ,speech2:"化学の先生が言ってた気がします！"                     ,nextTalk:"freeTalk31_14"},
          "freeTalk31_14"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"だからあたしと同じ条件を"                             ,speech2:"コクリコちゃんが満たせれば......"                     ,nextTalk:"freeTalk31_15"},
          "freeTalk31_15"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"よ、よくわかんないけどわかった！"                     ,speech2:" "                                                    ,nextTalk:"freeTalk31_16"},
          "freeTalk31_16"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"アリスおねえちゃんとおなじことって"                   ,speech2:"どんなことをすればいいの？"                           ,nextTalk:"freeTalk31_17"},
          "freeTalk31_17"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"それはズバリ......”恋”です！！"                     ,speech2:"たぶん"                                               ,nextTalk:"freeTalk31_18"},
          "freeTalk31_18"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"恋をしてからあたしの日常は変わっていきました！"       ,speech2:"だからきっと再現の鍵は恋です！！"                     ,nextTalk:"freeTalk31_19"},
          "freeTalk31_19"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"こ、こい......！"                                     ,speech2:"すごい、おとなだ！！"                                 ,nextTalk:"freeTalk31_20"},
          "freeTalk31_20"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコがんばってこいする！"                         ,speech2:" "                                                    ,nextTalk:"freeTalk31_21"},
          "freeTalk31_21"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"頑張ってするものではないような気もしますし、"         ,speech2:"恋イコール大人もなんか違う気がしますが"               ,nextTalk:"freeTalk31_22"},
          "freeTalk31_22"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"とりあえず頑張るだけ頑張ってみましょう！"             ,speech2:" "                                                    ,nextTalk:"endA"},
          "freeTalk32_1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"コ、コクリコ......"                                   ,speech2:" "                                                    ,nextTalk:"freeTalk32_2"},
          "freeTalk32_2"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"なぁに？あまいろおねえちゃん？"                       ,speech2:" "                                                    ,nextTalk:"freeTalk32_3"},
          "freeTalk32_3"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"コクリコはお母さんにしばらく会えていないと聞いたが、" ,speech2:"その、寂しくはないのかい？"                           ,nextTalk:"freeTalk32_4"},
          "freeTalk32_4"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"さびしいけど......"                                   ,speech2:"コクリコはつよいこだからだいじょうぶだよ"             ,nextTalk:"freeTalk32_5"},
          "freeTalk32_5"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そう...か......"                                      ,speech2:" "                                                    ,nextTalk:"freeTalk32_6"},
          "freeTalk32_6"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あまいろおねえちゃん？どうかしたの？"                 ,speech2:" "                                                    ,nextTalk:"freeTalk32_7"},
          "freeTalk32_7"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"<font id=thisSpeech onclick=f_popUpN('null','甘色の母は故人である。「討魔ノ狐」のシーズン文参照。'); style=color:#0012ff;z-index:5;>僕も母には長らく会えていないから</font>"                     ,speech2:"少しだけ寂しく思うこともあってね"                     ,nextTalk:"freeTalk32_8"},
          "freeTalk32_8"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"コクリコを見習わなければと思って"                     ,speech2:" "                                                    ,nextTalk:"freeTalk32_9"},
          "freeTalk32_9"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あまいろおねえちゃんもおかあさんにあえてないんだ.....",speech2:" "                                                    ,nextTalk:"freeTalk32_10"},
          "freeTalk32_10"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"じゃあおねえちゃんのおかあさんがかえってくるまで"     ,speech2:"コクリコがいっしょにいてあげる！"                     ,nextTalk:"freeTalk32_11"},
          "freeTalk32_11"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"そしたらコクリコもあまいろおねえちゃんも"             ,speech2:"ちょっとだけさびしくないでしょ？"                     ,nextTalk:"freeTalk32_12"},
          "freeTalk32_12"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"コクリコ......"                                       ,speech2:" "                                                    ,nextTalk:"freeTalk32_13"},
          "freeTalk32_13"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あまいろおねえちゃんのおかあさんも"                   ,speech2:"はやくかえってくるといいね"                           ,nextTalk:"freeTalk32_14"},
          "freeTalk32_14"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......っ！"                                           ,speech2:" "                                                    ,nextTalk:"freeTalk32_15"},
          "freeTalk32_15"  :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"そうだね...僕のお母さんもコクリコのお母さんも"        ,speech2:"早く帰ってきたらいいね"                               ,nextTalk:"endA"},
          "freeTalk33_1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"ん～～っ！！ピザおいし～～"                           ,speech2:" "                                                    ,nextTalk:"freeTalk33_2"},
          "freeTalk33_2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"まだまだたくさんおかわりはあるぜっ！"                 ,speech2:"好きなだけ食べなっ！"                                 ,nextTalk:"freeTalk33_3"},
          "freeTalk33_3"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"まだこんなにいっぱいあるの？！"                       ,speech2:"わーい！さっそくたべ......"                           ,nextTalk:"freeTalk33_4"},
          "freeTalk33_4"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ん？どうかしたのかい嬢ちゃん？"                       ,speech2:" "                                                    ,nextTalk:"freeTalk33_5"},
          "freeTalk33_5"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコ、このせかいにきてから"                       ,speech2:"ずっとピザばっかりたべてるきがする......！"           ,nextTalk:"freeTalk33_6"},
          "freeTalk33_6"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"このままじゃコクリコ、おデブさんになっちゃう......！" ,speech2:" "                                                    ,nextTalk:"freeTalk33_7"},
          "freeTalk33_7"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"なるほど......、嬢ちゃんも一人のレディとして"         ,speech2:"そういう心配もするようになったのかっ！"               ,nextTalk:"freeTalk33_8"},
          "freeTalk33_8"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だがここは嬢ちゃんの夢の世界、ここでいくら食べても"   ,speech2:"現実の嬢ちゃんが太ることは多分ないぜっ！"             ,nextTalk:"freeTalk33_9"},
          "freeTalk33_9"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"それに、仮にちょっとくらいポッチャリになったとしても" ,speech2:"そのくらいの方が愛嬌があって可愛らしいぜっ！"         ,nextTalk:"freeTalk33_10"},
          "freeTalk33_10"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"そっか！じゃあいっぱいたべてもだいじょうぶだね"       ,speech2:" "                                                    ,nextTalk:"freeTalk33_11"},
          "freeTalk33_11"  :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"その通りだぜっ！"                                     ,speech2:"さぁ欲望のままにピッツァを食らいなっ！"               ,nextTalk:"endA"},
          "freeTalk34_1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"ねぇねぇ、サーティーンおじちゃん"                     ,speech2:" "                                                    ,nextTalk:"freeTalk34_2"},
          "freeTalk34_2"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"『おにいさん』な"                                     ,speech2:"んでどうしたんだ？コクリコ"                           ,nextTalk:"freeTalk34_3"},
          "freeTalk34_3"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"”こい”ってどうすればできるの？"                     ,speech2:" "                                                    ,nextTalk:"freeTalk34_4"},
          "freeTalk34_4"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"”こい”？そりゃLOVEの”恋”か？"                     ,speech2:"なんだって急にそんなこと......"                       ,nextTalk:"freeTalk34_5"},
          "freeTalk34_5"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あのね、アリスおねえちゃんがね、こいをしたら"         ,speech2:"コクリコもかがみさんとなかよくなれるかもって"         ,nextTalk:"freeTalk34_6"},
          "freeTalk34_6"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"ほんとにマジでなんでだよ......"                       ,speech2:" "                                                    ,nextTalk:"freeTalk34_7"},
          "freeTalk34_7"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"そうだねぇ......そういうのは実際に恋してるやつに"     ,speech2:"聞いてみたらいいんじゃねぇか？"                       ,nextTalk:"freeTalk34_8"},
          "freeTalk34_8"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"丁度いいやつがお前の近くに”憑いてる”ことだしな"     ,speech2:" "                                                    ,nextTalk:"freeTalk34_9"},
          "freeTalk34_9"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコのちかくにこいしてるひとがいるの？"           ,speech2:"だれだろう......"                                     ,nextTalk:"freeTalk34_10"},
          "freeTalk34_10"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"おう、いるぜ。いっつもお前の近くにな"                 ,speech2:" "                                                    ,nextTalk:"freeTalk34_11"},
          "freeTalk34_11"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"残念ながら言葉を交わすことはできねぇみたいだが"       ,speech2:" "                                                    ,nextTalk:"endA"},
          
          
          "marcosData1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"呼ばれて飛び出て"                                     ,speech2:"マルコス'55～"                                        ,nextTalk:"marcosData2"},
          "marcosData2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"リリカちゃんをこよなく愛する"                         ,speech2:"ハイスペックでニートなオタクだよ"                     ,nextTalk:"marcosData3"},
          "marcosData3"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"これ以上に必要な情報なんて、まぁ多分ないっしょ"       ,speech2:" "                                                    ,nextTalk:"endB"},
          "nikolaData1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"二コラ　テスラだよ"                                   ,speech2:"人の驚いた顔が好きなんだ～"                           ,nextTalk:"nikolaData2"},
          "nikolaData2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"いつも色んなものを発明しいているんだけど"             ,speech2:" "                                                    ,nextTalk:"nikolaData3"},
          "nikolaData3"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"まさかボクの発明品でこんな事態になっちゃうなんてね...",speech2:" "                                                    ,nextTalk:"endB"},
          "lyricaData1"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカだよ"                                           ,speech2:" "                                                    ,nextTalk:"lyricaData2"},
          "lyricaData2"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"魔法少女としてみんなの夢と世界を守るために"           ,speech2:"いつも頑張っているの！"                               ,nextTalk:"lyricaData3"},
          "lyricaData3"    :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"今回もコクリコちゃんの夢のために"                     ,speech2:"リリカ、がんばるよ！"                                 ,nextTalk:"endB"},
          "aliceData1"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"青春アリスです"                                       ,speech2:" "                                                    ,nextTalk:"aliceData2"},
          "aliceData2"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ウサギさんを追いかけて"                               ,speech2:"不思議な世界に迷い込んでしまったんですが"             ,nextTalk:"aliceData3"},
          "aliceData3"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"またさらに不思議な世界に来てしまいました～"           ,speech2:"一体あたしはいつ元の世界に帰れるんでしょう..."        ,nextTalk:"endB"},
          "amairoData1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"怨霊誅滅第六課所属、狐ヶ咲甘色だよ"                   ,speech2:" "                                                    ,nextTalk:"amairoData2"},
          "amairoData2"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この世界の敵には怨霊ではないけど"                     ,speech2:"それに近しい存在もいるようだからね"                   ,nextTalk:"amairoData3"},
          "amairoData3"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"僕も皆の役に立てるよう精いっぱい頑張るつもりだよ"     ,speech2:" "                                                    ,nextTalk:"endB"},
          "pierreData1"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様の名前はピエール・ダ・イカッサマニャーギ・"     ,speech2:"ファッキネッティ・ラッラ・ラ・ラブリオーラ・"         ,nextTalk:"pierreData2"},
          "pierreData2"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"ドラゴナクター・ヒデヨシ・マクシミリアン・"           ,speech2:"スキーヨカローリ・ビョルルンド・モッチモーチ・"       ,nextTalk:"pierreData3"},
          "pierreData3"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"マリオージェ・マルーゲリータ・ウィルフレッド・"       ,speech2:"プニット・プニャトフスキ77世だっ！"                   ,nextTalk:"pierreData4"},
          "pierreData3"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"今日は名前だけでも覚えて帰ってくれよなっ！"           ,speech2:" "                                                    ,nextTalk:"endB"},
          "thirteenData1"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"みんな大好きサーティーンお兄さんだ"                   ,speech2:"見ての通り死神よ"                                     ,nextTalk:"thirteenData2"},
          "thirteenData2"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"んー？なになに？元天使って噂を聞いた？"               ,speech2:"八ッ！でどころの不確かな噂は信じるもんじゃねぇぞ"     ,nextTalk:"thirteenData3"},
          "thirteenData3"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"死神が元天使な訳ないだろ？"                           ,speech2:"「当たり前」のことだ"                                 ,nextTalk:"endB"},
          "coclicoData1"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコだよ"                                         ,speech2:" "                                                    ,nextTalk:"coclicoData2"},
          "coclicoData2"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"きょうはね～、ゆめのなかでおかあさんにあうために"     ,speech2:"テスラおにいちゃんに'ましーん'をかしてもらったんだ～" ,nextTalk:"coclicoData3"},
          "coclicoData3"   :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"早くおかあさんにあいたいな～"                         ,speech2:" "                                                    ,nextTalk:"endB"},
          "giraffeData1"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"とっても大人しいどころか近づくと挨拶までしてくれる"   ,speech2:"友好的な動物だね"                                     ,nextTalk:"giraffeData2"},
          "giraffeData2"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"このキリンがいるところは安全と思ってよさそうだから"   ,speech2:"僕らはキリンのいるところを休憩ポイントと捉えているよ" ,nextTalk:"giraffeData3"},
          "giraffeData3"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"休憩をすると装備変更や雑談ができるだけでなく"         ,speech2:"HPも全快するんだ"                                     ,nextTalk:"giraffeData4"},
          "giraffeData4"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"キリンを見つけたら積極的に休憩したいね"               ,speech2:" "                                                    ,nextTalk:"giraffeData5"},
          "giraffeData5"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ちなみにこのゲーム、"                                 ,speech2:"基本セーブは休憩時にしかされないみたいだから"         ,nextTalk:"giraffeData6"},
          "giraffeData6"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ゲームをやめる時にはなるべく休憩したいね～"           ,speech2:" "                                                    ,nextTalk:"endB"},
          "rockData1"      :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"このキリンさんは石化しちゃっているみたいなの..."      ,speech2:" "                                                    ,nextTalk:"rockData2"},
          "rockData2"      :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"何があったのかはわからないけど"                       ,speech2:"こんな状態で放っておけない！"                         ,nextTalk:"rockData3"},
          "rockData3"      :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"リリカの魔法ですぐに助けてあげるからね！"             ,speech2:" "                                                    ,nextTalk:"endB"},
          "mirrorData1"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"この世界にある大きな鏡さんはお願いしたら"             ,speech2:"あたしたちのことを反対側へ通してくれるみたいです"     ,nextTalk:"mirrorData2"},
          "mirrorData2"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ワープではなく反対側にいくなので"                     ,speech2:"いつもの鏡さんとは別の鏡さんのはずですが"             ,nextTalk:"mirrorData3"},
          "mirrorData3"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"何故かこの鏡さんもあたしの声にしか"                   ,speech2:"反応はしてくれないみたいです"                         ,nextTalk:"mirrorData4"},
          "mirrorData4"    :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"コクリコちゃんの夢の中のはずなのにどうして"           ,speech2:"あたしの声なんでしょうね..."                          ,nextTalk:"endB"},
          "sweetData1"     :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"この世界ではたまに僕らに対して囁いてくるお菓子が"     ,speech2:"いるんだ"                                             ,nextTalk:"sweetData2"},
          "sweetData2"     :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"床の隙間などに隠れているから目視で探すのは困難だが"   ,speech2:"匂いを辿れば見つけることができるよ"                   ,nextTalk:"sweetData3"},
          "sweetData3"     :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"見つけると何かしらのアイテムをくれるんだ"             ,speech2:" "                                                    ,nextTalk:"sweetData3"},
          "sweetData4"     :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"甘い匂いがしたら、周囲を注意深く探してみると"         ,speech2:"よいかもしれないね"                                   ,nextTalk:"endB"},
          "hamsterData1"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"時々道端で倒れているハムスターを見かけるんだ..."      ,speech2:" "                                                    ,nextTalk:"hamsterData2"},
          "hamsterData2"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"空腹で倒れているやつなんて"                           ,speech2:"オレ様はとても見ていられないぜっ！"                   ,nextTalk:"hamsterData3"},
          "hamsterData3"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"だから見つけ次第オレ様が"                             ,speech2:"「まんぷくはむすたー」になるまで"                     ,nextTalk:"hamsterData4"},
          "hamsterData4"   :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"大量のカロリカルなピッツァをご馳走してやるのさっ！"   ,speech2:" "                                                    ,nextTalk:"hamsterData5"},
          "hamsterData5"   :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"（普段からずっと謎に思っているんだけど"               ,speech2:"あの大量のピザは一体どこにしまっているんだろう...）"  ,nextTalk:"endB"},
          "splinterData1"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"あのとげとげにさわるとね、"                           ,speech2:"ちくっとしてとってもいたいの"                         ,nextTalk:"splinterData2"},
          "splinterData2"  :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"だからさわったらメッ！なんだよ？"                     ,speech2:"きをつけようね"                                       ,nextTalk:"endB"},
          "rabitData1"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"見た目は普通のウサギさんなんだけど"                   ,speech2:" "                                                    ,nextTalk:"rabitData2"},
          "rabitData2"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"近づくと電気を放って攻撃してくるちょっとだけ"         ,speech2:"危ないウサギさんなの"                                 ,nextTalk:"rabitData3"},
          "rabitData3"     :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"威力は控えめなんだけど、攻撃の範囲は広いから"         ,speech2:"近づく時には注意しないとね"                           ,nextTalk:"endB"},
          "bearData1"      :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やや、これは笑顔でこちらを殴ってくる熊だね"           ,speech2:" "                                                    ,nextTalk:"bearData2"},
          "bearData2"      :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"兎より痛いし硬いし速いし"                             ,speech2:"何より笑顔で殴ってくるのが正直怖い..."                ,nextTalk:"bearData3"},
          "bearData3"      :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"攻撃範囲は狭いから"                                   ,speech2:"可能なら避けて通りたい相手だね"                       ,nextTalk:"endB"},
          "sheepData1"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"赤い色の羊さんですね"                                 ,speech2:" "                                                    ,nextTalk:"sheepData2"},
          "sheepData2"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"攻撃はしてきませんが、人がいても容赦なく"             ,speech2:"ぶつかってくるので注意が必要です！"                   ,nextTalk:"sheepData3"},
          "sheepData3"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"この羊さんたち、ただ走り回っているだけというより"     ,speech2:" "                                                    ,nextTalk:"sheepData4"},
          "sheepData4"     :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"なんだか踊っているように見えるんですよね～"           ,speech2:"気のせいでしょうか...？"                              ,nextTalk:"endB"},
          "devilData1"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"いきなり現れて攻撃してくる迷惑なヤローだな"           ,speech2:"......ところでさ"                                     ,nextTalk:"devilData2"},
          "devilData2"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺様の記憶違いじゃなければたしか夢魔って......"       ,speech2:" "                                                    ,nextTalk:"devilData3"},
          "devilData3"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"淫魔の別称だった気が......"                           ,speech2:" "                                                    ,nextTalk:"devilData4"},
          "devilData4"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"............"                                         ,speech2:" "                                                    ,nextTalk:"devilData5"},
          "devilData5"     :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"いや流石に俺様の記憶違いだろう。コクリコの夢の中に"   ,speech2:"そんなやついる訳ねぇよな"                             ,nextTalk:"endB"},
          "omochiData1"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"うまそうなお餅を見つけてかぶりつこうとしたら"         ,speech2:"なんとお餅の方がかぶりついてきたぜっ！"               ,nextTalk:"omochiData2"},
          "omochiData2"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"オレ様も色んな食べ物を食べてきたが、"                 ,speech2:"食べ物の方がかぶりついてきたことは多くないぜ..."      ,nextTalk:"omochiData3"},
          "omochiData3"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"しかーし！オレ様はかぶりつかれたくらいで食欲が失せる" ,speech2:"ヤワな漢じゃないぜっ！"                               ,nextTalk:"omochiData4"},
          "omochiData4"    :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"さらに大きな口でかぶりつき返してやるのさっ！"         ,speech2:" "                                                    ,nextTalk:"endB"},
          "rabitEXData1"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"最初の方から見かけていたウサギさんの色違いですね"     ,speech2:" "                                                    ,nextTalk:"rabitEXData2"},
          "rabitEXData2"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"ピンクのウサギさんより速くて硬くて痛い！"             ,speech2:"しかも攻撃範囲は変わらず広いのでかなり強いです......" ,nextTalk:"rabitEXData3"},
          "rabitEXData3"   :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"避けきるのも大変ですし、ゴリ押ししちゃった方が"       ,speech2:"もしかしたらいいかもしれませんね"                     ,nextTalk:"endB"},
          "bearEXData1"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"最初の方から見かけていたクマの色違いだね"             ,speech2:"変異種とかなのかな？"                                 ,nextTalk:"bearEXData2"},
          "bearEXData2"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"耐久力にパンチの威力、歩く速さまで強くなっていて"     ,speech2:"厄介だけど"                                           ,nextTalk:"bearEXData3"},
          "bearEXData3"    :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"基本的な動きは他のクマと同じだから"                   ,speech2:"落ち着いて対処していきたいね"                         ,nextTalk:"endB"},
          "marionetteData1":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"全身に棘がついている人形だね"                         ,speech2:"触れただけで傷を負っちゃう厄介な相手だった"           ,nextTalk:"marionetteData2"},
          "marionetteData2":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"誰かに操られているかのような動きも特徴的だった"       ,speech2:" "                                                    ,nextTalk:"marionetteData3"},
          "marionetteData3":{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そいうえばあの動き方、"                               ,speech2:"バトル中のコクリコちゃんに似ているような......"       ,nextTalk:"endB"},
          "skeletonData1"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あたしたちより一回り大きなガイコツさんでしたね"       ,speech2:" "                                                    ,nextTalk:"skeletonData2"},
          "skeletonData2"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"小まめにお辞儀してくださるとても丁寧な方......"       ,speech2:"だったんでしょうか？"                                 ,nextTalk:"skeletonData3"},
          "skeletonData3"  :{img:"alice_normal"      ,name:"青春アリス"              ,speech1:"あれだけバンバン攻撃されちゃうと"                     ,speech2:"お辞儀を返す余裕もないですね......"                   ,nextTalk:"endB"},
          "princessData1"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"『命の懐中時計』で扉を開いた先にいるのが"             ,speech2:"『永遠の眠り姫』ねぇ......"                           ,nextTalk:"princessData2"},
          "princessData2"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"まったくふざけた話だ"                                 ,speech2:" "                                                    ,nextTalk:"princessData3"},
          "princessData3"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"「永遠の眠り」ってのは普通「死」を意味するんだぜ？"   ,speech2:"あんな状態、死体となんら変わりねぇよ"                 ,nextTalk:"princessData4"},
          "princessData4"  :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"俺様が魂を刈り取ってやれる分、死体の方がマシまである" ,speech2:" "                                                    ,nextTalk:"endB"},
          "niziiroData1"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"やはりババ様は強かったな......"                       ,speech2:"夢の中とはいえ、本当によく勝てたものだ"               ,nextTalk:"niziiroData2"},
          "niziiroData2"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"だがいずれは現実でも越えなくてはいけない人なのだろう" ,speech2:" "                                                    ,nextTalk:"niziiroData3"},
          "niziiroData3"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"僕らがババ様に勝てないようであれば"                   ,speech2:"きっと安心して隠居もできないだろうから"               ,nextTalk:"niziiroData4"},
          "niziiroData4"   :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......いや待てよ、ババ様にそもそも"                   ,speech2:"隠居する気はあるのだろうか？ない気もしてくるな......" ,nextTalk:"endB"},
          "lurucaData1"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"ルルカちゃんが出てきたあの夢の世界、"                 ,speech2:"多分ルルカちゃんの夢の世界だと思うんだ......"         ,nextTalk:"lurucaData2"},
          "lurucaData2"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"なんでルルカちゃんの夢の世界が"                       ,speech2:"ここに顕現しているのかはちょっと謎だったけど"         ,nextTalk:"lurucaData3"},
          "lurucaData3"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"冷静に考えればそんなに不思議なことでもない"           ,speech2:" "                                                    ,nextTalk:"lurucaData4"},
          "lurucaData4"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"現実世界での僕らは今多分昏睡状態になっている"         ,speech2:"もちろんリリカちゃんも"                               ,nextTalk:"lurucaData5"},
          "lurucaData5"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"リリカちゃんが昏睡状態になっているのを"               ,speech2:"ルルカちゃんが気付かない訳ないから"                   ,nextTalk:"lurucaData6"},
          "lurucaData6"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"きっとすぐに様子を見に来てアリーナで倒れている"       ,speech2:"リリカちゃんを見たはず"                               ,nextTalk:"lurucaData7"},
          "lurucaData7"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"そんな光景を目の当たりにしたショックでその場......"   ,speech2:"すなわち妄想体験マシーンの適用範囲内で気絶"           ,nextTalk:"lurucaData8"},
          "lurucaData8"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"その結果、気絶或いはそれに準ずる状態のルルカちゃんの" ,speech2:"見ている夢をマシーンが拾ったってことじゃないかな"     ,nextTalk:"lurucaData9"},
          "lurucaData9"    :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"あれがルルカちゃんの夢だと、リリカちゃんには"         ,speech2:"あんまり伝えない方がよさそうだよね"                   ,nextTalk:"lurucaData10"},
          "lurucaData10"   :{img:"marcos_normal"     ,name:"マルコス'55"             ,speech1:"データベースには何て記録しておこうかな......"         ,speech2:" "                                                    ,nextTalk:"endB"},
          "angelData1"     :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"サーティーンの知り合いみたいだったが、"               ,speech2:"あまり詳しく話したくはなさそうだったなっ！"           ,nextTalk:"angelData2"},
          "angelData2"     :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"人の触れられたくないようなことを記録するのも"         ,speech2:"気が引けるから"                                       ,nextTalk:"angelData3"},
          "angelData3"     :{img:"pierre_normal"     ,name:"ピエール77世"            ,speech1:"代わりに美味しいピッツァの作り方でも"                 ,speech2:"記録しておくぜっ！"                                   ,nextTalk:"endB"},
          "brokenClocData1":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"壊れちゃっている懐中時計だね"                         ,speech2:"パーツを集めれば直すことができそうだよ"               ,nextTalk:"brokenClocData2"},
          "brokenClocData2":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"でもこの懐中時計、XⅢまで数がふってあったり"          ,speech2:"針の動きが妙に早かったりで"                           ,nextTalk:"brokenClocData3"},
          "brokenClocData3":{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"直しても正常な時計にはなさなそうなんだよな..."        ,speech2:"元から異常な時計だったように見えるというか..."        ,nextTalk:"endB"},
          "LBData1"        :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"コクリコね、おかあさんのこと"                         ,speech2:"だーいすきなんだー"                                   ,nextTalk:"endB"},
          "partData1"      :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"懐中時計のパーツだね"                                 ,speech2:"これを集めれば懐中時計を直せるはず！"                 ,nextTalk:"partData2"},
          "partData2"      :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"道端に落ちていたり、囁くお菓子が持っていたり"         ,speech2:"するみたいだから"                                     ,nextTalk:"partData3"},
          "partData3"      :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"見かけたら拾っておいてくれると嬉しいな"               ,speech2:" "                                                    ,nextTalk:"endB"},
          "clockData1"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"みんながパーツを集めてくれたお陰で"                   ,speech2:"なんとか懐中時計を修理できたよ！"                     ,nextTalk:"clockData2"},
          "clockData2"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"この懐中時計、コクリコがいつもつけているものと"       ,speech2:"サイズ以外は同一のものだったみたいだね"               ,nextTalk:"clockData3"},
          "clockData3"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"コクリコの夢の中なんだしコクリコのものがあるのは"     ,speech2:"自然なことだと思うんだけど"                           ,nextTalk:"clockData4"},
          "clockData4"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"サーティーンはこの直った懐中時計を"                   ,speech2:"何とも言えない顔で見ていたな..."                      ,nextTalk:"clockData5"},
          "clockData5"     :{img:"nikola_normal"     ,name:"二コラ　テスラ"          ,speech1:"いったいどうしてだろう...？"                          ,speech2:" "                                                    ,nextTalk:"endB"},
          "tobibakoData1"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"とってもふわふわの跳び箱だよ"                         ,speech2:"これならぶつかっちゃっても痛くなさそう！"             ,nextTalk:"tobibakoData2"},
          "tobibakoData2"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"どうやったのかはよくわからないけど"                   ,speech2:"マルコスくんがこの跳び箱でチャームを作ってくれたの！" ,nextTalk:"tobibakoData3"},
          "tobibakoData3"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"このチャームをつけただけで身体がちょっとだけ"         ,speech2:"丈夫になるみたい！"                                   ,nextTalk:"tobibakoData4"},
          "tobibakoData4"  :{img:"lyrica_normal"     ,name:"リリカ"                  ,speech1:"こんな不思議なものを作れちゃうなんて"                 ,speech2:"マルコスくんはすごいな～"                             ,nextTalk:"endB"},
          "melonData1"     :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"とーってもとろとろなめろんだよ"                       ,speech2:"ねこさんよりもふにゃ～ってしてるんだー"               ,nextTalk:"melonData2"},
          "melonData2"     :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"マルコスおにいちゃんがこのメロンから"                 ,speech2:"つくってくれたおかざりはね"                           ,nextTalk:"melonData3"},
          "melonData3"     :{img:"coclico_normal"    ,name:"コクリコット　ブランシュ",speech1:"もってるだけでげんきがモリモリになるんだよ"           ,speech2:"すごいね～"                                           ,nextTalk:"endB"},
          "eraserData1"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"とっても甘い香りのする消しゴムだね"                   ,speech2:" "                                                    ,nextTalk:"eraserData2"},
          "eraserData2"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"い、いや別に香りにつられて味見なんてしてないよ...？"  ,speech2:"消しゴムだってわかってたからね、うん"                 ,nextTalk:"eraserData3"},
          "eraserData3"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"思っていたより甘くて美味しかったとか全然ないよ？"     ,speech2:" "                                                    ,nextTalk:"eraserData4"},
          "eraserData4"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"......本当だよ...？"                                  ,speech2:" "                                                    ,nextTalk:"eraserData5"},
          "eraserData5"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"マルコスがこの消しゴムから作った装飾を身に着けると"   ,speech2:"集中力が高まり攻撃の精度が上がるらしいんだ"           ,nextTalk:"eraserData6"},
          "eraserData6"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"正直本当なのか怪しんでいたんだが、"                   ,speech2:"マルコス本人が僕らの前でその効力を証明してくれてね"   ,nextTalk:"eraserData7"},
          "eraserData7"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"どうやら本当に効果があるようなんだ"                   ,speech2:" "                                                    ,nextTalk:"eraserData8"},
          "eraserData8"    :{img:"amairo_normal"     ,name:"狐ヶ咲甘色"              ,speech1:"不思議なことに思えてならないが、夢の世界であるなら"   ,speech2:"こんな不可解なものの存在も頷ける気がするよ"           ,nextTalk:"endB"},
          "tanpopoData1"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"見ての通り真っ黒なたんぽぽだ"                         ,speech2:" "                                                    ,nextTalk:"tanpopoData2"},
          "tanpopoData2"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"本当にたんぽぽなのか疑いたくなるが"                   ,speech2:"テスラやマルコスがいうならきっとたんぽぽなんだろう"   ,nextTalk:"tanpopoData3"},
          "tanpopoData3"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"マルコスがこのたんぽぽから作ったペンダントを付けると" ,speech2:"耐久力と引き換えに攻撃力が上がるらしい"               ,nextTalk:"tanpopoData4"},
          "tanpopoData4"   :{img:"thirteen_normal"   ,name:"13†サーティーン†"      ,speech1:"......やっぱりこれ、たんぽぽじゃないだろ"             ,speech2:" "                                                    ,nextTalk:"endB"},
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

function f_stageReset(){

coclicoDream1BackP=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','0','0','0','0','0','0'],['0','ff0013','ff0013','0','0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','0','0','0','0','0','0'],['0','ff0013','ff0013','0','0','0','0','0','ff0013','ff0013','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','backC','0','0','backC','0','0','backC','0','0','backC','0','0','backC','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','pierre_normal','blockB','blockB','blockB','blockB'],['0','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','hamsterB','hamsterB','hamsterA','hamsterA','hamsterA','blockB','blockB','blockB'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];

coclicoDream1Back=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','0','0','0','0','0','0'],['0','ff0013','ff0013','0','0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','0','0','0','0','0','0'],['0','ff0013','ff0013','0','0','0','0','0','ff0013','ff0013','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','backC','0','0','backC','0','0','backC','0','0','backC','0','0','backC','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB'],['0','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream1Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','omochi','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','splinter','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','omochi','0','0','0','0','0','0','0','rabit','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','splinter','splinter','0','0','0','0','0','0','0','0','sweetH','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','sweetI','0','0','0','0','bear','0','0','0','0','0','dreamRockB','0','0','0','sweetJ','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','rabit','0','pierre','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','sheep','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream1Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1'],['1','0','0','1','1','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1'],['1','0','0','1','1','1','1','1','0','0','1','1','1','1','1','1','1','0','0','0','0','0'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','0','0','0','0'],['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','1','1','1','1'],['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','1','1','1','1'],['1','1','1','1','1','1','1','1','0','0','1','1','1','1','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0','1','1','1'],['1','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0','1','1','1'],['1','0','0','0','0','1','1','1','1','1','1','1','1','1','0','0','0','0','0','0','0','0'],['1','0','0','0','0','1','1','1','1','1','1','1','1','1','0','0','0','0','0','0','0','0'],['1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream1Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','0','0','0'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0'],['blockA','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0'],['blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream1BossBack=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','backG','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream1BossGimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','angel','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream1BossHit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream1BossFront=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream2Back=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','blockB','blockB','blockB','blockB','0','0','blockB','blockB','blockB','blockB'],['ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB'],['ff0013','ff0013','backC','ff0013','ff0013','backC','ff0013','ff0013','backC','ff0013','ff0013','backC','blockB','blockB','blockB','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','blockB','blockB','blockB','blockB','0','0'],['0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','blockB','blockB','blockB','blockB','0','0'],['0','0','0','0','0','0','0','blockB','0','0','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','0','0','0','blockB','blockB','0','0','blockB','blockB','blockB','0','0','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream2Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','hamsterD','0','0','0','0','0'],['0','0','0','0','0','0','0','partF','0','0','giraffeD','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','omochi','omochi','0','itemD','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','splinter','splinter','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','omochi','0','omochi','0','0','0','0','sweetK','0','0','0','amairo','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','sheep','0','0','0','0','sheep','0','mirror','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream2Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1'],['1','1','1','1','1','0','0','1','1','1','1','1','0','0','1','1','1','1','1','1','1','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','1','1'],['1','1','1','1','1','0','0','0','1','1','0','0','0','1','1','1','1','1','1','1','1','1'],['1','1','1','0','0','0','0','1','1','1','0','0','1','1','0','0','0','1','1','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','1','1','0','0','0','1','1','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream2Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['blockA','blockA','blockA','blockD','blockD','0','0','blockD','blockD','blockD','blockD','blockD','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA','0','0','0','0','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','blockA','blockA','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','blockA','blockA','blockA','0','0','blockA','blockA','0','0','0','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','0','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream3Back=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0']];
coclicoDream3Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','marionetteB','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','itemF','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream3Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1']];
coclicoDream3Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','0','0','blockA']];

coclicoDream3BossBack=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','0'],['blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','0'],['blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0']];
coclicoDream3BossGimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','marionette','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream3BossHit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1'],['0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','1'],['0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','1'],['0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1']];
coclicoDream3BossFront=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','eventBlock','0','blockA'],['0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','eventBlock','0','blockA'],['0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','eventBlock','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA']];

coclicoDream4Back=[['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream4Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','mother','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','lastBossB','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream4Hit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream4Front=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream4BossBack=[['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream4BossGimmick=[['0','lastBossC','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','lastBossA','lastBossA','lastBossA','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','lastBossA','lastBossA','lastBossA','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','lastBossA','lastBossA','lastBoss','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream4BossHit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream4BossFront=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','eventBlock','eventBlock','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream5Back=[['0','a0a0a0','a0a0a0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0'],['0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0'],['0','0','0','0','a0a0a0','a0a0a0','0','0','0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0','0','0','0'],['0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0','0','0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0','0','0','0'],['0','0','a0a0a0','a0a0a0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0'],['0','0','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0'],['0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream5Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','rabit','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','giraffeB','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','itemB','0','0','0','0','0','0','0','splinter','0','splinter','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','bear','0','0','0','0','0','0','sweetC','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','nikola','0','0','0','0','0'],['0','0','0','0','0','0','0','splinter','0','splinter','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','rabit','0','0','hamsterA','0','0','0','0','bear','partB','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream5Hit=[['1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['1','1','1','1','0','0','1','1','1','1','1','0','0','0','0','0','0','0','1','1','1','1'],['1','1','0','0','0','0','1','1','1','1','1','0','0','0','0','0','0','0','1','1','1','1'],['1','1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1'],['1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1','1','1','1'],['1','0','0','1','1','1','1','1','1','1','1','0','0','0','0','0','0','0','1','1','1','1'],['1','0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1'],['1','0','1','1','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','1'],['1','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1'],['1','0','1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream5Front=[['blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockD','blockD','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','blockD','blockD','blockD','blockD','blockD','0','blockD','blockD','blockD','blockD','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','0','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA'],['blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream6Back=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','0','blockB','blockB','0'],['000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','0','blockB','blockB','0'],['0','0','000bff','000bff','000bff','000bff','000bff','0','0','0','0','0','0','0','000bff','000bff','000bff','000bff','0','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','000bff','0','blockB','blockB','0'],['0','0','0','0','0','0','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','0','0','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0'],['0','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0'],['0','blockB','blockB','blockB','0','0','0','0','backB','0','0','backB','0','0','backB','0','0','backB','blockB','blockB','0','0'],['0','0','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','blockB','blockB','blockB','0'],['0','blockB','blockB','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','0'],['0','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','0','blockB','blockB','0'],['0','blockB','blockB','blockB','0','blockB','blockB','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','blockB','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0','0','0','0','0','0','0','0']];
coclicoDream6Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','lyrica','0','0','0','0','devil','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','sweetE','0','0'],['0','0','0','0','sweetD','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','hamsterB','0','0','0','0','0','0','devil','0','0','0','0','0','0','0','partC','0'],['0','0','devil','0','0','0','0','0','0','0','0','0','0','0','0','0','rabit','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','devil','0','0'],['0','0','0','0','0','0','0','0','devil','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','devil','0','0','0','0','0','0','0','0','bear','0','0','0','0','0','devil','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','splinter','splinter','0'],['0','partD','0','0','0','sweetF','0','0','0','0','0','0','0','0','0','mirror','0','0','0','0','sheep','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream6Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','1'],['1','1','0','0','0','0','0','1','1','1','1','1','1','1','0','0','0','0','1','0','0','1'],['1','1','1','1','0','1','1','1','1','1','1','1','1','1','1','1','1','0','1','0','0','1'],['1','1','1','1','0','1','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','1'],['1','1','1','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','0','1'],['1','0','0','0','1','1','1','1','1','1','0','0','0','0','0','0','0','1','0','0','1','1'],['1','1','0','0','1','0','0','0','0','0','0','0','1','1','1','1','1','1','0','0','0','1'],['1','0','0','1','1','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','1'],['1','0','0','0','1','0','0','0','0','0','0','0','0','0','0','1','0','0','1','0','0','1'],['1','0','0','0','1','0','0','1','1','1','1','1','0','0','0','1','0','0','0','0','0','1'],['1','0','1','1','1','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','0','0','1','1','1','1','1','1','1','1']];
coclicoDream6Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockD','blockD','0','blockD','blockD','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','blockA','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','blockA'],['blockA','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockD','blockD','blockD','blockD','blockD','blockA','0','0','blockA','blockA'],['blockA','blockA','0','0','blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','blockA'],['blockA','0','0','blockA','blockA','0','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','blockA'],['blockA','0','0','0','blockA','0','0','blockD','blockD','blockD','blockD','blockD','0','0','0','blockA','0','0','blockC','0','0','blockA'],['blockA','0','0','0','blockA','0','0','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockC','blockC','blockC','blockC','blockC','blockA']];

coclicoDream7Back=[['0','0','0','0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','ff0013','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','backC','0','0','backC','0','0','backC','0','0','backC','0','0','backC','blockB','blockB','blockB','blockB','blockB','blockB'],['0','0','0','blockB','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','000bff','0','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','backB','0','0','backB','0','0','backB','0','0','backB','0','0','backB','0','0','0','0','0','0','0','0'],['0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream7Gimmick=[['0','0','0','0','eventBlockA','eventBlockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','devil','0','0','0','0','0','0','devil','0','0','devil','0','0','0','sweetL','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','rabitEX','0','partG','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','devil','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','omochi','0','0','0','0','rabitEX','0','0','mirror','0','0','0','0','thirteen','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','devil','0','0','0','0','devil','0','0','0','0','0'],['0','0','0','devil','0','0','0','0','0','0','0','0','0','0','hamsterE','0','0','0','0','rabit','partH','0'],['0','0','0','0','0','0','0','0','0','omochi','0','splinter','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','eventBlockB','eventBlockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream7Hit=[['1','1','1','1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','1'],['1','0','0','0','1','1','1','1','0','0','0','0','0','0','0','1','1','1','1','0','0','1'],['1','0','0','0','1','1','1','1','0','0','0','0','0','0','0','1','0','0','0','0','0','0'],['1','1','1','0','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','0'],['1','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','1','1','1'],['1','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','1','1','1'],['1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','0','0','0','0','0','1'],['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','1'],['1','1','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','1','1','1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream7Front=[['blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','0','0','0','0','0','0'],['blockA','blockA','blockA','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','blockD'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','blockD','blockD','blockD','blockD','blockD','blockD','blockA','blockA','blockA'],['blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','0','0','0','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream8Back=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','a0a0a0','a0a0a0','0'],['0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','a0a0a0','a0a0a0','a0a0a0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','blockB','blockB','0','0','backA','0','0','backA','0','0','backA','0','0','backA'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','blockB','blockB','0','0','blockB','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','0'],['0','blockB','blockB','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','0','0'],['0','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0'],['0','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','backA','0','0','backA','0','0','backA','5f5f5f','5f5f5f','5f5f5f','5f5f5f','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','5f5f5f','5f5f5f','0','0','0','0','0','0','0']];
coclicoDream8Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','devil','0','0','0','0','0','0','0','0','0','0','0'],['0','sweetM','0','0','0','0','0','0','0','0','0','0','bearEX','0','0','itemE','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','splinter','0','splinter','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','sheep','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','giraffeE','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','devil','0','0','0','0','omochi','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','bearEX','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','dreamRockC','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','mirror','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','coclico','0','0','0','0','0','0','0','door','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream8Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','1','1'],['1','1','1','1','1','0','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','1','1','1','1','0','0','1'],['1','1','1','1','1','1','1','1','0','0','1','0','0','0','0','0','0','0','1','0','0','1'],['1','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','0','0','1','1','0','1'],['1','0','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','1','0','0','1'],['1','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','1','0','0','0','1'],['1','0','0','1','1','1','1','1','1','1','1','0','0','0','0','0','0','1','0','0','1','1'],['1','0','0','1','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','0','0','1'],['1','0','0','1','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','0','0','0','0','0','1','1','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1','1','1','1','1','1','1']];
coclicoDream8Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','blockA','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','blockA','0','0','0','blockA','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','0','0','0','0','0','blockA'],['blockD','blockD','blockD','blockD','blockD','0','blockD','blockD','0','0','blockA','0','0','0','0','blockA','blockA','blockA','blockA','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','0','0','0','0','0','0','0','blockA','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','0','0','blockA','0','0','blockA'],['blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','0','0','blockA','0','0','0','blockA'],['blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','blockA','0','0','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','blockA','blockA','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream8BossBack=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','backE','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream8BossGimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','niziiro','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream8BossHit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream8BossFront=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream9Back=[['0','0','0','a0a0a0','a0a0a0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0','0','0','0','0','blockB','blockB','0'],['0','0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','blockB','blockB','0','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','a0a0a0','a0a0a0','0','blockB','0','blockB','blockB','blockB','blockB','0'],['0','0','0','0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','a0a0a0','0','blockB','0','blockB','blockB','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','0','0','0','0'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','0'],['0','blockB','blockB','0','0','backA','0','0','backA','0','0','backA','0','0','backA','0','0','blockB','blockB','blockB','blockB','0'],['0','blockB','blockB','0','0','0','0','0','0','0','0','0','0','blockB','0','0','0','0','blockB','blockB','blockB','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','blockB','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0'],['0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream9Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','rabit','0','0','0'],['0','sweetA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','bear','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','itemA','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','mirror','0','0','0','0','giraffeA','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','sheep','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','splinter','0','splinter','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','partA','0','0','0','0','0','sheep','0','0','0','0','0','sweetB','0','0','0','0','rabit','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream9Hit=[['1','0','1','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','1','1','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','0','0','1'],['1','1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','0','0','1','0','1','0','0','0','0','1'],['1','1','1','1','0','0','0','0','0','0','0','0','0','0','1','0','1','0','0','1','1','1'],['1','1','1','1','0','0','0','0','0','0','0','0','0','0','1','1','1','0','1','1','1','1'],['1','0','0','1','0','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','1'],['1','0','0','1','0','0','0','0','0','0','0','0','1','0','1','1','1','0','0','0','0','1'],['1','0','1','1','1','1','1','1','1','1','1','1','1','0','1','1','1','1','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','0','1','1','1','0','0','0','0','0','0','0','1','1'],['1','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','1','1'],['1','0','0','0','0','0','0','0','0','0','1','1','1','0','0','0','0','0','0','0','1','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream9Front=[['blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','0','0','blockA'],['blockA','blockA','blockA','blockA','blockD','blockD','blockD','blockD','blockD','blockD','blockD','blockD','0','0','0','blockA','blockA','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','blockA','0','blockA','0','0','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','0','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','blockA','0','blockA','blockA','blockA','0','0','0','0','blockA'],['blockA','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','blockA','blockA','blockA','blockA','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','0','0','0','0','blockA'],['blockA','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','0','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','0','0','0','0','0','0','0','blockA','blockA'],['blockA','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream10Back=[['0','0','0','0','0','0','0','0','0','0','0','0','000bff','000bff','0','0','0','0','0','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','blockB','blockB','blockB','blockB','blockB','0','0','backB','0','0','backB','0','0','backB','0','blockB','blockB','blockB','blockB','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB'],['0','0','0','0','0','0','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','blockB'],['0','0','0','0','0','0','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','0','blockB','0','0','0','0','0'],['0','0','0','0','blockB','0','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','0','0','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','0'],['0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','0','blockB','blockB','blockB','blockB','blockB','0'],['0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','blockB','blockB','0','blockB','blockB','0','0','0','0'],['0','0','blockB','blockB','blockB','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','blockB','blockB','blockB','0'],['0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream10Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','devil','0','0','0','0','0','0','0','0','0','0'],['0','0','dreamRockA','0','0','0','mirror','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','giraffeC','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','partE','0','0','alice','0','0','mirror','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','sweetG','0'],['0','0','0','0','0','0','0','0','0','sheep','0','mirror','0','0','0','0','0','0','0','0','0','0'],['0','0','0','devil','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','hamsterC','0','0','0','0','0','0','0','0','0','0','0','0','0','0','sheep','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream10Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','0','0','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','1','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','1','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1'],['1','0','0','0','0','0','1','0','0','0','0','0','0','0','0','1','0','0','0','0','1','1'],['1','1','1','1','1','1','1','1','0','0','1','1','0','0','0','1','0','0','0','0','0','0'],['1','1','1','1','1','1','0','0','0','0','1','0','0','0','0','1','0','0','0','0','0','0'],['1','0','0','0','0','1','0','0','0','0','1','0','0','0','1','1','0','1','1','1','1','1'],['1','0','0','0','0','1','0','0','0','0','1','0','0','0','0','1','0','0','0','0','0','1'],['1','0','0','0','1','1','1','1','1','1','1','1','0','0','0','1','1','0','0','0','0','1'],['1','0','0','1','1','0','0','0','0','0','0','1','0','0','0','1','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','1','0','0','1','1','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','1','0','0','1','1','0','0','1','1','1','1'],['1','1','0','0','0','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','1'],['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream10Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','blockA','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','blockA','blockA'],['blockA','blockC','blockC','blockC','blockC','blockC','blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','blockA','0','0','0','0','0','0'],['blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','blockA','0','0','0','0','blockA','0','0','0','0','0','0'],['blockA','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','0','0','blockA','blockA','0','blockA','blockA','blockA','blockA','blockA'],['blockA','blockA','blockA','blockA','0','blockA','0','0','0','0','0','0','0','0','0','blockA','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockC','blockC','blockC','blockC','blockA','blockA','0','0','0','blockA','blockA','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','0','blockA','0','0','0','blockA','0','0','0','0','0','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','0','0','0','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','blockA','blockA','0','0','blockA','blockA','blockA','blockA'],['blockA','blockA','0','0','0','blockC','blockC','blockC','blockC','blockC','blockC','blockA','blockA','blockA','blockA','blockA','0','0','0','0','0','blockA'],['blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockA']];

coclicoDream10BossBack=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','backF','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream10BossGimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','luruca','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream10BossHit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream10BossFront=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream11Back=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream11Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','skeletonB','0','0','itemG','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream11Hit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1','0','1'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream11Front=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','0','0','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','eventBlock','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','eventBlock','0','blockA'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockA']];

coclicoDream11BossBack=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockB','blockB','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','blockB','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream11BossGimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','skeleton','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream11BossHit=[['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream11BossFront=[['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','eventBlock','eventBlock','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockC','blockA']];

coclicoDream12Back=[['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','backD','0','0','backD','0','0','backD','0','0','backD','0','0','backD','0','0','backD'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream12Gimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','princessA','itemH','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream12Hit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream12Front=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','eventBlock','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

coclicoDream12BossBack=[['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','5f5f5f','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','backD','0','0','backD','0','0','backD','0','0','backD','0','0','backD','0','0','backD'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream12BossGimmick=[['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','princess','0','0','0','0','0','0','0','0'],['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']];
coclicoDream12BossHit=[['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']];
coclicoDream12BossFront=[['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','blockA'],['blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA','blockA']];

}

function f_freeTalk(){
 if(!heros["nikola"].usable){
  if(!event["freeTalk1"].happen){event["freeTalk1"].happen=1;f_speech("freeTalk1_1");}
  else if(!event["freeTalk2"].happen){event["freeTalk2"].happen=1;f_speech("freeTalk2_1");}
  else if(!event["freeTalk3"].happen){event["freeTalk3"].happen=1;f_speech("freeTalk3_1");}
  else{
   var random=Math.floor(Math.random()*3);
   switch(random){
    case 0:f_speech("freeTalk1_1");break;
    case 1:f_speech("freeTalk2_1");break;
    case 2:f_speech("freeTalk3_1");break;
   }
  }
 }
 else{
  var speechVariation=["freeTalk5_1","freeTalk7_1"];
  if(!event["freeTalk5"].happen){event["freeTalk5"].happen=1;f_speech("freeTalk5_1");}
  else if(!event["freeTalk7"].happen){event["freeTalk7"].happen=1;f_speech("freeTalk7_1");}
  else if(!event["freeTalk6"].happen&&!heros["lyrica"].usable){event["freeTalk6"].happen=1;f_speech("freeTalk6_1");}
  else if(!event["freeTalk4"].happen&&event["damage"].happen){event["freeTalk4"].happen=1;f_speech("freeTalk4_1");}
  
  else if(!event["freeTalk8"].happen&&heros["lyrica"].usable){event["freeTalk8"].happen=1;f_speech("freeTalk8_1");}
  else if(!event["freeTalk9"].happen&&heros["amairo"].usable){event["freeTalk9"].happen=1;f_speech("freeTalk9_1");}
  else if(!event["freeTalk10"].happen&&heros["lyrica"].usable&&heros["amairo"].usable){event["freeTalk10"].happen=1;f_speech("freeTalk10_1");}
  else if(!event["freeTalk11"].happen&&heros["amairo"].usable){event["freeTalk11"].happen=1;f_speech("freeTalk11_1");}
  else if(!event["freeTalk12"].happen&&heros["lyrica"].usable){event["freeTalk12"].happen=1;f_speech("freeTalk12_1");}
  else if(!event["freeTalk13"].happen&&heros["alice"].usable){event["freeTalk13"].happen=1;f_speech("freeTalk13_1");}
  else if(!event["freeTalk14"].happen&&heros["alice"].usable){event["freeTalk14"].happen=1;f_speech("freeTalk14_1");}
  else if(!event["freeTalk15"].happen&&heros["alice"].usable&&heros["lyrica"].usable){event["freeTalk15"].happen=1;f_speech("freeTalk15_1");}
  else if(!event["freeTalk16"].happen&&heros["alice"].usable&&heros["amairo"].usable){event["freeTalk16"].happen=1;f_speech("freeTalk16_1");}
  else if(!event["freeTalk17"].happen&&heros["pierre"].usable){event["freeTalk17"].happen=1;f_speech("freeTalk17_1");}
  else if(!event["freeTalk18"].happen&&heros["pierre"].usable&&event["hamsterClear"].happen){event["freeTalk18"].happen=1;f_speech("freeTalk18_1");}
  else if(!event["freeTalk19"].happen&&heros["pierre"].usable){event["freeTalk19"].happen=1;f_speech("freeTalk19_1");}
  else if(!event["freeTalk20"].happen&&heros["pierre"].usable&&event["hamsterClear"].happen){event["freeTalk20"].happen=1;f_speech("freeTalk20_1");}
  else if(!event["freeTalk21"].happen&&heros["pierre"].usable){event["freeTalk21"].happen=1;f_speech("freeTalk21_1");}
  else if(!event["freeTalk22"].happen&&heros["thirteen"].usable){event["freeTalk22"].happen=1;f_speech("freeTalk22_1");}
  else if(!event["freeTalk23"].happen&&heros["thirteen"].usable){event["freeTalk23"].happen=1;f_speech("freeTalk23_1");}
  else if(!event["freeTalk24"].happen&&heros["thirteen"].usable&&heros["coclico"].usable){event["freeTalk24"].happen=1;f_speech("freeTalk24_1");}
  else if(!event["freeTalk25"].happen&&heros["thirteen"].usable){event["freeTalk25"].happen=1;f_speech("freeTalk25_1");}
  else if(!event["freeTalk26"].happen&&heros["thirteen"].usable){event["freeTalk26"].happen=1;f_speech("freeTalk26_1");}
  else if(!event["freeTalk27"].happen&&heros["thirteen"].usable){event["freeTalk27"].happen=1;f_speech("freeTalk27_1");}
  else if(!event["freeTalk28"].happen&&heros["coclico"].usable){event["freeTalk28"].happen=1;f_speech("freeTalk28_1");}
  else if(!event["freeTalk29"].happen&&heros["coclico"].usable){event["freeTalk29"].happen=1;f_speech("freeTalk29_1");}
  else if(!event["freeTalk30"].happen&&heros["coclico"].usable){event["freeTalk30"].happen=1;f_speech("freeTalk30_1");}
  else if(!event["freeTalk31"].happen&&heros["coclico"].usable){event["freeTalk31"].happen=1;f_speech("freeTalk31_1");}
  else if(!event["freeTalk32"].happen&&heros["coclico"].usable){event["freeTalk32"].happen=1;f_speech("freeTalk32_1");}
  else if(!event["freeTalk33"].happen&&heros["coclico"].usable){event["freeTalk33"].happen=1;f_speech("freeTalk33_1");}
  else if(!event["freeTalk34"].happen&&heros["coclico"].usable){event["freeTalk34"].happen=1;f_speech("freeTalk34_1");}
  else{
   if(event["damage"].happen){speechVariation.push("freeTalk4_1");}
   if(!heros["lyrica"].usable){speechVariation.push("freeTalk6_1");}
   if(heros["lyrica"].usable){speechVariation.push("freeTalk8_1");}
   if(heros["amairo"].usable){speechVariation.push("freeTalk9_1");}
   if(heros["lyrica"].usable&&heros["amairo"].usable){speechVariation.push("freeTalk10_1");}
   if(heros["amairo"].usable){speechVariation.push("freeTalk11_1");}
   if(heros["lyrica"].usable){speechVariation.push("freeTalk12_1");}
   if(heros["alice"].usable){speechVariation.push("freeTalk13_1");}
   if(heros["alice"].usable){speechVariation.push("freeTalk14_1");}
   if(heros["alice"].usable&&heros["lyrica"].usable){speechVariation.push("freeTalk15_1");}
   if(heros["alice"].usable&&heros["amairo"].usable){speechVariation.push("freeTalk16_1");}
   if(heros["pierre"].usable){speechVariation.push("freeTalk17_1");}
   if(heros["pierre"].usable&&event["hamsterClear"].happen){speechVariation.push("freeTalk18_1");}
   if(heros["pierre"].usable){speechVariation.push("freeTalk19_1");}
   if(heros["pierre"].usable&&event["hamsterClear"].happen){speechVariation.push("freeTalk20_1");}
   if(heros["pierre"].usable){speechVariation.push("freeTalk21_1");}
   if(heros["thirteen"].usable){speechVariation.push("freeTalk22_1");}
   if(heros["thirteen"].usable){speechVariation.push("freeTalk23_1");}
   if(heros["thirteen"].usable&&heros["coclico"].usable){speechVariation.push("freeTalk24_1");}
   if(heros["thirteen"].usable){speechVariation.push("freeTalk25_1");}
   if(heros["thirteen"].usable){speechVariation.push("freeTalk26_1");}
   if(heros["thirteen"].usable){speechVariation.push("freeTalk27_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk28_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk29_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk30_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk31_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk32_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk33_1");}
   if(heros["coclico"].usable){speechVariation.push("freeTalk34_1");}
   var random=Math.floor(Math.random()*speechVariation.length);
   f_speech(speechVariation[random]);
  }
 }
}

function f_dataBaseList(){
 selectSE.play();
 phase=4;
 var myh = document.getElementById("checkScreen");
 myh.innerHTML="<div id=dataBaseListReturn onclick=f_checkPoint(); class=buttonA style=position:absolute;top:2%;left:2%;height:15%;width:25%;><div class=buttonB>Spaceキーで<br>メニューに戻る</div></div><div style=position:absolute;top:4%;left:30%;height:92%;width:65%;backGround:var(--homeColor);><div id=dataBaseListBase style=position:absolute;top:2%;left:4%;height:96%;width:92%;overflow:auto;></div></div>";
 f_opacityButton("dataBaseListReturn");
 for(var elem in dataBaseList){
  if(dataBaseList[elem].get){var myh=document.createElement('div');
   myh.setAttribute('id',"dataBase"+dataBaseList[elem].detail);
   myh.setAttribute('class',"buttonA");
   myh.setAttribute('onclick',"f_speech('"+dataBaseList[elem].detail+"')");
   myh.setAttribute('style',"position:relative;width:90%;height:10%;margin-top:2%;margin-bottom:2%;");
   var parentDiv = document.getElementById("dataBaseListBase");
   parentDiv.appendChild(myh);
   //var imgFile="error";
   //if(elem=="マルコス’55"||elem=="二コラ　テスラ"||elem=="リリカ"||elem=="青春アリス"||elem=="狐ヶ咲甘色"||elem=="ピエール77世"||elem=="13†サーティーン†"||elem=="コクリコット　ブランシュ"){imgFile="";}
   var myh = document.getElementById("dataBase"+dataBaseList[elem].detail);
   myh.innerHTML="<div class=buttonB><img src=item/stage/"+dataBaseList[elem].img+".png style=height:100%;>"+elem+"</div>";
   f_opacityButton("dataBase"+dataBaseList[elem].detail);
  }
 }
}

function f_option(number){
 selectSE.play();
 if(number==4){
  phase=4;
 }
 else{
  phase=5;
 }
 var levelSentence="error";
 switch(level){
  case 0.1:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:0%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>接待プレイ</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:35%;>";
  break;
  case 0.5:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:35%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>かんたん</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:35%;>";
  break;
  case 1:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:35%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>普通</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:35%;>";
  break;
  case 1.5:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:35%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>難しい</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:0%;>";
  break;
 }
 var myh = document.getElementById("checkScreen");
 if(number==4){
  myh.innerHTML="<div id=dataBaseListReturn onclick=f_checkPoint(); id=dataBaseListReturn class=buttonA style=position:absolute;top:2%;left:2%;height:15%;width:25%;><div class=buttonB>Spaceキーで<br>メニューに戻る</div></div><div style=position:absolute;top:23%;left:5%;height:40%;width:40%;backGround:var(--homeColor);color:#ffffff;font-size:var(--speechFont4);>　操作方法<br>　・←キー、→キー：移動<br>　・Sキー：ジャンプ<br>　・Aキー：攻撃<br>　・Enterキー：確認<br>　・Spaceキー：メニュー</div><div id=setting class=buttonA onclick=f_setting(); style=position:absolute;top:75%;left:5%;height:15%;width:40%;text-align:center;><div class=buttonB><font style=font-size:var(--speechFont5);>設定</font></div></div><div style=position:absolute;top:5%;left:50%;height:50%;width:48%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont3);><font style=font-size:var(--speechFont5);>フィードバック</font><br>「眠り姫たちは夢の中」をプレイしていただき<br>誠にありがとうございます<br><br>本ゲームをプレイしていただいた感想や<br>ご意見を是非お聞かせください<br><br><a href='https://twitter.com/Meer69774257'>製作者X(旧Twitter)</a><br><a href='https://peing.net/ja/meer__'>匿名希望の場合はこちらから</a></div><div style=position:absolute;top:58%;left:50%;height:39%;width:48%;backGround:var(--homeColor);color:#ffffff;font-size:var(--speechFont3);>　原作:#コンパス戦闘摂理解析システム様<br>　　　 #コンパス ライブアリーナ様<br>　BGM :<a href='https://twitter.com/mikannonegoto' style=color#000000>みかんのねごと様</a><br>　効果音 :<a href='https://taira-komori.jpn.org/index.html' style=color#000000>無料効果音で遊ぼう！様</a><br>　テストプレイヤー :<a href='https://x.com/QuleruRestart' style=color#000000>くろすん/踊掛踊遊</a><br>　その他制作:Meer--</div>";
 }
 else{
  myh.innerHTML="<div id=dataBaseListReturn onclick=f_menue(); id=dataBaseListReturn class=buttonA style=position:absolute;top:2%;left:2%;height:15%;width:25%;><div class=buttonB>Spaceキーで<br>メニューに戻る</div></div><div style=position:absolute;top:23%;left:5%;height:40%;width:40%;backGround:var(--homeColor);color:#ffffff;font-size:var(--speechFont4);>　操作方法<br>　・←キー、→キー：移動<br>　・Sキー：ジャンプ<br>　・Aキー：攻撃<br>　・Enterキー：確認<br>　・Spaceキー：メニュー</div><div id=setting class=buttonA onclick=f_setting(); style=position:absolute;top:75%;left:5%;height:15%;width:40%;text-align:center;><div class=buttonB><font style=font-size:var(--speechFont5);>設定</font></div></div><div style=position:absolute;top:5%;left:50%;height:50%;width:48%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont3);><font style=font-size:var(--speechFont5);>フィードバック</font><br>「眠り姫たちは夢の中」をプレイしていただき<br>誠にありがとうございます<br><br>本ゲームをプレイしていただいた感想や<br>ご意見を是非お聞かせください<br><br><a href='https://twitter.com/Meer69774257'>製作者X(旧Twitter)</a><br><a href='https://peing.net/ja/meer__'>匿名希望の場合はこちらから</a></div><div style=position:absolute;top:58%;left:50%;height:39%;width:48%;backGround:var(--homeColor);color:#ffffff;font-size:var(--speechFont3);>　原作:#コンパス戦闘摂理解析システム様<br>　　　 #コンパス ライブアリーナ様<br>　BGM :<a href='https://twitter.com/mikannonegoto' style=color#000000>みかんのねごと様</a><br>　効果音 :<a href='https://taira-komori.jpn.org/index.html' style=color#000000>無料効果音で遊ぼう！様</a><br>　テストプレイヤー :<a href='https://x.com/QuleruRestart' style=color#000000>くろすん/踊掛踊遊</a><br>　その他制作:Meer--</div>";
 }
 f_opacityButton("dataBaseListReturn");
 f_opacityButton("setting");
}

function f_setting(){
 selectSE.play();
 easyHelp1.style.opacity=0;
 easyHelp2.style.opacity=0;
 easyHelp3.style.opacity=0;
 easyHelp4.style.opacity=0;
 easyHelp.style.opacity=0;
 if(phase==4){phase=6;}
 else if(phase==5){phase=7;}
 var levelSentence="error";
 switch(level){
  case 0.1:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:0%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>接待プレイ</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:35%;>";
  break;
  case 0.5:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:35%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>かんたん</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:35%;>";
  break;
  case 1:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:35%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>普通</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:35%;>";
  break;
  case 1.5:
   levelSentence="<img onclick=f_levelChange(-1); id=levelDown src=item/etc/cursor.png style=position:absolute;bottom:5%;left:5%;height:35%;transform:scale(-1,1);><font style=position:absolute;bottom:5%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>難しい</font><img onclick=f_levelChange(1); id=levelUp src=item/etc/cursor.png style=position:absolute;bottom:5%;right:5%;height:0%;>";
  break;
 }
 var fontH=35;
 var buttonH=35;
 if(buttonSize<=1){buttonSize=1;buttonH=0;}
 if(fontSize<=1){fontSize=1;fontH=0;}
 if(pcOrPhone=='phone'){var pcOrPhoneName='スマホ・タブレット';}else{var pcOrPhoneName='PC';}
 var windowH = window.innerHeight*0.95;
 windowW=windowH*1.817;
 var windowL = String((window.innerWidth-windowW)/2)+"px";
 windowLN=(window.innerWidth-windowW)/2;
 document.documentElement.style.setProperty('--controllerButton1', Number(windowLN)*buttonSize+"px");
 document.documentElement.style.setProperty('--controllerButton4', Number(windowLN)/2*buttonSize+"px");
 document.documentElement.style.setProperty('--controllerButton4L', -1*windowLN+"px");
 document.documentElement.style.setProperty('--controllerButton5L', -1*Number(windowLN)/2*(2-buttonSize)+"px");
 document.documentElement.style.setProperty('--buttonPosi', windowW-(Number(windowLN)*(buttonSize-1))+"px");
 document.documentElement.style.setProperty('--helpSide', Number(windowLN)*(buttonSize-1)+windowW*0.02+"px");
 var fontSizeSentence  ="<div style=position:absolute;top:45%;left:5%;height:20%;width:40%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont2);><font style=font-size:var(--speechFont5);>文字サイズ</font><img onclick=fontSize-=0.1;f_setting();                 id=fontSizeDown   src=item/etc/cursor.png style=position:absolute;bottom:10%;left:5%;height:"+fontH+"%;transform:scale(-1,1);><font style=position:absolute;bottom:10%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>"+Math.round(fontSize*10)/10+"</font><img   onclick=fontSize+=0.1;f_setting();   id=fontSizeUp   src=item/etc/cursor.png style=position:absolute;bottom:10%;right:5%;height:35%;></div>";
 var buttonSizeSentence="<div style=position:absolute;top:55%;right:5%;height:20%;width:40%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont2);><font style=font-size:var(--speechFont5);>画面左右のボタンサイズ</font><img onclick=buttonSize-=0.5;f_setting(); id=buttonSizeDown src=item/etc/cursor.png style=position:absolute;bottom:10%;left:5%;height:"+buttonH+"%;transform:scale(-1,1);><font style=position:absolute;bottom:10%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>"+Math.round(buttonSize*10)/10+"</font><img onclick=buttonSize+=0.5;f_setting(); id=buttonSizeUp src=item/etc/cursor.png style=position:absolute;bottom:10%;right:5%;height:35%;></div>";
 var helpAppSentence="<div style=position:absolute;top:30%;right:5%;height:20%;width:40%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont2);><font style=font-size:var(--speechFont5);>操作ヘルプの表示</font><font id=helpAppButton onclick=if(helpApp=='ON'){helpApp='OFF';}else{helpApp='ON';}f_setting(); style=position:absolute;bottom:10%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);border-radius:10%;>"+helpApp+"</font></div>";
 var pcOrPhoneSentence="<div style=position:absolute;top:5%;right:5%;height:20%;width:40%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont2);><font style=font-size:var(--speechFont5);>使用端末</font><font id=pcOrPhoneButton onclick=if(pcOrPhone=='phone'){pcOrPhone='pc';}else{pcOrPhone='phone';}f_setting(); style=position:absolute;bottom:10%;left:10%;width:80%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);border-radius:10%;>"+pcOrPhoneName+"</font></div>";
 var homeColorSentence="<div id=homeColorTitle onclick=homeColorSet(); style=position:absolute;top:32%;left:7.5%;width:35%;height:10%;><div class=buttonA><div class=buttonB>ホームカラーに反映</div></div></div><input type=color name=home_color id=colorSelect value=#979797 style=position:absolute;top:20%;left:15%;width:20%;height:10%;>";
 var dataResetSentence="<div id=dataResetButton onclick=f_popUpYesNo('null','データの進行状況をすべて破棄して最初からやり直します。よろしいですか？','f_restartCalarm();'); style=position:absolute;top:80%;left:60%;width:35%;height:10%;><div class=buttonA><div class=buttonB>データを消去</div></div></div>"
 document.documentElement.style.setProperty('--speechFont2'  , windowH*0.01*fontSize*0.5+"px");
 document.documentElement.style.setProperty('--speechFont3'  , windowH*0.01*fontSize*0.6+"px");
 document.documentElement.style.setProperty('--speechFont3_5', windowH*0.01*fontSize*0.7+"px");
 document.documentElement.style.setProperty('--speechFont4'  , windowH*0.01*fontSize*0.8+"px");
 document.documentElement.style.setProperty('--speechFont4_5', windowH*0.01*fontSize*0.9+"px");
 document.documentElement.style.setProperty('--speechFont5'  , windowH*0.01*fontSize*1.0+"px");
 document.documentElement.style.setProperty('--speechFont6'  , windowH*0.01*fontSize*1.2+"px");
 var myh = document.getElementById("checkScreen");
 myh.innerHTML="<div id=dataBaseListReturn onclick=f_option("+Number(phase-2)+"); id=dataBaseListReturn class=buttonA style=position:absolute;top:2%;left:2%;height:15%;width:25%;><div class=buttonB>Spaceキーで<br>オプションに戻る</div></div><div style=position:absolute;top:70%;left:5%;height:25%;width:40%;backGround:var(--homeColor);text-align:center;color:#ffffff;font-size:var(--speechFont2);><font style=font-size:var(--speechFont5);>難易度設定</font><br>パラメータが変化します"+levelSentence+"</div>"+fontSizeSentence+homeColorSentence+buttonSizeSentence+dataResetSentence+helpAppSentence+pcOrPhoneSentence;
 f_opacityButton("dataBaseListReturn");
 f_opacityButton("levelUp");
 if(level!=0.1){f_opacityButton("levelDown");}
 f_opacityButton("fontSizeUp");
 f_opacityButton("fontSizeDown");
 f_opacityButton("buttonSizeUp");
 f_opacityButton("buttonSizeDown");
 f_opacityButton("homeColorTitle");
 f_opacityButton("dataResetButton");
 f_opacityButton("helpAppButton");
 f_opacityButton("pcOrPhoneButton");
}

function homeColorSet(){
 selectSE.play();
 localStorage.setItem("localColor", document.getElementById("colorSelect").value);
 document.documentElement.style.setProperty('--homeColor', document.getElementById("colorSelect").value);
}

function f_levelChange(dire){
 selectSE.play();
 if(dire==2){level=0.1;}
 else{
  switch(level){
   case 0.1:
    if(dire==1){level=0.5;}
   break;
   case 0.5:
    if(dire==1){level=1;}
    else{f_popUpYesNo("null","これ以上難易度を下げるとほぼアクションゲームとしての側面を失いますが大丈夫ですか（ほぼ無敵になります）","f_levelChange(2);");}
   break;
   case 1:
    if(dire==1){level=1.5;}
    else{level=0.5;}
   break;
   case 1.5:
    if(dire==-1){level=1;}
   break;
  }
 }
 f_setting();
}

function f_map(number){
 selectSE.play();
 var myh = document.getElementById("checkScreen");
 if(number==4){
  phase=4;
  myh.innerHTML = "<div id=dataBaseListReturn onclick=f_checkPoint(); id=dataBaseListReturn class=buttonA style=position:absolute;top:2%;left:2%;height:15%;width:25%;><div class=buttonB>Spaceキーで<br>メニューに戻る</div></div>";
 }
 else{
  phase=5;
  myh.innerHTML = "<div id=dataBaseListReturn onclick=f_menue(); id=dataBaseListReturn class=buttonA style=position:absolute;top:2%;left:2%;height:15%;width:25%;><div class=buttonB>Spaceキーで<br>メニューに戻る</div></div>";
 }
 var sentenceArray=["error","error","error","error","error","error","error","error","error","error","error","error"];
 var rateArray=[0,0,0,0,0,0,0,0,0,0,0,0];
 
 if(blocks["sweetH"].name=="0"){rateArray[0]++;}
 if(blocks["sweetI"].name=="0"){rateArray[0]++;}
 if(blocks["sweetJ"].name=="0"){rateArray[0]++;}
 if(blocks["dreamRockB"].name=="0"){rateArray[0]++;}
 if(blocks["pierre"].name=="0"){rateArray[0]++;}
 rateArray[0]=Math.floor(rateArray[0]/5*100);
 
 if(blocks["partF"].name=="0"){rateArray[1]++;}
 if(blocks["itemD"].name=="0"){rateArray[1]++;}
 if(blocks["sweetK"].name=="0"){rateArray[1]++;}
 if(blocks["amairo"].name=="0"){rateArray[1]++;}
 rateArray[1]=Math.floor(rateArray[1]/4*100);
 
 if(event["marionette"].happen==1){rateArray[2]++;}
 if(blocks["itemF"].name=="0"){rateArray[2]++;}
 rateArray[2]=Math.floor(rateArray[2]/2*100);
 
 if(blocks["itemB"].name=="0"){rateArray[4]++;}
 if(blocks["sweetC"].name=="0"){rateArray[4]++;}
 if(blocks["nikola"].name=="0"){rateArray[4]++;}
 if(blocks["partB"].name=="0"){rateArray[4]++;}
 rateArray[4]=Math.floor(rateArray[4]/4*100);
 
 if(blocks["lyrica"].name=="0"){rateArray[5]++;}
 if(blocks["sweetD"].name=="0"){rateArray[5]++;}
 if(blocks["sweetE"].name=="0"){rateArray[5]++;}
 if(blocks["partC"].name=="0"){rateArray[5]++;}
 if(blocks["partD"].name=="0"){rateArray[5]++;}
 if(blocks["sweetF"].name=="0"){rateArray[5]++;}
 rateArray[5]=Math.floor(rateArray[5]/6*100);
 
 if(blocks["sweetL"].name=="0"){rateArray[6]++;}
 if(blocks["partG"].name=="0"){rateArray[6]++;}
 if(blocks["thirteen"].name=="0"){rateArray[6]++;}
 if(blocks["partH"].name=="0"){rateArray[6]++;}
 rateArray[6]=Math.floor(rateArray[6]/4*100);
 
 if(blocks["sweetM"].name=="0"){rateArray[7]++;}
 if(blocks["itemE"].name=="0"){rateArray[7]++;}
 if(blocks["dreamRockC"].name=="0"){rateArray[7]++;}
 if(blocks["coclico"].name=="0"){rateArray[7]++;}
 rateArray[7]=Math.floor(rateArray[7]/4*100);
 
 if(blocks["sweetA"].name=="0"){rateArray[8]++;}
 if(blocks["itemA"].name=="0"){rateArray[8]++;}
 if(blocks["partA"].name=="0"){rateArray[8]++;}
 if(blocks["sweetB"].name=="0"){rateArray[8]++;}
 rateArray[8]=Math.floor(rateArray[8]/4*100);
 
 if(blocks["dreamRockA"].name=="0"){rateArray[9]++;}
 if(blocks["partE"].name=="0"){rateArray[9]++;}
 if(blocks["alice"].name=="0"){rateArray[9]++;}
 if(blocks["sweetG"].name=="0"){rateArray[9]++;}
 rateArray[9]=Math.floor(rateArray[9]/4*100);
 
 if(event["skeleton"].happen==1){rateArray[10]++;}
 if(blocks["itemG"].name=="0"){rateArray[10]++;}
 rateArray[10]=Math.floor(rateArray[10]/2*100);
 
 if(event["princess"].happen==1){rateArray[11]++;}
 if(blocks["itemH"].name=="0"){rateArray[11]++;}
 rateArray[11]=Math.floor(rateArray[11]/2*100);
 
 for(var elem in sentenceArray){
  elemN=Number(elem)+1;
  elemName="stage"+String(elemN);
  var nowPosition=" ";
  if(selectStage=="coclicoDream"+elemN||selectStage=="coclicoDream"+elemN+"Boss"){
   nowPosition="<div style=position:absolute;bottom:10%;left:30%;width:40%;font-size:var(--speechFont3);backGround:#ffffff;text-align:center;color:var(--homeColor);>現在地</div>"
  }
  if(event[elemName].happen){
   if(heros["coclico"].usable){
    sentenceArray[elem]="<div style=position:absolute;top:"+(  (Math.floor(elemN/4.1)*20)+25  )+"%;left:"+  (elem%4*15+20)  +"%;height:20%;width:15%;backGround:#ffffff;text-align:center;font-size:var(--speechFont4);color:#000000;><div style=position:absolute;top:2%;left:2%;height:96%;width:96%;backGround:var(--homeColor);>"+rateArray[elem]+"%</div>"+nowPosition+"</div>";
    
   }
   else{
    sentenceArray[elem]="<div style=position:absolute;top:"+(  (Math.floor(elemN/4.1)*20)+25  )+"%;left:"+  (elem%4*15+20)  +"%;height:20%;width:15%;backGround:#ffffff;><div style=position:absolute;top:2%;left:2%;height:96%;width:96%;backGround:var(--homeColor); id=clearRate"+elem+"></div>"+nowPosition+"</div>";
   }
  }
  else{
   sentenceArray[elem]="<div style=position:absolute;top:"+(  (Math.floor(elemN/4.1)*20)+25  )+"%;left:"+  (elem%4*15+20)  +"%;height:20%;width:15%;backGround:#ffffff;><div style=position:absolute;top:2%;left:2%;height:96%;width:96%;backGround:#000000; id=clearRate"+elem+"></div>"+nowPosition+"</div>";
  }
  var myh=document.createElement('div');
  myh.setAttribute('id',"map"+elemN);
  var parentDiv = document.getElementById("checkScreen");
  parentDiv.appendChild(myh);
  var myh = document.getElementById("map"+elemN);
  myh.innerHTML = sentenceArray[elem];
 }
 f_opacityButton("dataBaseListReturn");
}

function f_arrayMake(array){
 var returnArray=[];
 for(var numY=0;array.length>numY;numY++){
  returnArray.push([]);
  for(var numX=0;array[numY].length>numX;numX++){
   returnArray[numY].push(array[numY][numX]);
  }
 }
 return returnArray;
}

window.addEventListener('load', (event) => {
 
 heroPosi=[8,5];//[y,x]...[8,5]
 restPosi=[8,5,"coclicoDream9"];console.log(heroPosi);
 selectEquipment="なし";
 selectHero="marcos";
 selectBack=f_arrayMake(coclicoDream9Back);
 selectGimmick=f_arrayMake(coclicoDream9Gimmick);
 selectHit=f_arrayMake(coclicoDream9Hit);
 selectFront=f_arrayMake(coclicoDream9Front);
 selectStage="coclicoDream9";
 f_stageReset();
 phase=1;
 level=1;
 fontSize=5;
 buttonSize=1;
 pcOrPhone="PC";
 helpApp="ON";
 partNum=0;
 fallSideCheck=0;
 f_stageChangeCheck=1;
 heroWalk=0;
 heroWalk_span=0;
 direction=1;
 easyHelpNum=0;
 heroAction=0;//1:walk
 damageSpan1_1=0;
 damageSpan2_1=0;
 heroAttack1=0;
 stageBaseLeft=0;//stageBaseLeft=-70.5+12.5*heroPosi[1]
 stageBaseTop=-25;//stageBaseTop=57.5-(12.5*heroPosi[0])
 playerHP_1=100;
 MaxHP=100;
 playerSkill_1=0;
 getItem="error";
 lastBossEnemy=51;
 bossAct=0;
 skipTime=1;
 enterKeySentence="end";
 enterCheck=0;
 
 heroActW=0;
 heroActJ=0;
 heroActF=0;
 heroActControl=0;
 playerActControl=0;
 fallOK=1;
 heroMoveSide=0;
 heroAttackSpan=0;
 heroAttackCheck=0;//コンボが続くかどうかの判定に使用
 battleSkill=0;
 timeStop=0;
 touchMove=0;
 logCount=0;
 lastBossCheck=0;
 f_opacityButton("toNextTalk");
 
 BGM1 = new Audio('sound/描きおろし/通常戦闘 .mp3');
 BGM1.play();
 BGM1.volume=0;
 BGM1.addEventListener("ended", function () {
  BGM1.currentTime = 0;
  BGM1.play();
 }, false);
 BGM2 = new Audio('sound/描きおろし/休息 .mp3');
 BGM2.play();
 BGM2.volume=0;
 BGM2.addEventListener("ended", function () {
  BGM2.currentTime = 0;
  BGM2.play();
 }, false);
 BGM3 = new Audio('sound/描きおろし/ボス .mp3');
 BGM3.play();
 BGM3.volume=0;
 BGM3.addEventListener("ended", function () {
  BGM3.currentTime = 0;
  BGM3.play();
 }, false);
 BGM4 = new Audio('sound/描きおろし/ボス2 .mp3');
 BGM4.play();
 BGM4.volume=0;
 BGM4.addEventListener("ended", function () {
  BGM4.currentTime = 0;
  BGM4.play();
 }, false);
 BGM5 = new Audio('sound/描きおろし/ボス3 .mp3');
 BGM5.play();
 BGM5.volume=0;
 BGM5.addEventListener("ended", function () {
  BGM5.currentTime = 0;
  BGM5.play();
 }, false);
 
 
 phase=0;
 heroActControl=1;
 fallOK=0;
 timeStop=1;
 sumartphone();
 f_screenSet();
 
 makeStage(selectBack,selectGimmick,selectHit,selectFront,selectStage);
 
 /*if(heros["marcos"].usable==0){
  enterKeySentence="end";
  f_speech("marcosTutorial1");
 }*/
 document.documentElement.style.setProperty('--speechObstruction', "0%");
 document.documentElement.style.setProperty('--speechBase', "0vh");
 var windowH = window.innerHeight*0.95;
 var windowWc = window.innerwidth;
 windowW=windowH*1.817;
 if(windowWc<windowW){f_popUpN("null","画面の横幅が足りません<br>PCであればウィンドウ幅を伸ばしてください。<br>スマホは横持ちにしてください。");}
 
 
 if(localStorage.getItem('restPosi1Local')==5){console.log("初期状態");
  f_firstCheck(0);
 }//     保存
 else{console.log("ロードあり");localLoad();}
 
});

function f_firstCheck(number){
 if(number==0){
  
  blackoutScreen.style.opacity=1;
  document.documentElement.style.setProperty('--blackout', "100%");
  document.documentElement.style.setProperty('--checkScreen', "100%");
  var myh = document.getElementById("checkScreen");
  myh.innerHTML = "<div style=position:absolute;top:20%;left:20%;height:60%;width:60%;text-align:center;color:#ffffff;backGround:var(--homeColor);border-radius:10%;font-size:var(--speechFont5);><br>ご使用の端末を教えてください<div id=pcButton onclick=selectSE.play();pcOrPhone='PC';f_firstCheck(1); style=position:absolute;top:60%;left:10%;height:30%;width:30%; class=buttonA><div class=buttonB>PC</div></div><div id=phoneButton onclick=selectSE.play();pcOrPhone='phone';f_firstCheck(1); style=position:absolute;top:60%;left:60%;height:30%;width:30%; class=buttonA><div class=buttonB>スマホ<br>タブレット</div></div></div>";
  f_opacityButton("pcButton");
  f_opacityButton("phoneButton");
 }
 else if(number==1){
 
 if(pcOrPhone=="phone"){heroTalk["marcosTutorial3"].nextTalk="marcosPhone4_1";}
 var sentence="---これが調整用サンプル文です。見切れないようにしてね";
  var windowH = window.innerHeight*0.95;
  windowW=windowH*1.817;
  var windowL = String((window.innerWidth-windowW)/2)+"px";
  windowLN=(window.innerWidth-windowW)/2;
  var fontH=35;
  if(fontSize<=1){fontSize=1;fontH=0;}
  document.documentElement.style.setProperty('--blackout', "100%");
  document.documentElement.style.setProperty('--checkScreen', "100%");
  var speechSentence="<div style=position:absolute;top:55%;left:0%;height:20vh;width:100%;backGround:#000000;><div style=position:absolute;height:100%;width:100%;><font style=position:absolute;top:5%;left:25%;color:#ffffff;font-size:var(--speechFont5);> </font><font style=position:absolute;top:30%;left:25%;color:#ffffff;font-size:var(--speechFont4);>"+sentence+"</font><font style=position:absolute;top:60%;left:25%;color:#ffffff;font-size:var(--speechFont4);> </font></div></div>";
  var touchDummy="<div id=speechTouch style=position:absolute;top:55%;right:0%;height:30vh;width:20%;><div style=position:absolute;top:5%;right:5%;width:60%;height:60%;backGround:#ffffff;border-radius:10%;><div id=toNextTalk style=position:absolute;top:5%;left:5%;height:90%;width:90%;backGround:var(--homeColor);border-radius:10%;></div></div></div>";
  var fontSizeSentence  ="<div style=position:absolute;top:30%;left:30%;height:20%;width:40%;backGround:#ffffff;text-align:center;color:#ffffff;font-size:var(--speechFont2);><div style=position:absolute;top:2%;left:2%;height:96%;width:96%;backGround:var(--homeColor);><font style=font-size:var(--speechFont5);>文字サイズ</font><img onclick=selectSE.play();fontSize-=0.1;f_firstCheck(1); id=fontSizeDown   src=item/etc/cursor.png style=position:absolute;bottom:10%;left:5%;height:"+fontH+"%;transform:scale(-1,1);><font style=position:absolute;bottom:10%;left:30%;width:40%;height:35%;text-align:center;font-size:var(--speechFont5);backGround:#ffffff;color:var(--homeColor);>"+Math.round(fontSize*10)/10+"</font><img onclick=selectSE.play();fontSize+=0.1;f_firstCheck(1);   id=fontSizeUp   src=item/etc/cursor.png style=position:absolute;bottom:10%;right:5%;height:35%;></div></div>";
  var myh = document.getElementById("checkScreen");
  myh.innerHTML = "<div style=position:absolute;top:5%;left:5%;height:90%;width:90%;text-align:center;color:#ffffff;backGround:var(--homeColor);border-radius:10%;font-size:var(--speechFont5);><br>調整用サンプル文が見切れないように文字サイズを調整してください<br>※後からメニューオプション→設定で再調整可能<div id=pcButton onclick=selectSE.play();f_firstCheck(2); style=position:absolute;top:85%;left:20%;height:10%;width:60%; class=buttonA><div class=buttonB>完了</div></div></div>"+fontSizeSentence+speechSentence+touchDummy;
  document.documentElement.style.setProperty('--speechFont2'  , windowH*0.01*fontSize*0.5+"px");
  document.documentElement.style.setProperty('--speechFont3'  , windowH*0.01*fontSize*0.6+"px");
  document.documentElement.style.setProperty('--speechFont3_5', windowH*0.01*fontSize*0.7+"px");
  document.documentElement.style.setProperty('--speechFont4'  , windowH*0.01*fontSize*0.8+"px");
  document.documentElement.style.setProperty('--speechFont4_5', windowH*0.01*fontSize*0.9+"px");
  document.documentElement.style.setProperty('--speechFont5'  , windowH*0.01*fontSize*1.0+"px");
  document.documentElement.style.setProperty('--speechFont6'  , windowH*0.01*fontSize*1.2+"px");
  f_opacityButton("fontSizeDown");
  f_opacityButton("fontSizeUp");
  f_opacityButton("pcButton");
 }
 if(number==2){
  
  blackoutScreen.style.opacity=1;
  document.documentElement.style.setProperty('--blackout', "100%");
  document.documentElement.style.setProperty('--checkScreen', "100%");
  var myh = document.getElementById("checkScreen");
  myh.innerHTML = "<div style=position:absolute;top:20%;left:5%;height:60%;width:90%;text-align:center;color:#ffffff;backGround:var(--homeColor);border-radius:10%;font-size:var(--speechFont5);><br>難易度を選んでください<br>※後からメニュー→オプション→設定で再設定可能<div id=veryEasyButton onclick=selectSE.play();f_popUpYesNo('null','この難易度はほぼアクションゲームとしての側面を失いますが大丈夫ですか（ほぼ無敵になります）','level=0.1;f_firstCheck(3);'); style=position:absolute;top:60%;left:5%;height:30%;width:20%; class=buttonA><div class=buttonB>接待<br>プレイ</div></div><div id=easyButton onclick=selectSE.play();level=0.5;f_firstCheck(3); style=position:absolute;top:60%;left:27.5%;height:30%;width:20%; class=buttonA><div class=buttonB>かんたん</div></div><div id=normalButton onclick=selectSE.play();level=1;f_firstCheck(3); style=position:absolute;top:60%;left:52.5%;height:30%;width:20%; class=buttonA><div class=buttonB>普通</div></div><div id=hardButton onclick=selectSE.play();level=1.5;f_firstCheck(3); style=position:absolute;top:60%;left:75%;height:30%;width:20%; class=buttonA><div class=buttonB>難しい</div></div></div>";
  f_opacityButton("veryEasyButton");
  f_opacityButton("easyButton");
  f_opacityButton("normalButton");
  f_opacityButton("hardButton");
 }
 if(number==3){
  
  blackoutScreen.style.opacity=1;
  document.documentElement.style.setProperty('--blackout', "100%");
  document.documentElement.style.setProperty('--checkScreen', "100%");
  var myh = document.getElementById("checkScreen");
  myh.innerHTML = " ";
  setTimeout(function(){blackoutScreen.style.opacity=0.6;BGM1.volume=0.2;},500);
  setTimeout(function(){blackoutScreen.style.opacity=0.3;BGM1.volume=0.4;},1000);
  setTimeout(function(){
   blackoutScreen.style.opacity=0;
   document.documentElement.style.setProperty('--blackout', "0%");
   document.documentElement.style.setProperty('--checkScreen', "0%");
   BGM1.volume=0.6;
  },1500);
  setTimeout(function(){
   enterKeySentence="end";
   f_speech("marcosTutorial1");
  },2500);
 }
}

function makeStage(backArray,gimmickArray,hitArray,frontArray,stageName){
 selectStage=stageName;
 selectBack=backArray;
 selectGimmick=gimmickArray;
 selectHit=hitArray;
 selectFront=frontArray;
 var myh = document.getElementById("stageBack");
 myh.innerHTML = " ";
 var myh = document.getElementById("stageGimmick");
 myh.innerHTML = " ";
 var myh = document.getElementById("stageHit");
 myh.innerHTML = " ";
 var myh = document.getElementById("stageFront");
 myh.innerHTML = " ";
 
 document.documentElement.style.setProperty('--stageBaseLeft', stageBaseLeft+"%");
 document.documentElement.style.setProperty('--stageBaseTop', stageBaseTop+"%");
 var myh=document.createElement('img');
 myh.setAttribute('id',"stageBaseBack");
 document.documentElement.style.setProperty('--stageBaseBackH', backArray.length*12.5+"%");
 document.documentElement.style.setProperty('--stageBaseBackW', backArray[0].length*6.9+"%");
 var parentDiv = document.getElementById("stageBack");
 parentDiv.appendChild(myh);
 
 enemyArray=[];
 
 for(var numY=0;backArray.length>numY;numY++){
  for(var numX=0;backArray[numY].length>numX;numX++){
   var length=1;
   var side=1;
   switch(backArray[numY][numX]){
    case "mirror":
     length=2;
     side=1;
    break;
    case "giraffe":
     length=2;
    break;
    case "rock_giraffe":
     length=2;
     side=1;
    break;
    case "backA":
     length=3;
     side=3;
    break;
    case "backB":
     length=3;
     side=3;
    break;
    case "backC":
     length=3;
     side=3;
    break;
    case "backD":
     length=3;
     side=3;
    break;
    case "backE":
     length=7;
     side=17;
    break;
    case "backF":
     length=7;
     side=17;
    break;
    case "backG":
     length=7;
     side=17;
    break;
    case "pierre_normal":
    length=3;
     side=3;
    break;
    default:
     length=1;
     side=1;
    break;
   }
   if(backArray[numY][numX]!="0"){
    var myh=document.createElement('div');
    myh.setAttribute('id',"selectBackX"+numX+"Y"+numY);
    var parentDiv = document.getElementById("stageBack");
    parentDiv.appendChild(myh);
    
    var myh = document.getElementById("selectBackX"+numX+"Y"+numY);
    myh.innerHTML = "<img src=item/stage/"+backArray[numY][numX]+".png style=width:100%;><style>#selectBackX"+numX+"Y"+numY+"{position:absolute;top:"+12.5*([numY]-length+1)+"%;left:"+6.9*([numX]-side+1)+"%;height:"+12.5*length+"%;width:"+6.9*side+"%;}</style>";
   }
  }
 }
 for(var numY=0;frontArray.length>numY;numY++){
  for(var numX=0;frontArray[numY].length>numX;numX++){
   var length=1;
   var side=1;
   switch(frontArray[numY][numX]){
    case "mirror":
     length=2;
     side=1;
    break;
    case "giraffe":
     length=2;
    break;
    case "rock_giraffe":
     length=2;
     side=1;
    break;
    case "backA":
     length=3;
     side=3;
    break;
    case "backB":
     length=3;
     side=3;
    break;
    case "backC":
     length=3;
     side=3;
    break;
    default:
     length=1;
     side=1;
    break;
   }
   if(frontArray[numY][numX]!="0"){
    var myh=document.createElement('div');
    myh.setAttribute('id',"selectFrontX"+numX+"Y"+numY);
    var parentDiv = document.getElementById("stageFront");
    parentDiv.appendChild(myh);
    
    var myh = document.getElementById("selectFrontX"+numX+"Y"+numY);
    myh.innerHTML = "<img src=item/stage/"+frontArray[numY][numX]+".png style=width:100%;><style>#selectFrontX"+numX+"Y"+numY+"{position:absolute;top:"+12.5*([numY]-length+1)+"%;left:"+6.9*([numX]-side+1)+"%;height:"+12.5*length+"%;width:"+6.9*side+"%;}</style>";
   }
  }
 }
 for(var numY=0;gimmickArray.length>numY;numY++){
  for(var numX=0;gimmickArray[numY].length>numX;numX++){
   var length=1;
   var side=1;
   if(heros["nikola"].usable==1&&blocks[gimmickArray[numY][numX]].name=="nikola"){gimmickArray[numY][numX]="0";}
   if(blocks[gimmickArray[numY][numX]].name=="hamster"){if(blocks[gimmickArray[numY][numX]].name=="hamster"){blocks[gimmickArray[numY][numX]].name="hamster";hitArray[numY][numX]=1;}else{blocks[gimmickArray[numY][numX]].name=0;hitArray[numY][numX]=0;}}
   if(blocks[gimmickArray[numY][numX]].name=="eventBlock"){hitArray[numY][numX]=1;}
   if(blocks[gimmickArray[numY][numX]].name=="door"){hitArray[numY][numX]=1;hitArray[numY-1][numX]=1;}
   if(gimmickArray[numY][numX]=="lastBossA"){
    enemyArray.push([]);
    enemyArray[enemyArray.length-1].push(numY);
    enemyArray[enemyArray.length-1].push(numX);
    enemyArray[enemyArray.length-1].push(enemies["lastBoss"].HP);
    enemyArray[enemyArray.length-1].push(0);
    enemyArray[enemyArray.length-1].push("lastBossA");
   }
   switch(blocks[gimmickArray[numY][numX]].name){
    case "mirror":
     length=2;
     side=1;
    break;
    case "door":
     length=2;
     side=1;
    break;
    case "giraffe":
     length=2;
    break;
    case "rock_giraffe":
     length=2;
     side=1;
    break;
    case "backA":
     length=3;
     side=3;
    break;
    case "backB":
     length=3;
     side=3;
    break;
    case "backC":
     length=3;
     side=3;
    break;
    case "marionetteD":
     length=6;
     side=2;
    break;
    case "skeletonA":
     length=2;
     side=2;
    break;
    case "rabit":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["rabit"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabit");//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...
    break;
    case "bear":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["bear"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("bear");
    break;
    case "sheep":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["sheep"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("sheep");
    break;
    case "devil":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["devil"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("devil");//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...
    break;
    case "omochi":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["omochi"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("omochi");//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...
    break;
    case "rabitEX":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["rabitEX"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabitEX");//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...
    break;
    case "bearEX":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["bearEX"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("bearEX");
    break;
    case "lastBossA":
     length=3;
     side=3;
     lastBossEnemy=51;
     document.documentElement.style.setProperty('--lastBossOpacity', "0");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["lastBoss"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("lastBoss");
    break;
    case "marionetteA":
     length=6;
     side=2;
     
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY-1);
     enemyArray[enemyArray.length-1].push(numX-1);
     enemyArray[enemyArray.length-1].push(enemies["marionette"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("marionetteA");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX-1);
     enemyArray[enemyArray.length-1].push(enemies["marionette"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("marionetteA");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX-1);
     enemyArray[enemyArray.length-1].push(enemies["marionette"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("marionetteA");
     
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["marionette"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("marionette");//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...
    break;
    case "skeletonC":
     length=2;
     side=2;
     
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY-1);
     enemyArray[enemyArray.length-1].push(numX-1);
     enemyArray[enemyArray.length-1].push(enemies["skeleton"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("skeletonA");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX-1);
     enemyArray[enemyArray.length-1].push(enemies["skeleton"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("skeletonA");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX-1);
     enemyArray[enemyArray.length-1].push(enemies["skeleton"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("skeletonA");
     
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["skeleton"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("skeleton");//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...
    break;
    case "princessC":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["princess"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("princess");
    break;
    case "niziiro":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["niziiro"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("niziiro");
    break;
    case "luruca":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["luruca"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("luruca");
    break;
    case "angel":
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(numY);
     enemyArray[enemyArray.length-1].push(numX);
     enemyArray[enemyArray.length-1].push(enemies["angel"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("angel");
    break;
    default:
     length=1;
     side=1;
    break;
   }
   if(gimmickArray[numY][numX]!="0"){
    if(blocks[gimmickArray[numY][numX]].name=="sweet"){
     if(heros["amairo"].usable){
      var myh=document.createElement('div');
      myh.setAttribute('id',"selectGimmickX"+numX+"Y"+numY);
      var parentDiv = document.getElementById("stageGimmick");
      parentDiv.appendChild(myh);
      
      var myh = document.getElementById("selectGimmickX"+numX+"Y"+numY);
      myh.innerHTML = "<img src=item/stage/"+blocks[gimmickArray[numY][numX]].name+".png style=width:100%;><style>#selectGimmickX"+numX+"Y"+numY+"{position:absolute;opacity:0.8;z-index:5;top:"+12.5*([numY]-length+1)+"%;left:"+6.9*([numX]-side+1)+"%;height:"+12.5*length+"%;width:"+6.9*side+"%;}</style>";
     }
    }
    else{
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+numX+"Y"+numY);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     
     var myh = document.getElementById("selectGimmickX"+numX+"Y"+numY);
     myh.innerHTML = "<img src=item/stage/"+blocks[gimmickArray[numY][numX]].name+".png style=width:100%;><style>#selectGimmickX"+numX+"Y"+numY+"{position:absolute;top:"+12.5*([numY]-length+1)+"%;left:"+6.9*([numX]-side+1)+"%;height:"+(12.5*length)+"%;width:"+(6.9*side)+"%;}</style>";
    }
   }
  }
 }
 f_heroMove();
}

function f_checkPoint(){
 BGM2.volume=0.6;
 f_BGM();
 restPosi=[heroPosi[0],heroPosi[1],selectStage];
 f_dataReflect();
 phase=2;
 var myh = document.getElementById("checkPoint");
 myh.innerHTML=" ";
 heroActControl=1;
 fallOK=0;
 blackoutScreen.style.opacity=0.8;
 document.documentElement.style.setProperty('--blackout', "100%");
 document.documentElement.style.setProperty('--checkScreen', "100%");
 var myh = document.getElementById("checkScreen");
 myh.innerHTML = "<div style=position:absolute;top:5%;left:5%;height:40%;width:40%;backGround:var(--homeColor);><font style=position:absolute;top:2%;width:100%;font-size:var(--speechFont3);color:#ffffff;text-align:center;>←キー、→キーでヒーロー切り替え<br>Cキーでコスチューム変更</font><img src=item/"+selectHero+"/"+heros[selectHero].costume+"/stand.png style=position:absolute;top:20%;left:35%;width:30%;><img id=heroSelectRight src=item/etc/cursor.png style=position:absolute;top:40%;right:5%;height:20%; onclick=heroChange(1);><img id=heroSelectLeft src=item/etc/cursor.png style=position:absolute;transform:scale(-1,1);top:40%;left:5%;height:20%; onclick=heroChange(-1);><div id=costumeButton onclick=f_costumeChange(); style=position:absolute;bottom:5%;left:20%;height:15%;width:60%;backGround:#ffffff;color:var(--homeColor);font-size:var(--speechFont3);text-align:center;border-radius:10%;>"+heros[selectHero].costume+"</div></div><div style=position:absolute;top:50%;left:5%;height:20%;width:40%;font-size:var(--speechFont4_5);color:#ffffff;backGround:var(--homeColor);>　装備<font style=font-size:var(--speechFont2);>（Aキーで切り替え）</font><div onclick=f_equipmentChange(); id=equipment style=position:absolute;top:5%;right:2%;height:40%;width:50%;backGround:#ffffff;color:var(--homeColor);text-align:center;font-size:var(--speechFont3);border-radius:10%;>なし</div><div id=equipmentExplain style=position:absolute;top:50%;left:5%;font-size:var(--speechFont3);></div></div><div style=position:absolute;top:75%;left:5%;height:10%;width:40%;backGround:var(--homeColor);font-size:var(--speechFont4_5);color:#ffffff;>　懐中時計のパーツ<font id=partRate style=position:absolute;right:5%;text-align:right;>n/n</font></div><div style=position:absolute;top:90%;left:5%;height:10%;width:40%;font-size:var(--speechFont4_5);color:#ffffff;text-align:center;>ーセーブしましたー</div><div style=position:absolute;top:5%;right:10%;height:20%;width:35%;backGround:var(--homeColor);font-size:var(--speechFont4_5);color:#ffffff;text-align:center;>ゲームクリア率<br><font id=clearRate style=font-size:var(--speechFont6);></font></div><div id=map onclick=f_map(4); style=position:absolute;top:30%;left:50%;height:15%;width:20%; class=buttonA><div class=buttonB>マップ<br><font style=font-size:var(--speechFont3);>(Mキー)</font></div></div><div id=freeTalk onclick=f_freeTalk(); style=position:absolute;top:30%;left:75%;height:15%;width:20%;font-size:var(--speechFont4_5);color:#ffffff;text-align:center; class=buttonA><div class=buttonB>雑談<br><font style=font-size:var(--speechFont3);>（Fキー）</font></div></div><div id=dataBase style=position:absolute;top:52%;left:50%;height:15%;width:20%;font-size:var(--speechFont4_5);color:#ffffff;text-align:center; onclick=f_dataBaseList(); class=buttonA><div class=buttonB>データベース<br><font style=font-size:var(--speechFont3);>（Dキー）</font></div></div><div id=option style=position:absolute;top:52%;left:75%;height:15%;width:20%;font-size:var(--speechFont4_5);color:#ffffff;text-align:center; onclick=f_option(4); class=buttonA><div class=buttonB>オプション<br><font style=font-size:var(--speechFont3);>（Oキー）</font></div></div><div id=returnAdventure style=position:absolute;top:75%;left:55%;height:20%;width:35%;font-size:var(--speechFont4_5);text-align:center;backGround:#ffffff; class=buttonA onclick=f_returnAdventure();><div class=buttonB>Spaceで<br>冒険に戻る</div></div>";
 var myh = document.getElementById("equipment");
 myh.innerHTML = selectEquipment;
 var myh = document.getElementById("equipmentExplain");
 switch(selectEquipment){
  case "なし":
   myh.innerHTML = "効果なし";
   MaxHP=100;
   heros[selectHero].attack=10;
  break;
  case "ふわふわとびばこ":
   myh.innerHTML = "HPを1.2倍にする";
   MaxHP=120;
   heros[selectHero].attack=10;
  break;
  case "ねこよりとろけるメロン":
   myh.innerHTML = "HPを少しずつ回復させる";
   MaxHP=100;
   heros[selectHero].attack=10;
  break;
  case "ふんわりチョコけしごむ":
   myh.innerHTML = "攻撃の威力を1.2倍にする";
   MaxHP=100;
   heros[selectHero].attack=12;
  break;
  case "まっくろたんぽぽ":
   myh.innerHTML = "HP5割減の代わりに攻撃の威力を2倍にする";
   MaxHP=50;
   heros[selectHero].attack=20;
  break;
 }
 var myh = document.getElementById("partRate");
 myh.innerHTML = partNum+"/15";
 var myh = document.getElementById("clearRate");
 myh.innerHTML = Math.round(clearRate)+"%";
 f_opacityButton("returnAdventure");
 f_opacityButton("heroSelectRight");
 f_opacityButton("heroSelectLeft");
 f_opacityButton("equipment");
 f_opacityButton("freeTalk");
 f_opacityButton("dataBase");
 f_opacityButton("option");
 f_opacityButton("map");
 f_opacityButton("costumeButton");
 playerHP_1=MaxHP;
 f_HPcheck();console.log(restPosi);
 localSave();
}

function f_costumeChange(){
 selectSE.play();
 switch(selectHero){
  case "marcos":
   if(blocks["sweetA"].name==0){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","マルコスのコスチュームを持っていません");}
  break;
  case "nikola":
   if(blocks["sweetC"].name==0){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","テスラのコスチュームを持っていません");}
  break;
  case "lyrica":
   if(event["luruca"].happen){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","リリカのコスチュームを持っていません");}
  break;
  case "alice":
   if(blocks["sweetM"].name==0){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","アリスのコスチュームを持っていません");}
  break;
  case "amairo":
   if(event["niziiro"].happen){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","甘色のコスチュームを持っていません");}
  break;
  case "pierre":
   if(blocks["sweetL"].name==0){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","ピエールのコスチュームを持っていません");}
  break;
  case "thirteen":
   if(event["angel"].happen){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","サーティーンのコスチュームを持っていません");}
  break;
  case "coclico":
   if(event["allClear"].happen){if(heros[selectHero].costume=="オリジナル"){heros[selectHero].costume="カラバリ１";}else if(heros[selectHero].costume=="カラバリ１"){heros[selectHero].costume="カラバリ２";}else{heros[selectHero].costume="オリジナル";}}
   else{f_popUpN("null","コクリコのコスチュームを持っていません");}
  break;
 }
 if(phase==3){f_menue();}
 else if(phase==2){f_checkPoint();}
}

function f_menue(){
 selectSE.play();
 f_dataReflect();
 phase=3;
 var myh = document.getElementById("checkPoint");
 myh.innerHTML=" ";
 heroActControl=1;
 fallOK=0;
 blackoutScreen.style.opacity=0.8;
 document.documentElement.style.setProperty('--blackout', "100%");
 document.documentElement.style.setProperty('--checkScreen', "100%");
 var myh = document.getElementById("checkScreen");
 myh.innerHTML = "<div style=position:absolute;top:5%;left:5%;height:40%;width:40%;backGround:var(--homeColor);><font style=position:absolute;top:2%;width:100%;font-size:var(--speechFont3);color:#ffffff;text-align:center;>←キー、→キーでヒーロー切り替え<br>Cキーでコスチューム変更</font><img src=item/"+selectHero+"/"+heros[selectHero].costume+"/stand.png style=position:absolute;top:20%;left:35%;width:30%;><img id=heroSelectRight src=item/etc/cursor.png style=position:absolute;top:40%;right:5%;height:20%; onclick=heroChange(1);><img id=heroSelectLeft src=item/etc/cursor.png style=position:absolute;transform:scale(-1,1);top:40%;left:5%;height:20%; onclick=heroChange(-1);><div id=costumeButton onclick=f_costumeChange(); style=position:absolute;bottom:5%;left:20%;height:15%;width:60%;backGround:#ffffff;color:var(--homeColor);font-size:var(--speechFont3);text-align:center;border-radius:10%;>"+heros[selectHero].costume+"</div></div><div style=position:absolute;top:50%;left:5%;height:20%;width:40%;font-size:var(--speechFont4_5);color:#ffffff;backGround:var(--homeColor);>　装備<div id=equipment style=position:absolute;top:5%;right:2%;height:40%;width:50%;color:#ffffff;text-align:center;font-size:var(--speechFont3)>なし</div><div id=equipmentExplain style=position:absolute;top:50%;left:5%;font-size:var(--speechFont3);></div></div><div style=position:absolute;top:75%;left:5%;height:10%;width:40%;backGround:var(--homeColor);font-size:var(--speechFont4_5);color:#ffffff;>　懐中時計のパーツ<font id=partRate style=position:absolute;right:5%;text-align:right;>n/n</font></div><div style=position:absolute;top:5%;left:50%;height:40%;width:45%;backGround:var(--homeColor);color:#ffffff;font-size:var(--speechFont4);>　操作方法<br>　・←キー、→キー：移動<br>　・Sキー：ジャンプ<br>　・Aキー：攻撃<br>　・Enterキー：確認<br>　・Spaceキー：メニュー</div><div id=map onclick=f_map(5); style=position:absolute;top:52%;left:50%;height:15%;width:20%; class=buttonA><div class=buttonB>マップ<br><font style=font-size:var(--speechFont3);>(Mキー)</font></div></div><div id=option style=position:absolute;top:52%;left:75%;height:15%;width:20%;font-size:var(--speechFont4_5);color:#ffffff;text-align:center; onclick=f_option(5); class=buttonA><div class=buttonB>オプション<br><font style=font-size:var(--speechFont3);>（Oキー）</font></div></div><div id=returnAdventure style=position:absolute;top:75%;left:55%;height:20%;width:35%;font-size:var(--speechFont4_5);text-align:center;backGround:#ffffff; class=buttonA onclick=f_returnAdventure();><div class=buttonB>Spaceで<br>冒険に戻る</div></div>";
 var myh = document.getElementById("equipment");
 myh.innerHTML = selectEquipment;
 var myh = document.getElementById("equipmentExplain");
 switch(selectEquipment){
  case "なし":
   myh.innerHTML = "効果なし";
   MaxHP=100;
   heros[selectHero].attack=10;
  break;
  case "ふわふわとびばこ":
   myh.innerHTML = "HPを1.2倍にする";
   MaxHP=120;
   heros[selectHero].attack=10;
  break;
  case "ねこよりとろけるメロン":
   myh.innerHTML = "HPを少しずつ回復させる";
   MaxHP=100;
   heros[selectHero].attack=10;
  break;
  case "ふんわりチョコけしごむ":
   myh.innerHTML = "攻撃の威力を1.2倍にする";
   MaxHP=100;
   heros[selectHero].attack=12;
  break;
  case "まっくろたんぽぽ":
   myh.innerHTML = "HP5割減の代わりに攻撃の威力を2倍にする";
   MaxHP=50;
   heros[selectHero].attack=20;
  break;
 }
 var myh = document.getElementById("partRate");
 myh.innerHTML = partNum+"/15";
 f_opacityButton("returnAdventure");
 f_opacityButton("heroSelectRight");
 f_opacityButton("heroSelectLeft");
 f_opacityButton("map");
 f_opacityButton("option");
 f_opacityButton("costumeButton");
}

function f_equipmentChange(){
 selectSE.play();
 var equipmentArray=["なし"];
 if(blocks["itemA"].name==0){equipmentArray.push(blocks["itemA"].item);}
 if(blocks["sweetE"].name==0){equipmentArray.push("ねこよりとろけるメロン");}
 if(blocks["itemD"].name==0){equipmentArray.push(blocks["itemD"].item);}
 if(blocks["itemE"].name==0){equipmentArray.push(blocks["itemE"].item);}
 if(equipmentArray.length==1){
  f_popUpN("null","装備できるアイテムを所持していません");
 }
 else{
  if(equipmentArray.indexOf(selectEquipment)==equipmentArray.length-1){
   selectEquipment="なし"
  }
  else{
   selectEquipment=equipmentArray[equipmentArray.indexOf(selectEquipment)+1];
  }
  f_checkPoint();
 }
}

function f_returnAdventure(){
 selectSE.play();
 BGM2.volume=0;
 f_BGM();
 phase=1;
 heroActControl=0;
 fallOK=1;
 timeStop=0;
 blackoutScreen.style.opacity=0;
 document.documentElement.style.setProperty('--blackout', "0%");
 document.documentElement.style.setProperty('--checkScreen', "0%");
 var myh = document.getElementById("checkScreen");
 myh.innerHTML = " ";
}

function heroChange(dire){
 var herosArray=[];
 for(var elem in heros){
  if(heros[elem].usable){
   herosArray.push(elem);
  }
 }
 if(herosArray.length==1){f_popUpN("null","切り替えられるヒーローがいません");}
 if(dire==1){
  if(herosArray.indexOf(selectHero)==herosArray.length-1){
   selectHero=herosArray[0];
  }
  else{
   selectHero=herosArray[(herosArray.indexOf(selectHero)+1)];
  }
 }
 else{
  if(herosArray.indexOf(selectHero)==0){
   selectHero=herosArray[(herosArray.length-1)];
  }
  else{
   selectHero=herosArray[(herosArray.indexOf(selectHero)-1)];
  }
 }
 if(phase==2){
  f_checkPoint("0");
 }
 else{
  f_menue();
 }
}

function f_checkAppear(){
 if(heroPosi[0]>=selectFront.length){heroPosi[0]=selectFront.length-1;}
 if(heroPosi[1]>=selectFront[0].length){heroPosi[1]=selectFront[0].length-1;}
 var checkPointBlock=[0,0];
 if(selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]=="splinter"||selectGimmick[Math.ceil(heroPosi[0])][Math.floor(heroPosi[1])]=="splinter"||selectGimmick[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]=="splinter"||selectGimmick[Math.ceil(heroPosi[0])][Math.ceil(heroPosi[1])]=="splinter"){f_damage(20);}
 if(heroPosi[1]>=11&&event["jump"].happen==0){
  if(pcOrPhone=="phone"){f_speech("marcosPhone6");}
  else{f_speech("marcosTutorial6");}
  event["jump"].happen=1;
 }
 else if(selectStage=="coclicoDream5"&&heroPosi[1]>=14&&event["nikolaEncount"].happen==0){
  f_speech("nikolaEncount1");
 }
 else if(selectStage=="coclicoDream6"&&heroPosi[0]<=2&&heroPosi[1]>=7&&heroPosi[1]<=13&&event["lyricaEncount"].happen==0){
  f_speech("lyricaEncount1");
 }
 else if(selectStage=="coclicoDream10"&&heroPosi[0]==7&&heroPosi[1]<=9&&event["aliceEncount"].happen==0){
  f_speech("aliceEncount1");
 }
 else if(selectStage=="coclicoDream2"&&heroPosi[0]>=8&&heroPosi[1]>=14&&event["amairoEncount"].happen==0){
  heros["amairo"].usable=1;
  f_speech("amairoEncount1");
 }
 else if(selectStage=="coclicoDream1"&&heroPosi[0]>=10&&heroPosi[1]<=13&&heroPosi[1]>=11&&event["pierreEncount"].happen==0){
  f_speech("pierreEncount1");
 }
 else if(selectStage=="coclicoDream7"&&heroPosi[0]>=6&&heroPosi[0]<=7&&heroPosi[1]<=18&&heroPosi[1]>=16&&event["thirteenEncount"].happen==0){
  f_speech("thirteenEncount1");
 }
 else if(selectStage=="coclicoDream8"&&heroPosi[0]>=11&&heroPosi[0]<=13&&heroPosi[1]<=10&&heroPosi[1]>=6&&event["coclicoEncount"].happen==0){
  f_speech("coclicoEncount1");
 }
 else if(selectStage=="coclicoDream3"&&heroPosi[0]==6&&heroPosi[1]>=3&&event["marionette"].happen==0){
  f_speech("marionetteEnc1");
 }
 else if(selectStage=="coclicoDream11"&&heroPosi[0]==6&&heroPosi[1]>=3&&event["skeleton"].happen==0){
  f_speech("skeletonEnc1");
 }
 else if(selectStage=="coclicoDream4"&&heroPosi[0]==6&&heroPosi[1]>=7){
  f_speech("LBenc1");
 }
 else if(selectStage=="coclicoDream12"&&heroPosi[0]==6&&heroPosi[1]>=5&&event["princess"].happen==0){
  f_speech("princessEnc1");
 }
 else if(selectStage=="coclicoDream8"&&heroPosi[0]==10&&heroPosi[1]>=12&&heroPosi[1]<=16&&event["dreamRock"].happen==0){
  event["dreamRock"].happen=1;
  f_speech("dreamRockEvent1");
 }
 if(heroPosi[0]%1==0&&blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="item"){
  getItem=blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].item;
  if(getItem=="壊れた懐中時計"){f_speech("clockGet1");}
  else if(getItem=="夢の欠片"){
   blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name="0";
   selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]="0";
   var dreamPieceNum=0;
   if(blocks["itemF"].name=="0"){dreamPieceNum++;}
   if(blocks["itemG"].name=="0"){dreamPieceNum++;}
   if(blocks["itemH"].name=="0"){dreamPieceNum++;}
   if(blocks["sweetH"].name=="0"){dreamPieceNum++;}
   if(dreamPieceNum==1){f_speech("dreamPieceGet1");}
   else if(dreamPieceNum<=3){f_speech(selectHero+"DreamPieceGet");}
   else{event["dreamMachine"].happen=1;f_speech("dreamPieceClear1");}
  }
  else{f_speech(selectHero+"Item1");}
  var myh = document.getElementById("selectGimmickX"+Math.floor(heroPosi[1])+"Y"+Math.floor(heroPosi[0]));
  myh.innerHTML = " ";
 }
 if(heroPosi[0]%1==0&&blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="part"){
  blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=0;
  f_dataReflect();
  if(partNum>=15){f_speech("clockClear1");}
  else{f_speech(selectHero+"Part1");}
  var myh = document.getElementById("selectGimmickX"+Math.floor(heroPosi[1])+"Y"+Math.floor(heroPosi[0]));
  myh.innerHTML = " ";
 }
 if(heroPosi[0]%1==0&&blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="sweet"&&heros["amairo"].usable==1){
  if(!event["sweetClear"].happen){
   event["sweetClear"].happen=1;
   f_speech("sweetClear1");
  }
  else{
   f_speech("amairoSweet1");
  }
  var myh = document.getElementById("selectGimmickX"+Math.floor(heroPosi[1])+"Y"+Math.floor(heroPosi[0]));
  myh.innerHTML = " ";
 }
 if(heroPosi[0]%1==0&&heroPosi[1]%1==0){
  if(blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name=="hamster"||blocks[selectGimmick[heroPosi[0]][heroPosi[1]-1]].name=="hamster"){
   if(!heros["pierre"].usable){
    var myh = document.getElementById("checkPoint");
    myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"HamsterD1');>Enterで確認</div>";
    f_opacityButton("checkAppear");
    if(enterKeySentence=="end"){enterKeySentence=selectHero+"HamsterD1"};
   }
   else{
    if(!event["hamsterClear"].happen){
     event["hamsterClear"].happen=1;
     var myh = document.getElementById("checkPoint");
     myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('hamsterClear1');>Enterで確認</div>";
     f_opacityButton("checkAppear");
     if(enterKeySentence=="end"){enterKeySentence="hamsterClear1"};
    }
    else{
     event["hamsterClear"].happen=1;
     var myh = document.getElementById("checkPoint");
     myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"HamsterC1');>Enterで確認</div>";
     f_opacityButton("checkAppear");
     if(enterKeySentence=="end"){enterKeySentence=selectHero+"HamsterC1"};
    }
   }
  }
  if(blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name=="door"||blocks[selectGimmick[heroPosi[0]][heroPosi[1]-1]].name=="door"){
   f_dataReflect();
   if(partNum<15){
    var myh = document.getElementById("checkPoint");
    myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"Door1');>Enterで確認</div>";
    f_opacityButton("checkAppear");
    if(enterKeySentence=="end"){enterKeySentence=selectHero+"Door1"};
   }
   else{
    event["hamsterClear"].happen=1;
    var myh = document.getElementById("checkPoint");
    myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('doorClear1');>Enterで確認</div>";
    f_opacityButton("checkAppear");
    if(enterKeySentence=="end"){enterKeySentence="doorClear1"};
   }
  }
  else if(blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name=="mirror"||blocks[selectGimmick[heroPosi[0]][heroPosi[1]-1]].name=="mirror"){
   if(!heros["alice"].usable){
    var myh = document.getElementById("checkPoint");
    myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"MirrorD1');>Enterで確認</div>";
    f_opacityButton("checkAppear");
    if(enterKeySentence=="end"){enterKeySentence=selectHero+"MirrorD1"};
   }
   else{
    if(!event["mirrorClear"].happen){
     var myh = document.getElementById("checkPoint");
     myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('mirrorClear1');>Enterで確認</div>";
     f_opacityButton("checkAppear");
     if(enterKeySentence=="end"){enterKeySentence="mirrorClear1"};
    }
    else{
     var myh = document.getElementById("checkPoint");
     myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-0.5)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"MirrorC1');>Enterで確認</div>";
     f_opacityButton("checkAppear");
     if(enterKeySentence=="end"){enterKeySentence=selectHero+"MirrorC1"};
    }
   }
  }
 }
 else if(heroPosi[0]%1==0&&blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="giraffe"||blocks[selectGimmick[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]].name=="giraffe"){
  if(!event["giraffe"].happen){
   var myh = document.getElementById("checkPoint");
   myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-1)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('marcosTutorial7');>Enterで確認</div>";
   f_opacityButton("checkAppear");
   if(enterKeySentence=="end"){enterKeySentence="marcosTutorial7"};
  }
  else{
   var giraffePosi=[0,0];
   for(var numY=0;selectGimmick.length>numY;numY++){
    for(var numX=0;selectGimmick[numY].length>numX;numX++){
     if(blocks[selectGimmick[numY][numX]].name=="giraffe"){
      var giraffePosi=[numY,numX];
     }
    }
   }
   var myh = document.getElementById("selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]);
   myh.innerHTML = "<img src=item/stage/giraffe_greet.png style=width:100%;><style>#selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]+"{position:absolute;top:"+12.5*(giraffePosi[0]-2+1)+"%;left:"+6.9*(giraffePosi[1]-1)+"%;height:"+25+"%;width:"+13.8+"%;}</style>";
   var myh = document.getElementById("checkPoint");
   myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-1)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"Break');>Enterで休憩</div>";
   f_opacityButton("checkAppear");
   if(enterKeySentence=="end"){enterKeySentence=selectHero+"Break";}
  }
 }
 
 else if(heroPosi[0]%1==0&&blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="dreamRock"||blocks[selectGimmick[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]].name=="dreamRock"){
  if(event["dreamMachine"].happen){
   var myh = document.getElementById("checkPoint");
   myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-1)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('dreamRockSentence');>Enterで夢の中へ</div>";
   f_opacityButton("checkAppear");
   if(enterKeySentence=="end"){enterKeySentence="dreamRockSentence"};
  }
 }
 else if(heroPosi[0]%1==0&&blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="rock_giraffe"||blocks[selectGimmick[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]].name=="rock_giraffe"){
  if(!heros["lyrica"].usable){
   var myh = document.getElementById("checkPoint");
   myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-1)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"RockD1');>Enterで確認</div>";
   f_opacityButton("checkAppear");
   if(enterKeySentence=="end"){enterKeySentence=selectHero+"RockD1"};
  }
  else{
   if(!event["rock_giraffeClear"].happen){
    var myh = document.getElementById("checkPoint");
    myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-1)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('rockGiraffeC1');>Enterで確認</div>";
    f_opacityButton("checkAppear");
    if(enterKeySentence=="end"){enterKeySentence="rockGiraffeC1"};
   }
   else{
    var myh = document.getElementById("checkPoint");
    myh.innerHTML = "<div id=checkAppear style=position:absolute;top:"+((heroPosi[0]-0.8)*12.5)+"%;left:"+((heroPosi[1]-1)*6.9)+"%;height:8%;width:20.7%;text-align:center;font-size:var(--speechFont4_5);color:#000000;backGround:#ffffff;border-radius:10%; onclick=f_speech('"+selectHero+"RockC1');>Enterで確認</div>";
    f_opacityButton("checkAppear");
    if(enterKeySentence=="end"){enterKeySentence=selectHero+"RockC1"};
   }
  }
 }
 else{
  enterKeySentence="end";
  var myh = document.getElementById("checkPoint");
  myh.innerHTML = " ";
  var giraffePosi=[0,0];
  for(var numY=0;selectGimmick.length>numY;numY++){
   for(var numX=0;selectGimmick[numY].length>numX;numX++){
    if(blocks[selectGimmick[numY][numX]].name=="giraffe"){
     var giraffePosi=[numY,numX];
    }
   }
  }
  if(giraffePosi[0]!=0&&giraffePosi[1]!=0){
   var myh = document.getElementById("selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]);
   myh.innerHTML = "<img src=item/stage/giraffe.png style=width:100%;><style>#selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]+"{position:absolute;top:"+12.5*(giraffePosi[0]-2+1)+"%;left:"+6.9*(giraffePosi[1])+"%;height:"+25+"%;width:"+6.9+"%;}</style>";
  }
 }
}

function f_sweet(sweetBlock){
 switch(sweetBlock){
  case "sweetA":getItem="マルコスコスチューム";  break;
  case "sweetB":getItem="懐中時計のパーツ";      break;
  case "sweetC":getItem="テスラコスチューム";    break;
  case "sweetD":getItem="懐中時計のパーツ";      break;
  case "sweetE":getItem="ねこよりとろけるメロン";break;
  case "sweetF":getItem="懐中時計のパーツ";      break;
  case "sweetG":getItem="懐中時計のパーツ";      break;
  case "sweetH":getItem="夢の欠片";              break;
  case "sweetI":getItem="懐中時計のパーツ";      break;
  case "sweetJ":getItem="懐中時計のパーツ";      break;
  case "sweetK":getItem="懐中時計のパーツ";      break;
  case "sweetL":getItem="ピエールコスチューム";  break;
  case "sweetM":getItem="アリスコスチューム";    break;
 }
 blocks[sweetBlock].name="0";
 f_popUpN("null","囁くお菓子から「"+getItem+"」をもらいました");
 f_dataReflect();
 if(getItem=="懐中時計のパーツ"&&partNum>=15){
  f_speech("clockClear1");
 }
 else if(getItem=="夢の欠片"){
  var dreamPieceNum=0;
  if(blocks["itemF"].name=="0"){dreamPieceNum++;}
  if(blocks["itemG"].name=="0"){dreamPieceNum++;}
  if(blocks["itemH"].name=="0"){dreamPieceNum++;}
  if(blocks["sweetH"].name=="0"){dreamPieceNum++;}
  if(dreamPieceNum==1){f_speech("dreamPieceGet1");}
  else if(dreamPieceNum<=3){f_speech(selectHero+"DreamPieceGet");}
  else{event["dreamMachine"].happen=1;f_speech("dreamPieceClear1");}
 }
}

function f_BGM(){
 if(BGM2.volume==0){
  if(selectStage=="coclicoDream3Boss"||selectStage=="coclicoDream11Boss"){
   BGM1.volume=0;
   BGM3.volume=0;
   BGM4.volume=0.6;
   BGM5.volume=0;
  }
  else if(selectStage=="coclicoDream4Boss"||selectStage=="coclicoDream12Boss"){
   BGM1.volume=0;
   BGM3.volume=0.6;
   BGM4.volume=0;
   BGM5.volume=0;
  }
  else if(selectStage=="coclicoDream3"||selectStage=="coclicoDream4"||selectStage=="coclicoDream11"||selectStage=="coclicoDream12"||selectStage=="coclicoDream1Boss"||selectStage=="coclicoDream8Boss"||selectStage=="coclicoDream10Boss"){
   BGM1.volume=0;
   BGM3.volume=0;
   BGM4.volume=0;
   BGM5.volume=0;
  }
  else{
   BGM1.volume=0.6;
   BGM3.volume=0;
   BGM4.volume=0;
   BGM5.volume=0;
  }
 }
 else{
  BGM1.volume=0;
  BGM3.volume=0;
  BGM4.volume=0;
  BGM5.volume=0;
 }
}

const log = function(){
 if(phase==1){
  easyHelpNum++;
  if(easyHelpNum>=30&&helpApp=='ON'){
   easyHelpNum=30;
   if(pcOrPhone=="phone"){
    easyHelp1.style.opacity=0.8;
    easyHelp2.style.opacity=0.8;
    easyHelp3.style.opacity=0.8;
    easyHelp4.style.opacity=0.8;
   }
   else{easyHelp.style.opacity=0.8;}
  }
  else{
   easyHelp1.style.opacity=0;
   easyHelp2.style.opacity=0;
   easyHelp3.style.opacity=0;
   easyHelp4.style.opacity=0;
   easyHelp.style.opacity=0;
  }
  if(fallOK==1){
   f_heroFall();
  }
  if(lastBossCheck==1){
   if(heroPosi[0]>=3&&heroPosi[0]<=4.5&&heroPosi[1]<=10){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]>=3&&heroPosi[0]<=4.5&&heroPosi[1]>=12.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[1]>=10&&heroPosi[1]<=11&&heroPosi[0]>=4.5){f_damage(enemies["lastBoss"].attack);}
  }
  if(lastBossCheck==2){
   if(heroPosi[0]==6&&heroPosi[1]==8.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==6&&heroPosi[1]==9){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==9){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==9.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5&&heroPosi[1]==10){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==10){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==10.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4&&heroPosi[1]==10.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==12){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==12.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5&&heroPosi[1]==12.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==13){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==13.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==6&&heroPosi[1]==13.5){f_damage(enemies["lastBoss"].attack);}
  }
  if(lastBossCheck==3){
   if(heroPosi[0]>=3&&heroPosi[0]<=4.5&&heroPosi[1]<=10){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]>=3&&heroPosi[0]<=4.5&&heroPosi[1]>=12.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[1]>=10&&heroPosi[1]<=11&&heroPosi[0]>=4.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==6&&heroPosi[1]==8.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==6&&heroPosi[1]==9){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==9){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==9.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5&&heroPosi[1]==10){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==10){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==10.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4&&heroPosi[1]==10.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==12){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==4.5&&heroPosi[1]==12.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5&&heroPosi[1]==12.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==13){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==5.5&&heroPosi[1]==13.5){f_damage(enemies["lastBoss"].attack);}
   else if(heroPosi[0]==6&&heroPosi[1]==13.5){f_damage(enemies["lastBoss"].attack);}
  }
  if(lastBossCheck==4){console.log(heroPosi[1]+","+enemyArray[0][1]);
   if(heroPosi[0]==6&&Math.abs(heroPosi[1]-enemyArray[0][1])<2){f_damage(enemies["princess"].attack);}
  }
  f_hitCheck();
  if(selectHit.length-heroPosi[0]<=1){
  }
  else if(!heroActControl&&!heroAction&&!heroAttackSpan&&heroPosi[0]%1==0&&(selectHit[heroPosi[0]+1][Math.floor(heroPosi[1])]==1||selectHit[heroPosi[0]+1][Math.ceil(heroPosi[1])]==1)){
   var myh = document.getElementById("player1Base");
   myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/stand.png id=player1>";
   document.documentElement.style.setProperty('--player1Width', 6.9+"%");
   document.documentElement.style.setProperty('--player1Left', player1Left+"%");
  }
  if(logCount>=12){logCount=0;}
  if(!timeStop){
   f_HPcheck();
   if(logCount==0||logCount==6){
    f_rabit();
    f_sheep();
   }
   if(logCount==0||logCount==3||logCount==6||logCount==9){
    f_lastBoss();
    if(selectStage=="coclicoDream4Boss"&&enemyArray.length<=11&&lastBossEnemy<67){f_lastBossEnemy();}
    f_bear();
    f_rabitEX();
    f_devil();
    f_omochi();
    f_marionette();
    f_skeleton();
   }
   if(logCount==0||logCount==2||logCount==4||logCount==6||logCount==8||logCount==10){
    f_bearEX();
    f_princess();
    f_niziiro();
    f_luruca();
    f_angel();
   }
   logCount++;
  }
 }
}

setInterval(log, 100);

function f_hitCheck(){
 var heroHit=0;
 if(selectHit[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]>0){
  heroHit=1;
 }
 if(selectHit[Math.ceil(heroPosi[0])][Math.floor(heroPosi[1])]>0){
  heroHit=1;
 }
 if(selectHit[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]>0){
  heroHit=1;
 }
 if(selectHit[Math.ceil(heroPosi[0])][Math.ceil(heroPosi[1])]>0){
  heroHit=1;
 }
 if(heroHit){
  if(selectHit[Math.floor(heroPosi[0])-1][Math.floor(heroPosi[1])]==0){
   heroPosi=[Math.floor(heroPosi[0])-1,Math.floor(heroPosi[1])];
  }
  else if(selectHit[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])-1]==0){
   heroPosi=[Math.floor(heroPosi[0]),Math.floor(heroPosi[1])-1];
  }
  else if(selectHit[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])+1]==0){
   heroPosi=[Math.floor(heroPosi[0]),Math.floor(heroPosi[1])+1];
  }
  else if(selectHit[Math.floor(heroPosi[0])-1][Math.floor(heroPosi[1])]==0){
   heroPosi=[Math.floor(heroPosi[0]-1),Math.floor(heroPosi[1])];
  }
  else{
   heroPosi=[Math.floor(heroPosi[0])-1,Math.floor(heroPosi[1])];
  }
 }
}

function f_damage(damage){
 if(event["damage"].happen==0){
  if(pcOrPhone=="phone"){f_speech("marcosPhone5");}
  else{f_speech("marcosTutorial5");}
  event["damage"].happen=1;
 }
 if(!damageSpan2_1){
  var damageSound = new Audio('sound/powerdown03.mp3');
  damageSound.currentTime = 0;
  damageSound.play();
  playerHP_1-=damage*level;
  document.documentElement.style.setProperty('--player1damage', "#ff0000");
  player1damage.style.opacity=0.8;
  damageSpan2_1=1;
  setTimeout(function(){
   player1damage.style.opacity=0;
   setTimeout(function(){
    document.documentElement.style.setProperty('--player1damage', "#ff0000");
    player1damage.style.opacity=0.8;
    setTimeout(function(){
     player1damage.style.opacity=0;
     damageSpan2_1=0;
    },100);
   },200);
  },200);
 }
}

function f_attack(posiY,posiX){
 bombSE = new Audio('sound/mini_bomb2.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
 var attackTop=posiY*12.5-6.25;
 var attackLeft=posiX*6.9-3.45;
 attackSuccess.style.opacity=0;
 document.documentElement.style.setProperty('--attackTop', attackTop+"%");
 document.documentElement.style.setProperty('--attackLeft', attackLeft+"%");
 setTimeout(function(){
  attackSuccess.style.opacity=0.5;
  setTimeout(function(){
   attackSuccess.style.opacity=0;
  },100);
 },100);
}

function f_whiteScreen(time){
 if(time==0){
  document.documentElement.style.setProperty("--whiteScreen","0%");
 }
 else if(time<=1){
  document.documentElement.style.setProperty("--whiteScreen","100%");
  whiteScreen.style.opacity=time;
 }
 else{
  document.documentElement.style.setProperty("--whiteScreen","100%");
  setTimeout(function(){
   document.documentElement.style.setProperty("--whiteScreen","0%");
  },time);
 }
}

function f_restartA(){
 localSave();
 selectStage="coclicoDream8";
 heroPosi[4,18];
 setTimeout(function(){f_stageChange();},200);
 setTimeout(function(){f_returnAdventure();lacalSave();},800);
}

function f_restartCalarm(){
 setTimeout(function(){
  f_popUpYesNo('null','破棄したデータは復元できませんが、本当によろしいですか？','f_restartC();');
 },100);
}

function f_speech(sentence){
 selectSE.play();
 if(sentence=="end"||sentence=="endC"){
  skipTime=1;
  speechBase.style.zIndex=0;
  speechTouch.style.zIndex=0;
  if(phase!=2&&phase!=3){phase=1;}
  document.documentElement.style.setProperty('--speechObstruction', "0%");
  document.documentElement.style.setProperty('--speechBase', "0vh");
  var myh = document.getElementById("speechBase");
  myh.innerHTML = " ";
  timeStop=0;
  heroActControl=0;
  f_dataReflect();
  if(getItem=="懐中時計のパーツ"&&partNum>=15){
   f_speech("clockClear1");
  }
  if(selectStage=="coclicoDream1Boss"||selectStage=="coclicoDream8Boss"||selectStage=="coclicoDream10Boss"){
   BGM5.volume=0.6;
  }
 }
 else if(sentence=="endA"){
  skipTime=1;
  speechBase.style.zIndex=0;
  speechTouch.style.zIndex=0;
  f_checkPoint();
  document.documentElement.style.setProperty('--speechObstruction', "0%");
  document.documentElement.style.setProperty('--speechBase', "0vh");
  var myh = document.getElementById("speechBase");
  myh.innerHTML = " ";
 }
 else if(sentence=="endB"){
  skipTime=1;
  speechBase.style.zIndex=0;
  speechTouch.style.zIndex=0;
  phase=4;
  document.documentElement.style.setProperty('--speechObstruction', "0%");
  document.documentElement.style.setProperty('--speechBase', "0vh");
  var myh = document.getElementById("speechBase");
  myh.innerHTML = " ";
 }
 else if(sentence=="endD"){
  skipTime=1;
  speechBase.style.zIndex=0;
  speechTouch.style.zIndex=0;
  phase=1;
  document.documentElement.style.setProperty('--speechObstruction', "0%");
  document.documentElement.style.setProperty('--speechBase', "0vh");
  var myh = document.getElementById("speechBase");
  myh.innerHTML = " ";
  timeStop=0;
  heroActControl=0;
  if(blocks[selectGimmick[Math.round(heroPosi[0])][Math.round(heroPosi[1])+1]].name=="hamster"){
   blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name="0"
  }
  else if(blocks[selectGimmick[Math.round(heroPosi[0])][Math.round(heroPosi[1])-1]].name=="hamster"){
   blocks[selectGimmick[heroPosi[0]][heroPosi[1]-1]].name="0"
  }
  enterKeySentence="end";
  f_stageChange();
 }
 else if(sentence=="endE"){
  skipTime=1;
  speechBase.style.zIndex=0;
  speechTouch.style.zIndex=0;
  f_dataReflect();
  document.documentElement.style.setProperty('--speechObstruction', "0%");
  document.documentElement.style.setProperty('--speechBase', "0vh");
  var myh = document.getElementById("speechBase");
  myh.innerHTML = " ";
  f_whiteScreen(0);
  blackoutScreen.style.opacity=1;
  document.documentElement.style.setProperty('--blackout', "100%");
  document.documentElement.style.setProperty('--checkScreen', "100%");
  var myh = document.getElementById("checkScreen");
  myh.innerHTML = "<div style=position:absolute;top:5%;left:0%;width:100%;text-align:center;font-size:var(--speechFont4_5);color:#ffffff;>ゲームクリア<br><br><font style=font-size:var(--speechFont6);>ゲームクリア率："+Math.round(clearRate)+"%</font></div><div id=restartA onclick=f_popUpYesNo('null','ラスボス手前の状態に戻ります。よろしいですか？','f_restartA();'); style=position:absolute;top:50%;left:6.25%;height:30%;width:25%;backGround:var(--homeColor);border-radius:10%;><div class=buttonA><div class=buttonB>ラスボス前<br>から再開</div></div></div><div id=restartB onclick=f_popUpYesNo('null','全ヒーローと装備解放状態で最初の地点からやり直します。よろしいですか？','f_restartB();'); style=position:absolute;top:50%;left:37.5%;height:30%;width:25%;backGround:var(--homeColor);border-radius:10%;><div class=buttonA><div class=buttonB>強くて<br>ニューゲーム</div></div></div><div id=restart onclick=f_popUpYesNo('null','データの進行状況をすべて破棄して最初からやり直します。よろしいですか？','f_restartCalarm();'); style=position:absolute;top:50%;right:6.25%;height:30%;width:25%;backGround:var(--homeColor);border-radius:10%;><div class=buttonA><div class=buttonB>最初から</div></div></div>";
  f_opacityButton("restartA");
  f_opacityButton("restartB");
  f_opacityButton("restart");
 }
 else if(sentence=="dreamRockSentence"){
  f_popUpYesNo('null','この夢の世界へ入りますか？','f_stageChange();');
 }
 else{
  speechBase.style.zIndex=4;
  speechTouch.style.zIndex=4;
  phase=0;
  var myh = document.getElementById("checkPoint");
  myh.innerHTML = " ";
  document.documentElement.style.setProperty('--speechObstruction', "100%");
  var myh = document.getElementById("speechBase");
  myh.innerHTML = " ";
  timeStop=1;
  heroActControl=1;
  var lateTime=50;
  if(sentence=="marcosTutorial8"){lateTime=3000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="marionetteEnc3"){lateTime=5000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="skeletonEnc2"){lateTime=4000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="doorClear11"){lateTime=3500;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="LBenc5"){lateTime=5000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="LBend9"){lateTime=2000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="LBend22"){lateTime=4000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="princessEnc3"){lateTime=4000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="niziiroEnd7"){lateTime=5000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="lurucaEnd18"){lateTime=5000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="angelEnd7"){lateTime=4000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  else if(sentence=="angelEnd9"){lateTime=5000;document.documentElement.style.setProperty('--speechBase', "0vh");}
  setTimeout(function(){
   phase=5;
   document.documentElement.style.setProperty('--speechBase', "30vh");
   var myh = document.getElementById("speechBase");
   if(sentence=="coclicoItem2"){
    var itemPosi=[0,0];
    for(var numY=0;selectGimmick.length>numY;numY++){
     for(var numX=0;selectGimmick[numY].length>numX;numX++){
      if(blocks[selectGimmick[numY][numX]].name=="item"){
       var itemPosi=[numY,numX];
      }
     }
    }
    var coclicoItem=blocks[selectGimmick[itemPosi[0]][itemPosi[1]]].item;
    heroTalk[sentence].speech1="わぁ！"+coclicoItem+"だぁ";
    blocks[selectGimmick[itemPosi[0]][itemPosi[1]]].name=0;
   }
   myh.innerHTML = "<div id=talkSkip onclick=f_popUpYesNo('null','この会話をスキップしてもよろしいですか？','skipTime=0;f_speech(enterKeySentence);'); class=buttonA style=position:absolute;top:250%;left:50%;height:30%;width:45%;><div class=buttonB>会話をスキップ（Pキー）</div></div><div style=position:absolute;height:100%;width:100%;><img src=item/icon/"+heroTalk[sentence].img+".png style=position:absolute;top:5%;left:5%;height:90%;><font style=position:absolute;top:5%;left:25%;color:#ffffff;font-size:var(--speechFont5);>"+heroTalk[sentence].name+"</font><font style=position:absolute;top:30%;left:25%;color:#ffffff;font-size:var(--speechFont4);>"+heroTalk[sentence].speech1+"</font><font style=position:absolute;top:60%;left:25%;color:#ffffff;font-size:var(--speechFont4);>"+heroTalk[sentence].speech2+"</font><div style=position:absolute;bottom:5%;right:2%;font-size:var(--speechFont3);backGround:#ffffff;>Enterで進む</div></div>";
   f_opacityButton("talkSkip");
   if(sentence=="amairoSweet1"){
    enterKeySentence=selectHero+"Sweet2";
   }
   else{
    enterKeySentence=heroTalk[sentence].nextTalk;
   }
   if(sentence==selectHero+"DreamPieceGet"){
    var dreamPieceNum=0;
    if(blocks["itemF"].name=="0"){dreamPieceNum++;}
    if(blocks["itemG"].name=="0"){dreamPieceNum++;}
    if(blocks["itemH"].name=="0"){dreamPieceNum++;}
    if(blocks["sweetH"].name=="0"){dreamPieceNum++;}
    dreamPieceNum=4-dreamPieceNum;
    var myh = document.getElementById("dreamPieceNumID");
    myh.innerHTML = dreamPieceNum;
   }
  },lateTime*skipTime);
  if(sentence=="marcosTutorial4"){
   heros["marcos"].usable=1;
  }
  if(sentence=="nikolaEncount2"){
   if(skipTime==1){f_popUpN("null","たまにヒーローの台詞が青文字になっていることがあります。この青文字の部分をクリックするとその台詞に関する補足事項を確認することができます。");}
  }
  if(sentence=="nikolaEncount27"){
   blocks["nikola"].name="0";
   f_stageChange();
   if(skipTime==1){f_popUpN("null","テスラがパーティに加わりました。Spaceキーのメニューからヒーローを切り替えることができます。");}
  }
  if(sentence=="lyricaEncount8"){
   blocks["lyrica"].name="0";
   f_stageChange();
  }
  if(sentence=="lyricaEncount35"){
   if(skipTime==1){f_popUpN("null","リリカがパーティに加わりました。Spaceキーのメニューからヒーローを切り替えることができます。");}
  }
  if(sentence=="aliceEncount14"){
   blocks["alice"].name="0";
   f_stageChange();
  }
  if(sentence=="aliceEncount30"){
   if(skipTime==1){f_popUpN("null","アリスがパーティに加わりました。Spaceキーのメニューからヒーローを切り替えることができます。");}
  }
  if(sentence=="amairoEncount11"){
   blocks["amairo"].name="0";
   f_stageChange();
  }
  if(sentence=="amairoEncount25"){
   if(skipTime==1){f_popUpN("null","甘色がパーティに加わりました。Spaceキーのメニューからヒーローを切り替えることができます。");}
  }
  if(sentence=="pierreEncount9"){
   blocks["pierre"].name="0";
   f_stageChange();
  }
  if(sentence=="pierreEncount29"){
   if(skipTime==1){f_popUpN("null","ピエールがパーティに加わりました。Spaceキーのメニューからヒーローを切り替えることができます。");}
  }
  if(sentence=="thirteenEncount23"){
   blocks["thirteen"].name="0";
   f_stageChange();
  }
  if(sentence=="thirteenEncount26"){
   if(skipTime==1){f_popUpN("null","サーティーンがパーティに加わりました。敵を倒すとHPが回復するようになります。（サーティーン以外選択中でも適用）");}
  }
  if(sentence=="coclicoEncount15"){
   blocks["coclico"].name="0";
   f_stageChange();
   if(skipTime==1){f_popUpN("null","コクリコがパーティに加わりました。マップ画面で各エリアの探索達成率を確認できるようになりました。");}
  }
  if(sentence=="angelEnd7"){
   angelSE.currentTime=0;angelSE.pause();
   angelSE = new Audio('sound/explosion1.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
   var myh = document.getElementById("stageGimmick");
   f_natadecoco(enemyArray[0][0]+0.5,enemyArray[0][1]+0.5,2);
   myh.innerHTML = " ";
   enemyArray=[];
  }
  if(sentence=="dreamPieceClear11"){
   f_stageChange();
  }
  if(sentence=="hamsterClear6"){
   if(blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name=="hamster"){
    blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name="0"
   }
   else if(blocks[selectGimmick[heroPosi[0]][heroPosi[1]-1]].name=="hamster"){
    blocks[selectGimmick[heroPosi[0]][heroPosi[1]-1]].name="0"
   }
   f_stageChange();
  }
  if(sentence==selectHero+"Sweet2"||sentence=="sweetClear12"){
   f_sweet(selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]);
  }
  if(sentence=="marcosTutorial7"){
   event["giraffe"].happen=1;
  }
  if(sentence=="clockGet4"){
   blocks["itemB"].name=0;
  }
  if(sentence==selectHero+"MirrorC2"||sentence=="mirrorClear4"){
   event["mirrorClear"].happen=1;
   if(blocks[selectGimmick[heroPosi[0]][heroPosi[1]+1]].name=="mirror"){heroPosi[1]+=2.5;f_stageChange();}
   else{heroPosi[1]-=2.5;f_stageChange();}
  }
  if(sentence==selectHero+"RockC2"||sentence=="rockGiraffeC7"){
   event["rock_giraffeClear"].happen=1;
   if(blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name=="rock_giraffe"){
    blocks[selectGimmick[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]].name="giraffe"
   }
   else if(blocks[selectGimmick[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]].name=="rock_giraffe"){
    blocks[selectGimmick[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]].name="giraffe"
   }
   f_stageChange();
  }
  if(sentence=="marcosTutorial8"){
   document.documentElement.style.setProperty('--speechBase', "0vh");
   var giraffePosi=[0,0];
   for(var numY=0;selectGimmick.length>numY;numY++){
    for(var numX=0;selectGimmick[numY].length>numX;numX++){
     if(blocks[selectGimmick[numY][numX]].name=="giraffe"){
      var giraffePosi=[numY,numX];
     }
    }
   }
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]);
    myh.innerHTML = "<img src=item/stage/giraffe_greet.png style=width:100%;><style>#selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]+"{position:absolute;top:"+12.5*(giraffePosi[0]-2+1)+"%;left:"+6.9*(giraffePosi[1]-1)+"%;height:"+25+"%;width:"+13.8+"%;}</style>";
   },1000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]);
    myh.innerHTML = "<img src=item/stage/giraffe.png style=width:100%;><style>#selectGimmickX"+giraffePosi[1]+"Y"+giraffePosi[0]+"{position:absolute;top:"+12.5*(giraffePosi[0]-2+1)+"%;left:"+6.9*(giraffePosi[1])+"%;height:"+25+"%;width:"+6.9+"%;}</style>";
   },2000*skipTime);
  }
  if(sentence=="marionetteEnc3"){
   setTimeout(function(){
    marionetteSE = new Audio('sound/powerdown03.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteI.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteI.png style=position:absolute;bottom:-100%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },1000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteI.png style=position:absolute;bottom:-200%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },1500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteF.png style=position:absolute;bottom:-200%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },2000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteA.png style=position:absolute;bottom:-200%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },2500*skipTime);
   setTimeout(function(){
    marionetteSE = new Audio('sound/8bit_magic1.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteB.png style=position:absolute;bottom:-200%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },4000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteC.png style=position:absolute;bottom:-200%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },4500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y4");
    myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:-200%;right:0%;height:600%;width:200%;><style>#selectGimmickX10Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },5000*skipTime);
  }
  if(sentence=="doorClear11"){
   document.documentElement.style.setProperty('--speechBase', "0vh");
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX17Y13");
    myh.innerHTML = "<img src=item/stage/doorA.png style=width:100%;><style>#selectGimmickX17Y13{position:absolute;top:"+12.5*(13-2+1)+"%;left:"+6.9*(17-1+1)+"%;height:"+(12.5*2)+"%;width:"+(6.9*1)+"%;}</style>";
   },500*skipTime);
   setTimeout(function(){
    var doorSE = new Audio('sound/jump10.mp3');doorSE.pause();doorSE.currentTime=0;doorSE.play();
    var myh = document.getElementById("selectGimmickX17Y13");
    myh.innerHTML = "<img src=item/stage/doorB.png style=width:100%;><style>#selectGimmickX17Y13{position:absolute;top:"+12.5*(13-2+1)+"%;left:"+6.9*(17-1+1)+"%;height:"+(12.5*2)+"%;width:"+(6.9*1)+"%;}</style>";
   },1000*skipTime);
   setTimeout(function(){
    var doorSE = new Audio('sound/gear_rotation2.mp3');doorSE.pause();doorSE.currentTime=0;doorSE.play();setTimeout(function(){doorSE.pause();doorSE.currentTime=0;},1500);
    var myh = document.getElementById("selectGimmickX17Y13");
    myh.innerHTML = "<img src=item/stage/doorC.png style=width:100%;><style>#selectGimmickX17Y13{position:absolute;top:"+12.5*(13-2+1)+"%;left:"+6.9*(17-1+1)+"%;height:"+(12.5*2)+"%;width:"+(6.9*1)+"%;}</style>";
   },2000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX17Y13");
    myh.innerHTML = "<img src=item/stage/doorD.png style=width:100%;><style>#selectGimmickX17Y13{position:absolute;top:"+12.5*(13-2+1)+"%;left:"+6.9*(17-1+1)+"%;height:"+(12.5*2)+"%;width:"+(6.9*1)+"%;}</style>";
   },2500*skipTime);
   setTimeout(function(){
    selectGimmick[13][17]="0";
    selectHit[13][17]="0";
    selectHit[12][17]="0";
    blocks["door"].name="0";
    var myh = document.getElementById("selectGimmickX17Y13");
    myh.innerHTML = " ";
   },3000*skipTime);
  }
  if(sentence=="skeletonEnc2"){
   setTimeout(function(){
    skeletonSE = new Audio('sound/powerdown03.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();
    var myh = document.getElementById("selectGimmickX10Y6");
    myh.innerHTML = "<img src=item/stage/skeletonB.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;><style>#selectGimmickX10Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },1000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y6");
    myh.innerHTML = "<img src=item/stage/skeletonC.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;><style>#selectGimmickX10Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },2000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX10Y6");
    myh.innerHTML = "<img src=item/stage/skeletonA.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;><style>#selectGimmickX10Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },3000*skipTime);
  }
  if(sentence=="princessEnc3"){
   setTimeout(function(){
    princessSE = new Audio('sound/powerdown03.mp3');princessSE.pause();princessSE.currentTime=0;princessSE.play();
    var myh = document.getElementById("selectGimmickX9Y6");
    myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:30%;width:300%;><style>#selectGimmickX9Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*9+"%;height:12.5%;width:6.9%;}</style>";
   },1000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX9Y6");
    myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:80%;width:300%;><style>#selectGimmickX9Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*9+"%;height:12.5%;width:6.9%;}</style>";
   },1500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX9Y6");
    myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:150%;width:300%;><style>#selectGimmickX9Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*9+"%;height:12.5%;width:6.9%;}</style>";
   },2000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX9Y6");
    myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:70%;width:300%;><style>#selectGimmickX9Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*9+"%;height:12.5%;width:6.9%;}</style>";
   },2500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX9Y6");
    myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX9Y6{position:absolute;top:"+12.5*6+"%;left:"+6.9*9+"%;height:12.5%;width:6.9%;}</style>";
   },3000*skipTime);
  }
  if(sentence=="marcosTutorial9"){
   if(skipTime==1){f_popUpN("null","「ぴんくのきりん」がいるところでは休憩ができます。休憩中は雑談や装備変更、データベースの確認ができます。また休憩するとHPが全快します。本ゲームの進行状況のセーブも休憩したタイミングで行われます。そのためゲーム終了前に「ぴんくのきりん」に寄ることを強く推奨します。");}
  }
  if(sentence=="niziiroEnd7"||sentence=="lurucaEnd18"||sentence=="angelEnd9"){
   setTimeout(function(){f_whiteScreen(0.3);},500*skipTime);
   setTimeout(function(){f_whiteScreen(0.6);},1000*skipTime);
   setTimeout(function(){f_whiteScreen(1);f_stageChange();},1500*skipTime);
   setTimeout(function(){f_whiteScreen(0.5);},3000*skipTime);
   setTimeout(function(){f_whiteScreen(0);},3500*skipTime);
  }
  if(sentence=="LBend9"){
   dreamSE = new Audio('sound/silent_ending.mp3');dreamSE.pause();dreamSE.currentTime=0;dreamSE.play();dreamSE.volume=0.5;
   setTimeout(function(){f_whiteScreen(0.2);dreamSE.volume=0.3;},500*skipTime);
   setTimeout(function(){f_whiteScreen(0.4);dreamSE.volume=0.1;},1000*skipTime);
   setTimeout(function(){f_whiteScreen(0.6);dreamSE.pause();dreamSE.currentTime=0;},1500*skipTime);
  }
  if(sentence=="LBend22"){
   dreamSE = new Audio('sound/silent_ending.mp3');dreamSE.pause();dreamSE.currentTime=0;dreamSE.play();dreamSE.volume=0.5;
   setTimeout(function(){f_whiteScreen(0.7);dreamSE.volume=0.4;},500*skipTime);
   setTimeout(function(){f_whiteScreen(0.8);dreamSE.volume=0.3;},1000*skipTime);
   setTimeout(function(){f_whiteScreen(0.9);dreamSE.volume=0.2;},1500*skipTime);
   setTimeout(function(){f_whiteScreen(1);dreamSE.pause();dreamSE.currentTime=0;},2000*skipTime);
  }
  if(sentence=="LBenc5"){
   lastBossSE1 = new Audio('sound/silent_ending.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();setTimeout(function(){lastBossSE1.pause();lastBossSE1.currentTime=0;},3000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossL.png style=position:absolute;top:-35%;opacity:0.2;width:300%;><img src=item/stage/mother.png style=position:absolute;bottom:-100%;left:105%;width:90%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectGimmickX11Y3");
    myh.innerHTML = " ";
    var myh = document.getElementById("selectFrontX10Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.8;width:100%;><style>#selectFrontX"+10+"Y4{position:absolute;top:50%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectFrontX11Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.8;width:100%;><style>#selectFrontX"+11+"Y4{position:absolute;top:50%;left:"+6.9*11+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectFrontX12Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.8;width:100%;><style>#selectFrontX"+12+"Y4{position:absolute;top:50%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
   },500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossL.png style=position:absolute;top:-35%;opacity:0.5;width:300%;><img src=item/stage/mother.png style=position:absolute;bottom:-100%;left:110%;width:80%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectGimmickX11Y3");
    myh.innerHTML = " ";
    var myh = document.getElementById("selectFrontX10Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.5;width:100%;><style>#selectFrontX"+10+"Y4{position:absolute;top:50%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectFrontX11Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.5;width:100%;><style>#selectFrontX"+11+"Y4{position:absolute;top:50%;left:"+6.9*11+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectFrontX12Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.5;width:100%;><style>#selectFrontX"+12+"Y4{position:absolute;top:50%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
   },1000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossL.png style=position:absolute;top:-35%;opacity:0.8;width:300%;><img src=item/stage/mother.png style=position:absolute;bottom:-100%;left:115%;width:70%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectGimmickX11Y3");
    myh.innerHTML = " ";
    var myh = document.getElementById("selectFrontX10Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.3;width:100%;><style>#selectFrontX"+10+"Y4{position:absolute;top:50%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectFrontX11Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.3;width:100%;><style>#selectFrontX"+11+"Y4{position:absolute;top:50%;left:"+6.9*11+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectFrontX12Y4");
    myh.innerHTML = "<img src=item/stage/blockA.png style=opacity:0.3;width:100%;><style>#selectFrontX"+12+"Y4{position:absolute;top:50%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
   },1500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossL.png style=position:absolute;top:-35%;opacity:1;width:300%;><img src=item/stage/mother.png style=position:absolute;bottom:-100%;left:120%;width:60%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
    var myh = document.getElementById("selectGimmickX11Y3");
    myh.innerHTML = " ";
    var myh = document.getElementById("selectFrontX10Y4");
    myh.innerHTML = " ";
    var myh = document.getElementById("selectFrontX11Y4");
    myh.innerHTML = " ";
    var myh = document.getElementById("selectFrontX12Y4");
    myh.innerHTML = " ";
   },2000*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossL.png style=position:absolute;top:-35%;opacity:1;width:300%;><img src=item/stage/mother.png style=position:absolute;bottom:-100%;left:125%;width:50%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },2500*skipTime);
   setTimeout(function(){
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossL.png style=position:absolute;top:-35%;opacity:1;width:300%;><img src=item/stage/mother.png style=position:absolute;bottom:-100%;left:130%;width:40%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },3000*skipTime);
   setTimeout(function(){
    lastBossSE1 = new Audio('sound/8bit_magic1.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();
    var myh = document.getElementById("selectGimmickX12Y4");
    myh.innerHTML = "<img src=item/stage/lastBossA.png style=position:absolute;top:-35%;opacity:1;width:300%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*2+"%;left:"+6.9*10+"%;height:12.5%;width:6.9%;}</style>";
   },4000*skipTime);
  }
  if(sentence=="LBenc10"){
   heroPosi=[6,3];
  }
  if(sentence==selectHero+"Item2"){
   var itemPosi=[0,0];
   for(var numY=0;selectGimmick.length>numY;numY++){
    for(var numX=0;selectGimmick[numY].length>numX;numX++){
     if(blocks[selectGimmick[numY][numX]].name=="item"){
      var itemPosi=[numY,numX];
     }
    }
   }
   if(skipTime==1){f_popUpN("null","「"+blocks[selectGimmick[itemPosi[0]][itemPosi[1]]].item+"」を入手しました。「ぴんくのきりん」で休憩中にアイテムを装備できます。");}
   if(sentence!="coclicoItem2"){
    blocks[selectGimmick[itemPosi[0]][itemPosi[1]]].name=0;
   }
  }
 }
 if(skipTime==0){setTimeout(function(){f_speech(enterKeySentence);},100);}
}

function f_HPcheck(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="marionette"){
   if(Math.abs(enemyArray[elem][0]-0.5-heroPosi[0])<1&&Math.abs(enemyArray[elem][1]-0.5-heroPosi[1])<1.5){f_damage(enemies["marionette"].attack);}
  }
 }
 if(selectEquipment=="ねこよりとろけるメロン"){
  playerHP_1+=0.1;
 }
 if(playerHP_1>=MaxHP){
  playerHP_1=MaxHP;
 }
 var HPbar=playerHP_1/MaxHP*100;
 document.documentElement.style.setProperty('--playerHP_1', HPbar+"%");
 
 if(playerHP_1<=0){
  var SE = new Audio('sound/powerdown07.mp3');SE.pause();SE.currentTime=0;SE.play();
  timeStop=1;
  heroActControl=1;
  var myh = document.getElementById("player1Base");
  myh.innerHTML = " ";
  f_natadecoco(heroPosi[0]+0.5,heroPosi[1]+0.5,2);
  setTimeout(function(){
   document.documentElement.style.setProperty('--bossHPheight', 0+"%");
   var myh = document.getElementById("bossName");
   myh.innerHTML = " ";
   heroPosi=[restPosi[0],restPosi[1]];
   selectStage=restPosi[2];
   playerHP_1=MaxHP;
   f_HPcheck();
   f_stageChange();
  },4000);
 }
}

function f_natadecoco(posiY,posiX,size){
 var myh=document.createElement('div');
 myh.setAttribute('id',"natadecocoX"+posiX+"Y"+posiY);
 myh.setAttribute('style',"position:absolute;top:0%;left:0%;height:100%;width:100%;");
 var parentDiv = document.getElementById("stageFront");
 parentDiv.appendChild(myh);
 var myh = document.getElementById("natadecocoX"+posiX+"Y"+posiY);
 myh.innerHTML = "<img src=item/stage/natadecoco1.png style=position:absolute;top:"+(posiY-size+1)*12.5+"%;left:"+(posiX-size+1)*6.9+"%;width:"+6.9*size+"%;>";
 setTimeout(function(){
  var myh = document.getElementById("natadecocoX"+posiX+"Y"+posiY);
  myh.innerHTML = "<img src=item/stage/natadecoco2.png style=position:absolute;top:"+(posiY-size+1)*12.5+"%;left:"+(posiX-size+1)*6.9+"%;width:"+6.9*size+"%;>";
  setTimeout(function(){
   var myh = document.getElementById("natadecocoX"+posiX+"Y"+posiY);
   myh.innerHTML = "<img src=item/stage/natadecoco3.png style=position:absolute;top:"+(posiY-size+1)*12.5+"%;left:"+(posiX-size+1)*6.9+"%;width:"+6.9*size+"%;>";
   setTimeout(function(){
    var myh = document.getElementById("natadecocoX"+posiX+"Y"+posiY);
    myh.innerHTML = " ";
   },500*size);
  },500*size);
 },500*size);
}

function f_bossAct(actA,actB,actC,name){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]==name){
   if(bossAct%4==0){
    bossAct=Math.floor(Math.random()*6)*4;
    bossAct+=1;
   }
   switch(bossAct){
    case 1:
     enemyArray[elem][3]=actA;
    break;
    case 2:
     enemyArray[elem][3]=actB;
    break;
    case 3:
     enemyArray[elem][3]=actC;
    break;
    case 5:
     enemyArray[elem][3]=actA;
    break;
    case 6:
     enemyArray[elem][3]=actC;
    break;
    case 7:
     enemyArray[elem][3]=actB;
    break;
    case 9:
     enemyArray[elem][3]=actB;
    break;
    case 10:
     enemyArray[elem][3]=actA;
    break;
    case 11:
     enemyArray[elem][3]=actC;
    break;
    case 13:
     enemyArray[elem][3]=actB;
    break;
    case 14:
     enemyArray[elem][3]=actC;
    break;
    case 15:
     enemyArray[elem][3]=actA;
    break;
    case 17:
     enemyArray[elem][3]=actC;
    break;
    case 18:
     enemyArray[elem][3]=actA;
    break;
    case 19:
     enemyArray[elem][3]=actB;
    break;
    case 21:
     enemyArray[elem][3]=actC;
    break;
    case 22:
     enemyArray[elem][3]=actB;
    break;
    case 23:
     enemyArray[elem][3]=actA;
    break;
   }
   bossAct+=1;
  }
 }
}

function f_rabit(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="rabit"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    if(Math.round(enemyArray[elem][3]*10)%10==0&&Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){
     var bombSE = new Audio('sound/jump10.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
     enemyArray[elem][3]+=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/rabitB.png style=width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else if(Math.round(enemyArray[elem][3]*10)%10==1){
     enemyArray[elem][3]+=0.1;
     var bombSE = new Audio('sound/powerdown03.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/rabitC.png style=width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0]-1)+"%;left:"+6.9*(enemyArray[elem][1]-1)+"%;height:25%;width:20.7%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){
      f_damage(enemies["rabit"].attack);
     }
    }
    else if(Math.round(enemyArray[elem][3]*10)%10==2){
     enemyArray[elem][3]-=0.2;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/rabitB.png style=width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else{
     if(Math.round(enemyArray[elem][3]*10)/10<8){
      enemyArray[elem][1]-=0.5;
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10==8){
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10<17){
      enemyArray[elem][1]+=0.5;
      enemyArray[elem][3]+=1;
     }
     else{
      enemyArray[elem][3]=0;
     }
     var directionR=1;
     if(enemyArray[elem][3]>8){directionR=-1;}
      var myh=document.createElement('div');
      myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      var parentDiv = document.getElementById("stageGimmick");
      parentDiv.appendChild(myh);
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     if(enemyArray[elem][1]%1==0){
      myh.innerHTML = "<img src=item/stage/rabit.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
     else{
      myh.innerHTML = "<img src=item/stage/rabitA.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
    }
   }
  }
 }
}

function f_rabitEX(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="rabitEX"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    if(Math.round(enemyArray[elem][3]*10)%10==0&&Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){
     var bombSE = new Audio('sound/jump10.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
     enemyArray[elem][3]+=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/rabitEXB.png style=width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else if(Math.round(enemyArray[elem][3]*10)%10==1){
     var bombSE = new Audio('sound/powerdown03.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
     enemyArray[elem][3]+=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/rabitEXC.png style=width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0]-1)+"%;left:"+6.9*(enemyArray[elem][1]-1)+"%;height:25%;width:20.7%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){
      f_damage(enemies["rabitEX"].attack);
     }
    }
    else if(Math.round(enemyArray[elem][3]*10)%10==2){
     enemyArray[elem][3]-=0.2;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/rabitEXB.png style=width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else{
     if(Math.round(enemyArray[elem][3]*10)/10<8){
      enemyArray[elem][1]-=0.5;
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10==8){
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10<17){
      enemyArray[elem][1]+=0.5;
      enemyArray[elem][3]+=1;
     }
     else{
      enemyArray[elem][3]=0;
     }
     var directionR=1;
     if(enemyArray[elem][3]>8){directionR=-1;}
      var myh=document.createElement('div');
      myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      var parentDiv = document.getElementById("stageGimmick");
      parentDiv.appendChild(myh);
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     if(enemyArray[elem][1]%1==0){
      myh.innerHTML = "<img src=item/stage/rabitEX.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
     else{
      myh.innerHTML = "<img src=item/stage/rabitEXA.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
    }
   }
  }
 }
}

function f_bear(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="bear"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    var directionR=1;
    if(enemyArray[elem][3]>8){directionR=-1;}
    if(Math.round(enemyArray[elem][3]*10)%10==0&&Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
     enemyArray[elem][3]+=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/bearB.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else if(Math.round(enemyArray[elem][3]*10)%10==1){
     var bombSE = new Audio('sound/crash.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
     enemyArray[elem][3]-=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/bearC.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
      f_damage(enemies["bear"].attack);
     }
    }
    else{
     if(Math.round(enemyArray[elem][3]*10)/10<8){
      enemyArray[elem][1]-=0.5;
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10==8){
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10<17){
      enemyArray[elem][1]+=0.5;
      enemyArray[elem][3]+=1;
     }
     else{
      enemyArray[elem][3]=0;
     }
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     if(enemyArray[elem][1]%1==0){
      myh.innerHTML = "<img src=item/stage/bear.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
     else{
      myh.innerHTML = "<img src=item/stage/bearA.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
    }
   }
  }
 }
}

function f_bearEX(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="bearEX"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    var directionR=1;
    if(enemyArray[elem][3]>8){directionR=-1;}
    if(Math.round(enemyArray[elem][3]*10)%10==0&&Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
     enemyArray[elem][3]+=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/bearEXB.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else if(Math.round(enemyArray[elem][3]*10)%10==1){
     var bombSE = new Audio('sound/crash.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
     enemyArray[elem][3]-=0.1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/bearEXC.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
      f_damage(enemies["bearEX"].attack);
     }
    }
    else{
     if(Math.round(enemyArray[elem][3]*10)/10<8){
      enemyArray[elem][1]-=0.5;
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10==8){
      enemyArray[elem][3]+=1;
     }
     else if(Math.round(enemyArray[elem][3]*10)/10<17){
      enemyArray[elem][1]+=0.5;
      enemyArray[elem][3]+=1;
     }
     else{
      enemyArray[elem][3]=0;
     }
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     if(enemyArray[elem][1]%1==0){
      myh.innerHTML = "<img src=item/stage/bearEX.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
     else{
      myh.innerHTML = "<img src=item/stage/bearEXA.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     }
    }
   }
  }
 }
}

function f_sheep(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="sheep"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    if(Math.round(enemyArray[elem][3]*10)/10<8){
     enemyArray[elem][1]-=0.5;
     enemyArray[elem][3]+=1;
    }
    else if(Math.round(enemyArray[elem][3]*10)/10==8){
     enemyArray[elem][3]+=1;
    }
    else if(Math.round(enemyArray[elem][3]*10)/10<17){
     enemyArray[elem][1]+=0.5;
     enemyArray[elem][3]+=1;
    }
    else{
     enemyArray[elem][3]=0;
    }
    var directionR=1;
    if(enemyArray[elem][3]>8){directionR=-1;}
    var myh=document.createElement('div');
    myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    var parentDiv = document.getElementById("stageGimmick");
    parentDiv.appendChild(myh);
    
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    if(enemyArray[elem][1]%1==0){
     myh.innerHTML = "<img src=item/stage/sheep.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    else{
     myh.innerHTML = "<img src=item/stage/sheepA.png style=width:100%;transform:scale("+directionR+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    }
    if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
     f_damage(enemies["sheep"].attack);
    }
   }
  }
 }
}

function f_devil(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="devil"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    switch(enemyArray[elem][3]){
     case 0:
      if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=2.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=2.5){
       var bombSE = new Audio('sound/8bit_magic1.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
       var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
       myh.innerHTML = "<img src=item/stage/devil.png style=position:absolute;opacity:0.5;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
       enemyArray[elem][3]=1;
      }
      else{
       var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
       myh.innerHTML = " ";
      }
     break;
     case 1:
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/devil.png style=position:absolute;opacity:1;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){
       enemyArray[elem][3]=2;
      }
      else if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=2.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=2.5){
       enemyArray[elem][3]=1;
      }
      else{
       var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
       myh.innerHTML = "<img src=item/stage/devil.png style=position:absolute;opacity:0.5;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
       enemyArray[elem][3]=0;
      }
     break;
     case 2:
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/devilA.png style=position:absolute;opacity:0.2;top:-100%;left:-100%;height:300%;width:300%;><img src=item/stage/devil.png style=position:absolute;opacity:1;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      enemyArray[elem][3]=3;
     break;
     case 3:
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/devilA.png style=position:absolute;opacity:0.5;top:-100%;left:-100%;height:300%;width:300%;><img src=item/stage/devil.png style=position:absolute;opacity:1;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      enemyArray[elem][3]=4;
     break;
     case 4:
      var bombSE = new Audio('sound/encounter.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/devilA.png style=position:absolute;opacity:1;top:-100%;left:-100%;height:300%;width:300%;><img src=item/stage/devil.png style=position:absolute;opacity:1;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){
       f_damage(enemies["devil"].attack);
      }
      enemyArray[elem][3]=5;
     break;
     case 5:
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/devil.png style=position:absolute;opacity:1;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      enemyArray[elem][3]=1;
     break;
    }
   }
  }
 }
}

function f_omochi(){
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="omochi"){
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],1);
    enemyArray.splice(elem,1);
   }
   else{
    switch(enemyArray[elem][3]){
     case 0:
      if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
       var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
       myh.innerHTML = "<img src=item/stage/omochiA.png style=position:absolute;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
       enemyArray[elem][3]=1;
      }
      else{
       var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
       myh.innerHTML = "<img src=item/stage/omochi.png style=position:absolute;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      }
     break;
     case 1:
      var bombSE = new Audio('sound/jump10.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/omochiA.png style=position:absolute;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      enemyArray[elem][3]=2;
     break;
     case 2:
      var bombSE = new Audio('sound/g_robot_punch1.mp3');bombSE.pause();bombSE.currentTime=0;bombSE.play();
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/omochiB.png style=position:absolute;top:0%;left:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      enemyArray[elem][3]=0;
      if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){
       f_damage(enemies["omochi"].attack);
      }
     break;
    }
   }
  }
 }
}

//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...

function f_marionette(){
 var marionetteHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="marionetteA"){
   marionetteHP+=enemyArray[elem][2];
  }
  if(enemyArray[elem][4]=="marionette"){
   marionetteHP+=enemyArray[elem][2];
   if(marionetteHP-(enemies["marionette"].HP*3)<=0){enemyArray[elem][2]=0;}
   else{enemyArray[elem][2]=marionetteHP-(enemies["marionette"].HP*3);}
   
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    marionetteSE.currentTime=0;marionetteSE.pause();
    marionetteSE = new Audio('sound/explosion1.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["marionette"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　茨のマリオネット";
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],2);
    enemyArray.splice(elem,1);
    setTimeout(function(){
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["marionette"].happen=1;
     blocks["eventBlockA"].name="0";
     blocks["itemF"].name="item";
     blocks["marionetteB"].name="0";
     setTimeout(function(){
      f_stageChange();
      setTimeout(function(){f_speech("marionetteEnd1");},500);
     },500);
    },3000);
   }
   else{
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["marionette"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　茨のマリオネット";
    if(enemyArray[elem][3]==-5||enemyArray[elem][3]==-4){
     if(enemyArray[elem][3]==-5){marionetteSE = new Audio('sound/powerdown03.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==-3){
     enemyArray[elem][0]=6;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteF.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==-2||enemyArray[elem][3]==-1){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteA.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==0||enemyArray[elem][3]==1){
     enemyArray[elem][0]=6;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteA.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==2||enemyArray[elem][3]==3){
     if(enemyArray[elem][3]==2){marionetteSE = new Audio('sound/8bit_magic1.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteB.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==4||enemyArray[elem][3]==5){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteC.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==6||enemyArray[elem][3]==7){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==8){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     f_bossAct(11,41,61,"marionette");
     if(enemyArray[elem][3]==11){
      if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=11;}
      else{enemyArray[elem][3]=21;}
     }
     /*switch(Math.floor(Math.random()*3)){
      case 0:
       if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=11;}
       else{enemyArray[elem][3]=21;}
      break;
      case 1:
       enemyArray[elem][3]=41;
      break;
      case 2:
       enemyArray[elem][3]=61;
      break;
     }*/
     //enemyArray[elem][3]=61;
    }
    else if(enemyArray[elem][3]>=11&&enemyArray[elem][3]<=20){
     if(enemyArray[elem][3]==11){marionetteSE = new Audio('sound/8bit_magic1.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();}
     if(enemyArray[elem][1]>4){enemyArray[elem][1]-=1;}
     else{
      enemyArray[elem][1]=4;
     }
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteG.png style=position:absolute;bottom:0%;right:0%;height:600%;width:600%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(enemyArray[elem][3]<15){
      enemyArray[elem][3]+=1;
     }
     else{
      enemyArray[elem][3]=-3;
     }
    }
    else if(enemyArray[elem][3]>=21&&enemyArray[elem][3]<=30){
     if(enemyArray[elem][3]==21){marionetteSE = new Audio('sound/8bit_magic1.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();}
     if(enemyArray[elem][1]<18){enemyArray[elem][1]+=1;}
     else{enemyArray[elem][1]=18;}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteG.png style=position:absolute;bottom:0%;right:-300%;height:600%;width:600%;transform:scale(-1,1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(enemyArray[elem][3]<25){
      enemyArray[elem][3]+=1;
     }
     else{
      enemyArray[elem][3]=-3;
     }
    }
    else if(enemyArray[elem][3]==41||enemyArray[elem][3]==42){
     if(enemyArray[elem][3]==41){marionetteSE1 = new Audio('sound/silent_ending.mp3');marionetteSE1.pause();marionetteSE1.currentTime=0;marionetteSE1.play();setTimeout(function(){marionetteSE1.pause();marionetteSE1.currentTime=0;},2400);}
     enemyArray[elem][0]=5;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==43||enemyArray[elem][3]==44||enemyArray[elem][3]==45||enemyArray[elem][3]==46||enemyArray[elem][3]==47){
     enemyArray[elem][0]=5;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:33%;height:150%;width:34%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:333%;height:150%;width:34%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:633%;height:150%;width:34%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:933%;height:150%;width:34%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:1233%;height:150%;width:34%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:1533%;height:150%;width:34%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";

     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
     if(enemyArray[elem][3]==47){marionetteSE.pause();marionetteSE.currentTime=0;}
    }
    else if(enemyArray[elem][3]==48||enemyArray[elem][3]==49){
     if(enemyArray[elem][3]==48){marionetteSE = new Audio('sound/encounter.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:0%;height:600%;width:100%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:300%;height:600%;width:100%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:600%;height:600%;width:100%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:900%;height:600%;width:100%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:1200%;height:600%;width:100%;><img src=item/stage/marionetteH.png style=position:absolute;bottom:0%;left:1500%;height:600%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[1]==3||heroPosi[1]==3.5||heroPosi[1]==5.5||heroPosi[1]==6||heroPosi[1]==6.5||heroPosi[1]==8.5||heroPosi[1]==9||heroPosi[1]==9.5||heroPosi[1]==11.5||heroPosi[1]==12||heroPosi[1]==12.5||heroPosi[1]==14.5||heroPosi[1]==15||heroPosi[1]==15.5||heroPosi[1]==17.5||heroPosi[1]==18){
      f_damage(enemies["marionette"].attack);
     }

     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteD.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==50){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = " ";
     
     enemyArray[elem][0]=5.5;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/marionetteI.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=-3;
    }
    else if(enemyArray[elem][3]==61||enemyArray[elem][3]==62){
     if(enemyArray[elem][3]==61){marionetteSE = new Audio('sound/silent_ending.mp3');marionetteSE.pause();marionetteSE.currentTime=0;marionetteSE.play();setTimeout(function(){marionetteSE.pause();marionetteSE.currentTime=0;},3300);}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteE.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=63&&enemyArray[elem][3]<68){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionette"+Math.floor(enemyArray[elem][3])+".png style=position:absolute;bottom:-200%;right:-200%;height:600%;width:600%;><img src=item/stage/marionetteE.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=0.5;
     if(heroPosi[1]<enemyArray[elem][1]){heroPosi[1]+=0.5;}
     else if(heroPosi[1]>enemyArray[elem][1]){heroPosi[1]-=0.5;}
     f_heroMove();
     setTimeout(function(){
      if(heroPosi[1]<enemyArray[elem][1]){heroPosi[1]+=0.5;}
      else if(heroPosi[1]>enemyArray[elem][1]){heroPosi[1]-=0.5;}
      f_heroMove();
     },200);
    }
    else if(enemyArray[elem][3]==68){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionette65.png style=position:absolute;bottom:-200%;right:-200%;height:600%;width:600%;><img src=item/stage/marionetteE.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==69){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/marionetteE.png style=position:absolute;bottom:0%;right:0%;height:600%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=-5;
    }
    
    var marionettePosi=[enemyArray[elem][0],enemyArray[elem][1],enemyArray[elem][2],enemyArray[elem][3],enemyArray[elem][4]];
    enemyArray=[[enemyArray[elem][0]-1,enemyArray[elem][1]-1,enemies["marionette"].HP,enemyArray[elem][3],"marionetteA"],[enemyArray[elem][0]-1,enemyArray[elem][1],enemies["marionette"].HP,enemyArray[elem][3],"marionetteA"],[enemyArray[elem][0],enemyArray[elem][1]-1,enemies["marionette"].HP,enemyArray[elem][3],"marionetteA"],[enemyArray[elem][0],enemyArray[elem][1],enemyArray[elem][2],enemyArray[elem][3],enemyArray[elem][4]]];
   }
  }
 }
}

//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...

function f_skeleton(){
 var skeletonHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="skeletonA"){
   skeletonHP+=enemyArray[elem][2];
  }
  if(enemyArray[elem][4]=="skeleton"){
   skeletonHP+=enemyArray[elem][2];
   if(skeletonHP-(enemies["skeleton"].HP*3)<=0){enemyArray[elem][2]=0;}
   else{enemyArray[elem][2]=skeletonHP-(enemies["skeleton"].HP*3);}
   
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
   myh.innerHTML = " ";
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    skeletonSE.currentTime=0;skeletonSE.pause();
    skeletonSE = new Audio('sound/explosion1.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["skeleton"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　髑髏";
    f_natadecoco(enemyArray[elem][0],enemyArray[elem][1],2);
    enemyArray.splice(elem,1);
    setTimeout(function(){
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["skeleton"].happen=1;
     blocks["eventBlockB"].name="0";
     blocks["itemG"].name="item";
     blocks["skeletonB"].name="0";
     setTimeout(function(){
      f_stageChange();
      setTimeout(function(){f_speech("skeletonEnd1");},500);
     },500);
    },3000);
   }
   else{
    var skeletonDire=1;
    if(heroPosi[1]>enemyArray[elem][1]){skeletonDire=-1;}
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["skeleton"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　髑髏";
    if(enemyArray[elem][3]==-2||enemyArray[elem][3]==-1){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonB.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==0||enemyArray[elem][3]==1){
     if(enemyArray[elem][3]==0){skeletonSE = new Audio('sound/powerdown03.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonB.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==2||enemyArray[elem][3]==3){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonC.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==4||enemyArray[elem][3]==5){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonA.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==6){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonA.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     f_bossAct(11,61,91,"skeleton");
     if(enemyArray[elem][3]==11){
      if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=11;}
      else{enemyArray[elem][3]=41;}
     }
     /*switch(Math.floor(Math.random()*3)){
      case 0:
       if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=11;}
       else{enemyArray[elem][3]=41;}
      break;
      case 1:
       enemyArray[elem][3]=61;
      break;
      case 2:
       enemyArray[elem][3]=91;
      break;
     }*/
     //enemyArray[elem][3]=91;
    }
    else if(enemyArray[elem][3]==11||enemyArray[elem][3]==12){
     if(enemyArray[elem][3]==11){skeletonSE = new Audio('sound/powerdown03.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonB.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;><img src=item/stage/skeletonH.png style=position:absolute;bottom:0%;right:-120%;height:200%;width:200%;transform:rotate(0deg);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=13&&enemyArray[elem][3]<=35){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonH.png style=position:absolute;bottom:0%;right:"+100*(enemyArray[elem][3]-13)+"%;height:200%;width:200%;transform:rotate("+(enemyArray[elem][3]-13)*45+"deg);><img src=item/stage/skeletonC.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     var bonePosi=enemyArray[elem][1]-(enemyArray[elem][3]-13);
     if(Math.abs(heroPosi[0]-enemyArray[elem][0])<2&&Math.abs(heroPosi[1]-bonePosi)<2){f_damage(enemies["skeleton"].attack);}
     if(bonePosi>3){
      enemyArray[elem][3]+=1;
      setTimeout(function(){f_skeleton();},200);
     }else{enemyArray[elem][3]=-2;}
    }
    else if(enemyArray[elem][3]==41||enemyArray[elem][3]==42){
     if(enemyArray[elem][3]==41){skeletonSE = new Audio('sound/powerdown03.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonB.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale(-1,1);><img src=item/stage/skeletonH.png style=position:absolute;bottom:0%;right:120%;height:200%;width:200%;transform:rotate(90deg);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=43&&enemyArray[elem][3]<=55){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonH.png style=position:absolute;bottom:0%;right:-"+100*(enemyArray[elem][3]-43)+"%;height:200%;width:200%;transform:rotate("+(enemyArray[elem][3]-13)*45+"deg);><img src=item/stage/skeletonC.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale(-1,1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     var bonePosi=enemyArray[elem][1]+(enemyArray[elem][3]-43);
     if(Math.abs(heroPosi[0]-enemyArray[elem][0])<2&&Math.abs(heroPosi[1]-bonePosi)<2){f_damage(enemies["skeleton"].attack);}
     if(bonePosi<20){
      enemyArray[elem][3]+=1;
      setTimeout(function(){f_skeleton();},200);
     }else{enemyArray[elem][3]=-2;}
    }
    else if(enemyArray[elem][3]==61||enemyArray[elem][3]==62){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonD.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=63&&enemyArray[elem][3]<=67){
     if(enemyArray[elem][3]==63){skeletonSE = new Audio('sound/jump10.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     enemyArray[elem][0]-=1;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonE.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-0.5-heroPosi[0])<1&&Math.abs(enemyArray[elem][1]-0.5-heroPosi[1])<1.5){f_damage(enemies["skeleton"].attack);}
     enemyArray[elem][3]+=1;
     if(enemyArray[elem][3]<68){
      setTimeout(function(){f_skeleton();},200);
     }
    }
    else if(enemyArray[elem][3]>=68&&enemyArray[elem][3]<=78){
     if(heroPosi[1]>enemyArray[elem][1]){enemyArray[elem][1]+=1;}
     else{enemyArray[elem][1]-=1;}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonE.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=79&&enemyArray[elem][3]<=83){
     enemyArray[elem][0]+=1;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonE.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-0.5-heroPosi[0])<1&&Math.abs(enemyArray[elem][1]-0.5-heroPosi[1])<1.5){f_damage(enemies["skeleton"].attack);}
     enemyArray[elem][3]+=1;
     setTimeout(function(){f_skeleton();},200);
    }
    else if(enemyArray[elem][3]==84||enemyArray[elem][3]==85||enemyArray[elem][3]==86){
     if(enemyArray[elem][3]==84){skeletonSE = new Audio('sound/g_robot_punch1.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonL.png style=position:absolute;bottom:0%;right:-50%;height:200%;width:300%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(enemyArray[elem][3]>=86){enemyArray[elem][3]=-2;}
     else{enemyArray[elem][3]+=1;}
    }
    else if(enemyArray[elem][3]==91||enemyArray[elem][3]==92){
     if(enemyArray[elem][3]==91){skeletonSE = new Audio('sound/powerdown03.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonF.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==93){
     if(enemyArray[elem][3]==93){skeletonSE = new Audio('sound/crash.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var SattackPosi=enemyArray[elem][1]-heroPosi[1];
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonI.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(SattackPosi>=0){enemyArray[elem][3]=SattackPosi/100+100;}
     else{enemyArray[elem][3]=(-1*SattackPosi)/100+200;}
    }
    else if(enemyArray[elem][3]>=100&&enemyArray[elem][3]<102){
     var SattackPosi=(enemyArray[elem][3]-Math.floor(enemyArray[elem][3]))*100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonJ.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=102&&enemyArray[elem][3]<104){
     if(enemyArray[elem][3]>=102&&enemyArray[elem][3]<=103){skeletonSE = new Audio('sound/g_robot_punch1.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var SattackPosi=(enemyArray[elem][3]-Math.floor(enemyArray[elem][3]))*100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonK.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-0.5-heroPosi[0])<1&&Math.abs(SattackPosi-0.5-heroPosi[1])<1.5){f_damage(enemies["skeleton"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=104&&enemyArray[elem][3]<106){
     var SattackPosi=(enemyArray[elem][3]-Math.floor(enemyArray[elem][3]))*100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonI.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(enemyArray[elem][3]<106){enemyArray[elem][3]=-2;}else{enemyArray[elem][3]+=1;}
    }
    else if(enemyArray[elem][3]>=200&&enemyArray[elem][3]<202){
     var SattackPosi=-1*(enemyArray[elem][3]-Math.floor(enemyArray[elem][3]))*100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonJ.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=202&&enemyArray[elem][3]<204){
     if(enemyArray[elem][3]>=202&&enemyArray[elem][3]<=203){skeletonSE = new Audio('sound/g_robot_punch1.mp3');skeletonSE.pause();skeletonSE.currentTime=0;skeletonSE.play();}
     var SattackPosi=-1*(enemyArray[elem][3]-Math.floor(enemyArray[elem][3]))*100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonK.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-0.5-heroPosi[0])<1&&Math.abs(-SattackPosi+enemyArray[elem][1]-0.5-heroPosi[1])<1.5){f_damage(enemies["skeleton"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=204&&enemyArray[elem][3]<206){
     var SattackPosi=-1*(enemyArray[elem][3]-Math.floor(enemyArray[elem][3]))*100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/skeletonI.png style=position:absolute;bottom:0%;right:"+SattackPosi*100+"%;height:200%;width:200%;><img src=item/stage/skeletonG.png style=position:absolute;bottom:0%;right:0%;height:200%;width:200%;transform:scale("+skeletonDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(enemyArray[elem][3]<206){enemyArray[elem][3]=-2;}else{enemyArray[elem][3]+=1;}
    }
    else{enemyArray[elem][3]=-2;}
    
    var skeletonPosi=[enemyArray[elem][0],enemyArray[elem][1],enemyArray[elem][2],enemyArray[elem][3],enemyArray[elem][4]];
    enemyArray=[[enemyArray[elem][0]-1,enemyArray[elem][1]-1,enemies["skeleton"].HP,enemyArray[elem][3],"skeletonA"],[enemyArray[elem][0]-1,enemyArray[elem][1],enemies["skeleton"].HP,enemyArray[elem][3],"skeletonA"],[enemyArray[elem][0],enemyArray[elem][1]-1,enemies["skeleton"].HP,enemyArray[elem][3],"skeletonA"],[enemyArray[elem][0],enemyArray[elem][1],enemyArray[elem][2],enemyArray[elem][3],enemyArray[elem][4]]];
   }
  }
 }
}

//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...

function f_lastBoss(){
 var lastBossHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="lastBossA"){
   lastBossHP+=enemyArray[elem][2];
   enemyArray[elem][2]=enemies["lastBoss"].HP;
  }
  if(enemyArray[elem][4]=="lastBoss"){
   lastBossCheck=0;
   lastBossHP+=enemyArray[elem][2];
   if(lastBossHP-(enemies["lastBoss"].HP*8)<=0){enemyArray[elem][2]=0;}
   else{enemyArray[elem][2]=lastBossHP-(enemies["lastBoss"].HP*8);}
   
   if(Math.round(enemyArray[elem][2]*10)/10==0){
    setTimeout(function(){lastBossSE = new Audio('sound/explosion1.mp3');lastBossSE.pause();lastBossSE.currentTime=0;lastBossSE.play();},4000);
    selectStage=="coclicoDream4"
    timeStop=1;
    playerActControl=1;
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    enemyArray.splice(elem,1);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX4Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX5Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX6Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX7Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX8Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX9Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX10Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX11Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX12Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX13Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX14Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX15Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX16Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX17Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX18Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
    var myh = document.getElementById("selectGimmickX4Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX5Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX6Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX7Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX8Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX9Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX10Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX11Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX12Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX13Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX14Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX15Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX16Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX17Y6");myh.innerHTML = " ";
    var myh = document.getElementById("selectGimmickX18Y6");myh.innerHTML = " ";
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', "0%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　ミオソティス？";
    f_whiteScreen(200);
    setTimeout(function(){f_attack(2,10);BGM3.volume=0.4;},1000);
    setTimeout(function(){f_attack(4,12);BGM3.volume=0.2;},1500);
    setTimeout(function(){f_attack(2,12);BGM3.volume=0;  },2000);
    setTimeout(function(){f_attack(4,10);},2500);
    setTimeout(function(){
     var myh = document.getElementById("selectGimmickX12Y4");
     myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:-100%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
     f_natadecoco(3.5,11.5,2);
     setTimeout(function(){
      var myh = document.getElementById("selectGimmickX12Y4");
      myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:-50%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
      document.documentElement.style.setProperty('--lastBossOpacity', "0.8");
     },2000);
     setTimeout(function(){
      var myh = document.getElementById("selectGimmickX12Y4");
      myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:0%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
      document.documentElement.style.setProperty('--lastBossOpacity', "0.6");
     },2200);
     setTimeout(function(){
      var myh = document.getElementById("selectGimmickX12Y4");
      myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:50%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
      document.documentElement.style.setProperty('--lastBossOpacity', "0.4");
     },2400);
     setTimeout(function(){
      var myh = document.getElementById("selectGimmickX12Y4");
      myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:100%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
      document.documentElement.style.setProperty('--lastBossOpacity', "0.2");
     },2600);
     setTimeout(function(){
      var myh = document.getElementById("selectGimmickX12Y4");
      myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:150%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
      document.documentElement.style.setProperty('--lastBossOpacity', "0");
     },2800);
     setTimeout(function(){
      var myh = document.getElementById("selectGimmickX12Y4");
      myh.innerHTML = "<img src=item/stage/mother.png style=position:absolute;top:200%;left:-100%;width:100%;><style>#selectGimmickX12Y4{position:absolute;top:"+12.5*4+"%;left:"+6.9*12+"%;height:12.5%;width:6.9%;}</style>";
     },3000);
    },4000);
    setTimeout(function(){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = " ";
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["lastBoss"].happen=1;
     blocks["lastBossB"].name="0";
     setTimeout(function(){
      //f_stageChange();
      setTimeout(function(){f_speech("LBend1");},500);
     },500);
    },8000);
   }
   else{
    if(Math.round(enemyArray[elem][2]*10)/10<=enemies["lastBoss"].HP*0.4){
     document.documentElement.style.setProperty('--lastBossOpacity', "1");
     var myh = document.getElementById("selectGimmickX1Y0");
     myh.innerHTML = "<img src=item/stage/lastBossM.png style=position:absolute;top:0%;left:0%;height:700%;><style>#selectGimmickX1Y0{position:absolute;opacity:var(--lastBossOpacity);top:0%;left:6.9%;height:12.5%;width:6.9%;}</style>";
    }
    else if(Math.round(enemyArray[elem][2]*10)/10<=enemies["lastBoss"].HP*0.6){
     document.documentElement.style.setProperty('--lastBossOpacity', (enemies["lastBoss"].HP*0.6-Math.round(enemyArray[elem][2]*10)/10)/(0.2*enemies["lastBoss"].HP));
     var myh = document.getElementById("selectGimmickX1Y0");
     myh.innerHTML = "<img src=item/stage/lastBossM.png style=position:absolute;top:0%;left:0%;height:700%;><style>#selectGimmickX1Y0{position:absolute;opacity:var(--lastBossOpacity);top:0%;left:6.9%;height:12.5%;width:6.9%;}</style>";
    }
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["lastBoss"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　ミオソティス？";
    if(enemyArray[elem][3]==0||enemyArray[elem][3]==1){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==2){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.round(enemyArray[elem][2]*10)/10<=enemies["lastBoss"].HP*0.4){
      switch(Math.floor(Math.random()*2)){
       case 0:
        enemyArray[elem][3]=51;
       break;
       case 1:
        enemyArray[elem][3]=61;
       break;
      }
     }
     else{
      switch(Math.floor(Math.random()*4)){
       case 0:
        enemyArray[elem][3]=11;
       break;
       case 1:
        enemyArray[elem][3]=21;
       break;
       case 2:
        enemyArray[elem][3]=31;
       break;
       case 3:
        enemyArray[elem][3]=41;
       break;
      }
      //enemyArray[elem][3]=11;
     }
    }
    else if(enemyArray[elem][3]==11){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossB.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==12||enemyArray[elem][3]==13){
     if(enemyArray[elem][3]==12){lastBossSE1 = new Audio('sound/silent_ending.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();setTimeout(function(){lastBossSE1.pause();lastBossSE1.currentTime=0;},400);}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossC.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==14||enemyArray[elem][3]==15){
     if(enemyArray[elem][3]==14){lastBossSE1 = new Audio('sound/encounter.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossD.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     lastBossCheck=1;
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==16){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossC.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==17){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossB.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==21){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossE.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==22||enemyArray[elem][3]==23){
     if(enemyArray[elem][3]==22){lastBossSE1 = new Audio('sound/silent_ending.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();setTimeout(function(){lastBossSE1.pause();lastBossSE1.currentTime=0;},400);}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossF.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==24||enemyArray[elem][3]==25){
     if(enemyArray[elem][3]==24){lastBossSE1 = new Audio('sound/encounter.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossG.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     lastBossCheck=2;
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==26){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossF.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==27){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossE.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==31){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==32){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:0.5;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==33){
     if(enemyArray[elem][3]==33){lastBossSE1 = new Audio('sound/magic_waves1.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:1;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(6-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(16-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(4-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(8-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(14-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(18-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==34){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==41){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossI.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==42){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossI.png style=position:absolute;opacity:0.5;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==43){
     if(enemyArray[elem][3]==43){lastBossSE1 = new Audio('sound/magic_waves1.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossI.png style=position:absolute;opacity:1;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(4-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(8-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(14-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(18-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(6-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(11-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(16-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==44){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossI.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==51){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossT.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==52||enemyArray[elem][3]==53){
     if(enemyArray[elem][3]==52){lastBossSE1 = new Audio('sound/silent_ending.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();setTimeout(function(){lastBossSE1.pause();lastBossSE1.currentTime=0;},400);}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossR.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==54||enemyArray[elem][3]==55){
     if(enemyArray[elem][3]==54){lastBossSE1 = new Audio('sound/encounter.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossS.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     lastBossCheck=3;
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==56){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossR.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==57){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossT.png style=position:absolute;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossO.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==61){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossI.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==62){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:0.5;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossI.png style=position:absolute;opacity:0.5;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==63){
     if(enemyArray[elem][3]==63){lastBossSE1 = new Audio('sound/magic_waves1.mp3');lastBossSE1.pause();lastBossSE1.currentTime=0;lastBossSE1.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:1;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossI.png style=position:absolute;opacity:1;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(4-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(8-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(14-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(18-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(6-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(11-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(16-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(6-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(3-heroPosi[0])<=0.5&&Math.abs(16-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(4-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(8-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(14-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     else if(Math.abs(6-heroPosi[0])<=0.5&&Math.abs(18-heroPosi[1])<=0.5){f_damage(enemies["lastBoss"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==64){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lastBossH.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossI.png style=position:absolute;opacity:0.2;bottom:-200%;right:-800%;height:700%;width:2000%;><img src=item/stage/lastBossA.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;><img src=item/stage/lastBossN.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-800%;height:700%;width:2000%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else{enemyArray[elem][3]=-2;}
    
   }
  }
 }
}

function f_lastBossEnemy(){
    if(lastBossEnemy==51){
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX19Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;opacity:0.3;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==52){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;opacity:0.6;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==53){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==54){
     for(var ene=enemyArray.length;ene>9;ene--){
      enemyArray.splice(enemyArray.length-1,1);
     }
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX4Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX5Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX6Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX7Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX8Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX9Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX10Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX11Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX12Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX13Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX14Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX15Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX16Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX17Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh=document.createElement('div');myh.setAttribute('id',"selectGimmickX18Y6");var parentDiv = document.getElementById("stageGimmick");parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX4Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX5Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX6Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX7Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX8Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX9Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX10Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX11Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX12Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX13Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX14Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX15Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX16Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX17Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX18Y6");myh.innerHTML = " ";
     var myh = document.getElementById("selectGimmickX19Y6");
     switch(Math.floor(Math.random()*3)){
      case 0:
       myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-185%;right:437.5%;width:25%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/bear.png style=position:absolute;opacity:1;bottom:-185%;right:-62.5%;width:25%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-185%;right:-562.5%;width:25%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
       lastBossEnemy=55;
      break;
      case 1:
       myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-185%;right:437.5%;width:25%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-185%;right:-62.5%;width:25%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-185%;right:-562.5%;width:25%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
       lastBossEnemy=60;
      break;
      case 2:
       myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-185%;right:437.5%;width:25%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-185%;right:-62.5%;width:25%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-185%;right:-562.5%;width:25%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
       lastBossEnemy=64;
      break;
     }
    }
    else if(lastBossEnemy==55){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-195%;right:420%;width:60%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/bear.png style=position:absolute;opacity:1;bottom:-195%;right:-80%;width:60%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-195%;right:-570%;width:60%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==56){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/bear.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==57){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/bear.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==58){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(8);
     enemyArray[enemyArray.length-1].push(enemies["rabit"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabit");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(13);
     enemyArray[enemyArray.length-1].push(enemies["bear"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("bear");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(18);
     enemyArray[enemyArray.length-1].push(enemies["rabit"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabit");
     lastBossEnemy=67;
     setTimeout(function(){f_lastBossEnemy();},400);
    }
    else if(lastBossEnemy==59){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-195%;right:420%;width:60%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-195%;right:-80%;width:60%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-195%;right:-570%;width:60%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==60){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==61){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==62){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(8);
     enemyArray[enemyArray.length-1].push(enemies["rabit"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabit");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(13);
     enemyArray[enemyArray.length-1].push(enemies["sheep"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("sheep");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(18);
     enemyArray[enemyArray.length-1].push(enemies["rabit"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabit");
     lastBossEnemy=67;
     setTimeout(function(){f_lastBossEnemy();},400);
    }
    else if(lastBossEnemy==63){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-195%;right:420%;width:60%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-195%;right:-80%;width:60%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-195%;right:-570%;width:60%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==64){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==65){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/rabit.png style=position:absolute;opacity:1;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossK.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/sheep.png style=position:absolute;opacity:1;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossQ.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
    }
    else if(lastBossEnemy==66){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(8);
     enemyArray[enemyArray.length-1].push(enemies["sheep"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("sheep");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(13);
     enemyArray[enemyArray.length-1].push(enemies["rabit"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("rabit");
     enemyArray.push([]);
     enemyArray[enemyArray.length-1].push(6);
     enemyArray[enemyArray.length-1].push(18);
     enemyArray[enemyArray.length-1].push(enemies["sheep"].HP);
     enemyArray[enemyArray.length-1].push(0);
     enemyArray[enemyArray.length-1].push("sheep");
     lastBossEnemy=67;
     setTimeout(function(){f_lastBossEnemy();},400);
    }
    else if(lastBossEnemy==67){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = "<img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossJ.png style=position:absolute;bottom:-200%;right:-600%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:400%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-100%;width:100%;><img src=item/stage/lastBossP.png style=position:absolute;opacity:var(--lastBossOpacity);bottom:-200%;right:-600%;width:100%;><style>#selectGimmickX19Y6{position:absolute;opacity:0.5;top:50%;left:82.8%;height:12.5%;width:6.9%;}</style>";
     lastBossEnemy+=1;
     setTimeout(function(){f_lastBossEnemy();},400);
    }
    else if(lastBossEnemy==68){
     var myh = document.getElementById("selectGimmickX19Y6");
     myh.innerHTML = " ";
     lastBossEnemy=51;
    }
}

//enemyArray=[[Y座標,X座標,HP,状態,敵の種類],...

function f_princess(){
 var princessHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="princess"){console.log(enemyArray);
   lastBossCheck=0;
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
   myh.innerHTML = " ";
   if(enemyArray[elem][2]==0){
    princessSE.currentTime=0;princessSE.pause();
    princessSE = new Audio('sound/explosion1.mp3');princessSE.pause();princessSE.currentTime=0;princessSE.play();
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["princess"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　永遠の眠り姫";
    f_natadecoco(enemyArray[elem][0]+0.5,enemyArray[elem][1]+0.5,2);
    enemyArray.splice(elem,1);
    setTimeout(function(){
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["princess"].happen=1;
     blocks["itemH"].name="item";
     blocks["princessA"].name="0";
     setTimeout(function(){
      f_stageChange();
      setTimeout(function(){f_speech("princessEnd1");},500);
     },500);
    },3000);
   }
   else{
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["princess"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　永遠の眠り姫";
    if(enemyArray[elem][3]==0||enemyArray[elem][3]==1||enemyArray[elem][3]==2){
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==3){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     f_bossAct(11,61,71,"princess");
     if(enemyArray[elem][3]==71){
      if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=71;}
      else{enemyArray[elem][3]=91;}
     }
     /*switch(Math.floor(Math.random()*3)){
      case 0:
       enemyArray[elem][3]=11;
      break;
      case 1:
       enemyArray[elem][3]=61;
      break;
      case 2:
       if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=71;}
       else{enemyArray[elem][3]=91;}
      break;
     }*/
     //enemyArray[elem][3]=11;
    }
    else if(enemyArray[elem][3]==11){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:30%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==12){
     princessSE = new Audio('sound/powerdown03.mp3');princessSE.pause();princessSE.currentTime=0;princessSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:70%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==13){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:120%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==14){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     lastBossCheck=4;
     if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]+=1;}
     else{enemyArray[elem][3]=25;}
    }
    else if(enemyArray[elem][3]>=15&&enemyArray[elem][3]<=24){
     if(enemyArray[elem][1]>1){enemyArray[elem][1]-=0.5;}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princessA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale(-1,1);><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     lastBossCheck=4;
     if(enemyArray[elem][3]>=24){enemyArray[elem][3]=35;}
     else{enemyArray[elem][3]+=1;}
    }
    else if(enemyArray[elem][3]>=25&&enemyArray[elem][3]<=34){
     if(enemyArray[elem][1]<16){enemyArray[elem][1]+=0.5;}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princessA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     lastBossCheck=4;
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==35){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><img src=item/stage/princessE.png style=position:absolute;bottom:0%;right:-100%;height:60%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==36){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==61){
     if(enemyArray[elem][3]==61){princessSE1 = new Audio('sound/silent_ending.mp3');princessSE1.pause();princessSE1.currentTime=0;princessSE1.play();setTimeout(function(){princessSE1.pause();princessSE1.currentTime=0;},1200);}
     enemyArray[elem][0]-=0.5;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:33%;height:50%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:333%;height:50%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:633%;height:50%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:933%;height:50%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1233%;height:50%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1533%;height:150%;width:34%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==62){
     enemyArray[elem][0]-=0.5;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:33%;height:100%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:333%;height:100%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:633%;height:100%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:933%;height:100%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1233%;height:100%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1533%;height:100%;width:34%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==63){
     enemyArray[elem][0]-=0.5;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:33%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:333%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:633%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:933%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1233%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1533%;height:150%;width:34%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==64||enemyArray[elem][3]==65){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:33%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:333%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:633%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:933%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1233%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1533%;height:150%;width:34%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==66||enemyArray[elem][3]==67){
     if(enemyArray[elem][3]==66){princessSE = new Audio('sound/encounter.mp3');princessSE.pause();princessSE.currentTime=0;princessSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:0%;height:600%;width:100%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:300%;height:600%;width:100%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:600%;height:600%;width:100%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:900%;height:600%;width:100%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1200%;height:600%;width:100%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1500%;height:600%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[1]==3||heroPosi[1]==3.5||heroPosi[1]==5.5||heroPosi[1]==6||heroPosi[1]==6.5||heroPosi[1]==8.5||heroPosi[1]==9||heroPosi[1]==9.5||heroPosi[1]==11.5||heroPosi[1]==12||heroPosi[1]==12.5||heroPosi[1]==14.5||heroPosi[1]==15||heroPosi[1]==15.5||heroPosi[1]==17.5||heroPosi[1]==18){
      f_damage(enemies["princess"].attack);
     }
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==68){
     enemyArray[elem][0]+=1;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6);
     myh.innerHTML = "<img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:33%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:333%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:633%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:933%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1233%;height:150%;width:34%;><img src=item/stage/princessG.png style=position:absolute;bottom:0%;left:1533%;height:150%;width:34%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+6+"{position:absolute;top:"+12.5*6+"%;left:"+6.9*3+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==69){
     enemyArray[elem][0]=6;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princess.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==71){
     princessSE = new Audio('sound/powerdown03.mp3');princessSE.pause();princessSE.currentTime=0;princessSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessH.png style=position:absolute;bottom:0%;right:100%;height:30%;width:100%;><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==72){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessH.png style=position:absolute;bottom:0%;right:100%;height:80%;width:100%;><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==73){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessH.png style=position:absolute;bottom:0%;right:100%;height:150%;width:100%;><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=74&&enemyArray[elem][3]<=84){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessF.png style=position:absolute;bottom:0%;right:"+Number((enemyArray[elem][3]-74)*50+Number(150))+"%;height:150%;width:100%;transform:scale(-1,1);><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(heroPosi[1]-Math.abs(enemyArray[elem][1]-((enemyArray[elem][3]-73)*0.5)))<=0.5){f_damage(enemies["princess"].attack);}
     if(enemyArray[elem][3]>=84){enemyArray[elem][3]=0;}
     else{enemyArray[elem][3]+=1;}
     setTimeout(function(){f_princess();},100);
    }
    else if(enemyArray[elem][3]==91){
     princessSE = new Audio('sound/powerdown03.mp3');princessSE.pause();princessSE.currentTime=0;princessSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessH.png style=position:absolute;bottom:0%;left:100%;height:30%;width:100%;><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==92){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessH.png style=position:absolute;bottom:0%;left:100%;height:80%;width:100%;><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==93){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessH.png style=position:absolute;bottom:0%;left:100%;height:150%;width:100%;><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=94&&enemyArray[elem][3]<=104){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
     myh.innerHTML = "<img src=item/stage/princessF.png style=position:absolute;bottom:0%;left:"+Number((enemyArray[elem][3]-94)*50+Number(150))+"%;height:150%;width:100%;transform:scale(1,1);><img src=item/stage/princessC.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0])+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(heroPosi[1]-Math.abs(enemyArray[elem][1]+((enemyArray[elem][3]-93)*0.5)))<=0.5){f_damage(enemies["princess"].attack);}
     if(enemyArray[elem][3]>=104){enemyArray[elem][3]=0;}
     else{enemyArray[elem][3]+=1;}
     setTimeout(function(){f_princess();},100);
    }
    else{
     enemyArray[elem][3]=0;
    }
   }
  }
 }
}


function f_niziiro(){
 var niziiroHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="niziiroA"){console.log(enemyArray);
   if(enemyArray[elem][2]<=0){
    enemyArray[elem-1][3]=36;
   }
   enemyArray[elem-1][0]=enemyArray[elem][0];
   enemyArray[elem-1][1]=enemyArray[elem][1];
   enemyArray.splice(elem,1);
  }
 }
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="niziiro"){
   selectHero="amairo";
   lastBossCheck=0;
   if(enemyArray[elem][1]>=heroPosi[1]){
    var niziiroDire=1;
   }
   else{
    var niziiroDire=-1;
   }
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
   myh.innerHTML = " ";
   if(enemyArray[elem][2]==0){
    BGM5.volume=0;
    niziiroSE.currentTime=0;niziiroSE.pause();
    niziiroSE = new Audio('sound/explosion1.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["niziiro"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　狐ヶ咲虹色";
    var myh = document.getElementById("stageGimmick");
    myh.innerHTML = " ";
    var myh=document.createElement('div');
    myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    var parentDiv = document.getElementById("stageGimmick");
    parentDiv.appendChild(myh);
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/niziiro.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    enemyArray=[];
    setTimeout(function(){
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["niziiro"].happen=1;
     blocks["dreamRockC"].name="0";
     setTimeout(function(){
      setTimeout(function(){f_speech("niziiroEnd1");},500);
      f_popUpN('null','甘色のコスチュームを獲得しました。');
     },500);
    },2000);
   }
   else{
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["niziiro"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　狐ヶ咲虹色";
    if(enemyArray[elem][3]==0||enemyArray[elem][3]==1||enemyArray[elem][3]==2){
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiro.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==3){
    BGM5.volume=0.6;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiro.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     f_bossAct(11,21,31,"niziiro");
     /*switch(Math.floor(Math.random()*3)){
      case 0:
       enemyArray[elem][3]=11;
      break;
      case 1:
       enemyArray[elem][3]=21;
      break;
      case 2:
       enemyArray[elem][3]=31;
      break;
     }*/
     //enemyArray[elem][3]=31;
    }
    else if(enemyArray[elem][3]==11||enemyArray[elem][3]==12){
     if(enemyArray[elem][3]==11){niziiroSE = new Audio('sound/light_saber3.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiroA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==13||enemyArray[elem][3]==14){
     if(enemyArray[elem][3]==13){niziiroSE = new Audio('sound/katana1.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();}
     var attackPoint=heroPosi[1];
     var beforePoint=enemyArray[elem][1];
     if(attackPoint<beforePoint){
      var effectR=-(beforePoint-attackPoint);
      var effectW=beforePoint-attackPoint;
      if(heroPosi[0]>=5.5){
       if(heroPosi[1]>=attackPoint&&heroPosi[1]<beforePoint){f_damage(enemies["niziiro"].attack);}
      }
     }
     else{
      var effectR=1;
      var effectW=attackPoint-beforePoint;
      if(heroPosi[0]>=5.5){
       if(heroPosi[1]<=attackPoint&&heroPosi[1]>beforePoint){f_damage(enemies["niziiro"].attack);}
      }
     }
     enemyArray[elem][1]=attackPoint;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiroA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><img src=item/stage/niziiroC.png style=position:absolute;bottom:0%;right:"+effectR*100+"%;height:100%;width:"+effectW*100+"%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==21||enemyArray[elem][3]==22){
     if(enemyArray[elem][3]==21){niziiroSE = new Audio('sound/light_saber3.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiroA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==23){
     if(enemyArray[elem][3]==23){niziiroSE = new Audio('sound/katana1.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();}
     if(enemyArray[elem][1]>=heroPosi[1]){
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/niziiroA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><img src=item/stage/niziiroD.png style=position:absolute;bottom:0%;right:100%;height:200%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      if(heroPosi[0]>=4.5&&Math.abs((enemyArray[elem][1]-1)-heroPosi[1])<=0.5){f_damage(enemies["niziiro"].attack);}
     }
     else{
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/niziiroA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><img src=item/stage/niziiroD.png style=position:absolute;bottom:0%;right:-100%;height:200%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      if(heroPosi[0]>=4.5&&Math.abs((enemyArray[elem][1]+1)-heroPosi[1])<=0.5){f_damage(enemies["niziiro"].attack);}
     }
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==31||enemyArray[elem][3]==32){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiroB.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==33||enemyArray[elem][3]==34||enemyArray[elem][3]==35){
     if(enemyArray[elem][3]==33){niziiroSE = new Audio('sound/light_saber3.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiroE.png style=position:absolute;bottom:0%;right:-100%;height:200%;width:300%;transform:scale("+niziiroDire+",1);><img src=item/stage/niziiroB.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray.push([enemyArray[elem][0],enemyArray[elem][1],1,enemyArray[elem][3],"niziiroA"]);
     enemyArray[elem]=[0,0,enemyArray[elem][2],enemyArray[elem][3],"niziiro"];
     if(enemyArray[elem][3]==35){enemyArray[elem][3]=0;}
     else{enemyArray[elem][3]+=1;}
    }
    else if(enemyArray[elem][3]==36){
     if(enemyArray[elem][3]==36){niziiroSE = new Audio('sound/katana1.mp3');niziiroSE.pause();niziiroSE.currentTime=0;niziiroSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/niziiroF.png style=position:absolute;bottom:0%;right:-100%;height:200%;width:300%;transform:scale("+niziiroDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[0]>=4.5&&Math.abs(heroPosi[1]-enemyArray[elem][1])<=1.5){f_damage(enemies["niziiro"].attack);}
     enemyArray[elem][3]=0;
    }
    //else if(enemyArray[elem][3]==-100){}
    else{
     enemyArray[elem][3]=0;
    }
    
   }
  }
 }
}

function f_luruca(){
 var lurucaHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="lurucaA"){
   lurucaSE1 = new Audio('sound/fire2.mp3');lurucaSE1.volume=0.5;lurucaSE1.pause();lurucaSE1.currentTime=0;lurucaSE1.play();
   if(enemyArray[elem][3]==0){
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/lurucaG.png style=position:absolute;bottom:-100%;right:-100%;height:300%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    enemyArray[elem][3]+=1;
   }
   else if(enemyArray[elem][3]==1){
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/lurucaH.png style=position:absolute;bottom:-100%;right:-100%;height:300%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    enemyArray[elem][3]+=1;
   }
   else if(enemyArray[elem][3]==2){
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/lurucaI.png style=position:absolute;bottom:-100%;right:-100%;height:300%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    enemyArray[elem][3]=0;
   }
   if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=1.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=1.5){f_damage(enemies["luruca"].attack);}
  }
  if(enemyArray[elem][4]=="luruca"){
   selectHero="lyrica";
   lastBossCheck=0;
   if(enemyArray[elem][1]>=heroPosi[1]){
    var lurucaDire=1;
   }
   else{
    var lurucaDire=-1;
   }
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
   myh.innerHTML = " ";
   if(enemyArray[elem][2]==0){
    BGM5.volume=0;
    lurucaSE.currentTime=0;lurucaSE.pause();
    lurucaSE = new Audio('sound/explosion1.mp3');lurucaSE.pause();lurucaSE.currentTime=0;lurucaSE.play();
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["luruca"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　ルルカ";
     var myh = document.getElementById("stageGimmick");
     myh.innerHTML = " ";
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/luruca.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    enemyArray=[];
    setTimeout(function(){
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["luruca"].happen=1;
     blocks["dreamRockA"].name="0";
     setTimeout(function(){
      setTimeout(function(){f_speech("lurucaEnd1");},500);
      f_popUpN('null','リリカのコスチュームを獲得しました。');
     },500);
    },2000);
   }
   else{
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["luruca"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　ルルカ";
    if(enemyArray[elem][3]==0||enemyArray[elem][3]==1||enemyArray[elem][3]==2){
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/luruca.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==3){
     BGM5.volume=0.6;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/luruca.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     f_bossAct(11,11,21,"luruca");
     /*switch(Math.floor(Math.random()*3)){
      case 0:
       enemyArray[elem][3]=11;
      break;
      case 1:
       enemyArray[elem][3]=11;
      break;
      case 2:
       enemyArray[elem][3]=21;
      break;
     }*/
     //enemyArray[elem][3]=21;
    }
    else if(enemyArray[elem][3]==11){
     if(Math.abs(heroPosi[1]-enemyArray[elem][1])>=2||Math.abs(heroPosi[1]-enemyArray[elem][1])<=1){
      if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][1]-=0.5}
      else{enemyArray[elem][1]+=0.5;}
      var myh=document.createElement('div');
      myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      var parentDiv = document.getElementById("stageGimmick");
      parentDiv.appendChild(myh);
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/lurucaA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      if(Math.abs(heroPosi[1]-enemyArray[elem][1])>=2){enemyArray[elem][3]=11;}
      else{enemyArray[elem][3]+=1;}
     }
     else{
      lurucaSE = new Audio('sound/jump10.mp3');lurucaSE.pause();lurucaSE.currentTime=0;lurucaSE.play();
      var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
      myh.innerHTML = "<img src=item/stage/lurucaB.png style=position:absolute;bottom:0%;right:0%;height:300%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
      if(lurucaDire==1){enemyArray[elem][3]=13}
      else{enemyArray[elem][3]=16;}
      setTimeout(function(){f_luruca();},50);
     }
    }
    else if(enemyArray[elem][3]==12){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaB.png style=position:absolute;bottom:0%;right:0%;height:300%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(lurucaDire==1){enemyArray[elem][3]=13}
     else{enemyArray[elem][3]=16;}
     setTimeout(function(){f_luruca();},50);
    }
    else if(enemyArray[elem][3]==13){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaC.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;transform:scale(1,1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==14||enemyArray[elem][3]==15){
     if(enemyArray[elem][3]==14){lurucaSE = new Audio('sound/crash.mp3');lurucaSE.pause();lurucaSE.currentTime=0;lurucaSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaD.png style=position:absolute;bottom:0%;right:0%;height:300%;width:300%;transform:scale(1,1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[0]>=5&&Math.abs(enemyArray[elem][1]-1-heroPosi[1])<=0.5){f_damage(enemies["luruca"].attack);}
     if(enemyArray[elem][3]>=15){enemyArray[elem][3]=0;}
     else{enemyArray[elem][3]+=1;}
    }
    else if(enemyArray[elem][3]==16){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaC.png style=position:absolute;bottom:0%;right:-200%;height:300%;width:300%;transform:scale(-1,1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==17||enemyArray[elem][3]==18){
     if(enemyArray[elem][3]==17){lurucaSE = new Audio('sound/crash.mp3');lurucaSE.pause();lurucaSE.currentTime=0;lurucaSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaD.png style=position:absolute;bottom:0%;right:-200%;height:300%;width:300%;transform:scale(-1,1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[0]>=5&&Math.abs(enemyArray[elem][1]+1-heroPosi[1])<=0.5){f_damage(enemies["luruca"].attack);}
     if(enemyArray[elem][3]>=18){enemyArray[elem][3]=0;}
     else{enemyArray[elem][3]+=1;}
    }
    else if(enemyArray[elem][3]==21){
     if(enemyArray[elem][3]==21){lurucaSE = new Audio('sound/jump10.mp3');lurucaSE.pause();lurucaSE.currentTime=0;lurucaSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaE.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==22){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaE.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><img src=item/stage/lurucaF.png style=position:absolute;bottom:100%;right:0%;height:100%;width:100%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==23){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaE.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><img src=item/stage/lurucaF.png style=position:absolute;bottom:100%;right:-50%;height:200%;width:200%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==24){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaE.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><img src=item/stage/lurucaF.png style=position:absolute;bottom:100%;right:-100%;height:300%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==25){
     enemyArray.push([4,enemyArray[elem][1],0,0,"lurucaA"]);
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y4");
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/lurucaE.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+lurucaDire+",1);><img src=item/stage/lurucaG.png style=position:absolute;bottom:100%;right:-100%;height:300%;width:300%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    //else if(enemyArray[elem][3]==-100){}
    else{
     enemyArray[elem][3]=0;
    }
   }
  }
 }
}

function f_angel(){
 var angelHP=0;
 for(var elem in enemyArray){
  if(enemyArray[elem][4]=="angel"){
   selectHero="thirteen";
   lastBossCheck=0;
   if(enemyArray[elem][1]>=heroPosi[1]){
    var angelDire=1;
   }
   else{
    var angelDire=-1;
   }
   var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+Math.floor(enemyArray[elem][0]));
   myh.innerHTML = " ";
   if(enemyArray[elem][2]==0){
    BGM5.volume=0;
    angelSE.currentTime=0;angelSE.pause();
    angelSE = new Audio('sound/explosion1.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["angel"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　影月宮天使長？";
     var myh = document.getElementById("stageGimmick");
     myh.innerHTML = " ";
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
    var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
    myh.innerHTML = "<img src=item/stage/angel.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
    var enemyPosi=[enemyArray[elem][0],enemyArray[elem][1]]
    enemyArray=[[enemyPosi[0],enemyPosi[1],0,0,"error"]];
    setTimeout(function(){
     document.documentElement.style.setProperty('--bossHPheight', 0+"%");
     var myh = document.getElementById("bossName");
     myh.innerHTML = " ";
     event["angel"].happen=1;
     blocks["dreamRockB"].name="0";
     setTimeout(function(){
      setTimeout(function(){f_speech("angelEnd1");},500);
      f_popUpN('null','サーティーンのコスチュームを獲得しました。');
     },500);
    },2000);
   }
   else{
    document.documentElement.style.setProperty('--bossHPheight', 6+"%");
    document.documentElement.style.setProperty('--bossHP_1', enemyArray[elem][2]/enemies["angel"].HP*100+"%");
    var myh = document.getElementById("bossName");
    myh.innerHTML = "　影月宮天使長？";
    if(enemyArray[elem][3]==0){
     angelSE = new Audio('sound/8bit_magic1.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==1){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==2){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelF.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==3){
     BGM5.volume=0.6;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelG.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     f_bossAct(11,21,41,"angel");
     /*switch(Math.floor(Math.random()*3)){
      case 0:
       enemyArray[elem][3]=11;
      break;
      case 1:
       enemyArray[elem][3]=21;
      break;
      case 2:
       enemyArray[elem][3]=41;
      break;
     }*/
     //enemyArray[elem][3]=41;
    }
    else if(enemyArray[elem][3]==11){
     angelSE = new Audio('sound/light_saber3.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     enemyArray[elem][0]=6;
     if(heroPosi[1]<=9){enemyArray[elem][1]=heroPosi[1]+3;}
     else{enemyArray[elem][1]=heroPosi[1]-3;}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelG.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==12){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelF.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==13){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==14){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==15||enemyArray[elem][3]==16||enemyArray[elem][3]==17){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(enemyArray[elem][3]>=17){
      if(heroPosi[1]<=enemyArray[elem][1]){enemyArray[elem][3]=18;}
      else{enemyArray[elem][3]=19;}
     }
     else{
      enemyArray[elem][3]+=1;
     }
    }
    else if(enemyArray[elem][3]==18){
     angelSE = new Audio('sound/magic_waves1.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelB.png style=position:absolute;bottom:0%;right:0%;height:100%;width:1700%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[0]>=5.5&&heroPosi[1]<enemyArray[elem][1]){f_damage(enemies["angel"].attack);}
     enemyArray[elem][3]+=2;
    }
    else if(enemyArray[elem][3]==19){
     angelSE = new Audio('sound/magic_waves1.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelB.png style=position:absolute;bottom:0%;left:0%;height:100%;width:1700%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[0]>=5.5&&heroPosi[1]>enemyArray[elem][1]){f_damage(enemies["angel"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==20){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelA.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==21){
     angelSE = new Audio('sound/light_saber3.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     enemyArray[elem][0]=2;
     enemyArray[elem][1]=heroPosi[1];
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelG.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==22){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelF.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==23){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==24){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==25){
     angelSE1 = new Audio('sound/launcher4.mp3');angelSE1.pause();angelSE1.currentTime=0;angelSE1.play();setTimeout(function(){angelSE1.pause();angelSE1.currentTime=0;},600);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelC.png style=position:absolute;bottom:-100%;right:00%;height:200%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=26&&enemyArray[elem][3]<=29){
     enemyArray[elem][0]+=1;
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelC.png style=position:absolute;bottom:0%;right:00%;height:200%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5){f_damage(enemies["angel"].attack);}
     enemyArray[elem][3]+=1;
     setTimeout(function(){f_angel();},100);
    }
    else if(enemyArray[elem][3]==30||enemyArray[elem][3]==31||enemyArray[elem][3]==32){
     angelSE = new Audio('sound/g_robot_punch1.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelH.png style=position:absolute;bottom:0%;right:100%;height:150%;width:"+200*(enemyArray[elem][3]-29)/3+"%;transform:scale(-1,1);><img src=item/stage/angelH.png style=position:absolute;bottom:0%;left:100%;height:150%;width:"+200*(enemyArray[elem][3]-29)/3+"%;transform:scale(1,1);><img src=item/stage/angelC.png style=position:absolute;bottom:0%;right:0%;height:200%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]>=33&&enemyArray[elem][3]<=37){
     var attack3side=(enemyArray[elem][3]-32)*50+100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelH.png style=position:absolute;bottom:0%;right:"+attack3side+"%;height:150%;width:200%;transform:scale(-1,1);><img src=item/stage/angelH.png style=position:absolute;bottom:0%;left:"+attack3side+"%;height:150%;width:200%;transform:scale(1,1);><img src=item/stage/angel.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[0]>=5.5&&Math.abs(enemyArray[elem][1]-1-((enemyArray[elem][3]-32)*0.5)-heroPosi[1])<=1.5){f_damage(enemies["angel"].attack);}
     if(heroPosi[0]>=5.5&&Math.abs(enemyArray[elem][1]+1+((enemyArray[elem][3]-32)*0.5)-heroPosi[1])<=1.5){f_damage(enemies["angel"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==38){
     var attack3side=(enemyArray[elem][3]-32)*50+100;
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angel.png style=position:absolute;bottom:0%;right:0%;height:100%;width:100%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    else if(enemyArray[elem][3]==41){
     angelSE = new Audio('sound/light_saber3.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();
     enemyArray[elem][0]=3;
     if(heroPosi[1]<=9){enemyArray[elem][1]=heroPosi[1]+3;}
     else{enemyArray[elem][1]=heroPosi[1]-3;}
     var myh=document.createElement('div');
     myh.setAttribute('id',"selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     var parentDiv = document.getElementById("stageGimmick");
     parentDiv.appendChild(myh);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelG.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==42){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelF.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==43){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelE.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==44){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==45){
     angelSE1 = new Audio('sound/silent_ending.mp3');angelSE1.pause();angelSE1.currentTime=0;angelSE1.play();setTimeout(function(){angelSE1.pause();angelSE1.currentTime=0;},500);
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelI.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
     setTimeout(function(){f_angel();},100);
    }
    else if(enemyArray[elem][3]==46){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelJ.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
     setTimeout(function(){f_angel();},100);
    }
    else if(enemyArray[elem][3]==47||enemyArray[elem][3]==48||enemyArray[elem][3]==49||enemyArray[elem][3]==50){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelK.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==51){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelL.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
     setTimeout(function(){f_angel();},100);
    }
    else if(enemyArray[elem][3]==52||enemyArray[elem][3]==53||enemyArray[elem][3]==54){
     if(enemyArray[elem][3]==52){angelSE = new Audio('sound/encounter.mp3');angelSE.pause();angelSE.currentTime=0;angelSE.play();}
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelM.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     if(heroPosi[1]==2.5||heroPosi[1]==3||heroPosi[1]==3.5||heroPosi[1]==5.5||heroPosi[1]==6||heroPosi[1]==6.5||heroPosi[1]==8.5||heroPosi[1]==9||heroPosi[1]==9.5||heroPosi[1]==11.5||heroPosi[1]==12||heroPosi[1]==12.5||heroPosi[1]==14.5||heroPosi[1]==15||heroPosi[1]==15.5){f_damage(enemies["angel"].attack);}
     enemyArray[elem][3]+=1;
    }
    else if(enemyArray[elem][3]==55){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelL.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]+=1;
     setTimeout(function(){f_angel();},100);
    }
    else if(enemyArray[elem][3]==56){
     var myh = document.getElementById("selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]);
     myh.innerHTML = "<img src=item/stage/angelD.png style=position:absolute;bottom:0%;right:-100%;height:100%;width:300%;transform:scale("+angelDire+",1);><img src=item/stage/angelL.png style=position:absolute;bottom:-300%;left:-"+(enemyArray[elem][1]-1)*100+"%;height:700%;width:1700%;><style>#selectGimmickX"+Math.floor(enemyArray[elem][1])+"Y"+enemyArray[elem][0]+"{position:absolute;top:"+12.5*(enemyArray[elem][0])+"%;left:"+6.9*(enemyArray[elem][1])+"%;height:12.5%;width:6.9%;}</style>";
     enemyArray[elem][3]=0;
    }
    //else if(enemyArray[elem][3]==-100){}
    else{
     enemyArray[elem][3]=0;
    }
   }
  }
 }
}

