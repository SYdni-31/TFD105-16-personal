    // =========可惡的輪播owl套件=========
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            992:{
                items:3
            },
            1600:{
                items:4
            },
            2100:{
                items:5
            }
        }
    })

let one = document.getElementsByClassName("one")[0]
let two = document.getElementsByClassName("two")[0]
let three = document.getElementsByClassName("three")[0]
let one_img = document.getElementsByClassName("one_img")[0]
let two_img = document.getElementsByClassName("two_img")[0]
let three_img = document.getElementsByClassName("three_img")[0]

document.addEventListener("scroll", function () {
    if (window.scrollY >= one.offsetTop * 0.2) {
        one_img.classList.add("rightslide")
    }else {
        one_img.classList.remove("rightslide")
    }
    if(window.scrollY > one.offsetTop && window.scrollY >= two.offsetTop * 0.4) {
        two_img.classList.add("leftslide")
    } else {
        two_img.classList.remove("leftslide")
    }
    if(window.scrollY > two.offsetTop && window.scrollY >= three.offsetTop * 0.4) {
        
        three_img.classList.add("rightslide")
    } else {
        three_img.classList.remove("rightslide")
    }
})
