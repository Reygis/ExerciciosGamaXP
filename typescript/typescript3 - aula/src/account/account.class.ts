import { Client } from "../client/cliente.class"

export class Account {
    private id: number
    protected account_number: string
    protected agency: string
    private balance: number
    public client: Client

    constructor (account_number: string,agency: string, client: Client,id:number){
        this.id = id
        this.account_number = account_number 
        this.agency = agency 
        this.balance = 0
        this.client = client
    }

    public getId():number {
        return this.id
    }

    public getBalance(): number {
        return this.balance
    }

    public deposit(value: number) : number | null {
        if(value > 0){
            this.balance += value    
            return this.getBalance()
        }
        return null
    }

    public withdraw(value: number) : void {
        this.balance -= value 
    }
}