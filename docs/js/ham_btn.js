function changeNavC() {
	var isOpen = false;
	return function(){
		if(isOpen){
				document.getElementById("myNav").style.width = "0%";
				document.getElementById("overlay_bg").style.opacity = "0";
				document.getElementById("overlay_bg").style.visibility = "hidden";
				$('#ham_btn').toggleClass('open');
				isOpen = false;
		}else{
				if($( window ).width() < 500) document.getElementById("myNav").style.width = "200px";
				else document.getElementById("myNav").style.width = "400px";
				
				document.getElementById("overlay_bg").style.visibility = "visible";
				document.getElementById("overlay_bg").style.opacity = "0.6";
				$('#ham_btn').toggleClass('open');
				isOpen = true;
		} 
	}
}
var changeNav = changeNavC();

function changeNavTopC() {
	var isOpen = false;
	return function(){
		//$('.event_list_arrow').toggleClass('sticky');
		if(isOpen){
				document.getElementById("myNav_top").style.height = "0%";
				document.getElementById("overlay_top_bg").style.opacity = "0";
				document.getElementById("overlay_top_bg").style.visibility = "hidden";
				isOpen = false;
		}else{
				document.getElementById("myNav_top").style.height = "400px";
				document.getElementById("overlay_top_bg").style.visibility = "visible";
				document.getElementById("overlay_top_bg").style.opacity = "0.6";
				isOpen = true;
				/*
				$('html, body').animate({
			        scrollTop: ($('#myNav_top')).offset().top-50
			      }, 800, function(){
			   
			        // Add hash (#) to URL when done scrolling (default click behavior)
			        window.location.hash = $('myNav_top').hash;
			    });
			    */
		} 
	}
}
var changeNavTop = changeNavTopC();
