let botao = document.querySelector("#Button")
botao.addEventListener("click", function(){
    let text = document.querySelector("#Text").value
    let resposta = document.querySelector("#Answer")
    let formatacao = text.replace(/\n/g, ", ")
    resposta.value=(formatacao)
})
