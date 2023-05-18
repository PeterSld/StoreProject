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