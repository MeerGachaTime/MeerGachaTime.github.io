function mekahanBattleStart(){
 mekahanSpan=0;
 mekahanSpan1=0;
 mekahanSpan2=0;
 mekahanSpan3=0;
 mekahanRandom=Math.floor( Math.random() * 5);
 mekahanAct2=0;
 enemyBack=1;
 enemyFront=[];
 enemyHP=300*stageLevel;
 defaultEnemyHP=enemyHP;
 mekahanScreen.style.zIndex=0;
 document.documentElement.style.setProperty('--mekahanSet', "1");
 document.documentElement.style.setProperty('--miniMekahanField', "1");
 document.documentElement.style.setProperty('--mekahanOpacity4', "0");
 document.documentElement.style.setProperty('--mekahanOpacity8', "0");
 setTimeout(function(){
  enemySet.style.zIndex=0;
  mekahanAct1=1;
 },3000);
}

function mekahanAct(){
 if(mekahanAct2==0){
  mekahanAct2=1;
  if(mekahanSpan>=3){
   mekahanSpan=0;
   mekahanSpan1=0;
   mekahanSpan2=0;
   mekahanSpan3=0;
  }
  if(sidePosi==0||sidePosi==20||sidePosi==40||sidePosi==60||sidePosi==80){
   if(mekahanSpan1==0){
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack1();
    }
    else{
     mekahanAttack2();
    }
   }
   else if(mekahanSpan2==0){
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack3();
    }
    else{
     mekahanAttack4();
    }
   }
   else{
    mekahanSpan++;
    mekahanAttack5();
   }
  }
  else if(sidePosi==5||sidePosi==25||sidePosi==45||sidePosi==65||sidePosi==85){
   if(mekahanSpan3==0){
    mekahanSpan++;
    mekahanAttack5();
   }
   else if(mekahanSpan2==0){
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack3();
    }
    else{
     mekahanAttack4();
    }
   }
   else{
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack1();
    }
    else{
     mekahanAttack2();
    }
   }
  }
  else if(sidePosi==10||sidePosi==30||sidePosi==50||sidePosi==70||sidePosi==90){
   if(mekahanSpan2==0){
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack3();
    }
    else{
     mekahanAttack4();
    }
   }
   else if(mekahanSpan1==0){
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack1();
    }
    else{
     mekahanAttack2();
    }
   }
   else{
    mekahanSpan++;
    mekahanAttack5();
   }
  }
  else{
   if(mekahanSpan2==0){
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack3();
    }
    else{
     mekahanAttack4();
    }
   }
   else if(mekahanSpan3==0){
    mekahanSpan++;
    mekahanAttack5();
   }
   else{
    mekahanSpan++;
    if(Number(sidePosi<45)){
     mekahanAttack1();
    }
    else{
     mekahanAttack2();
    }
   }
  }
 }
}

function mekahanAttack1(){
  mekahanSpan1=1;
  const mekaAt1a = document.getElementById("mekahanBody");
  mekaAt1a.classList.add('mekahanAttack1');
  const mekaAt1b = document.getElementById("mekahanHand");
  mekaAt1b.classList.add('mekahanHandAttack1');
  mekahanSE2.currentTime = 0;
  mekahanSE2.play();
  setTimeout(function(){
   mekahanSE2.pause();
  },150);
  setTimeout(function(){
   mekahanSE2.currentTime = 0;
   mekahanSE2.play();
  },2100);
  setTimeout(function(){
   mekahanSE2.pause();
  },3000);
  setTimeout(function(){
   mekahanSE1.play();
   if(sidePosi<20){
    getDamage(20);
   }
   if(sidePosi>=55&&sidePosi<=75){
    getDamage(20);
   }
   enemyFront.push(0,5,10,15,55,60,65,70,75);
   setTimeout(function(){enemyFront=[];},1000);
   setTimeout(function(){
    document.getElementById("mekahanBody").classList.remove("mekahanAttack1");
    document.getElementById("mekahanHand").classList.remove("mekahanHandAttack1");
    mekahanAct2=0;
   },2000);
  },1000);
}

