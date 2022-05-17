let navButton = document.querySelector("#cellButton")
let cellFundo = document.querySelector(".cell_fundo")


function Clique(){
    let cellLogin = document.querySelector("#login_li").classList
    let cellMenu = document.querySelector("#nav_menu").classList
    let cellFundo = document.querySelector(".cell_fundo")
    let navLinks = document.querySelector(".nav-link").classList
    if(cellLogin.value.indexOf("escondido") <= -1){
        cellLogin.add("escondido")
        cellMenu.add("escondido")
        navLinks.add("escondido")
        cellFundo.classList.remove("active")
    } else{
        cellLogin.remove("escondido")
        cellMenu.remove("escondido")
        navLinks.remove("escondido")
        cellFundo.classList.add("active")
    }
}
navButton.addEventListener("click", Clique)
cellFundo.addEventListener("click", Clique)

let Corpo = document.querySelector("#corpo")




