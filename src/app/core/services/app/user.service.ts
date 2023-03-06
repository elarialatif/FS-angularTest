import { Injector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getProfile(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
  getProfileById(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/1')
  }
}
