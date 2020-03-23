/*
* Template Name: MyPortfolio
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* License: https://bootstrapmade.com/license/
*/
firebase.initializeApp({
  apiKey: 'AIzaSyCu20JG8AjK8WkSykOnDx1EMABwpeETtgQ',
  authDomain: 'swe-project-63ce1.firebaseapp.com',
  projectId: 'swe-project-63ce1'
});

var db = firebase.firestore();
var topics = document.querySelectorAll(".topic");
var user = firebase.auth().currentUser;

if (topics != null) {
	var i = 0;
	var topicList = db.collection("topics").doc(user);
	console.log(topicList);
	topicList.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
	});

	db.collection("topics").doc(user).get().then(function(snapshot) {
    	if (doc.exists) {
        	console.log("Document data:", doc.data());
    	} else {
        	// doc.data() will be undefined in this case
        	console.log("No such document!");
    	}
	}).catch(function(error) {
    	console.log("Error getting document:", error);
	});
}

(function ($) {
  "use strict";

  var burgerMenu = function() {
	  $('.burger').click(function(e) {
	  	$(window).scrollTop(0);
	    if(!$('.burger').hasClass('active'))
	      $('.burger').addClass('active');
	    else
	      $('.burger').removeClass('active');
	  });
  }
  burgerMenu();

  var siteIstotope = function() {
	  var $container = $('#portfolio-grid').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	  $('#filters').on( 'click', 'a', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters a').removeClass('active');
	    $(this).addClass('active');
	  });
  }
  $(window).on('load', function () {
    siteIstotope();
  });


  var siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);

AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
