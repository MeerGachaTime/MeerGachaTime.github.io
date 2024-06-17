console.log("test_check");


phase=0;
spSet=0;
rightOn=0;
leftOn=0;
attackerOn=0;
gunnerOn=0;
tankOn=0;
walk=0;
sidePosiN=0;
guard=0;
direction=1;
skillHold=0;
SkillCheck=0;
spBonus=1;
atBonus=1;
guBonus=1;
taBonus=1;
doughnutBuff=1;
NowScreen="home";
levelBorder=-10;
stageLevel=1;
selectedStage="mekahan";
selectingRole="sprinter";
spSet="atari";
atSet="noho";
guSet="lyrica";
taSet="justice";

justiceSkill1Check=0;
pierreSkillCheck=0;
aliceSkill1Check=0;
monsa=0;
irregularNum=2;
nofice=0;
noMissCheck=0;
tadaomiCheck=0;
matoiCheck=0;
loveyCheck=0;

backSE = new Audio('sound/select08.mp3');
selectSE = new Audio('sound/select01.mp3');
countSE = new Audio('sound/select03.mp3');
goodSE = new Audio('sound/correct_answer3.mp3');
encountSE = new Audio('sound/encounter.mp3');
bombSE = new Audio('sound/mini_bomb2.mp3');
bigBombSE = new Audio('sound/explosion1.mp3');
defaultBGM = new Audio('sound/描きおろし/みーあさん　戦闘時以外.mp3');
battleBGM1 = new Audio('sound/描きおろし/みーあさん　戦闘曲1.mp3');
battleBGM2 = new Audio('sound/描きおろし/みーあさん　戦闘曲2.mp3');
specialSE = new Audio('sound/描きおろし/みーあさん　効果音.mp3');

mekahanSE1 = new Audio('sound/g_robot_punch1.mp3');
mekahanSE2 = new Audio('sound/gear_rotation2.mp3');
granatSE1 = new Audio('sound/katana1.mp3');
granatSE2 = new Audio('sound/light_saber3.mp3');
granatSE3 = new Audio('sound/crash.mp3');
granatSE4 = new Audio('sound/laser_beam1.mp3');
libeluluSE1 = new Audio('sound/8bit_magic1.mp3');
libeluluSE2 = new Audio('sound/magic_waves1.mp3');
libeluluSE3 = new Audio('sound/dark_magic1.mp3');
kuiroSE1 = new Audio('sound/Oriental_ghost.mp3');
cerberusSE1 = new Audio('sound/fire2.mp3');
cerberusSE2 = new Audio('sound/drop3.mp3');
cerberusSE3 = new Audio('sound/silent_ending.mp3');
ankokuSE1 = new Audio('sound/jump10.mp3');
ankokuSE2 = new Audio('sound/powerup04.mp3');
ankokuSE3 = new Audio('sound/thunder.mp3');
errordollSE1 = new Audio('sound/encounter.mp3');


defaultBGM.volume=0.8;
defaultBGM.addEventListener("ended", function () {
  defaultBGM.currentTime = 0;
  defaultBGM.play();
}, false);

battleBGM1.volume=1;
battleBGM1.addEventListener("ended", function () {
  battleBGM1.currentTime = 0;
  battleBGM1.play();
}, false);


battleBGM2.volume=1;
battleBGM2.addEventListener("ended", function () {
  battleBGM2.currentTime = 0;
  battleBGM2.play();
}, false);

allClear=0;

let heros={
   "atari"     :{usable:1,exp:0,level:1,name:"十文字アタリ"        ,lv1:"十文字アタリ"        ,lv3:"thirteen"  ,skillBusable:0,skillB:"モンスターサーカス"   ,skillHint:"携帯ゲーム機をクラフト"},
   "justice"   :{usable:1,exp:0,level:1,name:"ジャスティス"        ,lv1:"多層型ヘキサバリア"  ,lv3:"pororotcho",skillBusable:0,skillB:"ユニバーサル ブリッツ",skillHint:"チュートリアル以外のステージクリア"},
   "lyrica"    :{usable:1,exp:0,level:1,name:"リリカ"              ,lv1:"ドリーム☆バキューン",lv3:"istaqa"    ,skillBusable:0,skillB:"仲良し☆魔法少女"     ,skillHint:"リベレーションルルカを多層型ヘキサバリアと不思議のトランプを用いずにノーダメージクリア"},
   "noho"      :{usable:1,exp:0,level:1,name:"双挽乃保"            ,lv1:"ギャリギャリ"        ,lv3:"alice"     ,skillBusable:0,skillB:"双挽乃保"             ,skillHint:"ローファーをクラフト"},
   "tadaomi"   :{usable:1,exp:0,level:1,name:"桜華忠臣"            ,lv1:"遠慮なく死ぬがいい！",lv3:"gustaf"    ,skillBusable:0,skillB:"妖軍一統＆妖炎参謀"   ,skillHint:"1hitで敵を葬る"},
   "jeanne"    :{usable:1,exp:0,level:1,name:"ジャンヌ　ダルク"    ,lv1:"聖女の祝福"          ,lv3:"megmeg"    ,skillBusable:0,skillB:"オルレアンの乙女"     ,skillHint:"マリーのサンドイッチをクラフト"},
   "marcos"    :{usable:1,exp:0,level:1,name:"マルコス55"          ,lv1:"スーパーニート"      ,lv3:"dragon"    ,skillBusable:0,skillB:"ちょっとドキドキする" ,skillHint:"オレンジジュースをクラフト"},
   "luciano"   :{usable:1,exp:0,level:1,name:"ルチアーノ"          ,lv1:"死神の舞踏"          ,lv3:"maria"     ,skillBusable:0,skillB:"亡き妻の加護"         ,skillHint:"デュランダの花をクラフト"},
   "voidoll"   :{usable:1,exp:0,level:1,name:"Voidoll"             ,lv1:"Voidoll"             ,lv3:"layer"     ,skillBusable:0,skillB:"Guardoll-4771"        ,skillHint:"最終ステージのステージレベル3をノーダメージクリア"},
   "matoi"     :{usable:1,exp:0,level:1,name:"深川まとい"          ,lv1:"深川印の新型火筒"    ,lv3:"ignis"     ,skillBusable:0,skillB:"先代深川屋親方"       ,skillHint:"黄枠のスキルの攻撃のみでステージクリア"},
   "gustaf"    :{usable:0,exp:0,level:1,name:"グスタフ　ハイドリヒ",lv1:"禁忌の波動"          ,lv3:"null"      ,skillBusable:0,skillB:"妖毒同盟"             ,skillHint:"目元の切り傷をクラフト"},
   "nikola"    :{usable:0,exp:0,level:1,name:"二コラ　テスラ"      ,lv1:"二コラ　テスラ"      ,lv3:"null"      ,skillBusable:0,skillB:"テスラコイル"         ,skillHint:"初めてのクラフトを行う"},
   "violetta"  :{usable:0,exp:0,level:1,name:"ヴィオレッタ"        ,lv1:"ご声援に心より感謝を",lv3:"null"      ,skillBusable:0,skillB:"ヴィオレッタ"         ,skillHint:"ヒーローを20体解放"},
   "coclico"   :{usable:0,exp:0,level:1,name:"コクリコ"            ,lv1:"コクリコ"            ,lv3:"null"      ,skillBusable:0,skillB:"眠り姫のまどろみ"     ,skillHint:"青枠にコクリコをセットしてノーダメージクリア"},
   "maria"     :{usable:0,exp:0,level:1,name:"マリア"              ,lv1:"セルピエンテ バイレ" ,lv3:"null"      ,skillBusable:0,skillB:"聖戦の軌跡"           ,skillHint:"聖録-セインレコード-をクラフト"},
   "adam"      :{usable:0,exp:0,level:1,name:"アダム　ユーリエフ"  ,lv1:"カラドボルク"        ,lv3:"thorne"    ,skillBusable:0,skillB:"翠光騎士"             ,skillHint:"赤枠にアダム、黄枠と緑枠にソーンをセット且つステージレベル3でグラナートをクリア"},
   "thirteen"  :{usable:0,exp:0,level:1,name:"13"                  ,lv1:"堕天変貌"            ,lv3:"null"      ,skillBusable:0,skillB:"堕天の一撃"           ,skillHint:"堕天の鎌をクラフト"},
   "yusha"     :{usable:0,exp:0,level:1,name:"かけだし勇者"        ,lv1:"ジャンプ"            ,lv3:"GBG"       ,skillBusable:0,skillB:"勇者のいかずち"       ,skillHint:"勇者のけんをクラフト"},
   "megmeg"    :{usable:0,exp:0,level:1,name:"メグメグ"            ,lv1:"ばっちーのショードク",lv3:"null"      ,skillBusable:0,skillB:"ウワキオシオキ狙撃"   ,skillHint:"クラフト全制覇"},
   "istaqa"    :{usable:0,exp:0,level:1,name:"イスタカ"            ,lv1:"塵滅の天撃"          ,lv3:"null"      ,skillBusable:0,skillB:"イスタカ"             ,skillHint:"クラフト5種達成"},
   "kirara"    :{usable:0,exp:0,level:1,name:"輝龍院きらら"        ,lv1:"火遁・戒天炎龍召喚"  ,lv3:"nikola"    ,skillBusable:0,skillB:"ライバル共闘！"       ,skillHint:"生放送用ドローンをクラフト"},
   "pororotcho":{usable:0,exp:0,level:1,name:"ポロロッチョ"        ,lv1:"ワテクシは美の化身！",lv3:"null"      ,skillBusable:0,skillB:"ラブリッツ"           ,skillHint:"ヒーロー15体解放"},
   "thorne"    :{usable:0,exp:0,level:1,name:"ソーン　ユーリエフ"  ,lv1:"リオート・メーチ"    ,lv3:"null"      ,skillBusable:0,skillB:"終焉禁獣"             ,skillHint:"やどりぎをクラフト"},
   "delmin"    :{usable:0,exp:0,level:1,name:"デルミン"            ,lv1:"デルミンしゅーと"    ,lv3:"null"      ,skillBusable:0,skillB:"デルミンビーム"       ,skillHint:"クラフト15種達成"},
   "thomas"    :{usable:0,exp:0,level:1,name:"トマス"              ,lv1:"レンタルトランク"    ,lv3:"null"      ,skillBusable:0,skillB:"隙だらけでございます" ,skillHint:"レイラ嬢を見つける"},
   "layer"     :{usable:0,exp:0,level:1,name:"零夜"                ,lv1:"零夜"                ,lv3:"null"      ,skillBusable:0,skillB:"俺様賛美会"           ,skillHint:"全ヒーロー解放"},
   "luluca"    :{usable:0,exp:0,level:1,name:"ルルカ"              ,lv1:"ドリーム☆ズキューン",lv3:"violetta"  ,skillBusable:0,skillB:"絶夢の魔女"           ,skillHint:"絶夢のドレスをクラフト"},
   "pierre"    :{usable:0,exp:0,level:1,name:"ピエール77世"        ,lv1:"ピエール77世"        ,lv3:"null"      ,skillBusable:0,skillB:"大車輪マルゲリータ"   ,skillHint:"マジカルドーナツをクラフト"},
   "amairo"    :{usable:0,exp:0,level:1,name:"狐ヶ咲甘色"          ,lv1:"甘色一閃"            ,lv3:"coclico"   ,skillBusable:0,skillB:"無銘ノ飛刃"           ,skillHint:"緑枠に甘色をセットし狸ヶ原喰色をクリア"},
   "nidhoggr"  :{usable:0,exp:0,level:1,name:"HM-WA100ニーズヘッグ",lv1:"ラグナロク"          ,lv3:"pierre"    ,skillBusable:0,skillB:"フヴェルゲルミル"     ,skillHint:"孤児院へ寄付"},
   "GBG"       :{usable:0,exp:0,level:1,name:"GBガール"            ,lv1:"超重力子砲"          ,lv3:"null"      ,skillBusable:0,skillB:"GBガール"             ,skillHint:"クラフト10種達成"},
   "alice"     :{usable:0,exp:0,level:1,name:"青春アリス"          ,lv1:"不思議のトランプ"    ,lv3:"null"      ,skillBusable:0,skillB:"青春アリス"           ,skillHint:"ヒーロー25体解放"},
   "ignis"     :{usable:0,exp:0,level:1,name:"イグニス"            ,lv1:"ブチ切れたぜ"        ,lv3:"null"      ,skillBusable:0,skillB:"御用だ御用だ"         ,skillHint:"盗難被害に遭う"},
   "rinne"     :{usable:0,exp:0,level:1,name:"糸廻輪廻"            ,lv1:"操糸操術 Ж 八方画策",lv3:"null"      ,skillBusable:0,skillB:"操糸操術 Ж 傀儡機雷" ,skillHint:"傀儡機雷をクラフト"},
   "bugdoll"   :{usable:0,exp:0,level:1,name:"Bugdoll"             ,lv1:"イレギュラーウィング",lv3:"null"      ,skillBusable:0,skillB:"＃イレギュラー"       ,skillHint:"全ステージクリア"},
   "stellea"   :{usable:0,exp:0,level:1,name:"ステリア"            ,lv1:"華槍ブリムラ"        ,lv3:"lovey"     ,skillBusable:0,skillB:"ラヴィちゃんスリスリ" ,skillHint:"隠れやすい樽をクラフト"},
   "lovey"     :{usable:0,exp:0,level:1,name:"ラヴィ"              ,lv1:"チャーミング・キス♂",lv3:"null"      ,skillBusable:0,skillB:"眷属ビンタ"           ,skillHint:"200以上のダメージを受けた上でステージクリア"},
   "al"        :{usable:0,exp:0,level:1,name:"アル"                ,lv1:"アル"                ,lv3:"null"      ,skillBusable:0,skillB:"盗賊の鉄則"           ,skillHint:"ヒーロー35体解放"},
   "dragon"    :{usable:0,exp:0,level:1,name:"ぶれいずどらごん"    ,lv1:"天空王の加護"        ,lv3:"null"      ,skillBusable:0,skillB:"ほのおのいき"         ,skillHint:"ヒーロー30体解放"},
   "nanigashi" :{usable:0,exp:0,level:1,name:"某"                  ,lv1:"某"                  ,lv3:"thomas"    ,skillBusable:0,skillB:"おれとくいわざある！" ,skillHint:"オプションでホームカラーをデフォルト以外の色に変更"},
   "cusith"    :{usable:0,exp:0,level:1,name:"クー・シー"          ,lv1:"ワープニャーク"      ,lv3:"null"      ,skillBusable:0,skillB:"シールドニャーク"     ,skillHint:"≡NYARK≡をクラフト"},
   "amister"   :{usable:0,exp:0,level:1,name:"アミスター"          ,lv1:"紅薔薇の誓い"        ,lv3:"null"      ,skillBusable:0,skillB:"ホランド ロサス"      ,skillHint:"赤枠にマリアを、緑枠にアミスターをセットしてステージクリア"}
  };

