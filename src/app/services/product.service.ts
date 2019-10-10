import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models/Product';
import { Score } from '../models/Score'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _Url:string= '/assets/myproduct.json';
  constructor(private http:HttpClient) { }

  getProduct():Observable<Product> {
    return this.http.get<Product>(this._Url);  
  }
}
