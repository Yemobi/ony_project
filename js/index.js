
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
  $("h3").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod");
  $('.playlist-page').toggleClass('active');
  $('.playlist-page > div').attr('class', 'winter');
  var playlistTitle = $(flkty.selectedElement).find('iframe').data('title');
  // set Playlist title caption using  The text
  $('.playlist-title').text(playlistTitle);


});

$('.logo-click').on('click', function() {
  $('.playlist-page').removeClass('active');
  $('.responsive-menu').removeClass('expand')
 
});


$('.home').on('click', function() {
  $('.playlist-page').removeClass('active');
  $('.responsive-menu').removeClass('expand')
 
});



$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  // contain: true
  wrapAround: true,
  freeScroll: true
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
    $("h3").html("2018 has been a great start for music. Heavy bass slow jams and smooth sounds!");

}
    else if (playlistTitle === 'Yemobi Q4 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'autum');
    $("h3").html("The end of 2017 theses tracks will keep you going when the nights get longer!");
}


    else if (playlistTitle === 'Yemobi Q3 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'summer');
    $("h3").html("Call it Summer, call it Autum….. what ever you call it, these tracks are pure Fire!");
}

    else if (playlistTitle === 'Yemobi Q2 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'spring');
    $("h3").html("Where were you when you first heard XO TOUR Llif3 and Unforgetable! Q217 baby!");
}


    else if (playlistTitle === 'Yemobi Q1 17'){
      console.log(playlistTitle);
    $('.playlist-page > div').attr('class', 'winter2');
    $("h3").html("Remember when Migos, Childish & Gucci were in the heads of many last year… We old!");
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






