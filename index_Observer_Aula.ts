import { Subject, Observer } from "./observer_aula";




class SMSObserver extends Observer {
    constructor(subject: Subject){
        super()
        this.subject = subject
        this.subject.addObserver(this)
    }

    update(): void {
        console.log("Got state update from SMSObserver", this.subject.getState())
    }
}

class PumpObserver extends Observer {
    constructor(subject: Subject){
        super()
        this.subject = subject
        this.subject.addObserver(this)
    }

    update(): void {
        console.log("Got state update from PumpObserver", this.subject.getState())
    }
}

class WebServiceObserver extends Observer {
    constructor(subject: Subject){
        super()
        this.subject = subject
        this.subject.addObserver(this)
    }

    update(): void {
        console.log("Got state update from WebServiceObserver", this.subject.getState())
    }
}



const temperaturaSubject = new Subject()

const smsObserver = new SMSObserver(temperaturaSubject)
const pumpObserver = new PumpObserver (temperaturaSubject)
const webServiceObserver = new WebServiceObserver(temperaturaSubject)



setTimeout(() => {
    temperaturaSubject.setState(85)    
}, 2000)

setTimeout(() => {
    temperaturaSubject.setState(100)    
}, 5000)

setTimeout(() => {
    temperaturaSubject.setState(140)    
}, 8000)



