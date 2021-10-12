export interface ClienteDTO {
  id: number;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  cpf: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  enderecos: EnderecoDTO[];
  telefones: TelefoneDTO[];
}

export interface TelefoneDTO {
  id: number;
  telefone: string;
}

export interface EnderecoDTO {
  id?: number;
  nome?: string;
  tipoEndereco: TipoEnderecoDTO;
  tipoLogradouro: string;
  logradouro: string;
  cep: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: CidadeDTO;
  pais: string;
  salvar?: boolean;
}

export interface CidadeDTO {
  id: number;
  nome?: string;
  estado?: EstadoDTO;
}

export interface EstadoDTO {
  id: number;
  uf: string;
  dataCriacao?: Date;
  ativo?: boolean;
}

export enum TipoEnderecoEnum {
  COBRANCA = 'COBRANÇA',
  ENTREGA = 'ENTREGA',
}

export interface TipoLogradouroDTO {
  id: number;
  descricao: string;
}

export interface BandeiraCartaoClienteDTO {
  id: number;
  descricao: string;
}
export interface EnderecoSimplificadoDTO {
  id: number;
  logradouro: string;
  cep: string;
  numero: string;
  bairro: string;
  complemento: string;
  tipoEnderecoId: number;
  tipoLogradouroId: number;
  cidade: number;
  estado: number;
  pais: string;
}

export interface TipoEnderecoDTO {
  id: number;
  dataCriacao?: Date;
  ativo?: boolean;
  descricao?: string;
}
