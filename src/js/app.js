/* Plugins */

//= ../../node_modules/jquery/dist/jquery.min.js
////= ../../node_modules/popper.js/dist/umd/popper.min.js
////= ../../node_modules/bootstrap/dist/js/bootstrap.min.js
////= ../../node_modules/owl.carousel/dist/owl.carousel.min.js
//= ../../node_modules/slick-slider/slick/slick.min.js
////code.jquery.com/jquery-1.11.0.min.js
////code.jquery.com/jquery-migrate-1.2.1.min.js 

$(function(){
    
    $('.js-hero-slider').slick({
        dots: true,
        dotsClass: "slick-dots",
        autoplay: true,
        autoplaySpeed: 6000,  
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        
    });
    
    
       
    $(document).on("click", ".naccs .menu div", function() {
        var numberIndex = $(this).index();

        if (!$(this).is("active")) {
            $(".naccs .menu div").removeClass("active");
            $(".naccs ul li").removeClass("active");

            $(this).addClass("active");
            $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

            var listItemHeight = $(".naccs ul")
                .find("li:eq(" + numberIndex + ")")
                .innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
        }
    });

    $('.js-ann-slider').slick({
        dots: true,
        dotsClass: "slick-dots",
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<button type="button" class="slick-next"><span>›</span></button>',
        prevArrow: '<button type="button" class="slick-prev"><span>‹</span></button>',
        
    });

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });

    var chbox = document.querySelector('.menu-icon__cheeckbox');

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('menu_active');
            chbox.checked = 0;
        });
    });
});
