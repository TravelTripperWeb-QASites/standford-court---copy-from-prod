$(document).ready(function() {
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

  //offers info
  //divide in 2 column
    $('.offers-card .info h2').each( function( index ) {
    var parts = $.trim($(this).text()).split(" ");
    var $new_form_heading ="";
    for(i = 0; i < parts.length; i++){ 
        if(parts[i].length <= 2) {
          $new_form_heading +=  parts[i] +' ';
        }else{
           if(i == 0){
            $new_form_heading +=  parts[i]+' ';
          }else{

           $new_form_heading +=  "<br />"+ parts[i]+' ';
          }
        }
       }
           $(this).replaceWith('<h2>'+ $new_form_heading +'</h2>');
    });
    
    /// decrease size for minimal devices
     setTimeout(function(){ 
       var largerFont = (($('.main-image img, #roomsSlider img').height()) / 4);
       $('.rate-block .title2, #roomsSlider .title2').css({'font-size':largerFont+'px', 'line-height': largerFont+'px'});
     },300);
   
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
 
   

}
window.onload = init();

<<<<<<< HEAD
//datepicker room details

$(function() {  
   //get rates
    $.ajax({
        url: 'https://rt3api-prd.ttaws.com/hotels/rate_calendar.json?hotel_id=MIAWPH&portal_id=wphsouthbeach&locale=en&currency=USD&ip_address=124.123.205.34&start_date=2017-02-20&end_date=2017-02-27&adults_0=1&children_0=0&rooms=1',
        type: 'GET',
        success: function(res) {
        console.log(res); 
        }
    }); 

    // Works with $.get too!
       
      var dayrates = [{'2017-02-12':100, '2017-02-20':150, '2017-02-13':120, '2017-02-14':200, '2017-02-16':100, '2017-02-17':300, '2017-02-18':140, '2017-02-19':320}];

      $("#datepicker").datepicker({
        minDate: 0, 
        beforeShowDay: function(date) {
          var selectable = true; 
          var classname = "";
          var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
          var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val()); 
       //console.log(date.getFullYear()+"-"+((date.getMonth() + 1) < 10 ? '0'+ (date.getMonth()+1) : (date.getMonth() + 1))+"-"+ (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()));
          var title =  dayrates[0][date.getFullYear()+"-"+((date.getMonth() + 1) < 10 ? '0'+ (date.getMonth()+1) : (date.getMonth() + 1))+"-"+ (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())];
         if(title){
           return [selectable, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight"+ classname : classname,  "\u20AC" +title];
        }else{
         return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
       }

       }, 
       onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
                var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

                
                if (!date1 || date2) {
          $("#input1").val(dateText);
          $("#input2").val("");
                    $(this).datepicker();
                } else if( selectedDate < date1 ) {
                    $("#input2").val( $("#input1").val() );
                    $("#input1").val( dateText );
                    $(this).datepicker();
                } else {
          $("#input2").val(dateText);
                    $(this).datepicker();
        }
      } 
      });
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
}); 
