 let tabBtn = $('.mid_box');
 let tabCont = $('.mid_box .quick');

 //  tabBtn.hover(function(e){
 //     let index = $(this).index();
 //     console.log(index);
 //     tabCont.removeClass('active'); 
 //     tabCont.eq(index).addClass('active');
 //     tabBtn.mouseout(function(){
 //         tabCont.removeClass('active');
 //         }) 
 //  });

 tabBtn.mouseover(function () {
     let index = $(this).index();
     console.log(index);
     tabCont.removeClass('active');
     tabCont.eq(index).addClass('active');

 });
 tabBtn.mouseout(function () {
     tabCont.removeClass('active');
 });