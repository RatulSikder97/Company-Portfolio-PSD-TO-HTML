$(document).ready(function(){
   
   //sticky menu
   $('.js--services-section').waypoint(function(direction){
      if(direction == 'down'){
         $('nav').addClass("sticky");
      }else{
         $('nav').removeClass("sticky");
         
      }
   });
   
   // mixitup
   let mixer = mixitup(".container");

});