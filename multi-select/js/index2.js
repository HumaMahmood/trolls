
$(document).ready(function () {

  var a = $('.dropdown-lists');
$(".custom-dropdown-list").click(function(){
    $(".navbar-nav-menu").toggle();
  });


/////////////
  $("label").on('click', function(e) {
  e.preventDefault(); 
 
  var indexul =$( this ).parent().index();
  for (var i=0; i<=a.length+1; i++) {
    if(indexul== i){
      $(this).siblings().addClass('selected-ul'+'' +i);
  }
  }
    $('.dropdown-select').append($(this).siblings("li"));
    $(this).remove();
});



//////////
$('body').on('click', 'li', function() {

  var $thisval = $(this);
  var className = $(this).attr('class');
  if($(this).parent().hasClass('dropdown-select')){
    $( ".dropdown-lists ul" ).each(function( index ){
    if('selected-ul'+index == className){
      $(this).append($thisval);
  }
});
}
  else
{
  var indexul =$( this ).parent().index();
  for (var i=0; i<=a.length+1; i++) {
    if(indexul== i){
      $(this).addClass('selected-ul'+'' +i);
  }
  }
  $('.dropdown-select').append($(this));
}

  

});



});// ready function