let navButton = document.querySelector("#cellButton")

function Clique(){
    let cellLogin = document.querySelector("#login_li").classList
    let cellMenu = document.querySelector("#nav_menu").classList
    if(cellLogin.value.indexOf("escondido") <= -1){
        cellLogin.add("escondido")
        cellMenu.add("escondido")
    } else{
        cellLogin.remove("escondido")
        cellMenu.remove("escondido")
    }

}
navButton.addEventListener("click", Clique)