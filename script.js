let navButton = document.querySelector("#cellButton")
let cellFundo = document.querySelector(".cell_fundo")


function Clique(){
    let cellLogin = document.querySelector("#login_li").classList
    let cellMenu = document.querySelector("#nav_menu").classList
    let cellFundo = document.querySelector(".cell_fundo")
    if(cellLogin.value.indexOf("escondido") <= -1){
        cellLogin.add("escondido")
        cellMenu.add("escondido")
        cellFundo.classList.remove("active")
    } else{
        cellLogin.remove("escondido")
        cellMenu.remove("escondido")
        cellFundo.classList.add("active")
    }
}
navButton.addEventListener("click", Clique)
cellFundo.addEventListener("click", Clique)

let Corpo = document.querySelector("#corpo")




