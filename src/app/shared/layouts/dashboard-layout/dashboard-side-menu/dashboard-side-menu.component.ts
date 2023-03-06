import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TokenStorageService } from 'src/app/core/services/app/token-storage.service';
import { USER_TYPES } from 'src/app/core/enums/user-types.enum';
import { AuthService } from 'src/app/core/services/app/auth.service';
@Component({
  selector: 'app-dashboard-side-menu',
  templateUrl: './dashboard-side-menu.component.html',
  styleUrls: ['./dashboard-side-menu.component.scss']
})
export class DashboardSideMenuComponent implements OnInit {
  isLoggedIn = false;
  items: MenuItem[] = [];
  roles: USER_TYPES[] = [];
  currentUserRole : any;
  // Labels
  homeLabel: string = '';
  productsLabel: string = '';
  usersLabel: string = '';
  profileLabel: string = '';

  //
  constructor(
    private router: Router,
    private _languageService: LanguageService,
    private tokenStorageService: TokenStorageService,
    private _auth: AuthService
  ) { }


  ngOnInit(): void {
    // Labels
    this.homeLabel = 'Home',
    this.productsLabel = 'Products',
    this.usersLabel = 'Users',
    this.profileLabel = 'Profile',

    //
    this.items = [
      {
        label: this.homeLabel,
        icon: 'pi pi-home',
        routerLink: '/pages/reports',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: this.productsLabel,
        icon: 'pi pi-list',
        routerLink: '/pages/settings/products',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: this.usersLabel,
        icon: 'pi pi-users',
        routerLink: '/pages/settings/users',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: this.profileLabel,
        icon: 'pi pi-user',
        routerLink: '/pages/profile',
        routerLinkActiveOptions: { exact: true },
      }

    ];
  }



  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["/"]);
  }

}
