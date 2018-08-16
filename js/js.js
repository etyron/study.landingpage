$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap'),
        $sidebarArrow = $('.sidebar-menu-arrow');

    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });

    $sidebarArrow.click(function() {
        $(this).next().slideToggle(300);
    });

    $('section').on('click', function () {
        if($('.menu-wrap').hasClass('menu-show')){
            $('.menu-wrap').removeClass('menu-show');
            $('.toggle-button').removeClass('button-open');
        }
    });

    $(window).scroll(function(){
        var $sections = $('section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height() + 100;
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');

            }
        })
    });

    $('.btn-more_1').click(function(){
        var hBlock = $('.box-more_1');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn-more_2').click(function(){
        var hBlock = $('.box-more_2');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn-more_3').click(function(){
        var hBlock = $('.box-more_3');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn-more_4').click(function(){
        var hBlock = $('.box-more_4');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $('.btn-more_5').click(function(){
        var hBlock = $('.box-more_5');
        $(this).text(hBlock.is(':visible') ? 'подробнее' : 'скрыть');
        hBlock.slideToggle('slow');
        $(this).toggleClass('up');
    });

    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $("#header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 1500);
    });
    $("#mob__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top + 10}, 1500);
    });

});