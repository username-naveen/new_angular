import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class ProductPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('Discount Pipe!', value);
    return '0% off';
  }

}
