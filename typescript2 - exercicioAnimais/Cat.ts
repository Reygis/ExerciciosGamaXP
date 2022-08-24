import { Animal } from "./Animal";

export class Cat extends Animal {
    color : string

    constructor(
        nome : string,
        qntPatas : number,
        terrestre : boolean,
        vacinado : boolean,
        color : string)
    {
        super(nome,qntPatas,terrestre,vacinado)
        this.color = color        
    }

    public miar(){
        console.log(`${this.nome} está miando`)
    }

    private pintar (color:string){
        this.color = color
    }

}