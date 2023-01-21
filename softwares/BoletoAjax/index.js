let d = (termo) => document.querySelector
(termo)
let dAll = (termo) => document.querySelectorAll
(termo)
let c = (escreva) => console.log(escreva)
let bimestre = d("#bimestres")
let inputArea = d("#noteSelector")
let btn = d("#calcular")

//verifica se existe input de nota e os remove 
function deleteHTML (index, classe){
    let noteSelector = d("#noteSelector")
    if (noteSelector.querySelector(classe)){
        let input = dAll(classe)
        for(index; index < input.length; index++){
            input[index].parentNode.removeChild(input[index])
        }
    }
}

//Escreve os inputs
function writeHTML(bimestre, inputArea, i){
    deleteHTML(i, '.noteArea')

    let div = [0] 
    for (let x = i; x < bimestre; x++){
        div[i] = document.createElement("div")
        div[i].setAttribute('class', 'noteArea')
        inputArea.appendChild(div[i]) 
    }
    let input = document.querySelectorAll('.noteArea')
    let x = i+1
    input.forEach(tagDiv => {
        tagDiv.innerHTML = `
        <label class='notaLabel'>Nota ${x}° Bimestre</label>
        <br>
        <input type='text' name='nota' class='input nota'>
        `
        x++
    })
} 

//escreve a media e situacao do aluno
function escreveResultado(resultado, erro) {
    let situacaoArea = d('#situacao')
    if(erro){
        let advise = document.createElement('p')
        advise.setAttribute('class', 'erro')
        situacaoArea.appendChild(advise)
        advise = d('.erro')
        advise.innerHTML = "<p class='erro'>Digite um número entre 0 e 10.</p>"
        
    }
    else{
        let resultArea = d("#resultArea")
        let situacao = resultado >= 6 ? "O aluno foi aprovado " : "O aluno foi reprovado"
        resultArea.innerHTML = String(resultado.toFixed(2))
        situacaoArea.innerHTML = situacao
    }

}


/* calcula a media do aluno
 * e chama a funcao que escreve
 */
function calcular(){
    let inputs = dAll('.nota')
    let soma = 0
    let resultado = 0 
    let erro = false
    
    inputs.forEach(input => {
        if (input.value < 0 || input.value > 10 || input.value == "") {
            erro = true
        }else{
            soma += Number(input.value)
        }
    })
    resultado = soma/inputs.length
    if(isNaN(resultado)){
        erro = true
    }
    escreveResultado(resultado, erro)
}

//inicia a aplicacao

function appInit(b1, bimestre, inputArea){ 
    let i = 0
    //faco aparecer ao menos um input no inicio do programa
    writeHTML(b1, inputArea, i)

    //inicia o app quando o valor do bimestre eh trocado
     bimestre.addEventListener('change', () => {
        let bValue = Number(bimestre.options[bimestre.selectedIndex].value)
        writeHTML(bValue, inputArea, i)
    })
    
    //calcula o resultado quando o botao recebe o click
    btn.addEventListener('click', () => {
        calcular()
    })
}

appInit(1, bimestre, inputArea)





