"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someBusinessLogic() {
    }
}
function clientCode() {
    const sing1 = Singleton.getInstance();
    const sing2 = Singleton.getInstance();
    if (sing1 === sing2) {
        console.log('Singleton works, both contain the same instance');
    }
    else {
        console.log('Singleton failed, variables contain diferent instances');
    }
}
clientCode();
