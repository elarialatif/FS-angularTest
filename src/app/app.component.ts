import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { AuthService } from './core/services/app/auth.service';
import { TokenStorageService } from './core/services/app/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'internal-audit';

  constructor(
    private _tokenStorageService: TokenStorageService,
    private _auth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
    // private _location: Location
  ) {

  }

  ngOnInit(): void {
    console.log("This is for testing CICD");

    this.checkIsLoggedInUser();
  }

  checkIsLoggedInUser() {
    const user = this._tokenStorageService.getUser();
    // if(user ){
    //   this._auth.getCurrentUserInfo().subscribe(res => {

    //      console.log(res, 'user');
    //     this._auth.shareCurrentUserData(res)
    //     this.checkCurrentRoute() && this._router.navigate(['/portal/finding'])
    //   })
    // }
  }

  checkCurrentRoute(){
    const url = window.location.pathname;
    const routes = [window.location.host, 'login']
    // console.log(routes.some(x => url.includes(x)), window.location);

    return routes.some(x => url.includes(x))
  }

}
