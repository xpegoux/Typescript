import { IPizza, PizzariaRecifeCalabresa, PizzariaRecifeMargherita, PizzariaRecifeMuzzarela } from "./IPizza";
import { Pizzaria } from "./Pizzaria";

export class PizzariaRecife extends Pizzaria {
    private  error(): IPizza{
       throw new Error("Erro de pizza!");
    }
    public createPizza(type: number): IPizza {
        if (type === 1) {            
            return new PizzariaRecifeCalabresa();
        } else if (type === 2) {
            return new PizzariaRecifeMargherita();
        } else if (type === 3) {
            return new PizzariaRecifeMuzzarela();
        } else { 
            return this.error();
        }
    }
}