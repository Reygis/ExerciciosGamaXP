"use strict";
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: The same creator's code just worked with ${product.operation()}`;
    }
}
class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteCreator1();
    }
    operation() {
        return '{result of concretProduct1}';
    }
}
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteCreator2();
    }
    operation() {
        return '{result of concretProduct2}';
    }
}
function myClientCode(creator) {
    console.log("Client: I\'m not aware of the creator's class but  it still works");
    console.log(creator.someOperation());
}
console.log('App: Launched with the ConcreteCreator1.');
myClientCode(new ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
myClientCode(new ConcreteCreator2());
console.log('');
