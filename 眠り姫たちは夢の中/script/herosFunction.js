function f_heroMove(){console.log("heroPosi:"+heroPosi);
 easyHelpNum=0;
 if(heroPosi[0]<=4){
  player1Top=heroPosi[0]*12.5;
  document.documentElement.style.setProperty('--player1Top', player1Top+"%");
  stageBaseTop=0;
  document.documentElement.style.setProperty('--stageBaseTop', stageBaseTop+"%");
 }
 else if(heroPosi[0]>=selectFront.length-4){
  player1Top=(heroPosi[0]-selectFront.length+8)*12.5;
  document.documentElement.style.setProperty('--player1Top', player1Top+"%");
  stageBaseTop=-(selectFront.length-8)*12.5;
  document.documentElement.style.setProperty('--stageBaseTop', stageBaseTop+"%");
 }
 else{
  player1Top=50;
  document.documentElement.style.setProperty('--player1Top', player1Top+"%");
  stageBaseTop=-(heroPosi[0]-4)*12.5;
  document.documentElement.style.setProperty('--stageBaseTop', stageBaseTop+"%");
 }
 if(heroPosi[1]<=6.5){
  player1Left=heroPosi[1]*6.9;
  document.documentElement.style.setProperty('--player1Left', player1Left+"%");
  stageBaseLeft=0;
  document.documentElement.style.setProperty('--stageBaseLeft', stageBaseLeft+"%");
 }
 else if(heroPosi[1]>=selectFront[0].length-8){
  player1Left=(heroPosi[1]-selectFront[0].length+14.5)*6.9;
  document.documentElement.style.setProperty('--player1Left', player1Left+"%");
  stageBaseLeft=-(selectFront[0].length-14.5)*6.9;
  document.documentElement.style.setProperty('--stageBaseLeft', stageBaseLeft+"%");
 }
 else{
  player1Left=41.4;
  document.documentElement.style.setProperty('--player1Left', player1Left+"%");
  stageBaseLeft=-(heroPosi[1]-6)*6.9;
  document.documentElement.style.setProperty('--stageBaseLeft', stageBaseLeft+"%");
 }
 if(heroPosi[0]==0){
  f_stageChange();
 }
 else if(heroPosi[1]+1==selectFront[0].length||heroPosi[1]==0){
  f_stageChange();
 }
 else if(heroPosi[0]==selectFront.length-1){
  f_stageChange();
 }
 if(selectFront[Math.floor(heroPosi[0])][Math.floor(heroPosi[1])]=="blockA"&&selectFront[Math.ceil(heroPosi[0])][Math.floor(heroPosi[1])]=="blockA"&&selectFront[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1])]=="blockA"&&selectFront[Math.ceil(heroPosi[0])][Math.ceil(heroPosi[1])]=="blockA"){
  player1Base.style.zIndex=1;
  secretAreaBase.style.opacity=1;
 }
 else{
  player1Base.style.zIndex=0;
  secretAreaBase.style.opacity=0;
 }
 f_checkAppear();
}

