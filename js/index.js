    // =========可惡的輪播owl套件=========
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 40,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        },
        1600: {
            items: 4
        },
        2100: {
            items: 5
        }
    }
})

let indexone_img = document.getElementsByClassName("indexone_img")[0]
let indextwo_img = document.getElementsByClassName("indextwo_img")[0]
document.addEventListener("scroll", function () {
    if (window.scrollY >= indexone_img.offsetTop * 0.4) {
        indexone_img.classList.add("rightslide")
    }else {
        indexone_img.classList.remove("rightslide")
    }
    if(window.scrollY > indexone_img.offsetTop && window.scrollY >= indextwo_img.offsetTop * 0.4) {
        indextwo_img.classList.add("leftslide")
    } else {
        indextwo_img.classList.remove("leftslide")
    }
})