import { Animal } from "./Animal";

export class Dog extends Animal {
    public raca : string

    constructor(
        nome : string,
        qntPatas : number,
        terrestre : boolean,
        vacinado : boolean,
        raca : string)
    {
        super(nome,qntPatas,terrestre,vacinado)
        this.raca = raca        
    }

    public latir(){
        console.log(`${this.nome} começou a latir`)
    }

    protected alterarRaca (raca){
        this.raca = raca
    }

}