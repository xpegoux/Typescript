import { IPolygon } from "./IPolygon";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";

export class FactoryPolygon {
    private static error(): IPolygon {
        throw new Error("Polígono inválido!")
    }
    public static createPolygon(numeroLados: number): IPolygon {
        if (numeroLados === 3) {
            return new Triangle();
        } else if (numeroLados === 4) {
            return new Rectangle();
        } else {
           return this.error();
        }
    }

}