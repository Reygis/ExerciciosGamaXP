"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empregado = void 0;
const Pessoa_1 = require("./Pessoa");
class Empregado extends Pessoa_1.Pessoa {
    contrato() {
        console.log("Contrato de prestação de servicos clt");
    }
}
exports.Empregado = Empregado;
