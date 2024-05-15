let I = 5 //inspiração
let P = 5 //pausa
let E = 24 //expiração
let Exercicio = {
    Inspiracao: function (Inspiracao) {
        
        for (i = 0; i <= Inspiracao; ++i) {
            console.log(i)
            
        }
    },

    Pausa: function (Pausa) {
        for (let i = 0; i <= Pausa; ++i) {
            console.log(i)
            }
        return false
    },
    
    Expiracao: function (Pausa, Expiracao) {
        let x = 0
        for (let i = 15 + Pausa ; i <= Expiracao; ++i) {
            console.log(i)
            }
    },

    Iniciar: function() {
   
        this.Inspiracao(I)
        this.Pausa(P)
        this.Expiracao(P, E)
    }
}
