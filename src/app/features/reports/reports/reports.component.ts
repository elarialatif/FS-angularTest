import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutesService } from 'src/app/core/services/routes.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private route: ActivatedRoute , private _routesService: RoutesService) { }

  ngOnInit(): void {
    this._routesService.setRoutes(this.route)
  }

}
