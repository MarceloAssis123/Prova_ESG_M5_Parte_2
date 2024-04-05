export class FilaClass {
    constructor(protected filaArray: string[] = []) { }

    enfileirar(item: string): void {
        this.filaArray.push(item)
    }

    desenfileirar(): string | Error {
        try {
            return this.filaArray.shift()
        }catch{
            throw new Error('Fila está vazia')
        }
    }

    vazia() {
        if(this.filaArray.length == 0){
            return true
        }
        return false
    }

}

export const fila = new FilaClass(['Fila 1'])