$(document).ready(function(){

  $('.icon').click(function(){
      $('.topnav').toggleClass('responsive');
  });

  $('.topnav li:not(:first-child)').click(function(){
      $(this).parent('.topnav').removeClass('responsive');
  });

});
