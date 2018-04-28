import { Dica } from './Dica'

export interface Atividade {
    conteudo: string,
    hora: string,
    dicas: Dica[]
}