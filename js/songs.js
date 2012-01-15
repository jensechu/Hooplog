$(document).ready(function(){

    $.getJSON("/data/songs.json", function(data) {
	var songs = data.songs;
	
	var random = songs[Math.floor(Math.random() * songs.length)];

	console.log(random);

	$(".spotlight .song-url").attr("href", random.url);
	$(".spotlight .song-title").text(random.title);
	$(".spotlight .song-artist").text(random.artist);

	});


    });
