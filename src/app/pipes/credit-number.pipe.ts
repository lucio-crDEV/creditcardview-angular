import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditNumber'
})
export class CreditNumberPipe implements PipeTransform {

  transform(numberCC: string): any {

      return numberCC
      // Eliminando espacios en blanco
      .replace(/\s/g, '')
      // Elimina las letras
      .replace(/\D/g, '')
      // Agregar espacio cada cuatro números
      .replace(/([0-9]{4})/g, '$1 ')
      // Eliminando últimos espaciados
      .trim()
  }

}
