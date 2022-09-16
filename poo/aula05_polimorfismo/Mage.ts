import { Util } from "./Util"
import { Personagem } from "./Personagem"

export class Mage extends Personagem {
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string){
        super(nome);
        this._armadura = Util.randomizar(50, 5_000);
        this._vidaMaxima = Util.randomizar(20, 5_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(100, 1_000);
    }

    public atacar() : string {
        return "Bola de fogo";
    }
    public defender(): string {
        return "Barreira de gelo";
    }
}