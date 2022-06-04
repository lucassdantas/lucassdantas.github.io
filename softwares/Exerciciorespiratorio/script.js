
/*NÃO UTILIZADO*/
//OUTRO OBJETO =============

//Este cria os arrays dos segundos 
//e pega os valores dos atributos
/*let SecondMaker = {

    //Atributes ==========

    Inspiracao:[0],
    Pause:[0],
    Expiracao:[0],


    //Methods ============

    Contador(Value) {
        //Cria um array do número selecionado até 0
        //Cria um array de 0 até o número selecionado
        let ValueList = []      
        ValueList[Value] = Value
        //let Count = ValueList[0]    
        for (let i = Value; i = 0; i--){
            ValueList[i] = i  
            console.log(i)          
        }     
        console.log(Value)
        return ValueList   
    },


    //Getters and Setters  -------
    ValueGetterSetter(){       
        //Pega os valores do exercício selecionado,
        //joga na função que cria um array e
        //define o resultado como os valores do obj
        let Selected = Exercicios.Selector()
        let InspValue = Selected.Inspiracao
        let PauseValue = Selected.Pausa
        let ExpValue = Selected.Expiracao
        //Setter
        this.Inspiracao = this.Contador(InspValue)
        this.Pause = this.Contador(PauseValue)
        this.Expiracao = this.Contador(ExpValue)
        console.log(InspValue)
    },

    getInspiracao(){
        return this.Inspiracao
    },

    setPause(nContado){
        let nContadoV = nContado.getPauseValue()
        let PauseValueF = this.Contador(nContadoV)
        this.Pause = PauseValueF
    },
    getPause(){
        return this.Pause
    },

    setExpiracao(nContado){
        let nContadoV = nContado.getExpValue()
        let ExpValueF = this.Contador(nContadoV)
        this.Expiracao = ExpValueF
    },
    getExpiracao(){
       return this.Expiracao
    },


}
*/

//OUTRO OBJETO==============
//Pega os valores do exercicio custom


//OUTRO OBJETO ===============
//Este define os atributos para os exercicios
let Exercicios = {

    //Atributes ----
    Default: {
        ExercName:"Default",
        Inspiracao: 5,
        Pausa: 5,
        Expiracao: 20,
        RepeatNumber: 4
    },

    Exercicio01: {
        ExercName:"Exercicio 01",
        Inspiracao: 10,
        Pausa: 10,
        Expiracao: 40,
        RepeatNumber: 6

    },

    Selected:"",

    //METHODS ----
    Selector(){
        //Verifica e retorna os valores do exercicio selecionado
        //pelo usuario
        let Select = document.querySelector("#SelectExerc").value //selectedIndex
        let SelectV 
       
        //faz o "selected" receber os valores do exercicio ecsolhido
        //pelo usuario
        switch (Select) {
                case "Padrão":
                    SelectV = Exercicios.Default
                    break;

                case "Custom":
                    SelectV = Exercicios.Custom            
                    break;
            
                case "1":
                    SelectV = Exercicios.Exercicio01
                    
                    break;    

            default:
                SelectV = "oi"
                
                break;
        }
        Exercicios.Selected = SelectV
        listener.status = "close"
        SecondsSelector.Changer(SelectV.Inspiracao, SelectV.Pausa, SelectV.Expiracao, 0)
       
        return SelectV
    },

    SelectRepeat(){
        //Verifica e retorna os valores da repetição
        //do exercicio selecionado pelo usuário
        let Selected = this.Selector()
        let RepeatNumber
        switch (Selected) {
            case this.Default:
                RepeatNumber = 4
                break;

            case this.Custom:
                RepeatNumber = document.querySelector("#RepeatNumber").value

            default:
                
                break;
        }
        
        return RepeatNumber
    },
}

//OUTRO OBJETO ===============
//Seleciona os textos de inspiracao, expiracao e pausa
let SecondsSelector = {
    Inspiracao: document.querySelector("#InspText"),
    Pause: document.querySelector("#PauseText"),
    Expiracao: document.querySelector("#ExpText"),
    
    //Methods ------
    //Troca o valor da inspiração, expiração e pause
    //rN = repeatnumber
    Changer(Value, Value2, Value3, rN){
        //Faz os segundos ficarem com os valores
        //passados
        if (rN > 0){
            Value2 = Value2 +rN
            Value3 = Value3 +rN
        }
        this.Inspiracao.innerText = String(Value)
        this.Pause.innerText = String(Value2)
        this.Expiracao.innerText = String(Value3)
    },
}

//OUTRO OBJETO ======
//CONTA DO NÚMERO ESCOLHIDO ATÉ 0
//SOMA 1 A FUNÇÃO NO LISTENER E ALTERA
// O ESTADO DA FUNÇÃO PARA "FINISH"
let Cutdown = {
    //Methods
    //Conta do valor do objeto passado até 0 e exibe 
    SecondSubtract(object){
        let interval = setInterval(Subtract, 1000, object)
        let checker = setInterval(Checker, 01, interval)
        //checa se o app está finalizado
        //e reseta os valores caso esteja
        function Checker(interval){
            if(listener.status == "close"){
                clearInterval(interval)
                listener.setRepeatNumber(0)
                listener.function = 0
                listener.fstate = "loading"
                listener.presentObj = "0"
                SecondsSelector.Changer(Exercicios.Selected.Inspiracao, Exercicios.Selected.Pausa, Exercicios.Selected.Expiracao)
                clearInterval(checker)   
            }
        }
        function Subtract(object){
            object.innerText = String(Number(object.innerHTML)-1)
            if(Number(object.innerHTML) <= 0){
                //reseta os valores e passa para a proxima etapa
                clearInterval(interval)
                listener.function++
                listener.fstate = "finish"
            }  
        }
    }
}

