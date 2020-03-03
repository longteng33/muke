//  滚动屏幕
$(window).scroll(function(){
    if($(document).scrollTop()>105){
        $(".header").addClass("headerfixed")
    }else{
        $(".header").removeClass("headerfixed")
    }

    if($(document).scrollTop()>600){
        $(".elevator .return").css("display","block")
    }else{
        $(".elevator .return").css("display","none")
    }
})
// 点击返回顶部
$(".elevator .return").click(function(){
    $("html,body").animate({scrollTop:0},500)
})
 //点击添加类的函数
 function addOneClass(ele,className){
    ele.click(function(){
        ele.each(function(index){
            ele.eq(index).removeClass(className);
        })
        $(this).addClass(className)
    })
}
// 轮播图dots点击
addOneClass($(".carousel .banner-con .dots li"),"active")
// 学习路线nav点击
addOneClass($(".learningRoute .nav-item"),"active")
// 热门课程nav点击
$(".hotCourse .nav-item").click(function(){
    if($(this).hasClass("free")){
        $(".hotCourse .microLesson").css("display","block")
    }else{
        $(".hotCourse .microLesson").css("display","none")
    }
})
addOneClass($(".hotCourse .nav-item"),"active")