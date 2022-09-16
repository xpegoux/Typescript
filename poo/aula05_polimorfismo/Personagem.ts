import { Util } from "./Util"
//geralmente quando uma superclasse existe ela deve ser abstrata, pois não faz sentido ter que instancia-la, pois ela serve apenas de "carcaça" para as subclasses.
export abstract class Personagem {
    protected _nome: string;
    protected _armadura: number;
    protected _vidaMaxima: number;
    protected _vidaAtual: number;

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
    }
    //criando um metodo abstrato para criar uma assinatura do atacar sem ter que implementa-lo de fato
    public abstract atacar() : string;    
    public abstract defender(): string;
}