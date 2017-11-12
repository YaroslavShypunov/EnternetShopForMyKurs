$(function(){
    var login = null;
    var password = null;
    $('nav  li').click(function (){
        $('nav li').removeClass('menuHover');
        $(this).addClass('menuHover');
    });
    $('#enter').click(function(){
        $('#using').css('display','block');
    })
    $('#username').keyup(function(){
         login = $('#username').val();

    if( login !== 'Admin'){
        $('#username').css('background','red');
    }else{
        $('#username').css('background','lightgreen');
    }
        });
    $('#password').keyup(function (){
         password = $('#password').val();
        if(password !== '123'){
            $('#password').css('background','red');
        }else{
            $('#password').css('background','lightgreen');
        }
    });
    $('#cancel').on('click',function(){
        $('#using').hide();
    });
    $('#ok').on('click',function(){
        if(login === "Admin" && password === "123"){
            $('#using > p').text('Введите Логин и Пароль');
           $('#using').hide();
            $('#enter').css('width','400px');
            $('#enter').text('Добро пожаловать, Admin');
            $('#basket').css('margin-left','280px');
        }else{
            $('#using > p').text('Не верный логин или пароль.');
            $('#using > p').css('color','red');
        }
    });
    $('ul img').on('click',function(){
                $('ul img').attr('src','button/button.png');
        $(this).attr('src','button/buttonClick.png');
            if($('ul img').click() == $('ul img').eq(0)){
                
            }
    });
})