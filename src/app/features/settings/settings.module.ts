import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DialogModule} from 'primeng/dialog';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    DialogModule,
    CommonModule,
    SettingsRoutingModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    TranslateModule,
    CheckboxModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    InputSwitchModule

  ]
})
export class SettingsModule { }
