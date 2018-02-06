
/******************************************
/* Main Playlist
/*******************************************/



 $("document").ready( function () {



 $('.menu-btn' ).click(function(){
    $('.responsive-menu').toggleClass('expand');
  });

 $('body').on('click', function(event) {
  if ($('.responsive-menu').hasClass('expand') && !$(event.target).hasClass('fa-bars')) {
    $('.responsive-menu').removeClass('expand');
  }
 });




$('.listen-now').on('click', function() {
  $("h3").html("2018 has been a great start for music. Heavy bass slow jams and smooth sounds!");
  $('.playlist-page').toggleClass('active');
  $('.playlist-page > div').attr('class', 'winter');
  var playlistTitle = $(flkty.selectedElement).find('iframe').data('title');
  // set Playlist title caption using  The text
  $('.playlist-title').text(playlistTitle);


});



$('.logo-click').on('click', function() {
  console.log('clicked!');
   $("h3").html("2018 has been a great start for music. Heavy bass slow jams and smooth sounds!");
  $('.playlist-page').toggleClass('active');
  $('.playlist-page > div').attr('class', 'winter');
  var playlistTitle = $(flkty.selectedElement).find('iframe').data('title');
  // set Playlist title caption using  The text
  $('.playlist-title').text(playlistTitle); 
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


});


}); 






