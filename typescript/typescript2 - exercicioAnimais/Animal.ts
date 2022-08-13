export class Animal {
    public nome : string
    public qntPatas : number
    public terrestre : boolean
    protected vacinado : boolean   
    
    constructor (
        nome : string,
        qntPatas : number,
        terrestre : boolean,
        vacinado : boolean ){
            this.nome = nome
            this.qntPatas = qntPatas
            this.terrestre = terrestre
            this.vacinado = vacinado
    }

    protected perfil (){
        console.log(`${this.nome} é um animal de ${this.qntPatas} patas.`)
    }

    public andar (){
        this.terrestre ? console.log(`${this.nome} está andando`)
        : console.log (`${this.nome} não é um animal terrestre ou tem uma pata a menos, portanto não pode andar.`)
    }

    private vacinar(){
        this.vacinado = true
        console.log(`${this.nome} está vacinado.`)
    }
}