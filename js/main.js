$(document).ready(function(){
    
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
