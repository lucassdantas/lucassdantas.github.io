//Interactivity for button
let navButton = document.querySelector("#responsiveICON")
function ShowBar(){
    let navLink = document.querySelector("#navigationList").classList
    if(navLink.value.indexOf("show") != -1){    
        navLink.remove("show")
    }
    else{
        navLink.add("show")     
    }
}
navButton.addEventListener("click", ShowBar)
