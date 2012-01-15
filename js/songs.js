function random_song(){
    $.getJSON("/data/songs.json", function(data) {
	var songs = data.songs;
	
	var random = songs[Math.floor(Math.random() * songs.length)];
	
	console.log(random);
	
	$(".spotlight .song-url").attr("href", random.url);
	$(".spotlight .song-title").text(random.title);
	$(".spotlight .song-artist").text(random.artist);
	    
    });
    return false;
}

$(document).ready(function(){
    random_song();

    $("#random-song").click(random_song);

});
