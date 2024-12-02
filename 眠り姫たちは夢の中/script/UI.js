yesNoShootCut=0;
popUpNCheck=0;
selectSE = new Audio('sound/select01.mp3');
cancelSE = new Audio('sound/select08.mp3');

function f_screenSet(){
 var windowH = window.innerHeight*0.95;
 document.documentElement.style.setProperty('--speechFont5', windowH*0.01*fontSize+"px");
 windowW=windowH*1.817;
 var windowL = String((window.innerWidth-windowW)/2)+"px";
 windowLN=(window.innerWidth-windowW)/2;
 document.documentElement.style.setProperty('--titleBaseLeft', windowL);
 document.documentElement.style.setProperty('--controllerButton1', Number(windowLN)+"px");
 document.documentElement.style.setProperty('--controllerButton4', Number(windowLN)/2+"px");
 document.documentElement.style.setProperty('--controllerButton4L', "-"+windowLN+"px");
 document.documentElement.style.setProperty('--controllerButton5L', "-"+Number(windowLN)/2+"px");
 document.documentElement.style.setProperty('--buttonPosi', windowW+"px");
 windowW=String(windowW);
 windowWN=windowH*1.817;
 var px = 'px';
 windowW = windowW.concat(px);
 document.documentElement.style.setProperty('--baseWidth', windowW);
 windowH=String(windowH);
 windowH = windowH.concat(px);
 document.documentElement.style.setProperty('--baseHeight', windowH);
}

function f_opacityButton(name){
 var idData= document.getElementById(name);
 idData.addEventListener('pointerover',function() {f_opacityButtonA(name,0.2)},false);
 idData.addEventListener('pointerout',function() {f_opacityButtonA(name,1)},false);
}

function f_opacityButtonA(name,opacity){
 var nodeheroLiberateImgBase=document.createElement('script');
 nodeheroLiberateImgBase.setAttribute('id',name+"opacityButtonAddBase");
 var parentDiv = document.getElementById("opacityButton");
 parentDiv.appendChild(nodeheroLiberateImgBase);
 
 var myh = document.getElementById(name+"opacityButtonAddBase");
 myh.innerHTML = "function f_opacityButtonB(name,opacity){"+name+".style.opacity="+opacity+";}";
 
 f_opacityButtonB(name,opacity);
 
 var myh = document.getElementById("opacityButton");
 myh.innerHTML = " "
}

function popUpBack(imgName){
 yesNoShootCut=0;
 playerActControl=0;
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
 playerActControl=1;
 var path=imgName;
 /*imgName=imgName.replace("/","_");
 imgName=imgName.replace("/","_");
 imgName=imgName.replace("/","_");*/
 popUpNCheck++;
 popUpScreenN.style.zIndex=40;console.log("path:"+path+",imgName:"+imgName);
 
 let nodeheroLiberateImgBase=document.createElement('div');
 nodeheroLiberateImgBase.setAttribute('id',imgName+"popUpScreen");
 nodeheroLiberateImgBase.setAttribute('style',"position:absolute;top:0%;left:0%;height:100%;width:100%;z-index:var(--"+imgName+"popUpScreen);");
 var parentDiv = document.getElementById("popUpScreenN");
 parentDiv.appendChild(nodeheroLiberateImgBase);
 
 var myh = document.getElementById(imgName+"popUpScreen");
 myh.innerHTML = "<div class=BlackBack></div><div id="+imgName+"popUp style=position:absolute;top:10%;left:10%;height:80%;width:80%;><div class=buttonA><div class=buttonB><br><font id="+imgName+"popUpCondition></font><div id="+imgName+"popUpImgBase style=height:100%;width:100%;></div></div></div></div><div id="+imgName+"popUpOK style=position:absolute;bottom:20%;left:30%;height:10%;width:40%; onclick=selectSE.play();popUpBack('"+imgName+"');><div class=buttonA><div class=buttonB>OK</div></div></div><style>:root{--"+imgName+"popUpOKButton:0;--"+imgName+"popUpScreen:-60;}#"+imgName+"popUpOKButton{position:absolute;opacity:var(--"+imgName+"popUpOKButton);bottom:20%;left:30%;height:10%;width:40%;backGround:#ffffff;}</style>";
 
 document.documentElement.style.setProperty("--"+imgName+"popUpScreen", 40);
 var myh = document.getElementById(imgName+"popUpCondition");
 myh.innerHTML = sentence;
 
 /*let heroLiberateImgBase=document.createElement('span');
 heroLiberateImgBase.setAttribute('id',imgName+"popUpBase");
 var parentDiv = document.getElementById(imgName+"popUpImgBase");
 parentDiv.appendChild(heroLiberateImgBase);
   
 var myh = document.getElementById(imgName+"popUpBase");
 myh.innerHTML = "<img src=item/"+path+".png class=popUpImg>";*/
 
 f_opacityButton(imgName+"popUpOK");
}

