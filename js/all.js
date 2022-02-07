// ========nav透明度設定========
window.addEventListener('scroll', function (e) {
    var nav = document.getElementsByClassName('nav')[0];
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
        } else {
            nav.classList.remove('nav-colored');
        }
});
// ========back to top設定========
	$('.gototopbtn').click(function(){ 
		$('html,body').animate({scrollTop:0}, 500);
	});
// ========進一步選購滑動設定========
$(document).ready(function(){ 
    let index = 0;
    let liLen= $("ul.gotoshopmain li").length;
    //選單向右移動按鈕
    $(".btntoright").click(function(){
        if(index < liLen-3){
            $("ul.gotoshopmain li").animate({right:"+=345px"})
            index++;
        }else{
            $("ul.gotoshopmain li").stop();
            index = liLen-3;
        }
    });
    // 向左
    $(".btntoleft").click(function(){
        if(index > 0){
            $("ul.gotoshopmain li").animate({left:"+=345px"})
            index--;
        }else{
            $("ul.gotoshopmain li").stop();
            index=0
        }
    });
   });
// ========第一排商品列表區域切換========
$(function(){
    $(".storecategory >ul >li").click(function(){
        $(this).addClass("on");
        $(this).find("li").removeClass("on");
        $(this).siblings().removeClass("on");
        $(this).siblings().find("li").removeClass("on");
        let store=$(this).index();
        $(".store1").eq(store).show();
        $(".store1").eq(store).siblings().hide();
        $(".store1in1").eq().hide();
        $(".store1in2").eq().hide();
    });
   });

   // ========第二排之一商品列表區域切換========
   $(function(){
    $(".categorysecond1 > li").click(function(){
        $(this).parents().addClass("on");
        $(this).parents().siblings().removeClass("on");
        $(this).parents().siblings().find("li").removeClass("on");
        $(this).addClass("on"); 
        $(this).siblings().removeClass("on");
        let store1in1=$(this).index();
        $(".store1in1").eq(store1in1).show();
        $(".store1in1").eq(store1in1).siblings().hide();
        $(".store1").eq().hide();
        $(".store1in2").eq().hide();
        return false
        });
   });
      // ========第二排之一商品列表區域切換========
      $(function(){
        $(".categorysecond2 > li").click(function(){
            $(this).parents().addClass("on");
            $(this).parents().siblings().removeClass("on");
            $(this).parents().siblings().find("li").removeClass("on");
            $(this).addClass("on"); 
            $(this).siblings().removeClass("on");
            let store1in2=$(this).index();
            $(".store1in2").eq(store1in2).show();
            $(".store1in2").eq(store1in2).siblings().hide();
            $(".store1").eq().hide();
            $(".store1in1").eq().hide();
            return false
            });
       });

    // ========商品專頁滑動========
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".wand1", { 
        rotation: 120,//最後旋轉程度deg
        scrollTrigger: {
        trigger: ".wand1",
        start: "top 200PX", // (物件開始位置, 卷軸開始位置)
        end: "+=1400", //(物件結束位置, 卷軸結束位置)
        pin: true, // 物件執行完動畫會跟著卷軸走
        scrub: true, // 物件動畫根據卷軸捲動程度跑
      }
    });
    /* =======手風琴切換+-切換======== */
    $(function(){
        $(".ansbox").click(function(){
            $(this).find('span').animate({opacity:0})
            $(this).parents().siblings().find('span').animate({opacity:1},300)
        });
    });
