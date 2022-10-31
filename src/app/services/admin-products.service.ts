import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError} from 'rxjs'

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {

  private url = "http://localhost:3000/admin/products"

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {responseType: "json"}).pipe(
      tap((_) => console.log('fetched Products'))
    );
  }
}
