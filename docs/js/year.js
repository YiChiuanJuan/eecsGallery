var $div = $('#ham_btn'),
	div_top = $div.offset().top,
	$div_arrow_top = $('.event_list_arrow'),
	arrow_top = $div_arrow_top.offset().top,
	stickyed_btn = false,
	stickyed_arrow = false;

$(window).scroll(function(){
	if($(window).scrollTop() > div_top-10 && stickyed_btn==false){
		stickyed_btn = true;
		$('#ham_btn').toggleClass('sticky');
		$('#home_btn').toggleClass('sticky');
	}
	if($(window).scrollTop() < div_top-10 && stickyed_btn==true){
		stickyed_btn = false;
		$('#ham_btn').toggleClass('sticky');
		$('#home_btn').toggleClass('sticky');
	}		
	var a = arrow_top;
	var b = $(window).scrollTop();
	//console.log("top"+a);
	//console.log("window"+b);
	if($(window).scrollTop() < 300){
		//stickyed_arrow = true;
		//$('.event_list_arrow').toggleClass('sticky');
		$('.event_list_arrow').css('opacity', "0");
		$('.to-top').css('opacity', "0");
	}
	if($(window).scrollTop() > 300){
		//stickyed_arrow = false;
		//$('.event_list_arrow').toggleClass('sticky');
		$('.event_list_arrow').css('opacity', "0.9");
		$('.to-top').css('opacity', "0.9");
	}
});


$(document).on('click', '.overlay_top a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-100
    }, 500);
});

$(document).on('click', '#to-top', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-100
    }, 500);
});


function pic_load(folder, id, title){
    var newDiv = document.createElement("div");
    newDiv.className += "event_title";
    newDiv.append(title);
    $('#all_events').append(newDiv);

    var newDiv_pic = document.createElement("div");
    newDiv_pic.id = id;
    $('#all_events').append(newDiv_pic);

    var nav_title = title.split(" ")[3];
    $('.overlay_top-content').append("<a onclick='changeNavTop()' href='#"+id+"'>"+ nav_title +"</a>");
    //console.log(nav_title);

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                dir =  folder +"/"+ val;
                //console.log(val);
                if( val.substring(val.lastIndexOf('.') + 1).toLowerCase() == "jpg") {
                    $('#'+id).append( "<a href='"+dir+"' title='"+title+"' data-lightbox='image_set'>"+"<img src='"+dir+"'/></a>" );
                }
                //$('#'+id).append( "<a href='"+dir+"' title='sport game' data-lightbox='image_set'>"+"<img src='"+dir+"'/></a>" );
            });
        }
    });

    $( document ).ajaxComplete(function() {
            if( $(window).width() < 500 ){
                $('#'+id).justifiedGallery(
                    {
                        rowHeight: 70, 
                        maxRowHeight: 4, 
                        margins: 5
                    }
                );
            }else{
                $('#'+id).justifiedGallery(
                    {
                        rowHeight: 200, 
                        maxRowHeight: 4, 
                        margins: 5
                    }
                );
            }
          
    });
}
