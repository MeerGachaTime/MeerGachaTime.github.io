function cerberusBattleStart(){
 document.documentElement.style.setProperty('--cerberusSet', "1");
 enemyHP=350*stageLevel;
 defaultEnemyHP=enemyHP;
 cerberusScreen.style.zIndex=0;
 cerberusAct1=1;
 enemyBack=1;
 enemyFront=[];
}

cerberusSpan=0;
cerberusSpan1=0;
cerberusSpan2=0;
cerberusSpan3=0;
cerberusSpan4=0;

function cerberusAct(){
 if(cerberusSpan>=3){
  cerberusSpan=0;
  cerberusSpan1=0;
  cerberusSpan2=0;
  cerberusSpan3=0;
 }
 cerberusAct2=1;
 if(sidePosi==0||sidePosi==30||sidePosi==60||sidePosi==90){console.log("cerberusSpan"+cerberusSpan);
  if(!cerberusSpan1){
   cerberusAttack1();
   cerberusSpan1=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan2){
   cerberusAttack2();
   cerberusSpan2=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan3){
   if(sidePosi==0||sidePosi==10||sidePosi==20||sidePosi==30||sidePosi==40||sidePosi==50||sidePosi==60||sidePosi==70||sidePosi==80||sidePosi==90){
    cerberusAttack3();
   }
   else{
    cerberusAttack4();
   }
   cerberusSpan3=1;
   cerberusSpan=cerberusSpan+1;
  }
 }
 else if(sidePosi==15||sidePosi==45||sidePosi==75){
  if(!cerberusSpan2){
   cerberusAttack2();
   cerberusSpan2=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan1){
   cerberusAttack1();
   cerberusSpan1=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan3){
   if(sidePosi==0||sidePosi==10||sidePosi==20||sidePosi==30||sidePosi==40||sidePosi==50||sidePosi==60||sidePosi==70||sidePosi==80||sidePosi==90){
    cerberusAttack3();
   }
   else{
    cerberusAttack4();
   }
   cerberusSpan3=1;
   cerberusSpan=cerberusSpan+1;
  }
 }
 else if(sidePosi==5||sidePosi==20||sidePosi==70||sidePosi==85){
  if(!cerberusSpan3){
   if(sidePosi==0||sidePosi==10||sidePosi==20||sidePosi==30||sidePosi==40||sidePosi==50||sidePosi==60||sidePosi==70||sidePosi==80||sidePosi==90){
    cerberusAttack3();
   }
   else{
    cerberusAttack4();
   }
   cerberusSpan3=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan2){
   cerberusAttack2();
   cerberusSpan2=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan1){
   cerberusAttack1();
   cerberusSpan1=1;
   cerberusSpan=cerberusSpan+1;
  }
}
 else{
  if(!cerberusSpan2){
   cerberusAttack2();
   cerberusSpan2=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan3){
   if(sidePosi==0||sidePosi==10||sidePosi==20||sidePosi==30||sidePosi==40||sidePosi==50||sidePosi==60||sidePosi==70||sidePosi==80||sidePosi==90){
    cerberusAttack3();
   }
   else{
    cerberusAttack4();
   }
   cerberusSpan3=1;
   cerberusSpan=cerberusSpan+1;
  }
  else if(!cerberusSpan1){
   cerberusAttack1();
   cerberusSpan1=1;
   cerberusSpan=cerberusSpan+1;
  }
 }
}

function cerberusAttack1(){
 const cerAt1a = document.getElementById("cerberusAttackA");
 cerAt1a.classList.add('cerberusAttackAAni');
 const cerAt1b = document.getElementById("cerberusAttackB");
 cerAt1b.classList.add('cerberusAttackBAni');
 setTimeout(function(){
  cerberusSE1.play();
  cerAt1a.classList.remove("cerberusAttackAAni");
  if(sidePosi==0||sidePosi==5||sidePosi==10||sidePosi==35||sidePosi==40||sidePosi==45||sidePosi==50||sidePosi==55||sidePosi==75||sidePosi==80||sidePosi==85||sidePosi==90){getDamage(20);}
  setTimeout(function(){
   cerberusSE1.pause();
   cerberusSE1.currentTime=0;
   cerAt1b.classList.remove("cerberusAttackBAni");
   cerberusAct2=0;
  },1000);
 },1000);
}

