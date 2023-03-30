$(document).ready(function(){     
    $('.menu_toggle').click(function(){
      $('.overlay').fadeIn();
      $('.overlay').addClass('on');
      $(this).toggleClass('on');
      
      if ($('.menu_toggle').hasClass("on") === true) {
      $(this).siblings('.overlay').addClass('on');
      } else {
        $(this).siblings('.overlay').removeClass('on');
        $('.overlay').fadeOut('fast');  
      }
    return false;
    });
    
   
    $(document).bind('click', function(e){
    if($('.overlay').is(e.target)){
        $('.menu_toggle').removeClass('on');
        $('.overlay.on').removeClass('on');
        $('.overlay').fadeOut('fast');  
    }
    });
    
    $('[href="javascript:void(0)"]').click(function(){
        alert("준비중입니다.");
    }); 

    $('.btn_top').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
        });
    
    $(window).scroll(function(){
      let didScroll = $(window).scrollTop();  
        let activeScroll = $('.main').outerHeight() + 1000;
        
        if( didScroll > activeScroll ){
        $('.btn_top').addClass('on');
        } else{
        $('.btn_top').removeClass('on');
        }
        console.log(didScroll);
        //console.log(activeScroll);
      });
    });