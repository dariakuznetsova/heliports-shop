$(window).load(function() {
   /* var $page = $('body');

    Component.Navigation.init($page, {});

    if ($page.attr('data-controller') && $page.attr('data-controller').length > 0) {
        var page_controller = $page.attr('data-controller');
        if (Controller[page_controller] !== undefined) {
            Controller[page_controller].init($page);
        }
    }*/
    $('.hide-nav').prev().removeClass('link').removeClass('border').addClass('no-link').addClass('select');
    $('.hide-nav').parent().addClass('has-nav');
    // $('.main-menu,' +
    //     '.top-nav,' +
    //     '.col-left,' +
    //     '.col-right, ' +
    //     'footer, ' +
    //     '.animate-fadeIn,' +
    //     '.filter-line,' +
    //     '.photo-block-big,' +
    //     '.animate-scale').addClass('active');
    $('.animate-fadeIn').addClass('relative');
    $('.filter-line a').click(function(){
        if(!$(this).hasClass('active')){
            $('.filter-line a').removeClass('active');
            $(this).addClass('active');
        }
    });
    $('.photo-nav-item image').click(function(){
        if($(this).attr("data-class-active") !== 'active'){
            $('.photo-nav-item image').attr("data-class-active","");
            $(this).attr("data-class-active","active");
        }
    });
    var firstLink = $('.side-bar.fixed-nav a')[0];
    $(firstLink).addClass('current');
    $('.side-bar.fixed-nav a').on('click',function(e){
        if($(this).hasClass('no-link')){
            e.preventDefault();
            e.stopPropagation();
            var linkItem = $(this);
            if(!$(this).hasClass('current')){
                $('.side-bar.fixed-nav a').not(this).removeClass('current');
                $(this).addClass('current');
                var linkHref = linkItem.attr('href');
                var linkTarget = $(linkHref);
                var linkTargetPos = linkTarget.offset().top - 50;
                var windowPos = $(window).scrollTop();
                var animDuration = linkTargetPos - windowPos;
                if(animDuration < 0){
                    animDuration = animDuration*-1
                }
                if(linkTarget.length){
                    $('html, body').stop(true).animate({scrollTop:linkTargetPos},animDuration,function(){
                        $(window).trigger('scroll');
                    });
                }
            }
        }
    });

    $('.an').removeClass('an').addClass('ani');

    $("select").not('.nosod').selectOrDie();
    $('.slider-container').slick({
        arrows:true,
        dots:false,
        slidesToShow: 1
    });
    $('.heli-slider').slick({
        arrows:true,
        fade: true,
        dots:false,
        slidesToShow: 1
    });

    $('.news-slider').slick({
        arrows:true,
        // fade: true,
        dots:false,
        slidesToShow: 3
    });

});



$(document).ready(function(){


    $('.produces-logos').slick({
        infinite: true,
        slidesToShow:   4,
        slidesToScroll: 1,
        arrows:         true
    });

    $('.interactive-menu-slick').slick({
        centerMode:true,
        //infinite: true,
        variableWidth: true,
        slidesToShow:   6,
        slidesToScroll: 1,
        asNavFor: ".main-slider-list",
        arrows:         false,
        focusOnSelect: true,
    });


    $('.main-slider-list').slick({
        infinite: true,
        slidesToShow:   1,
        asNavFor: '.interactive-menu-slick',
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:         true
    })

$('.inter_link').on('click', function(e) {
    e.preventDefault();
    $('.inter_link').not($(this)).parent().removeClass('slick-center1');
    $(this).parent().addClass('slick-center1');
});





});

//модальное окно в видео
(function () {
    $('.video_link').bind('click', function (e) {
        e.preventDefault();
        $('.video-modal').bPopup();
    });
    $('.video_link-main').bind('click', function (e) {
        e.preventDefault();
        $('.video-modal-main').bPopup();
    });
}());


//Отправить заявку попап
(function () {
    $('.send_the_order').bind('click', function (e) {
        e.preventDefault();
        $('.popup_business').bPopup();
    });

    $('.send_the_order2').bind('click', function (e) {
        e.preventDefault();
        $('.popup_infr-dev').bPopup();
    });

}());


//выпадающий список в верхнем меню
(function () {
    var link = $('.shop-menu__inner-link');

    link.on('click', function(e) {
        e.preventDefault();
        $(this).parent('li').addClass('in').siblings().removeClass('in');
    });

    $(document).click(function (event) {
        var container = $(".shop-menu");

        if (container.has(event.target).length === 0){
            link.parent('li').removeClass('in');
        };
    });

}());


