function tutorialBattleStart(){
 enemyBack=0;
 enemyFront=[];
 stageLevel=0;
 enemyHP=atariAttackStatus*(tadaomiSkill1status+lyricaSkill1status);
 defaultEnemyHP=enemyHP;
 setTimeout(function(){
  enemySet.style.zIndex=0;
  tutorialAct1=1;
 },3000);
}

function tutorialAct(){
 tutorialAct2=1;
 if(enemyHP==defaultEnemyHP){
  if(Number(sidePosi)>=45){
   f_tutorial("8");
   tutorialAct2=0;
  }
  else{
   tutorialAct2=0;
  }
 }
 else if(enemyHP!=0){
  if(enemyBack==0){
   f_tutorial("9");
  }
   tutorialAct2=0;
 }
 else{
  tutorialAct2=0;
 }
}
