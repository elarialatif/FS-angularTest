import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiUrls } from 'src/app/core/configs/api-urls';
import { BaseService } from '../base.service';
import { IApplicationUsers } from '../../interfaces/application-users.interface';
import { TokenStorageService } from './token-storage.service';
import { USER_TYPES } from '../../enums/user-types.enum';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private userSource = new BehaviorSubject<IApplicationUsers | null>(null);
  currentUser = this.userSource.asObservable();

  user!: IApplicationUsers

  roles: USER_TYPES[] = [];

  constructor(
    injector: Injector,
    private _tokenStorageService: TokenStorageService
    ){
    super(injector)
  }


  // Login
  login(userName: string, password: string, rememberMe: boolean): Observable<any> {
    return this.post(ApiUrls.auth.login, {
      userName,
      password,
      rememberMe
    });
  }

  getCurrentUserInfo(){
    const user: any = this._tokenStorageService.getUser()
    // console.log(user);

    // const url = `${ApiUrls.ApplicationUser.GetApplicationUserById}?${this.toQueryString({id: user.id})}`
    // const url = `${ApiUrls.Finding.GetFindingById}?${this.toQueryString({findingId})}`
    // return this.get<IApplicationUsers>(url)
  }

  shareCurrentUserData(user: IApplicationUsers){
    // console.log(user?.userRoles, 'shared');

    this.roles = user?.userRoles?.map(x => x.roleId)
    this.user = user;
    this.userSource.next(user)
  }

  get getCurrentUserRole() {
    // console.log(this.roles);

    return this.roles
  }
}
