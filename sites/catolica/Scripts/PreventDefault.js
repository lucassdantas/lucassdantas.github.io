let BtnForm = document.querySelector("#btn-login")
function noDefault(){
    let form = document.querySelector("#formulario")
    form.preventDefault()
    console.log(form)
}
BtnForm.addEventListener("click", noDefault)