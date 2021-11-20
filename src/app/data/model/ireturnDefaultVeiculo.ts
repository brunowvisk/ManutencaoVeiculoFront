import { iveiculosmodel } from "./iveiculos-model/iveiculos-model";

export interface ireturnDefaultVeiculo{
  sucesso: boolean;
  msg: string;
  dado: iveiculosmodel[];
}