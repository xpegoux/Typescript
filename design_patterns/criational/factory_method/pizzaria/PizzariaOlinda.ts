import { IPizza, PizzariaOlindaCalabresa, PizzariaOlindaMargherita, PizzariaOlindaMuzzarela } from "./IPizza";
import { Pizzaria } from "./Pizzaria";

export class PizzariaOlinda extends Pizzaria {
    private  error(): IPizza{
       throw new Error("Erro de pizza!");
    }
    public createPizza(type: number): IPizza {
        if (type === 1) {            
            return new PizzariaOlindaCalabresa();
        } else if (type === 2) {
            return new PizzariaOlindaMargherita();
        } else if (type === 3) {
            return new PizzariaOlindaMuzzarela();
        } else { 
            return this.error();
        }
    }
}