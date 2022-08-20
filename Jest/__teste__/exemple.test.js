const example = require('../dist/example.class')

test("tem que ser igual", ()=>{
    expect(example.retorna10()).toBe(10)
})

test("tem que ser Null", ()=>{
    expect(example.retornaNull()).toBeNull()
})

test("tem que ser Undefined", ()=>{
    expect(example.retornaUndefined()).toBeUndefined()
})

test("tem que ser Defined", ()=>{
    expect(example.retornaDefined()).toBeDefined()
})

test("tem que ser verdadeiro", ()=>{
    expect(example.retornaTrue()).toBeTruthy()
})

test("tem que ser Mentira", ()=>{
    expect(example.retornaFalse()).toBeFalsy()
})

test('Tem que ter João',() => {
  expect(example.retornaArray()).toContain('João')  
})

test('Tem que ser tudo igual',() => {
  expect(example.retornaArray()).toEqual(['João', 'Paulo', 'Miguel', 'Pedro'])  
})

test('Não tem que ser igual',() => {
  expect(example.retornaArray()).not.toEqual(['Paulo', 'Miguel', 'Pedro','João'])  
})

test('Tem que ser maior', () => {
    expect(example.retorna10()).toBeGreaterThan(8)
})

test('Tem que ser maior ou igual',()=>{
    expect(example.retorna10()).toBeGreaterThanOrEqual(10)
})

test('Tem que ser menor', ()=>{
    expect(example.retorna10()).toBeLessThan(12)
})

test('Tem que ser menor ou igual', ()=>{
    expect(example.retorna10()).toBeLessThanOrEqual(10)
})

test('Tem que conter Hello e World', ()=>{
    expect(example.retornaDefined()).toMatch(/Hello|Batata/)
})

test('Tem que conter Hello e World maneira diferente', ()=>{
    expect(example.retornaDefined()).toMatch(new RegExp('Hello'))
})

test('Tem que retornar execption' , ()=>{
    expect( ()=>{
        example.retornaException()
        //aceita varias funções mas se 1 der certo vai passar no test
    }).toThrow()
})