function mekahanAttack2(){
  mekahanSpan1=1;
  const mekaAt2a = document.getElementById("mekahanBody");
  mekaAt2a.classList.add('mekahanAttack2');
  const mekaAt2b = document.getElementById("mekahanHand");
  mekaAt2b.classList.add('mekahanHandAttack2');
  mekahanSE2.currentTime = 0;
  mekahanSE2.play();
  setTimeout(function(){
   mekahanSE2.pause();
  },150);
  setTimeout(function(){
   mekahanSE2.currentTime = 0;
   mekahanSE2.play();
  },2100);
  setTimeout(function(){
   mekahanSE2.pause();
  },3000);
  setTimeout(function(){
   mekahanSE1.play();
   if(sidePosi>70){
    getDamage(20);
   }
   if(sidePosi>=15&&sidePosi<=35){
    getDamage(20);
   }
   enemyFront.push(15,20,25,30,35,75,80,85,90);
   setTimeout(function(){enemyFront=[];},1000);
   setTimeout(function(){
    document.getElementById("mekahanBody").classList.remove("mekahanAttack2");
    document.getElementById("mekahanHand").classList.remove("mekahanHandAttack2");
    mekahanAct2=0;
   },2000);
  },1000);
}

function mekahanAttack3(){
  mekahanSpan2=1;
  const mekaAt3a = document.getElementById("mekahanSet");
  mekaAt3a.classList.add('mekahanAttack3');
  const mekaAt3b = document.getElementById("mekahanJet");
  mekaAt3b.classList.add('mekahanAttackJet');
  const root4 = document.querySelector(':root');
  root4.style.setProperty("--mekahanOpacity4", "1");
  mekahanSE2.currentTime = 0;
  mekahanSE2.play();
  setTimeout(function(){
   mekahanSE2.pause();
  },2500);
  setTimeout(function(){
   mekahanSE1.play();
   if(sidePosi>0&&sidePosi<75){
    getDamage(35);
   }
   enemyFront.push(5,10,15,20,25,30,35,40,45,50,55,65,70);
   setTimeout(function(){
    mekahanSE2.currentTime = 0;
    mekahanSE2.play();
    enemyFront=[];
    setTimeout(function(){
     mekahanSE2.pause();
    },4000);
   },1500);
  },4500);

  setTimeout(function(){
   const root1 = document.querySelector(':root');
   root1.style.setProperty("--mekahanOpacity1", "0");
   const root2 = document.querySelector(':root');
   root2.style.setProperty("--mekahanOpacity2", "1");
   const root3 = document.querySelector(':root');
   root3.style.setProperty("--mekahanOpacity3", "1");
   enemyBack=0;

    setTimeout(function(){
     const root3 = document.querySelector(':root');
     root3.style.setProperty("--mekahanOpacity3", "0");
     setTimeout(function(){
      const root3 = document.querySelector(':root');
      root3.style.setProperty("--mekahanOpacity3", "1");
      setTimeout(function(){
       const root1 = document.querySelector(':root');
       root1.style.setProperty("--mekahanOpacity1", "1");
       const root2 = document.querySelector(':root');
       root2.style.setProperty("--mekahanOpacity2", "0");
       const root3 = document.querySelector(':root');
       root3.style.setProperty("--mekahanOpacity3", "0");
       enemyBack=1;
       setTimeout(function(){
        mekahanAct2=0;
        document.getElementById("mekahanSet").classList.remove("mekahanAttack3");
        document.getElementById("mekahanJet").classList.remove("mekahanAttackJet");
        const root4 = document.querySelector(':root');
        root4.style.setProperty("--mekahanOpacity4", "0");
       },2000);
      },2000);
     },2000);
    },2000);
   },2000);

}




function mekahanAttack4(){
  mekahanSpan2=1;
  const mekaAt3a = document.getElementById("mekahanSet");
  mekaAt3a.classList.add('mekahanAttack3');
  const mekaAt3b = document.getElementById("mekahanJet");
  mekaAt3b.classList.add('mekahanAttackJet');
  const root4 = document.querySelector(':root');
  root4.style.setProperty("--mekahanOpacity4", "1");
  mekahanSE2.currentTime = 0;
  mekahanSE2.play();
  setTimeout(function(){
   mekahanSE2.pause();
  },2500);
  setTimeout(function(){
   mekahanSE1.play();
   if(sidePosi>15&&sidePosi<90){
    getDamage(35);
   }
   enemyFront.push(20,25,30,35,40,45,50,55,65,70,75,80,85);
   setTimeout(function(){enemyFront=[];
    mekahanSE2.currentTime = 0;
    mekahanSE2.play();
    enemyFront=[];
    setTimeout(function(){
     mekahanSE2.pause();
    },4000);
   },1500);
  },4500);
  setTimeout(function(){
   const root1 = document.querySelector(':root');
   root1.style.setProperty("--mekahanOpacity1", "0");
   const root5 = document.querySelector(':root');
   root5.style.setProperty("--mekahanOpacity5", "1");
   const root6 = document.querySelector(':root');
   root6.style.setProperty("--mekahanOpacity6", "1");
   enemyBack=0;

    setTimeout(function(){
     const root6 = document.querySelector(':root');
     root6.style.setProperty("--mekahanOpacity6", "0");
     setTimeout(function(){
      const root6 = document.querySelector(':root');
      root6.style.setProperty("--mekahanOpacity6", "1");
      setTimeout(function(){
       const root1 = document.querySelector(':root');
       root1.style.setProperty("--mekahanOpacity1", "1");
       const root5 = document.querySelector(':root');
       root5.style.setProperty("--mekahanOpacity5", "0");
       const root6 = document.querySelector(':root');
       root6.style.setProperty("--mekahanOpacity6", "0");
       enemyBack=1;
       setTimeout(function(){
        mekahanAct2=0;
        document.getElementById("mekahanSet").classList.remove("mekahanAttack3");
        document.getElementById("mekahanJet").classList.remove("mekahanAttackJet");
        const root4 = document.querySelector(':root');
        root4.style.setProperty("--mekahanOpacity4", "0");
       },2000);
      },2000);
     },2000);
    },2000);
   },2000);
}

