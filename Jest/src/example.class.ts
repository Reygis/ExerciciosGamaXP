export function retorna10():number{
    return 10
}

export function retornaNull():null{
    return null
}

export function retornaUndefined():undefined{
    return undefined
}

export function retornaDefined():string{
    const texto: string = 'Hello World'
    return texto
}

export function retornaTrue():boolean {
    return true
}

export function retornaFalse():boolean {
    return false
}

export function retornaArray(): string[] {
    return ['João','Paulo', 'Miguel', 'Pedro']
}

export function retornaException(): Error {
    throw new Error('Aconteceu alguma coisa')
}