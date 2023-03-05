import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/core/services/app/reports.service';
@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  productsLength: number = 0;
  usersLength: number = 0;
  errorMessage = '';
  constructor(
    private _reports: ReportsService,

  ) {
  }


  ngOnInit(): void {
    this.getProductsData();
  }
  private getProductsData() {
    this._reports.getAllProducts().subscribe({
      next: (res) => {
        if (res) {
          this.productsLength = res.findings;
          this.usersLength = res.auditPlans;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
