window.addEventListener("keydown",keydown);
window.addEventListener("keyup",keyup);

function keydown(event){
 if(event.keyCode==39){if(phase==1){f_key39();}else if(phase==2||phase==3){heroSelectRight.style.opacity=0.2;}}//移動
 if(event.keyCode==37){if(phase==1){f_key37();}else if(phase==2||phase==3){heroSelectLeft.style.opacity=0.2;}}//移動
 if(event.keyCode==65){if(phase==1){f_key65();}else if(phase==2){equipment.style.opacity=0.2;}}//攻撃
 if(event.keyCode==83){if(phase==1){f_key83();}}//ジャンプ
 if(event.keyCode==80){if(phase==5){talkSkip.style.opacity=0.2;}}
 if(event.keyCode==68){if(phase==2){dataBase.style.opacity=0.2;}}
 if(event.keyCode==79){if(phase==2||phase==3){option.style.opacity=0.2;}}
 if(event.keyCode==77){if(phase==2||phase==3){map.style.opacity=0.2;}}
 if(event.keyCode==70){if(phase==2){freeTalk.style.opacity=0.2;}}
 if(event.keyCode==67){if(phase==2||phase==3){costumeButton.style.opacity=0.2;}}
 if(event.keyCode==13){if(enterCheck==0){enterCheck=1;if(playerActControl==0&&phase!=0){f_speech(enterKeySentence);}else{popUpBack("null");}}}
 if(event.keyCode==32){if(phase==2||phase==3){returnAdventure.style.opacity=0.2;}else if(phase==4||phase==5){dataBaseListReturn.style.opacity=0.2;}else if(phase==6||phase==7){dataBaseListReturn.style.opacity=0.2;}}
 
 if(event.keyCode==89){if(yesNoShootCut==1){f_yesNo(1);}}
 if(event.keyCode==78){if(yesNoShootCut==1){f_yesNo(2);}}
}

function keyup(event){
 if(event.keyCode==39){if(phase==1){heroMoveSide=0;heroAction=0;heroWalk=0;heroActW=0;}else if(phase==2||phase==3){heroSelectRight.style.opacity=-1;heroChange(1);}}
 if(event.keyCode==37){if(phase==1){heroMoveSide=0;heroAction=0;heroWalk=0;heroActW=0;}else if(phase==2||phase==3){heroSelectLeft.style.opacity=-1;heroChange(-1);}}
 if(event.keyCode==65){if(phase==1){heroAction=0;}else if(phase==2){f_equipmentChange();equipment.style.opacity=1;}}
 if(event.keyCode==83){if(phase==1){heroAction=0;fallOK=1;heroActJ=0;}}
 if(event.keyCode==80){if(phase==5){talkSkip.style.opacity=1;f_popUpYesNo('null','この会話をスキップしてもよろしいですか？','skipTime=0;f_speech(enterKeySentence);');}}
 if(event.keyCode==68){if(phase==2){dataBase.style.opacity=1;f_dataBaseList();}}
 if(event.keyCode==79){if(phase==2){option.style.opacity=1;f_option(4);}else if(phase==3){option.style.opacity=1;f_option(5);}}
 if(event.keyCode==77){if(phase==2){map.style.opacity=1;f_map(4);}else if(phase==3){map.style.opacity=1;f_map(5);}}
 if(event.keyCode==70){if(phase==2){freeTalk.style.opacity=1;f_freeTalk();}}
 if(event.keyCode==67){if(phase==2||phase==3){costumeButton.style.opacity=1;f_costumeChange();}}
 if(event.keyCode==32){if(phase==1){if(!heroActControl){f_menue();}}else if(phase==2||phase==3){returnAdventure.style.opacity=1;f_returnAdventure();}else if(phase==4){dataBaseListReturn.style.opacity=1;f_checkPoint();}else if(phase==5){dataBaseListReturn.style.opacity=1;f_menue();}else if(phase==6){dataBaseListReturn.style.opacity=1;f_option(4);}else if(phase==7){dataBaseListReturn.style.opacity=1;f_option(5);}}
 if(event.keyCode==13){enterCheck=0;}
 
 if(event.keyCode==89){if(yesNoShootCut==1){f_yesNo(3);}}
 if(event.keyCode==78){if(yesNoShootCut==1){f_yesNo(4);}}
}

