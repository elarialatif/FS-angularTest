import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { USER_TYPES } from 'src/app/core/enums/user-types.enum';
import { TokenStorageService } from 'src/app/core/services/app/token-storage.service';
@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
  @Input() navLinks: MenuItem[] = [];
  fullName: string = "";
  roles: USER_TYPES[] = [];
  currentUserRole: any;

  constructor(private tokenStorageService: TokenStorageService,) { }

  ngOnInit(): void {

    const user: any = this.tokenStorageService.getUser();
    if(user){
      // this.fullName = JSON.parse(user).firstName + '  ' + JSON.parse(user).lastName;
      this.fullName = user.firstName + '  ' + user.lastName;
      this.roles = user.userRoles?.map((x: { roleId: any; }) => x.roleId);
      this.currentUserRole = this.roles[0];
    }

  }

}
