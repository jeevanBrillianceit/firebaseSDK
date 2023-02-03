import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'messageTrim' })
export class MessageTrimPipe implements PipeTransform {
  transform(value: any, max: number) {
    return value && value.length >= max
      ? value.split('', max).join('') + '...'
      : value;
  }
}
