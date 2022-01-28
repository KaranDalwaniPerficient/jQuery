$(document).ready(function () {

  $('.n_img').click(function () {
    $(".zoom").show();

  });
  $('.close').click(function () { 
    $(".zoom").hide();
    
  });
  $('.inc').click(function () { 
    var width = $('.z_img').width();
    var height = $('.z_img').height();
    if(width<1900)
    {
    width=width+100;
    height=height+100;
    }
  $('.z_img').height(height).width(width);  
  });
  $('.dec').click(function () { 
    var width = $('.z_img').width();
    var height = $('.z_img').height();
    if(height>390)
    {
    width=width-100;
    height=height-100;
    }
  $('.z_img').height(height).width(width);  
  });
});