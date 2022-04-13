/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.js', function() {
//   console.log('callback - particles.js config loaded');
// });
$(function() {
  $('#pvw1 a').miniPreview({ prefetch: 'pageload' });
  $('#pvw2 a').miniPreview({ prefetch: 'parenthover' });
  $('#pvw3 a').miniPreview({ prefetch: 'none' });
});

$('.hamburger-button').click(function(){
  $('.mobile-menu').fadeToggle(100);
  $(this).toggleClass('active');
});

$('.sidebar-button').click(function(){
  $('.sidebar-button').toggleClass("nav-open");
  $('.sidebar-menu').slideToggle(10, function(){});
});

$(document).ready(function(){
  AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: false // whether animation should happen only once - while scrolling down
  });
  
  $('.mailbox').click(function(){
    $('.mailbox-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });

  $('.xmark').click(function(){
    $(this).toggleClass('active');
    $('.mailbox-menu').fadeOut(500);
  });

  $('.toggle-container').click(function(){
    $('section').toggleClass('dark-mode-active');
    $('.attribute').toggleClass('dark-mode-active');
    $('hr').toggleClass('dark-mode-active');
    $('.dm-style').toggleClass('dark-mode-active');
    $(this).toggleClass('dark-mode-active');  
    });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    asNavFor: '.slider-nav'
  });
    
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    accessibility: true,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 750,
          arrows: true,
          infinite: true,
          accessibility: true
        }
      }
    ]
  });

  // Hide Content | Pricing Menu
  // $('.pricing-detail-1').each(function(){
  //   $(this).hide();
  // });

  // Show Content with Click | Pricing Menu
  $('.pricing-1').click(function(){
    $('.pricing-detail-1').fadeToggle(100);
    $(this).toggleClass('active');
  });
  $('.pricing-2').click(function(){
    $('.pricing-detail-2').fadeToggle(100);
    $(this).toggleClass('active');
  });
  $('.pricing-3').click(function(){
    $('.pricing-detail-3').fadeToggle(100);
    $(this).toggleClass('active');
  });

  $('.close-1').click(function(){
    $(this).toggleClass('active');
    $('.pricing-detail-1').hide();
  });
  $('.close-2').click(function(){
    $(this).toggleClass('active');
    $('.pricing-detail-2').hide();
  });
  $('.close-3').click(function(){
    $(this).toggleClass('active');
    $('.pricing-detail-3').hide();
  });
 
  // Show & Hide Content with Hover | Projects
  $('.project-item').mouseenter(function(){
    $('.caption-content').show("slow");
  });
  $('.project-item').mouseleave(function(){
    $('.caption-content').hide("slow");
  });

  // Contact Form
  if (window.location.href.indexOf("submission-received") > -1) {
    $('#submission-received').show();
  }

  $('.confirm').click(function(){
    $('#submission-received').hide();
  });

});