function f_stageChange(){
 if(f_stageChangeCheck){
  phase=0;
  f_stageChangeCheck=0;
  f_stageReset();
  timeStop=1;
  heroActControl=1;
  fallOK=0;
  var myh = document.getElementById("shiftScreen");
  myh.classList.add('shiftScreen1');
  var beforeHeroPosiY=heroPosi[0];
  var beforeHeroPosiX=heroPosi[1];
  if(selectStage=="coclicoDream9"&&heroPosi[0]<3&&heroPosi[1]>=3&&heroPosi[1]<=4){
   heroPosi=[13,5];
   makeStage(f_arrayMake(coclicoDream5Back),f_arrayMake(coclicoDream5Gimmick),f_arrayMake(coclicoDream5Hit),f_arrayMake(coclicoDream5Front),"coclicoDream5");
  }
  else if(selectStage=="coclicoDream9"&&heroPosi[0]<3&&heroPosi[1]<3){
   heroPosi=[11,2];
   makeStage(f_arrayMake(coclicoDream5Back),f_arrayMake(coclicoDream5Gimmick),f_arrayMake(coclicoDream5Hit),f_arrayMake(coclicoDream5Front),"coclicoDream5");
  }
  else if(selectStage=="coclicoDream5"&&heroPosi[0]>=13&&heroPosi[1]>=3&&heroPosi[1]<5){
   heroPosi=[1,3];
   makeStage(f_arrayMake(coclicoDream9Back),f_arrayMake(coclicoDream9Gimmick),f_arrayMake(coclicoDream9Hit),f_arrayMake(coclicoDream9Front),"coclicoDream9");
  }
  else if(selectStage=="coclicoDream5"&&heroPosi[0]>=13&&heroPosi[1]<3){
   heroPosi=[1,1];
   makeStage(f_arrayMake(coclicoDream9Back),f_arrayMake(coclicoDream9Gimmick),f_arrayMake(coclicoDream9Hit),f_arrayMake(coclicoDream9Front),"coclicoDream9");
  }
  else if(selectStage=="coclicoDream5"&&heroPosi[0]<=2&&heroPosi[1]>19){
   heroPosi=[2,1];
   makeStage(f_arrayMake(coclicoDream6Back),f_arrayMake(coclicoDream6Gimmick),f_arrayMake(coclicoDream6Hit),f_arrayMake(coclicoDream6Front),"coclicoDream6");
  }
  else if(selectStage=="coclicoDream6"&&heroPosi[0]<=2&&heroPosi[1]<=1){
   heroPosi=[2,20];
   makeStage(f_arrayMake(coclicoDream5Back),f_arrayMake(coclicoDream5Gimmick),f_arrayMake(coclicoDream5Hit),f_arrayMake(coclicoDream5Front),"coclicoDream5");
  }
  else if(selectStage=="coclicoDream6"&&heroPosi[0]>=13&&heroPosi[1]>=12&&heroPosi[1]<=13){
   heroPosi=[1,13];
   makeStage(f_arrayMake(coclicoDream10Back),f_arrayMake(coclicoDream10Gimmick),f_arrayMake(coclicoDream10Hit),f_arrayMake(coclicoDream10Front),"coclicoDream10");
  }
  else if(selectStage=="coclicoDream10"&&heroPosi[0]<=1&&heroPosi[1]>=12&&heroPosi[1]<=13){
   heroPosi=[13,11];
   makeStage(f_arrayMake(coclicoDream6Back),f_arrayMake(coclicoDream6Gimmick),f_arrayMake(coclicoDream6Hit),f_arrayMake(coclicoDream6Front),"coclicoDream6");
  }
  else if(selectStage=="coclicoDream5"&&heroPosi[0]<=1&&heroPosi[1]<=2){
   heroPosi=[13,3];
   makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
  }
  else if(selectStage=="coclicoDream1"&&heroPosi[0]>=13&&heroPosi[1]<=2){
   heroPosi=[1,1];
   makeStage(f_arrayMake(coclicoDream5Back),f_arrayMake(coclicoDream5Gimmick),f_arrayMake(coclicoDream5Hit),f_arrayMake(coclicoDream5Front),"coclicoDream5");
  }
  else if(selectStage=="coclicoDream1"&&heroPosi[0]<=2&&heroPosi[1]>=19){
   heroPosi=[2,1];
   makeStage(f_arrayMake(coclicoDream2Back),f_arrayMake(coclicoDream2Gimmick),f_arrayMake(coclicoDream2Hit),f_arrayMake(coclicoDream2Front),"coclicoDream2");
  }
  else if(selectStage=="coclicoDream2"&&heroPosi[0]<=2&&heroPosi[1]<=2){
   heroPosi=[2,20];
   makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
  }
  else if(selectStage=="coclicoDream1"&&heroPosi[0]<=6&&heroPosi[1]>=19){
   heroPosi=[6,1];
   makeStage(f_arrayMake(coclicoDream2Back),f_arrayMake(coclicoDream2Gimmick),f_arrayMake(coclicoDream2Hit),f_arrayMake(coclicoDream2Front),"coclicoDream2");
  }
  else if(selectStage=="coclicoDream2"&&heroPosi[0]<=6&&heroPosi[1]<=2){
   heroPosi=[6,20];
   makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
  }
  else if(selectStage=="coclicoDream1"&&heroPosi[0]>=12&&heroPosi[1]>=19){
   heroPosi=[13,1];
   makeStage(f_arrayMake(coclicoDream2Back),f_arrayMake(coclicoDream2Gimmick),f_arrayMake(coclicoDream2Hit),f_arrayMake(coclicoDream2Front),"coclicoDream2");
  }
  else if(selectStage=="coclicoDream2"&&heroPosi[0]<=2&&heroPosi[1]>=19){
   if(!event["marionette"].happen){blocks["itemF"].name="0";}
   heroPosi=[6,1];
   makeStage(f_arrayMake(coclicoDream3Back),f_arrayMake(coclicoDream3Gimmick),f_arrayMake(coclicoDream3Hit),f_arrayMake(coclicoDream3Front),"coclicoDream3");
  }
  else if(selectStage=="coclicoDream3"&&heroPosi[0]<=6&&heroPosi[1]<=1){
   heroPosi=[2,20];
   makeStage(f_arrayMake(coclicoDream2Back),f_arrayMake(coclicoDream2Gimmick),f_arrayMake(coclicoDream2Hit),f_arrayMake(coclicoDream2Front),"coclicoDream2");
  }
  else if(selectStage=="coclicoDream3"&&heroPosi[1]>=3&&event["marionette"].happen==0){
   heroPosi=[6,3];
   makeStage(f_arrayMake(coclicoDream3BossBack),f_arrayMake(coclicoDream3BossGimmick),f_arrayMake(coclicoDream3BossHit),f_arrayMake(coclicoDream3BossFront),"coclicoDream3Boss");
  }
  else if(selectStage=="coclicoDream3Boss"){
   heroPosi=[6,3];
   makeStage(f_arrayMake(coclicoDream3Back),f_arrayMake(coclicoDream3Gimmick),f_arrayMake(coclicoDream3Hit),f_arrayMake(coclicoDream3Front),"coclicoDream3");
  }
  else if(selectStage=="coclicoDream10"&&heroPosi[0]<=5&&heroPosi[1]>=20.5){
   if(!event["skeleton"].happen){blocks["itemG"].name="0";}
   heroPosi=[6,1];
   makeStage(f_arrayMake(coclicoDream11Back),f_arrayMake(coclicoDream11Gimmick),f_arrayMake(coclicoDream11Hit),f_arrayMake(coclicoDream11Front),"coclicoDream11");
  }
  else if(selectStage=="coclicoDream11"&&heroPosi[0]>=4&&heroPosi[1]<=1){
   heroPosi=[5,20];
   makeStage(f_arrayMake(coclicoDream10Back),f_arrayMake(coclicoDream10Gimmick),f_arrayMake(coclicoDream10Hit),f_arrayMake(coclicoDream10Front),"coclicoDream10");
  }
  else if(selectStage=="coclicoDream11"&&heroPosi[1]>=3&&event["skeleton"].happen==0){
   heroPosi=[6,3];
   makeStage(f_arrayMake(coclicoDream11BossBack),f_arrayMake(coclicoDream11BossGimmick),f_arrayMake(coclicoDream11BossHit),f_arrayMake(coclicoDream11BossFront),"coclicoDream11Boss");
  }
  else if(selectStage=="coclicoDream11Boss"){
   heroPosi=[6,3];
   makeStage(f_arrayMake(coclicoDream11Back),f_arrayMake(coclicoDream11Gimmick),f_arrayMake(coclicoDream11Hit),f_arrayMake(coclicoDream11Front),"coclicoDream11");
  }
  else if(selectStage=="coclicoDream3"&&heroPosi[0]>=6&&heroPosi[1]>=19){
   heroPosi=[1,4];
   makeStage(f_arrayMake(coclicoDream7Back),f_arrayMake(coclicoDream7Gimmick),f_arrayMake(coclicoDream7Hit),f_arrayMake(coclicoDream7Front),"coclicoDream7");
  }
  else if(selectStage=="coclicoDream7"&&heroPosi[0]<=2&&heroPosi[1]>=4&&heroPosi[1]<=5){
   heroPosi=[6,17];
   makeStage(f_arrayMake(coclicoDream3Back),f_arrayMake(coclicoDream3Gimmick),f_arrayMake(coclicoDream3Hit),f_arrayMake(coclicoDream3Front),"coclicoDream3");
  }
  else if(selectStage=="coclicoDream11"&&heroPosi[0]<=2&&heroPosi[1]>=19){
   heroPosi=[13,2];console.log(heroPosi);
   makeStage(f_arrayMake(coclicoDream7Back),f_arrayMake(coclicoDream7Gimmick),f_arrayMake(coclicoDream7Hit),f_arrayMake(coclicoDream7Front),"coclicoDream7");
  }
  else if(selectStage=="coclicoDream7"&&heroPosi[0]>=13&&heroPosi[1]>=4&&heroPosi[1]<=5){
   heroPosi=[6,17];
   makeStage(f_arrayMake(coclicoDream11Back),f_arrayMake(coclicoDream11Gimmick),f_arrayMake(coclicoDream11Hit),f_arrayMake(coclicoDream11Front),"coclicoDream11");
  }
  else if(selectStage=="coclicoDream7"&&heroPosi[0]<=5&&heroPosi[1]>=19){
   heroPosi=[5,1];
   makeStage(f_arrayMake(coclicoDream8Back),f_arrayMake(coclicoDream8Gimmick),f_arrayMake(coclicoDream8Hit),f_arrayMake(coclicoDream8Front),"coclicoDream8");
  }
  else if(selectStage=="coclicoDream8"&&heroPosi[0]<=5&&heroPosi[1]<=1){
   heroPosi=[5,20];
   makeStage(f_arrayMake(coclicoDream7Back),f_arrayMake(coclicoDream7Gimmick),f_arrayMake(coclicoDream7Hit),f_arrayMake(coclicoDream7Front),"coclicoDream7");
  }
  else if(selectStage=="coclicoDream8"&&heroPosi[0]<=1&&heroPosi[1]>=19){
   heroPosi=[6,3.5];
   makeStage(f_arrayMake(coclicoDream4Back),f_arrayMake(coclicoDream4Gimmick),f_arrayMake(coclicoDream4Hit),f_arrayMake(coclicoDream4Front),"coclicoDream4");
  }
  else if(selectStage=="coclicoDream4"&&heroPosi[0]>=6&&heroPosi[1]<=2){
   heroPosi=[1,20];
   makeStage(f_arrayMake(coclicoDream8Back),f_arrayMake(coclicoDream8Gimmick),f_arrayMake(coclicoDream8Hit),f_arrayMake(coclicoDream8Front),"coclicoDream8");
  }
  else if(selectStage=="coclicoDream8"&&heroPosi[0]==10&&heroPosi[1]>=12.5&&heroPosi[1]<=15.5){
   heroPosi=[6,6];
   makeStage(f_arrayMake(coclicoDream8BossBack),f_arrayMake(coclicoDream8BossGimmick),f_arrayMake(coclicoDream8BossHit),f_arrayMake(coclicoDream8BossFront),"coclicoDream8Boss");
   setTimeout(function(){f_speech("niziiroEnc1");},500);
  }
  else if(selectStage=="coclicoDream8Boss"){
   heroPosi=[10,14];
   makeStage(f_arrayMake(coclicoDream8Back),f_arrayMake(coclicoDream8Gimmick),f_arrayMake(coclicoDream8Hit),f_arrayMake(coclicoDream8Front),"coclicoDream8");
  }
  else if(selectStage=="coclicoDream10"&&heroPosi[0]==3&&heroPosi[1]>=1&&heroPosi[1]<=3){
   heroPosi=[6,6];
   makeStage(f_arrayMake(coclicoDream10BossBack),f_arrayMake(coclicoDream10BossGimmick),f_arrayMake(coclicoDream10BossHit),f_arrayMake(coclicoDream10BossFront),"coclicoDream10Boss");
   setTimeout(function(){f_speech("lurucaEnc1");},500);
  }
  else if(selectStage=="coclicoDream1"&&heroPosi[0]==8&&heroPosi[1]>=11.5&&heroPosi[1]<=14.5){
   heroPosi=[6,6];
   makeStage(f_arrayMake(coclicoDream1BossBack),f_arrayMake(coclicoDream1BossGimmick),f_arrayMake(coclicoDream1BossHit),f_arrayMake(coclicoDream1BossFront),"coclicoDream1Boss");
   setTimeout(function(){f_speech("angelEnc1");},500);
  }
  else if(selectStage=="coclicoDream1Boss"){
   heroPosi=[8,13];
   makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
  }
  else if(selectStage=="coclicoDream10Boss"){
   heroPosi=[3,2];
   makeStage(f_arrayMake(coclicoDream10Back),f_arrayMake(coclicoDream10Gimmick),f_arrayMake(coclicoDream10Hit),f_arrayMake(coclicoDream10Front),"coclicoDream10");
  }
  else if(selectStage=="coclicoDream8"&&heroPosi[0]>=14&&heroPosi[1]>=13){
   if(!event["princess"].happen){blocks["itemH"].name="0";}
   heroPosi=[1,2];
   makeStage(f_arrayMake(coclicoDream12Back),f_arrayMake(coclicoDream12Gimmick),f_arrayMake(coclicoDream12Hit),f_arrayMake(coclicoDream12Front),"coclicoDream12");
  }
  else if(selectStage=="coclicoDream12Boss"&&heroPosi[0]>=2&&event["princess"].happen==1){
   heroPosi=[6,5];
   makeStage(f_arrayMake(coclicoDream12Back),f_arrayMake(coclicoDream12Gimmick),f_arrayMake(coclicoDream12Hit),f_arrayMake(coclicoDream12Front),"coclicoDream12");
  }
  else if(selectStage=="coclicoDream12"&&heroPosi[0]>=2&&event["princess"].happen==0){
   heroPosi=[6,5];
   makeStage(f_arrayMake(coclicoDream12BossBack),f_arrayMake(coclicoDream12BossGimmick),f_arrayMake(coclicoDream12BossHit),f_arrayMake(coclicoDream12BossFront),"coclicoDream12Boss");
  }
  else if(selectStage=="coclicoDream12"&&heroPosi[0]<=1){
   heroPosi=[13,15];
   makeStage(f_arrayMake(coclicoDream8Back),f_arrayMake(coclicoDream8Gimmick),f_arrayMake(coclicoDream8Hit),f_arrayMake(coclicoDream8Front),"coclicoDream8");
  }
  else if(selectStage=="coclicoDream2"&&heroPosi[0]>=12&&heroPosi[1]<=2){
   heroPosi=[13,20];
   if(blocks["hamsterA"].name=="0"&&blocks["hamsterB"].name=="0"&&blocks["hamsterC"].name=="0"&&blocks["hamsterD"].name=="0"&&blocks["hamsterE"].name=="0"){
    makeStage(f_arrayMake(coclicoDream1BackP),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
   }
   else{
    makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
   }
  }
  else if(selectStage=="coclicoDream5"&&heroPosi[1]>=13&&event["nikolaEncount"].happen==0){
   event["nikolaEncount"].happen=1;
   heros["nikola"].usable=1;
   heroPosi=[11,14];
   makeStage(f_arrayMake(coclicoDream5Back),f_arrayMake(coclicoDream5Gimmick),f_arrayMake(coclicoDream5Hit),f_arrayMake(coclicoDream5Front),"coclicoDream5");
  }
  else if(selectStage=="coclicoDream6"&&heroPosi[0]<=2&&heroPosi[1]>=7&&heroPosi[1]<=13&&event["lyricaEncount"].happen==0){
   event["lyricaEncount"].happen=1;
   heros["lyrica"].usable=1;
   heroPosi=[2,7];
   makeStage(f_arrayMake(coclicoDream6Back),f_arrayMake(coclicoDream6Gimmick),f_arrayMake(coclicoDream6Hit),f_arrayMake(coclicoDream6Front),"coclicoDream6");
  }
  else if(selectStage=="coclicoDream10"&&heroPosi[0]==7&&heroPosi[1]<=9&&event["aliceEncount"].happen==0){
   event["aliceEncount"].happen=1;
   heros["alice"].usable=1;
   heroPosi=[7,7];
   makeStage(f_arrayMake(coclicoDream10Back),f_arrayMake(coclicoDream10Gimmick),f_arrayMake(coclicoDream10Hit),f_arrayMake(coclicoDream10Front),"coclicoDream10");
  }
  else if(selectStage=="coclicoDream2"&&heroPosi[0]>=8&&heroPosi[1]>=14&&event["amairoEncount"].happen==0){
   event["amairoEncount"].happen=1;
   heros["amairo"].usable=1;
   heroPosi=[10,14];
   makeStage(f_arrayMake(coclicoDream2Back),f_arrayMake(coclicoDream2Gimmick),f_arrayMake(coclicoDream2Hit),f_arrayMake(coclicoDream2Front),"coclicoDream2");
  }
  else if(selectStage=="coclicoDream1"&&heroPosi[0]>=10&&heroPosi[1]<=13&&heroPosi[1]>=11&&event["pierreEncount"].happen==0){
   event["pierreEncount"].happen=1;
   heros["pierre"].usable=1;
   heroPosi=[11,13];
   makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
  }
  else if(selectStage=="coclicoDream7"&&heroPosi[0]>=6&&heroPosi[0]<=7&&heroPosi[1]<=18&&heroPosi[1]>=16&&event["thirteenEncount"].happen==0){
   event["thirteenEncount"].happen=1;
   heros["thirteen"].usable=1;
   heroPosi=[7,16];
   makeStage(f_arrayMake(coclicoDream7Back),f_arrayMake(coclicoDream7Gimmick),f_arrayMake(coclicoDream7Hit),f_arrayMake(coclicoDream7Front),"coclicoDream7");
  }
  else if(selectStage=="coclicoDream8"&&heroPosi[0]>=11&&heroPosi[0]<=13&&heroPosi[1]<=10&&heroPosi[1]>=6&&event["coclicoEncount"].happen==0){
   event["coclicoEncount"].happen=1;
   heros["coclico"].usable=1;
   heroPosi=[13,6];
   makeStage(f_arrayMake(coclicoDream8Back),f_arrayMake(coclicoDream8Gimmick),f_arrayMake(coclicoDream8Hit),f_arrayMake(coclicoDream8Front),"coclicoDream8");
  }
  else if(selectStage=="coclicoDream4"&&heroPosi[1]>=3){
   heroPosi=[6,4];
   makeStage(f_arrayMake(coclicoDream4BossBack),f_arrayMake(coclicoDream4BossGimmick),f_arrayMake(coclicoDream4BossHit),f_arrayMake(coclicoDream4BossFront),"coclicoDream4Boss");
  }
  else{
   switch(selectStage){
    case "coclicoDream1":
     makeStage(f_arrayMake(coclicoDream1Back),f_arrayMake(coclicoDream1Gimmick),f_arrayMake(coclicoDream1Hit),f_arrayMake(coclicoDream1Front),"coclicoDream1");
    break;
    case "coclicoDream2":
     makeStage(f_arrayMake(coclicoDream2Back),f_arrayMake(coclicoDream2Gimmick),f_arrayMake(coclicoDream2Hit),f_arrayMake(coclicoDream2Front),"coclicoDream2");
    break;
    case "coclicoDream3":
     makeStage(f_arrayMake(coclicoDream3Back),f_arrayMake(coclicoDream3Gimmick),f_arrayMake(coclicoDream3Hit),f_arrayMake(coclicoDream3Front),"coclicoDream3");
    break;
    case "coclicoDream4":
     makeStage(f_arrayMake(coclicoDream4Back),f_arrayMake(coclicoDream4Gimmick),f_arrayMake(coclicoDream4Hit),f_arrayMake(coclicoDream4Front),"coclicoDream4");
    break;
    case "coclicoDream5":
     makeStage(f_arrayMake(coclicoDream5Back),f_arrayMake(coclicoDream5Gimmick),f_arrayMake(coclicoDream5Hit),f_arrayMake(coclicoDream5Front),"coclicoDream5");
    break;
    case "coclicoDream6":
     makeStage(f_arrayMake(coclicoDream6Back),f_arrayMake(coclicoDream6Gimmick),f_arrayMake(coclicoDream6Hit),f_arrayMake(coclicoDream6Front),"coclicoDream6");
    break;
    case "coclicoDream7":
     makeStage(f_arrayMake(coclicoDream7Back),f_arrayMake(coclicoDream7Gimmick),f_arrayMake(coclicoDream7Hit),f_arrayMake(coclicoDream7Front),"coclicoDream7");
    break;
    case "coclicoDream8":
     makeStage(f_arrayMake(coclicoDream8Back),f_arrayMake(coclicoDream8Gimmick),f_arrayMake(coclicoDream8Hit),f_arrayMake(coclicoDream8Front),"coclicoDream8");
    break;
    case "coclicoDream9":
     makeStage(f_arrayMake(coclicoDream9Back),f_arrayMake(coclicoDream9Gimmick),f_arrayMake(coclicoDream9Hit),f_arrayMake(coclicoDream9Front),"coclicoDream9");
    break;
    case "coclicoDream10":
     makeStage(f_arrayMake(coclicoDream10Back),f_arrayMake(coclicoDream10Gimmick),f_arrayMake(coclicoDream10Hit),f_arrayMake(coclicoDream10Front),"coclicoDream10");
    break;
    case "coclicoDream11":
     makeStage(f_arrayMake(coclicoDream11Back),f_arrayMake(coclicoDream11Gimmick),f_arrayMake(coclicoDream11Hit),f_arrayMake(coclicoDream11Front),"coclicoDream11");
    break;
    case "coclicoDream12":
     makeStage(f_arrayMake(coclicoDream12Back),f_arrayMake(coclicoDream12Gimmick),f_arrayMake(coclicoDream12Hit),f_arrayMake(coclicoDream12Front),"coclicoDream12");
    break;
   }
  }
  setTimeout(function(){
   f_heroMove();
   var myh = document.getElementById("shiftScreen");
   myh.classList.remove('shiftScreen1');
   var myh = document.getElementById("shiftScreen");
   myh.classList.add('shiftScreen2');
   setTimeout(function(){
    //↓returnAdventure
     phase=1;
     heroMoveSide=0;heroAction=0;heroWalk=0;heroActW=0;heroActJ=0;
     heroActControl=0;
     fallOK=1;
     timeStop=0;
     blackoutScreen.style.opacity=0;
     document.documentElement.style.setProperty('--blackout', "0%");
     document.documentElement.style.setProperty('--checkScreen', "0%");
     var myh = document.getElementById("checkScreen");
     myh.innerHTML = " ";
    //↑reurnAdventure
    var myh = document.getElementById("shiftScreen");
    myh.classList.remove('shiftScreen2');
    timeStop=0;
    if(enterKeySentence=="end"){heroActControl=0;}
    else if(enterKeySentence=="end"){timeStop=1;}
    else{heroActControl=1;}
    fallOK=1;
    f_stageChangeCheck=1;
    if(!event["stage1"].happen&&selectStage=="coclicoDream1"){event["stage1"].happen=1;}
    if(!event["stage2"].happen&&selectStage=="coclicoDream2"){event["stage2"].happen=1;}
    if(!event["stage3"].happen&&selectStage=="coclicoDream3"){event["stage3"].happen=1;}
    if(!event["stage4"].happen&&selectStage=="coclicoDream4"){event["stage4"].happen=1;}
    if(!event["stage5"].happen&&selectStage=="coclicoDream5"){f_speech("marcosLocal1");event["stage5"].happen=1;}
    if(!event["stage6"].happen&&selectStage=="coclicoDream6"){event["stage6"].happen=1;}
    if(!event["stage7"].happen&&selectStage=="coclicoDream7"){event["stage7"].happen=1;}
    if(!event["stage8"].happen&&selectStage=="coclicoDream8"){event["stage8"].happen=1;}
    if(!event["stage10"].happen&&selectStage=="coclicoDream10"){event["stage10"].happen=1;}
    if(!event["stage11"].happen&&selectStage=="coclicoDream11"){event["stage11"].happen=1;}
    if(!event["stage12"].happen&&selectStage=="coclicoDream12"){event["stage12"].happen=1;}
    f_BGM();
   },200);
  },200);
 }
}

function f_heroWalk(walkNum){
 if(heroWalk_span==0){
  if(heroActControl==0){
   heroWalk_span=1;setTimeout(function(){heroWalk_span=0;},90);
   heroAction=1;
   if(heroPosi[0]%1==0&&(selectHit[heroPosi[0]+1][Math.floor(heroPosi[1])]==1||selectHit[heroPosi[0]+1][Math.ceil(heroPosi[1])]==1)){
    document.documentElement.style.setProperty('--direction', direction);
    if(heroWalk>walkNum){
     heroWalk=0;
    }
    if(heroWalk==0){
     document.documentElement.style.setProperty('--player1Width', 6.9+"%");
     document.documentElement.style.setProperty('--player1Left', player1Left+"%");
     var myh = document.getElementById("player1Base");
     myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/walk1.png id=player1>";
    }
    else if(heroWalk==1){
     document.documentElement.style.setProperty('--player1Width', 6.9+"%");
     document.documentElement.style.setProperty('--player1Left', player1Left+"%");
     var myh = document.getElementById("player1Base");
     myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/walk2.png id=player1>";
    }
    heroWalk++;
    var lenHeroPosi=heroPosi[1];
    if(heroPosi[1]%1==0.5||(selectHit[heroPosi[0]][Math.floor(heroPosi[1]+direction)]==0&&selectHit[heroPosi[0]][Math.ceil(heroPosi[1]+direction)]==0)){
     if(heroActControl==0){heroPosi[1]+=direction*0.5;f_heroMove();}
    }
    setTimeout(function(){
     if(heroActW==1){
      f_heroWalk(walkNum);
     }
    },100);
   }
  }
 }
}

function f_heroJump(upN){
 if(selectHit[Math.floor(heroPosi[0]-0.5)][Math.floor(heroPosi[1])]==0&&selectHit[Math.ceil(heroPosi[0]-0.5)][Math.floor(heroPosi[1])]==0&&selectHit[Math.floor(heroPosi[0]-0.5)][Math.ceil(heroPosi[1])]==0&&selectHit[Math.ceil(heroPosi[0]-0.5)][Math.ceil(heroPosi[1])]==0){
  if(heroActControl==0){
   heroPosi[0]-=0.5;
   document.documentElement.style.setProperty('--player1Width', 6.9+"%");
   document.documentElement.style.setProperty('--player1Left', player1Left+"%");
   var myh = document.getElementById("player1Base");
   myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/jump.png id=player1>";
   f_heroMove();
  }
  if(heroMoveSide){
   if(selectHit[Math.floor(heroPosi[0])][Math.floor(heroPosi[1]+direction*0.5)]==0&&selectHit[Math.ceil(heroPosi[0])][Math.floor(heroPosi[1]+direction*0.5)]==0&&selectHit[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1]+direction*0.5)]==0&&selectHit[Math.ceil(heroPosi[0])][Math.ceil(heroPosi[1]+direction*0.5)]==0){
    if(heroActControl==0){
     heroPosi[1]+=direction*0.5;
     document.documentElement.style.setProperty('--direction', direction);
     f_heroMove();
    }
   }
  }
  setTimeout(function(){
   f_heroWalk(heros[selectHero].walkNum);
   if(heroActJ){
    upN++;
    if(upN<6){
     f_heroJump(upN);
    }
    else{
     if(heroPosi[0]%1==0){if(selectHit[heroPosi[0]+1][heroPosi[1]]==1){heroAction=0;}}
     fallOK=1;
    }
   }
  },100);
 }
}

