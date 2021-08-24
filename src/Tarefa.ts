import { Prioridade } from "./Prioridade";

export interface Tarefa{
    status:boolean;
    description:string;
    prioridade?:Prioridade;
}