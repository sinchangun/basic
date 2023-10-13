$('.size>ul>li').mouseover(function () {
    console.log($(this));
    $(this).find('.submenu').stop().show();
});
$('.size>ul>li').mouseout(function () {
    $(this).find('.submenu').stop().hide();
});

$('.size>ul>.last').mouseover(function () {
    console.log($(this));
    $(this).find('.submenu_last').stop().show();
});
$('.size>ul>.last').mouseout(function () {
    $(this).find('.submenu_last').stop().hide();
});

let currentIndex = 0;
setInterval(function () {
    if (currentIndex < 6) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    let slidePosition = currentIndex * (-1400) + "px";
    console.log(slidePosition);
    $('.container').animate({
        left: slidePosition
    }, 1000)
    let redbarPosition = currentIndex * (100) + "px";
    console.log(redbarPosition);
    $('.red_bar').animate({
        right: redbarPosition
    }, 1000)
}, 3000)