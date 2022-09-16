import { Util } from "./Util"
import { Personagem } from "./Personagem"

//lembrando que o construtor da subclasse, é obrigada a ter os mesmos parâmetros do construtor da superclasse, porém ela pode ter parâmetros a mais sem interferir na superclasse.
//super sempre tem que ta na primera linha após o construtor.
export class Warrior extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string){
        //referenciando o construtor da super e seu parametro respectivamente.
        super(nome);
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(30, this._vidaMaxima);
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }
}