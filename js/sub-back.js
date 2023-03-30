$(document).ready(function(){
    $('.search_area ul li:first-child').addClass('on');
    $('.search_area ul li > a').click(function(e){
        e.preventDefault();
        var prt = $(this).parent();
        var prt2 = $(this).parent().parent();
        var num = prt.index();
        prt2.find('li').removeClass('on');
        prt2.find('li').eq(num).addClass('on');
        $('.main_wrap>.search_tab:first-child').show();
        $('.main_wrap>.search_tab').hide();
        $('.main_wrap>.search_tab').eq(num).show();
    });
    
    $('.guide_box li:first-child').addClass('on');
    $('.guide_list>li>a').click(function(e){
        e.preventDefault();
        var prt = $(this).parent();
        var prt2 = $(this).parent().parent();
        var num = prt.index();
        //console.log(num);
        prt2.find('li').removeClass('on');
        prt2.find('li').eq(num).addClass('on');
        $('.tabmenu_wrap>.tab_container').hide();
        $('.tabmenu_wrap>.tab_container').eq(num).show();
    });

    $('.view_box>ul>li').click(function(){
        $(this).addClass('on');
    });
});
