if (jQuery.browser.mobile) {
  $(".videoContainer").css( "display", "none" );
} else {
  var sources = document.querySelectorAll('.videoContainer video source');
  var video = document.querySelector('.videoContainer video');
  for (var i = 0; i < sources.length; i++) {
    sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
  }
  video.load();
  video.muted = "muted";
}
