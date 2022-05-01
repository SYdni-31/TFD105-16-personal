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