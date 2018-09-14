import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, max: number = 5, postfix: string = '***'): any {
    let len = value.length;
    if (len > max) {
      return value.substr(0, max) + postfix;
    } else {
      return value;
    }
  }

}
