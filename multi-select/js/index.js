
  $(document).ready(function () {
    var count = $("ul").length;
    console.log("ul are:" + count);
    $(".div").click(function(){
    $(".navbar-nav-menu").show();
  });


/////////////////////////////////// Full list click

 $("label").on('click', function(e) {
 e.preventDefault(); 
var index =$( this ).parent().index();
alert("index is:" + index);
  if($(this).parent().hasClass('first')){
    $(this).siblings("li").addClass('selected1');
  }

  if($(this).parent().hasClass('second')){
    $(this).siblings("li").addClass('selected2');
  }

  if($(this).parent().hasClass('third')){
    $(this).siblings("li").addClass('selected3');
  } 
    $(this).siblings("li").addClass("glyphicon glyphicon-remove");
    $('.inner').append($(this).siblings("li"));
 

});   

/////////////////////////////////// Single li click

$('body').on('click', 'li', function() {
 
      if($(this).parent().hasClass('third')){
        
        $(this).addClass('selected3');
        $('.inner').append($(this));
      }
      else if ($(this).hasClass('selected3')){
        $('.third').append($(this));
      }

///////////////////////////////////

      if($(this).parent().hasClass('second')){
        
        $(this).addClass('selected2');
        $('.inner').append($(this));
      }
      else if ($(this).hasClass('selected2')){
        $('.second').append($(this));
      }
///////////////////////////////////

      if($(this).parent().hasClass('first')){
        
        $(this).addClass('selected1');
        $('.inner').append($(this));
      }
      else if ($(this).hasClass('selected1')){
        $('.first').append($(this)); 
      }

     if($(this).hasClass('glyphicon glyphicon-remove')){
      $(this).removeClass('glyphicon glyphicon-remove');
     }
     else {
       $(this).addClass('glyphicon glyphicon-remove');
     }
     
 });


});