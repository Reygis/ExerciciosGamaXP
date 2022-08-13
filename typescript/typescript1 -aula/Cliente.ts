import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    assinante : boolean

    constructor(nome : string,idade : number,estado : string,cidade : string, cpf : string, assinante:boolean) {
        super(nome,idade,estado,cidade,cpf);
        this.assinante = assinante
    }

    

    verificarAssinatura(){
        this.assinante ? console.log('É assinante') : console.log('Não é assinante')
    }

}