//переключение городов
(function () {
    var link = $('.switch_city'),
        city_block = $('.city-block'),
        li = $('.city-switch-info'),
        sidebar_link = $('.switch-sidebar-link'),
        services_block = $('.switch_services'),
        li2 = sidebar_link.parent('li'),
        your_city = $('.your_city');

    link.on('click', function() {
        var link_index = $(this).index();

        $('.search-location').hide();
        link.not($(this)).removeClass('cities-list-active');
        $(this).addClass('cities-list-active');

        city_block.each(function () {
            if ($(this).index() == link_index) {
                city_block.not($(this)).fadeOut(200);
                $(this).fadeIn(200);
            };
        });
        li.each(function () {
            if ($(this).index() == link_index) {
                li.not($(this)).fadeOut(200);
                $(this).fadeIn(200);
            };
        });
    });
    sidebar_link.on('click', function(e) {
        e.preventDefault();
        var link_index = $(this).parent('li').index();

        sidebar_link.not($(this)).removeClass('active-sidebar-link');
        $(this).addClass('active-sidebar-link');

        services_block.each(function () {
            if ($(this).index() == link_index) {
                services_block.not($(this)).fadeOut(200);
                $(this).fadeIn(200);
            };
        });
        services_block.each(function () {
            if ($(this).index() == link_index) {
                services_block.not($(this)).fadeOut(200);
                $(this).fadeIn(200);
            };
        });
    });

    your_city.on('click', function(e) {
        $('.search-location').show();
    })

}());



(function () {
    var like = $('.photogallery-wrap').find('.like');

    like.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('like-icon-bg');
    });

}());



//Popup Order the call
(function () {
    var order_call = $('.phone').find('.yellow');

    order_call.on('click', function(e) {
        e.preventDefault();
        $('.popup-window').bPopup();
    })

}());



//Очистка фильтра в aside
(function () {
    var clean_filter = $('.clean_all_filters'),
        form = $('.aside-block').find('.checked_elem');

    clean_filter.on('click', function(e) {
        e.preventDefault();
        form.removeAttr('checked');
    });
}());



//gallery
(function () {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        default_width: 500,
        horizontal_padding: 0
    });
}());


//галерея в Business
//(function () {
//    var prev_click = $('.prev'),
//        next_click = $('.next'),
//        img        = $('.img-gallery');
//
//    next_click.on('click', function (e) {
//        e.preventDefault();
//        animate_next();
//    });
//
//    prev_click.on('click', function (e) {
//        e.preventDefault();
//        animate_prev();
//    });
//
//    function animate_next() {
//        var length = img.length - 1;
//
//        img.each(function (index) {
//
//            if ($(this).hasClass('active_img') && index != length) {
//                $(this).removeClass('active_img').stop(true,true).fadeOut(500).next(img).addClass('active_img').stop(true,true).fadeIn(500);
//                //pagination();
//                return false;
//            } else if (index == length) {
//                $(this).removeClass('active_img').stop(true,true).fadeOut(500);
//                img.eq(0).addClass('active_img').stop(true,true).fadeIn(500);
//                //pagination();
//                return false;
//            };
//        });
//    };
//
//    function animate_prev() {
//
//        img.each(function (index) {
//            if ($(this).hasClass('active_img') && index != 0) {
//                $(this).removeClass('active_img').stop(true,true).fadeOut(500).prev(img).addClass('active_img').stop(true,true).fadeIn(500);
//                //pagination();
//                return false;
//            } else if (img.eq(0).hasClass('active_img')) {
//                $(this).removeClass('active_img').stop(true,true).fadeOut(500);
//                img.last().addClass('active_img').stop(true,true).fadeIn(500);
//                //pagination();
//                return false;
//            };
//        });
//    }
//
//}());


$(document).ready(function() {
    var prev_click = $('.prev'),
        next_click = $('.next'),
        img        = $('.img-gallery');

    next_click.on('click', function (e) {
        e.preventDefault();
        animate_next();
    });

    prev_click.on('click', function (e) {
        e.preventDefault();
        animate_prev();
    });

    function animate_next() {
        var length = img.length - 1;

        img.each(function (index) {

            if ($(this).hasClass('active_img') && index != length) {
                $(this).removeClass('active_img').stop(true,true).fadeOut(500).next(img).addClass('active_img').stop(true,true).fadeIn(500);
                //pagination();
                return false;
            } else if (index == length) {
                $(this).removeClass('active_img').stop(true,true).fadeOut(500);
                img.eq(0).addClass('active_img').stop(true,true).fadeIn(500);
                //pagination();
                return false;
            };
        });
    };

    function animate_prev() {

        img.each(function (index) {
            if ($(this).hasClass('active_img') && index != 0) {
                $(this).removeClass('active_img').stop(true,true).fadeOut(500).prev(img).addClass('active_img').stop(true,true).fadeIn(500);
                //pagination();
                return false;
            } else if (img.eq(0).hasClass('active_img')) {
                $(this).removeClass('active_img').stop(true,true).fadeOut(500);
                img.last().addClass('active_img').stop(true,true).fadeIn(500);
                //pagination();
                return false;
            };
        });
    }
});


