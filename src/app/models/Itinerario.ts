import { Atividade } from './Atividade';
import { Local } from './Local';
import { User } from './User';

export interface Itinerario {
    atividades: Atividade[],
    local: Local,
    usuario: User,
    descricao: string,
    nome: string,
    id?: number ,
    avaliacao?: number,
    likect?: number,
    rate_it?: number 
}
