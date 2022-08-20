"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornaException = exports.retornaArray = exports.retornaFalse = exports.retornaTrue = exports.retornaDefined = exports.retornaUndefined = exports.retornaNull = exports.retorna10 = void 0;
function retorna10() {
    return 10;
}
exports.retorna10 = retorna10;
function retornaNull() {
    return null;
}
exports.retornaNull = retornaNull;
function retornaUndefined() {
    return undefined;
}
exports.retornaUndefined = retornaUndefined;
function retornaDefined() {
    const texto = 'Hello World';
    return texto;
}
exports.retornaDefined = retornaDefined;
function retornaTrue() {
    return true;
}
exports.retornaTrue = retornaTrue;
function retornaFalse() {
    return false;
}
exports.retornaFalse = retornaFalse;
function retornaArray() {
    return ['João', 'Paulo', 'Miguel', 'Pedro'];
}
exports.retornaArray = retornaArray;
function retornaException() {
    throw Error('Aconteceu alguma coisa');
}
exports.retornaException = retornaException;
