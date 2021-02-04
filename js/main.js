$(document).ready(function(){
    $(".panelBg").hide();
    
    $(".panel").click(function(){
        $(".panelBg").fadeIn();
        $(".panelMenu").css("width","70%");
    })
    
    $(".panelBg").click(function(){
        $(".panelBg").fadeOut();
        $(".panelMenu").css("width","0");
    })
})