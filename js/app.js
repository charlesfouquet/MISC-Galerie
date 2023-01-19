var divImgList = $(".small div");

divImgList.on("click", function(){
    divImgList.removeClass("selected");
    $(this).addClass("selected");
    var imgInDiv = $(this).children();
    $(".big img").attr("src",$(imgInDiv).attr("src"));
    // ANCIENNE VERSION : $(".big img")[0].src = $(imgInDiv).attr("src");
    $(".big div p").text($(imgInDiv).attr("alt"));
})