import { ItemGenerico } from "./itemGenerico";

export class Servico implements ItemGenerico{
    private codigo: number;
    private nome:string;
    private valor: number;
    private aliquota: number;

    public constructor(){
        this.codigo = 1234;
        this.nome = 'Formatacao de PC';
        this.valor = 100;
        this.aliquota = 4;

    }
    exibir(): void {
        console.log(`SERVICO: ${this.codigo}-${this.nome}-R$ ${this.valor}-${this.aliquota}%`)
    }
}