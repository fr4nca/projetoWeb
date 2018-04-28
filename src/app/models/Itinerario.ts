import { Atividade } from './Atividade';
import { Local } from './Locall';
import { User } from './User';

export interface Itinerario {
    atividades: Atividade[],
    local: Local,
    usuario: User,
    descricao: string,
    nome: string,
    id?: number
}