let ResponsiveButton = document.querySelector(".responsive-icon")
function Unhide(){
    let LateralMenu = document.querySelector("#side-menu")
    if (LateralMenu.classList.value.indexOf("hide") != -1){
        LateralMenu.classList.remove("hide")
    } else{
        LateralMenu.classList.add("hide")
    }
}
ResponsiveButton.addEventListener("click", Unhide)
