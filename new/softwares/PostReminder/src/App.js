import {Notifyer} from './Notifyer.js'
import {Timer} from './Timer.js'
import {Emitter} from './Emitter.js' 

const permission = await Notification.requestPermission()
const notify = Notifyer.notify({
    title:'Hora de postar',
    body:'Está na hora de criar um new post'
})
const App = {
    async start() {
        try{
            await Notifyer.init(permission)
            Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end',Timer.init)

            Timer.init(10)

        }
        catch(err){
            console.log(err.message)
        }
        window.onbeforeunload = function () {
            return undefined;
        }
        window.onunload = function () {
            permission = false;
        }
    }

}

export {App}