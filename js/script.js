$(document).ready(function(){
	$('.nav-icon1').click(function(){
		$(this).toggleClass('open');
    $('.nav').slideToggle();
	});
});

$(".video-holder").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});