function cerberusAttack2(){
 cerberusSE3.play();
 const cerAt2a = document.getElementById("cerberusSmoke");
 cerAt2a.classList.add('cerberusSmokeAni');
 setTimeout(function(){
  ataPoi=Number(sidePosi)-15;
  document.documentElement.style.setProperty('--cerberusAttackD', ataPoi+"%");
  enemyBack=0;
  enemyFront=[ataPoi,ataPoi+5,ataPoi+10,ataPoi+15,ataPoi+20,ataPoi+25,ataPoi+30,ataPoi+35,ataPoi+40];
  const cerAt2b = document.getElementById("cerberusAttackC");
  cerAt2b.classList.add('cerberusAttackAAni');
  setTimeout(function(){
   granatSE1.play();
   cerberusAttackD.style.opacity=1;
   if(ataPoi<=Number(sidePosi)&&ataPoi+40>=Number(sidePosi)){getDamage(30);}
   setTimeout(function(){
    cerAt2b.classList.remove('cerberusAttackAAni');
    cerberusAttackD.style.opacity=0;
    setTimeout(function(){
     ataPoi=Number(sidePosi)-15;
     document.documentElement.style.setProperty('--cerberusAttackD', ataPoi+"%");
     enemyBack=0;
     enemyFront=[ataPoi,ataPoi+5,ataPoi+10,ataPoi+15,ataPoi+20,ataPoi+25,ataPoi+30,ataPoi+35,ataPoi+40];
     const cerAt2b = document.getElementById("cerberusAttackC");
     cerAt2b.classList.add('cerberusAttackAAni');
     setTimeout(function(){
      granatSE1.play();
      cerberusAttackD.style.opacity=1;
      if(ataPoi<=Number(sidePosi)&&ataPoi+40>=Number(sidePosi)){getDamage(30);}
      setTimeout(function(){
       cerAt2b.classList.remove('cerberusAttackAAni');
       cerberusAttackD.style.opacity=0;
       enemyFront=[];
       enemyBack=1;
       setTimeout(function(){
        cerAt2a.classList.remove('cerberusSmokeAni');
        cerberusAct2=0;
       },4000);
      },500);
     },2000);
    },500)
   },500);
  },2000);
 },3500);
}

function cerberusAttack3(){
 var myh = document.getElementById("cerberusImgBase");
 myh.innerHTML = "<img id=cerberusImg src=item/ケルベロスF.png>";
 cerberusAttackH.style.opacity=1;
 setTimeout(function(){
  granatSE3.currentTime=0;
  granatSE3.play();
  const cerAt3a = document.getElementById("cerberusAttackE");
  cerAt3a.classList.add('cerberusAttackCAni');
  const cerAt3b = document.getElementById("cerberusAttackF");
  cerAt3b.classList.add('cerberusAttackDAni');
  const cerAt3c = document.getElementById("cerberusAttackG");
  cerAt3c.classList.add('cerberusAttackCAni');
  setTimeout(function(){
   cerAt3a.classList.remove('cerberusAttackCAni');
   cerAt3b.classList.remove('cerberusAttackDAni');
   cerAt3c.classList.remove('cerberusAttackCAni');
   setTimeout(function(){
    granatSE3.currentTime=0;
    granatSE3.play();
    cerAt3a.classList.add('cerberusAttackCAni');
    cerAt3b.classList.add('cerberusAttackDAni');
    cerAt3c.classList.add('cerberusAttackCAni');
     setTimeout(function(){
      cerAt3a.classList.remove('cerberusAttackCAni');
      cerAt3b.classList.remove('cerberusAttackDAni');
      cerAt3c.classList.remove('cerberusAttackCAni');
      cerberusAttackH.style.opacity=0;
      var myh = document.getElementById("cerberusImgBase");
      myh.innerHTML = "<img id=cerberusImg src=item/ケルベロスB.png>";
      var myh = document.getElementById("cerberusAttackIBase");
      myh.innerHTML = "<img id=cerberusAttackI src=item/ケルベロス火炎玉.png><img id=cerberusAttackJ src=item/ケルベロス火炎玉.png><img id=cerberusAttackK src=item/ケルベロス火炎玉.png><img id=cerberusAttackL src=item/ケルベロス火炎玉.png><img id=cerberusAttackM src=item/ケルベロス火炎玉.png><img id=cerberusAttackN src=item/ケルベロス火炎玉.png>";
      
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3d = document.getElementById("cerberusAttackI");
       cerAt3d.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3d.classList.remove('cerberusAttackEAni');
        if(0<=Number(sidePosi)&&10>=Number(sidePosi)){getDamage(20);}
       },1000);
      },1000);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3e = document.getElementById("cerberusAttackJ");
       cerAt3e.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3e.classList.remove('cerberusAttackEAni');
        if(15<=Number(sidePosi)&&25>=Number(sidePosi)){getDamage(20);}
       },1000);
      },1500);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3f = document.getElementById("cerberusAttackK");
       cerAt3f.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3f.classList.remove('cerberusAttackEAni');
        if(30<=Number(sidePosi)&&40>=Number(sidePosi)){getDamage(20);}
       },1000);
      },2000);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3g = document.getElementById("cerberusAttackL");
       cerAt3g.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3g.classList.remove('cerberusAttackEAni');
        if(50<=Number(sidePosi)&&60>=Number(sidePosi)){getDamage(20);}
       },1000);
      },2500);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3h = document.getElementById("cerberusAttackM");
       cerAt3h.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3h.classList.remove('cerberusAttackEAni');
        if(65<=Number(sidePosi)&&75>=Number(sidePosi)){getDamage(20);}
       },1000);
      },3000);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3i = document.getElementById("cerberusAttackN");
       cerAt3i.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3i.classList.remove('cerberusAttackEAni');
        if(80<=Number(sidePosi)&&90>=Number(sidePosi)){getDamage(20);}
       },1000);
      },3500);
      
      setTimeout(function(){
       cerberusAct2=0;
      },4000);
     },500);
   },500);
  },500);
 },500);
}

