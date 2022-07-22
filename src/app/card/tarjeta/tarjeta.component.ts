import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})



export class TarjetaComponent {

  mesesYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  years = [22, 23, 24, 25, 26, 27, 28]

  cardNumber: string = ''
  cardName: string = ''
  month: number | string = "MM"
  year: number[] | string = "YY"
  cvv: number | null = null


  @ViewChild('formulario-tarjeta')
  formulario!: ElementRef;

  
  // Agregando clase que rota la tarjeta
  rotate(tarjeta: HTMLElement) {
    tarjeta.classList.toggle('active')
  }

  // Mostrar formulario con boton giratorio
  displayForm() {
    document.getElementById('formulario-tarjeta')?.classList.toggle('active')
    document.getElementById('btn-abrir-formulario')?.classList.toggle('active')
  }

  complete() {
    const inputNumero = document.getElementById('inputNumero')
    inputNumero?.classList.toggle('active')


    this.cardNumber = document.querySelector('#numero')?.textContent!;


// Desarrollando para cambiar imagen dinamicamente segun codigo verificador 

     switch (this.cardNumber) {

      case "3":
        document.getElementById('logo-marca')!.innerHTML = ''
        let imagen2 = document.createElement('img')
        imagen2.src = '/assets/img/logos/americanexpress.png'
        document.getElementById('logo-marca')!.appendChild(imagen2)
        break;

      case "4":
        document.getElementById('logo-marca')!.innerHTML = ''
        let imagen = document.createElement('img')
        imagen.src = '/assets/img/logos/visa.png'
        document.getElementById('logo-marca')!.appendChild(imagen)
        break;

      case "5":
        document.getElementById('logo-marca')!.innerHTML = ''
        let imagen1 = document.createElement('img')
        imagen1.src = '/assets/img/logos/mastercard.png'
        document.getElementById('logo-marca')!.appendChild(imagen1)
        break;

      case "6":
        document.getElementById('logo-marca')!.innerHTML = ''
        let imagen3 = document.createElement('img')
        imagen3.src = '/assets/img/logos/discover.png'
        document.getElementById('logo-marca')!.appendChild(imagen3)
        break;
    }

    this.voltearTarjeta()
  }

  voltearTarjeta(){
    if(document.getElementById('tarjeta')?.classList.contains('active')){
      document.getElementById('tarjeta')?.classList.remove('active')
    }}







}


