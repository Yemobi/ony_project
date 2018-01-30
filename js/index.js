
/******************************************
/* Main Playlist
/*******************************************/



 $("document").ready( function () {
        // alert("Hello, world");

		// $('.playlists').slick({
 	// 	    infinite: true,
  // 			slidesToShow: 3,
  // 			slidesToScroll: 3
  // 			// arrows: true

 	// 		 });



  jQuery(function($){
           $('.menu-btn' ).click(function(){
           $('.responsive-menu').toggleClass('expand')
           
           })
        })




$('.listen-now').on('click', function() {
  $('.playlist-page').toggleClass('active');
  $('.playlist-page > div').attr('class', 'winter');
});

$('.home').on('click', function() {
  $('.playlist-page').removeClass('active');
  $('.responsive-menu').removeClass('expand')
 console.log(expand);
});






$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  // contain: true
  wrapAround: true
  // setGallerySize: false
});


var $carousel = $('.main-carousel').flickity({
  cellSelector: 'iframe',
  imagesLoaded: true,
  percentPosition: false
});

// Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'select.flickity', function() {
  var playlistTitle = $(flkty.selectedElement).find('iframe').data('title');
  // set Playlist title caption using  The text
  $('.playlist-title').text(playlistTitle);



  // conditional statements to check playlistTitle
  if (playlistTitle === 'Yemobi Q1 18'){
    console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'winter');
    $("h3").html("winter");

}
    else if (playlistTitle === 'Yemobi Q4 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'autum');
    $("h3").html("autum");
}


    else if (playlistTitle === 'Yemobi Q3 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'summer');
    $("h3").html("summer");
}

    else if (playlistTitle === 'Yemobi Q2 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'spring');
    $("h3").html("spring");
}


    else if (playlistTitle === 'Yemobi Q1 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'winter');
    $("h3").html("autum");
}


//     else  if (playlistTitle === 'Yemobi Q3 17'){
//     $('.playlist-page').attr('class', 'summer')
// }

//     else  if (playlistTitle === 'Yemobi Q2 17'){
//     $('.playlist-page').attr('class', 'spring')
// }

//     else  if (playlistTitle === 'Yemobi Q1 17'){
//     $('.playlist-page').attr('class', 'winter')
// }
  // if playlistTitle is equal to a certain value
    // use .attr() jQuery method to change class of body
    // to correct class

    
    


});


//      $("select.flickity").click(changeImage);

//          function changeImage() {
//             event.preventDefault();

// if .text(playlistTitle === "Yemobi Q1 18" ) {
//                 $("body").removeClass();
//                 $("body").addClass("winter");
//             }



    //         if .text(playlistTitle === "NYC" || playlistTitle === "New York" || playlistTitle === "New York playlistTitle") {
    //             $("body").removeClass();
    //             $("body").addClass("nyc");
    //         }

    //         else if .text(playlistTitle === "San Francisco" || playlistTitle === "SF" || playlistTitle === "Bay Area") {
    //             $("body").removeClass();
    //             $("body").addClass("sf");
    //         }

    //        else if (playlistTitle === "Los Angeles" || playlistTitle === "LA" || playlistTitle === "LAX") {
    //             $("body").removeClass();
    //             $("body").addClass("la");
    //         }

    //         else if (playlistTitle === "Austin" || playlistTitle === "ATX") {
    //             $("body").removeClass();
    //             $("body").addClass("austin");
    //         }

    //         else if (playlistTitle === "Sydney" || playlistTitle === "SYD") {
    //             $("body").removeClass();
    //             $("body").addClass("sydney");
    //         }
    //     }
      
    // }











//  $('.playlists').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: true,
//   asNavFor: '.s-playlist'
// });

// $('.s-playlist').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   // asNavFor: '.playlists',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
// });

// set html data attributes with url for embed code
// on gallery item click
  // prevent gallery scroll
  // grab url from the gallery item's data attribute
  // update main iframe with selected url

}); 