function f_heroFall(){
 if(selectFront.length-heroPosi[0]<=1){
  document.documentElement.style.setProperty('--player1Width', 6.9+"%");
  document.documentElement.style.setProperty('--player1Left', player1Left+"%");
  var myh = document.getElementById("player1Base");
  myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/jump.png id=player1>";
  if(heroActControl==0&&heroPosi[0]<selectFront.length-1){heroPosi[0]+=0.5;f_heroMove();}
  if(heroMoveSide){
   if(blocks[selectStage[Math.floor(heroPosi[0])][Math.floor(heroPosi[1]+direction*0.5)]].hit==0&&blocks[selectStage[Math.ceil(heroPosi[0])][Math.floor(heroPosi[1]+direction*0.5)]].hit==0&&blocks[selectStage[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1]+direction*0.5)]].hit==0&&blocks[selectStage[Math.ceil(heroPosi[0])][Math.ceil(heroPosi[1]+direction*0.5)]].hit==0){
    if(heroActControl==0){
     heroPosi[1]+=direction*0.5;
     document.documentElement.style.setProperty('--direction', direction);
     f_heroMove();
    }
    if(heroPosi[0]%1==0&&(selectHit[heroPosi[0]+1][Math.floor(heroPosi[1])]==1||selectHit[heroPosi[0]+1][Math.ceil(heroPosi[1])]==1)){
     f_heroWalk(heros[selectHero].walkNum);
    }
   }
  }
 }
 else if(selectHit[Math.floor(heroPosi[0]+0.5)][Math.floor(heroPosi[1])]==0&&selectHit[Math.ceil(heroPosi[0]+0.5)][Math.floor(heroPosi[1])]==0&&selectHit[Math.floor(heroPosi[0]+0.5)][Math.ceil(heroPosi[1])]==0&&selectHit[Math.ceil(heroPosi[0]+0.5)][Math.ceil(heroPosi[1])]==0){
  document.documentElement.style.setProperty('--player1Width', 6.9+"%");
  document.documentElement.style.setProperty('--player1Left', player1Left+"%");
  var myh = document.getElementById("player1Base");
  myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/jump.png id=player1>";
  if(heroActControl==0&&heroPosi[0]<selectFront.length-1){heroPosi[0]+=0.5;f_heroMove();}
  if(heroMoveSide){
   if(selectHit[Math.floor(heroPosi[0])][Math.floor(heroPosi[1]+direction*0.5)]==0&&selectHit[Math.ceil(heroPosi[0])][Math.floor(heroPosi[1]+direction*0.5)]==0&&selectHit[Math.floor(heroPosi[0])][Math.ceil(heroPosi[1]+direction*0.5)]==0&&selectHit[Math.ceil(heroPosi[0])][Math.ceil(heroPosi[1]+direction*0.5)]==0){
    if(heroActControl==0){
     heroPosi[1]+=direction*0.5;
     document.documentElement.style.setProperty('--direction', direction);
     f_heroMove();
    }
    if(heroPosi[0]%1==0){
     if(selectHit[heroPosi[0]+1][Math.floor(heroPosi[1])]==1||selectHit[heroPosi[0]+1][Math.ceil(heroPosi[1])]==1){
      f_heroWalk(heros[selectHero].walkNum);
     }
    }
   }
  }
 }
}

