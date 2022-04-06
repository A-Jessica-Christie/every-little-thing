$('.hamburger-button').click(function(){
  $('.mobile-menu').fadeToggle(100);
  $(this).toggleClass('active');
});

AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: false // whether animation should happen only once - while scrolling down
});

$('.sidebar-button').click(function(){
  $('.sidebar-button').toggleClass("nav-open");
  $('.sidebar-menu').slideToggle(10, function(){});
});

$(document).ready(function(){
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
          width: 576
        }
      }
    ]
  });

});