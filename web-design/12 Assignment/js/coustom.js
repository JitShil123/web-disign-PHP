$(document).ready(function(){

//class 12
/*
   $(".submit").click(function(){
      $(this).attr("value","login"); 
      $(this).css({"width":"200px","height":"100px",
      "background":"green","border-radius":"20px",
      "border":"2px solid red",
      "display":"block","margin":"auto"});
   });
 
   var value="enter the email";
   $("input[type='email']").attr("value",value).focus(function(){

      if($(this).val()== value){
         $(this).attr("value"," ");
      }
   }).blur(function(){
       if($(this).val() == ''){
         $(this).attr("value",value)
      }
   });
*/


/*
   $("#sel").change(function(){
      alert("change value")
      var select=$("#sel").val();
      $(".add").text("You have select"+" "+select);
   });
*/
/*
   $(".button").click(function(){
      //$("p").before("<p>Before</p>");
     // $("p").prepend("<p>Before</p>");
      //$("p").append("<p>After</p>")
      $("p").after("<p>After</p>")
   });
*/

/*   var width=jQuery(".box1").width();
     var height=jQuery(".box1").height();
     var hheight=jQuery(window).height();
     var wwidht=jQuery(window).width();
      alert("width"+width+" "+"Height"+height);
      alert(hheight+" "+wwidht);
*/


$(".click").click(function(){
   $(".img").load("other.html");

})

});