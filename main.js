$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

$('.mailbox').click(function(){
    $('.mailbox-menu').fadeToggle(100);
    $(this).toggleClass('active');
})