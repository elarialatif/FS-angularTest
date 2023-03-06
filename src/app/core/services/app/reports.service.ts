import { Injector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private http: HttpClient;
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getUsersReport(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
  getPostsReport(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }
  getCommentsReport(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/comments')
  }
}
