import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , InputTextModule, ButtonModule, MessageModule
  ]
})
export class PrimngModule { }
