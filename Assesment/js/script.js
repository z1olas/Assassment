$(document).ready(function(){
    
    var json_data = "http://design.propcom.co.uk/buildtest/accordion-data.json";
    
    $.getJSON(json_data, function(data){
        var blocks_data = '';
        $.each(data.blocks, function(key, value){
            blocks_data += '<h1>'+value.heading+'<i class="ion-chevron-up"></i>'+'</h1>';
            blocks_data += '<p>'+value.content+'</p>';
        });
        
        $('.container').append(blocks_data);
        
        $(".container p").hide();
        $(".container h1").click(function(){
            $(this).next("p").slideToggle();
            $(this).toggleClass("current");
        });
    });
    
});