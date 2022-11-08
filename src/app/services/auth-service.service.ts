import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
//import { baseUrl } from 'src/environments/environment';

const baseURL = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  getTypeRequest(url: any) {
    return this.http.get(`${baseURL}${url}`).pipe(map(res => {
      return res;
    }));
  }
  login(data: any):Observable<any>{
    return this.http.post(`${baseURL}users/login`,data);
  }
  register(data: any):Observable<any>{
    return this.http.post(`${baseURL}users/`,data);
  }
}
