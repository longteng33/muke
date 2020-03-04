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

// 轮播图
var carouselObj = new Carousel({
    box: $('.carousel .banner-con'),
    img: $('.carousel .banner-item'),
    dots: $('.carousel .banner-con .dots li'),
    prev: $(".carousel .banner-con .prev"),
    next: $(".carousel .banner-con .next"),
    intervalTime: 3000,
    gradualTime: 600,
    className:"active",
})
// function changeImg(index){
//     $(".carousel .banner-item").eq(index).fadeIn();
//     $(".carousel .banner-item.active").fadeOut()
//     $(".carousel .banner-item.active").removeClass("active");
//     $(".carousel .banner-item").eq(index).addClass("active")
    
//     $(".carousel .dots li.active").removeClass("active");
//     $(".carousel .dots li").eq(index).addClass("active")
// }

// var index=0;
// function carousel(n){
//     if (index < $(".carousel .banner-item").length - 1) {
//         index+=n;
//     } else {
//         index = 0;
//     }
//     changeImg(index)
// }

// $(".banner-con .btn").click(function(){
//     if($(this).hasClass("prev")){
//         carousel(-1)
//     }else{
//         carousel(1)
//     }
    
// })

// $(".carousel .dots li").click(function(){
//     index=$(this).index();
//     changeImg(index)
// })

 //点击添加类的函数
 function addOneClass(ele,className){
    ele.click(function(){
        ele.each(function(index){
            ele.eq(index).removeClass(className);
        })
        $(this).addClass(className)
    })
}

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