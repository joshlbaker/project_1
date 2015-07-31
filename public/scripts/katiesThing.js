http://developer.echonest.com/api/v4/artist/search?api_key=W0HIDE0UYYTXMV4WX&format=json&artist_location=country:" + + "&bucket=artist_location


  	$.ajax({
  		type: 'GET',
  		url:'https://api.instagram.com/v1/tags/' + searchHash + '/media/recent?client_id=37b1b2aa5abe47afb6643e32fc8f236a', 
  		dataType: 'jsonp',
  		crossDomain: true,
  		success: function(data){
  			_.each(data.data, function(obj){
  				var image = (obj.images.low_resolution.url);
  				var text = (obj.caption.text);
  				var list = new HashList( image, text);
  				console.log(image, text);
  				
  				list.save();

  				list.render();
  			});
			}
		});