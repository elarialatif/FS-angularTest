import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardNavbarComponent } from './layouts/dashboard-layout/dashboard-navbar/dashboard-navbar.component';
import { DashboardSideMenuComponent } from './layouts/dashboard-layout/dashboard-side-menu/dashboard-side-menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthLanguageComponent } from '../auth/auth/auth-language/auth-language.component';
import { PrimngModule } from './primeng/primng.module';
import { PanelMenuModule } from 'primeng/panelmenu';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    DashboardNavbarComponent,
    DashboardSideMenuComponent,
    DashboardLayoutComponent,
    AuthLanguageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrimngModule,
    PanelMenuModule

  ],
  exports:[ PrimngModule,
    AuthLanguageComponent ]
})
export class SharedModule { }
