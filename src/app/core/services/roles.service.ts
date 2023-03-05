import { Injectable, Injector } from '@angular/core';
import { USER_TYPES } from '../enums/user-types.enum';
import { AuthService } from './app/auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BaseService{

  constructor(
    inj: Injector,
    private _auth: AuthService
  ) {
    super(inj)
  }

  checkRole(role: USER_TYPES){
    // console.log(this._auth.getCurrentUserRole, role);

   return this._auth.getCurrentUserRole.includes(role)
  }
}
