// Menu
$('#burgerOpen').on('click', function() {
    $(this).removeClass('active');
    $('#burgerClose').addClass('active');
    $('#nav').show(400);
    $('body').addClass('active');
})

$('#burgerClose').on('click', function() {
    $(this).removeClass('active');
    $('#burgerOpen').addClass('active');
    $('#nav').hide(400);
    $('body').removeClass('active');
})

$("[data-mouse]").on("mouseover", function() {

    let $this = $(this);
        // blockId = $this.data('mouse');
    $('.nav__link').removeClass('active');
    $('.nav__number__item').removeClass('active');
    $this.addClass("active");
    // blockId.addClass('active');

    if ($('#link__01').hasClass('active')) {
        $('#01').addClass('active');
    }
    if ($('#link__02').hasClass('active')) {
        $('#02').addClass('active');
    }
    if ($('#link__03').hasClass('active')) {
        $('#03').addClass('active');
    }
    if ($('#link__04').hasClass('active')) {
        $('#04').addClass('active');
    }
    if ($('#link__05').hasClass('active')) {
        $('#05').addClass('active');
    }
});

// Slider
$('#phoneSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // arrows: false,
    autoplaySpeed: 2000,
    nextArrow: $('#sliderNext'),
    prevArrow: $('#sliderPrev')
  });

  $('#sliderPrev').on("mouseover", function() {
    $(this).attr("src","./img/arrowActivePrev.png");

    })

    $('#sliderPrev').on("mouseout", function() {
        $(this).attr("src","./img/arrowPrev.png");

        })

    $('#sliderNext').on("mouseover", function() {
        $(this).attr("src","./img/arrowActiveNext.png");
    
        })
    
        $('#sliderNext').on("mouseout", function() {
            $(this).attr("src","./img/arrowNext.png");
    
            })


// Tranings Item

$('#traningItem-1').on("mouseover", function() {
    $('#traningContent-1').addClass('active');
    $("#traningBorder-1").attr("src","./img/border-yellow.svg");

})

$('#traningItem-2').on("mouseover", function() {
    $('#traningContent-2').addClass('active');
    $("#traningBorder-2").attr("src","./img/border-yellow.svg");

})

$('#traningItem-3').on("mouseover", function() {
    $('#traningContent-3').addClass('active');
    $("#traningBorder-3").attr("src","./img/border-yellow.svg");

})

$('#traningItem-4').on("mouseover", function() {
    $('#traningContent-4').addClass('active');
    $("#traningBorder-4").attr("src","./img/border-yellow.svg");

})

$('.tranings__item').on("mouseout", function() {
    $('.tranings__item__content').removeClass('active');
    $('.tranings__item__border').attr("src","./img/border.svg");
})