function f_popUpYesNo(imgName,sentence,f_yes){
 playerActControl=1;
 var path=imgName;
 /*imgName=imgName.replace("/","_");
 imgName=imgName.replace("/","_");
 imgName=imgName.replace("/","_");*/
 popUpNCheck++;
 popUpScreenN.style.zIndex=40;console.log("path:"+path+",imgName:"+imgName);
 
 
 var yesNoKeySentence="<script>window.addEventListener('keydown',if(event.keyCode==89){"+imgName+"popUpYes.style.opacity=0.2;});window.addEventListener('keyup',if(event.keyCode==89){"+imgName+"popUpYes.style.opacity=1;});window.addEventListener('keydown',if(event.keyCode==78){"+imgName+"popUpNo.style.opacity=0.2;});window.addEventListener('keyup',if(event.keyCode==78){"+imgName+"popUpYes.style.opacity=0.2;});</script>";
 
 let nodeheroLiberateImgBase=document.createElement('div');
 nodeheroLiberateImgBase.setAttribute('id',imgName+"popUpScreen");
 nodeheroLiberateImgBase.setAttribute('style',"position:absolute;top:0%;left:0%;height:100%;width:100%;z-index:var(--"+imgName+"popUpScreen);");
 var parentDiv = document.getElementById("popUpScreenN");
 parentDiv.appendChild(nodeheroLiberateImgBase);
 
 var myh = document.getElementById(imgName+"popUpScreen");
 myh.innerHTML = "<div class=BlackBack></div><div id="+imgName+"popUp style=position:absolute;top:10%;left:10%;height:80%;width:80%;><div class=buttonA><div class=buttonB><br><font id="+imgName+"popUpCondition></font><div id="+imgName+"popUpImgBase style=height:100%;width:100%;></div></div></div></div><div id="+imgName+"popUpNo style=position:absolute;bottom:20%;right:20%;height:18%;width:25%; onclick=selectSE.play();popUpBack('"+imgName+"');><div class=buttonA><div class=buttonB>いいえ<br>（Nキー）</div></div></div><div id="+imgName+"popUpYes style=position:absolute;bottom:20%;left:25%;height:18%;width:20%; onclick=selectSE.play();"+f_yes+";popUpBack('"+imgName+"');><div class=buttonA><div class=buttonB>はい<br>（Yキー）</div></div></div><style>:root{--"+imgName+"popUpOKButton:0;--"+imgName+"popUpScreen:-60;}#"+imgName+"popUpOKButton{position:absolute;opacity:var(--"+imgName+"popUpOKButton);bottom:20%;left:30%;height:10%;width:40%;backGround:#ffffff;}</style>";
 
 document.documentElement.style.setProperty("--"+imgName+"popUpScreen", 40);
 var myh = document.getElementById(imgName+"popUpCondition");
 myh.innerHTML = sentence;
 
 /*let heroLiberateImgBase=document.createElement('span');
 heroLiberateImgBase.setAttribute('id',imgName+"popUpBase");
 var parentDiv = document.getElementById(imgName+"popUpImgBase");
 parentDiv.appendChild(heroLiberateImgBase);
   
 var myh = document.getElementById(imgName+"popUpBase");
 myh.innerHTML = "<img src=item/"+path+".png class=popUpImg>";*/
 
 
 var scriptBase=document.createElement('script');
 scriptBase.setAttribute('id',imgName+"popUpYesNoScript");
 var scriptDiv = document.getElementById(imgName+"popUpImgBase");
 scriptDiv.appendChild(scriptBase);
 
 var myh = document.getElementById(imgName+"popUpYesNoScript");
 myh.innerHTML = "function f_yesNo(number){if(number==1){"+imgName+"popUpYes.style.opacity=0.2;}else if(number==2){"+imgName+"popUpNo.style.opacity=0.2;}else if(number==3){selectSE.play();"+imgName+"popUpYes.style.opacity=1;popUpBack('"+imgName+"');"+f_yes+";}else if(number==4){selectSE.play();"+imgName+"popUpNo.style.opacity=1;popUpBack('"+imgName+"');}}";
 
 f_opacityButton(imgName+"popUpNo");
 f_opacityButton(imgName+"popUpYes");
 
 yesNoShootCut=1;
 
}

