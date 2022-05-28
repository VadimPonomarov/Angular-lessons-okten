import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'jsonToString'
})
export class JsonToStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace('{', '').replace('}', '');
  }

}
