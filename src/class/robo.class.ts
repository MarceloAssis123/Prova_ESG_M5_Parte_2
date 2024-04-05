import {FilaClass} from "./fila.class";

class RoboClass extends FilaClass{
    constructor(protected filaArray: string[]){
        super(filaArray)
    }

    adicionarTarefa(tarefa: string): void{
        console.log(this.filaArray)
        this.enfileirar(tarefa)
    }

    executarProximaTarefa(): string | Error{
        return this.desenfileirar()
    }

    executarTodasTarefas(): string[] {
        const tarefasExecutadas = this.filaArray.slice()
        if (this.filaArray.length > 0){
            while(this.filaArray.length){
                this.filaArray.shift()
            }
        }
        return tarefasExecutadas

    }
}

const roboAtivo = new RoboClass(['Limpar Cozinha', 'Limpar Quarto'])

export default roboAtivo