function f_heroAttack(){
 var success=0;
 for(var elem in enemyArray){
  if(Math.abs(enemyArray[elem][0]-heroPosi[0])<=0.5&&(Math.abs(enemyArray[elem][1]-heroPosi[1])<=0.5||Math.abs(enemyArray[elem][1]-(heroPosi[1]+direction))<=0.5)){
   success=1;
   var target=elem;
  }
 }
 document.documentElement.style.setProperty('--player1Width', 6.9+"%");

 var myh = document.getElementById("player1Base");
 myh.innerHTML = "<img src=item/"+selectHero+"/"+heros[selectHero].costume+"/attack1.png id=player1 style=width:200%;>";
 if(success){
  enemyArray[target][2]-=heros[selectHero].attack/level;
  f_attack(enemyArray[target][0],enemyArray[target][1]);
  if(enemyArray[target][2]<=0&&enemyArray[target][4]!="niziiroA"){
   enemyArray[target][2]=0;
   if(heros["thirteen"].usable){
    playerHP_1+=20;
    document.documentElement.style.setProperty('--player1damage', "#35ff8a");
    player1damage.style.opacity=0.8;
    setTimeout(function(){
     player1damage.style.opacity=0;
     setTimeout(function(){
      document.documentElement.style.setProperty('--player1damage', "#35ff8a");
      player1damage.style.opacity=0.8;
      setTimeout(function(){
       player1damage.style.opacity=0;
       document.documentElement.style.setProperty('--player1damage', "#ff0000");
      },100);
     },200);
    },200);
   }
  }
 }
}