function cerberusAttack4(){
 var myh = document.getElementById("cerberusImgBase");
 myh.innerHTML = "<img id=cerberusImg src=item/ケルベロスF.png>";
 cerberusAttackH.style.opacity=1;
 setTimeout(function(){
  granatSE3.currentTime=0;
  granatSE3.play();
  const cerAt3a = document.getElementById("cerberusAttackE");
  cerAt3a.classList.add('cerberusAttackCAni');
  const cerAt3b = document.getElementById("cerberusAttackF");
  cerAt3b.classList.add('cerberusAttackDAni');
  const cerAt3c = document.getElementById("cerberusAttackG");
  cerAt3c.classList.add('cerberusAttackCAni');
  setTimeout(function(){
   cerAt3a.classList.remove('cerberusAttackCAni');
   cerAt3b.classList.remove('cerberusAttackDAni');
   cerAt3c.classList.remove('cerberusAttackCAni');
   setTimeout(function(){
    granatSE3.currentTime=0;
    granatSE3.play();
    cerAt3a.classList.add('cerberusAttackCAni');
    cerAt3b.classList.add('cerberusAttackDAni');
    cerAt3c.classList.add('cerberusAttackCAni');
     setTimeout(function(){
      cerAt3a.classList.remove('cerberusAttackCAni');
      cerAt3b.classList.remove('cerberusAttackDAni');
      cerAt3c.classList.remove('cerberusAttackCAni');
      cerberusAttackH.style.opacity=0;
      var myh = document.getElementById("cerberusImgBase");
      myh.innerHTML = "<img id=cerberusImg src=item/ケルベロスB.png>";
      var myh = document.getElementById("cerberusAttackIBase");
      myh.innerHTML = "<img id=cerberusAttackI src=item/ケルベロス火炎玉.png><img id=cerberusAttackJ src=item/ケルベロス火炎玉.png><img id=cerberusAttackK src=item/ケルベロス火炎玉.png><img id=cerberusAttackL src=item/ケルベロス火炎玉.png><img id=cerberusAttackM src=item/ケルベロス火炎玉.png><img id=cerberusAttackN src=item/ケルベロス火炎玉.png>";
      
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3d = document.getElementById("cerberusAttackI");
       cerAt3d.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3d.classList.remove('cerberusAttackEAni');
        if(0<=Number(sidePosi)&&10>=Number(sidePosi)){getDamage(20);}
       },1000);
      },3500);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3e = document.getElementById("cerberusAttackJ");
       cerAt3e.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3e.classList.remove('cerberusAttackEAni');
        if(15<=Number(sidePosi)&&25>=Number(sidePosi)){getDamage(20);}
       },1000);
      },3000);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3f = document.getElementById("cerberusAttackK");
       cerAt3f.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3f.classList.remove('cerberusAttackEAni');
        if(30<=Number(sidePosi)&&40>=Number(sidePosi)){getDamage(20);}
       },1000);
      },2500);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3g = document.getElementById("cerberusAttackL");
       cerAt3g.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3g.classList.remove('cerberusAttackEAni');
        if(50<=Number(sidePosi)&&60>=Number(sidePosi)){getDamage(20);}
       },1000);
      },2000);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3h = document.getElementById("cerberusAttackM");
       cerAt3h.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3h.classList.remove('cerberusAttackEAni');
        if(65<=Number(sidePosi)&&75>=Number(sidePosi)){getDamage(20);}
       },1000);
      },1500);
      setTimeout(function(){
       cerberusSE2.currentTime=0;
       cerberusSE2.play();
       const cerAt3i = document.getElementById("cerberusAttackN");
       cerAt3i.classList.add('cerberusAttackEAni');
       setTimeout(function(){
        granatSE3.play();
        cerAt3i.classList.remove('cerberusAttackEAni');
        if(80<=Number(sidePosi)&&90>=Number(sidePosi)){getDamage(20);}
       },1000);
      },1000);
      
      setTimeout(function(){
       cerberusAct2=0;
      },4000);
     },500);
   },500);
  },500);
 },500);
}