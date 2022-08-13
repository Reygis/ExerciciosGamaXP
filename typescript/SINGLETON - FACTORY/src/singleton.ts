class Singleton {
    private static instance: Singleton

    private constructor(){}

    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }

    public someBusinessLogic() {

    }
}

function clientCode(){
    const sing1: Singleton = Singleton.getInstance()
    const sing2: Singleton = Singleton.getInstance()

    if (sing1 === sing2) {
        console.log('Singleton works, both contain the same instance')
    } else {
        console.log('Singleton failed, variables contain diferent instances')
    }
}

clientCode()