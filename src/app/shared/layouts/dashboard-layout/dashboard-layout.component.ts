import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoutesService } from 'src/app/core/services/routes.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  navLinks: MenuItem[] = [];

  constructor(private changeDetector: ChangeDetectorRef,
    private _routesService: RoutesService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.navLinks = this._routesService.buildNavItems();
    // console.log('ngAfterViewInit',this.navLinks);
    this.changeDetector.detectChanges();
  }
}
