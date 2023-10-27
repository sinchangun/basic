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
        left: redbarPosition
    }, 1000)
}, 3000)

let currentIndex_2 = 0;
$('.right_arrow').click(function () {
    currentIndex_2++;
    console.log(currentIndex_2);
    let slidePosition_2 = currentIndex_2 * (-300) + "px";
    console.log(slidePosition_2);
    $('.container2_box').animate({
        left: slidePosition_2
    }, 500)
    if (currentIndex_2 > 0 ){
        $('.left_arrow').show()
        $('.left_arrow_dis').hide()
    }else{
        $('.left_arrow').hide()
        $('.left_arrow_dis').show()
    }
    if (currentIndex_2 < 6 ){
        $('.right_arrow').show()
        $('.right_arrow_dis').hide()
    }else{
        $('.right_arrow').hide()
        $('.right_arrow_dis').show()
    }
});

$('.left_arrow').click(function () {
    currentIndex_2--;
    console.log(currentIndex_2);
    let slidePosition_2 = currentIndex_2 * (-300) + "px";
    console.log(slidePosition_2);
    $('.container2_box').animate({
        left: slidePosition_2
    }, 500)
    if (currentIndex_2 > 0 ){
        $('.left_arrow').show()
        $('.left_arrow_dis').hide()
    }else{
        $('.left_arrow').hide()
        $('.left_arrow_dis').show()
    }
    if (currentIndex_2 < 6 ){
        $('.right_arrow').show()
        $('.right_arrow_dis').hide()
    }else{
        $('.right_arrow').hide()
        $('.right_arrow_dis').show()
    }
});

let tabBtn=$('.contanier3_list>div');
let tabCont=$('.container3_box>div');

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    let index = $(this).index();
    console.log(index)
    tabCont.hide().eq(index).show();
    tabBtn.removeClass('active'); 
    $(this).addClass('active');
});

$('.last_menu').click(function(){
    $('.toggle').toggle();
    $('.last_menu>img').toggleClass("rotate");
})  