$(document).ready(function(){     
    let mainScrHeight = $('main .con_wrap').outerHeight();
    $('main>div').css({height: mainScrHeight});   
 
    $(window).scroll(function(){
      let didScroll = $(window).scrollTop();
      let conWrap_top = $('.con_wrap').scrollTop();
      // let mainHeight = $('.full_bg').offset().top + 500;

      if( didScroll > 100 ){
        $('header').addClass('on');
        $('.full_bg .text_box').removeClass('on');
        $('.fill_change').css('background', 'rgba(0, 0, 0, .8)');
      } 
      else{
        $('header').removeClass('on');
        $('.full_bg .text_box').addClass('on');
        $('.fill_change').css('background', 'rgba(0, 0, 0, 0)');
      }

      });
   
     
  });