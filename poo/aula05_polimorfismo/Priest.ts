import { Util } from "./Util"
import { Personagem } from "./Personagem"

export class Priest extends Personagem {
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string){
        super(nome);
        this._armadura = Util.randomizar(100, 10_000);
        this._vidaMaxima = Util.randomizar(20, 5_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._espirito = Util.randomizar(100, 1_000);
        this._versatilidade = Util.randomizar(100, 1_000);
    }

    public atacar() : string {
        return "Benção divida";
    }
    public defender(): string {
        return "Barreira de Luz";
    }
}