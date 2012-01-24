function firefox_detection(){
    if ( $.browser.mozilla ) {
	$("#content h2").css( "font-weight","lighter" );
    }
}

$(document).ready(function(){
    firefox_detection();

    $(".header-swap").hover(
	function(){
	    $(this).attr({ src: "/media/images/header-hover.png"});
	},
	function(){
	    $(this).attr({ src: "/media/images/header-normal.png"});
	});

    $("#tabs").tabs();

    $(".nav a:not(.selected)").each(function() {
	$(this).data("color", $(this).attr("class"));
	$(this).attr("class", "normal");
    });

    $(".nav a:not(.selected)").hover(
	function() {
	    $(this).attr("class", $(this).data("color"));
	},

	function() {
	    $(this).attr("class", "normal");
	});


});
