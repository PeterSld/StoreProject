window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop
function myFunction(){
    if (window.pageYOffset > sticky+190){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky")
    }
}

const content = document.querySelectorAll(".coverBox");
const whatsapp = document.querySelector(".contact");
for (let i = 0; i<content.length; i++) {
    content[i].addEventListener("click", smoothScroll);
};
function smoothScroll() {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = whatsapp;
    var scrollContainer = target;
    do {
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}