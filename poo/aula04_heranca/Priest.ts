import { Util } from "./Util"
import { Personagem } from "./Personagem"

//lembrando que o construtor da subclasse, é obrigada a ter os mesmos parâmetros do construtor da superclasse, porém ela pode ter parâmetros a mais sem interferir na superclasse.
//super sempre tem que ta na primera linha após o construtor.
export class Priest extends Personagem {
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string){
        //referenciando o construtor da super e seu parametro respectivamente.
        super(nome);
        this._armadura = Util.randomizar(100, 10_000);
        this._vidaMaxima = Util.randomizar(20, 5_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._espirito = Util.randomizar(100, 1_000);
        this._versatilidade = Util.randomizar(100, 1_000);
    }
}