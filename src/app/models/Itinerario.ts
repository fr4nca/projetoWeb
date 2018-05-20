import { Atividade } from "./Atividade";
import { Local } from "./Local";
import { User } from "./User";
import { Dia } from "./Dia";

export interface Itinerario {
  dias: Dia[];
  local: Local;
  usuario: User;
  descricao: string;
  nome: string;
  id?: number;
  avaliacao?: number;
  likect?: number;
  rate_it?: number;
}
