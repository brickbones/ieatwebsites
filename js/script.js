$(document).ready(function(){

	//time of the day header
	      var d = new Date();
        var hours = d.getHours();
        if (hours > 17 || hours < 6){
                // Night time - If time is after 5PM or before 6AM
                $('header').addClass('night');
								$('.goodevening').show();

              }
        else if (hours > 6 && hours < 12){
                // Morning - After 6am and before 12pm
								$('header').addClass('sunset');
								$('.goodmorning').show();
								$('.day-bg').show();
							}
        else{
                // Afternoon- 12PM to 4PM
                $('header').addClass('day');
								$('.goodafternoon').show();
							}


	$('.nav-icon1').click(function(){
		$(this).toggleClass('open');
    $('.nav').slideToggle();
	});
$(".video-holder").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

});
