export class Util {
    public static randomizar(inicio: number, fim: number): number {
        return inicio + Math.random() * (fim - inicio);
    }
}
//classe criada apenas para fazer uso de seu metodo estático para randomizar os numeros dos atributos do personagem. Lembrando que o uso do static é muito específico e não é para ser utilizado o tempo todo.