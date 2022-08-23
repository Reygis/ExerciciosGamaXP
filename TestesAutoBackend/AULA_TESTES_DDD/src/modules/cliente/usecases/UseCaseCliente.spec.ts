import { UseCaseCliente } from "./UseCaseCliente"


describe("Teste dos casos de uso do cliente", ()=>{
    const ucc: UseCaseCliente = new UseCaseCliente();
    
    test("Teste recuperar cliente", ()=>{
        expect(ucc.recuperarPeloId(1)).toBeDefined();
    });
    
    test("Recuperando cliente que ñ existe", ()=>{
        expect(ucc.recuperarPeloId(2)).toBeNull();
    })
});
