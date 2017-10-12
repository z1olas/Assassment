$(document).ready(function(){
   $(".container p").hide();
    $(".container i").click(function(){
        $(this).parent().next("p").slideToggle();
        $(this).parent().toggleClass("current");
    });
});