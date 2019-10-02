// $('.menu_toggle').click(function() {
//     $('rnb_mobile ul').toggleClass()('rnb_mobile ul--open');
                        
// })

$('.menu_toggle').click(function() {
    $('.plz').toggleClass('plz--open', 500);
    $(this).toggleClass('open');
    })
                    


$(document).ready(function(){
    $('.system_pc .menu_container li a:first').addClass('active');
    $('.system_pc .img_container  div').hide();
    $('.system_pc .img_container  div:first').show();

    $('.menu_container li a').click(function(){
        $('.system_pc .menu_container li a').removeClass('active');
        $(this).addClass('active');
        $('.system_pc img_container div').hide();
        // $($(this).attr('href')).show();
		// return false;
        
        var activeTab = $(this).attr('href');
        $('activeTab').show();
        return false;
    });

    
 });

 $(document).ready(function(){
    $('.system_mobile .menu_container li a:first').addClass('active');
    $('.system_mobile .img_container  div').hide();
    $('.system_mobile .img_container  div:first').show();

    $('.system_mobile .menu_container li a').click(function(){
        $('.system_mobile .menu_container li a').removeClass('active');
        $(this).addClass('active');
        $('.system_mobile img_container div').hide();
        // $($(this).attr('href')).show();
		// return false;
        
        var activeTab = $(this).attr('href');
        $('activeTab').show();
        return false;
    });

    
 });


$(document).ready(function(){
    $('.sermenu_container li a:first').addClass('active');
    $('.article_container div img').hide();
    $('.article_container div img:first').show();


    $('.sermenu_container li a').click(function(){
        $('.sermenu_container li a').removeClass('active');
        $(this).addClass('active');
        $('article_container div img').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });

    
});

$(document).ready(function(){
    $('.sermenu_container li a:first').addClass('active');
    $('.article_container_mobile div img').hide();
    $('.article_container_mobile div img:first').show();


    $('.sermenu_container li a').click(function(){
        $('.sermenu_container li a').removeClass('active');
        $(this).addClass('active');
        $('article_container_mobile div img').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });

    
});





// $(function() {
//     $('ul.tab li').click(function() {
//         var activeTab = $(this).attr('data-tab');
//         $('ul.tab li').removeClass('current');
//         $('.img_container').removeClass('current');
//         $(this).addClass('current');
//         $('#' + activeTab).addClass('current');
//     })
// });


