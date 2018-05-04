import { Dica } from './Dica'

export interface Atividade {
    conteudo: string,
    hora: string,
    done: boolean,
    dicas: Dica[]
}