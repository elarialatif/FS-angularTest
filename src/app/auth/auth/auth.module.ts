import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { TranslateModule } from '@ngx-translate/core';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [

    CommonModule,
    AuthRoutingModule,
    SharedModule   ,
    FormsModule,
    ReactiveFormsModule ,
    InputTextModule,
    ButtonModule,
    MessageModule,
    TranslateModule,
    CheckboxModule
  ]
})
export class AuthModule { }
