$(function() {

	// Constructor

// 	function TrackList(image, track, artist, audio){
// 		this.image = image;
// 		this.track = track;
// 		this.artist = artist;
// 		this.audio = audio;
// 	}
// 		TrackList.all = [];

// 	TrackList.prototype.save = function(){
// 		TrackList.all.push(this);
// 		console.log(TrackList.all);
// 	};
// 	TrackList.prototype.render = function(){
// 		var $spotifyTemp = _.template($('#spotify-template').html());
// 		var $spotifyT = ($spotifyTemp(this));
// 		var index = TrackList.all.indexOf(this);
// 		// $spotifyT.attr('data-index', index);
// 		$results.append($spotifyT);

// 	}
// var $spotifySearch = $('#spotify-search');
// var $track = $('#track');
// var $results = $('#results');
// var $spotifyTemp = _.template($('#intagram_template').html());



//   $spotifySearch.on('submit', function(event){
//   	event.preventDefault();

//   	var searchTrack = $track.val();
//   	console.log(searchTrack);


  	$.ajax({
  		type: 'GET',
  		url:'https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=37b1b2aa5abe47afb6643e32fc8f236a', 
  		dataType: 'jsonp',
  		crossDomain: true,
  		success: function(data){
					console.log(data);
					});


				
					// TrackList.prototype.save = function(){
					// 	TrackList.all.push(this);
					// 	console.log(TrackList.all);
					// };
					// TrackList.prototype.render = function(){
					// 	var $spotifyTemp = _.template($('#spotify-template').html());
					// 	var $spotifyT = $(spotifyTemp(this));
					// 	this.index = TrackList.all.indexOf(this);
					// 	$spotifyT.attr('data-index', track.name);
					// 	$spotifySearch.append(track.artists[0].name);
					// }	


					// var getArtistArray = (data.tracks.items[0].artists[0])
					// _.each(getArtistArray.name);
					// console.log(getArtistArray.name)


	  // $spotifySearch.each(function(){
   //  this.reset();		

    // on('submit', )

    // _.each([0], function(data){
    // 	$results.append($("<dt></dt>").text(searchTrack));
    // })	


					});
				// });
			
  	// });
	// });


// });



