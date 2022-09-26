$(".btn1").on('mouseenter mouseleave', function(e){
    var span = $(this).find("span");
    posTop = e.pageY - $(this).offset().top + "px";
    posLeft = e.pageX - $(this).offset().left + "px";
    span.css({'top': posTop , 'left': posLeft});
});