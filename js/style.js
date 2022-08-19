$(function () {
    //헤더메뉴
    //스크롤 했을 때 헤더메뉴 상단고정

    var menu_offset = $(".head01").offset();

    $(window).scroll(function () {

        if ($(document).scrollTop() > menu_offset.top) {

            $(".head02").addClass("menu-fixed");

        } else {

            $(".head02").removeClass("menu-fixed");

        }

    });


    //올리는 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $(".top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });



    //메뉴클릭시 

    $("#hamburger").on("click", function () {

        $(".header_menu").stop(500).slideToggle();

    });


    //서브페이지 어트랙션
    //[키워드 검색]

    $("#keyword").keyup(function () {

        var word = $(this).val();
        $(".ATcon_03 > .attraction").hide();
        var temp = $(".ATcon_03 > .attraction > .text > h1:contains('" + word + "')");
        var temp2 = $(".ATcon_03 > .attraction > .text > small:contains('" + word + "')");
        $(temp).parent().parent().show();
        $(temp2).parent().parent().show();


        if (temp.is(':visible') == false) {

            $(".empty").show();

        } else {
            $(".empty").hide();

        }
    });

    //[조건 검색]
    //(위치)
    $('#Attraction').change(function () {
        var state = $('#Attraction option:selected').val();
        if (state == 'FantasyWorld') {

            $('.fantasy').show(function(){
                
            });
            $('.fantasy > .text').show();
            $('.dynamic').hide();
            $('.adventure').hide();
            $('.magic').hide();
            $('.skygarden').hide();

        } else if (state == 'DynamicWorld') {

            $('.fantasy').hide();
            $('.dynamic').show();
            $('.dynamic > .text').show();
            $('.adventure').hide();
            $('.magic').hide();
            $('.skygarden').hide();

        } else if (state == 'AdventureWorld') {

            $('.fantasy').hide();
            $('.dynamic').hide();
            $('.adventure').show();
            $('.adventure > .text').show();
            $('.magic').hide();
            $('.skygarden').hide();

        } else if (state == 'MagicWorld') {

            $('.fantasy').hide();
            $('.dynamic').hide();
            $('.adventure').hide();
            $('.magic').show();
            $('.magic > .text').show();
            $('.skygarden').hide();

        } else if (state == '83TowelSkyGarden') {

            $('.fantasy').hide();
            $('.dynamic').hide();
            $('.adventure').hide();
            $('.magic').hide();
            $('.skygarden').show();
            $('.skygarden > .text').show();

        } else {
            $('.fantasy').show();
            $('.fantasy > .text').show();
            $('.dynamic').show();
            $('.dynamic > .text').show();
            $('.adventure').show();
            $('.adventure > .text').show();
            $('.magic').show();
            $('.magic > .text').show();
            $('.skygarden').show();
            $('.skygarden > .text').show();

        }
    });


    //모바일
    $(".fa-sort-down").on("click", function () {
        $(".condition").show().css({
            "display": "block"
        });
        $(".bar").show();
        $(".height").show();
        $(".fa-sort-up").show();
        $(".fa-sort-down").hide();

    });

    $(".fa-sort-up").on("click", function () {
        console.log("120");
        $(".condition").hide();
        $(".bar").hide();
        $(".height").hide();
        $(".fa-sort-up").hide();
        $(".fa-sort-down").show();

    });


});


    var $html = $("html");
    var deviceSize = {
        pc: 800,
        tablet: 600,

    };

    $(window).on("resize", function () {
        var w_size = $(window).width();
        if (w_size >= deviceSize.pc) {
            //PC일경우
            
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: true,
                autoplaySpeed: 3000,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }

            });

            //메뉴클릭시 메뉴위에 마우스 올렸을 때

            $(".hm").on("mouseover", function () {
                $(".head_menu2").stop(500).slideDown(500);
            });
            $(".hm").on("mouseleave", function () {
                $(".head_menu2").stop(500).slideUp(500);
            });
            
            //키

            var slider = document.getElementById("slider");
            var selector = document.getElementById("selector");
            var selectvalue = document.getElementById("selectvalue");

            selectvalue.innerHTML = Number(slider.value) + "cm";

            slider.oninput = function () {
                var leftpx;
                var All = $(".ATcon_03 > .attraction :contains('전체이용가능')").parent();
                var plaza = $(".ATcon_03 > .attraction :contains('Plaza')").parent();
                var limit90_110 = $(".ATcon_03 > .attraction :contains('키 90Cm 이상 110Cm 미만')").parent();
                var limit90_130 = $(".ATcon_03 > .attraction :contains('키 90Cm 이상 130Cm 미만')").parent();
                var limit100 = $(".ATcon_03 > .attraction :contains('키 100Cm 이상')").parent();
                var limit110 = $(".ATcon_03 > .attraction :contains('키 110Cm 이상')").parent();
                var limit120 = $(".ATcon_03 > .attraction :contains('키 120Cm 이상')").parent();
                var limit125 = $(".ATcon_03 > .attraction :contains('키 125Cm 이상')").parent();
                var limit130 = $(".ATcon_03 > .attraction :contains('키 135Cm 이상')").parent();
                var limit140 = $(".ATcon_03 > .attraction :contains('키 140Cm 이상')").parent();


                switch (this.value) {
                    case "80":
                        leftpx = 3.8;
                        plaza.show();
                        limit90_130.hide();
                        limit90_110.hide();
                        limit100.hide();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "90":
                        leftpx = 11.8;
                        plaza.hide();
                        limit90_110.show();
                        limit90_130.show();
                        limit100.hide();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "100":
                        leftpx = 19.5;
                        plaza.hide();
                        limit90_110.show();
                        limit90_130.show();
                        limit100.show();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "110":
                        leftpx = 27.05;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.show();
                        limit100.show();
                        limit110.show();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "120":
                        leftpx = 35;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.show();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "130":
                        leftpx = 42.1;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.hide();
                        break;
                    case "140":
                        leftpx = 50.5;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "150":
                        leftpx = 57.9;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "160":
                        leftpx = 65.5;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "170":
                        leftpx = 73.3;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "180":
                        leftpx = 81.1;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "190":
                        leftpx = 89.00;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                }
                selectvalue.innerHTML = Number(this.value) + "cm";
                selectvalue.style.left = leftpx + "%";


            }

        } else if (w_size >= deviceSize.tablet && w_size < deviceSize.pc) {
            //테블릿경우

            //슬라이더
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: true,
                autoplaySpeed: 3000,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }

            });
            
            //키

            var slider = document.getElementById("slider");
            var selector = document.getElementById("selector");
            var selectvalue = document.getElementById("selectvalue");

            selectvalue.innerHTML = Number(slider.value) + "cm";

            slider.oninput = function () {
                var leftpx;
                var leftpx;
                var All = $(".ATcon_03 > .attraction :contains('전체이용가능')").parent();
                var plaza = $(".ATcon_03 > .attraction :contains('Plaza')").parent();
                var limit90_110 = $(".ATcon_03 > .attraction :contains('키 90Cm 이상 110Cm 미만')").parent();
                var limit90_130 = $(".ATcon_03 > .attraction :contains('키 90Cm 이상 130Cm 미만')").parent();
                var limit100 = $(".ATcon_03 > .attraction :contains('키 100Cm 이상')").parent();
                var limit110 = $(".ATcon_03 > .attraction :contains('키 110Cm 이상')").parent();
                var limit120 = $(".ATcon_03 > .attraction :contains('키 120Cm 이상')").parent();
                var limit125 = $(".ATcon_03 > .attraction :contains('키 125Cm 이상')").parent();
                var limit130 = $(".ATcon_03 > .attraction :contains('키 135Cm 이상')").parent();
                var limit140 = $(".ATcon_03 > .attraction :contains('키 140Cm 이상')").parent();
                switch (this.value) {
                    case "80":
                        leftpx = 3.8;
                        plaza.show();
                        limit90_130.hide();
                        limit90_110.hide();
                        limit100.hide();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "90":
                        leftpx = 11.8;
                        plaza.hide();
                        limit90_110.show();
                        limit90_130.show();
                        limit100.hide();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "100":
                        leftpx = 19.5;
                        plaza.hide();
                        limit90_110.show();
                        limit90_130.show();
                        limit100.show();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "110":
                        leftpx = 27.05;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.show();
                        limit100.show();
                        limit110.show();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "120":
                        leftpx = 35;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.show();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "130":
                        leftpx = 42.1;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.hide();
                        break;
                    case "140":
                        leftpx = 50.5;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "150":
                        leftpx = 57.9;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "160":
                        leftpx = 65.5;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "170":
                        leftpx = 73.3;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "180":
                        leftpx = 81.1;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "190":
                        leftpx = 89.00;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                }
                selectvalue.innerHTML = Number(this.value) + "cm";
                selectvalue.style.left = leftpx + "%";

            }


        } else {
            //모바일
            
            //슬라이더
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 2,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: true,
                autoplaySpeed: 3000,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }

            });

            //키

            var slider = document.getElementById("slider");
            var selector = document.getElementById("selector");
            var selectvalue = document.getElementById("selectvalue");

            selectvalue.innerHTML = Number(slider.value) + "cm";

            slider.oninput = function () {
                
                var leftpx;
                var All = $(".ATcon_03 > .attraction :contains('전체이용가능')").parent();
                var plaza = $(".ATcon_03 > .attraction :contains('Plaza')").parent();
                var limit90_110 = $(".ATcon_03 > .attraction :contains('키 90Cm 이상 110Cm 미만')").parent();
                var limit90_130 = $(".ATcon_03 > .attraction :contains('키 90Cm 이상 130Cm 미만')").parent();
                var limit100 = $(".ATcon_03 > .attraction :contains('키 100Cm 이상')").parent();
                var limit110 = $(".ATcon_03 > .attraction :contains('키 110Cm 이상')").parent();
                var limit120 = $(".ATcon_03 > .attraction :contains('키 120Cm 이상')").parent();
                var limit125 = $(".ATcon_03 > .attraction :contains('키 125Cm 이상')").parent();
                var limit130 = $(".ATcon_03 > .attraction :contains('키 135Cm 이상')").parent();
                var limit140 = $(".ATcon_03 > .attraction :contains('키 140Cm 이상')").parent();
                switch (this.value) {
                    case "80":
                        leftpx = 5;
                        plaza.show();
                        limit90_130.hide();
                        limit90_110.hide();
                        limit100.hide();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "90":
                        leftpx = 12;
                        plaza.hide();
                        limit90_110.show();
                        limit90_130.show();
                        limit100.hide();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "100":
                        leftpx = 19.5;
                        plaza.hide();
                        limit90_110.show();
                        limit90_130.show();
                        limit100.show();
                        limit110.hide();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "110":
                        leftpx = 27.05;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.show();
                        limit100.show();
                        limit110.show();
                        limit120.hide();
                        limit125.hide();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "120":
                        leftpx = 34;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.show();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.hide();
                        limit140.hide();
                        break;
                    case "130":
                        leftpx = 41;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.hide();
                        break;
                    case "140":
                        leftpx = 48;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "150":
                        leftpx = 56;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "160":
                        leftpx = 63;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "170":
                        leftpx = 70;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "180":
                        leftpx = 77.5;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                    case "190":
                        leftpx = 84.5;
                        plaza.hide();
                        limit90_110.hide();
                        limit90_130.hide();
                        limit100.show();
                        limit110.show();
                        limit120.show();
                        limit125.show();
                        limit130.show();
                        limit140.show();
                        break;
                }
                selectvalue.innerHTML = Number(this.value) + "cm";
                selectvalue.style.left = leftpx + "%";

            }
        }

    });

    $(function () {
        $(window).trigger("resize");
    });



