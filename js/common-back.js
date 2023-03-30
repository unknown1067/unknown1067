$(document).ready(function(){
    var side_left = $(window).width() / 2 + $('.header_wrap').width() / 2 + 30;
    $('.side_right').css({left: side_left}).show();
    $(window).resize(function(){
        var side_left = $(window).width() / 2 + $('.header_wrap').width() / 2 + 30;
        $('.side_right').css({left: side_left});
    });
    $('.ico_box4>a').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
    $(window).bind('scroll', function(){
        if($(this).scrollTop() > 496){
            $('.side_right').addClass('side_hold');
        }else{
            $('.side_right').removeClass('side_hold');
        };
    });

    /*이거이거이거$('.toggle_btn').bind("click", function(e){
        e.preventDefault();
        $('.wrapper').addClass('on');
        $('.overlay_inner').addClass('on');
        $(this).toggleClass('on');
    });
    $(document).bind('click', function(e){
        if($('.wrapper').is(e.target) || $('.toggle_btn.on').is(e.target)){
            $('.wrapper').removeClass('on');
            $('.overlay_inner').removeClass('on');
        }
    });*/
    $('.toggle_btn').bind("click", function(e){
        e.preventDefault();
        $('.wrapper').toggleClass('on');
        $('.overlay_inner').toggleClass('on');
        $(this).toggleClass('on');
    });
    $(document).bind('click', function(e){
        if($('.wrapper').is(e.target)){
            $('.wrapper.on').removeClass('on')
            $('.overlay_inner.on').removeClass('on')
            $('.toggle_btn.on').removeClass('on')
        }
    });

});
