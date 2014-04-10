$(document).ready(function () {
    // There is JavaScript; show all elements marked 'noJs'
    $(".noJs").attr("class", "");
    
    $("#content").attr("style", "margin-top: "+($(".toolbar").height() + 16)+"px;");
});