import { Cliente } from "../../../model/Cliente"

export class UseCaseCliente {
    public cadastrar(): void{

    }
    public recuperarPeloId(id: number): any {
        if(id == 1){
            return new Cliente(1,'Isidro','isidro@isidro.com','1199999999')
        }
        return null;
    }

    public recuperarTodos(): any {
        return null
    }
}