export interface imanutencaomodel{
    id: number;
    veiculoId: number;
    pessoaId: number;
    descricao: string;
    dataManutencao: Date; 
    quantidade: string;
    dataProximaManutencao: Date;
    Oficina: string;
    tipoServico: number;
  }