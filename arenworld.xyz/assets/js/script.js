$(document).ready(function(){

    // Hide loading overlay after 8 seconds
    $(window).load(function(){
       // PAGE IS FULLY LOADED  
       // FADE OUT YOUR OVERLAYING DIV
       $('#loading').fadeOut();
    });

    // Popup
    $(".aren-popup .close").click(function() {
       $('.aren-popup').addClass('hide');
   });

    // Menu
   $(".header-mobile .burger-menu-icon").click(function() {
      $(".header-mobile .menu-toggle").toggle();
   });
   
});