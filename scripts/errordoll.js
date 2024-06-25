function errordollBattleStart(){
 document.documentElement.style.setProperty('--errordollSet', "1");
 enemyHP=250*stageLevel+250;
 defaultEnemyHP=enemyHP;
 errordollScreen.style.zIndex=0;
 errordollAct1=1;
 enemyBack=0;
 enemyFront=[];
 errordollStartMove=1;
}

errordollSpan=0;
errordollSpan1=0;
errordollSpan2=0;
errordollSpan3=0;
errordollSpan4=0;

function errordollAct(){
if(errordollStartMove==1){
  errordollAct2=1;
  errordollAttack3();
  errordollStartMove=0;
 }
 else{
  if(errordollSpan>=3){
   errordollSpan=0;
   errordollSpan1=0;
   errordollSpan2=0;
   errordollSpan3=0;
  }
  errordollAct2=1;
  if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){console.log("errordollSpan"+errordollSpan);
   if(!errordollSpan1){
    errordollAttack1();
    errordollSpan1=1;
    errordollSpan=errordollSpan+1;
   }
   else if(!errordollSpan2){
    errordollAttack2();
    errordollSpan2=1;
    errordollSpan=errordollSpan+1;
   }
   else if(!errordollSpan3){
    errordollAttack3();
    errordollSpan3=1;
    errordollSpan=errordollSpan+1;
   }
  }
  else if(sidePosi==15||sidePosi==45||sidePosi==75){
   if(!errordollSpan2){
    errordollAttack2();
    errordollSpan2=1;
    errordollSpan=errordollSpan+1;
   }
   else if(!errordollSpan1){
    errordollAttack1();
    errordollSpan1=1;
    errordollSpan=errordollSpan+1;
   }
   else if(!errordollSpan3){
    errordollAttack3();
    errordollSpan3=1;
    errordollSpan=errordollSpan+1;
   }
  }
  else{
   if(!errordollSpan3){
    errordollAttack3();
    errordollSpan3=1;
    errordollSpan=errordollSpan+1;
   }
   else if(!errordollSpan2){
    errordollAttack2();
    errordollSpan2=1;
    errordollSpan=errordollSpan+1;
   }
   else if(!errordollSpan1){
    errordollAttack1();
    errordollSpan1=1;
    errordollSpan=errordollSpan+1;
   }
  }
 }
}

function errordollAttack1(){
 enemyBack=1;
 libeluluSE1.play();
 var myh = document.getElementById("errordollSet");
 if(Number(sidePosi)<45){
  myh.innerHTML = "<video id=errordollAttackMovie1 src=item/right_panchi.mp4><p>ブラウザが古すぎて対応してないようですm(_ _)m</p></video>";
  var video = document.getElementById('errordollAttackMovie1');video.playbackRate = 0.5*stageLevel+0.5;
  video.play();
  setTimeout(function(){
   mekahanSE1.play();
   enemyFront=[0,5,10,15,20,25,30,35];
   if(35>=Number(sidePosi)){
    getDamage(60);
   }
  },1670/(0.5*stageLevel+0.5));
 }
 else{
  myh.innerHTML = "<video id=errordollAttackMovie2 src=item/right_panchi.mp4><p>ブラウザが古すぎて対応してないようですm(_ _)m</p></video>";
  var video = document.getElementById('errordollAttackMovie2');video.playbackRate = 0.5*stageLevel+0.5;
  video.play();
  setTimeout(function(){
   mekahanSE1.play();
   enemyFront=[55,60,65,70,75,80,85,90];
   if(55<=Number(sidePosi)){
    getDamage(60);
   }
  },1670/(0.5*stageLevel+0.5));
 }
 setTimeout(function(){
  enemyFront=[];
 },2400/(0.5*stageLevel+0.5));
 setTimeout(function(){
  libeluluSE1.play();
  enemyBack=0;
 },4420/(0.5*stageLevel+0.5));
 setTimeout(function(){
  errordollAct2=0;
 },6300/(0.5*stageLevel+0.5));
}

function errordollAttack2(){
 libeluluSE1.play();
 var myh = document.getElementById("errordollSet");
 if(Number(sidePosi)<45){
  myh.innerHTML = "<video id=errordollAttackMovie2 src=item/side_attack.mp4><p>ブラウザが古すぎて対応してないようですm(_ _)m</p></video>";
  var video = document.getElementById('errordollAttackMovie2');video.playbackRate = 0.5*stageLevel+0.5;
  video.play();
  granatSE2.play();
  setTimeout(function(){
   mekahanSE1.play();
   enemyFront=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75];
   if(75>=Number(sidePosi)){
    getDamage(60);
   }
  },3140/(0.5*stageLevel+0.5));
 }
 else{
  myh.innerHTML = "<video id=errordollAttackMovie1 src=item/side_attack.mp4><p>ブラウザが古すぎて対応してないようですm(_ _)m</p></video>";
  var video = document.getElementById('errordollAttackMovie1');video.playbackRate = 0.5*stageLevel+0.5;
  video.play();
  granatSE2.play();
  setTimeout(function(){
   mekahanSE1.play();
   enemyFront=[15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
   if(15<=Number(sidePosi)){
    getDamage(60);
   }
  },3140/(0.5*stageLevel+0.5));
 }
 setTimeout(function(){
  enemyFront=[];
 },3850/(0.5*stageLevel+0.5));
 setTimeout(function(){
  errordollAct2=0;
 },6300/(0.5*stageLevel+0.5));
}

function errordollAttack3(){
 enemyBack=1;
 libeluluSE1.play();
 var myh = document.getElementById("errordollSet");
 myh.innerHTML = "<video id=errordollAttackMovie1 src=item/beam.mp4><p>ブラウザが古すぎて対応してないようですm(_ _)m</p></video>";
 var video = document.getElementById('errordollAttackMovie1');video.playbackRate = 0.5*stageLevel+0.5;
 video.play();setTimeout(function(){
  errordollSE1.play();
 },2520/(0.5*stageLevel+0.5));
 setTimeout(function(){
  libeluluSE1.play();
  enemyBack=0;
 },4390/(0.5*stageLevel+0.5));
 setTimeout(function(){
  libeluluSE2.play();
  if(sidePosi==10||sidePosi==30||sidePosi==50||sidePosi==70||sidePosi==90){}
  else{getDamage(60);}
 },5810/(0.5*stageLevel+0.5));
 setTimeout(function(){
  libeluluSE2.pause();
  libeluluSE2.currentTime=0;
  libeluluSE2.play();
  if(sidePosi==0||sidePosi==20||sidePosi==40||sidePosi==60||sidePosi==80){}
  else{getDamage(60);}
 },7060/(0.5*stageLevel+0.5));
 setTimeout(function(){
  errordollAct2=0;
 },8400/(0.5*stageLevel+0.5));
}