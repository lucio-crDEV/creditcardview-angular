import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditName'
})
export class CreditNamePipe implements PipeTransform {

  transform(name: string): string {
    return name.replace(/[0-9]/g, '')
  }

}
