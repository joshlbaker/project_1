$(function(){
	// reference to last opened menu
	var $lastOpened = false;
	// simply close the last opened menu on document click
	$(document).click(function(){
	  if($lastOpened){
	    $lastOpened.removeClass('open');
	  }
	});
	// simple event delegation
	$(document).on('click', '.pulldown-toggle', function(event){
	  // jquery wrap the el
	  var el = $(event.currentTarget);
	  // prevent this from propagating up
	  event.preventDefault();
	  event.stopPropagation();
	  // check for open state
	  if(el.hasClass('open')){
	    el.removeClass('open');
	  }else{
	    if($lastOpened){
	      $lastOpened.removeClass('open');
	    }
	    el.addClass('open');
	    $lastOpened = el;
	  }
	});
	// Setting form variables
	var $hashSearch = $("#hashSearch");
	var $field = $("#field");
  $(document).ready( function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 160
    });
  });
	// Setting event listener
	$hashSearch.on('submit', function(event){
	  	event.preventDefault();
	  	var searchField = $field.val().replace(/\s/g, '');
    $.ajax({
  		type: 'GET',
  		url:"https://api.instagram.com/v1/tags/" + searchField + "/media/recent?client_id=932bebc9cffc4be5bcde1602b71a37d6",
  		dataType: 'jsonp',
  		crossDomain: true,
  		success: function(data){
        console.log(data)
        var searchF = [];
        searchF.push("Showing results for " + '<strong><i>' + searchField + '</i></strong>' + "<br>" + "<br>");
        $( "<p/>", {
          "class": "searchF",
          html: searchF.join( "" )
        }).appendTo( "#searchF" );
  			_.each(data.data, function(obj){
          var photo = [];
  				var image = (obj.images.low_resolution.url);
  				var text = (obj.caption.text);
          var likes = (obj.likes.count);
          photo.push("<span class='glyphicon glyphicon-heart'>" + " " + likes + '<br>' + '<br>' + "</span>");
    	  	photo.push('<img src=' + image + '>' + '<br>');
          if (text.length < 100){
          photo.push("<br>" + "<legend style='width:200px;'>" + text + "</legend>");
	        }else{
	          photo.push("<br>" + "<legend style='width:200px;'>" + "#" + searchField + "</legend>");
	        }
    		  $( "<p/>", {
    		    "class": "grid-item",
    		    html: photo.join( "" )
    		  }).appendTo( "#results" );
  			});
			}
		});
    $hashSearch[0].reset() //resets the form
		$("#search_submit").click(function(){
    $("#results").empty();
});
	}); //end of 1st get request
  $.ajax({
    type: 'GET',
    url:"https://api.instagram.com/v1/media/popular?access_token=473020249.932bebc.ac928e49100d436da63fe63a91bfdce0",
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data){
      console.log(data);
      _.each(data.data, function(obj){
        var popularPhoto = [];
        var popularImage = (obj.images.low_resolution.url);
        var likes = (obj.likes.count);
        var text = (obj.caption.text);
        popularPhoto.push("<span class='glyphicon glyphicon-heart'>" + " " + likes + '<br>' + '<br>' + "</span>");
        popularPhoto.push('<img src=' + popularImage + '>');
        popularPhoto.push("<br>" + "<legend>" + text + "</legend>");
        $( "<p/>", {
          "class": "grid-item",
          html: popularPhoto.join( "" )
        }).appendTo( "#topPost" );
      })
    }
  });
	$hashSearch[0].reset() //resets the form

}); //End of script
