// ========nav透明度設定========
window.addEventListener('scroll', function (e) {
    let nav = document.getElementsByClassName('nav')[0];
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
        } else {
               nav.classList.remove('nav-colored');
        }
});
// ========nav hamburger========
$(function(){
    $("button.hamburger").on("click", function(){
      $(".nav_main").slideToggle();
      let nav = document.getElementsByClassName('nav')[0];
      nav.classList.add('nav-colored');
    });
  });
// ========back to top設定========
	$('.gototopbtn').click(function(){ 
		$('html,body').animate({scrollTop:0}, 500);
	});
// // ========進一步選購滑動設定========
// $(document).ready(function(){ 
//     let index = 0;
//     let liLen= $(".gotoshopitem").length;
//     //選單向右移動按鈕
//     $(".btntoright").click(function(){
//         if(index < liLen-3){
//             $(".gotoshopitem").animate({right:"+=33%"})
//             index++;
//         }else{
//             index = liLen-3;
//         }
//     });
//     // 向左
//     $(".btntoleft").click(function(){
//         if(index > 0){
//             $(".gotoshopitem").animate({left:"+=33%"})
//             index--;
//         }else{
//             index= 0;
//         }
//     });
//    });


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
    let endvw =document.body.offsetWidth*1.05;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".wand1", { 
        rotation: 120,//最後旋轉程度deg
        scrollTrigger: {
        trigger: ".wand1",
        start: `-200 top`, // (物件開始位置, 卷軸開始位置)
        end: `+=${endvw}`, //(物件結束位置, 卷軸結束位置)
        pin: true, // 物件執行完動畫會跟著卷軸走
        scrub: true, // 物件動畫根據卷軸捲動程度跑
      }
    });
    /* =======手風琴切換+-切換======== */
    $(function(){
        $(".ansbox").click(function(){
            $(this).find('span > span').css("transform", "rotate(90deg)")
            $(this).siblings().find('span > span').css("transform", "rotate(0deg)")
        });
    });
    // ========登入視窗========
    let loginnav = document.getElementsByClassName('loginnav')[0];
    let loginbg = document.getElementsByClassName('loginbg')[0];
    if(loginbg.classList.contains('loginopen')){
    }else{
        loginnav.addEventListener('click', function(e){
            loginbg.classList.add('loginopen')
            loginbg.insertAdjacentHTML("afterbegin", `<section class="login">
            <div class=" logintitle">
                <img src="img/logo_14_s.svg" alt="">
                <h3>會員登入</h3>
                <button class="loginclose"></button>
            </div>
            <div class="loginbox">
                <label for="log1">帳號：</label>
                <input type="text" id="log1"><br>
                <label for="log2">密碼：</label>
                <input type="text" id="log2">
                <a href="#">忘記密碼</a>
            </div>
            <div class="loginbtn">
                <input type="button" value="登入">
                <input type="button" value="註冊">
            </div>
            </section>`);
            e.preventDefault();
        })
    }
document.addEventListener('click', function(e){
    if(e.target.classList.contains("loginclose")){
        loginbg.classList.remove("loginopen");
        e.target.closest("section").remove();
    }
})
$(document).mouseup(function(e){
    var _con = $('.login');
    if(!_con.is(e.target) && _con.has(e.target).length === 0){
        loginbg.classList.remove("loginopen");
        loginbg.innerText="";
    }
  });

  document.addEventListener("DOMContentLoaded", function(){
  
    var btn_hamburger = document.getElementsByClassName("hamburger")[0];
    btn_hamburger.addEventListener("click", function(){
      this.classList.toggle("hamactive");
    });
    
  });
// ========loading page========
window.addEventListener("load", function(){
    document.getElementsByClassName("loadingblock")[0].remove();
  });

