$(document).ready(function(){
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });
});

$(document).ready(function(){
    $('.mailbox').click(function(){
        $('.mailbox-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });
});

$(document).ready(function(){
    $('.sidebar-button').click(function(){
        $('.sidebar-button').toggleClass("nav-open");
        $('.sidebar-menu').slideToggle(10, function(){});
    });
});