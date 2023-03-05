import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    ReportsComponent,
    ReportListComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ButtonModule,
    TranslateModule,
    ReactiveFormsModule,
    CardModule,
  ]
})
export class ReportsModule { }
