/* =======手風琴切換======== */
$('div.ansmod').on("click", "input", function(e){
    let span= $(this).prev().find('span > span')
    let label= $(this).prev()
    if( $(this).prop("checked")){
        $(this).siblings('input[type="checkbox"]').prop("checked", false)
        label.find("label").css("color", "#B69452")
        label.siblings().find("label").css("color", "#cacaca")
        span.css("transform", "rotate(90deg)")
        span.parents('div.ansbox').siblings().find('span > span').css("transform", "rotate(0deg)")
    }else{
        span.css("transform", "rotate(0deg)")
        label.find("label").css("color", "#cacaca")
    }
})
$('.ansbox').on("click", function(){
    this.querySelector("label").click()
})