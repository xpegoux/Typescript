export class Correios {
    calculaRemessa(servico: string, peso: number) {
        let valor = 0;

        if (servico == "PAC") {
            valor = 10;
        } else if (servico == "SEDEX") {
            valor = 30;
        }
        
        return valor;
    }
}