import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    ProfileComponent,
    ProfileListComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    TranslateModule,
    ReactiveFormsModule,
    CardModule,
  ]
})
export class ProfileModule { }
