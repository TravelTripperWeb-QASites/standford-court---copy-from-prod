var mobile =
  '<!--Hotel Exterior Photo-->' +
  '<div class="item active">' +
    '<img src="/images/homepage/slider-1-dark-crop.jpg" alt="Stanfordcourt">' +
  '</div>' +

  '<!--Bay View Photo-->' +
  '<div class="item">' +
    '<img src="/images/homepage/slider-5.jpg" alt="Stanfordcourt">' +
  '</div>' +

  '<!--City View Photo-->' +
  '<div class="item">' +
    '<img src="/images/homepage/slider-3-crop.jpg" alt="Stanfordcourt">' +
  '</div>'
;

var desktop =
  '<!--City View Video-->' +
  '<div class="item active videoContainer">' +
    '<video autoplay loop>' +
      '<source src="https://cdn.traveltripper.io/site-assets/192_617_5474/media/2017-07-24-140325/cityscape-sunset.mp4" type="video/mp4">' +
    '</video>' +
  '</div>' +

  '<!--Hotel Exterior Photo-->' +
  '<div class="item">' +
    '<img src="/images/homepage/slider-1-dark-crop.jpg" alt="Stanfordcourt">' +
  '</div>' +

  '<!--Bay View Photo-->' +
  '<div class="item">' +
    '<img src="/images/homepage/slider-5.jpg" alt="Stanfordcourt">' +
  '</div>' +

/*'<!--Ornament Photo-->' +
  '<div class="item">' +
    '<img src="/images/homepage/ornamnet-slider-6.jpg" alt="Stanfordcourt">' +
    '<a href="/">ok</a>' +
  '</div>' +
*/
  '<!--City View Photo-->' +
  '<div class="item">' +
    '<img src="/images/homepage/slider-3-crop.jpg" alt="Stanfordcourt">' +
  '</div>'
;

if (jQuery.browser.mobile) {
  $(".carousel-inner").append( mobile );
} else {
  $(".carousel-inner").append( desktop );
  $(".carousel-indicators").append( '<li data-target="#myCarousel" data-slide-to="3"></li><li data-target="#myCarousel" data-slide-to="4"></li>' );

}


// if (jQuery.browser.mobile) {
//   $(".videoContainer").css( "display", "none" );
// } else {
//   var sources = document.querySelectorAll('.videoContainer video source');
//   var video = document.querySelector('.videoContainer video');
//   for (var i = 0; i < sources.length; i++) {
//     sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
//   }
//   video.load();
//   video.muted = "muted";
// }