let items={
    "null"      :{name:"-"                ,num:0  ,recipe:0,made:1,sentence:" "                       ,value:0},
    "BM"        :{name:"BM"                  ,num:500,recipe:0,made:1,sentence:"ショップで利用可能"      ,value:0},
    "bravery"   :{name:"勇気の欠片"          ,num:0  ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "aloneness" :{name:"孤独の欠片"          ,num:0  ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "love"      :{name:"愛の欠片"            ,num:0  ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "justice"   :{name:"正義の欠片"          ,num:0  ,recipe:0,made:1,sentence:"素材"                    ,value:100},
    "junk"      :{name:"ジャンクパーツ"      ,num:0  ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "seed"      :{name:"不思議な種"          ,num:0  ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "wand"      :{name:"汎用魔法杖"          ,num:0  ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "blade"     :{name:"上質な刃"            ,num:0  ,recipe:0,made:1,sentence:"レア素材"                ,value:1000},
    "cloth"     :{name:"頑丈な布"            ,num:0  ,recipe:0,made:1,sentence:"レア素材"                ,value:500},
    "bento"     :{name:"美味しいお弁当"      ,num:0  ,recipe:0,made:1,sentence:"レア素材"                ,value:500},
    "donation"  :{name:"孤児院へ寄付"          ,num:0  ,recipe:0,made:1,sentence:"寄付するとセット中のヒーローが経験値獲得"             ,value:0},
    "silverData"  :{name:"シルバーデータ"      ,num:0  ,recipe:1,made:1,sentence:"次のバトルで青枠ヒーローが得る経験値を1.5倍。消耗品",value:0  ,materialA:"bravery"     ,Anum:2,materialB:"null"     ,Bnum:0},
    "goldData"    :{name:"ゴールドデータ"      ,num:0  ,recipe:1,made:1,sentence:"次のバトルで青枠ヒーローが得る経験値を2倍。消耗品"  ,value:0  ,materialA:"silverData"  ,Anum:1,materialB:"bravery"  ,Bnum:2},
    "platinumData":{name:"プラチナデータ"      ,num:0  ,recipe:1,made:1,sentence:"次のバトルで青枠ヒーローが得る経験値を3倍。消耗品"  ,value:0  ,materialA:"goldData"    ,Anum:1,materialB:"junk"     ,Bnum:1},
    "energy1000"  :{name:"エナジー缶1000ml"    ,num:0  ,recipe:1,made:1,sentence:"次のバトルで赤枠ヒーローが得る経験値を1.5倍。消耗品",value:0  ,materialA:"aloneness"   ,Anum:2,materialB:"null"     ,Bnum:0},
    "energy4000"  :{name:"エナジー缶4000ml"    ,num:0  ,recipe:1,made:1,sentence:"次のバトルで赤枠ヒーローが得る経験値を2倍。消耗品"  ,value:0  ,materialA:"energy1000"  ,Anum:1,materialB:"aloneness",Bnum:2},
    "energy100000":{name:"エナジー缶100000ml"  ,num:0  ,recipe:1,made:1,sentence:"次のバトルで赤枠ヒーローが得る経験値を3倍。消耗品"  ,value:0  ,materialA:"energy4000"  ,Anum:1,materialB:"wand"     ,Bnum:1},
    "cube3"       :{name:"限界突破キューブ★3" ,num:0  ,recipe:1,made:1,sentence:"次のバトルで黄枠ヒーローが得る経験値を1.5倍。消耗品",value:0  ,materialA:"love"        ,Anum:2,materialB:"null"     ,Bnum:0},
    "cube4"       :{name:"限界突破キューブ★4" ,num:0  ,recipe:1,made:1,sentence:"次のバトルで黄枠ヒーローが得る経験値を2倍。消耗品"  ,value:0  ,materialA:"cube3"       ,Anum:1,materialB:"love"     ,Bnum:2},
    "cube5"       :{name:"限界突破キューブ★5" ,num:0  ,recipe:1,made:1,sentence:"次のバトルで黄枠ヒーローが得る経験値を3倍。消耗品"  ,value:0  ,materialA:"cube4"       ,Anum:1,materialB:"blade"    ,Bnum:1},
    "littleLack"  :{name:"ラックの欠片　小"    ,num:0  ,recipe:1,made:1,sentence:"次のバトルで緑枠ヒーローが得る経験値を1.5倍。消耗品",value:0  ,materialA:"justice"     ,Anum:2,materialB:"null"     ,Bnum:0},
    "middleLack"  :{name:"ラックの欠片　中"    ,num:0  ,recipe:1,made:1,sentence:"次のバトルで緑枠ヒーローが得る経験値を2倍。消耗品"  ,value:0  ,materialA:"littleLack"  ,Anum:1,materialB:"justice"  ,Bnum:2},
    "bigLack"     :{name:"ラックの欠片　大"    ,num:0  ,recipe:1,made:1,sentence:"次のバトルで緑枠ヒーローが得る経験値を3倍。消耗品"  ,value:0  ,materialA:"middleLack"  ,Anum:1,materialB:"seed"     ,Bnum:1},
    "doughnut"    :{name:"マジカルドーナツ"    ,num:0  ,recipe:1,made:1,sentence:"次のバトルで攻撃力が1.5倍。消耗品"                  ,value:0  ,materialA:"cloth"       ,Anum:1,materialB:"bento"    ,Bnum:1},
    "shield"    :{name:"聖王盾トルトゥーガ"  ,num:0  ,recipe:1,made:0,sentence:"クラフトでアミスター解放"          ,value:0  ,materialA:"justice"  ,Anum:2,materialB:"wand"     ,Bnum:1},
    "nyark"     :{name:"NYARK"               ,num:0  ,recipe:1,made:0,sentence:"クラフトでクー・シー解放"          ,value:0  ,materialA:"love"     ,Anum:2,materialB:"junk"     ,Bnum:1},
    "sword"     :{name:"呪われた宝剣"        ,num:0  ,recipe:1,made:0,sentence:"クラフトでアル解放"                ,value:0  ,materialA:"aloneness",Anum:2,materialB:"blade"    ,Bnum:1},
    "usataro"   :{name:"危険なあみぐるみ"    ,num:0  ,recipe:1,made:0,sentence:"クラフトで輪廻解放"                ,value:0  ,materialA:"aloneness",Anum:2,materialB:"cloth"    ,Bnum:1},
    "onigiri"   :{name:"オニギリクママン"    ,num:0  ,recipe:1,made:0,sentence:"クラフトでデルミン解放"            ,value:0  ,materialA:"bravery"  ,Anum:2,materialB:"bento"    ,Bnum:1},
    "duranta"   :{name:"デュランタの花"      ,num:0  ,recipe:1,made:0,sentence:"クラフトで亡き妻の加護解放"        ,value:0  ,materialA:"love"     ,Anum:2,materialB:"seed"     ,Bnum:1},
    "yushaBlade":{name:"勇者のけん"          ,num:0  ,recipe:0,made:0,sentence:"クラフトで勇者のいかずち解放"      ,value:0  ,materialA:"bravery"  ,Anum:2,materialB:"blade"    ,Bnum:1},
    "sickle"    :{name:"堕天の鎌"            ,num:0  ,recipe:0,made:0,sentence:"クラフトで堕天の一撃解放"          ,value:0  ,materialA:"aloneness",Anum:2,materialB:"seed"     ,Bnum:1},
    "shoes"     :{name:"ローファー"          ,num:0  ,recipe:1,made:0,sentence:"クラフトで双挽乃保（スキル）解放"  ,value:0  ,materialA:"bravery"  ,Anum:2,materialB:"cloth"    ,Bnum:1},
    "nyark2"    :{name:"≡NYARK≡"           ,num:0  ,recipe:0,made:0,sentence:"クラフトでシールドニャーク解放"    ,value:0  ,materialA:"aloneness",Anum:2,materialB:"nyark"    ,Bnum:1},
    "usakichi"  :{name:"傀儡機雷"            ,num:0  ,recipe:0,made:0,sentence:"クラフトで操糸操術 Ж 傀儡機雷解放",value:0  ,materialA:"justice"  ,Anum:2,materialB:"usataro"  ,Bnum:1},
    "orange"    :{name:"オレンジジュース"    ,num:0  ,recipe:0,made:0,sentence:"クラフトでちょっとドキドキする解放",value:0  ,materialA:"love"     ,Anum:2,materialB:"bento"    ,Bnum:1},
    "scars"     :{name:"目元の切り傷"        ,num:0  ,recipe:0,made:0,sentence:"クラフトで妖毒同盟解放"            ,value:0  ,materialA:"justice"  ,Anum:2,materialB:"blade"    ,Bnum:1},
    "record"    :{name:"聖録-セインレコード-",num:0  ,recipe:0,made:0,sentence:"クラフトで聖戦の軌跡解放"          ,value:0  ,materialA:"justice"  ,Anum:2,materialB:"wand"     ,Bnum:1},
    "barrels"   :{name:"隠れやすい樽"        ,num:0  ,recipe:0,made:0,sentence:"クラフトでラヴィちゃんスリスリ解放",value:0  ,materialA:"love"     ,Anum:2,materialB:"wand"     ,Bnum:1},
    "sandwich"  :{name:"マリーのサンドイッチ",num:0  ,recipe:0,made:0,sentence:"クラフトでオルレアンの乙女解放"    ,value:0  ,materialA:"justice"  ,Anum:2,materialB:"bento"    ,Bnum:1},
    "drone"     :{name:"生放送用ドローン"    ,num:0  ,recipe:0,made:0,sentence:"クラフトでライバル共闘！解放"      ,value:0  ,materialA:"bravery"  ,Anum:2,materialB:"junk"     ,Bnum:1},
    "dress"     :{name:"絶夢のドレス"        ,num:0  ,recipe:0,made:0,sentence:"クラフトで絶夢の魔女解放"          ,value:0  ,materialA:"love"     ,Anum:2,materialB:"cloth"    ,Bnum:1},
    "tree"      :{name:"やどりぎ"            ,num:0  ,recipe:0,made:0,sentence:"クラフトで終焉禁獣解放"            ,value:0  ,materialA:"aloneness",Anum:2,materialB:"seed"     ,Bnum:1},
    "eiwaz"     :{name:"携帯ゲーム機"        ,num:0  ,recipe:0,made:0,sentence:"クラフトでモンスターサーカス解放"  ,value:0  ,materialA:"bravery"  ,Anum:2,materialB:"junk"     ,Bnum:1}
    };


stageArray=["mekahan","granat","libelulu","kuiro","yurara","cerberus","ankoku","heimdallr"];

enemyFront=[];
enemyBack=0;

attackBuff=1;
defendBuff=0;
deBuff=1;
tankKeep=0;

popUpNCheck=0;

mekahanAct1=0;
mekahanAct2=0;

mekahanSpan1=0;
mekahanSpan2=0;
mekahanSpan3=0;
mekahanSpan4=0;
mekahanSpan5=0;
miniMekahanLife1=0;
miniMekahanLife2=0;

granatAct1=0;
granatAct2=0;

libeluluAct1=0;
libeluluAct2=0;

kuiroAct1=0;
kuiroAct2=0;
kuiroAct3=0;

yuraraAct1=0;
yuraraAct2=0;

cerberusAct1=0;
cerberusAct2=0;

ankokuAct1=0;
ankokuAct2=0;

heimdallrAct1=0;
heimdallrAct2=0;


tutorialAct1=0;
tutorialAct2=0;

errordollAct1=0;
errordollAct2=0;

window.addEventListener('load', (event) => {console.log("ver.2");console.log("key:"+localStorage.getItem('atariUsable'));

localStorage.clear();//消去

  if(!localStorage.getItem('atariUsable')){f_wallAcce("logo");}//     保存
else{localLoad();}


  // ブラウザのウインドウサイズを取得する
  var windowH = window.innerHeight*0.95;

  windowW=windowH*1.817;
  var windowL = String((window.innerWidth-windowW)/2)+"px";
  windowLN=(window.innerWidth-windowW)/2;
  document.documentElement.style.setProperty('--titleBaseLeft', windowL);
  windowW=String(windowW);
  windowWN=windowH*1.817;
  var px = 'px';
  windowW = windowW.concat(px);
  document.documentElement.style.setProperty('--baseWidth', windowW);
  windowH=String(windowH);
  windowH = windowH.concat(px);
  document.documentElement.style.setProperty('--baseHeight', windowH);
  console.log(windowW);
  console.log(windowH);
  
  if(window.innerHeight*1.8>window.innerWidth){
   f_popUpN("はてな","スマホを横画面に<br>PCならウィンドウ幅を<br>もっと広くして<br>読み込み直してください");
  }
  
  sidePosi=0;
  skill=0;
  
  toHome();
  
  
  document.body.addEventListener( "touchstart", function( event ) {
	var touchObject = event.changedTouches[0] ;
	startSidePosi = touchObject.pageX- windowLN;console.log(startSidePosi);console.log("X"+windowLN);
  } ) ;
  document.body.addEventListener( "touchmove", function( event ) {console.log("Xccc");
   if(startSidePosi<=windowWN*0.5){
    rightOn=0;
    leftOn=0;
	var touchObject = event.changedTouches[0] ;
	var moveSidePosi = touchObject.pageX- windowLN;console.log("start"+startSidePosi+",move"+moveSidePosi);
	if(moveSidePosi>=windowWN*0.08){rightOn=1;console.log("Xaaa");}
    else{leftOn=1;console.log("Xbbb");}
   }
  } ) ;
  document.body.addEventListener( "touchend", function( event ) {
	var touchObject = event.changedTouches[0] ;
    rightOn=0;
    leftOn=0;
  } ) ;


  // この位置で、HTML要素に対するaddEventListenerを処理する。
  addListener();
});

function disableScroll(event) {
  event.preventDefault();
}


function toStageSelect(){
 NowScreen="stageSelect";
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=-60;
 stageSelectScreen.style.zIndex=0;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;

 stageSelect(selectedStage);
}

function f_tutorial(tutorialPhase){
 switch(tutorialPhase){
  case "0":
   tutorialScreen.style.zIndex=10;
   tutorialFinish.style.opacity=0;
   tutorialFinishButton.style.zIndex=-60;
   tutorialYes.style.opacity=1;
   tutorialYesButton.style.zIndex=0;
   tutorialNo.style.opacity=1;
   tutorialNoButton.style.zIndex=0;
   tutorialBattleButton.style.zIndex=0;
   document.documentElement.style.setProperty('--tutorialSet', "1");
   document.documentElement.style.setProperty('--tutorialBlackH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "＃コンパスクエストへようこそ！<br>チュートリアルを行いますか？<br><br>※チュートリアルはオプションから後で<br>確認することもできます";
   toHome();
  break;
  case "1":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialYes.style.opacity=0;
   tutorialYesButton.style.zIndex=-60;
   tutorialNo.style.opacity=0;
   tutorialNoButton.style.zIndex=-60;
   tutorialBattleButton.style.zIndex=0;
   document.documentElement.style.setProperty('--tutorialBlackH', "50%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "50%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "70%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "では早速バトルに行ってみましょう<br>画面右下の「バトル」をタップ（クリック）してください";
  break;
  case "2":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialBattleButton.style.zIndex=-60;
   tutorialNextStageButton.style.zIndex=0;
   document.documentElement.style.setProperty('--tutorialBlackH', "40%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "60%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "65%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "60%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "15%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "30%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "20%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "65%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "ステージ選択画面です<br>画面右の”▶”を押してチュートリアルステージを選びましょう";
   selectedStage="mekahan";
   toStageSelect(selectedStage);
  break;
  case "3":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialNextStageButton.style.zIndex=-60;
   tutorialSelectButton.style.zIndex=20;
   document.documentElement.style.setProperty('--tutorialBlackH', "70%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "30%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "25%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "30%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "60%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "ステージを選べたらステージ難易度を選びましょう<br>ステージの難易度はLevel1からlevel3まで<br>Levelが高いほど敵のステータスが上がりますが<br>報酬も経験値も増えます<br><br>今回はLevel1を選びましょう";
   selectedStage="tutorial";
   toStageSelect(selectedStage);
  break;
  case "4":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialSelectButton.style.zIndex=-60;
   document.documentElement.style.setProperty('--tutorialBlackH', "35%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "65%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "10%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "65%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "79%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "50%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "11%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "10%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "30%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "50%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "チームを編成しましょう<br><br>画面左の赤背景のヒーローのアイコンをタップ（クリック）し<br>赤枠のヒーローを編成してみましょう";
   spSet="atari";
   atSet="noho";
   guSet="lyrica";
   taSet="justice";
   tutorialAttackerSelectBack.style.zIndex=0;
   levelSelect(1);
  break;
  case "5":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialAttackerSelectBack.style.zIndex=-60;
   tutorialAttackerSelect.style.zIndex=0;
   tutorialAtaSelect.style.opacity=1;
   document.documentElement.style.setProperty('--tutorialBlackH', "45%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "55%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "23%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "55%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "23%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "30%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "54%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "23%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "スキル「遠慮なく死ぬがいい！」をセットしてみましょう<br><br>スキルの効果はヒーローのレベルによって強化されます<br>※一部ヒーローのレベルで強化されないスキルもあります";
   selectingRoleFunction("attacker");
  break;
  case "6":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialAttackerSelect.style.zIndex=-60;
   tutorialPartyDecision.style.zIndex=0;
   tutorialAtaSelect.style.opacity=0;
   document.documentElement.style.setProperty('--tutorialBlackH', "85%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "15%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "83%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "青枠、黄枠、緑枠も同様にスキルをセットできます<br><br>青枠はヒーローの体力と攻撃倍率<br>赤枠は敵が近くにいるときの攻撃方法<br>黄枠は敵が遠くへいるときの攻撃方法<br>緑枠はその他スキルです<br><br>今回はこのチームでバトルに挑みましょう<br>画面右下の「決定」をタップ（クリック）してください";
   roleSet('attacker','tadaomi');
  break;
  case "7":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialPartyDecision.style.zIndex=-60;
   document.documentElement.style.setProperty('--tutorialBlackH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = " ";
   partyClick();
    setTimeout(function(){
    document.documentElement.style.setProperty('--tutorialBlackH', "0%");
    document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
    document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
    document.documentElement.style.setProperty('--tutorialBlackBH', "100%");
    document.documentElement.style.setProperty('--tutorialBlackBW', "84%");
    document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
    document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
    document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
    document.documentElement.style.setProperty('--tutorialSentenceL', "16%");
    document.documentElement.style.setProperty('--tutorialSentenceW', "84%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "いよいよバトルスタートです<br><br>まずは移動です<br>画面左の青い部分で指を左右にスワイプし<br>画面右側へ向かってみましょう<br>PCの場合は←キー、→キーで移動できます";
   },4000);
  break;
  case "8":
   tutorialPartyDecision.style.zIndex=-60;
   tutorialAttacker.style.zIndex=20;
   document.documentElement.style.setProperty('--tutorialBlackH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "84%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "67%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "16%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "84%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "もう移動はバッチリですね<br><br>次は敵に近づいて攻撃してみましょう<br>画面右上のアイコンをタップすると<br>先ほどセットしたスキルが使用できます<br><br>PCの場合はAキー<br>または右上のアイコンにカーソルを持ってくると<br>スキルが使用できます";
   enemyFront=[65,70,75];
  break;
  case "9":
   tutorialAttacker.style.zIndex=-60;
   tutorialNext.style.opacity=1;
   tutorialNextButton.style.zIndex=20;
   document.documentElement.style.setProperty('--tutorialBlackH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "敵にダメージを与えられましたね<br><br>右上のゲージが敵の体力です<br>左下のゲージがヒーローの体力です<br>敵の体力が0になるとステージクリア<br>ヒーローの体力が0になるとゲームオーバーです<br><br>";
   enemyFront=[];
   enemyBack=2;
  break;
  case "10":
   var select = new Audio('sound/select01.mp3');
   select.currentTime = 0;
   select.play();
   tutorialNext.style.opacity=0;
   tutorialNextButton.style.zIndex=-60;
   document.documentElement.style.setProperty('--tutorialBlackH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   var tutAni = document.getElementById("tutorialSet");
   tutAni.classList.add('tutorialAni');
   myh.innerHTML = " ";
   setTimeout(function(){
    tutorialGunner.style.zIndex=20;
    document.documentElement.style.setProperty('--tutorialBlackH', "33%");
    document.documentElement.style.setProperty('--tutorialBlackAH', "67%");
    document.documentElement.style.setProperty('--tutorialBlackAW', "84%");
    document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
    document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
    document.documentElement.style.setProperty('--tutorialBlackCH', "33%");
    document.documentElement.style.setProperty('--tutorialBlackCW', "16%");
    document.documentElement.style.setProperty('--tutorialBlackCL', "84%");
    document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
    document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
    var myh = document.getElementById("tutorialSentence");
    myh.innerHTML = "敵が遠くに行きましたね<br><br>先ほど使ったスキルでは届かないので<br>黄枠のスキルを使ってみましょう<br><br>画面右中央のアイコンをタップ<br>PCの場合はカーソルを持ってく、またはSキー<br>を押すとスキルが使用できます";
    enemyBack=1;
   },1000);
  break;
  case "11":
   tutorialGunner.style.zIndex=20;
   document.documentElement.style.setProperty('--tutorialBlackH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackBW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCW', "0%");
   document.documentElement.style.setProperty('--tutorialBlackCL', "0%");
   document.documentElement.style.setProperty('--tutorialSentenceL', "5%");
   document.documentElement.style.setProperty('--tutorialSentenceW', "90%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = " ";
   setTimeout(function(){
    tutorialToHomeButton.style.zIndex=20;
    document.documentElement.style.setProperty('--tutorialBlackH', "80%");
    document.documentElement.style.setProperty('--tutorialBlackAH', "20%");
    document.documentElement.style.setProperty('--tutorialBlackAW', "70%");
    var myh = document.getElementById("tutorialSentence");
    myh.innerHTML = "敵を倒せましたね！<br><br>ステージをクリアすると<br>BM、アイテム、経験値が得られます<br>BMはホーム→ショップで<br>アイテムはホーム→クラフトで利用可能です<br>一定値経験値を得るとヒーローのレベルが上がります<br><br>リザルトを確認できたら右下のボタンから<br>ホームに戻りましょう";
   },7000);
  break;
  case "12":
   selectSE.play();
   tutorialToHomeButton.style.zIndex=-60;
   tutorialFinish.style.opacity=1;
   tutorialFinishButton.style.zIndex=20;
   document.documentElement.style.setProperty('--tutorialBlackH', "100%");
   document.documentElement.style.setProperty('--tutorialBlackAH', "0%");
   document.documentElement.style.setProperty('--tutorialBlackAW', "0%");
   var myh = document.getElementById("tutorialSentence");
   myh.innerHTML = "チュートリアルは以上です<br><br>チュートリアルでは扱いませんでしたが<br>緑枠のスキルも戦闘画面右下のアイコンに<br>タップorカーソルを持ってくるで使用できます<br>（PCではDキーでも可）<br><br>※チュートリアルはオプションから再度行えます";
   toHome();
   selectedStage="mekahan";
   var tutAni = document.getElementById("tutorialSet");
   tutAni.classList.remove('tutorialAni');
  break;
 }
}

function toOption(){
 var select = new Audio('sound/select01.mp3');
 select.currentTime = 0;
 select.play();
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=-60;
 optionScreen.style.zIndex=0;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;
 
 var myh = document.getElementById("homeWallBase");
 myh.innerHTML = " ";
 
 var node=document.createElement('label');
 node.setAttribute('id',"logoWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("logoWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=logo onclick=f_wallAcce('logo')>ロゴ<br>";
 
 if(heros["stellea"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"mekahanWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("mekahanWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=mekahan onclick=f_wallAcce('mekahan')>家庭用メカ<br>";
 }
 
 if(heros["adam"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"granatWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("granatWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=granat onclick=f_wallAcce('granat')>グラナート<br>";
 }
 
 if(heros["luluca"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"libeluluWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("libeluluWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=libelulu onclick=f_wallAcce('libelulu')>リベルル<br>";
 }
 
 if(heros["amairo"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"kuiroWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("kuiroWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=kuiro onclick=f_wallAcce('kuiro')>狸ヶ原喰色<br>";
 }
 
 if(heros["kirara"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"yuraraWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("yuraraWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=yurara onclick=f_wallAcce('yurara')>幽々院ゆらら<br>";
 }
 
 if(heros["nanigashi"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"cerberusWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("cerberusWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=cerberus onclick=f_wallAcce('cerberus')>ケルベロス<br>";
 }
 
 if(heros["yusha"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"ankokuWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("ankokuWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=ankoku onclick=f_wallAcce('ankoku')>暗黒騎士<br>";
 }
 
 if(heros["nidhoggr"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"heimdallrWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("heimdallrWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=heimdallr onclick=f_wallAcce('heimdallr')>ヘイムダル<br>";
 }
 
 if(heros["bugdoll"].usable>=1){
 var node=document.createElement('label');
 node.setAttribute('id',"errordollWall");
 var parentDiv = document.getElementById("homeWallBase");
 parentDiv.appendChild(node);
 var myh = document.getElementById("errordollWall");
 myh.innerHTML = "<input type=radio name=wallAcce value=errordoll onclick=f_wallAcce('errordoll')>Errordoll<br>";
 }
 
 for(var elem in heros){
  if(heros[elem].level>=5){
   var node=document.createElement('label');
   node.setAttribute('id',heros[elem].name+"wall");
   var parentDiv = document.getElementById("homeWallBase");
   parentDiv.appendChild(node);
   
   var myh = document.getElementById(heros[elem].name+"wall");
   myh.innerHTML = "<input type=radio name=wallAcce value="+elem+" onclick=f_wallAcce('"+elem+"')>"+heros[elem].name+"<br>";
   
  }
 }
 if(heros["layer"].skillBusable==1&&heros["megmeg"].skillBusable==1){
  for(var elem in heros){  
   var node=document.createElement('label');
   node.setAttribute('id',heros[elem].name+"wallSkill");
   var parentDiv = document.getElementById("homeWallBase");
   parentDiv.appendChild(node);
   
   var myh = document.getElementById(heros[elem].name+"wallSkill");
   myh.innerHTML = "<input type=radio name=wallAcce value="+elem+"_skill1 onclick=f_wallAcce('"+elem+"_skill1')>"+heros[elem].name+"スキル<br>";
  }
 }
}

function f_wallAcce(elem){
 selectSE.play();
 localStorage.setItem("wallAcce", elem);
 if(elem=="logo"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = " ";
 }
 else if(elem=="mekahan"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/ミニメカ反A.png>";
 }
 else if(elem=="granat"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/グラナートセット.png>";
 }
 else if(elem=="libelulu"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/リベルル.png>";
 }
 else if(elem=="kuiro"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/喰色ヒト.png>";
 }
 else if(elem=="yurara"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/ゆらら.png>";
 }
 else if(elem=="cerberus"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/ケルベロスB.png>";
 }
 else if(elem=="ankoku"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/暗黒騎士.png>";
 }
 else if(elem=="heimdallr"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/ヘイムダル.png>";
 }
 else if(elem=="errordoll"){
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/errordoll.png>";
 }
 else{
  var myh = document.getElementById("homeWallAcceBase");
  myh.innerHTML = "<img id=homeWallAcce src=item/"+elem+".png>";
 }
}

function homeColorSet(){
 selectSE.play();
 localStorage.setItem("localColor", document.getElementById("colorSelect").value);
 document.documentElement.style.setProperty('--homeColor', document.getElementById("colorSelect").value);
 if(document.getElementById("colorSelect").value!="#0012ff"&&heros["nanigashi"].skillBusable==0){
  f_popUpN("nanigashi","初めてホームカラーを変更<br><br>某のスキルが解放されました。<br>※某が解放されていないと使えません");
  heros["nanigashi"].skillBusable=1;
 }
}

function toHome(){
 NowScreen="home";
 localSave();
 homeScreen.style.zIndex=0;
 heroScreen.style.zIndex=-60;
 itemListScreen.style.zIndex=-60;
 craftScreen.style.zIndex=-60;
 shopScreen.style.zIndex=-60;
 optionScreen.style.zIndex=-60;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;
 gameOverScreen.style.zIndex=-60;
 
 defaultBGM.play();
 
 var leilaRandom=Math.floor( Math.random() * 15);
 if(leilaRandom==0){
  leila.style.zIndex=0;
 }
 if(nofice==1){
  nofice=0;
  var noficeRandom=Math.floor( Math.random() * 3);
  if(noficeRandom==0){
   var lostItem="bravery";
  }
  else if(noficeRandom==0){
   var lostItem="bravery";
  }
  else if(noficeRandom==1){
   var lostItem="aloneness";
  }
  else if(noficeRandom==2){
   var lostItem="love";
  }
  else if(noficeRandom==3){
   var lostItem="justice";
  }
  items[lostItem].num=items[lostItem].num-1;
  f_popUpN("nofice","何者かに"+items[lostItem].name+"を盗まれた！");
  if(heros["ignis"].skillBusable==0){
   f_popUpN("ignis","イグニスのスキルが解放されました。<br>※イグニスが解放されていないと使えません");
   heros["ignis"].skillBusable=1;
  }
 }
 tankKeep=0;
 atariBuffEffect.style.opacity=0;
 var myh = document.getElementById("itemList");
 myh.innerHTML = " ";
 var myh = document.getElementById("craftList");
 myh.innerHTML = " ";
 var listHeroN=0;
 var getHeroN=0;
 var skillN=0;
 for(var elem in heros){
  listHeroN=listHeroN+1;
  if(heros[elem].usable>=1){
   getHeroN=getHeroN+1;
  }
  if(heros[elem].skillBusable>=1){
   skillN=skillN+1;
  }
 }
 var myh = document.getElementById("heroCollect");
 myh.innerHTML = getHeroN+"/"+listHeroN;
 var listItemN=0;
 var getItemN=0;
 for(var elem in items){
  if(elem!="BM"&&elem!="null"&&elem!="doughnut"&&elem!="donation"&&elem!="silverData"&&elem!="goldData"&&elem!="platinumData"&&elem!="energy1000"&&elem!="energy4000"&&elem!="energy100000"&&elem!="littleLack"&&elem!="middleLack"&&elem!="bigLack"&&elem!="cube3"&&elem!="cube4"&&elem!="cube5"){
   if(items[elem].value==0){
    listItemN=listItemN+1;
    if(items[elem].made==1){
     getItemN=getItemN+1;
    }
   }
  }
 }
 var myh = document.getElementById("itemCollect");
 myh.innerHTML = getItemN+"/"+listItemN;
 if(heros["stellea"].usable==1&&heros["adam"].usable==1&&heros["luluca"].usable==1&&heros["amairo"].usable==1&&heros["kirara"].usable==1&&heros["nanigashi"].usable==1&&heros["yusha"].usable==1&&heros["nidhoggr"].usable==1&&stageArray.indexOf("errordoll")==-1){
  stageArray[8]="errordoll";
  if(heros["bugdoll"].usable==0){
   f_popUpN("ステージ選択画面？","祝 8ステージクリア！<br><br>最後のステージが解放されました");
  }
 }
 if(heros["bugdoll"].usable==1&&heros["bugdoll"].skillBusable==0){
  f_popUpN("bugdoll","祝 全ステージクリア！<br><br>bugdollのスキルが解放されました");
  heros["bugdoll"].skillBusable=1;
 }
 if(items["doughnut"].num>=1&&heros["pierre"].skillBusable==0){
  f_popUpN("pierre","初めてマジカルドーナツをクラフトした！<br><br>ピエールのスキルが解放されました。<br>※ピエールが解放されていないと使えません");
  heros["pierre"].skillBusable=1;
 }
 if(getItemN>=1&&heros["nikola"].skillBusable==0){
  f_popUpN("nikola","祝 初クラフト達成！<br><br>テスラのスキルが解放されました。<br>※テスラが解放されていないと使えません");
  heros["nikola"].skillBusable=1;
 }
 if(getItemN>=5&&heros["istaqa"].skillBusable==0){
  f_popUpN("istaqa","祝 クラフト5種達成！<br><br>イスタカのスキルが解放されました。<br>※イスタカが解放されていないと使えません");
  heros["istaqa"].skillBusable=1;
 }
 if(getItemN>=10&&heros["GBG"].skillBusable==0){
  f_popUpN("GBG","祝 クラフト10種達成！<br><br>GBガールのスキルが解放されました。<br>※GBガールが解放されていないと使えません");
  heros["GBG"].skillBusable=1;
 }
 if(getItemN>=15&&heros["delmin"].skillBusable==0){
  f_popUpN("delmin","祝 クラフト15種達成！<br><br>デルミンのスキルが解放されました。<br>※デルミンが解放されていないと使えません");
  heros["delmin"].skillBusable=1;
 }
 if(getHeroN>=15&&heros["pororotcho"].skillBusable==0){
  f_popUpN("pororotcho","祝 ヒーロー15体解放！<br><br>ポロロッチョのスキルが解放されました。<br>※ポロロッチョが解放されていないと使えません");
  heros["pororotcho"].skillBusable=1;
 }
 if(getHeroN>=20&&heros["violetta"].skillBusable==0){
  f_popUpN("violetta","祝 ヒーロー20体解放！<br><br>ヴィオレッタのスキルが解放されました。<br>※ヴィオレッタが解放されていないと使えません");
  heros["violetta"].skillBusable=1;
 }
 if(getHeroN>=25&&heros["alice"].skillBusable==0){
  f_popUpN("alice","祝 ヒーロー25体解放！<br><br>アリスのスキルが解放されました。<br>※アリスが解放されていないと使えません");
  heros["alice"].skillBusable=1;
 }
 if(getHeroN>=30&&heros["dragon"].skillBusable==0){
  f_popUpN("dragon","祝 ヒーロー30体解放！<br><br>ぶれどらのスキルが解放されました。<br>※ぶれどらが解放されていないと使えません");
  heros["dragon"].skillBusable=1;
 }
 if(getHeroN>=35&&heros["al"].skillBusable==0){
  f_popUpN("al","祝 ヒーロー35体解放！<br><br>アルのスキルが解放されました。<br>※アルが解放されていないと使えません");
  heros["al"].skillBusable=1;
 }
 if(getItemN==listItemN&&heros["megmeg"].skillBusable==0){
  f_popUpN("megmeg","祝 クラフト全制覇！<br><br>メグメグのスキルが解放されました。<br>※メグメグが解放されていないと使えません");
  heros["megmeg"].skillBusable=1;
 }
 if(getHeroN==listHeroN&&heros["layer"].skillBusable==0){
  f_popUpN("layer","祝 全ヒーロー開放！<br><br>零夜のスキルが解放されました");
  heros["layer"].skillBusable=1;
 }
 if(skillN==listHeroN&&allClear<=1){
  allClear=2;
  f_popUpN("cracker","祝 全スキル解放！！<br>複数種の壁紙が解放されました<br>ホーム→オプションでご確認ください");
 }
}

function toHero(){
 var select = new Audio('sound/select01.mp3');
 select.currentTime = 0;
 select.play();
 NowScreen="hero";
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=0;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;
 leila.style.zIndex=-60;

 for(var elem in heros){
 
  if(heros[elem].usable==1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusButton');
   var parentDiv = document.getElementById("heroList");
   parentDiv.appendChild(node);
   
   var myh = document.getElementById(elem+"StatusButton");
   myh.innerHTML = "<img src=item/"+elem+".png class=heroStatusIcon onclick=selectSE.play();heroDetailCheck('"+elem+"') id="+elem+"StatusOpaButton>";
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusStyle');
   var parentDiv = document.getElementById("heroList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaButton:1;}#"+elem+"StatusOpaButton{opacity:var(--"+elem+"StatusOpaButton);}";
   
   
  var tag=elem+"StatusOpaButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
  
   heroDetailCheck(elem);
  }
 }
 heroDetailCheck("atari");
}

function toItem(){
 var select = new Audio('sound/select01.mp3');
 select.currentTime = 0;
 select.play();
 NowScreen="item";
 homeScreen.style.zIndex=-10;
 heroScreen.style.zIndex=-60;
 itemListScreen.style.zIndex=0;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=-60;
 actionGameScreen.style.zIndex=-60;
 clearResultScreen.style.zIndex=-60;
 leila.style.zIndex=-60;
 for(var elem in items){
 
  if(items[elem].num>=1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusItemButton');
   var parentDiv = document.getElementById("itemList");
   parentDiv.appendChild(node);
   
   var myh = document.getElementById(elem+"StatusItemButton");
   myh.innerHTML = "<img src=item/"+items[elem].name+".png class=itemStatusIcon onclick=selectSE.play();itemDetailCheck('"+elem+"') id="+elem+"StatusItemOpaButton>";
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusItemStyle');
   var parentDiv = document.getElementById("itemList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusItemStyle');
   myh.innerHTML = ":root{--"+elem+"StatusItemOpaButton:1;}#"+elem+"StatusItemOpaButton{opacity:var(--"+elem+"StatusItemOpaButton);}";
   
   
  var tag=elem+"StatusItemOpaButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
 
   itemDetailCheck(elem);
  }
 }
}

function heroDetailCheck(checkHero){
  if(heros[checkHero].skillBusable>=1){
   if(checkHero=="maria"&&atSet=="maria"&&taSet=="amister"){
    var myh = document.getElementById("heroStatusDetail");
    myh.innerHTML = "<img src=item/maria&amister.png id=heroStatusDetailImg><div id=heroStatusDetailName>"+heros[checkHero].name+"</div><div id=heroStatusDetailLv>Level</div><div id=heroStatusDetailLvN>"+heros[checkHero].level+"</div><div id=heroStatusDetailSkill1>skill</div><div id=heroStatusDetailSkill1Name>"+heros[checkHero].lv1+"</div><div id=heroStatusDetailSkill2Name>"+heros[checkHero].skillB+"</div>";
   }
   else{
    var myh = document.getElementById("heroStatusDetail");
    myh.innerHTML = "<img src=item/"+checkHero+".png id=heroStatusDetailImg><div id=heroStatusDetailName>"+heros[checkHero].name+"</div><div id=heroStatusDetailLv>Level</div><div id=heroStatusDetailLvN>"+heros[checkHero].level+"</div><div id=heroStatusDetailSkill1>skill</div><div id=heroStatusDetailSkill1Name>"+heros[checkHero].lv1+"</div><div id=heroStatusDetailSkill2Name>"+heros[checkHero].skillB+"</div>";
   }
  }
  else{
   if(checkHero=="maria"&&atSet=="maria"&&taSet=="amister"){
    var myh = document.getElementById("heroStatusDetail");
    myh.innerHTML = "<img src=item/maria&amister.png id=heroStatusDetailImg><div id=skillHint><div class=buttonA><div class=buttonB>スキル解放のヒント</div></div></div></div><div id=skillHintButton onclick=f_popUpN('"+checkHero+"','"+heros[checkHero].skillHint+"');selectSE.play();></div><div id=heroStatusDetailName>"+heros[checkHero].name+"</div><div id=heroStatusDetailLv>Level</div><div id=heroStatusDetailLvN>"+heros[checkHero].level+"</div><div id=heroStatusDetailSkill1>skill</div><div id=heroStatusDetailSkill1Name>"+heros[checkHero].lv1+"</div>";
   }
   else{
    var myh = document.getElementById("heroStatusDetail");
    myh.innerHTML = "<img src=item/"+checkHero+".png id=heroStatusDetailImg><div id=skillHint><div class=buttonA><div class=buttonB>スキル解放のヒント</div></div></div><div id=skillHintButton onclick=f_popUpN('"+checkHero+"','"+heros[checkHero].skillHint+"');selectSE.play();></div><div id=heroStatusDetailName>"+heros[checkHero].name+"</div><div id=heroStatusDetailLv>Level</div><div id=heroStatusDetailLvN>"+heros[checkHero].level+"</div><div id=heroStatusDetailSkill1>skill</div><div id=heroStatusDetailSkill1Name>"+heros[checkHero].lv1+"</div>";
   }
   var tag="skillHintButton";
   var dv=document.getElementById(tag);
   dv.addEventListener('pointerover',f_chgOpacity1(tag,1),false);
   dv.addEventListener('pointerout' ,f_chgOpacity1(tag,0),false);
  }
}

function itemDetailCheck(checkItem){
   var myh = document.getElementById("itemStatusDetail");
   myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=itemStatusDetailImg><div id=itemStatusDetailName>"+items[checkItem].name+"</div><div id=itemStatusDetailLv>所持数</div><div id=itemStatusDetailLvN>"+items[checkItem].num+"</div><div id=itemStatusDetailSkill1>"+items[checkItem].sentence+"</div>";
}

function toCraft(){
 var select = new Audio('sound/select01.mp3');
 select.currentTime = 0;
 select.play();
 craftCheckSet.style.zIndex=-60;
 craftErrorSet.style.zIndex=-60;
 itemCraftSet.style.zIndex=-60;
 homeScreen.style.zIndex=-10;
 craftScreen.style.zIndex=0;
 for(var elem in items){
 
  if(items[elem].recipe>=1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusCraftButton');
   var parentDiv = document.getElementById("craftList");
   parentDiv.appendChild(node);
   
   if(items[elem].made==0){
    var myh = document.getElementById(elem+"StatusCraftButton");
    myh.innerHTML = "<img src=item/はてな.png class=itemStatusIcon onclick=craftDetailCheck('"+elem+"') id="+elem+"StatusOpaCraftButton>";
   }
   else{
    var myh = document.getElementById(elem+"StatusCraftButton");
    myh.innerHTML = "<img src=item/"+items[elem].name+".png class=itemStatusIcon onclick=craftDetailCheck('"+elem+"') id="+elem+"StatusOpaCraftButton>";
   }
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusItemStyle');
   var parentDiv = document.getElementById("craftList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusItemStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaCraftButton:1;--synthesisButton:0;}#"+elem+"StatusOpaCraftButton{opacity:var(--"+elem+"StatusOpaCraftButton);}#synthesisButton{opacity:var(--synthesisButton);position:absolute;top:88%;left:20%;width:60%;height:10%;backGround:#ffffff;}";
   
   
  var tag=elem+"StatusOpaCraftButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
  craftDetailCheck(elem);
  }
 }
 craftDetailCheck("silverData");
}

function f_synthesisCheck(item){
 if(items[items[item].materialA].num>=items[item].Anum&&items[items[item].materialB].num>=items[item].Bnum){
  selectSE.play();
  craftCheckSet.style.zIndex=0;
  craftedItem=item;
 }
 else{
  backSE.play();
  craftErrorSet.style.zIndex=0;
 }
}

function itemCraft(){
 goodSE.play();
 craftCheckSet.style.zIndex=-60;
 itemCraftSet.style.zIndex=0;
 if(craftedItem=="doughnut"){
  f_popUpN(items[craftedItem].name,"特定のクラフトを行ったため<br>次のバトルで攻撃力が増加します");
 }
 if(craftedItem=="silverData"||craftedItem=="goldData"||craftedItem=="platinumData"){
  f_popUpN(items[craftedItem].name,"特定のクラフトを行ったため<br>次のバトルで青枠ヒーローの経験値が増加します");
 }
 if(craftedItem=="energy1000"||craftedItem=="energy4000"||craftedItem=="energy100000"){
  f_popUpN(items[craftedItem].name,"特定のクラフトを行ったため<br>次のバトルで赤枠ヒーローの経験値が増加します");
 }
 if(craftedItem=="cube3"||craftedItem=="cube4"||craftedItem=="cube5"){
  f_popUpN(items[craftedItem].name,"特定のクラフトを行ったため<br>次のバトルで黄枠ヒーローの経験値が増加します");
 }
 if(craftedItem=="littleLack"||craftedItem=="middleLack"||craftedItem=="bigLack"){
  f_popUpN(items[craftedItem].name,"特定のクラフトを行ったため<br>次のバトルで緑枠ヒーローの経験値が増加します");
 }
 if(craftedItem=="shield"&&heros["amister"].usable==0){
  liberateHero("amister","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="nyark"&&heros["cusith"].usable==0){
  liberateHero("cusith","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
  items["nyark2"].recipe=1;
  f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました");
 }
 if(craftedItem=="sword"&&heros["al"].usable==0){
  liberateHero("al","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="usataro"&&heros["rinne"].usable==0){
  liberateHero("rinne","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
  items["usakichi"].recipe=1;
  f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました");
 }
 if(craftedItem=="eiwaz"&&heros["atari"].skillBusable==0){
  f_popUpN("atari","特定のクラフトを行ったため<br>アタリのスキルが解放されました。");
  heros["atari"].skillBusable=1;
 }
 if(craftedItem=="onigiri"&&heros["delmin"].usable==0){
  liberateHero("delmin","特定のクラフトを行ったため<br>以下のヒーローが解放されました。");
 }
 if(craftedItem=="duranta"&&heros["luciano"].skillBusable==0){
  f_popUpN("luciano","特定のクラフトを行ったため<br>ルチアーノのスキルが解放されました。");
  heros["luciano"].skillBusable=1;
 }
 if(craftedItem=="yushaBlade"&&heros["yusha"].skillBusable==0){
  f_popUpN("yusha","特定のクラフトを行ったため<br>かけだし勇者のスキルが解放されました。");
  heros["yusha"].skillBusable=1;
 }
 if(craftedItem=="sickle"&&heros["thirteen"].skillBusable==0){
  f_popUpN("thirteen","特定のクラフトを行ったため<br>13のスキルが解放されました。");
  heros["thirteen"].skillBusable=1;
 }
 if(craftedItem=="shoes"&&heros["noho"].skillBusable==0){
  f_popUpN("noho","特定のクラフトを行ったため<br>双挽乃保のスキルが解放されました。");
  heros["noho"].skillBusable=1;
 }
 if(craftedItem=="nyark2"&&heros["cusith"].skillBusable==0){
  f_popUpN("cusith","特定のクラフトを行ったため<br>クー・シーのスキルが解放されました。");
  heros["cusith"].skillBusable=1;
 }
 if(craftedItem=="usakichi"&&heros["rinne"].skillBusable==0){
  f_popUpN("rinne","特定のクラフトを行ったため<br>輪廻のスキルが解放されました。");
  heros["rinne"].skillBusable=1;
 }
 if(craftedItem=="orange"&&heros["marcos"].skillBusable==0){
  f_popUpN("marcos","特定のクラフトを行ったため<br>マルコス55のスキルが解放されました。");
  heros["marcos"].skillBusable=1;
 }
 if(craftedItem=="scars"&&heros["gustaf"].skillBusable==0){
  f_popUpN("gustaf","特定のクラフトを行ったため<br>グスタフのスキルが解放されました。<br>※グスタフが解放されていないと使えません");
  heros["gustaf"].skillBusable=1;
 }
 if(craftedItem=="record"&&heros["maria"].skillBusable==0){
  f_popUpN("maria","特定のクラフトを行ったため<br>マリアのスキルが解放されました。<br>※マリアが解放されていないと使えません");
  heros["maria"].skillBusable=1;
 }
 if(craftedItem=="barrels"&&heros["stellea"].skillBusable==0){
  f_popUpN("stellea","特定のクラフトを行ったため<br>ステリアのスキルが解放されました。<br>※ステリアが解放されていないと使えません");
  heros["stellea"].skillBusable=1;
 }
 if(craftedItem=="sandwich"&&heros["jeanne"].skillBusable==0){
  f_popUpN("jeanne","特定のクラフトを行ったため<br>ジャンヌのスキルが解放されました。");
  heros["jeanne"].skillBusable=1;
 }
 if(craftedItem=="drone"&&heros["kirara"].skillBusable==0){
  f_popUpN("kirara","特定のクラフトを行ったため<br>きららのスキルが解放されました。");
  heros["kirara"].skillBusable=1;
 }
 if(craftedItem=="dress"&&heros["luluca"].skillBusable==0){
  f_popUpN("luluca","特定のクラフトを行ったため<br>ルルカのスキルが解放されました。");
  heros["luluca"].skillBusable=1;
 }
 if(craftedItem=="tree"&&heros["thorne"].skillBusable==0){
  f_popUpN("thorne","特定のクラフトを行ったため<br>ソーンのスキルが解放されました。<br>※ソーンが解放されていないと使えません");
  heros["thorne"].skillBusable=1;
 }
 items[craftedItem].made=1;
 items[craftedItem].num=items[craftedItem].num+1;
 items[items[craftedItem].materialA].num=items[items[craftedItem].materialA].num-items[craftedItem].Anum;
 items[items[craftedItem].materialB].num=items[items[craftedItem].materialB].num-items[craftedItem].Bnum;
 var myh = document.getElementById("craftedItemBase");
 myh.innerHTML = "<img id=craftedItem src=item/"+items[craftedItem].name+".png>";
}

function craftDetailCheck(checkItem){
   selectSE.play();
   var myh = document.getElementById("craftStatusDetail");
   if(items[checkItem].made==0){
    if(items[items[checkItem].materialA].num>=items[checkItem].Anum){console.log("A,OK");}
    if(items[items[checkItem].materialB].num>=items[checkItem].Bnum){console.log("B,OK");}
    
    if(items[items[checkItem].materialA].num>=items[checkItem].Anum&&items[items[checkItem].materialB].num>=items[checkItem].Bnum){
     myh.innerHTML = "<img src=item/はてな.png id=craftStatusDetailImg onclick=f_popUpN('はてな','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum>"+items[checkItem].Anum+"個</div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum>"+items[checkItem].Bnum+"個</div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
    else if(items[items[checkItem].materialA].num<=items[checkItem].Anum&&items[items[checkItem].materialB].num>=items[checkItem].Bnum){
     myh.innerHTML = "<img src=item/はてな.png id=craftStatusDetailImg onclick=f_popUpN('はてな','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum><font style=color:#ff0000;>"+items[checkItem].Anum+"個</font></div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum>"+items[checkItem].Bnum+"個</div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
    else if(items[items[checkItem].materialA].num>=items[checkItem].Anum&&items[items[checkItem].materialB].num<=items[checkItem].Bnum){console.log("Bnum:"+items[items[checkItem].materialB].num);
     myh.innerHTML = "<img src=item/はてな.png id=craftStatusDetailImg onclick=f_popUpN('はてな','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum>"+items[checkItem].Anum+"個</div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum><font style=color:#ff0000;>"+items[checkItem].Bnum+"個</font></div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
    else{console.log("Bnum:"+items[items[checkItem].materialB].num);console.log("Bneed:"+items[checkItem].Bnum);
     myh.innerHTML = "<img src=item/はてな.png id=craftStatusDetailImg onclick=f_popUpN('はてな','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum><font style=color:#ff0000;>"+items[checkItem].Anum+"個</font></div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum><font style=color:#ff0000;>"+items[checkItem].Bnum+"個</font></div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
   }
   else{
    if(items[items[checkItem].materialA].num>=items[checkItem].Anum&&items[items[checkItem].materialB].num>=items[checkItem].Bnum){
     myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=craftStatusDetailImg onclick=f_popUpN('"+items[checkItem].name+"','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum>"+items[checkItem].Anum+"個</div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum>"+items[checkItem].Bnum+"個</div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
    else if(items[items[checkItem].materialA].num<=items[checkItem].Anum&&items[items[checkItem].materialB].num>=items[checkItem].Bnum){
     myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=craftStatusDetailImg onclick=f_popUpN('"+items[checkItem].name+"','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum><font style=color:#ff0000;>"+items[checkItem].Anum+"個</font></div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum>"+items[checkItem].Bnum+"個</div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
    else if(items[items[checkItem].materialA].num>=items[checkItem].Anum&&items[items[checkItem].materialB].num<=items[checkItem].Bnum){console.log("Bnum:"+items[items[checkItem].materialB].num);
     myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=craftStatusDetailImg onclick=f_popUpN('"+items[checkItem].name+"','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum>"+items[checkItem].Anum+"個</div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum><font style=color:#ff0000;>"+items[checkItem].Bnum+"個</font></div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
    else{console.log("Bnum:"+items[items[checkItem].materialB].num);console.log("Bneed:"+items[checkItem].Bnum);
     myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=craftStatusDetailImg onclick=f_popUpN('"+items[checkItem].name+"','"+items[checkItem].sentence+"');selectSE.play();><div id=craftStatusDetailName>"+items[checkItem].name+"</div><div id=craftNeedItemBack>必要素材</div><div id=craftStatusDetailMaterialA>"+items[items[checkItem].materialA].name+"</div><div id=craftStatusDetailMaterialAnum><font style=color:#ff0000;>"+items[checkItem].Anum+"個</font></div><div id=craftStatusDetailMaterialB>"+items[items[checkItem].materialB].name+"</div><div id=craftStatusDetailMaterialBnum><font style=color:#ff0000;>"+items[checkItem].Bnum+"個</font></div><div id=synthesis><div class=buttonA><div class=buttonB>合成</div></div></div><div id=synthesisButton onclick=f_synthesisCheck('"+checkItem+"')></div>";
    }
   }
  var tag="synthesisButton";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity1(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity1(tag,0),false);
  
  var tag="craftStatusDetailImg";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
}

function toShop(){
 var select = new Audio('sound/select01.mp3');
 select.currentTime = 0;
 select.play();
 shopCheckSet.style.zIndex=-60;
 shopErrorSet.style.zIndex=-60;
 itemShopSet.style.zIndex=-60;
 homeScreen.style.zIndex=-10;
 shopScreen.style.zIndex=0;
 if(heros["nidhoggr"].usable>=1){
  items["donation"].value=500;
 }
 var myh = document.getElementById("restMoney");
 myh.innerHTML = "残額:"+items["BM"].num+"BM";
 for(var elem in items){
 
  if(items[elem].value>=1){
   let node=document.createElement('span');
   node.setAttribute('id',elem+'StatusShopButton');
   var parentDiv = document.getElementById("shopList");
   parentDiv.appendChild(node);
   
   if(items[elem].made==0){
    var myh = document.getElementById(elem+"StatusShopButton");
    myh.innerHTML = "<img src=item/はてな.png class=itemStatusIcon onclick=shopDetailCheck('"+elem+"') id="+elem+"StatusOpaShopButton>";
   }
   else{
    var myh = document.getElementById(elem+"StatusShopButton");
    myh.innerHTML = "<img src=item/"+items[elem].name+".png class=itemStatusIcon onclick=shopDetailCheck('"+elem+"') id="+elem+"StatusOpaShopButton>";
   }
   
   let nodeStaOpa=document.createElement('style');
   nodeStaOpa.setAttribute('id',elem+'StatusItemStyle');
   var parentDiv = document.getElementById("shopList");
   parentDiv.appendChild(nodeStaOpa);
   
   var myh = document.getElementById(elem+'StatusItemStyle');
   myh.innerHTML = ":root{--"+elem+"StatusOpaShopButton:1;--buyingButton:0;}#"+elem+"StatusOpaShopButton{opacity:var(--"+elem+"StatusOpaShopButton);}#buyingButton{opacity:var(--buyingButton);position:absolute;top:88%;left:20%;width:60%;height:10%;backGround:#ffffff;}";
   
   
  var tag=elem+"StatusOpaShopButton";
  var dv=document.getElementById(tag);console.log();
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
 
  shopDetailCheck(elem);
  }
 }
 shopDetailCheck("bravery");
}

function f_buyingCheck(item){
 if(items["BM"].num>=items[item].value){
  selectSE.play();
  shopCheckSet.style.zIndex=0;
  boughtItem=item;
 }
 else{
  backSE.play();
  shopErrorSet.style.zIndex=0;
 }
}

function itemShop(){
 var select = new Audio('sound/coin07.mp3');
 select.currentTime = 0;
 select.play();
 shopCheckSet.style.zIndex=-60;
 items["BM"].num=items["BM"].num-items[boughtItem].value;
 items[boughtItem].num=items[boughtItem].num+1;
 var myh = document.getElementById("boughtItemBase");
 myh.innerHTML = "<img id=boughtItem src=item/"+items[boughtItem].name+".png>";
 var myh = document.getElementById("restMoney");
 myh.innerHTML = "残額:"+items["BM"].num+"BM";
 if(boughtItem=="donation"){
  if(heros["nidhoggr"].skillBusable==0){
   f_popUpN("nidhoggr","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
   heros["nidhoggr"].skillBusable=1;
  }
  items["donation"].num=0
  f_popUpN(items[boughtItem].name,heros[spSet].name+"、"+heros[atSet].name+"、"+heros[guSet].name+"、"+heros[taSet].name+"が経験値を得ました");
  var beforeSpLv=heros[spSet].level;
  var beforeAtLv=heros[atSet].level;
  var beforeGuLv=heros[guSet].level;
  var beforeTaLv=heros[taSet].level;
  getExperience(spSet,200);
  getExperience(atSet,200);
  getExperience(guSet,200);
  getExperience(taSet,200);
  if(heros[spSet].level-beforeSpLv>0&&heros[spSet].level>=3&&heros[spSet].lv3!="null"&&beforeSpLv<=2){liberateHero(heros[spSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
  if(heros[atSet].level-beforeAtLv>0&&heros[atSet].level>=3&&heros[atSet].lv3!="null"&&beforeAtLv<=2){liberateHero(heros[atSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
  if(heros[guSet].level-beforeGuLv>0&&heros[guSet].level>=3&&heros[guSet].lv3!="null"&&beforeGuLv<=2){liberateHero(heros[guSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
  if(heros[taSet].level-beforeTaLv>0&&heros[taSet].level>=3&&heros[taSet].lv3!="null"&&beforeTaLv<=2){liberateHero(heros[taSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
  if(heros[spSet].level-beforeSpLv>0&&heros[spSet].level>=5&&beforeSpLv<=4){f_popUpN(spSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
  if(heros[atSet].level-beforeAtLv>0&&heros[atSet].level>=5&&beforeAtLv<=4){f_popUpN(atSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
  if(heros[guSet].level-beforeGuLv>0&&heros[guSet].level>=5&&beforeGuLv<=4){f_popUpN(guSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
  if(heros[taSet].level-beforeTaLv>0&&heros[taSet].level>=5&&beforeTaLv<=4){f_popUpN(taSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
 }
 else{
  itemShopSet.style.zIndex=0;
 }
}

function shopDetailCheck(checkItem){
  selectSE.play();
  var myh = document.getElementById("shopStatusDetail");
  myh.innerHTML = "<img src=item/"+items[checkItem].name+".png id=shopStatusDetailImg onclick=f_popUpN('"+items[checkItem].name+"','"+items[checkItem].sentence+"');selectSE.play();><div id=shopStatusDetailName>"+items[checkItem].name+"</div><div id=shopNeedItemBack>価格</div><div id=shopStatusDetailValue>"+items[checkItem].value+"BM</div><div id=buying><div class=buttonA><div class=buttonB>購入</div></div></div><div id=buyingButton onclick=f_buyingCheck('"+checkItem+"')></div>";
  var tag="buyingButton";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity1(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity1(tag,0),false);
  
  var tag="shopStatusDetailImg";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
}

function selectingRoleFunction(nowRole){
 if(nowRole!=selectingRole){
  selectSE.play();
 }
 selectingRole=nowRole;
 if(nowRole=="sprinter"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "80%");
  document.documentElement.style.setProperty('--attackerSelectBack', "0%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "0%");
  document.documentElement.style.setProperty('--tankSelectBack', "0%");
 }
 else if(nowRole=="attacker"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "0%");
  document.documentElement.style.setProperty('--attackerSelectBack', "80%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "0%");
  document.documentElement.style.setProperty('--tankSelectBack', "0%");
 }
 else if(nowRole=="gunner"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "0%");
  document.documentElement.style.setProperty('--attackerSelectBack', "0%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "80%");
  document.documentElement.style.setProperty('--tankSelectBack', "0%");
 }
 else if(nowRole=="tank"){
  document.documentElement.style.setProperty('--sprinterSelectBack', "0%");
  document.documentElement.style.setProperty('--attackerSelectBack', "0%");
  document.documentElement.style.setProperty('--gunnerSelectBack', "0%");
  document.documentElement.style.setProperty('--tankSelectBack', "80%");
 }
}

function levelSelect(selectedLevel){
 selectSE.play();
 stageLevel=selectedLevel;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=0;
 leila.style.zIndex=-60;
 checkBeforeBattle(-60);
 heroSkillStatus();
 partySelectSet(spSet,atSet,guSet,taSet);
}

function stageSelect(chosenStage){console.log(chosenStage);
 leila.style.zIndex=-60;
 selectedStage=chosenStage;
 if(chosenStage=="mekahan"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面とある家庭用メカの反乱.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>とある家庭用メカの反乱</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/勇気の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/勇気の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
  if(heros["stellea"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="granat"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面終焉禁獣グラナート.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>終焉禁獣グラナート</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/孤独の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/孤独の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/不思議な種.png><div class=itemNum>×1</div>";
  if(heros["adam"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="libelulu"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面絶夢の魔女リベレーションルルカ.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>リベレーションルルカ</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/愛の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/愛の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
  if(heros["luluca"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="kuiro"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面破戒怨士_狸ヶ原喰色.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>破戒怨士 狸ヶ原喰色</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/正義の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/正義の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/上質な刃.png><div class=itemNum>×1</div>";
  if(heros["amairo"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="yurara"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面狂刃忍者幽々院ゆらら.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>狂刃忍者 幽々院ゆらら</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/愛の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/愛の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/上質な刃.png><div class=itemNum>×1</div>";
  if(heros["kirara"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="cerberus"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面地獄の番犬ケルベロス.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>地獄の番犬 ケルベロス</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/正義の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/正義の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/不思議な種.png><div class=itemNum>×1</div>";
  if(heros["nanigashi"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="ankoku"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面ぼうけんのおわり_かけだし暗黒騎士.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>かけだし暗黒騎士</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/勇気の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/勇気の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
  if(heros["yusha"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 else if(chosenStage=="heimdallr"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面戦慄の灯_ヘイムダル.png class=selectedStage><div id=selectedStageClear>Clear</div>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>戦慄の灯 ヘイムダル</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/孤独の欠片.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/孤独の欠片.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
  if(heros["nidhoggr"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }else if(chosenStage=="errordoll"){
  if(heros["bugdoll"].usable==0){
   var myh = document.getElementById("selectedStageBase");
   myh.innerHTML = "<img src=item/ステージ選択画面？.png class=selectedStage><div id=selectedStageClear>Clear</div>";
   var myhMekahanSelect = document.getElementById("stageTitleBase");
   myhMekahanSelect.innerHTML = "<div id=stageTitle>？？？</div>";
  }
  else if(chosenStage=="errordoll"){
   var myh = document.getElementById("selectedStageBase");
   myh.innerHTML = "<img src=item/ステージ選択画面errordoll-18782.png class=selectedStage><div id=selectedStageClear>Clear</div>";
   var myhMekahanSelect = document.getElementById("stageTitleBase");
   myhMekahanSelect.innerHTML = "<div id=stageTitle>Errordoll-18782</div>";
  }
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/美味しいお弁当.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/頑丈な布.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/BM.png><div class=itemNum>×1000</div>";
  if(heros["bugdoll"].usable==0){selectedStageClear.style.opacity=0;}else{selectedStageClear.style.opacity=0.8;}
 }
 if(chosenStage=="tutorial"){
  var myh = document.getElementById("selectedStageBase");
  myh.innerHTML = "<img src=item/ステージ選択画面チュートリアルステージ.png class=selectedStage>";
  var myhMekahanSelect = document.getElementById("stageTitleBase");
  myhMekahanSelect.innerHTML = "<div id=stageTitle>チュートリアルステージ</div>";
  var myh = document.getElementById("level1SelectBase");
  myh.innerHTML = "<img id=level1Remuneration src=item/BM.png><div class=itemNum>×1</div>";
  var myh = document.getElementById("level2SelectBase");
  myh.innerHTML = "<img id=level2Remuneration src=item/BM.png><div class=itemNum>×2</div>";
  var myh = document.getElementById("level3SelectBase");
  myh.innerHTML = "<img id=level3Remuneration src=item/BM.png><div class=itemNum>×1</div>";
 }
}

function f_nextStage(){
 selectSE.play();
 if(stageArray[stageArray.indexOf(selectedStage)+1]==null){
  selectedStage=stageArray[0];
 }
 else{
  selectedStage=stageArray[stageArray.indexOf(selectedStage)+1];
 }
 stageSelect(selectedStage);
}

function f_previousStage(){
 selectSE.play();
 if(stageArray[stageArray.indexOf(selectedStage)-1]==null){
  selectedStage=stageArray[stageArray.length-1];
 }
 else{
  selectedStage=stageArray[stageArray.indexOf(selectedStage)-1];
 }
 stageSelect(selectedStage);
}


function roleSet(role,heroOrSkill){
 selectSE.play();
 if(role=="sprinter"){
  spSet=heroOrSkill;
 }
 else if(role=="attacker"){
  atSet=heroOrSkill;
 }
 else if(role=="gunner"){
  guSet=heroOrSkill;
 }
 else if(role=="tank"){
  taSet=heroOrSkill;
 }
 partySelectSet(spSet,atSet,guSet,taSet);
}

function checkBeforeBattle(checkBeforeBattleBoxNum){
 checkBeforeBattleBox.style.zIndex=checkBeforeBattleBoxNum;
}

function heroSkillStatus(){

  atariheroHP=100+(10*(heros["atari"].level-1));
  var elem = document.getElementById("atariHP");
  elem.innerHTML = atariheroHP;
  atariAttackStatus=1+(0.1*(heros["atari"].level-1));
  var elem = document.getElementById("atariAttackStatus");
  elem.innerHTML = atariAttackStatus;

  voidollheroHP=120+(10*(heros["voidoll"].level-1));
  var elem = document.getElementById("voidollHP");
  elem.innerHTML = voidollheroHP;
  voidollAttackStatus=0.8+(0.1*(heros["voidoll"].level-1));
  var elem = document.getElementById("voidollAttackStatus");
  elem.innerHTML = voidollAttackStatus;

  nohoSkill1status=5+(1*(heros["noho"].level-1));
  var elem = document.getElementById("nohoSkill1status");
  elem.innerHTML = nohoSkill1status;

  tadaomiSkill1status=30+(5*(heros["tadaomi"].level-1));
  var elem = document.getElementById("tadaomiSkill1status");
  elem.innerHTML = tadaomiSkill1status;

  lucianoSkill1status=20+(4*(heros["luciano"].level-1));
  var elem = document.getElementById("lucianoSkill1status");
  elem.innerHTML = lucianoSkill1status;


  lyricaSkill1status=10+(2*(heros["lyrica"].level-1));
  var elem = document.getElementById("lyricaSkill1status");
  elem.innerHTML = lyricaSkill1status;

  matoiSkill1status=30+(6*(heros["matoi"].level-1));
  var elem = document.getElementById("matoiSkill1status");
  elem.innerHTML = matoiSkill1status;

  jeanneSkill1status=30+(6*(heros["jeanne"].level-1));
  var elem = document.getElementById("jeanneSkill1status");
  elem.innerHTML = jeanneSkill1status;

  marcosSkill1status=1.5+(0.3*(heros["marcos"].level-1));
  var elem = document.getElementById("marcosSkill1status");
  elem.innerHTML = marcosSkill1status;

  if(heros["nikola"].usable==1){
  
   addHero("nikola","sprinter","二コラ　テスラ","体力:<font id=nikolaHP></font>　攻撃倍率:<font id=nikolaAttackStatus></font>");
   
   nikolaheroHP=120+(10*(heros["nikola"].level-1));
   var elem = document.getElementById("nikolaHP");
   elem.innerHTML = nikolaheroHP;
   nikolaAttackStatus=0.8+(0.1*(heros["nikola"].level-1));
   var elem = document.getElementById("nikolaAttackStatus");
   elem.innerHTML = nikolaAttackStatus;
  }
  if(heros["adam"].usable==1){
  
   addHero("adam","attacker","カラドボルク","威力:<font id='adamSkill1status'></font>　硬直:0.8s　射程:2");
   
   adamSkill1status=25+(5*(heros["adam"].level-1));
   var elem = document.getElementById("adamSkill1status");
   elem.innerHTML = adamSkill1status;
  }
  if(heros["luluca"].usable==1){
  
   addHero("luluca","attacker","ドリーム☆ズキューン","威力:<font id='lulucaSkill1status'></font>　硬直:0.6s　射程:5");
   
   lulucaSkill1status=20+(4*(heros["luluca"].level-1));
   var elem = document.getElementById("lulucaSkill1status");
   elem.innerHTML = lulucaSkill1status;
  }
  if(heros["amairo"].usable==1){
  
   addHero("amairo","tank","甘色一閃","被ダメージ無効化<br>＋無効化中に攻撃を受けると近距離攻撃<br>威力:<font id='amairoSkill1status'></font>　硬直:1s");
   
   amairoSkill1status=20+(4*(heros["amairo"].level-1));
   var elem = document.getElementById("amairoSkill1status");
   elem.innerHTML = amairoSkill1status;
  }
  if(heros["GBG"].usable==1){
  
   addHero("GBG","attacker","超重力子砲","威力:<font id='GBGSkill1status'></font>　硬直:1.2s　射程:4<br>たまに師匠が代理で登場");
   
   GBGSkill1status=30+(6*(heros["GBG"].level-1));
   var elem = document.getElementById("GBGSkill1status");
   elem.innerHTML = GBGSkill1status;
  }
  if(heros["pororotcho"].usable==1){
  
   addHero("pororotcho","attacker","ワテクシは美の化身！","威力:<font id='pororotchoSkill1status'></font>×3　硬直:3s　射程:3");
   
   pororotchoSkill1status=20+(4*(heros["pororotcho"].level-1));
   var elem = document.getElementById("pororotchoSkill1status");
   elem.innerHTML = pororotchoSkill1status;
  }
  if(heros["istaqa"].usable==1){
  
   addHero("istaqa","gunner","塵滅の天撃","威力:<font id='istaqaSkill1status'></font>　硬直:2s");
   
   istaqaSkill1status=30+(6*(heros["istaqa"].level-1));
   var elem = document.getElementById("istaqaSkill1status");
   elem.innerHTML = istaqaSkill1status;
  }
  if(heros["alice"].usable==1){
  
   addHero("alice","tank","不思議のトランプ","被ダメージ無効化");
  }
  if(heros["gustaf"].usable==1){
  
   addHero("gustaf","tank","禁忌の波動","威力:<font id='gustafSkill1status'></font>　硬直:2s　射程:2<br>長押し対応");
   
   gustafSkill1status=5+(1*(heros["gustaf"].level-1));
   var elem = document.getElementById("gustafSkill1status");
   elem.innerHTML = gustafSkill1status;
  }
  if(heros["thirteen"].usable==1){
  
   addHero("thirteen","tank","堕天変貌","攻撃力を8秒間<font id=thirteenSkill1status></font>倍　HPを<font id=thirteenHealSkill1status></font>回復");
   
   thirteenSkill1status=1.2+(0.24*(heros["thirteen"].level-1));
   var elem = document.getElementById("thirteenSkill1status");
   elem.innerHTML = thirteenSkill1status;
   thirteenHealSkill1status=10+(2*(heros["thirteen"].level-1));
   var elem = document.getElementById("thirteenHealSkill1status");
   elem.innerHTML = thirteenHealSkill1status;
  }
  if(heros["dragon"].usable==1){
  
   addHero("dragon","tank","天空王の加護","15秒間持続回復");
  }
  if(heros["megmeg"].usable==1){
  
   addHero("megmeg","attacker","ばっちーのショードク","最低威力:<font id='megmegSkill1status'></font>　硬直:0.5s<br>長押し対応　近距離で威力UP");
   
   megmegSkill1status=5+(1*(heros["megmeg"].level-1));
   var elem = document.getElementById("megmegSkill1status");
   elem.innerHTML = megmegSkill1status;
  }
  if(heros["bugdoll"].usable==1){
  
   addHero("bugdoll","gunner","イレギュラーウイング","威力:<font id='bugdollSkill1status'></font>×6　硬直:3s");
   
   bugdollSkill1status=7.5+(1.5*(heros["bugdoll"].level-1));
   var elem = document.getElementById("bugdollSkill1status");
   elem.innerHTML = bugdollSkill1status;
  }
  if(heros["ignis"].usable==1){
  
   addHero("ignis","attacker","ブチ切れたぜ","威力:<font id='ignisSkill1status'></font>×3　硬直:2s　射程:2");
   
   ignisSkill1status=15+(3*(heros["ignis"].level-1));
   var elem = document.getElementById("ignisSkill1status");
   elem.innerHTML = ignisSkill1status;
  }
  if(heros["kirara"].usable==1){
  
   addHero("kirara","gunner","火遁・戒天炎龍召喚","威力:<font id='kiraraSkill1status'></font>×3　硬直:3s");
   
   kiraraSkill1status=15+(3*(heros["kirara"].level-1));
   var elem = document.getElementById("kiraraSkill1status");
   elem.innerHTML = kiraraSkill1status;
  }
  if(heros["maria"].usable==1){
  
   addHero("maria","attacker","セルピエンテ バイレ","威力:<font id='mariaSkill1status'></font>×3　硬直:3s　射程:3");
   
   mariaSkill1status=20+(4*(heros["maria"].level-1));
   var elem = document.getElementById("mariaSkill1status");
   elem.innerHTML = mariaSkill1status;
  }
  if(heros["violetta"].usable==1){
  
   addHero("violetta","tank","ご声援に心より感謝を","被ダメージを8秒間<font id='violettaSkill1status'></font>倍");
   
   violettaSkill1status=0.5+(0.05*(heros["violetta"].level-1));
   if(violettaSkill1status>1){violettaSkill1status=1;}
   var elem = document.getElementById("violettaSkill1status");
   elem.innerHTML = 1-violettaSkill1status;
  }
  if(heros["coclico"].usable==1){
  
   addHero("coclico","sprinter","コクリコ","体力:<font id=coclicoHP></font>　攻撃倍率:<font id=coclicoAttackStatus></font>");
   
   coclicoheroHP=80+(10*(heros["coclico"].level-1));
   var elem = document.getElementById("coclicoHP");
   elem.innerHTML = coclicoheroHP;
   coclicoAttackStatus=1.2+(0.1*(heros["coclico"].level-1));
   var elem = document.getElementById("coclicoAttackStatus");
   elem.innerHTML = coclicoAttackStatus;
  }
  if(heros["stellea"].usable==1){
  
   addHero("stellea","attacker","華槍ブリムラ","威力:<font id='stelleaSkill1status'></font>×3　硬直:1.2s　射程:2");
   
   stelleaSkill1status=10+(2*(heros["stellea"].level-1));
   var elem = document.getElementById("stelleaSkill1status");
   elem.innerHTML = stelleaSkill1status;
  }
  if(heros["lovey"].usable==1){
  
   addHero("lovey","tank","チャーミング・キス♂","威力:<font id='loveySkill2status'></font>　硬直:1.2s　射程:3<br>攻撃ヒット時体力を<font id='loveySkill1status'></font>回復");
   
   loveySkill1status=15+(3*(heros["lovey"].level-1));
   var elem = document.getElementById("loveySkill1status");
   elem.innerHTML = loveySkill1status;
   var elem = document.getElementById("loveySkill2status");
   elem.innerHTML = loveySkill1status;
  }
  if(heros["yusha"].usable==1){
  
   addHero("yusha","tank","ジャンプ","被ダメージ無効化＋近距離攻撃<br>威力:<font id='yushaSkill1status'></font>　硬直:1s");
   
   yushaSkill1status=15+(3*(heros["yusha"].level-1));
   var elem = document.getElementById("yushaSkill1status");
   elem.innerHTML = yushaSkill1status;
  }
  if(heros["nidhoggr"].usable==1){
  
   addHero("nidhoggr","attacker","ラグナロク","威力:<font id='nidhoggrSkill1status'></font>　硬直:0.5s　射程:20<br>長押し対応");
   
   nidhoggrSkill1status=5+(1*(heros["nidhoggr"].level-1));
   var elem = document.getElementById("nidhoggrSkill1status");
   elem.innerHTML = nidhoggrSkill1status;
  }
  if(heros["pierre"].usable==1){
  
   addHero("pierre","sprinter","ピエール77世","体力:<font id=pierreHP></font>　攻撃倍率:<font id=pierreAttackStatus></font>");
   
   pierreheroHP=120+(10*(heros["pierre"].level-1));
   var elem = document.getElementById("pierreHP");
   elem.innerHTML = pierreheroHP;
   pierreAttackStatus=0.8+(0.1*(heros["pierre"].level-1));
   var elem = document.getElementById("pierreAttackStatus");
   elem.innerHTML = pierreAttackStatus;
  }
  if(heros["nanigashi"].usable==1){
  
   addHero("nanigashi","sprinter","某","体力:<font id=nanigashiHP></font>　攻撃倍率:<font id=nanigashiAttackStatus></font>");
   
   nanigashiheroHP=100+(10*(heros["nanigashi"].level-1));
   var elem = document.getElementById("nanigashiHP");
   elem.innerHTML = nanigashiheroHP;
   nanigashiAttackStatus=1+(0.1*(heros["nanigashi"].level-1));
   var elem = document.getElementById("nanigashiAttackStatus");
   elem.innerHTML = nanigashiAttackStatus;
  }
  if(heros["thomas"].usable==1){
  
   addHero("thomas","tank","レンタルトランク","被ダメージを8秒間<font id='thomasSkill1status'></font>倍");
   
   thomasSkill1status=0.5+(0.05*(heros["thomas"].level-1));
   if(thomasSkill1status>1){thomasSkill1status=1;}
   var elem = document.getElementById("thomasSkill1status");
   elem.innerHTML = 1-thomasSkill1status;
  }
  if(heros["amister"].usable==1){
  
   addHero("amister","tank","紅薔薇の誓い","被ダメージを8秒間<font id='amisterSkill1status'></font>倍");
   
   amisterSkill1status=0.5+(0.05*(heros["amister"].level-1));
   if(amisterSkill1status>1){amisterSkill1status=1;}
   var elem = document.getElementById("amisterSkill1status");
   elem.innerHTML = 1-amisterSkill1status;
  }
  if(heros["cusith"].usable==1){
  
   addHero("cusith","gunner","ワープニャーク","威力:<font id='cusithSkill1status'></font>　硬直:1s");
   
   cusithSkill1status=10+(2*(heros["cusith"].level-1));
   var elem = document.getElementById("cusithSkill1status");
   elem.innerHTML = cusithSkill1status;
  }
  if(heros["al"].usable==1){
  
   addHero("al","sprinter","アル","体力:<font id=alHP></font>　攻撃倍率:<font id=alAttackStatus></font>");
   
   alheroHP=100+(10*(heros["al"].level-1));
   var elem = document.getElementById("alHP");
   elem.innerHTML = alheroHP;
   alAttackStatus=1+(0.1*(heros["al"].level-1));
   var elem = document.getElementById("alAttackStatus");
   elem.innerHTML = alAttackStatus;
  }
  if(heros["rinne"].usable==1){
  
   addHero("rinne","gunner","操糸操術 Ж 八方画策","威力:<font id='rinneSkill1status'></font>　硬直:2s");
   
   rinneSkill1status=30+(6*(heros["rinne"].level-1));
   var elem = document.getElementById("rinneSkill1status");
   elem.innerHTML = rinneSkill1status;
  }
  if(heros["layer"].usable==1){
  
   addHero("layer","sprinter","零夜","体力:<font id=layerHP></font>　攻撃倍率:<font id=layerAttackStatus></font>");
   
   layerheroHP=80+(10*(heros["layer"].level-1));
   var elem = document.getElementById("layerHP");
   elem.innerHTML = layerheroHP;
   layerAttackStatus=1.2+(0.1*(heros["layer"].level-1));
   var elem = document.getElementById("layerAttackStatus");
   elem.innerHTML = layerAttackStatus;
  }
  if(heros["thorne"].usable==1){
  
   addHero("thorne","gunner","リオート・メーチ","威力:<font id='thorneSkill1status'></font>　硬直:1s");
   
   thorneSkill1status=10+(2*(heros["thorne"].level-1));
   var elem = document.getElementById("thorneSkill1status");
   elem.innerHTML = thorneSkill1status;
  }
  if(heros["delmin"].usable==1){
  
   addHero("delmin","attacker","デルミンしゅーと","威力:<font id='delminSkill1status'></font>×3＋最終段高火力<br>硬直:2s　射程:2");
   
   delminSkill1status=10+(2*(heros["delmin"].level-1));
   var elem = document.getElementById("delminSkill1status");
   elem.innerHTML = delminSkill1status;
  }
  if(heros["luciano"].skillBusable==1){
  
   addHero("luciano","tank","亡き妻の加護","被ダメージ無効化＋HPを<font id='lucianoSkill2status'></font>回復<br>硬直:1s");
   
   lucianoSkill2status=15+(3*(heros["luciano"].level-1));
   var elem = document.getElementById("lucianoSkill2status");
   elem.innerHTML = lucianoSkill2status;
  }
  if(heros["yusha"].skillBusable==1){
  
   addHero("yusha","gunner","勇者のいかずち","威力:<font id='yushaSkill2status'></font>　硬直:1s");
   
   yushaSkill2status=10+(2*(heros["yusha"].level-1));
   var elem = document.getElementById("yushaSkill2status");
   elem.innerHTML = yushaSkill2status;
  }
  if(heros["thirteen"].skillBusable==1){
  
   addHero("thirteen","attacker","堕天の一撃","威力:<font id='thirteenSkill2status'></font>　硬直:0.5s　射程:4");
   
   thirteenSkill2status=20+(4*(heros["thirteen"].level-1));
   var elem = document.getElementById("thirteenSkill2status");
   elem.innerHTML = thirteenSkill2status;
  }
  if(heros["noho"].skillBusable==1){
  
   addHero("noho","sprinter","双挽乃保","体力:<font id=nohoHP></font>　攻撃倍率:<font id=nohoAttackStatus></font>");
   
   nohoheroHP=80+(10*(heros["noho"].level-1));
   var elem = document.getElementById("nohoHP");
   elem.innerHTML = nohoheroHP;
   nohoAttackStatus=1.2+(0.1*(heros["noho"].level-1));
   var elem = document.getElementById("nohoAttackStatus");
   elem.innerHTML = nohoAttackStatus;
  }
  if(heros["justice"].skillBusable==1){
  
   addHero("justice","gunner","ユニバーサルブリッツ","威力:<font id='justiceSkill2status'></font>×3　硬直:3s");
   
   justiceSkill2status=15+(3*(heros["justice"].level-1));
   var elem = document.getElementById("justiceSkill2status");
   elem.innerHTML = justiceSkill2status;
  }
  if(heros["nikola"].skillBusable==1&&heros["nikola"].usable>=1){
  
   addHero("nikola","attacker","テスラコイル","威力:<font id='nikolaSkill2status'></font>　硬直:0.5s　射程:20<br>長押し対応");
   
   nikolaSkill2status=5+(1*(heros["nikola"].level-1));
   var elem = document.getElementById("nikolaSkill2status");
   elem.innerHTML = nikolaSkill2status;
  }
  if(heros["thomas"].skillBusable==1&&heros["thomas"].usable>=1){
  
   addHero("thomas","attacker","隙だらけでございます","威力:<font id='thomasSkill2status'></font>　硬直:0.8s　射程:2");
   
   thomasSkill2status=25+(5*(heros["thomas"].level-1));
   var elem = document.getElementById("thomasSkill2status");
   elem.innerHTML = thomasSkill2status;
  }
  if(heros["pororotcho"].skillBusable==1&&heros["pororotcho"].usable>=1){
  
   addHero("pororotcho","gunner","ラブリッツ","威力:<font id='pororotchoSkill2status'></font>　硬直:1s");
   
   pororotchoSkill2status=10+(2*(heros["pororotcho"].level-1));
   var elem = document.getElementById("pororotchoSkill2status");
   elem.innerHTML = pororotchoSkill2status;
  }
  if(heros["violetta"].skillBusable==1&&heros["violetta"].usable>=1){
  
   addHero("violetta","sprinter","ヴィオレッタ","体力:<font id=violettaHP></font>　攻撃倍率:<font id=violettaAttackStatus></font>");
   
   violettaheroHP=120+(10*(heros["violetta"].level-1));
   var elem = document.getElementById("violettaHP");
   elem.innerHTML = violettaheroHP;
   violettaAttackStatus=0.8+(0.1*(heros["violetta"].level-1));
   var elem = document.getElementById("violettaAttackStatus");
   elem.innerHTML = violettaAttackStatus;
  }
  if(heros["istaqa"].skillBusable==1&&heros["istaqa"].usable>=1){
  
   addHero("istaqa","sprinter","イスタカ","体力:<font id=istaqaHP></font>　攻撃倍率:<font id=istaqaAttackStatus></font>");
   
   istaqaheroHP=80+(10*(heros["istaqa"].level-1));
   var elem = document.getElementById("istaqaHP");
   elem.innerHTML = istaqaheroHP;
   istaqaAttackStatus=1.2+(0.1*(heros["istaqa"].level-1));
   var elem = document.getElementById("istaqaAttackStatus");
   elem.innerHTML = istaqaAttackStatus;
  }
  if(heros["delmin"].skillBusable==1&&heros["delmin"].usable>=1){
  
   addHero("delmin","gunner","デルミンビーム","威力:<font id='delminSkill2status'></font>×4　硬直:4s");
   
   delminSkill2status=30+(6*(heros["delmin"].level-1));
   var elem = document.getElementById("delminSkill2status");
   elem.innerHTML = delminSkill2status;
  }
  if(heros["amairo"].skillBusable==1&&heros["amairo"].usable>=1){
  
   addHero("amairo","gunner","無銘ノ飛刃","威力:<font id='amairoSkill2status'></font>×3　硬直:3s");
   
   amairoSkill2status=15+(3*(heros["amairo"].level-1));
   var elem = document.getElementById("amairoSkill2status");
   elem.innerHTML = amairoSkill2status;
  }
  if(heros["nidhoggr"].skillBusable==1&&heros["nidhoggr"].usable>=1){
  
   addHero("nidhoggr","gunner","フヴェルゲルミル","威力:<font id='nidhoggrSkill2status'></font>×9　硬直:3s");
   
   nidhoggrSkill2status=5+(1*(heros["nidhoggr"].level-1));
   var elem = document.getElementById("nidhoggrSkill2status");
   elem.innerHTML = nidhoggrSkill2status;
  }
  if(heros["amister"].skillBusable==1&&heros["amister"].usable>=1){
  
   addHero("amister","attacker","ホランド ロサス","威力:<font id='amisterSkill2status'></font>×3　硬直:1.2s　射程:2");
   
   amisterSkill2status=10+(2*(heros["amister"].level-1));
   var elem = document.getElementById("amisterSkill2status");
   elem.innerHTML = amisterSkill2status;
  }
  if(heros["cusith"].skillBusable==1&&heros["cusith"].usable>=1){
  
   addHero("cusith","tank","シールドニャーク","被ダメージ0.2倍<br>威力:<font id='cusithSkill2status'></font>　硬直:0.2s　射程:4<br>長押し対応");
   
   cusithSkill2status=5+(1*(heros["cusith"].level-1));
   var elem = document.getElementById("cusithSkill2status");
   elem.innerHTML = cusithSkill2status;
  }
  if(heros["rinne"].skillBusable==1&&heros["rinne"].usable>=1){
  
   addHero("rinne","tank","操糸操術 Ж 傀儡機雷","被ダメージ無効化<br>＋無効化中に攻撃を受けると近距離攻撃<br>威力:<font id='rinneSkill2status'></font>　硬直:1s");
   
   rinneSkill2status=20+(4*(heros["rinne"].level-1));
   var elem = document.getElementById("rinneSkill2status");
   elem.innerHTML = rinneSkill2status;
  }
  if(heros["nanigashi"].skillBusable==1&&heros["nanigashi"].usable>=1){
  
   addHero("nanigashi","gunner","おれとくいわざある！","威力:<font id='nanigashiSkill2status'></font>×3　硬直:3s");
   
   nanigashiSkill2status=15+(3*(heros["nanigashi"].level-1));
   var elem = document.getElementById("nanigashiSkill2status");
   elem.innerHTML = nanigashiSkill2status;
  }
  if(heros["alice"].skillBusable==1&&heros["alice"].usable>=1){
  
   addHero("alice","sprinter","青春アリス","体力:<font id=aliceHP></font>　攻撃倍率:<font id=aliceAttackStatus></font>");
   
   aliceheroHP=120+(10*(heros["alice"].level-1));
   var elem = document.getElementById("aliceHP");
   elem.innerHTML = aliceheroHP;
   aliceAttackStatus=0.8+(0.1*(heros["alice"].level-1));
   var elem = document.getElementById("aliceAttackStatus");
   elem.innerHTML = aliceAttackStatus;
  }
  if(heros["ignis"].skillBusable==1&&heros["ignis"].usable>=1){
  
   addHero("ignis","tank","御用だ御用だ","攻撃力を8秒間<font id='ignisSkill2status'></font>倍");
   
   ignisSkill2status=1.5+(0.3*(heros["ignis"].level-1));
   var elem = document.getElementById("ignisSkill2status");
   elem.innerHTML = ignisSkill2status;
  }
  if(heros["GBG"].skillBusable==1&&heros["GBG"].usable>=1){
  
   addHero("GBG","sprinter","GBガール","体力:<font id=GBGHP></font>　攻撃倍率:<font id=GBGAttackStatus></font>");
   
   GBGheroHP=80+(10*(heros["GBG"].level-1));
   var elem = document.getElementById("GBGHP");
   elem.innerHTML = GBGheroHP;
   GBGAttackStatus=1.2+(0.1*(heros["GBG"].level-1));
   var elem = document.getElementById("GBGAttackStatus");
   elem.innerHTML = GBGAttackStatus;
  }
  if(heros["al"].skillBusable==1&&heros["al"].usable>=1){
  
   addHero("al","tank","盗賊の鉄則","その場でアイテムを拾う<br>硬直:3s");
  }
  if(heros["dragon"].skillBusable==1&&heros["dragon"].usable>=1){
  
   addHero("dragon","gunner","ほのおのいき","威力:<font id='dragonSkill2status'></font>　硬直:0.5s<br>長押し対応");
   
   dragonSkill2status=5+(1*(heros["dragon"].level-1));
   var elem = document.getElementById("dragonSkill2status");
   elem.innerHTML = dragonSkill2status;
  }
  if(heros["coclico"].skillBusable==1&&heros["coclico"].usable>=1){
  
   addHero("coclico","tank",heros["coclico"].skillB,"被ダメージを8秒間<font id='coclicoSkill2status'></font>倍");
   
   coclicoSkill2status=0.5+(0.05*(heros["coclico"].level-1));
   if(coclicoSkill2status>1){coclicoSkill2status=1;}
   var elem = document.getElementById("coclicoSkill2status");
   elem.innerHTML = 1-coclicoSkill2status;
  }
  if(heros["pierre"].skillBusable==1&&heros["pierre"].usable>=1){
  
   addHero("pierre","attacker",heros["pierre"].skillB,"威力:<font id='pierreSkill2status'></font>　硬直:0.2s　射程:2<br>長押し対応");
   
   pierreSkill2status=2.5+(0.5*(heros["pierre"].level-1));
   var elem = document.getElementById("pierreSkill2status");
   elem.innerHTML = pierreSkill2status;
  }
  if(heros["adam"].skillBusable==1&&heros["adam"].usable==1){
  
   addHero("adam","tank",heros["adam"].skillB,"15秒間持続回復");
  }
  if(heros["tadaomi"].skillBusable==1&&heros["tadaomi"].usable>=1){
  
   addHero("tadaomi","tank",heros["tadaomi"].skillB,"攻撃力を8秒間<font id=tadaomiSkill2status></font>倍　HPを<font id=tadaomiHealSkill2status></font>回復");
   
   tadaomiSkill2status=1.2+(0.24*(heros["tadaomi"].level-1));
   var elem = document.getElementById("tadaomiSkill2status");
   elem.innerHTML = tadaomiSkill2status;
   tadaomiHealSkill2status=10+(2*(heros["tadaomi"].level-1));
   var elem = document.getElementById("tadaomiHealSkill2status");
   elem.innerHTML = tadaomiHealSkill2status;
  }
  if(heros["lyrica"].skillBusable==1&&heros["lyrica"].usable>=1){
  
   addHero("lyrica","sprinter","仲良し☆魔法少女","体力:<font id=lyricaHP></font>　攻撃倍率:<font id=lyricaAttackStatus></font>");
   
   lyricaheroHP=100+(10*(heros["lyrica"].level-1));
   var elem = document.getElementById("lyricaHP");
   elem.innerHTML = lyricaheroHP;
   lyricaAttackStatus=1+(0.1*(heros["lyrica"].level-1));
   var elem = document.getElementById("lyricaAttackStatus");
   elem.innerHTML = lyricaAttackStatus;
  }
  if(heros["voidoll"].skillBusable==1){
  
   addHero("voidoll","tank",heros["voidoll"].skillB,"一度だけ被ダメージを無効化<br>硬直:2s");
  }
  
  if(heros["matoi"].skillBusable==1&&heros["matoi"].usable>=1){
  
   addHero("matoi","tank",heros["matoi"].skillB,"攻撃力を8秒間<font id='matoiSkill2status'></font>倍");
   
   matoiSkill2status=1.5+(0.3*(heros["matoi"].level-1));
   var elem = document.getElementById("matoiSkill2status");
   elem.innerHTML = matoiSkill2status;
  }
  if(heros["lovey"].skillBusable==1&&heros["lovey"].usable>=1){
  
   addHero("lovey","attacker",heros["lovey"].skillB,"威力:<font id='loveySkill2status'></font>　硬直:0.8s　射程:2");
   
   loveySkill2status=25+(5*(heros["lovey"].level-1));
   var elem = document.getElementById("loveySkill2status");
   elem.innerHTML = loveySkill2status;
  }
  if(heros["marcos"].skillBusable==1){
  
   addHero("marcos","sprinter","ちょっとドキドキする","体力:<font id=marcosHP></font>　攻撃倍率:<font id=marcosAttackStatus></font><br>時間経過と共に攻撃倍率上昇");
   
   marcosheroHP=80+(10*(heros["marcos"].level-1));
   var elem = document.getElementById("marcosHP");
   elem.innerHTML = marcosheroHP;
   marcosAttackStatus=0.8+(0.1*(heros["marcos"].level-1));
   var elem = document.getElementById("marcosAttackStatus");
   elem.innerHTML = marcosAttackStatus;
  }
  if(heros["gustaf"].skillBusable==1&&heros["gustaf"].usable>=1){
  
   addHero("gustaf","attacker","妖毒同盟","威力:<font id='gustafSkill2status'></font>　硬直:4s　射程:20");
   
   gustafSkill2status=150+(30*(heros["gustaf"].level-1));
   var elem = document.getElementById("gustafSkill2status");
   elem.innerHTML = gustafSkill2status;
  }
  if(heros["maria"].skillBusable==1&&heros["maria"].usable>=1){
  
   addHero("maria","gunner","聖戦の軌跡","威力:<font id='mariaSkill2status'></font>　硬直:4s");
   
   mariaSkill2status=120+(24*(heros["maria"].level-1));
   var elem = document.getElementById("mariaSkill2status");
   elem.innerHTML = mariaSkill2status;
  }
  if(heros["stellea"].skillBusable==1&&heros["stellea"].usable>=1){
  
   addHero("stellea","tank","ラヴィちゃんスリスリ","体力を<font id='stelleaSkill2status'></font>回復<br>6秒間被ダメージ0倍　硬直:4s");
   
   stelleaSkill2status=10+(2*(heros["stellea"].level-1));
   var elem = document.getElementById("stelleaSkill2status");
   elem.innerHTML = stelleaSkill2status;
  }
  if(heros["jeanne"].skillBusable==1){
  
   addHero("jeanne","sprinter","オルレアンの乙女","体力:<font id=jeanneHP></font>　攻撃倍率:<font id=jeanneAttackStatus></font><br>時間経過と共に体力を回復");
   
   jeanneheroHP=80+(10*(heros["jeanne"].level-1));
   var elem = document.getElementById("jeanneHP");
   elem.innerHTML = jeanneheroHP;
   jeanneAttackStatus=0.8+(0.1*(heros["jeanne"].level-1));
   var elem = document.getElementById("jeanneAttackStatus");
   elem.innerHTML = jeanneAttackStatus;
  }
  if(heros["kirara"].skillBusable==1&&heros["kirara"].usable>=1){
  
   addHero("kirara","attacker","ライバル共闘！","威力:<font id='kiraraSkill2status'></font>　硬直:4s　射程:1");
   
   kiraraSkill2status=180+(36*(heros["kirara"].level-1));
   var elem = document.getElementById("kiraraSkill2status");
   elem.innerHTML = kiraraSkill2status;
  }
  if(heros["luluca"].skillBusable==1&&heros["luluca"].usable>=1){
  
   addHero("luluca","gunner","絶夢の魔女","威力:<font id='lulucaSkill2status'></font>×4　硬直:4s");
   
   lulucaSkill2status=30+(6*(heros["luluca"].level-1));
   var elem = document.getElementById("lulucaSkill2status");
   elem.innerHTML = lulucaSkill2status;
  }
  if(heros["thorne"].skillBusable==1&&heros["thorne"].usable>=1){
  
   addHero("thorne","tank","終焉禁獣","6秒間被ダメージと攻撃力を<font id='thorneSkill2status'></font>倍<br>硬直:2s");
   
   thorneSkill2status=2.5+(0.5*(heros["thorne"].level-1));
   var elem = document.getElementById("thorneSkill2status");
   elem.innerHTML = thorneSkill2status;
  }
  if(heros["atari"].skillBusable==1&&heros["atari"].usable>=1){
  
   addHero("atari","tank","モンスターサーカス","6秒間威力<font id='atariSkill2status'></font>の近距離攻撃<br>硬直:2s");
   
   atariSkill2status=2+(0.4*(heros["atari"].level-1));
   var elem = document.getElementById("atariSkill2status");
   elem.innerHTML = atariSkill2status;
  }
  if(heros["bugdoll"].skillBusable==1&&heros["bugdoll"].usable>=1){
  
   addHero("bugdoll","tank","＃イレギュラー","次の攻撃時に威力<font id='bugdollSkill2status'></font>の追撃<br>硬直:2s");
   
   bugdollSkill2status=20+(4*(heros["bugdoll"].level-1));
   var elem = document.getElementById("bugdollSkill2status");
   elem.innerHTML = bugdollSkill2status;
  }
  if(heros["layer"].skillBusable==1&&heros["layer"].usable>=1){
  
   addHero("layer","tank","俺様賛美会","被ダメージを8秒間<font id='layerSkill2status'></font>倍");
   
   layerSkill2status=0.5+(0.05*(heros["layer"].level-1));
   if(layerSkill2status>1){layerSkill2status=1;}
   var elem = document.getElementById("layerSkill2status");
   elem.innerHTML = 1-layerSkill2status;
  }
  if(heros["megmeg"].skillBusable==1&&heros["megmeg"].usable>=1){
  
   addHero("megmeg","gunner","ウワキオシオキ狙撃","威力:<font id='megmegSkill2status'></font>　硬直:2s");
   
   megmegSkill2status=30+(6*(heros["megmeg"].level-1));
   var elem = document.getElementById("megmegSkill2status");
   elem.innerHTML = megmegSkill2status;
  }
}

function addHero(addHeroName,role,skillName,heroSentence){

   switch(role){
    case "sprinter":roleShort="Sp";break;
    case "attacker":roleShort="At";break;
    case "gunner":roleShort="Gu";break;
    case "tank":roleShort="Ta";break;
   }

   let node1=document.createElement('div');
   node1.setAttribute('id',addHeroName+roleShort+'SelectButton');
   node1.setAttribute('onclick',"roleSet('"+role+"','"+addHeroName+"')");
   var parentDiv = document.getElementById(role+"SecletBack4");
   parentDiv.appendChild(node1);

   let node2=document.createElement('div');
   node2.setAttribute('class','partySelectHero');
   node2.setAttribute('id',addHeroName+'Part'+role);
   node1.appendChild(node2);

   var myh1 = document.getElementById(addHeroName+"Part"+role);
   myh1.innerHTML = "<img class=partySelectHeroImg src=item/"+addHeroName+".png><span class=partySelectHeroName>"+skillName+"</span><br><div class=partySelectHeroSentence>"+heroSentence+"</div>";

  var elem = document.getElementById(addHeroName+roleShort+"SelectButton");
  elem.addEventListener("mouseover", function (event) {
  document.documentElement.style.setProperty("--"+addHeroName+roleShort+"SelectButton", "0.2");
  }, false);
  var elem = document.getElementById(addHeroName+roleShort+"SelectButton");
  elem.addEventListener("mouseout", function (event) {
  document.documentElement.style.setProperty("--"+addHeroName+roleShort+"SelectButton", "1");
  }, false);

  let nodeAddHeroStyle=document.createElement('style');
  nodeAddHeroStyle.setAttribute('id',addHeroName+'addHeroStyle'+role);
  var parentDiv = document.getElementById("partySelectScreen");
  parentDiv.appendChild(nodeAddHeroStyle);
   
  var myh = document.getElementById(addHeroName+'addHeroStyle'+role);
  myh.innerHTML = ":root{--"+addHeroName+roleShort+"SelectButton:1;}#"+addHeroName+roleShort+"SelectButton{opacity:var(--"+addHeroName+roleShort+"SelectButton);width:100%;height:auto;margin-bottom:5%;backGround:#ffffff;}";

  var tag=addHeroName+roleShort+"SelectButton";
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',f_chgOpacity2(tag,1),false);
  dv.addEventListener('pointerout' ,f_chgOpacity2(tag,0),false);
}

function partySelectSet(sprinter,attacker,gunner,tank){

  var myh = document.getElementById("sprinterSelectBackBase");
  switch(sprinter){
  case "atari"  :defaultHeroHP=atariheroHP;  heroAttackStatus=atariAttackStatus;  break;
  case "voidoll":defaultHeroHP=voidollheroHP;heroAttackStatus=voidollAttackStatus;break;
  case "nikola" :defaultHeroHP=nikolaheroHP; heroAttackStatus=nikolaAttackStatus; break;
  case "coclico" :defaultHeroHP=coclicoheroHP; heroAttackStatus=coclicoAttackStatus; break;
  case "pierre" :defaultHeroHP=pierreheroHP; heroAttackStatus=pierreAttackStatus; break;
  case "nanigashi" :defaultHeroHP=nanigashiheroHP; heroAttackStatus=nanigashiAttackStatus; break;
  case "al" :defaultHeroHP=alheroHP; heroAttackStatus=alAttackStatus; break;
  case "layer" :defaultHeroHP=layerheroHP; heroAttackStatus=layerAttackStatus; break;
  case "noho" :defaultHeroHP=nohoheroHP; heroAttackStatus=nohoAttackStatus; break;
  case "violetta" :defaultHeroHP=violettaheroHP; heroAttackStatus=violettaAttackStatus; break;
  case "istaqa" :defaultHeroHP=istaqaheroHP; heroAttackStatus=istaqaAttackStatus; break;
  case "alice" :defaultHeroHP=aliceheroHP; heroAttackStatus=aliceAttackStatus; break;
  case "GBG" :defaultHeroHP=GBGheroHP; heroAttackStatus=GBGAttackStatus; break;
  case "lyrica" :defaultHeroHP=lyricaheroHP; heroAttackStatus=lyricaAttackStatus; break;
  case "marcos" :defaultHeroHP=marcosheroHP; heroAttackStatus=marcosAttackStatus; break;
  case "jeanne" :defaultHeroHP=jeanneheroHP; heroAttackStatus=jeanneAttackStatus; break;
  }
  myh.innerHTML = "<img id=sprinterSelectBack src=item/"+sprinter+".png>";
  heroHP=defaultHeroHP;
 
  const rootHeroHP = document.querySelector(':root');
  rootHeroHP.style.setProperty("--heroHPbar", "31%");
  
  var myh = document.getElementById("attackerSelectBackBase");
  myh.innerHTML = "<img id=attackerSelectBack src=item/"+attacker+".png>";
  
  var myh = document.getElementById("gunnerSelectBackBase");
  myh.innerHTML = "<img id=gunnerSelectBack src=item/"+gunner+".png>";
  
  var myh = document.getElementById("tankSelectBackBase");
  myh.innerHTML = "<img id=tankSelectBack src=item/"+tank+".png>";
}

function stageClick(){
 setTimeout(function(){
  setTimeout(function(){
   stageSelectScreen.style.zIndex=-60;
   partySelectScreen.style.zIndex=0;
  },2000); 
 },1000); 
}


function partyClick(){
 encountSE.play();
 defaultBGM.pause();
 defaultBGM.currentTime=0;
 document.documentElement.style.setProperty('--gameClearScreen', "0");
 homeScreen.style.zIndex=-60;
 stageSelectScreen.style.zIndex=-60;
 partySelectScreen.style.zIndex=-60;
 enemySet.style.zIndex=0;
 actionGameScreen.style.zIndex=0;
 clearResultScreen.style.zIndex=-60;
 mekahanScreen.style.zIndex=-60;
 granatScreen.style.zIndex=-60;
 libeluluScreen.style.zIndex=-60;
 kuiroScreen.style.zIndex=-60;
 yuraraScreen.style.zIndex=-60;
 cerberusScreen.style.zIndex=-60;
 ankokuScreen.style.zIndex=-60;
 heimdallrScreen.style.zIndex=-60;
 errordollScreen.style.zIndex=-60;
 tutorialBattleScreen.style.zIndex=-60;
 partySet(spSet,atSet,guSet,taSet);
 document.documentElement.style.setProperty('--gameStartCount3', "0.5");
 gameClearCheck=0;
 tankKeep=0;
 var myh1 = document.getElementById("atariBuffEffect");
 myh1.innerHTML = " ";
 noMissCheck=1;
 tadaomiCheck=1;
 matoiCheck=1;
 loveyCheck=1;
 enemyBack=1;
 if(items["doughnut"].num>=1){
  doughnutBuff=1.5;
  items["doughnut"].num--;
 }
 const rootEnemyHP = document.querySelector(':root');
 rootEnemyHP.style.setProperty("--enemyHPbar", "46.5%");
 enemyFront=[];
 blackScreen.style.zIndex=80;
 var myh1 = document.getElementById("blackScreen");
 myh1.classList.add('blackScreenAni');
 setTimeout(function(){
  blackScreen.style.zIndex=-60;
  var myh1 = document.getElementById("blackScreen");
  myh1.classList.remove('blackScreenAni');
  if(selectedStage=="mekahan"){ mekahanBattleStart();}
  else if(selectedStage=="granat"){ granatBattleStart();}
  else if(selectedStage=="libelulu"){ libeluluBattleStart();}
  else if(selectedStage=="kuiro"){ kuiroBattleStart();}
  else if(selectedStage=="yurara"){ yuraraBattleStart();}
  else if(selectedStage=="cerberus"){ cerberusBattleStart();}
  else if(selectedStage=="ankoku"){ ankokuBattleStart();}
  else if(selectedStage=="heimdallr"){ heimdallrBattleStart();}
  else if(selectedStage=="errordoll"){ errordollBattleStart();}
  else if(selectedStage=="tutorial"){ tutorialBattleStart();}
  setTimeout(function(){
   countSE.play();
   document.documentElement.style.setProperty('--gameStartCount3', "0");
   document.documentElement.style.setProperty('--gameStartCount2', "0.5");
   setTimeout(function(){
    countSE.play();
    document.documentElement.style.setProperty('--gameStartCount2', "0");
    document.documentElement.style.setProperty('--gameStartCount1', "0.5");
    setTimeout(function(){
     encountSE.play();
     document.documentElement.style.setProperty('--gameStartCount1', "0");
     document.documentElement.style.setProperty('--gameStartCount0', "0.5");
     phase=1;console.log("stage:"+selectedStage);
     if(selectedStage=="errordoll"){
      battleBGM2.volume=1;
      battleBGM2.currentTime=0;
      battleBGM2.play();
     }
     else{
      battleBGM1.volume=1;
      battleBGM1.currentTime=0;
      battleBGM1.play();
     }
     setTimeout(function(){
      document.documentElement.style.setProperty('--gameStartCount0', "0");
     },1000);
    },1000);
   },1000);
  },1000);
 },1000);
}


function partySet(){
 const sprSet = document.getElementById(partySet);
 var myh1 = document.getElementById("selectedSp");
 myh1.innerHTML = "<img id=spDef src=item/"+spSet+".png>";
 if(spSet=="marcos"){myh1.innerHTML = "<img id=spDef src=item/marcos_skill2.png>";}
 else if(spSet=="lyrica"){myh1.innerHTML = "<img id=spDef src=item/lyrica_skill1.png>";}
 var myh1 = document.getElementById("selectedAt");
 myh1.innerHTML = "<img id=spDef src=item/"+atSet+".png>";
 var myh1 = document.getElementById("selectedGu");
 myh1.innerHTML = "<img id=spDef src=item/"+guSet+".png>";
 var myh1 = document.getElementById("selectedTa");
 myh1.innerHTML = "<img id=spDef src=item/"+taSet+".png>";
}




//PC用
window.addEventListener("keydown",keydown);
window.addEventListener("keyup",keyup);

function keydown(event){
 if(event.keyCode==39){rightOn=1;}
 if(event.keyCode==37){leftOn=1;}
 if(event.keyCode==65){attackerOn=1;attackerSkill();}
 if(event.keyCode==83){gunnerOn=1;gunnerSkill();}
 if(event.keyCode==68){tankOn=1;tankSkill();}
}

function keyup(event){
 if(event.keyCode==39){rightOn=0;}
 if(event.keyCode==37){leftOn=0;}
 if(event.keyCode==65){attackerOn=0;if(skillHold==1){skillOut();}}
 if(event.keyCode==83){gunnerOn=0;if(skillHold==1){skillOut();}}
 if(event.keyCode==68){tankOn=0;if(skillHold==1){skillOut();guard=0;skillHold=0;}}
}

function addListener(){

var info=[
  ['toRight'                   ,f_toRight],
  ['toLeft'                    ,f_toLeft],
  ['ataBut'                    ,f_ataBut],
  ['tutorialAttacker'          ,f_ataBut],
  ['gunBut'                    ,f_gunBut],
  ['tutorialGunner'            ,f_gunBut],
  ['tanBut'                    ,f_tanBut],
  ['homeFeedBackButton'        ,f_chgOpacity1],
  ['homeHeroButton'            ,f_chgOpacity1],
  ['homeItemButton'            ,f_chgOpacity1],
  ['homeBattleButton'          ,f_chgOpacity1],
  ['homeCraftButton'           ,f_chgOpacity1],
  ['homeShopButton'            ,f_chgOpacity1],
  ['opFeedBackButton'          ,f_chgOpacity1],
  ['stageSelectReturnButton'   ,f_chgOpacity1],
  ['level1SelectButton'        ,f_chgOpacity1],
  ['level2SelectButton'        ,f_chgOpacity1],
  ['level3SelectButton'        ,f_chgOpacity1],
  ['toNextStageButton'         ,f_chgOpacity1],
  ['toPreviousStageButton'     ,f_chgOpacity1],
  ['partySelectReturnButton'   ,f_chgOpacity1],
  ['herotReturnButton'         ,f_chgOpacity1],
  ['heroLiberateOKButton'      ,f_chgOpacity1],
  ['itemReturnButton'          ,f_chgOpacity1],
  ['craftReturnButton'         ,f_chgOpacity1],
  ['craftCheckYesButton'       ,f_chgOpacity1],
  ['craftCheckNoButton'        ,f_chgOpacity1],
  ['craftErrorOKButton'        ,f_chgOpacity1],
  ['itemCraftOKButton'         ,f_chgOpacity1],
  ['shopReturnButton'          ,f_chgOpacity1],
  ['shopCheckYesButton'        ,f_chgOpacity1],
  ['shopCheckNoButton'         ,f_chgOpacity1],
  ['shopErrorOKButton'         ,f_chgOpacity1],
  ['itemShopOKButton'          ,f_chgOpacity1],
  ['tutorialYesButton'         ,f_chgOpacity1],
  ['tutorialNoButton'          ,f_chgOpacity1],
  ['tutorialBattleButton'      ,f_chgOpacity1],
  ['tutorialNextStageButton'   ,f_chgOpacity1],
  ['tutorialSelectButton'      ,f_chgOpacity1],
  ['tutorialAttackerSelectBack',f_chgOpacity1],
  ['tutorialAttackerSelect'    ,f_chgOpacity1],
  ['tutorialPartyDecision'     ,f_chgOpacity1],
  ['tutorialNextButton'        ,f_chgOpacity1],
  ['tutorialToHomeButton'      ,f_chgOpacity1],
  ['tutorialFinishButton'      ,f_chgOpacity1],
  ['optionReturnButton'        ,f_chgOpacity1],
  ['homeColorTitleButton'      ,f_chgOpacity1],
  ['reTutorialButton'          ,f_chgOpacity1],
  ['feedBackReturnButton'      ,f_chgOpacity1],

  ['sprinterSelectBackButton'  ,f_sprinterSelectBackButton],
  ['attackerSelectBackButton'  ,f_attackerSelectBackButton],
  ['gunnerSelectBackButton'    ,f_gunnerSelectBackButton],
  ['tankSelectBackButton'      ,f_tankSelectBackButton],

  ['atariSpSelectButton'       ,f_chgOpacity2],
  ['voidollSpSelectButton'     ,f_chgOpacity2],
  ['nohoAtSelectButton'        ,f_chgOpacity2],
  ['tadaomiAtSelectButton'     ,f_chgOpacity2],
  ['lucianoAtSelectButton'     ,f_chgOpacity2],
  ['lyricaGuSelectButton'      ,f_chgOpacity2],
  ['matoiGuSelectButton'       ,f_chgOpacity2],
  ['justiceTaSelectButton'     ,f_chgOpacity2],
  ['jeanneTaSelectButton'      ,f_chgOpacity2],
  ['marcosTaSelectButton'      ,f_chgOpacity2],
  ['leila'                     ,f_chgOpacity2],

  ['partySelectDecisionButton' ,f_chgOpacity1],
  ['checkBeforeBattleYesButton',f_chgOpacity1],
  ['checkBeforeBattleNoButton' ,f_chgOpacity1],
  ['clearResultToHomeButton'   ,f_chgOpacity1]
];

for(inf of info){
  var tag=inf[0];
  var dv=document.getElementById(tag);
  dv.addEventListener('pointerover',inf[1](tag,1),false);
  dv.addEventListener('pointerout' ,inf[1](tag,0),false);
}

//スマホ用
window.oncontextmenu = function(event) {//画像長押しによるポップアップ無効化
 event.preventDefault();
 event.stopPropagation();
 return false;
};

}


function f_toRight(tag,sw){return function(evt){rightOn=sw;};}
function f_toLeft (tag,sw){return function(evt){leftOn =sw;};}

function f_chgOpacity1(tag,sw){
  return function(evt){
    document.documentElement.style.setProperty('--'+tag, sw*0.8);
  };
}

function f_chgOpacity2(tag,sw){
  return function(evt){
    document.documentElement.style.setProperty('--'+tag, 1-sw*0.6);
  };
}

function f_ataBut (tag,sw){
  if(sw==1) return function(evt){
    attackerOn=1;attackerSkill();
  };
  if(sw==0) return function(evt){
    attackerOn=0;if(skillHold==1){skillOut();}
  };
}

function f_gunBut (tag,sw){
  if(sw==1) return function(evt){
    gunnerOn  =1;gunnerSkill();
  };
  if(sw==0) return function(evt){
    gunnerOn  =0;if(skillHold==1){skillOut();}
  };
}

function f_tanBut (tag,sw){
  if(sw==1) return function(evt){
    tankOn    =1;tankSkill();
  };
  if(sw==0) return function(evt){
    tankOn    =0;if(skillHold==1){skillOut();}
  };
}

function f_sprinterSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="sprinter"){document.documentElement.style.setProperty('--sprinterSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
     document.documentElement.style.setProperty('--sprinterSelectBackButton', "0");
  };
}

function f_attackerSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="attacker"){document.documentElement.style.setProperty('--attackerSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
    document.documentElement.style.setProperty('--attackerSelectBackButton', "0");
  };
}

function f_gunnerSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="gunner")  {document.documentElement.style.setProperty('--gunnerSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
    document.documentElement.style.setProperty('--gunnerSelectBackButton', "0");
  };
}

function f_tankSelectBackButton(tag,sw){
  if(sw==1) return function(evt){
    if(selectingRole!="tank")    {document.documentElement.style.setProperty('--tankSelectBackButton', "0.8");}
  };
  if(sw==0) return function(evt){
    document.documentElement.style.setProperty('--tankSelectBackButton', "0");
  };
}


const log = function(){
 if(phase){
 
  if(spSet=="marcos"){heroAttackStatus=heroAttackStatus+0.005;}
  if(spSet=="jeanne"){
   var jeanneSpHeal=0.4;
   if(heroHP<=defaultHeroHP-jeanneSpHeal){
    heroHP=heroHP+jeanneSpHeal;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
   else if(heroHP>defaultHeroHP-jeanneSpHeal){
    heroHP=defaultHeroHP;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
  }
  if(taSet=="dragon"&&tankKeep==1){
   var jeanneSpHeal=0.4;
   if(heroHP<=defaultHeroHP-jeanneSpHeal){
    heroHP=heroHP+jeanneSpHeal;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
   else if(heroHP>defaultHeroHP-jeanneSpHeal){
    heroHP=defaultHeroHP;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
  }
  if(taSet=="adam"&&tankKeep==1){
   var jeanneSpHeal=0.4;
   if(heroHP<=defaultHeroHP-jeanneSpHeal){
    heroHP=heroHP+jeanneSpHeal;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
   else if(heroHP>defaultHeroHP-jeanneSpHeal){
    heroHP=defaultHeroHP;
    heroHPchange=heroHP*31/defaultHeroHP;
    heroHPchange=String(heroHPchange);
    const rootHeroHP = document.querySelector(':root');
    rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
   }
  }
  
  if(taSet=="atari"&&tankKeep==1){console.log("monsa:"+monsa);
   heroAttack(atariSkill2status*heroAttackStatus,direction,2);
   heroAttack(atariSkill2status*heroAttackStatus,-direction,2);
   if(monsa>=9){monsa=0;}
   if(monsa==0){console.log("monsa:"+monsa);
    var myh = document.getElementById("atariBuffEffect");
    myh.innerHTML = "<img src=item/monsa1.png id=atariBuffEffectA>";
    monsa=monsa+1;
   }
   else if(monsa==5){console.log("monsa:"+monsa);
    var myh = document.getElementById("atariBuffEffect");
    myh.innerHTML = "<img src=item/monsa2.png id=atariBuffEffectA>";
    monsa=monsa+1;
   }
   else{
    monsa=monsa+1;
   }
  }

  if(skill==0){
   if(rightOn){
    document.documentElement.style.setProperty('--pushToRight', "0.8");

    if(walk==0){
     walk=1;
    }
    if(taSet=="bugdoll"&&tankKeep==1&&irregularNum!=2){
     var myh1 = document.getElementById("atariBuffEffect");
     myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_voidoll.png>";
    }
    
    if(spSet=="atari"){
     atariWalk();
    }
    else if(spSet=="voidoll"){
     voidollWalk();
    }
    else if(spSet=="nikola"){
     nikolaWalk();
    }
    else if(spSet=="coclico"){
     coclicoWalk();
    }
    else if(spSet=="pierre"){
     pierreWalk();
    }
    else if(spSet=="nanigashi"){
     nanigashiWalk();
    }
    else if(spSet=="al"){
     alWalk();
    }
    else if(spSet=="layer"){
     layerWalk();
    }
    else if(spSet=="noho"){
     nohoWalk();
    }
    else if(spSet=="violetta"){
     violettaWalk();
    }
    else if(spSet=="istaqa"){
     istaqaWalk();
    }
    else if(spSet=="alice"){
     aliceWalk();
    }
    else if(spSet=="GBG"){
     GBGWalk();
    }
    else if(spSet=="lyrica"){
     lyricaWalk();
    }
    else if(spSet=="marcos"){
     marcosWalk();
    }
    else if(spSet=="jeanne"){
     jeanneWalk();
    }
   
    if(sidePosi<90){
     sidePosi=Number(sidePosi);
     sidePosi=sidePosi+5;
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);console.log(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     direction=1;
     root.style.setProperty("--direction", direction);
     document.getElementById("selectedSp").classList.add("shift");
    }
   }

   else{
    if(taSet=="bugdoll"&&tankKeep==1&&irregularNum==0){
     var myh1 = document.getElementById("atariBuffEffect");
     myh1.innerHTML = "<img id=bugdollBuff src=item/bugdoll.png>";
    }
    if(taSet=="bugdoll"&&tankKeep==1&&irregularNum==1){
     var myh1 = document.getElementById("atariBuffEffect");
     myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_layer.png>";
    }
    var myh1 = document.getElementById("selectedSp");
    if(spSet=="marcos"){
     myh1.innerHTML = "<img id=spDef src=item/marcos_skill2.png>";
    }
    else if(spSet=="lyrica"){
     myh1.innerHTML = "<img id=spDef src=item/lyrica_skill1.png>";
    }
    else{
     myh1.innerHTML = "<img id=spDef src=item/"+spSet+".png>";
    }
   }

  
   if(leftOn){
    document.documentElement.style.setProperty('--pushToLeft', "0.8");

    if(walk==0){
     walk=1;
    }
    
    if(taSet=="bugdoll"&&tankKeep==1&&irregularNum!=2){
     var myh1 = document.getElementById("atariBuffEffect");
     myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_voidoll.png>";
    }
    
    if(spSet=="atari"){
     atariWalk();
    }
    else if(spSet=="voidoll"){
     voidollWalk();
    }
    else if(spSet=="nikola"){
     nikolaWalk();
    }
    else if(spSet=="coclico"){
     coclicoWalk();
    }
    else if(spSet=="pierre"){
     pierreWalk();
    }
    else if(spSet=="nanigashi"){
     nanigashiWalk();
    }
    else if(spSet=="al"){
     alWalk();
    }
    else if(spSet=="layer"){
     layerWalk();
    }
    else if(spSet=="noho"){
     nohoWalk();
    }
    else if(spSet=="violetta"){
     violettaWalk();
    }
    else if(spSet=="istaqa"){
     istaqaWalk();
    }
    else if(spSet=="alice"){
     aliceWalk();
    }
    else if(spSet=="GBG"){
     GBGWalk();
    }
    else if(spSet=="lyrica"){
     lyricaWalk();
    }
    else if(spSet=="marcos"){
     marcosWalk();
    }
    else if(spSet=="jeanne"){
     jeanneWalk();
    }
   
    if(sidePosi>0){
     sidePosi=Number(sidePosi);
     sidePosi=sidePosi-5;
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);console.log(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     direction=-1;
     root.style.setProperty("--direction", direction);
     document.getElementById("selectedSp").classList.add("shift");
    }
   }
  }

  if(attackerOn){document.documentElement.style.setProperty('--pushAtaBut', "0.8");if(skill==0){attackerSkill();}}
  if(gunnerOn){document.documentElement.style.setProperty('--pushGunBut', "0.8");if(skill==0){gunnerSkill();}}
  if(tankOn){document.documentElement.style.setProperty('--pushTanBut', "0.8");if(skill==0){tankSkill();}}
  if(!rightOn){document.documentElement.style.setProperty('--pushToRight', "0");}
  if(!leftOn){document.documentElement.style.setProperty('--pushToLeft', "0");}
  if(!attackerOn){document.documentElement.style.setProperty('--pushAtaBut', "0");}
  if(!gunnerOn){document.documentElement.style.setProperty('--pushGunBut', "0");}
  if(!tankOn){document.documentElement.style.setProperty('--pushTanBut', "0");}

  if(mekahanAct1==1&&mekahanAct2==0){
   mekahanAct();
  }
  if(granatAct1==1&&granatAct2==0){
   granatAct();
  }
  if(libeluluAct1==1&&libeluluAct2==0){
   libeluluAct();
  }
  if(kuiroAct1==1&&kuiroAct2==0){
   kuiroActA();
  }
  if(kuiroAct1==1&&kuiroAct3==0){
   kuiroActB();
  }
  if(yuraraAct1==1&&yuraraAct2==0){
   yuraraAct();
  }
  if(cerberusAct1==1&&cerberusAct2==0){
   cerberusAct();
  }
  if(ankokuAct1==1&&ankokuAct2==0){
   ankokuAct();
  }
  if(heimdallrAct1==1&&heimdallrAct2==0){
   heimdallrAct();
  }
  if(errordollAct1==1&&errordollAct2==0){
   errordollAct();
  }
  if(tutorialAct1==1&&tutorialAct2==0){
   tutorialAct();
  }
 }
}

setInterval(log, 100);

function atariWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/atari_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/atari_walk2.png>";
  walk=1;
 }
}

function voidollWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/voidoll_walk1.png>";
}

function nikolaWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_walk2.png>";
  walk=1;
 }
}

function violettaWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/violetta_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/violetta_walk2.png>";
  walk=1;
 }
}

function istaqaWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/istaqa_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/istaqa_walk2.png>";
  walk=1;
 }
}

function aliceWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/alice_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/alice_walk2.png>";
  walk=1;
 }
}

function GBGWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/GBG_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/GBG_walk2.png>";
  walk=1;
 }
}

function coclicoWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/coclico_skill1.png>";
}

function pierreWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/pierre_skill1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/pierre_walk2.png>";
  walk=1;
 }
}

function nanigashiWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nanigashi_walk2.png>";
  walk=1;
 }
}

function alWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/al_skill1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/al_walk2.png>";
  walk=1;
 }
}

function layerWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/layer_walk1.png>";
}

function nohoWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/noho_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/noho_walk2.png>";
  walk=1;
 }
}

function lyricaWalk(){
  var myh1 = document.getElementById("selectedSp");
  if(direction==1){
   myh1.innerHTML = "<img id=spDef src=item/leleca.png>";
  }
  else{
   myh1.innerHTML = "<img id=spDef src=item/loloca.png>";
  }
}

function marcosWalk(){
 if(walk==1){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/marcos_walk1.png>";
  walk=2;
 }
 else if(walk==2){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/marcos_walk2.png>";
  walk=1;
 }
}

function jeanneWalk(){
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/jeanne_skill1.png>";
}


function attackerSkill(){
 if(phase==1&&skill==0){
  skill=1;
  if(taSet=="bugdoll"&&tankKeep==1&&irregularNum!=2){
   irregularNum=2;
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var myh1 = document.getElementById("atariBuffEffect");
   myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_megmeg.png>";
   heroAttack(bugdollSkill2status/3*heroAttackStatus,direction,6);
   setTimeout(function(){heroAttack(bugdollSkill2status/3*heroAttackStatus,direction,6);},500);
   setTimeout(function(){heroAttack(bugdollSkill2status/3*heroAttackStatus,direction,6);},1000);
   setTimeout(function(){
    atariBuffEffect.style.opacity=0;
    tankKeep=0;
   },2000);
  }
  if(atSet=="noho"){
   nohoSkill1();
  }
  else if(atSet=="tadaomi"){
   tadaomiSkill1();
  }
  else if(atSet=="luciano"){
   lucianoSkill1();
  }
  else if(atSet=="adam"){
   adamSkill1();
  }
  else if(atSet=="luluca"){
   lulucaSkill1();
  }
  else if(atSet=="GBG"){
   GBGSkill1();
  }
  else if(atSet=="pororotcho"){
   pororotchoSkill1();
  }
  else if(atSet=="megmeg"){
   megmegSkill1();
  }
  else if(atSet=="ignis"){
   ignisSkill1();
  }
  else if(atSet=="maria"){
   mariaSkill1();
  }
  else if(atSet=="stellea"){
   stelleaSkill1();
  }
  else if(atSet=="nidhoggr"){
   nidhoggrSkill1();
  }
  else if(atSet=="delmin"){
   delminSkill1();
  }
  else if(atSet=="thirteen"){
   thirteenSkill2();
  }
  else if(atSet=="nikola"){
   nikolaSkill2();
  }
  else if(atSet=="thomas"){
   thomasSkill2();
  }
  else if(atSet=="amister"){
   amisterSkill2();
  }
  else if(atSet=="pierre"){
   pierreSkill2();
  }
  else if(atSet=="lovey"){
   loveySkill2();
  }
  else if(atSet=="gustaf"){
   gustafSkill2();
  }
  else if(atSet=="kirara"){
   kiraraSkill2();
  }
 }
}

function gunnerSkill(){
 if(phase==1&&skill==0){
  skill=1;
  if(taSet=="bugdoll"&&tankKeep==1&&irregularNum!=2){
   irregularNum=2;
   var skillSE = new Audio ("sound/crash.mp3");
   skillSE.play();
   document.documentElement.style.setProperty('--matoiSkillBulletI', (Number(sidePosi)-(5*(direction)))+"%");
   var myh1 = document.getElementById("atariBuffEffect");
   myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_matoi.png>";
   var skill1 = document.getElementById("matoiSkillBulletBaseI");
   skill1.innerHTML = "<div id=matoiSkillBulletI class=matoiSkill1></div>";
   heroShooting(bugdollSkill2status*heroAttackStatus,2000);
   setTimeout(function(){
    atariBuffEffect.style.opacity=0;
    tankKeep=0;
   },2000);
  }
  
  if(guSet=="lyrica"){
   lyricaSkill1();
  }
  else if(guSet=="matoi"){
   matoiSkill1();
  }
  else if(guSet=="istaqa"){
   istaqaSkill1();
  }
  else if(guSet=="bugdoll"){
   bugdollSkill1();
  }
  else if(guSet=="kirara"){
   kiraraSkill1();
  }
  else if(guSet=="cusith"){
   cusithSkill1();
  }
  else if(guSet=="rinne"){
   rinneSkill1();
  }
  else if(guSet=="thorne"){
   thorneSkill1();
  }
  else if(guSet=="yusha"){
   yushaSkill2();
  }
  else if(guSet=="justice"){
   justiceSkill2();
  }
  else if(guSet=="pororotcho"){
   pororotchoSkill2();
  }
  else if(guSet=="delmin"){
   delminSkill2();
  }
  else if(guSet=="amairo"){
   amairoSkill2();
  }
  else if(guSet=="nidhoggr"){
   nidhoggrSkill2();
  }
  else if(guSet=="nanigashi"){
   nanigashiSkill2();
  }
  else if(guSet=="dragon"){
   dragonSkill2();
  }
  else if(guSet=="maria"){
   mariaSkill2();
  }
  else if(guSet=="luluca"){
   lulucaSkill2();
  }
  else if(guSet=="megmeg"){
   megmegSkill2();
  }
 }
}

function tankSkill(){
 if(phase==1&&skill==0){
  skill=1;
  if(taSet=="justice"){
   justiceSkill1();
  }
  else if(taSet=="jeanne"){
   jeanneSkill1();
  }
  else if(taSet=="marcos"){
   marcosSkill1();
  }
  else if(taSet=="amairo"){
   amairoSkill1();
  }
  else if(taSet=="alice"){
   aliceSkill1();
  }
  else if(taSet=="thirteen"){
   thirteenSkill1();
  }
  else if(taSet=="violetta"){
   violettaSkill1();
  }
  else if(taSet=="gustaf"){
   gustafSkill1();
  }
  else if(taSet=="lovey"){
   loveySkill1();
  }
  else if(taSet=="yusha"){
   yushaSkill1();
  }
  else if(taSet=="thomas"){
   thomasSkill1();
  }
  else if(taSet=="amister"){
   amisterSkill1();
  }
  else if(taSet=="luciano"){
   lucianoSkill2();
  }
  else if(taSet=="cusith"){
   cusithSkill2();
  }
  else if(taSet=="rinne"){
   rinneSkill2();
  }
  else if(taSet=="ignis"){
   ignisSkill2();
  }
  else if(taSet=="al"){
   alSkill2();
  }
  else if(taSet=="dragon"){
   dragonSkill1();
  }
  else if(taSet=="coclico"){
   coclicoSkill2();
  }
  else if(taSet=="adam"){
   adamSkill2();
  }
  else if(taSet=="tadaomi"){
   tadaomiSkill2();
  }
  else if(taSet=="voidoll"){
   voidollSkill2();
  }
  else if(taSet=="matoi"){
   matoiSkill2();
  }
  else if(taSet=="stellea"){
   stelleaSkill2();
  }
  else if(taSet=="thorne"){
   thorneSkill2();
  }
  else if(taSet=="atari"){
   atariSkill2();
  }
  else if(taSet=="bugdoll"){
   bugdollSkill2();
  }
  else if(taSet=="layer"){
   layerSkill2();
  }
 }
}

function nohoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/noho_skill1.png>";
  var skillSE = new Audio ("sound/8bit_shoot2.mp3");
  skillSE.play();
  heroAttack(nohoSkill1status*heroAttackStatus,direction,2);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    nohoSkill1();
   },200);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },200);
  }
 }
}

function tadaomiSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/tadaomi.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   heroAttack(tadaomiSkill1status*heroAttackStatus,direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/tadaomi_skill2.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/tadaomi.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },500);
  },200); 
 }
}

function lucianoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/luciano_skill2.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/launcher4.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/luciano_skill2.png>";
   heroAttack(lucianoSkill1status*heroAttackStatus,direction,6);
     sidePosi=Number(sidePosi);
     if(direction==1){sidePosi=sidePosi-15;}else{sidePosi=sidePosi+15;}
     if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);console.log(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     document.getElementById("selectedSp").classList.add("shift");
    
   setTimeout(function(){
    skillSE.pause();
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/luciano_skill2.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },100);
   },300);
  },100); 
 }
}

function adamSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/adam.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   heroAttack(adamSkill1status*heroAttackStatus,direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/adam_skill2.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/adam.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },200);
   },400);
  },200); 
 }
}

function lulucaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  if(spSet=="marcos"){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/luluca_black.png>";
  }
  else{
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/luluca.png>";
  }
  setTimeout(function(){
   setTimeout(function(){
    var skillSE = new Audio ("sound/8bit_magic1.mp3");
    skillSE.play();
    heroAttack(lulucaSkill1status*heroAttackStatus,direction,5);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = " ";
    var myh1 = document.getElementById("lulucaSkillBulletBase");
    if(spSet=="marcos"){
     if(direction==1){myh1.innerHTML = "<img class=lulucaSkillBulletRight src=item/luluca_black_skill1.png>";}
     else{var lulucaSkill1Left=Number(sidePosi)-20;document.documentElement.style.setProperty('--lulucaSkillBulletLeft', lulucaSkill1Left+"%");myh1.innerHTML = "<img class=lulucaSkillBulletLeft src=item/luluca_black_skill1.png>";}
    }
    else{
     if(direction==1){myh1.innerHTML = "<img class=lulucaSkillBulletRight src=item/luluca_skill1.png>";}
     else{var lulucaSkill1Left=Number(sidePosi)-20;document.documentElement.style.setProperty('--lulucaSkillBulletLeft', lulucaSkill1Left+"%");myh1.innerHTML = "<img class=lulucaSkillBulletLeft src=item/luluca_skill1.png>";}
    }
    setTimeout(function(){
     var myh1 = document.getElementById("lulucaSkillBulletBase");
     myh1.innerHTML = " ";
     skillOut();
     SkillCheck=0;
    },200);
   },200);
  },200); 
 }
}

function GBGSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  var leilaRandom=Math.floor( Math.random() * 10);
  if(leilaRandom==0){
   myh1.innerHTML = "<img id=spDef src=item/GBG_skill1.png>";
  }
  else{
   myh1.innerHTML = "<img id=spDef src=item/GBG.png>";
  }
  setTimeout(function(){
   var skillSE1 = new Audio ("sound/silent_ending.mp3");
   skillSE1.play();
   setTimeout(function(){
    skillSE1.pause();
    var skillSE2 = new Audio ("sound/encounter.mp3");
    skillSE2.play();
   },500);
   var myh1 = document.getElementById("GBGSkillBulletBase");
   myh1.innerHTML = "<div id=GBGSkillBullet></div>";
   var myh1 = document.getElementById("GBGSkillBullet");
   myh1.classList.add('GBGSkill1');
   setTimeout(function(){
    heroAttack(GBGSkill1status*heroAttackStatus,direction,5);
    var myh1 = document.getElementById("GBGSkillBullet");
    myh1.classList.remove('GBGSkill1');
    var myh1 = document.getElementById("GBGSkillBulletBase");
    myh1.innerHTML = " ";
    skillOut();
    SkillCheck=0;
   },1000);
  },200); 
 }
}

function pororotchoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/magic_waves1.mp3");
  skillSE.play();
  skillBlackBack.style.opacity=0.5;
  setTimeout(function(){
   heroAttack(pororotchoSkill1status*heroAttackStatus,direction,3);
   heroAttack(pororotchoSkill1status*heroAttackStatus,-direction,3);
  },500);
  setTimeout(function(){
   heroAttack(pororotchoSkill1status*heroAttackStatus,direction,3);
   heroAttack(pororotchoSkill1status*heroAttackStatus,-direction,3);
  },1500);
  setTimeout(function(){
   heroAttack(pororotchoSkill1status*heroAttackStatus,direction,3);
   heroAttack(pororotchoSkill1status*heroAttackStatus,-direction,3);
  },2500);
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = " ";
  var myh1 = document.getElementById("pororotchoSkillBulletBase");
  myh1.innerHTML = "<img id=pororotchoSkillBullet src=item/pororotcho_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("pororotchoSkillBulletBase");
   myh1.innerHTML = " ";
   skillBlackBack.style.opacity=0;
   skillOut();
   SkillCheck=0;
  },3000); 
 }
}

function gustafSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/mini_bomb2.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = " ";
  var myh1 = document.getElementById("gustafSkillBulletBase");
  myh1.innerHTML = "<img id=gustafSkillBullet src=item/gustaf_skill1.png>";
  heroAttack(gustafSkill1status*heroAttackStatus,direction,3);
  heroAttack(gustafSkill1status*heroAttackStatus,-direction,3);
  var gustafHeal = document.getElementById("healBuffEffect");
  gustafHeal.innerHTML = "<img src=item/回復エフェクト.png>";
  if(heroHP<=defaultHeroHP-gustafSkill1status){
   heroHP=heroHP+gustafSkill1status;
   heroHPchange=heroHP*31/defaultHeroHP;
   heroHPchange=String(heroHPchange);
   const rootHeroHP = document.querySelector(':root');
   rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
  }
  else if(heroHP>defaultHeroHP-gustafSkill1status){
   heroHP=defaultHeroHP;
   heroHPchange=heroHP*31/defaultHeroHP;
   heroHPchange=String(heroHPchange);
   const rootHeroHP = document.querySelector(':root');
   rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
  }
  setTimeout(function(){
   var gustafHeal = document.getElementById("healBuffEffect");
   gustafHeal.innerHTML = " ";
  },200);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    gustafSkill1();
   },500);
  }
  else{
   setTimeout(function(){
    var myh1 = document.getElementById("gustafSkillBulletBase");
    myh1.innerHTML = " ";
    skillOut();
    SkillCheck=0;
   },500);
  }
 }
}

function megmegSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/8bit_shoot2.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/megmeg.png>";
  heroAttack(megmegSkill1status*heroAttackStatus,direction,2);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,3);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,4);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,5);
  heroAttack(megmegSkill1status*heroAttackStatus,direction,6);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    megmegSkill1();
   },500);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },500);
  }
 }
}

function ignisSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/ignis_skill1.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/fire2.mp3");
   skillSE.play();
   skillBlackBack.style.opacity=0.5;
   heroAttack(ignisSkill1status*heroAttackStatus,direction,2);
   heroAttack(ignisSkill1status*heroAttackStatus,-direction,2);
   setTimeout(function(){
    heroAttack(ignisSkill1status*heroAttackStatus,direction,2);
    heroAttack(ignisSkill1status*heroAttackStatus,-direction,2);
   },500);
   setTimeout(function(){
    heroAttack(ignisSkill1status*heroAttackStatus,direction,2);
    heroAttack(ignisSkill1status*heroAttackStatus,-direction,2);
   },1000);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/ignis_skill1Effect.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/ignis.png>";
    setTimeout(function(){
     skillSE.pause();
     skillBlackBack.style.opacity=0;
     skillOut();
     SkillCheck=0;
    },200);
   },1500);
  },300); 
 }
}

function mariaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  skillBlackBack.style.opacity=0.5;
  setTimeout(function(){
   heroAttack(mariaSkill1status*heroAttackStatus,direction,3);
   heroAttack(mariaSkill1status*heroAttackStatus,-direction,3);
  },500);
  setTimeout(function(){
   heroAttack(mariaSkill1status*heroAttackStatus,direction,3);
   heroAttack(mariaSkill1status*heroAttackStatus,-direction,3);
  },1500);
  setTimeout(function(){
   heroAttack(mariaSkill1status*heroAttackStatus,direction,3);
   heroAttack(mariaSkill1status*heroAttackStatus,-direction,3);
  },2500);
  var skillSE = new Audio ("sound/storm_hit_window6.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = " ";
  var myh1 = document.getElementById("mariaSkillBulletBase");
  myh1.innerHTML = "<img id=mariaSkillBullet src=item/maria_skill1.png>";
  setTimeout(function(){
   skillSE.pause();
   var myh1 = document.getElementById("mariaSkillBulletBase");
   myh1.innerHTML = " ";
   skillBlackBack.style.opacity=0;
   skillOut();
   SkillCheck=0;
  },3000); 
 }
}

function stelleaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/laser_beam1.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=stelleaSkill1 src=item/stellea_skill2.png><img id=spDef src=item/stellea_skill1.png>";
  var myh1 = document.getElementById("stelleaSkill1");
  myh1.classList.add('stelleaSkill1');
  heroAttack(stelleaSkill1status*heroAttackStatus,direction,2);
  setTimeout(function(){
   var skillSE = new Audio ("sound/laser_beam1.mp3");
   skillSE.play();
   heroAttack(stelleaSkill1status*heroAttackStatus,direction,2);
  },400);
  setTimeout(function(){
   var skillSE = new Audio ("sound/laser_beam1.mp3");
   skillSE.play();
   heroAttack(stelleaSkill1status*heroAttackStatus,direction,2);
  },800);
  setTimeout(function(){
   var myh1 = document.getElementById("stelleaSkill1");
   myh1.classList.remove('stelleaSkill1');
   skillOut();
   SkillCheck=0;
  },1200); 
 }
}

function nidhoggrSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/8bit_shoot2.mp3");
  skillSE.play();
  if(direction==1){
   nidhoggrSkill1Width=(90-Number(sidePosi))*10;
  }
  else{
   nidhoggrSkill1Width=Number(sidePosi)*10;
  }console.log("width"+nidhoggrSkill1Width);
  document.documentElement.style.setProperty('--nidhoggrSkill1', nidhoggrSkill1Width+"%");
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nidhoggr_skill1.png><div id=nidhoggrSkill1><div id=nidhoggrSkill1Core></div></div>";
  heroAttack(nidhoggrSkill1status*heroAttackStatus,direction,20);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    nidhoggrSkill1();
   },200);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },200);
  }
 }
}

function delminSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/delmin.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/delmin_skill1.png>";
   heroAttack(delminSkill1status*heroAttackStatus,direction,2);
   setTimeout(function(){
    var skillSE = new Audio ("sound/8bit_shoot2.mp3");
    skillSE.play();
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/delmin_skill2.png>";
    heroAttack(delminSkill1status*heroAttackStatus,direction,2);
     setTimeout(function(){
      var skillSE = new Audio ("sound/8bit_shoot2.mp3");
      skillSE.play();
      var myh1 = document.getElementById("selectedSp");
      myh1.innerHTML = "<img id=spDef src=item/delmin_skill1.png>";
      heroAttack(delminSkill1status*heroAttackStatus,direction,2);
      setTimeout(function(){
       var skillSE = new Audio ("sound/encounter.mp3");
       skillSE.play();
       skillBlackBack.style.opacity=0.5;
       var myh1 = document.getElementById("selectedSp");
       myh1.innerHTML = "<img id=spDef src=item/delmin_skill2.png>";
       heroAttack(3*delminSkill1status*heroAttackStatus,direction,2);
       setTimeout(function(){
        skillBlackBack.style.opacity=0;
        skillOut();
        SkillCheck=0;
       },400);
     },700);
    },300);
   },300);
  },300);
 }
}

function thirteenSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/thirteen_skill1.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thirteen_skill1.png>";
   heroAttack(thirteenSkill2status*heroAttackStatus,direction,4);
     sidePosi=Number(sidePosi);
     if(direction==1){sidePosi=sidePosi+15;}else{sidePosi=sidePosi-15;}
     if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     document.getElementById("selectedSp").classList.add("shift");
    
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/thirteen_skill1.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },100);
   },300);
  },100); 
 }
}

function nikolaSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/8bit_shoot2.mp3");
  skillSE.play();
  if(direction==1){
   nikolaSkill2Width=(90-Number(sidePosi))*10;
  }
  else{
   nikolaSkill2Width=Number(sidePosi)*10;
  }
  document.documentElement.style.setProperty('--nikolaSkill2', nikolaSkill2Width+"%");
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nikola_skill1.png><div id=nikolaSkill2></div>";
  heroAttack(nikolaSkill2status*heroAttackStatus,direction,20);
  if(attackerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    nikolaSkill2();
   },200);
  }
  else{
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },200);
  }
 }
}

function thomasSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/thomas_skill3.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   heroAttack(thomasSkill2status*heroAttackStatus,direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thomas_skill4.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/thomas.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },200);
   },400);
  },200); 
 }
}

function amisterSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/katana1.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/amister_skill2.png>";
  heroAttack(amisterSkill2status*heroAttackStatus,direction,2);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amister_skill3.png>";
  },133);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amister_skill4.png>";
  },266);
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amister_skill3.png>";
   heroAttack(amisterSkill2status*heroAttackStatus,direction,2);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amister_skill3.png>";
   },133);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amister_skill4.png>";
   },266);
  },400);
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amister_skill4.png>";
   heroAttack(amisterSkill2status*heroAttackStatus,direction,2);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amister_skill3.png>";
   },133);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amister_skill4.png>";
   },266);
  },800);
  setTimeout(function(){
   skillOut();
   SkillCheck=0;
  },1200); 
 }
}

