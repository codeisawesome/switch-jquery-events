$(function(){
	// setting a variable to store if the lights are on or off
	var lights = 'on';

	// event listener (click) for the light switch (#switch) button
	$('#switch').click( function(){ switchLights() });

	function switchLights(){
    $('body').toggleClass('dark')
		if( lights === 'on' ){
			// $('body').toggleClass('dark');
      $('.status').text("It's so dark in here!")
			lights = 'off';
		}else{
      // $('body').toggleClass('light');
      $('.status').text("It's so bright in here!")
			lights = 'on';
		}// END if( lights === 'on' )
	}
});