//OUTRO OBJETO========================

//Verifica se os contadores terminaram
//Faz o programa parar quando o limite de repetições
//é alcançado
let listener = {
    //estado do programa
    status: "running",

    //função atual (inspiração, segurar ou expirar)
    function:0,

    //estado da função(em andameno ou acabada)
    fstate:"loading",

    //qual quadro está sendo diminuido (insp, segurar ou expirar)
    presentObj:"0",

    //Em qual repetição está
    repeatNumber: 0,

    globalChecker: {
        //executa a função atual
        exec(PresentObject, actualFunction){
            //Dependendo da função atual, vai rodar o cronometro
            //Muda o estado da função atual, fazendo com que 
            //o codigo leia o "finish" sem ter que executar o
            //secondsubtract
            if(actualFunction >= 4){
                listener.fstate = "finish"
            }
            else{
                listener.fstate = "loading"
                Cutdown.SecondSubtract(PresentObject)
                
            }
        },
            
        //cheka e setta a função, seu estado e objeto atual
        fChecker(){
            let principalChecker = setInterval(checker, 0)
            function checker(){
                let Status = listener.status
                let aF = listener.function
                let fS = listener.fstate
                let aB = listener.presentObj
                let rNumber = listener.repeatNumber 
                let rLimit = Exercicios.Selected.RepeatNumber        
                //finaliza o cronometro e faz o botão de iniciar aparecer 
                //se o app for parado
                if(Status == "close"){
                    clearInterval(principalChecker)
                    buttonInit.classList.remove("hidden")
                    buttonStop.classList.add("hidden")

                }
                //soma as repetições e verifica se estas atingiram o limite
                listener.globalChecker.somador(rNumber, aF)

                //verifica se a função acabou,
                //troca o bloco a ser contado 
                //e executa o cronometro deste proximo bloco no "exec"
                if(fS == "finish"){
        
                    //verifica se o limite de repetições
                    //foi atingido
                    if (rNumber >= rLimit){
                        listener.status = "close"
                        aF = 0
                    }
                    //faz com que ele não rode mais funções
                    //se o app for finalizado
                    if (Status != "close"){
                        //seleciona a bloco que será contrado do valor selecionado até 0  
                        switch (aF) {
                            case 1:
                                aB = SecondsSelector.Inspiracao 
                                break;
    
                            case 2:
                                aB = SecondsSelector.Pause  
                                break;
    
                            case 3:
                                aB = SecondsSelector.Expiracao
                                break;    
    
                            default:
                                break;
                        }
                       
                        //executa a contagem no objeto selecionado do valor selecioando ate 0
                        listener.globalChecker.exec(aB, aF)
                    }
                }   
            }//fim checker
        },//fim fchecker

        //soma os valores de repetição após o fim da sequencia
        
        somador(rNumber, Presentfunction){
            if (Presentfunction >= 4){
                listener.function = 1
                rNumber++
                listener.setRepeatNumber(rNumber)
                //o changer soma os valores escolhidos com o numero da repetição
                SecondsSelector.Changer(Exercicios.Default.Inspiracao, Exercicios.Default.Pausa, Exercicios.Default.Expiracao, rNumber)
            }
        }
    //endglobalchecker
    },

    setRepeatNumber(value){
        this.repeatNumber = value
    }

}




let app = {
    //Carrega as funções necessárias para o funcionamento do programa
    LoadFunction(){
        Exercicios.Selector()
        
    },
    //seta os valores necessários para 
    //o inicio da aplicação
    appInit(){
        //inicia o cronometro
        SecondsSelector.Inspiracao.innerText = String(Number(SecondsSelector.Inspiracao.innerHTML)-1)
        listener.setRepeatNumber(0)
        listener.function = 1
        listener.fstate = "finish"
        listener.presentObj = "0"
        listener.status = "running"
        listener.globalChecker.fChecker()
        app.ShowOrHide()

    },
    appStop(){
        //finaliza o cronometro
        listener.status = "close"
        app.ShowOrHide()
        
    },
    ShowOrHide(){
        //exibe o botão de parar caso esteja oculto
        //ou ocula caso esteja sendo exibido
        let buttonInit = document.querySelector("#ButtonInit")
        let buttonStop = document.querySelector("#ButtonStop")
        if (buttonStop.classList.value.indexOf("hidden") >= 0){
            buttonInit.classList.add("hidden")
            buttonStop.classList.remove("hidden")
        }else{

            buttonInit.classList.remove("hidden")
            buttonStop.classList.add("hidden")
        }
    }

}


let selector = document.querySelector("#SelectExerc")
let buttonInit = document.querySelector("#ButtonInit")
let buttonStop = document.querySelector("#ButtonStop")
app.LoadFunction()
selector.addEventListener("change", Exercicios.Selector) 
buttonInit.addEventListener("click", app.appInit)
buttonStop.addEventListener("click", app.appStop)






