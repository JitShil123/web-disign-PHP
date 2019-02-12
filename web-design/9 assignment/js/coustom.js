$(document).ready(function(){

   $('#hide').click(function(){
   $('.box').fadeOut(1000);
   
   });
   
   $('#show').click(function(){
   $('.box').fadeIn(1000);
   
   });
   
   $('#toggle').click(function(){
   $('.box').fadeToggle(2000);
   
   });
   
   $('#fadeTo').click(function(){
   $('.box').fadeTo(1000,0.1);
   
   });
   
   
   
   
   

});