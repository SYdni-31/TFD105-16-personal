document.addEventListener("DOMContentLoaded", function(){
    // ========nav hamburger========
    let hamburger= document.getElementsByClassName("hamburger")[0]
    let nav_main= document.getElementsByClassName("nav_main")[0]
    let nav = document.getElementsByClassName('nav')[0];
    hamburger.addEventListener("click", function(){
        nav_main.classList.toggle("nav-act")
        nav.classList.add('nav-colored');
    });

    // ========nav透明度設定========
    window.addEventListener('scroll', function (e) {
        let nav = document.getElementsByClassName('nav')[0];
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
        } else if(nav_main.classList.contains("nav-act")){
            nav.classList.add('nav-colored');
        }else{
            nav.classList.remove('nav-colored');
        }
    });
    // ========back to top設定========
    let gototopbtn=document.getElementsByClassName("gototopbtn")[0]
    gototopbtn.addEventListener("click",function(e){
        e.preventDefault()
        goToTop()
    })
})
// ========back to top function========
function goToTop(destination = 0, duration = 300) {
    const scrollStep = -window.scrollY / (duration / 15)
    const scrollInterval = setInterval(function () {
      if (window.scrollY != 0 && window.scrollY > destination) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }
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
// ========購物車點點========
document.addEventListener("DOMContentLoaded", function(){
    let wandlists = JSON.parse(localStorage.getItem("wandlists"));
    if(wandlists===null){}else{
        let length= wandlists.length
        if(length==0){
            $(".buyingdot").css("display", "none")
        }else if(length>=10){
            $(".buyingdot").css("display", "block").text("9+")
        }else{
            $(".buyingdot").css("display", "block").text(length)
        }
    }
});
