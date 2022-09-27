import { Correios } from "./shipping/correios";
import { JadLog } from "./shipping/jadlog";
import { DHL } from "./shipping/dhl";
import { Fedex } from "./shipping/fedex";
import { TNT } from "./shipping/tnt";



//Strategy
interface FreteServico {
    calcula(peso: number): number;
}

//Concrate Strategy
class Sedex implements FreteServico {
    calcula(peso: number): number {
        let correios = new Correios();
        let valorTotal = correios.calculaRemessa("SEDEX", peso);
        return valorTotal
    }
}

class Pac implements FreteServico {
    calcula(peso: number): number {
        let correios = new Correios();
        let valorTotal = correios.calculaRemessa("PAC", peso);
        return valorTotal
    }
}

class JadLog implements FreteServico {
    calcula(peso: number): number {
        let valorTotal = calculaFreteJadLog(peso);
        return valorTotal
    }
}

class DHL implements FreteServico {
    calcula(peso: number): number {
        let dhl = new DHL();
        let valorTotal = dhl.priceCalculator(peso);
        return valorTotal
    }
}

class Fedex implements FreteServico {
    calcula(peso: number): number {
        let fedex = new Fedex();
        let valorTotal = fedex.shippingPrice(peso);
        return valorTotal
    }
}

class TNT implements FreteServico {
    calcula(peso: number): number {
        let tnt = new TNT();
        let valorTotal = tnt.shippingPriceCalculator("PAC", peso);
        return valorTotal
    }
}
//Context
class Frete {
    private servico: FreteServico;

    constructor(servico: FreteServico) {
        this.servico = servico;
    }

    calcula(peso: number) {
        let valorTotal = this.servico.calcula(peso);
        return valorTotal;
    }
}