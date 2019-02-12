$(document).ready(function(){

$('#slideUp').click(function(){
$('.row').slideUp(1000);

});

$('#slideDown').click(function(){
$('.row').slideDown(1000);

});

$('#toggleupdown').click(function(){
$('.row').slideToggle(2000);

});

});