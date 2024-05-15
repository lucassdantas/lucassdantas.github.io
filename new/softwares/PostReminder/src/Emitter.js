const Emitter = {
    events:{},
    on(event, cb) {
        //ele recebe ele mesmo, caso nao exista,
        //recebe um array vazio
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(cb)
    },

    //evento e depois o rest operator, este
    //pega os outros argumentos
    emit(event, ...rest){
        if(event in Emitter.events === false) return
        Emitter.events[event].forEach(element => {
            //antes o rest vazia um array de argumentos
            //agora ele espalha os arrays, é um spread
            //operator
            element(...rest)
        });
    }
}
export {Emitter}