//ИНтерактивное меню
(function () {
    var inter_link = $('.inter_link');
}());

(function () {
    var ex = $('.ex'),
        int = $('.int'),
        ex_img = $('.ex-img'),
        int_img = $('.int-img');

    ex.on('click', function(e) {
        e.preventDefault();
        int.removeClass('heli_active_link');
        $(this).addClass('heli_active_link');
        int_img.fadeOut(200);
        ex_img.fadeIn(300);
    });
    int.on('click', function(e) {
        e.preventDefault();
        ex.removeClass('heli_active_link');
        $(this).addClass('heli_active_link');
        ex_img.fadeOut(200);
        int_img.fadeIn(300);
    });

}());




//Смена картинок в слайдере shop-kartochka
console.log('4');

/*(function () {
    function windowSize(){
        if($(window).width() > '992') {
            console.log('4444');
            $('.wrap_loupe').addClass('loupe_show');
        }else{
            $('.wrap_loupe').removeClass('loupe_show');
        };
    };

    windowSize();
}());*/





(function () {
    var small_pic = $('.small_pic').find('img'),
        small_pic_first = $('.first_pic_to_show').attr('src'),
        link1 = $('.wrap_loupe');

    link1.attr('href', small_pic_first);

    function windowSize(){
        if($(window).width() > '768') {
            $('.brand-logos').addClass('brand-logos-sliderOn');

            $('.wrap_loupe').loupe({
                width: 430,
                height: 430,
                loupe: 'pic_loupe'
            });
            $('.bg-video').attr('autoplay','');
        }else {
            $('.brand-logos').removeClass('brand-logos-sliderOn');
            $('.bg-video').removeAttr('autoplay');
        }
    };

    windowSize();

    $( window ).resize(function() {
        windowSize();
    });

    $('.wrap_loupe').on('click', function(e) {
        e.preventDefault();
    });

    small_pic.on('click', function() {

        var item1 = $('.big_pic').find('img'),
            item2 = $(this).attr('src'),
            img_loupe = $('.pic_loupe').find('img');

        $(link1).attr('href', item2);
        $(img_loupe).attr('src',item2);


        $(item1).fadeOut(200, function () {
            $(item1).attr('src', item2).fadeIn(200);
        });

    });

}());





(function () {
    var active_color = $('.colors-list').find('a');

    active_color.on('click', function(e) {
        e.preventDefault();

        active_color.not($(this)).parent('li').removeClass('active_color');
        $(this).parent('li').addClass('active_color');
    });

}());


//Лупа

//$('.wrap_loupe').loupe({
//    width: 430,
//    height: 430,
//    loupe: 'pic_loupe'
//});


(function () {
    var link = $('.parts').find('.after-elem'),
        link_last = $('.parts').find('.shop-menu').find('>ul').find('>li:last-child').find('a');

    link.on('click', function() {
        if($(this).parent('li').hasClass('in')){
            link_last.addClass('link_last_border-bottom');
        }else{
            link_last.removeClass('link_last_border-bottom');
        };
    });
}());


//parts_kartochka - кнопка добавить/удалить из корзины
(function () {
    var add_link = $('.what_else_to_buy').find('.plus'),
        delete_from_basket = $('.delete_from_basket');

    add_link.on('click', function(e) {
        e.preventDefault();
        $(this).addClass('show-hide');
        $(this).next().removeClass('show-hide');
    });

    delete_from_basket.on('click', function(e) {
        e.preventDefault();
        $(this).parent('.wrap').addClass('show-hide');
        $(this).parent('.wrap').prev().removeClass('show-hide');
    });

}());



(function() {
    $('.shop-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots:true,
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}());


(function() {
        $('.brand-logos-sliderOn').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true
        });

}());



