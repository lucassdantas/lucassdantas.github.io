const Notifyer = {
    async init(permission){
        
        if(permission !== "granted"){
            throw new Error('Permissão negada') 
        }
    },
    //closure
    
    notify({title, body, icon}){
        body = body || random
        //retorna uma funcao sem executa-la
        //quando o notfy é chamado, ele é executado,
        //porém, seu retorno é uma função que não é
        //executada
        //sua função é retornar uma função (nao executada)
        return () => new Notification(title, {body, icon})
    }
}
export {Notifyer}