function f_key39(){
 if(!heroActControl){
  heroMoveSide=1;
  direction=1;
  //if(!heroAction){
   heroActW=1;
   f_heroWalk(heros[selectHero].walkNum);
  //}
  heroAction=1;
 }
}

function f_key37(){
 if(!heroActControl){
  heroMoveSide=1;
  direction=-1;console.log("heroActW:"+heroActW);
  //if(!heroAction){
   heroActW=1;
   f_heroWalk(heros[selectHero].walkNum);
  //}
  heroAction=1;
 }
}

function f_key65(){
 if(!heroActControl){
  if(!heroAttackSpan){
   if(heroAttack1>=3){
    heroAttack1=0;
    heroAttackStop=0;
   }
   heroAttack1++;
   heroAttackCheck=10;
   f_heroAttack();
   heroAttackSpan=1;
   if(heroAttack1==3&&playerSkill_1<100){
    setTimeout(function(){
     heroAttackSpan=0;
    },500);
   }
   else{
    setTimeout(function(){
     heroAttackSpan=0;
    },200);
   }
   if(heroAttack1==3&&playerSkill_1>=100){
    setTimeout(function(){
     heroAttackSpan=0;
    },3000);
   }
   else{
    setTimeout(function(){
     heroAttackSpan=0;
    },200);
   }
  }
 }
}

function f_key83(){
 if(!heroActControl){
  if(heroPosi[0]%1==0&&(selectHit[heroPosi[0]+1][Math.floor(heroPosi[1])]==1||selectHit[heroPosi[0]+1][Math.ceil(heroPosi[1])]==1)){
   //if(heroAction<2){
    fallOK=0;heroActJ=1;
    f_heroJump(0);
   //}heroAction=2;
  }
 }
}

function f_key70(){
 if(!heroActControl){
  if(!heroActF){
   field1_1.style.opacity=0.8;
   heroActF=1;
   setTimeout(function(){
    if(heroActF){
     document.documentElement.style.setProperty('--field2_1', "#ffffff");
    }
   },300);
   setTimeout(function(){
    if(heroActF){
     document.documentElement.style.setProperty('--field3_1', "#ffffff");
    }
   },600);
   setTimeout(function(){
    if(heroActF){
     document.documentElement.style.setProperty('--field4_1', "#ffffff");
     heroActF=2;
    }
   },900);
  }
 }
}

function sumartphone(){

var idData1= document.getElementById("controllerButton1_1");
idData1.addEventListener('touchstart',function() {controllerButton1_3.style.opacity=0.2;},false);
idData1.addEventListener('touchend',function() {controllerButton1_3.style.opacity=1;if(!heroActControl){f_menue();}},false);
var idData2= document.getElementById("controllerButton2_1");
idData2.addEventListener('touchstart',function() {f_key65();controllerButton2_3.style.opacity=0.2;},false);
idData2.addEventListener('touchend',function() {heroAction=0;controllerButton2_3.style.opacity=1;},false);
var idData3= document.getElementById("controllerButton3_1");
idData3.addEventListener('touchstart',function() {f_key83();controllerButton3_3.style.opacity=0.2;},false);
idData3.addEventListener('touchend',function() {heroAction=0;fallOK=1;heroActJ=0;controllerButton3_3.style.opacity=1;},false);
var idData4= document.getElementById("controllerButton4_1");
idData4.addEventListener('touchstart',function() {controllerButton4_3.style.opacity=0.2;if(phase==1){f_key37();}},false);
idData4.addEventListener('touchend',function() {controllerButton4_3.style.opacity=1;if(phase==1){heroMoveSide=0;heroAction=0;heroWalk=0;heroActW=0;}},false);
var idData5= document.getElementById("controllerButton5_1");
idData5.addEventListener('touchstart',function() {controllerButton5_3.style.opacity=0.2;if(phase==1){f_key39();}},false);
idData5.addEventListener('touchend',function() {controllerButton5_3.style.opacity=1;if(phase==1){heroMoveSide=0;heroAction=0;heroWalk=0;heroActW=0;}},false);


}


