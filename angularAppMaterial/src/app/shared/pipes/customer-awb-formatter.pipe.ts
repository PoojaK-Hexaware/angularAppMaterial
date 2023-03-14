import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerAwbFormatter'
})
export class CustomerAwbFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
