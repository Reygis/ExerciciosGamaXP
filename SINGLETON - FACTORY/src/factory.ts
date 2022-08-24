abstract class Creator {
    public abstract factoryMethod() : Product

    public someOperation() : string {
        const product = this.factoryMethod()

        return `Creator: The same creator's code just worked with ${product.operation()}`
    }
}

interface Product{
    operation(): string
}

class ConcreteCreator1 extends Creator implements Product {
    public factoryMethod()  {
        return new ConcreteCreator1()
    }

    public operation(): string {
        return '{result of concretProduct1}'
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod() {
        return new ConcreteCreator2()
    }

    public operation(): string {
        return '{result of concretProduct2}'
    }
}

function myClientCode(creator: Creator) {
    console.log("Client: I\'m not aware of the creator's class but  it still works")
    console.log(creator.someOperation())
}

console.log('App: Launched with the ConcreteCreator1.')
myClientCode(new ConcreteCreator1())
console.log('')

console.log('App: Launched with the ConcreteCreator2.')
myClientCode(new ConcreteCreator2())
console.log('')
