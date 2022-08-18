class A {
    public getnome(){
        console.log("Meu nome é A")
    }
}

class B extends A {
    public getnome(): void {
        console.log("Meu nome é B")
    }

    public getSobrenome(): void {
        console.log("Meu sobrenome é ABC")
    }
}

const aobject: A = new A
const bobject: B = new B


function imprimeNome(objeto: A) {
    objeto.getnome()
}

imprimeNome(aobject)
imprimeNome(bobject)