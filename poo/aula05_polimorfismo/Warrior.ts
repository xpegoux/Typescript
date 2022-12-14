import { Util } from "./Util"
import { Personagem } from "./Personagem"

export class Warrior extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string){
        super(nome);
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(30, this._vidaMaxima);
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }

    public atacar() : string {
        return "Corte cruzado";
    }
    public defender(): string {
        return "Escudo de ferro";
    }
}