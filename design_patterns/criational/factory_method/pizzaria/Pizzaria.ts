import { IPizza } from "./IPizza"
export abstract class Pizzaria {
    protected abstract createPizza(type: number): IPizza;
}