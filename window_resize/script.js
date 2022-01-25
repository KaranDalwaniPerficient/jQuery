$(document).ready(function () {
  $("li").click(function () {
    $(this).addClass("lis");
    $(".cmn").not($(".dukh").next()).hide(500);
    $(this).next().clone().appendTo(".dukh").show();
    $("li").not($(this)).removeClass("lis");
  })
  if($(Window).width()<1024){
    $(".col25").css("width","100%");
      $("li").click(function () {
    $(this).next().show();
    $(this).addClass("lis");
    $(".cmn").not($(this).next()).hide(500);
    $("li").not($(this)).removeClass("lis");
  })
  }
})
$(window).resize(function() {
  if ($(this).width() < 1024) 
  {
    location.reload();
    $(".col25").css("width","100%");
  } 
  else {
    location.reload();
  }
});