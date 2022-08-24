import { Clt } from "./Clt";
import { Pessoa } from "./Pessoa"

export class Empregado extends Pessoa implements Clt {
    contrato(): void {
        console.log("Contrato de prestação de servicos clt")
    }
}