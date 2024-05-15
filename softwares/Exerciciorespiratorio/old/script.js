let valueGetter = {

    //Atributes -----

    inspValue: 5,
    PauseValue: 6, //document.querySelector(".cutdown"),
    expV: 50,
    ExpValue: 15,

    
    //Getter and Setter ----

    //setInspValue(){},
    getInspValue(){    
        return this.inspValue
    },
    //setPauseValue(){},
    getPauseValue(){
        return this.PauseValue
    },

    setExpV(){
        this.expV = Exercicios.Selector.Expiracao
    },
    //(Talvez não use) getExpV(){},

    setExpValueF(ExpV, PauseV) {   
       this.ExpValue = ExpV + PauseV
    },
    getExpValue(){
        return this.ExpValue
    }
}

//OUTRO OBJETO =============

let Preenchedor = {

    //Atributes ==========

    Inspiracao:[0],
    Pause:[0],
    Expiracao:[0],


    //Methods ============

    Contador(Value) {
        let ValueList = [Value]      
        let Count = ValueList[0]    
        for (i = 0; i <= Count; i++){
            ValueList[i] = i
        }     
        return ValueList   
    },


    //Getters and Setters 

    setInspiracao(nContado){       
        let nContadoV = nContado.getInspValue()
        let inspValueF = this.Contador(nContadoV)
        this.Inspiracao = inspValueF
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
    }

}

//OUTRO OBJETO===================

let valueSetter = {
    InspValue: valueGetter.Inspvalue,
    ExpValue: valueGetter.ExpValue,
    Pausevalue: valueGetter.PauseValue,
    


}

//OUTRO OBJETO ===============

let Exercicios = {

    //Atributes ----
    Selected: document.querySelector(".cutdown"),
    Default: {
        Inspiracao: 5,
        Pausa: 5,
        Expiracao: 20
    },


    //METHODS ----
    Selector(){
       let Select = this.Selected
       let SelectV = 0
       switch (Select) {
           case 1:
               SelectV = this.
               break;

            case 2:
                SelectV = this.
                break;
       
           default:
               SelectV = this.Default
               break;
       }
        return SelectV

    }
}


//OUTRA COISA ==============
valueGetter.setExpValueF(2, 5)
Preenchedor.setExpiracao(valueGetter)
console.log(Preenchedor.Expiracao)



/* let ExpiracaoV = 2 //document.querySelector("")
let Repeticao = [2] document.querySelector("")
let Inspiracao = [5]
let Pause = [5]
let Expiracao = [ExpiracaoV + Pause] */
/*
for (let i = 0; i <= Repeticao; i++) {
 

    } 

    
let Contador = function (Value) {
        let Count = Value[0]    
        for (i = 0; i <= Count; i++){
            Value[i] = i
        }     
        return Value   
} 

//let x = [5]*/ 