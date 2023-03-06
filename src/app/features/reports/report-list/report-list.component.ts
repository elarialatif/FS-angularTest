import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/core/services/app/reports.service';
@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  products : [] =[];
  users : [] =[];
  comments : [] =[];
  productsLength: number = 0;
  usersLength: number = 0;
  commentsLength: number = 0;
  errorMessage = '';
  constructor(
    private _reports: ReportsService,

  ) {
  }


  ngOnInit(): void {
    this.getPostsLength();
    this.getUsersLength();
    this.getCommentsLength();
  }
  private getPostsLength() {
    this._reports.getPostsReport().subscribe({
      next: (res) => {
        if (res) {
          this.products = res;
          this.productsLength =  this.products.length;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
  private getUsersLength() {
    this._reports.getUsersReport().subscribe({
      next: (res) => {
        if (res) {
          this.users = res;
          this.usersLength =  this.users.length;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
  private getCommentsLength() {
    this._reports.getCommentsReport().subscribe({
      next: (res) => {
        if (res) {
          this.comments = res;
          this.commentsLength =  this.comments.length;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
