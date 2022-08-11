import { FabricaGenerica } from "./FabricaGenerica"
import { ItemGenerico } from "./itemGenerico";
import { Servico } from "./Servico";

export class FabricaDeServicos extends FabricaGenerica{
    public criarUmItem(): ItemGenerico {
        return new Servico(); 
    }

}