function mekahanAttack5(){
  miniMekahanLife1=1;
  miniMekahanLife2=1;
  miniMekaPosi1=20;
  miniMekaPosi2=70;
  miniMekaCount=190;

  mekahanSpan3=1;
  const mekaAt5a = document.getElementById("mekahanHole1");
  mekaAt5a.classList.add('mekahanAttack5');
  const mekaAt5b = document.getElementById("mekahanHole2");
  mekaAt5b.classList.add('mekahanAttack5');
  const mekaAt5c = document.getElementById("miniMekahanA1");
  mekaAt5c.classList.add('mekahanAttack6');
  const mekaAt5d = document.getElementById("miniMekahanA2");
  mekaAt5d.classList.add('mekahanAttack6');

  document.documentElement.style.setProperty('--miniMekahanField', "1");
  const root8 = document.querySelector(':root');
  root8.style.setProperty("--mekahanOpacity8", "0");
  setTimeout(function(){mekahanSE1.play();},2000);
  setTimeout(function(){mekahanSE2.currentTime = 0;mekahanSE2.play();},3500);
  setTimeout(function(){mekahanSE2.pause();},6000);
  setTimeout(function(){
   document.getElementById("miniMekahanA1").classList.remove("mekahanAttack6");
   document.getElementById("miniMekahanA2").classList.remove("mekahanAttack6");
   const root8 = document.querySelector(':root');
   root8.style.setProperty("--mekahanOpacity8", "1");
   miniMekahanCheck=1;
   miniSpan=12.34375;
   miniMekahan();
   setTimeout(function(){
    document.getElementById("mekahanHole1").classList.remove("mekahanAttack5");
    document.getElementById("mekahanHole2").classList.remove("mekahanAttack5");
    
    setTimeout(function(){
     miniMekahanCheck=0;
     const mekaAt5f = document.getElementById("miniMekahanB1");
     mekaAt5f.classList.add('mekahanAttack7');
     const mekaAt5g = document.getElementById("miniMekahanB2");
     mekaAt5g.classList.add('mekahanAttack7');
     setTimeout(function(){
      document.documentElement.style.setProperty('--miniMekahanField', "0");
      document.getElementById("miniMekahanB1").classList.remove("mekahanAttack7");
      document.getElementById("miniMekahanB2").classList.remove("mekahanAttack7");
      mekahanAct2=0;
     },1000);
    },1000);
   },2000);
  },3000);
}

function miniMekahan(){
 miniSpan=miniSpan+5.15625;
 miniSpanS=String(miniSpan)+"%";
 const rootMiniMeka = document.querySelector(':root');
 rootMiniMeka.style.setProperty("--miniMekahanSide",miniSpanS);
 miniSpanA=miniSpan-2.5;
 miniSpanB=miniSpan+2.5;
 if(leftOn==1||rightOn==1){
  miniSpanA=miniSpan-7.5;
  miniSpanB=miniSpan+7.5;
 }
 miniSpanC=90-miniSpanA;
 miniSpanD=90-miniSpanB;console.log("A"+miniSpanA+",B"+miniSpanB+",C"+miniSpanC+",D"+miniSpanD);
 if(miniSpanA<=sidePosi&&miniSpanB>=sidePosi){
  getDamage(10);
 }
 if(miniSpanC>=sidePosi&&miniSpanD<=sidePosi){
  getDamage(10);
 }
 if(miniMekahanCheck){
  setTimeout(function(){
   miniMekahan();
  },250);
 }
}