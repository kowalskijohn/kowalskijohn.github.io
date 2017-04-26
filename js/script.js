/**Setting Date for Greeting
**/

$(document).ready(function(){
  function setGreeting(){
    var time = new Date().getHours();
    var greeting = document.getElementById('greeting');
    if (time > 20){
      greeting.innerHTML="Night Friend"
    }
    else if(time > 16){
      greeting.innerHTML="Evening Friend"
    }
    else if(time > 11){
      greeting.innerHTML="Afternoon Friend"
    }
    else{
      greeting.innerHTML="Morning Friend"
    };
  };
  setGreeting();
  $('#loading-object').fadeIn('fast');
  $('#loading-object').delay(800).fadeOut('fast',function(){
    $('#main').animate({opacity:1},400);
    $('.type-it').delay(1000).typeIt();
    $('h4').delay(100).each(function(i){
      $(this).delay(100*i).animate({opacity:1},400);
    });
    $('h3').delay(100).each(function(i){
      $(this).delay(100*i).animate({opacity:1},400);
    });
  });
});

/**Functions
**/
