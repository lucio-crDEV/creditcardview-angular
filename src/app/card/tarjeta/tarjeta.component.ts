import { Component,} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})

export class TarjetaComponent {

  mesesYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  years     = [22, 23, 24, 25, 26, 27, 28]

  cardNumber    : string              = ''
  cardName      : string              = ''
  month         : number   | string   = 'MM'
  year          : number[] | string   = 'YY'
  cvv           : string              = ''


  constructor( ){
    document.getElementById('selectMes')?.innerText!= 'Month'
  }
  
  // Agregando clase que rota la tarjeta
  rotate(tarjeta: HTMLElement) {
    tarjeta.classList.toggle('active')
  }

  // Mostrar formulario con boton giratorio
  displayForm() {
    document.getElementById('formulario-tarjeta')?.classList.toggle('active')
    document.getElementById('btn-abrir-formulario')?.classList.toggle('active')
  }

  complete( form: NgForm ) {
    // const inputNumero = document.getElementById('inputNumero')

    // agregar espacio en el input cada 4 
    // form.value.cardNumber.replace(/([0-9]{4})/g, '$1 ')


    document.getElementById('numero')?.textContent!=''

    // Desarrollando para cambiar imagen dinamicamente segun codigo verificador

     switch (form.value.cardNumber.slice(0, 1)) {

      case "3":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen2 = document.createElement('img')
        imagen2.setAttribute('width','150rem')
        imagen2.src = '/assets/img/logos/americanexpress.png'
        document.getElementById('logo-marca')!.appendChild(imagen2)
        break;

      case "4":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen = document.createElement('img')
        imagen.setAttribute('width','140rem')
        imagen.src = '/assets/img/logos/visa.png'
        document.getElementById('logo-marca')!.appendChild(imagen)
        break;

      case "5":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen1 = document.createElement('img')
        imagen1.setAttribute('width','130rem')
        imagen1.src = '/assets/img/logos/mastercard.png'
        document.getElementById('logo-marca')!.appendChild(imagen1)
        break;

      case "6":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen3 = document.createElement('img')
        imagen3.setAttribute('width','180rem')
        imagen3.src = '/assets/img/logos/discover.png'
        document.getElementById('logo-marca')!.appendChild(imagen3)
        break;

      case "": 
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
    }

    this.voltearTarjeta()
  }

  voltearTarjeta(){
    if( document.getElementById('tarjeta')?.classList.contains('active') ){
      document.getElementById('tarjeta')?.classList.remove('active')
    }
  }

  rellenarCVV(){
    if( !document.getElementById('tarjeta')?.classList.contains('active') ) {
      document.getElementById('tarjeta')?.classList.add('active')
    }
  }
}


