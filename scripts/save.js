function localSave(){
 for(var elem in heros){
  localStorage.setItem(elem+"Usable", heros[elem].usable);
  localStorage.setItem(elem+"Exp"   , heros[elem].exp);
  localStorage.setItem(elem+"Level" , heros[elem].level);
  localStorage.setItem(elem+"SkillB" , heros[elem].skillBusable);
 }
 for(var elem in items){
  localStorage.setItem(elem+"Num", items[elem].num);
  localStorage.setItem(elem+"Made"   , items[elem].made);
  localStorage.setItem(elem+"Recipe"   , items[elem].recipe);
 }
}

function localLoad(){console.log(localStorage.getItem("localColor"));
 document.documentElement.style.setProperty('--homeColor', localStorage.getItem("localColor"));
 f_wallAcce(localStorage.getItem("wallAcce"));
 for(var elem in heros){
  heros[elem].usable=Number(localStorage.getItem(elem+'Usable'));
  heros[elem].exp   =Number(localStorage.getItem(elem+'Exp'   ));
  heros[elem].level =localStorage.getItem(elem+'Level' );
  heros[elem].skillBusable =localStorage.getItem(elem+'SkillB' );
 }
 for(var elem in items){
  items[elem].num =Number(localStorage.getItem(elem+'Num' ));
  items[elem].made=localStorage.getItem(elem+'Made');
  items[elem].recipe=localStorage.getItem(elem+'Recipe');
 }
}
