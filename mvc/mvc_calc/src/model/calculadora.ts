    export default class Calculadora {
        soma(primeiroNumero: number, segundoNumero: number): number {
            return primeiroNumero + segundoNumero;
        }

        subtracao(primeiroNumero: number, segundoNumero: number): number {
            return primeiroNumero - segundoNumero;
        }

        multiplicacao(primeiroNumero: number, segundoNumero: number): number {
            return primeiroNumero * segundoNumero;
        }

        exponencial(primeiroNumero: number, segundoNumero: number): number {
            return primeiroNumero ** segundoNumero;
        }

        divisao(primeiroNumero: number, segundoNumero: number): number {
            return primeiroNumero / segundoNumero;
        }

        restoDivisao(primeiroNumero: number, segundoNumero: number): number {
            return primeiroNumero / segundoNumero * 100;
        }
    }