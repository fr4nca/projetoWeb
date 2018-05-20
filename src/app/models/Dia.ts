import { Atividade } from "./Atividade";

export interface Dia {
  dia: number;
  data: string;
  atividades: Atividade[];
}
