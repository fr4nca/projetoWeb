import { Atividade } from "./Atividade";
import { Local } from "./Local";
import { User } from "./User";
import { Dia } from "./Dia";
import { Comentario } from "./Comentario";

export interface Itinerario {
  dias: Dia[];
  local: Local;
  usuario: User;
  descricao: string;
  nome: string;
  avaliacao?: number;
  likect?: number;
  rate_it?: number;
  comentarios: Comentario[];
}
