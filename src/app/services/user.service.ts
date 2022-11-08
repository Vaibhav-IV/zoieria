import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserDetails() {
    if(localStorage.getItem('userData')){
      return localStorage.getItem('userData')
    }else{
      return null
    }
    
  }
  
  setDataInLocalStorage(variableName:any, data:any) {
    localStorage.setItem(variableName, data);
  }

  getDataFromLocalStorage() {
    localStorage.getItem('userData');
  }

  getToken() {
      return localStorage.getItem('token');
  }

  clearStorage() {
      localStorage.clear();
  }
}
