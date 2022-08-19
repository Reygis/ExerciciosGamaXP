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
