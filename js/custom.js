
$(document).ready(function() {
  /* code for tracking book now click events for optimizely testing. remove this code once a/b testing is removed */
	window['optimizely'] = window['optimizely'] || [];
	  $(document).on("click", 'a[href^="https://stanfordcourt.reztrip.com/"], a[class="homeTonightRate"]' , function(){
	    window['optimizely'].push({
	      type: "event",
	      eventName: "book-now-click"
	    });
	  });
	  $("a[show-booking-widget]").on("click" , function(){
	    window['optimizely'].push({
	      type: "event",
	      eventName: "reserve-now-click"
	    });
	  });
	/* a/b testing code ends ghere */
  
  setTimeout(function(){
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    var totalslides = 10;
    var syncedSecondary = true;
    if($(window).width() > 992){
       $("#big, #big .item").css('height',$(window).height() +'px');
    }else{
       $("#big, #big .item").css('height','480px');

    }
      $('#hamburger').click(function(){
        $(this).toggleClass('open');
      });


    bigimage.owlCarousel({
      items : 1,
      slideSpeed : 3000,
      autoplay: true,
      dots: false,
      loop: true,
      nav: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      responsiveRefreshRate : 200,
      navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    }).on('changed.owl.carousel', syncPosition);

    thumbs
      .on('initialized.owl.carousel', function () {
        thumbs.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      dots: true,
      items:3,
      nav: false,
      navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: totalslides,
      responsiveRefreshRate : 100,
      responsive : {
            // breakpoint from 0 up
            0 : {
                 items:1
            },
            // breakpoint from 480 up
            600 : {
                items:2
            },
            // breakpoint from 768 up
            900 : {
                items:3
            },
            1600 : {
                items:4
            }
        }
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);

      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find('.owl-item.active').length - 1;
      var start = thumbs.find('.owl-item.active').first().index();
      var end = thumbs.find('.owl-item.active').last().index();

      if (current > end) {
        thumbs.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        thumbs.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        bigimage.data('owl.carousel').to(number, 100, true);
      }
    }

    thumbs.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      bigimage.data('owl.carousel').to(number, 300, true);
    });
  },4300);


  //offers info


    /// decrease size for minimal devices
     setTimeout(function(){

       //divide in 2 column
         var largerFont = 100;
       if ($('.rate-block .title2').text().length < 20){
           largerFont = (($('.main-image img').height()) / 4);
       }else{
           largerFont = (($('.main-image img').height()) / 5);
       }

       $('.rate-block .title2').css({'font-size':largerFont+'px', 'line-height': largerFont+'px'});

       var largerFontSlider = 100;
        if ( $('#roomsSlider').find('.title2').text().length < 20){
         largerFontSlider = (( $('#roomsSlider').find('img').height()) / 4);
        }else{
         largerFontSlider = (( $('#roomsSlider').find('img').height()) / 5.5);
        }
        $('#roomsSlider').find('.title2').css({'font-size':largerFontSlider+'px', 'line-height': largerFontSlider+'px'});

       $('.loading').css('display','none');
     },4500);

});

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("nav");
        if (distanceY > shrinkOn) {

            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });


   setTimeout(function(){
    var imageHolder = $('.first-holder').height();
   $('.attrcation-cards :not(.first-holder)').find('.img-holder').css('max-height',imageHolder);

       var newHeight = 0;
        $('.attrcation-cards').find('.details').each(function(){
            var temp = $(this).height();
            newHeight = temp > newHeight ? temp  : newHeight;
        });
        $('.attrcation-cards').find('.details').each(function() {
           $(this).height(newHeight);
         });
   },1000);

}
window.onload = init();


$(function() {
   var today = new Date();
//   var firstdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//   var lastdate = today.getFullYear()+'-'+(today.getMonth()+7)+'-'+today.getDate();
//
//   var dayrates = [{}];
//    $.ajax({
//        url: 'https://rt3api-prd.ttaws.com/hotels/rate_calendar.json?hotel_id=MIAWPH&portal_id=wphsouthbeach&locale=en&currency=USD&ip_address=124.123.205.34&start_date='+firstdate+'&end_date='+lastdate+'&adults_0=1&children_0=0&rooms=1',
//        type: 'GET',
//        success: function(res) {
//          $.each( res.rate_calendar_dates, function( index, value ){
//             //dayrates[0]["'"+value.date+"'"] = value.best_available_rate;
//             dayrates[0][value.date]=  value.best_available_rate;
//          });
//        }
//
//    });
//    // Works with $.get too!

        var dateFormat =  "yy-mm-dd";
        $("#datepicker").datepicker({
            minDate: 0,
            dateFormat:dateFormat
        });

   $("#datePick").datepicker();

});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.rooms-nav li a, .link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $("#roomBooking").submit(function(){
        $("#arrival_date").val($("#checkin").val());
        $("#departure_date").val($("#checkout").val());

    });
   setTimeout(function(){
   var hash = window.location.hash;
   if(hash != ""){
     if($(hash).offset()){
       $(document).scrollTop( $(hash).offset().top );
     }

   }
},2000);
});



 $(document).ready(function() {
     setTimeout(function(){

       $(" #home-carousel-2").owlCarousel({



      items:2,
      nav: true,
      navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
      smartSpeed: 200,
      slideSpeed : 500,
      margin:20,
      responsiveRefreshRate : 100,
      responsive : {
            // breakpoint from 0 up
            0 : {
                 items:1
            },
            // breakpoint from 480 up
            600 : {
                items:2
            },
            // breakpoint from 768 up
            900 : {
                items:2
            },
            1600 : {
                items:2
            }
        }


       });
       setTimeout(function(){
             $(".price-wrap1").css('display' ,'block');
          },2000);
     }, 2000);
   });

 //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
 autoPlayYouTubeModal();
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }
