$(function() {


	  // `mainController` holds shared site functionality
	  var mainController = {

	    // compile underscore template for nav links
	    navTemplate: _.template($('#nav-template').html()),

	    // get current (logged-in) user
	    showCurrentUser: function() {
	      // AJAX call to server to GET /api/users/current
	      $.get('/api/users/current', function(user) {
	        console.log(user);

	        // pass current user through template for nav links
	        $navHtml = $(mainController.navTemplate({currentUser: user}));

	        // append nav links HTML to page
	        $('#nav-links').append($navHtml);
	      });
	    }
	  };

	  mainController.showCurrentUser();


	// });

	  // // CHECK IF WE"RE CONNECTED
	  // console.log('I\'m here to serve')

	  // // var baseUrl = "http://localhost:3000" // DEV
	  // var baseUrl = "https://pickup-wdi.herokuapp.com" // PRD
	  // // DEFINE LINES
	  
	//   $line = _.template( $("#lineTemplate").html() )

	//   $.get(baseUrl + '/api/lines', function(data) {
	//     var lines = data  

	//     _.each(lines, function(line) {
	//       console.log(line)
	//       $('#lines').append($line(line))
	//     })
	//   })

	//   $('#new-line').submit(function(e){
	//     e.preventDefault();
	//     console.log("im submitting a form")
	//     var line = {
	//       text: $('#line-text').val()
	//     }
	//     $.post('/api/lines', line, function(data) {
	//       console.log(data)
	//       $('#lines').prepend($line(data))
	//     })

	//   });

	  $('#login-form').on("submit", function(event){
	    var userData = {
	      email: $("#login-user-email").val(),
	      password: $("#login-user-password").val()
	    };
	    $.post('/login', userData, function(response){
	      console.log(response);
	    });
	  });
	// });

	// Constructor

	function HashList(image, text){
		this.image = image;
		this.text = text;
	}
	HashList.all = [];

	HashList.prototype.save = function(){
		HashList.all.push(this);
		console.log(HashList.all);
	};

	HashList.prototype.render = function(){
		var $hashTemp = _.template($('#hash-template').html());
		var $hashT = ($hashTemp(this));
		var index = HashList.all.indexOf(this);
		// $hashT.attr('data-index', index);
		$results.append($hashT);
  }

	var $hashSearch = $('#hash-search');
	var $text = $('#hashtag');
	var $results = $('#results');
	var $hashTemp = _.template($('#hash-template').html());

  $hashSearch.on('submit', function(event){
  	event.preventDefault();
  	console.log('submitform')
  	var searchHash = $text.val().replace(/\s/g, '');
  	console.log('this is searchhash')
  	console.log(searchHash);

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

  	$("#favorites-container").on("click", "", function(e){
  	     console.log("containter was clicked...",$(this))
  	     // var $iconRow = $(this).parent().parent();
  	     // console.log("the iconRow", $iconRow.html() );
  	     // var $image = $iconRow.prev(".row-looks").find("section img");
  	     // console.log("the selected img", $img.attr("src") );
  	     // var favorite = {url: $image.attr("src")};
  	     // $.ajax({
  	     //   url: "/users/" + user._id + "/favorites",
  	     //   type: "POST",
  	     //   data: favAll,
  	     //   success: function(data){
  	     //     console.log("this post was add", data);
  	       // }
  	     });

	});






});



// standard_resolution
// low_resolution
// thumbnail



