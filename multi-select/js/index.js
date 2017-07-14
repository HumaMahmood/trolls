jQuery(document).ready(function () {
  var a = jQuery('.dropdown-lists');
jQuery(".div").click(function(){
    jQuery(".navbar-nav-menu").show();
  });



  jQuery("label").on('click', function(e) {
  e.preventDefault(); 
 
  var indexul =jQuery( this ).parent().index();
  for (var i=0; i<=a.length+1; i++) {
    if(indexul== i){
      jQuery(this).siblings().addClass('selected-ul'+'' +i);
  }
  }

    jQuery('.dropdown-select').append(jQuery(this).siblings("li"));
 
});




jQuery('body').on('click', 'li', function() {
  var $thisval = jQuery(this);
  var className = jQuery(this).attr('class');
  if(jQuery(this).parent().hasClass('dropdown-select')){
    jQuery( ".dropdown-lists ul" ).each(function( index ){
    if('selected-ul'+index == className){
      jQuery(this).append($thisval);
  }
});


}
else
{
  var indexul =jQuery( this ).parent().index();
  for (var i=0; i<=a.length+1; i++) {
    if(indexul== i){
      jQuery(this).siblings().addClass('selected-ul'+'' +i);
  }
  }

    jQuery('.dropdown-select').append(jQuery(this).siblings("li"));
}

});



  });// ready function