import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(items: any[]): any {
    let sum = items.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return sum / items.length;
  }
}
