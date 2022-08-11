import { ItemGenerico } from "./itemGenerico";

export abstract class FabricaGenerica{

    public abstract criarUmItem() : ItemGenerico;
}