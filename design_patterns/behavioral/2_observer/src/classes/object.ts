import IObserver from "../interfaces/iobserver"

export default class Observer implements IObserver {
	//definir um construtor para receber um id
	constructor(public readonly id: number) {}
	
	//este metodo de update serve apenas para passar uma mensagem, por isso nao recebeu parametros, porém um update na vida real o seu código é muito mais complexo.
	update(): void {
		console.log(`Observer ${this.id} updated.`);
	}
}
