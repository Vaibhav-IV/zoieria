import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs'

import { Product } from '../models/Product';
import { ErrorHandlerService } from './error-handler.service';

const baseUrl = "http://localhost:3000/admin/products/"

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {


  // httpOptions: { headers: HttpHeaders} = {
  //   headers: new HttpHeaders({"Content-Type": "application/json"})
  // }

  // constructor(private http: HttpClient,
  //   private errorHandlerService: ErrorHandlerService) { }

  //   //when the 'get' request is made we can 'tap' into it and if error occurs we can handle error in services
  //   //here in errorhandler service FtechAll is the operation we mentioned earlier in service method and 
  //   // and it will return empty array (coz we want to return empty array)
  // fetchAll(): Observable<Product[]> {
  //   return this.http
  //     .get<Product[]>(this.url, { responseType: "json" })
  //     .pipe(
  //       tap((_) => console.log('fetched Products')),
  //       catchError(
  //         this.errorHandlerService.handleError<Product[]>("fetchAll error in services", [])
  //       ));
  // }


  // post(productInputName:Partial<Product>): Observable<any>{
  //   return this.http.post<Partial<Product>>(this.url,productInputName,this.httpOptions).pipe(
  //     catchError(
  //       this.errorHandlerService.handleError<any[]>("Post error in services")
  //     )
  //   )
  // }


  constructor(private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl)
      .pipe(
        tap((_) => console.log("fetched products")),
        catchError(
          this.errorHandlerService.handleError<Product[]>("FetchALl error in services", [])
        ));
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`)
    .pipe(
      tap((_) => console.log("fetched a product")),
      catchError(
        this.errorHandlerService.handleError<Product[]>("Fetching a single product error in services", [])
      ));
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?title=${title}`);
  }

}
