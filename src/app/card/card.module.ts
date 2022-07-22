import { CreditNamePipe } from './../pipes/credit-name.pipe';
import { CreditNumberPipe } from './../pipes/credit-number.pipe';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';



@NgModule({
  declarations: [
    TarjetaComponent,
    CreditNumberPipe,
    CreditNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TarjetaComponent,
  ]
})
export class CardModule { }
