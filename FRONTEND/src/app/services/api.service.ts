import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) {
    this.products=this.http.get<Product[]>('assets/products.json');
  }

  private readonly products: Observable<Product[]>;

  getProducts(): Observable<Product[]>
  {
    return this.products;
  }
}
