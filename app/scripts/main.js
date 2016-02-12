$(function() {
  $('body').addClass('loaded');
});

$(document).scroll(function(){
     $('.intro').toggleClass('scrolled', $(this).scrollTop() > 1);
 });
