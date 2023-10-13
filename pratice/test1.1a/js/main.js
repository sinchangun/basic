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