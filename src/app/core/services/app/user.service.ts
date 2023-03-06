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
  AddNewUser(user: any){
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users', user)
  }
  DeleteUser(userId: string){
    let user ={
      Id:""
    };
    user.Id=userId;
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/users')
  }


  UpdateUser(user: any){
    return this.http.put<any>('https://jsonplaceholder.typicode.com/users', user)
  }
}
