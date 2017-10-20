// hide menu when window width greater than 600px 

(function() {
	initWidth();

	function initWidth() {
		window.addEventListener('resize', resize);
	}

	function resize() {
		var width = document.body.clientWidth;
		if(width > 600 ){
			$("body").css("background-color", "rgba(0, 0, 0, 0.0)");
    		$( ".menu" ).hide("fast");
     	    $( ".cross" ).hide();
     	    $(".hamburger").hide();
		} 
		else if (width < 570 ) {
			$(".hamburger").show();
		}	
	}

})();


	