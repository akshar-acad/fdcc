import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'currency' })
export class AmountPipe implements PipeTransform {
    transform(value: number, symbol: string = null): any {
        if(!value) return symbol ? symbol + " -" : "";

        let roundValue = value.toFixed(Math.max(0, ~~2));
        return symbol ? symbol + " " + roundValue : roundValue;
    

    

    }
}