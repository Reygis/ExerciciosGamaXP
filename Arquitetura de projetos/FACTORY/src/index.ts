import { FabricaDeProdutos } from "./FabricaDeProdutos";
import { FabricaDeServicos } from "./FabricaDeServicos";
import { FabricaGenerica } from "./FabricaGenerica";
import { ItemGenerico } from "./itemGenerico";



// instancio a minha fabrica
let fabricaP: FabricaGenerica = new FabricaDeProdutos()
let produto:ItemGenerico = fabricaP.criarUmItem();
produto.exibir();

let fabricaS:FabricaGenerica = new FabricaDeServicos();
let servico:ItemGenerico = fabricaS.criarUmItem();
servico.exibir();