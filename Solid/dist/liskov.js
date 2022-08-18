"use strict";
class A {
    getnome() {
        console.log("Meu nome é A");
    }
}
class B extends A {
    getnome() {
        console.log("Meu nome é B");
    }
    getSobrenome() {
        console.log("Meu sobrenome é ABC");
    }
}
const aobject = new A;
const bobject = new B;
function imprimeNome(objeto) {
    objeto.getnome();
}
imprimeNome(aobject);
imprimeNome(bobject);
