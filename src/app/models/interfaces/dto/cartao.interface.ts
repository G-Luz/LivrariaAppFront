export interface CartaoCreditoDTO {
    id: number,
    numeroCartao: string,
    nomeImpressoCartao: string,
    bandeira: string,
    codigoSeguranca: string,
    isPreferencial: boolean
}

export interface CartaoFormDTO {
    id: number,
    numeroCartao: string,
    nomeImpressoCartao: string,
    bandeira: string,
    codigoSeguranca: string,
    isNovoCartao: boolean,
    isGravarNovo: boolean,
    valorPago: number
}