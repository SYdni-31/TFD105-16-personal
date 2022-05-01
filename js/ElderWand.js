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