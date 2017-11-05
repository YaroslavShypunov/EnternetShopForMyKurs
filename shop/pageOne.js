$(function(){
    $('nav  li').click(function (){
        $('nav li').removeClass('menuHover');
        $(this).addClass('menuHover');
    });
    $('#enter').click(function(){
        $('#using').css('display','block');
    })
})