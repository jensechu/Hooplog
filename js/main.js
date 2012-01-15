$(document).ready(function(){
    
    $(".nav a").each(function() {
	$(this).data("color", $(this).attr("class"));
	$(this).attr("class", "normal");
    });

    $(".nav a").hover(
	function() {
	    $(this).attr("class", $(this).data("color"));
	},

	function() {
	    $(this).attr("class", "normal");
	});
    
});
