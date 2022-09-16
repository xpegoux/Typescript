//encapsulamento, modificadores de acesso
export default class Personagem {
    constructor(
        private _nome: string,
        private _energia: number,
        private _vida: number,
        private _ataque: number,
        private _defesa: number
    ) {}
    //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO

    public get nome() : string {
        return this._nome;
    }    
    public set nome(nome: string) {
        this._nome = nome;
    }    
    public status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this._energia.toFixed(0)) +
            ("\nAtaque: " + this._ataque.toFixed(0)) +
            ("\nDefesa: " + this._defesa.toFixed(0))
        );
    }
    public treinarAtacar(): void {
        this._ataque += this.randomizar(7);
        this._energia -= this.randomizar(10);
        if (this._defesa > 100) {
            this._defesa = 0;
        }
    }
    public treinarDefesa(): void {
        this._defesa += this.randomizar(5);
        this._energia -= this.randomizar(10);
        if (this._defesa > 100) {
            this._defesa = 0;
        }
    }
    public descansar(hour: number): void {
        this._energia += hour * this.randomizar(10);
        if (this._energia > 100) {
            this._energia = 100;
        }
    }
    public batalhar(): number {
        let desgaste: number = this.randomizar(10);
        this._energia -= desgaste;
        return desgaste;
    }
    public isDead(): boolean {
        return this._energia < 0;
    }
    //metodo para aplicar valores aleatorios, definindo o limite como parametro. E não tem sentido dele ser acessado no main, já que ele é um método de uso da classe, internamente.
    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}