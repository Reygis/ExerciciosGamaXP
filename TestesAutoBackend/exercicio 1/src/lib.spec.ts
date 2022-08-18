import soma from './lib';

describe("somando um monte de somas",()=> {
    test('adds 1 + 2 to equal 3', () => {
        expect(soma(1, 2)).toBe(3);
      });
    test("soma de soma", () => {
        expect(soma(soma(1,2),3)).toBe(5);
    })
    test("soma de soma de soma", ()=> {
        expect(soma(soma(1,2),soma(3,4))).toBe(10);
    })
})