function pierreSkill2(){
 if(SkillCheck==0){
  if(!pierreSkillCheck){
   pierreSkillCheck=1;
   SkillCheck=1;
   setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/pierre.png>";
    setTimeout(function(){
     var myh1 = document.getElementById("selectedSp");
     myh1.innerHTML = "<img id=spDef src=item/pierre_skill2.png>";
     heroAttack(pierreSkill2status*heroAttackStatus,direction,2);
     sidePosi=Number(sidePosi);
     if(direction==1){sidePosi=sidePosi+5;}else{sidePosi=sidePosi-5;}
     if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     document.getElementById("selectedSp").classList.add("shift");
     
     setTimeout(function(){
      var myh1 = document.getElementById("selectedSp");
      myh1.innerHTML = "<img id=spDef src=item/pierre_skill3.png>";
      heroAttack(pierreSkill2status*heroAttackStatus,direction,2);
      sidePosi=Number(sidePosi);
      if(direction==1){sidePosi=sidePosi+5;}else{sidePosi=sidePosi-5;}
      if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
      sidePosiN=sidePosi;
      sidePosi=String(sidePosi);

      const root = document.querySelector(':root');
      root.style.setProperty("--shift", sidePosi+"%");
      document.getElementById("selectedSp").classList.add("shift");
      setTimeout(function(){
       if(attackerOn&&phase){
        SkillCheck=0;
        pierreSkill2();
       }
       else{
        skillOut();
        SkillCheck=0;
       }
      },100);
     },100);
    },100); 
   },500);
  }
  else{
     var myh1 = document.getElementById("selectedSp");
     myh1.innerHTML = "<img id=spDef src=item/pierre_skill2.png>";
     heroAttack(pierreSkill2status*heroAttackStatus,direction,2);
     heroAttack(pierreSkill2status*heroAttackStatus,-direction,2);
     sidePosi=Number(sidePosi);
     if(direction==1){sidePosi=sidePosi+5;}else{sidePosi=sidePosi-5;}
     if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     document.getElementById("selectedSp").classList.add("shift");
     
     setTimeout(function(){
      var myh1 = document.getElementById("selectedSp");
      myh1.innerHTML = "<img id=spDef src=item/pierre_skill3.png>";
      heroAttack(pierreSkill2status*heroAttackStatus,direction,2);
      heroAttack(pierreSkill2status*heroAttackStatus,-direction,2);
      sidePosi=Number(sidePosi);
      if(direction==1){sidePosi=sidePosi+5;}else{sidePosi=sidePosi-5;}
      if(sidePosi<0){sidePosi=0;}else if(sidePosi>90){sidePosi=90;}
      sidePosiN=sidePosi;
      sidePosi=String(sidePosi);

      const root = document.querySelector(':root');
      root.style.setProperty("--shift", sidePosi+"%");
      document.getElementById("selectedSp").classList.add("shift");
      setTimeout(function(){
       if(attackerOn&&phase){
        SkillCheck=0;
        pierreSkill2();
       }
       else{
        skillOut();
        SkillCheck=0;
       }
      },100);
     },100);
  }
 }
}

function loveySkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/lovey_skill1.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump02.mp3");
   skillSE.play();
   heroAttack(loveySkill2status*heroAttackStatus,direction,2);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/lovey_skill3.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/lovey_skill1.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },200);
   },400);
  },200); 
 }
}

function gustafSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = " ";
    var myh1 = document.getElementById("gustafSkillBulletBase1");
    myh1.innerHTML = "<img id=gustafSkillBullet1A src=item/gustaf_skill2.png>";
     sidePosi=Number(sidePosi);
     sidePosi=45;
     sidePosiN=sidePosi;
     sidePosi=String(sidePosi);

     const root = document.querySelector(':root');
     root.style.setProperty("--shift", sidePosi+"%");
     document.getElementById("selectedSp").classList.add("shift");
     
     setTimeout(function(){
      var skillSE = new Audio ("sound/encounter.mp3");
      skillSE.play();
      skillBlackBack.style.opacity=0.8;
      var myh1 = document.getElementById("gustafSkillBulletBase1");
      myh1.innerHTML = "<img class=gustafSkillBullet1Ani id=gustafSkillBullet1B src=item/gustaf_skill2Effect.png><img id=gustafSkillBullet1A src=item/gustaf_skill3.png>";
      setTimeout(function(){
       heroAttack(gustafSkill2status*heroAttackStatus/2,direction,20);
       heroAttack(gustafSkill2status*heroAttackStatus/2,-direction,20);
      },200);
      setTimeout(function(){
       skillBlackBack.style.opacity=0;
       var myh1 = document.getElementById("gustafSkillBulletBase1");
       myh1.innerHTML = "<img id=gustafSkillBullet1A src=item/gustaf_skill2.png>";
       setTimeout(function(){
        var myh1 = document.getElementById("gustafSkillBulletBase1");
        myh1.innerHTML = " ";
        skillOut();
        SkillCheck=0;
       },1000);
      },2000);
     },1000);
 }
}

function kiraraSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=kiraraSkillBullet1A class=kiraraSkillBullet1AAni src=item/kirara_skill2Effect.png><div id=kiraraSkillBullet1FBase></div><div id=kiraraSkillBullet1GBase></div><div id=kiraraSkillBullet1HBase></div><div id=kiraraSkillBullet1IBase></div><img id=kiraraSkillBullet1B src=item/ゆらら煙幕.png><img id=kiraraSkillBullet1C src=item/ゆらら煙幕.png><img id=kiraraSkillBullet1D src=item/ゆらら煙幕.png><img id=kiraraSkillBullet1E src=item/ゆらら煙幕.png><img id=spDef src=item/kirara_skill1.png>";
  const yurAt2 = document.getElementById("kiraraSkillBullet1B");
  yurAt2.classList.add('libeluluFrashAni');
  var skillSE = new Audio ("sound/8bit_magic1.mp3");
  skillSE.play();
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_magic1.mp3");
   skillSE.play();
   const yurAt2 = document.getElementById("kiraraSkillBullet1C");
   yurAt2.classList.add('libeluluFrashAni');
   var myh1 = document.getElementById("kiraraSkillBullet1FBase");
   myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら.png>"
   setTimeout(function(){
    var skillSE = new Audio ("sound/8bit_magic1.mp3");
    skillSE.play();
    const yurAt2 = document.getElementById("kiraraSkillBullet1D");
    yurAt2.classList.add('libeluluFrashAni');
    var myh1 = document.getElementById("kiraraSkillBullet1GBase");
    myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら.png>"
    setTimeout(function(){
     var skillSE = new Audio ("sound/8bit_magic1.mp3");
     skillSE.play();
     const yurAt2 = document.getElementById("kiraraSkillBullet1E");
     yurAt2.classList.add('libeluluFrashAni');
     var myh1 = document.getElementById("kiraraSkillBullet1HBase");
     myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら.png>"
     setTimeout(function(){
      var myh1 = document.getElementById("kiraraSkillBullet1IBase");
      myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら.png>"
      setTimeout(function(){
       var myh1 = document.getElementById("kiraraSkillBullet1FBase");
       myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら分身.png>"
       var myh1 = document.getElementById("kiraraSkillBullet1GBase");
       myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら分身.png>"
       var myh1 = document.getElementById("kiraraSkillBullet1HBase");
       myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら横.png>"
       var myh1 = document.getElementById("kiraraSkillBullet1IBase");
       myh1.innerHTML = "<img class=kiraraSkillBullet1Class src=item/ゆらら横.png>"
       setTimeout(function(){
        var skillSE = new Audio ("sound/encounter.mp3");
        skillSE.play();
        var yurAt2 = document.getElementById("kiraraSkillBullet1FBase");
        yurAt2.classList.add('kiraraSkillBullet1FAni');
        var yurAt2 = document.getElementById("kiraraSkillBullet1GBase");
        yurAt2.classList.add('kiraraSkillBullet1GAni');
        var yurAt2 = document.getElementById("kiraraSkillBullet1HBase");
        yurAt2.classList.add('kiraraSkillBullet1HAni');
        var yurAt2 = document.getElementById("kiraraSkillBullet1IBase");
        yurAt2.classList.add('kiraraSkillBullet1IAni');
        setTimeout(function(){
         heroAttack(kiraraSkill2status*heroAttackStatus,direction,1);
        },250);
       },500);
      },500);
     },500);
    },500);
   },500);
  },500);
  setTimeout(function(){
   skillBlackBack.style.opacity=0;
   skillOut();
   SkillCheck=0;
  },4000);
 }
}

function lyricaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/lyrica.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var skill1 = document.getElementById("lyricaSkillBulletBase");
   skill1.innerHTML = "<div id=lyricaSkillBullet class=lyricaSkill1></div>";
   lyricaSkillBulletBase.style.zIndex = 0;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/lyrica_skill2.png>";
   setTimeout(function(){
    heroShooting(lyricaSkill1status*heroAttackStatus,500);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/lyrica.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },500);
  },200); 
 }
}

function matoiSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/matoi.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/crash.mp3");
   skillSE.play();
   var skill1 = document.getElementById("matoiSkillBulletBase");
   skill1.innerHTML = "<div id=matoiSkillBullet class=matoiSkill1></div>";
   matoiSkillBulletBase.style.zIndex = 0;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/matoi_skill2.png>";
   setTimeout(function(){
    heroShooting(matoiSkill1status*heroAttackStatus,500);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/matoi.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },1000);
  },500); 
 }
}

function istaqaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/istaqa_skill1.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/encounter.mp3");
   skillSE.play();
   skillBlackBack.style.opacity=0.5;
   var skill1 = document.getElementById("istaqaBulletBase");
   skill1.innerHTML = "<img src=item/istaqa_skill1Effect.png id=istaqaBullet>";
   heroShooting(istaqaSkill1status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/istaqa.png>";
    var skill1 = document.getElementById("istaqaBulletBase");
    skill1.innerHTML = " ";
    skillBlackBack.style.opacity=0;
    skillOut();
    SkillCheck=0;
   },500);
  },500); 
 }
}

function dragonSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/8bit_shoot2.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/dragon.png>";
  heroShooting(dragonSkill2status*heroAttackStatus,0);
  dragonSkillBullet.style.opacity=1;
  if(gunnerOn&&phase){
   setTimeout(function(){
    SkillCheck=0;
    dragonSkill2();
   },500);
  }
  else{
   setTimeout(function(){
    dragonSkillBullet.style.opacity=0;
    skillOut();
    SkillCheck=0;
   },500);
  }
 }
}

function bugdollSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/8bit_shoot2.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/bugdoll_skill1.png>";
  var skill1 = document.getElementById("bugdollSkillBulletBase1");
  skill1.innerHTML = "<div id=bugdollSkillBullet1 class=lyricaSkill1></div>";
  heroShooting(bugdollSkill1status*heroAttackStatus,500);
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var skill1 = document.getElementById("bugdollSkillBulletBase2");
   skill1.innerHTML = "<div id=bugdollSkillBullet1 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },500);
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var skill1 = document.getElementById("bugdollSkillBulletBase3");
   skill1.innerHTML = "<div id=bugdollSkillBullet3 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },1000);
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var skill1 = document.getElementById("bugdollSkillBulletBase4");
   skill1.innerHTML = "<div id=bugdollSkillBullet4 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },1500);
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var skill1 = document.getElementById("bugdollSkillBulletBase5");
   skill1.innerHTML = "<div id=bugdollSkillBullet5 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },2000);
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var skill1 = document.getElementById("bugdollSkillBulletBase6");
   skill1.innerHTML = "<div id=bugdollSkillBullet6 class=lyricaSkill1></div>";
   heroShooting(bugdollSkill1status*heroAttackStatus,500);
  },2500);
  setTimeout(function(){
   skillOut();
   SkillCheck=0;
  },3000);
 }
}

function kiraraSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/fire2.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/kirara_skill1.png>";
  const skill1 = document.getElementById("kiraraSkillBullet");
  skill1.classList.add('kiraraSkill1');
  kiraraSkillBullet.style.opacity=1;
  heroShooting(kiraraSkill1status*heroAttackStatus,600);
  heroShooting(kiraraSkill1status*heroAttackStatus,800);
  heroShooting(kiraraSkill1status*heroAttackStatus,1000);
  setTimeout(function(){
   skillSE.pause();
   kiraraSkillBullet.style.opacity=0;
   skill1.classList.remove('kiraraSkill1');
   skillOut();
   SkillCheck=0;
  },3000); 
 }
}

function cusithSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/cusith_skill1.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = " ";
   heroShooting(cusithSkill1status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/cusith.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },200);
  },500); 
 }
}

function rinneSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/rinne.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/magic_waves1.mp3");
   skillSE.play();
   var skill1 = document.getElementById("rinneSkillBulletBase");
   skill1.innerHTML = "<div id=rinneSkillBullet class=rinneSkill1></div>";
   rinneSkillBulletBase.style.zIndex = 0;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/rinne_skill1.png>";
   setTimeout(function(){
    heroShooting(rinneSkill1status*heroAttackStatus,500);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/rinne.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },500);
   },1000);
  },500); 
 }
}

function thorneSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/thorne_skill1.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thorne_skill2.png>";
   thorneSkillBullet.style.opacity=1;
   heroShooting(thorneSkill1status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/thorne.png>";
    thorneSkillBullet.style.opacity=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },200);
  },500); 
 }
}

function yushaSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/yusha_skill2.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/crash.mp3");
   skillSE.play();
   yushaSkillBullet.style.opacity=1;
   heroShooting(yushaSkill2status*heroAttackStatus,0);
   setTimeout(function(){
    yushaSkillBullet.style.opacity=0;
    skillOut();
    SkillCheck=0;
   },500);
  },500); 
 }
}

function justiceSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var skillSE = new Audio ("sound/silent_ending.mp3");
  skillSE.play();
  skillBlackBack.style.opacity=0.5;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/justice.png>";
  var myh1 = document.getElementById("matoiSkillBulletBase");
  myh1.innerHTML = "<div class=justiceSkillBulletAni></div>";
  setTimeout(function(){
   skillSE.pause();
   var skillSE1 = new Audio ("sound/encounter.mp3");
   skillSE1.play();
   heroShooting(justiceSkill2status*heroAttackStatus,0);
   setTimeout(function(){
    heroShooting(justiceSkill2status*heroAttackStatus,0);
    setTimeout(function(){
     heroShooting(justiceSkill2status*heroAttackStatus,0);
     setTimeout(function(){
      skillBlackBack.style.opacity=0;
      skillOut();
      SkillCheck=0;
     },500);
    },1000);
   },1000);
  },500); 
 }
}

function pororotchoSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/pororotcho_skill2.png><div style=position:absolute;height:100%;width:6%;right:47%;backGround:#a9a9a9;></div>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = " ";
   heroShooting(pororotchoSkill2status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/pororotcho_skill2.png>";
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },300);
   },200);
  },500); 
 }
}

function delminSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  skillBlackBack.style.opacity=0.5;
  
  sidePosi=Number(sidePosi);
  sidePosi=45;
  sidePosiN=sidePosi;
  sidePosi=String(sidePosi);
  const root = document.querySelector(':root');
  root.style.setProperty("--shift", sidePosi+"%");
  document.getElementById("selectedSp").classList.add("shift");
  
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/delmin_skill3.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = " ";
   var myh1 = document.getElementById("gustafSkillBulletBase1");
   myh1.innerHTML = "<img src=item/delmin_skill4.png style=width:100%;top:0%;>";
   heroShooting(delminSkill2status*heroAttackStatus,0);
   setTimeout(function(){
    var skillSE = new Audio ("sound/8bit_shoot2.mp3");
    skillSE.play();
    var myh1 = document.getElementById("gustafSkillBulletBase1");
    myh1.innerHTML = "<img src=item/delmin_skill5.png style=width:100%;top:0%;>";
    heroShooting(delminSkill2status*heroAttackStatus,0);
    setTimeout(function(){
     var skillSE = new Audio ("sound/8bit_shoot2.mp3");
     skillSE.play();
     var myh1 = document.getElementById("gustafSkillBulletBase1");
     myh1.innerHTML = "<img src=item/delmin_skill4.png style=width:100%;top:0%;>";
     heroShooting(delminSkill2status*heroAttackStatus,0);
     setTimeout(function(){
      var skillSE = new Audio ("sound/8bit_shoot2.mp3");
      skillSE.play();
      var myh1 = document.getElementById("gustafSkillBulletBase1");
      myh1.innerHTML = "<img src=item/delmin_skill5.png style=width:100%;top:0%;>";
      heroShooting(delminSkill2status*heroAttackStatus,0);
      setTimeout(function(){
       var skillSE = new Audio ("sound/8bit_shoot2.mp3");
       skillSE.play();
       var myh1 = document.getElementById("gustafSkillBulletBase1");
       myh1.innerHTML = " ";
       var myh1 = document.getElementById("selectedSp");
       myh1.innerHTML = "<img id=spDef src=item/delmin_skill3.png>";
       setTimeout(function(){
        skillBlackBack.style.opacity=0;
        skillOut();
        SkillCheck=0;
       },1000);
      },500);
     },500);
    },500);
   },500);
  },1000); 
 }
}

function amairoSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  skillBlackBack.style.opacity=0.5;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/amairo_skill2.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/katana1.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amairo_skill3.png>";
   var myh1 = document.getElementById("gustafSkillBulletBase1");
   myh1.innerHTML = "<img src=item/amairo_skill2Effect.png style=width:100%;top:0%;>";
   heroShooting(amairoSkill2status*heroAttackStatus,0);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amairo_skill2.png>";
    setTimeout(function(){
     var skillSE = new Audio ("sound/katana1.mp3");
     skillSE.play();
     var myh1 = document.getElementById("selectedSp");
     myh1.innerHTML = "<img id=spDef src=item/amairo_skill3.png>";
     var myh1 = document.getElementById("gustafSkillBulletBase1");
     myh1.innerHTML = "<img src=item/amairo_skill2Effect.png style=width:100%;top:0%;transform:scale(-1  1);>";
     heroShooting(amairoSkill2status*heroAttackStatus,0);
      setTimeout(function(){
       var skillSE = new Audio ("sound/katana1.mp3");
       skillSE.play();
       var myh1 = document.getElementById("gustafSkillBulletBase1");
       myh1.innerHTML = " ";
       var myh1 = document.getElementById("selectedSp");
       myh1.innerHTML = "<img id=spDef src=item/amairo_skill2.png>";
       setTimeout(function(){
        var myh1 = document.getElementById("selectedSp");
        myh1.innerHTML = "<img id=spDef src=item/amairo_skill3.png>";
        var myh1 = document.getElementById("gustafSkillBulletBase1");
        myh1.innerHTML = "<img src=item/amairo_skill2Effect.png style=width:100%;top:0%;>";
        heroShooting(amairoSkill2status*heroAttackStatus,0);
        setTimeout(function(){
         var myh1 = document.getElementById("gustafSkillBulletBase1");
         myh1.innerHTML = " ";
         skillBlackBack.style.opacity=0;
         skillOut();
         SkillCheck=0;
       },500);
      },500);
     },500);
    },500);
   },500);
  },500); 
 }
}

function nidhoggrSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  skillBlackBack.style.opacity=0.5;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nidhoggr_skill2.png><div style=position:absolute;bottom:7%;left:20%;width:5%;backGround:#23c4ed; class=nidhoggrAni1></div><div style=position:absolute;bottom:7%;left:30%;width:5%;backGround:#23c4ed; class=nidhoggrAni1></div><div style=position:absolute;bottom:7%;right:20%;width:5%;backGround:#23c4ed; class=nidhoggrAni1></div><div style=position:absolute;bottom:7%;right:30%;width:5%;backGround:#23c4ed; class=nidhoggrAni1></div>";
  var myh1 = document.getElementById("gustafSkillBulletBase1");
  myh1.innerHTML = "<div style=position:absolute;top:0%;left:42%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:44%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:46%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:48%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:50%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:52%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:54%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:56%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div><div style=position:absolute;top:0%;left:58%;width:0.5%;class:0%;backGround:#99d6e6;opacity:0.5; class=nidhoggrAni2></div>";
  var skillSE = new Audio ("sound/crash.mp3");
  skillSE.play();
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},50);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},100);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},150);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},200);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},250);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},300);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},350);
  setTimeout(function(){var skillSE = new Audio ("sound/crash.mp3");skillSE.play();},400);
  setTimeout(function(){
   heroShooting(nidhoggrSkill2status*heroAttackStatus,0);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,100);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,200);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,300);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,400);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,500);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,600);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,700);
   heroShooting(nidhoggrSkill2status*heroAttackStatus,800);
   setTimeout(function(){
    var myh1 = document.getElementById("gustafSkillBulletBase1");
    myh1.innerHTML = " ";
    skillBlackBack.style.opacity=0;
    skillOut();
    SkillCheck=0;
   },1500);
  },1500); 
 }
}

function nanigashiSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/nanigashi.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill2.png>";
  },300);
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump02.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill3.png>";
   var skill1 = document.getElementById("bugdollSkillBulletBase2");
   skill1.innerHTML = "<div id=bugdollSkillBullet1 class=lyricaSkill1></div>";
   heroShooting(nanigashiSkill2status*heroAttackStatus,500);
  },600);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi.png>";
  },900);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill2.png>";
  },1200);
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump02.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill3.png>";
   var skill1 = document.getElementById("bugdollSkillBulletBase4");
   skill1.innerHTML = "<div id=bugdollSkillBullet4 class=lyricaSkill1></div>";
   heroShooting(nanigashiSkill2status*heroAttackStatus,500);
  },1500);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi.png>";
  },1800);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill2.png>";
  },2100);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill2.png>";
  },2400);
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump02.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi_skill3.png>";
   var skill1 = document.getElementById("bugdollSkillBulletBase6");
   skill1.innerHTML = "<div id=bugdollSkillBullet6 class=lyricaSkill1></div>";
   heroShooting(nanigashiSkill2status*heroAttackStatus,500);
  },2700);
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/nanigashi.png>";
   skillOut();
   SkillCheck=0;
  },3000);
 }
}

function mariaSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("gustafSkillBulletBase1");
  myh1.innerHTML = "<img id=mariaSkill2A src=item/adam.png><img id=mariaSkill2B src=item/maria.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("gustafSkillBulletBase1");
   myh1.innerHTML = "<img id=mariaSkill2A src=item/adam_skill2.png><img id=mariaSkill2B src=item/maria_skill2.png>";
   setTimeout(function(){
    var skillSE = new Audio ("sound/katana1.mp3");
    skillSE.play();
    skillWhiteBack.style.opacity=0.8;
    var myh1 = document.getElementById("gustafSkillBulletBase1");
    myh1.innerHTML = "<img id=mariaSkill2A src=item/adam_black.png class=mariaSkill2AAni><img id=mariaSkill2B src=item/maria_black.png class=mariaSkill2BAni>";
    heroShooting(mariaSkill2status*heroAttackStatus,200);
    setTimeout(function(){
     skillWhiteBack.style.opacity=0;
     var myh1 = document.getElementById("gustafSkillBulletBase1");
     myh1.innerHTML = "<img id=mariaSkill2A src=item/adam_skill2.png class=mariaSkill2CAni><img id=mariaSkill2B src=item/maria_skill2.png class=mariaSkill2DAni>";
     setTimeout(function(){
      var myh1 = document.getElementById("gustafSkillBulletBase1");
      myh1.innerHTML = "<img id=mariaSkill2C src=item/adam.png><img id=mariaSkill2D src=item/maria.png>";
      setTimeout(function(){
       var myh1 = document.getElementById("gustafSkillBulletBase1");
       myh1.innerHTML = " ";
       skillOut();
       SkillCheck=0;
      },1000);
     },1000);
    },500);
   },500);
  },1000); 
 }
}

function lulucaSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  document.documentElement.style.setProperty('--lulucaSkillBullet1A', String(Number(sidePosi)-20)+"%");
  document.documentElement.style.setProperty('--lulucaSkillBullet1B', String(Number(sidePosi)-10)+"%");
  document.documentElement.style.setProperty('--lulucaSkillBullet1C', String(Number(sidePosi)+10)+"%");
  document.documentElement.style.setProperty('--lulucaSkillBullet1D', String(Number(sidePosi)+20)+"%");
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/libelulu_back.png>";
  var myh1 = document.getElementById("lulucaSkillBulletBase");
  myh1.innerHTML = "<div id=lulucaSkillBullet1A></div><div id=lulucaSkillBullet1B></div><div id=lulucaSkillBullet1C></div><div id=lulucaSkillBullet1D></div>";
  setTimeout(function(){
   setTimeout(function(){var skillSE = new Audio ("sound/laser_beam1.mp3");skillSE.play();},1000);
   var my1 = document.getElementById("lulucaSkillBullet1B");
   my1.classList.add('lulucaSkillBullet1BAni');
   heroShooting(lulucaSkill2status*heroAttackStatus,1500);
   setTimeout(function(){
    setTimeout(function(){var skillSE = new Audio ("sound/laser_beam1.mp3");skillSE.play();},1000);
    var my1 = document.getElementById("lulucaSkillBullet1C");
    my1.classList.add('lulucaSkillBullet1CAni');
    heroShooting(lulucaSkill2status*heroAttackStatus,1500);
    setTimeout(function(){
     setTimeout(function(){var skillSE = new Audio ("sound/laser_beam1.mp3");skillSE.play();},1000);
     var my1 = document.getElementById("lulucaSkillBullet1A");
     my1.classList.add('lulucaSkillBullet1AAni');
     heroShooting(lulucaSkill2status*heroAttackStatus,1500);
     setTimeout(function(){
      setTimeout(function(){var skillSE = new Audio ("sound/laser_beam1.mp3");skillSE.play();},1000);
      var my1 = document.getElementById("lulucaSkillBullet1D");
      my1.classList.add('lulucaSkillBullet1DAni');
      heroShooting(lulucaSkill2status*heroAttackStatus,1500);
     },250); 
    },250); 
   },250); 
  },750); 
  setTimeout(function(){
   var myh1 = document.getElementById("lulucaSkillBulletBase");
   myh1.innerHTML = " ";
   skillOut();
   SkillCheck=0;
  },4000);
 }
}

function megmegSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/megmeg_skill1.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/megmeg_skill2.png>";
   setTimeout(function(){
    var skillSE = new Audio ("sound/8bit_shoot2.mp3");
    skillSE.play();
    var skill1 = document.getElementById("bugdollSkillBulletBase1");
    skill1.innerHTML = "<div id=bugdollSkillBullet1 class=lyricaSkill1></div>";
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/megmeg_skill2.png>";
    setTimeout(function(){
     heroShooting(megmegSkill1status*heroAttackStatus,500);
     setTimeout(function(){
      skillOut();
      SkillCheck=0;
     },800);
    },200);
   },800);
  },200); 
 }
}

function justiceSkill1(){
 if(!justiceSkill1Check){
  justiceSkill1Check=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/justice.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump10.mp3");
   skillSE.play();
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/justice_skill1.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     justiceSkill1();}
    ,200);
   }
   else{
    justiceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
 else{
  setTimeout(function(){
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/justice_skill1.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     justiceSkill1();
    },200);
   }
   else{
    justiceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
}


function jeanneSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/jeanne.png>";
  setTimeout(function(){
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/jeanne.png>";
   setTimeout(function(){
    var skillSE = new Audio ("sound/powerup01.mp3");
    skillSE.play();
    var jeanneHeal = document.getElementById("healBuffEffect");
    jeanneHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-jeanneSkill1status){
     heroHP=heroHP+jeanneSkill1status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-jeanneSkill1status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    setTimeout(function(){
     var jeanneHeal = document.getElementById("healBuffEffect");
     jeanneHeal.innerHTML = " ";
     skillOut();
     SkillCheck=0;
    },500);
   },500);
  },500); 
 }
}

function marcosSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/marcos_skill1.png>";
   var marcosBuff = document.getElementById("attackBuffEffect");
   marcosBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/marcos_skill1.png>";
    skillOut();
    SkillCheck=0;
    attackBuff=attackBuff+(marcosSkill1status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(marcosSkill1status-1);
     var marcosBuff = document.getElementById("attackBuffEffect");
     marcosBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function amairoSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  tankKeep=1;
  guard=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/amairo_skill1.png>";
  setTimeout(function(){
   if(tankKeep==1){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amairo.png>";
   }
   else{
    var skillSE = new Audio ("sound/katana1.mp3");
    skillSE.play();
    heroAttack(amairoSkill1status*heroAttackStatus,direction,2);
    heroAttack(amairoSkill1status*heroAttackStatus,-direction,2);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amairo_skill1Effect.png>";
    skillBlackBack.style.opacity=0.5;
   }
   setTimeout(function(){
    tankKeep=0;
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amairo.png>";
    guard=0;
    skillBlackBack.style.opacity=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },250);
   },250);
  },500); 
 }
}

function aliceSkill1(){
 if(!aliceSkill1Check){
  aliceSkill1Check=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/alice.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump02.mp3");
   skillSE.play();
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/alice_skill1.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     aliceSkill1();}
    ,200);
   }
   else{
    aliceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
 else{
  setTimeout(function(){
   guard=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/alice_skill1.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     aliceSkill1();
    },200);
   }
   else{
    aliceSkill1Check=0;
    guard=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
}

function dragonSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/dragon.png>";
   var dragonBuff = document.getElementById("attackBuffEffect");
   dragonBuff.innerHTML = "<img  src=item/dragon_skill2.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/dragon.png>";
    tankKeep=1;
    skillOut();
    SkillCheck=0;
    setTimeout(function(){
     var dragonBuff = document.getElementById("attackBuffEffect");
     dragonBuff.innerHTML = " ";
     tankKeep=0;
    },15000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function thirteenSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   thirteenSkillBack1.style.opacity=0.8;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thirteen.png>";
   var thirteenBuff = document.getElementById("attackBuffEffect");
   thirteenBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/thirteen.png>";
    
    var thirteenHeal = document.getElementById("healBuffEffect");
    thirteenHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-thirteenHealSkill1status){
     heroHP=heroHP+thirteenHealSkill1status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-thirteenHealSkill1status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    setTimeout(function(){
     var thirteenHeal = document.getElementById("healBuffEffect");
     thirteenHeal.innerHTML = " ";
    },200);
    
    skillOut();
    SkillCheck=0;
    thirteenSkillBack1.style.opacity=0;
    attackBuff=attackBuff+(thirteenSkill1status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(thirteenSkill1status-1);
     var thirteenBuff = document.getElementById("attackBuffEffect");
     thirteenBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function violettaSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/violetta.png>";
   var violettaBuff = document.getElementById("defendBuffEffect");
   violettaBuff.innerHTML = "<img  src=item/防御エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/violetta_skill1.png>";
    skillOut();
    SkillCheck=0;
    defendBuff=violettaSkill1status;
    setTimeout(function(){
     defendBuff=0;
     var violettaBuff = document.getElementById("defendBuffEffect");
     violettaBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function loveySkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  tankKeep=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/lovey.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/jump02.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = " ";
   var myh1 = document.getElementById("gustafSkillBulletBase");
   myh1.innerHTML = "<img id=gustafSkillBullet src=item/lovey_skill2.png>";
   heroAttack(loveySkill1status*heroAttackStatus,direction,3);
   heroAttack(loveySkill1status*heroAttackStatus,-direction,3);
   if(tankKeep==0){
    var gustafHeal = document.getElementById("healBuffEffect");
    gustafHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-loveySkill1status){
     heroHP=heroHP+loveySkill1status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-loveySkill1status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
   }
   setTimeout(function(){
    var gustafHeal = document.getElementById("healBuffEffect");
    gustafHeal.innerHTML = " ";
   },200);
   setTimeout(function(){
    var myh1 = document.getElementById("gustafSkillBulletBase");
    myh1.innerHTML = " ";
    tankKeep=0;
    skillOut();
    SkillCheck=0;
   },700);
  },500);
 }
}

function yushaSkill1(){
 if(SkillCheck==0){
  SkillCheck=1;
  guard=1;
  var skillSE = new Audio ("sound/jump10.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/yusha_skill1.png>";
  var myh1 = document.getElementById("spDef");
  myh1.classList.add('yushaSkill1');
  setTimeout(function(){
   setTimeout(function(){
    var myh1 = document.getElementById("spDef");
    myh1.classList.remove('yushaSkill1');
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/yusha.png>";
    heroAttack(yushaSkill1status*heroAttackStatus,direction,2);
    heroAttack(yushaSkill1status*heroAttackStatus,-direction,2);
    guard=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },250);
   },250);
  },500); 
 }
}

function thomasSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/thomas_skill1.png>";
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
    defendBuff=thomasSkill1status;
    thomasBuffEffect.style.opacity=1;
    setTimeout(function(){
     defendBuff=0;
     tankKeep=0;
     thomasBuffEffect.style.opacity=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function amisterSkill1(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/amister.png>";
   var amisterBuff = document.getElementById("defendBuffEffect");
   amisterBuff.innerHTML = "<img  src=item/防御エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/amister_skill1.png>";
    skillOut();
    SkillCheck=0;
    defendBuff=amisterSkill1status;
    setTimeout(function(){
     defendBuff=0;
     var amisterBuff = document.getElementById("defendBuffEffect");
     amisterBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function lucianoSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  guard=1;
  var skillSE = new Audio ("sound/powerup01.mp3");
  skillSE.play();
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/luciano.png>";
  lucianoWife.style.opacity=0.8;
  lucianoWifeEffect.style.opacity=0.5;
  setTimeout(function(){
   setTimeout(function(){
    var gustafHeal = document.getElementById("healBuffEffect");
    gustafHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-lucianoSkill2status){
     heroHP=heroHP+lucianoSkill2status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-lucianoSkill2status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
   setTimeout(function(){
    var gustafHeal = document.getElementById("healBuffEffect");
    gustafHeal.innerHTML = " ";
   },200);
    guard=0;
    lucianoWifeEffect.style.opacity=0;
    setTimeout(function(){
     lucianoWife.style.opacity=0;
     skillOut();
     SkillCheck=0;
    },250);
   },250);
  },500); 
 }
}

function cusithSkill2(){
 if(!justiceSkill1Check){
  justiceSkill1Check=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/cusith.png>";
  setTimeout(function(){
   var skillSE = new Audio ("sound/8bit_shoot2.mp3");
   skillSE.play();
   defendBuff=0.8;
   heroAttack(cusithSkill2status*heroAttackStatus,direction,4);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/cusith_skill2.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     cusithSkill2();}
    ,200);
   }
   else{
    justiceSkill1Check=0;
    defendBuff=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
 else{
  setTimeout(function(){
   defendBuff=0.8;
   heroAttack(cusithSkill2status*heroAttackStatus,direction,4);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/cusith_skill2.png>";
   if(tankOn&&phase){
    setTimeout(function(){
     SkillCheck=0;
     cusithSkill2();
    },200);
   }
   else{
    justiceSkill1Check=0;
    defendBuff=0;
    skillOut();
    SkillCheck=0;
   }
  },200);
 }
}

function rinneSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  tankKeep=1;
  guard=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/傀儡機雷.png>";
  setTimeout(function(){
   if(tankKeep==1){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/rinne.png>";
   }
   else{
    var skillSE = new Audio ("sound/mini_bomb2.mp3");
    skillSE.play();
    heroAttack(rinneSkill2status*heroAttackStatus,direction,2);
    heroAttack(rinneSkill2status*heroAttackStatus,-direction,2);
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/爆発.png>";
    skillBlackBack.style.opacity=0.5;
   }
   setTimeout(function(){
    tankKeep=0;
    guard=0;
    skillBlackBack.style.opacity=0;
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
    },250);
   },250);
  },500); 
 }
}

function ignisSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/ignis.png>";
   var ignisBuff = document.getElementById("attackBuffEffect");
   ignisBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/ignis.png>";
    skillOut();
    SkillCheck=0;
    attackBuff=attackBuff+(ignisSkill2status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(ignisSkill2status-1);
     var ignisBuff = document.getElementById("attackBuffEffect");
     ignisBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function alSkill2(){
 if(SkillCheck==0){
  SkillCheck=1;
  var myh1 = document.getElementById("selectedSp");
  myh1.innerHTML = "<img id=spDef src=item/al_skill1.png>";
  setTimeout(function(){
   direction=-1*direction;
   document.documentElement.style.setProperty('--direction', direction);
   setTimeout(function(){
    direction=-1*direction;
    document.documentElement.style.setProperty('--direction', direction);
    setTimeout(function(){
     direction=-1*direction;
     document.documentElement.style.setProperty('--direction', direction);
     setTimeout(function(){
      direction=-1*direction;
      document.documentElement.style.setProperty('--direction', direction);
      setTimeout(function(){
       var skillSE = new Audio ("sound/coin07.mp3");
       skillSE.play();
       var alSkill=Math.floor( Math.random() * 29);
       if(alSkill<=9){
        var getItem="BM";
        items["BM"].num=items["BM"].num+100;
       }
       else if(alSkill<=12){
        var getItem="bravery";
        items["bravery"].num=items["bravery"].num+1;
       }
       else if(alSkill<=15){
        var getItem="aloneness";
        items["aloneness"].num=items["aloneness"].num+1;
       }
       else if(alSkill<=18){
        var getItem="love";
        items["love"].num=items["love"].num+1;
       }
       else if(alSkill<=21){
        var getItem="justice";
        items["justice"].num=items["justice"].num+1;
       }
       else if(alSkill<=23){
        var getItem="cloth";
        items["cloth"].num=items["cloth"].num+1;
       }
       else if(alSkill<=25){
        var getItem="bento";
        items["bento"].num=items["bento"].num+1;
       }
       else if(alSkill==26){
        var getItem="junk";
        items["junk"].num=items["junk"].num+1;
       }
       else if(alSkill==27){
        var getItem="seed";
        items["seed"].num=items["seed"].num+1;
       }
       else if(alSkill==28){
        var getItem="wand";
        items["wand"].num=items["wand"].num+1;
       }
       else if(alSkill==29){
        var getItem="blade";
        items["blade"].num=items["blade"].num+1;
       }
       var myh1 = document.getElementById("selectedSp");
       myh1.innerHTML = "<img id=spDef src=item/al.png><img src=item/"+items[getItem].name+".png style=position:absolute;width:100%;top:70%;border-radius:10%;backGround:#ffffff;>";
      },500);
     },500);
    },500);
   },500);
  },500);
  setTimeout(function(){
   skillOut();
   SkillCheck=0;
  },3000);
 }
}

function coclicoSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/coclico_skill1.png>";
   var coclicoBuff = document.getElementById("defendBuffEffect");
   coclicoBuff.innerHTML = "<img  src=item/enderBuff.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/coclico.png>";
    skillOut();
    SkillCheck=0;
    defendBuff=coclicoSkill2status;
    setTimeout(function(){
     defendBuff=0;
     var coclicoBuff = document.getElementById("defendBuffEffect");
     coclicoBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function adamSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/adam_skill1.png>";
   var dragonBuff = document.getElementById("attackBuffEffect");
   dragonBuff.innerHTML = "<img  src=item/回復エフェクト.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/adam_skill1.png>";
    tankKeep=1;
    skillOut();
    SkillCheck=0;
    setTimeout(function(){
     var dragonBuff = document.getElementById("attackBuffEffect");
     dragonBuff.innerHTML = " ";
     tankKeep=0;
    },15000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function tadaomiSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/tadaomi_skill1.png>";
   var thirteenBuff = document.getElementById("attackBuffEffect");
   thirteenBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    
    var thirteenHeal = document.getElementById("healBuffEffect");
    thirteenHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-tadaomiHealSkill2status){
     heroHP=heroHP+tadaomiHealSkill2status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-tadaomiHealSkill2status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    setTimeout(function(){
     var thirteenHeal = document.getElementById("healBuffEffect");
     thirteenHeal.innerHTML = " ";
    },200);
    
    skillOut();
    SkillCheck=0;
    attackBuff=attackBuff+(tadaomiSkill2status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(tadaomiSkill2status-1);
     var thirteenBuff = document.getElementById("attackBuffEffect");
     thirteenBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function voidollSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   atariBuffEffect.style.opacity=1;
   var myh1 = document.getElementById("atariBuffEffect");
   myh1.innerHTML = "<img id=bugdollBuff src=item/voidoll_skill1.png>";
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function matoiSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/matoi_skill1.png>";
   var ignisBuff = document.getElementById("attackBuffEffect");
   ignisBuff.innerHTML = "<img  src=item/強化エフェクト.png>";
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
    attackBuff=attackBuff+(matoiSkill2status-1);
    setTimeout(function(){
     attackBuff=attackBuff-(matoiSkill2status-1);
     var ignisBuff = document.getElementById("attackBuffEffect");
     ignisBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function stelleaSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/stellea_skill3.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill4.png>";
   },500);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill3.png>";
   },1000);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill4.png>";
   },1500);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill3.png>";
   },2000);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill4.png>";
   },2500);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill3.png>";
   },3000);
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/stellea_skill4.png>";
   },3500);
   setTimeout(function(){
    var skillSE = new Audio ("sound/powerup01.mp3");
    skillSE.play();
    var gustafHeal = document.getElementById("healBuffEffect");
    gustafHeal.innerHTML = "<img src=item/回復エフェクト.png>";
    if(heroHP<=defaultHeroHP-stelleaSkill2status){
     heroHP=heroHP+stelleaSkill2status;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    else if(heroHP>defaultHeroHP-stelleaSkill2status){
     heroHP=defaultHeroHP;
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
    }
    setTimeout(function(){
     var gustafHeal = document.getElementById("healBuffEffect");
     gustafHeal.innerHTML = " ";
    },200);
    setTimeout(function(){
     skillOut();
     SkillCheck=0;
     defendBuff=1;
     var amisterBuff = document.getElementById("defendBuffEffect");
     amisterBuff.innerHTML = "<img  src=item/防御エフェクト.png>";
     setTimeout(function(){
      var amisterBuff = document.getElementById("defendBuffEffect");
      amisterBuff.innerHTML = " ";
      defendBuff=0;
      tankKeep=0;
     },6000);
    },2000);
   },2000);
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 } 
}

function thorneSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/encounter.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img src=item/グラナートセット.png class=thorneSkill1AAni><img src=item/granat_back.png class=thorneSkill1BAni><img id=spDef src=item/thorne.png>";
   const graAt1a = document.getElementById("thorneBuff");
   graAt1a.classList.add('thorneSkill1CAni');
   setTimeout(function(){
   },500); 
   setTimeout(function(){
    attackBuff=thorneSkill2status;
    deBuff=thorneSkill2status;
    skillOut();
    SkillCheck=0;
    setTimeout(function(){
     attackBuff=1;
     deBuff=1;
     tankKeep=0;const graAt1a = document.getElementById("thorneBuff");
     graAt1a.classList.remove('thorneSkill1CAni');
    },6000);
   },2000);
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function atariSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/atari_skill1.png>";
   atariBuffEffect.style.opacity=1;
   setTimeout(function(){
    skillOut();
    SkillCheck=0;
    setTimeout(function(){
     tankKeep=0;
     atariBuffEffect.style.opacity=0;
    },6000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function bugdollSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   irregularNum=3;
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/bugdoll.png>";
   var myh1 = document.getElementById("atariBuffEffect");
   myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_layer.png>";
   setTimeout(function(){
    atariBuffEffect.style.opacity=1;
    skillOut();
    SkillCheck=0;
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function layerSkill2(){
 if(SkillCheck==0){
  if(tankKeep==0){
   tankKeep=1;
   SkillCheck=1;
   var skillSE = new Audio ("sound/powerup01.mp3");
   skillSE.play();
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/layer_skill1.png>";
   var layerBuff = document.getElementById("defendBuffEffect");
   layerBuff.innerHTML = "<img  src=item/enderBuff.png>";
   setTimeout(function(){
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/layer_skill1.png>";
    skillOut();
    SkillCheck=0;
    defendBuff=layerSkill2status;
    setTimeout(function(){
     defendBuff=0;
     var layerBuff = document.getElementById("defendBuffEffect");
     layerBuff.innerHTML = " ";
     tankKeep=0;
    },8000);
   },2000); 
  }
  else{
   skillOut();
   SkillCheck=0;
  }
 }
}

function skillOut(){
 skill=0;
  if(taSet=="bugdoll"&&tankKeep==1&&irregularNum!=2){
   if(Math.floor( Math.random() * 2)==0){
    irregularNum=0;
    var myh1 = document.getElementById("atariBuffEffect");
    myh1.innerHTML = "<img id=bugdollBuff src=item/bugdoll.png>";
   }
   else{
    irregularNum=1;
    var myh1 = document.getElementById("atariBuffEffect");
    myh1.innerHTML = "<img id=bugdollBuff src=item/irregular_layer.png>";
   }
  }
  if(spSet=="marcos"){console.log("spSet"+spSet);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/marcos_skill2.png>";
  }
  else if(spSet=="lyrica"){console.log("spSet"+spSet);
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/lyrica_skill1.png>";
  }
  else{
   var myh1 = document.getElementById("selectedSp");
   myh1.innerHTML = "<img id=spDef src=item/"+spSet+".png>";
  }
}

function getDamage(damageN){
 if(!gameClearCheck){
  if(guard==0){
   if(taSet=="voidoll"&&tankKeep==1){
    var voidollSkillSE = new Audio ("sound/jump10.mp3");
    voidollSkillSE.play();
    tankKeep=0;
    var myh1 = document.getElementById("atariBuffEffect");
    myh1.innerHTML = " ";
    atariBuffEffect.style.opacity=0;
    
   }
   else{
    noMissCheck=0;
    loveyCheck=loveyCheck+damageN*stageLevel*(1-defendBuff)*deBuff;
    guard=1;
    heroHP=heroHP-(damageN*stageLevel*(1-defendBuff)*deBuff);
    if(heroHP<=0){
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar","0%");
     gameOver();
    }
    else{
     var damageSound = new Audio('sound/powerdown03.mp3');
     damageSound.currentTime = 0;
     damageSound.play();
     heroHPchange=heroHP*31/defaultHeroHP;
     heroHPchange=String(heroHPchange);
     const rootHeroHP = document.querySelector(':root');
     rootHeroHP.style.setProperty("--heroHPbar", heroHPchange+"%");
     var hitMyh = document.getElementById("damageHitBase");
     hitMyh.innerHTML = "<div id=damageHit></div>";
     damageHitBase.style.zIndex = 10;
     setTimeout(function(){
      hitMyh.innerHTML = " ";
      setTimeout(function(){
       hitMyh.innerHTML = "<div id=damageHit></div>";
       setTimeout(function(){
        hitMyh.innerHTML = " ";
        setTimeout(function(){
         hitMyh.innerHTML = "<div id=damageHit></div>";
         setTimeout(function(){
          hitMyh.innerHTML = " ";
          guard=0;
         },100);
        },100);
       },100);
      },100);
     },100);
    }
   }
  }
  else{
   if(taSet=="amairo"&&tankKeep==1){
    tankKeep=0;
   }
   if(taSet=="rinne"&&tankKeep==1){
    tankKeep=0;
   }
  }
 }
}

function heroAttack(heroAttack,heroAttackDirection,heroAttackRange){
 attackSuccess=0;
 var damageEffect = document.getElementById("damageEffectBase");
 damageEffect.innerHTML = " ";
 for(makeArray=0;makeArray<heroAttackRange;makeArray++){
  if(heroAttackDirection==1){
   sidePosiN=Number(sidePosi);
   attackSuccessMark=5*makeArray+sidePosiN;
   if(enemyFront.includes(attackSuccessMark)){
    if(tankKeep==1&&taSet=="lovey"){
     tankKeep=0;
    }
    attackSuccess=1;
    const rootDamageEffect = document.querySelector(':root');
    damagrEffectPosi=attackSuccessMark-2.5;
    damagrEffectPosi=String(damagrEffectPosi)+"%";
    rootDamageEffect.style.setProperty("--damageEffect", damagrEffectPosi);console.log(damagrEffectPosi);
    var damageEffect = document.getElementById("damageEffectBase");
    damageEffect.innerHTML = "<img id=damageEffect src=item/爆発.png>";
    damageEffect.style.zIndex = 10;
    setTimeout(function(){
     var damageEffect = document.getElementById("damageEffectBase");
     damageEffect.innerHTML = " ";
    },200);
   }
  }
  else{
   sidePosiN=Number(sidePosi);
   attackSuccessMark=-5*makeArray+sidePosiN;console.log(makeArray);
   if(enemyFront.includes(attackSuccessMark)){
    attackSuccess=1;
    const rootDamageEffect = document.querySelector(':root');
    damagrEffectPosi=attackSuccessMark-2.5;
    damagrEffectPosi=String(damagrEffectPosi)+"%";
    rootDamageEffect.style.setProperty("--damageEffect", damagrEffectPosi);console.log(damagrEffectPosi);
    var damageEffect = document.getElementById("damageEffectBase");
    damageEffect.innerHTML = "<img id=damageEffect src=item/爆発.png>";
    damageEffect.style.zIndex = 10;
    setTimeout(function(){
     var damageEffect = document.getElementById("damageEffectBase");
     damageEffect.innerHTML = " ";
    },200);
   }
  }
 }
 if(attackSuccess==1){
  matoiCheck=0;
  bombSE.pause();bombSE.currentTime=0;bombSE.play();
  enemyHP=enemyHP-(heroAttack*heroAttackStatus*attackBuff*doughnutBuff);
  if(enemyHP<=0){
   const rootEnemyHP = document.querySelector(':root');
   rootEnemyHP.style.setProperty("--enemyHPbar", "0%");
   if(!gameClearCheck){
    clearRoot();
   }
  }
  else{
   tadaomiCheck=0;
   enemyHPchange=enemyHP*46.5/defaultEnemyHP;
   enemyHPchange=String(enemyHPchange);
   const rootEnemyHP = document.querySelector(':root');
   rootEnemyHP.style.setProperty("--enemyHPbar", enemyHPchange+"%");
  }
 }
}

function heroShooting(heroAttack,arriveTime){
 
  setTimeout(function(){
   if(enemyBack==1){
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    enemyHP=enemyHP-(heroAttack*heroAttackStatus*attackBuff*doughnutBuff);
    if(enemyHP<=0){
     const rootEnemyHP = document.querySelector(':root');
     rootEnemyHP.style.setProperty("--enemyHPbar", "0%");
    if(!gameClearCheck){
     clearRoot();
    }
   }
   else{
    tadaomiCheck=0;
    enemyHPchange=enemyHP*46.5/defaultEnemyHP;
    enemyHPchange=String(enemyHPchange);
    const rootEnemyHP = document.querySelector(':root');
    rootEnemyHP.style.setProperty("--enemyHPbar", enemyHPchange+"%");
   }
   document.documentElement.style.setProperty('--backDamageEffect', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--backDamageEffect', "0");
   },500);
  }
 },arriveTime); 
}

function gameOver(){
 skill=1;
 phase=0;
 skillOut();
 if(items["bravery"].num>=1&&items["aloneness"].num>=1&&items["love"].num>=1&&items["justice"].num>=1){
  nofice=1;
 }
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  battleBGM1.volume=0.5;
  battleBGM2.volume=0.5;
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   setTimeout(function(){
    battleBGM1.pause();
    battleBGM2.pause();
    var gameoverSound = new Audio('sound/powerdown07.mp3');
    gameoverSound.currentTime = 0;
    gameoverSound.play();
    var myh1 = document.getElementById("selectedSp");
    myh1.innerHTML = "<img id=spDef src=item/ナタデココ化1.png>";
    setTimeout(function(){
     var myh1 = document.getElementById("selectedSp");
     myh1.innerHTML = "<img id=spDef src=item/ナタデココ化2.png>";
     setTimeout(function(){
      var myh1 = document.getElementById("selectedSp");
      myh1.innerHTML = "<img id=spDef src=item/ナタデココ化3.png>";
      setTimeout(function(){
       heroHP=defaultHeroHP;
       gameClearCheck=1;
       sidePosi=0;
       guard=0;
       mekahanAct1=0;
       granatAct1=0;
       libeluluAct1=0;
       kuiroAct1=0;
       yuraraAct1=0;
       cerberusAct1=0;
       ankokuAct1=0;
       heimdallrAct1=0;
       errordollAct1=0;
       tutorialAct1=0;
       const root = document.querySelector(':root');
       root.style.setProperty("--shift", "0%");
       direction=1;
       document.documentElement.style.setProperty('--direction', direction);
       gameOverScreen.style.zIndex=60;
      },1000);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function clearRoot(){
 switch(selectedStage){
  case "mekahan":
   mekahanGameClear();
  break;
  case "granat":
   granatGameClear();
  break;
  case "libelulu":
   libeluluGameClear();
  break;
  case "kuiro":
   kuiroGameClear();
  break;
  case "yurara":
  yuraraGameClear();
  break;
  case "cerberus":
  cerberusGameClear();
  break;
  case "ankoku":
  ankokuGameClear();
  break;
  case "heimdallr":
  heimdallrGameClear();
  break;
  case "errordoll":
   errordollGameClear();
  break;
  case "tutorial":
  tutorialGameClear();
  break;
 }
}

function mekahanGameClear(){
 mekahanSE1.pause();
 mekahanSE2.pause();
 mekahanSE1.currentTime = 0;
 mekahanSE2.currentTime = 0;
 mekahanAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--mekahanSet', "0");
   document.documentElement.style.setProperty('--miniMekahanField', "0");
   document.documentElement.style.setProperty('--mekahanOpacity4', "0");
   document.documentElement.style.setProperty('--mekahanEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--mekahanEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function granatGameClear(){
 granatAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--granatSet', "0");
   document.documentElement.style.setProperty('--granatEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--granatEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function libeluluGameClear(){
 libeluluAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--libeluluSet', "0");
   document.documentElement.style.setProperty('--libeluluEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--libeluluEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function kuiroGameClear(){
 kuiroAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--kuiroSet', "0");
   document.documentElement.style.setProperty('--kuiroEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--kuiroEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function yuraraGameClear(){
 yuraraAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--yuraraSet', "0");
   document.documentElement.style.setProperty('--yuraraEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--yuraraEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function cerberusGameClear(){
 cerberusAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--cerberusSet', "0");
   document.documentElement.style.setProperty('--cerberusEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--cerberusEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function ankokuGameClear(){
 ankokuAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--ankokuSet', "0");
   document.documentElement.style.setProperty('--ankokuEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--ankokuEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function heimdallrGameClear(){
 heimdallrAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--heimdallrSet', "0");
   document.documentElement.style.setProperty('--heimdallrEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM1.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM1.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM1.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--heimdallrEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM1.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM1.volume=0;
            battleBGM1.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function errordollGameClear(){
 errordollAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--errordollSet', "0");
   document.documentElement.style.setProperty('--errordollEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
    battleBGM2.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM2.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM2.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--errordollEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
           battleBGM2.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
            battleBGM2.volume=0;
            battleBGM2.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function tutorialGameClear(){
 f_tutorial("11");
 tutorialAct1=0;
 gameClearCheck=1;
 setTimeout(function(){
  document.documentElement.style.setProperty('--whiteOut', "1");
  setTimeout(function(){
   document.documentElement.style.setProperty('--whiteOut', "0");
   document.documentElement.style.setProperty('--tutorialSet', "0");
   document.documentElement.style.setProperty('--tutorialEndingSet', "1");
   setTimeout(function(){
    document.documentElement.style.setProperty('--EndingExplosion1', "1");
    bombSE.pause();bombSE.currentTime=0;bombSE.play();
　　battleBGM2.volume=0.8;
    setTimeout(function(){
     document.documentElement.style.setProperty('--EndingExplosion2', "1");
     bombSE.pause();bombSE.currentTime=0;bombSE.play();
     battleBGM2.volume=0.6;
     setTimeout(function(){
      document.documentElement.style.setProperty('--EndingExplosion3', "1");
      bombSE.pause();bombSE.currentTime=0;bombSE.play();
      battleBGM2.volume=0.4;
      setTimeout(function(){
       document.documentElement.style.setProperty('--whiteOut', "1");
       document.documentElement.style.setProperty('--EndingExplosion1', "0");
       document.documentElement.style.setProperty('--EndingExplosion2', "0");
       document.documentElement.style.setProperty('--EndingExplosion3', "0");
       setTimeout(function(){
        document.documentElement.style.setProperty('--whiteOut', "0");
        setTimeout(function(){
         whiteOut.style.zIndex=40;
         document.documentElement.style.setProperty('--tutorialEndingSet', "0");
         setTimeout(function(){
          whiteOut.style.zIndex=-60;
          setTimeout(function(){
           bigBombSE.play();
           document.documentElement.style.setProperty('--enemyNatadecoco1', "1");
	   battleBGM2.volume=0.2;
           setTimeout(function(){
            document.documentElement.style.setProperty('--enemyNatadecoco1', "0");
            document.documentElement.style.setProperty('--enemyNatadecoco2', "1");
	    battleBGM2.volume=0;
	    battleBGM2.pause();
            setTimeout(function(){
             document.documentElement.style.setProperty('--enemyNatadecoco2', "0");
             document.documentElement.style.setProperty('--enemyNatadecoco3', "1");
             setTimeout(function(){
              document.documentElement.style.setProperty('--enemyNatadecoco3', "0");
              toClearResult();
             },500);
            },500);
           },500);
          },500);
         },200);
        },200);
       },200);
      },200);
     },500);
    },500);
   },500);
  },200);
 },200);
}

function toClearResult(){
 specialSE.play();
 heroHP=defaultHeroHP;
 gameClearScreen.style.zIndex=0;
 phase=0;
 sidePosi=0;
 const root = document.querySelector(':root');
 root.style.setProperty("--shift", "0%");
 document.documentElement.style.setProperty('--gameClearScreen', "1");
 direction=1;
 document.documentElement.style.setProperty('--direction', direction);

  setTimeout(function(){
   var beforeSpLv=heros[spSet].level;
   var beforeAtLv=heros[atSet].level;
   var beforeGuLv=heros[guSet].level;
   var beforeTaLv=heros[taSet].level;
   if     (items["platinumData"].num>=1){spBonus=3;  items["platinumData"].num--;}
   else if(items["goldData"].num>=1)    {spBonus=2;  items["goldData"].num--;}
   else if(items["silverData"].num>=1)  {spBonus=1.5;items["silverData"].num--;}
   if     (items["energy100000"].num>=1)  {atBonus=3;items["energy100000"].num--;}
   else if(items["energy4000"].num>=1)  {atBonus=2;  items["energy4000"].num--;}
   else if(items["energy1000"].num>=1){atBonus=1.5;  items["energy1000"].num--;}
   if     (items["cube5"].num>=1)  {guBonus=3;  items["cube5"].num--;}
   else if(items["cube4"].num>=1)  {guBonus=2;  items["cube4"].num--;}
   else if(items["cube3"].num>=1)  {guBonus=1.5;items["cube3"].num--;}
   if     (items["bigLack"].num>=1)     {guBonus=3;  items["bigLack"].num--;}
   else if(items["middleLack"].num>=1)  {guBonus=2;  items["middleLack"].num--;}
   else if(items["littleLack"].num>=1)  {guBonus=1.5;items["littleLack"].num--;}
   getExperience(spSet,50*stageLevel*spBonus);
   getExperience(atSet,50*stageLevel*atBonus);
   getExperience(guSet,50*stageLevel*guBonus);
   getExperience(taSet,50*stageLevel*taBonus);
   spBonus=1;
   atBonus=1;
   guBonus=1;
   taBonus=1;
   doughnutBuff=1;
   experienceResultFunction("sprinter",spSet);
   experienceResultFunction("attacker",atSet);
   experienceResultFunction("gunner",guSet);
   experienceResultFunction("tank",taSet);
   if(heros[spSet].level-beforeSpLv>0&&heros[spSet].level>=3&&heros[spSet].lv3!="null"&&beforeSpLv<=2){liberateHero(heros[spSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[atSet].level-beforeAtLv>0&&heros[atSet].level>=3&&heros[atSet].lv3!="null"&&beforeAtLv<=2){liberateHero(heros[atSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[guSet].level-beforeGuLv>0&&heros[guSet].level>=3&&heros[guSet].lv3!="null"&&beforeGuLv<=2){liberateHero(heros[guSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[taSet].level-beforeTaLv>0&&heros[taSet].level>=3&&heros[taSet].lv3!="null"&&beforeTaLv<=2){liberateHero(heros[taSet].lv3,"特定のヒーローが規定レベルに達したため以下のヒーローが解放されました。");}
   if(heros[spSet].level-beforeSpLv>0&&heros[spSet].level>=5&&beforeSpLv<=4){f_popUpN(spSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
   if(heros[atSet].level-beforeAtLv>0&&heros[atSet].level>=5&&beforeAtLv<=4){f_popUpN(atSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
   if(heros[guSet].level-beforeGuLv>0&&heros[guSet].level>=5&&beforeGuLv<=4){f_popUpN(guSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
   if(heros[taSet].level-beforeTaLv>0&&heros[taSet].level>=5&&beforeTaLv<=4){f_popUpN(taSet,"特定のヒーローが規定レベルに達したため以下のヒーローの壁紙が解放されました。<br>ホーム→オプションでご確認ください。");}
   var getBMelem = document.getElementById("clearGetBM");
   getBMelem.innerHTML = 100*stageLevel;
   items["BM"].num=items["BM"].num+(100*stageLevel);
   if(heros["justice"].skillBusable==0&&selectedStage!="tutorial"){
    f_popUpN("justice","祝 初ステージクリア！<br><br>以下のヒーローのスキルが解放されました");
    heros["justice"].skillBusable=1;
   }
   if(atSet=="maria"&&taSet=="amister"&&heros["amister"].skillBusable==0){
     f_popUpN("amister","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
     heros["amister"].skillBusable=1;
    }
    if(noMissCheck==1&&spSet=="coclico"&&heros["coclico"].skillBusable==0){
     f_popUpN("coclico","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
     heros["coclico"].skillBusable=1;
    }
    if(tadaomiCheck==1&&heros["tadaomi"].skillBusable==0){
     f_popUpN("tadaomi","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
     heros["tadaomi"].skillBusable=1;
    }
    if(matoiCheck==1&&heros["matoi"].skillBusable==0){
     f_popUpN("matoi","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
     heros["matoi"].skillBusable=1;
    }
    if(loveyCheck>=201&&heros["lovey"].skillBusable==0){
     f_popUpN("lovey","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。※ラヴィが解放されていないと使えません");
     heros["lovey"].skillBusable=1;
    }
   
   if(selectedStage=="mekahan"){

    if(heros["stellea"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/stellea.png></div></div></div>";
     heros["stellea"].usable=1;
    }
    else if(heros["stellea"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["bravery"].num=items["bravery"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["bravery"].num=items["bravery"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["junk"].num=items["junk"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
     if(items["orange"].recipe==0){items["orange"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="granat"){
    if(heros["adam"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/adam.png></div></div></div>";
     heros["adam"].usable=1;
    }
    else if(heros["adam"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["aloneness"].num=items["aloneness"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["aloneness"].num=items["aloneness"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     if(atSet=="adam"&&guSet=="thorne"&&taSet=="thorne"&&heros["adam"].skillBusable==0){
      f_popUpN("adam","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
      heros["adam"].skillBusable=1;
     }
     items["seed"].num=items["seed"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/不思議な種.png><div class=itemNum>×1</div>";
     if(items["tree"].recipe==0){items["tree"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="libelulu"){
    if(noMissCheck==1&&taSet!="justice"&&taSet!="alice"&&heros["lyrica"].skillBusable==0){
     f_popUpN("lyrica","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
     heros["lyrica"].skillBusable=1;
    }
    if(heros["luluca"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/luluca.png></div></div></div>";
     heros["luluca"].usable=1;
    }
    else if(heros["luluca"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["love"].num=items["love"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["love"].num=items["love"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["wand"].num=items["wand"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
     if(items["dress"].recipe==0){items["dress"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="kuiro"){
    if(heros["amairo"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/amairo.png></div></div></div>";
     heros["amairo"].usable=1;
    }
    else if(heros["amairo"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }
    if(taSet=="amairo"&&heros["amairo"].skillBusable==0){
     f_popUpN("amairo","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
     heros["amairo"].skillBusable=1;
    }

    if(stageLevel==1){
     items["justice"].num=items["justice"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["justice"].num=items["justice"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["blade"].num=items["blade"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/上質な刃.png><div class=itemNum>×1</div>";
     if(items["scars"].recipe==0){items["scars"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   else if(selectedStage=="yurara"){
    if(heros["kirara"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/kirara.png></div></div></div>";
     heros["kirara"].usable=1;
    }
    else if(heros["kirara"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     var myh = document.getElementById("getItemBase");
     items["love"].num=items["love"].num+1;
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     var myh = document.getElementById("getItemBase");
     items["love"].num=items["love"].num+2;
     myh.innerHTML = "<img style=height:100%; src=item/愛の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["blade"].num=items["blade"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/上質な刃.png><div class=itemNum>×1</div>";
     if(items["drone"].recipe==0){items["drone"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="cerberus"){
    if(heros["nanigashi"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/nanigashi.png></div></div></div>";
     heros["nanigashi"].usable=1;
    }
    else if(heros["nanigashi"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["justice"].num=items["justice"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["justice"].num=items["justice"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/正義の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["seed"].num=items["seed"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/不思議な種.png><div class=itemNum>×1</div>";
     if(items["sandwich"].recipe==0){items["sandwich"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="ankoku"){
    if(heros["yusha"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/yusha.png></div></div></div>";
     heros["yusha"].usable=1;
     items["yushaBlade"].recipe=1;
     f_popUpN("勇者のけん","条件が満たされたため<br>新たなクラフトが解放されました。");
    }
    else if(heros["yusha"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["bravery"].num=items["bravery"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["bravery"].num=items["bravery"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/勇気の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["wand"].num=items["wand"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/汎用魔法杖.png><div class=itemNum>×1</div>";
     if(items["barrels"].recipe==0){items["barrels"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="heimdallr"){
    if(heros["nidhoggr"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/nidhoggr.png></div></div></div>";
     heros["nidhoggr"].usable=1;
    }
    else if(heros["nidhoggr"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["aloneness"].num=items["aloneness"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["aloneness"].num=items["aloneness"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/孤独の欠片.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     items["junk"].num=items["junk"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/ジャンクパーツ.png><div class=itemNum>×1</div>";
     if(items["record"].recipe==0){items["record"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="errordoll"){
    if(heros["bugdoll"].usable==0){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "<div id=firstClear><div class=buttonA><div class=buttonB>初回クリア報酬<br><img id=firstClearImg src=item/bugdoll.png></div></div></div>";
     heros["bugdoll"].usable=1;
    }
    else if(heros["bugdoll"].usable==1){
     var myh = document.getElementById("firstClearBase");
     myh.innerHTML = "";
    }

    if(stageLevel==1){
     items["bento"].num=items["bento"].num+1;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/美味しいお弁当.png><div class=itemNum>×1</div>";
    }
    else if(stageLevel==2){
     items["cloth"].num=items["cloth"].num+2;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%; src=item/頑丈な布.png><div class=itemNum>×2</div>";
    }
    else if(stageLevel==3){
     if(noMissCheck==1&&heros["voidoll"].skillBusable==0){
      f_popUpN("voidoll","特定の条件を満たしたため<br>以下のヒーローのスキルが解放されました。");
      heros["voidoll"].skillBusable=1;
     }
     items["BM"].num=items["BM"].num+1000;
     var myh = document.getElementById("getItemBase");
     myh.innerHTML = "<img style=height:100%;  src=item/BM.png><div class=itemNum>×1000</div>";
     if(items["eiwaz"].recipe==0){items["eiwaz"].recipe=1;f_popUpN("はてな","条件が満たされたため<br>新たなクラフトが解放されました。");}
    }
   }
   
   else if(selectedStage=="tutorial"){
    var myh = document.getElementById("firstClearBase");
    myh.innerHTML = "";

    var myh = document.getElementById("getItemBase");
    myh.innerHTML = " ";
   }
   
   clearResultScreen.style.zIndex=0;
  },3000);
}

function getExperience(heroName,experienceNum){
  let exp=heros[heroName].exp+experienceNum;
  heros[heroName].exp  =exp;
  heros[heroName].level=levelCheck(exp);
  
  console.log(heroName+"level"+heros[heroName].level);

 
}

function levelCheck(heroExperience){
 levelBorder=50;
 for(n=0;levelBorder<=heroExperience;n++){
  levelBorder=levelBorder*2.2;
 }
 return n+1;
}

function experienceResultFunction(roleExperienceResult,heroName){
 switch(roleExperienceResult){
  case "sprinter":
   var myhExperience = document.getElementById("spExperienceBase");
  break;
  case "attacker":
   var myhExperience = document.getElementById("atExperienceBase");
  break;
  case "gunner":
   var myhExperience = document.getElementById("guExperienceBase");
  break;
  case "tank":
   var myhExperience = document.getElementById("taExperienceBase");
  break;
 }
  myhExperience.innerHTML=
  "<img class=experienceResult1 src=item/"+heroName+".png><div class=experienceResult2>Level<font id="+heroName+"ResultExperience></font></div>";  
  var elem = document.getElementById(heroName+"ResultExperience");
  elem.innerHTML = heros[heroName].level;
}

function liberateHero(heroName,sentence){
 heroLiberateScreen.style.zIndex=40;
 heros[heroName].usable=1;
 var myh = document.getElementById("liberateCondition");
 myh.innerHTML = sentence;
 
 let nodeheroLiberateImgBase=document.createElement('span');
 nodeheroLiberateImgBase.setAttribute('id',heroName+"liberateBase");
 var parentDiv = document.getElementById("heroLiberateImgBase");
 parentDiv.appendChild(nodeheroLiberateImgBase);
   
 var myh = document.getElementById(heroName+"liberateBase");
 myh.innerHTML = "<img src=item/"+heroName+".png class=heroLiberateImg>";
 
 if(heroName=="thirteen"){
  items["sickle"].recipe=1;
  f_popUpN("堕天の鎌","条件が満たされたため<br>新たなクラフトが解放されました。");
 }
}

function heroLiberateBack(){
 heroLiberateScreen.style.zIndex=-60;
 var myh = document.getElementById("heroLiberateImgBase");
 myh.innerHTML = " ";
}

function popUpBack(imgName){
 popUpNCheck--;
 if(popUpNCheck==0){
  popUpScreenN.style.zIndex=-60;
 }
 localSave();
 var myh = document.getElementById(imgName+"popUpScreen");
 myh.innerHTML = " ";
 var myh = document.getElementById(imgName+"popUpScreen");
 myh.removeAttribute('id');
 
 document.documentElement.style.setProperty('--popUpOKButton', "0");
}

function f_popUpN(imgName,sentence){
 popUpNCheck++;
 popUpScreenN.style.zIndex=40;
 
 let nodeheroLiberateImgBase=document.createElement('div');
 nodeheroLiberateImgBase.setAttribute('id',imgName+"popUpScreen");
 var parentDiv = document.getElementById("popUpScreenN");
 parentDiv.appendChild(nodeheroLiberateImgBase);
 
 var myh = document.getElementById(imgName+"popUpScreen");
 myh.innerHTML = "<div class=BlackBack></div><div id="+imgName+"popUp><div class=buttonA><div class=buttonB><br><font id="+imgName+"popUpCondition></font><div id="+imgName+"popUpImgBase></div></div></div></div><div id="+imgName+"popUpOK><div class=buttonA><div class=buttonB>OK</div></div></div><div id="+imgName+"popUpOKButton onclick=selectSE.play();popUpBack('"+imgName+"')></div><style>:root{--"+imgName+"popUpOKButton:0;--"+imgName+"popUpScreen:-60;}#"+imgName+"popUpScreen{position:absolute;top:0%;left:0%;height:100%;width:100%;z-index:var(--"+imgName+"popUpScreen);}#"+imgName+"popUp{position:absolute;top:10%;left:10%;height:80%;width:80%;}#"+imgName+"popUpImgBase{height:100%;width:100%;}#"+imgName+"popUpOK{position:absolute;bottom:20%;left:30%;height:10%;width:40%;}#"+imgName+"popUpOKButton{position:absolute;opacity:var(--"+imgName+"popUpOKButton);bottom:20%;left:30%;height:10%;width:40%;backGround:#ffffff;}</style>";
 
 document.documentElement.style.setProperty("--"+imgName+"popUpScreen", 40);
 var myh = document.getElementById(imgName+"popUpCondition");
 myh.innerHTML = sentence;
 
 let heroLiberateImgBase=document.createElement('span');
 heroLiberateImgBase.setAttribute('id',imgName+"popUpBase");
 var parentDiv = document.getElementById(imgName+"popUpImgBase");
 parentDiv.appendChild(heroLiberateImgBase);
   
 var myh = document.getElementById(imgName+"popUpBase");
 myh.innerHTML = "<img src=item/"+imgName+".png class=popUpImg>";
 
 var tag=imgName+"popUpOKButton";
 var dv=document.getElementById(tag);
 dv.addEventListener('pointerover',f_chgOpacity1(tag,1),false);
 dv.addEventListener('pointerout' ,f_chgOpacity1(tag,0),false);
 
 document.documentElement.style.setProperty("--"+imgName+"popUpOKButton", "0");
 }

function f_leila(){
 goodSE.play();
 if(heros["thomas"].skillBusable==0){
  f_popUpN("thomas","トマスのスキルが解放されました。<br>※トマスが解放されていないと使えません");
  heros["thomas"].skillBusable=1;
 }
 f_popUpN("leila","お忍び中のレイラ嬢を見つけた<br>500BM獲得");
 leila.style.zIndex=-60;
 items["BM"].num=items["BM"].num+500;
}

