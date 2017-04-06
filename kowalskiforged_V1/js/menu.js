var menuCount = 1;
var projectMenuCount = 3;

function menu(x){
  var tLine = document.getElementById('t-line');
  var mLine = document.getElementById('m-line');
  var bLine = document.getElementById('b-line');
  var menuOverlay = document.getElementById('menu-overlay');
  var projectOverlay = document.getElementById('project-overlay');

  function nav(y){
    if(y === "close"){
    tLine.setAttribute("style", "transform:;");
    mLine.setAttribute("style", "transform:;");
    bLine.setAttribute("style", "transform:;");
    menuOverlay.setAttribute("style", "opacity:0;");
    hideMenuItems(".menu");
   }
   else if(y === "open"){
     tLine.setAttribute("style", "transform:translate(0px,10px) rotate(45deg);");
     mLine.setAttribute("style", "opacity: 0;");
     bLine.setAttribute("style", "transform:translate(0px,-11px) rotate(-45deg);");
     menuOverlay.setAttribute("style", "opacity:1; top:0;");
     showMenuItems(".menu");
   };
  };
  function projectNav(z){
    if(z === "close"){
      projectOverlay.setAttribute("style", "opacity:0;");
      hideMenuItems(".menuP");
    }
    else if(z === "open"){
      projectOverlay.setAttribute("style", "opacity:1; top:0;");
      showMenuItems(".menuP");
    };
  };

  function showMenuItems(item){
    var x = 0;
    var menuItems = document.querySelectorAll(item);
    var counter = setInterval(showItem,100);
    function showItem(){
      if(x === 7){
        clearInterval(counter);
        x=0;
      }
      else{
        menuItems[x].setAttribute("style", "transform: translate(0px,0px); opacity: 1;");
        x++;
      };
    };
  };
  function hideMenuItems(hideItem){
    var x = 0;
    var menuItems = document.querySelectorAll(hideItem);
    var counter = setInterval(hideItems,100);
    function hideItems(){
      if(x === 7){
        clearInterval(counter);
        x=0;
      }
      else{
        menuItems[x].setAttribute("style", "transform: translate(0px,5px); opacity: 0;");
        x++;
      };
    };
  };


  if(x == 1){
    if(menuCount === 2){
      nav("close");
      menuCount = 1;
    }
    else{
      nav("open");
      projectNav("close");
      projectMenuCount = 3;
      menuCount = 2;
    };
  }
  else if(x == 2){
    if(projectMenuCount === 4){
      projectNav("close");
      projectMenuCount = 3;
    }
    else{
      projectNav("open");
      nav("close");
      menuCount = 1;
      projectMenuCount = 4;
    };
  };
};