(function() {

    var changePlace = function() {
        var $main_container = $('.container:nth-of-type(2)'),
            $cnt = $('.zakazy'),
            $cnt2 = $('.oformlenie_zakaza'),
            $paramLine = $cnt2.find('tr');

        if ($main_container.hasClass('mobilemode')) {

            if ($(window).width() >= 769) {

                $main_container.removeClass('mobilemode');

                $paramLine.each(function() {
                    var $self =  $(this);
                    var $close = $self.find('.close');
                    var $price = $self.find('.price');

                    $price.after($close);
                });
            }

        } else if ($(window).width() < 769) {

            $main_container.addClass('mobilemode');

            $paramLine.each(function() {
                var $self =  $(this);
                var $quantity = $self.find('.quantity');
                var $close = $quantity.siblings('.close');
                var like = $self.find('.like');

                $quantity.after($close);
            });

        }

    };

    changePlace();

    $(window).resize(function() {
        changePlace();
    });

}());




//hamburger
(function() {
    var logo_shop = $('.logo-shop');
    logo_shop.before('<div class="hamburger-menu"><button class="hamburger hamburger--spin" type="button"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button></div>');
}());

(function() {
    var burger_button = $('.hamburger'),
        inner_menu = $('.shop-menu'),
        hamburger_menu = $('.hamburger-menu');

    burger_button.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        if(hamburger_menu.hasClass('hamburger-menu-show')) {
            hamburger_menu.removeClass('hamburger-menu-show')
            hamburger_menu.find('nav, ul, .logo-shop, .mini-menu').remove();
        }else if(!hamburger_menu.hasClass('hamburger-menu-show')) {
            hamburger_menu.addClass('hamburger-menu-show');
            $('.logo-shop').clone().appendTo(hamburger_menu);
            inner_menu.clone().appendTo(hamburger_menu);
            $('.mini-menu').clone().appendTo(hamburger_menu);

        };

    });
}());



//like button
(function() {
    var $like_link = $('.detailed-info').find('.price').find('a');
    var $like_link2 = $('.basket-shop').find('.like').find('a');

    $like_link.on('click', function(e) {
        var $this = $(this);

        e.preventDefault();
        if($this.hasClass('link_like')) {
            $this.removeClass('link_like');
            $this.children('img').attr('src','img/shop-favorite.png');
        }else{
            $this.addClass('link_like');
            $this.children('img').attr('src','img/shop-favorite-hover.png');
        };
    });

    $like_link2.on('click', function(e) {
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('link_like_basket');
    });

}());




//КАРТЫ

ymaps.ready(function() {
    //init(55.751574, 37.573856);
    //init_contacts(55.8, 37.8);
});

//function init (a,b) {
//    var myMap = new ymaps.Map("map", {
//            //center: [55.8, 37.8],
//            center: [a, b],
//            zoom: 10
//        }, {
//            searchControlProvider: 'yandex#search'
//        }),
//
//        myGeoObject = new ymaps.GeoObject({
//            draggable: true
//        });
//
//    myMap.geoObjects
//        .add(myGeoObject)
//        .add(new ymaps.Placemark([a, b], {
//        }, {
//            iconLayout: 'default#image',
//            iconImageSize: [28, 37],
//            iconImageHref: '../img/heli-icon-red.png'
//        }))
//}

//function init_contacts (c,d) {
//    var myMap2 = new ymaps.Map("map_contacts", {
//            //center: [55.8, 37.8],
//            center: [c, d],
//            zoom: 10
//        }, {
//            searchControlProvider: 'yandex#search'
//        }),
//
//        myGeoObject2 = new ymaps.GeoObject({
//            draggable: true
//        });
//
//    myMap2.geoObjects
//        .add(myGeoObject2)
//        .add(new ymaps.Placemark([c, d], {
//        }, {
//            iconLayout: 'default#image',
//            iconImageSize: [28, 37],
//            iconImageHref: '../img/heli-icon-red.png'
//        }))
//}



if($('.heli-russia').length==0) {
    var slider = document.getElementById('priceslider');

    noUiSlider.create(slider, {
        start: [2000, 80000],
        connect: true,
        step: 1,
        format: {
            to: function ( value ) {
                return parseInt(value);
            },
            from: function ( value ) {
                return parseInt(value);
            }
        },
        range: {
            'min': 1000,
            'max': 100000
        }
    });

    //var inputFormat = document.getElementById('input-format');

    slider.noUiSlider.on('update', function( values, handle ) {
        // inputFormat.value = values[handle];
        $('.lower_price').val(values[0]);
        $('.upper_price').val(values[1]);
    });


    console.log($('.prices input'));
    $('.prices input').on('change', function(){
        slider.noUiSlider.set([$('.lower_price').val(),$('.upper_price').val()]);
    });
};












