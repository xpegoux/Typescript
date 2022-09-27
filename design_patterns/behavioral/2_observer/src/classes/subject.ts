import IObserver from "../interfaces/iobserver"
import ISubject from "../interfaces/isubject"

//Aqui a diferença principal é que vai ter uma estrutura que será um array de Observers dentro da nossa classe.
export default class Subject implements ISubject {
	//criando o array de observers
	private observers: IObserver[] = [];
	
	//implementando os métodos
	subscribe(observer: IObserver): void {
		this.observers.push(observer);
	}

	unsubscribe(observer: IObserver): void{
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	unsubscribeAll(): void {
		this.observers = [];
	}
	notify(observer: IObserver): void {
		//implementando o método update da interface observer para notificar um observer
		observer.update();
	}

	notifyAll(): void {
		this.observers.forEach(obs => this.notify(obs));
	}
}
