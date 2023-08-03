let popupbtn = document.getElementById("btn");
let popup = document.getElementById("popup");
let back = document.getElementById("goback");
let up = document.getElementById("up-btn");



popupbtn.addEventListener("click" , getpopup)
back.addEventListener("click"  , goback)
up.addEventListener("click"  , goup)

function getpopup(){
    popup.style.display = "grid";
}

function goback(){
    popup.style.display = "none";
}

function goup(){
    scrollY = 0;
}

function backblur(){
    let blur = document.getElementById("popup");
    blur.classList.toggle("active")

}