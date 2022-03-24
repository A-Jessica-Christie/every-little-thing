$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

$(document).ready(function(){
    $('.mailbox').click(function(){
        $('.mailbox-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });
});

$('.sidebar-button').click(function(){
    $('.sidebar-button').toggleClass("nav-open");
    $('.sidebar-menu').slideToggle(10, function(){});
});

$(document).ready(function(){
    $('.toggle-container').click(function(){
        $('section').toggleClass('dark-mode-active');
        $('.attribute').toggleClass('dark-mode-active');
        $('.dm-style').toggleClass('dark-mode-active');
        $(this).toggleClass('dark-mode-active');  
      });
});