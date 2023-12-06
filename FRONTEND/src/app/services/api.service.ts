import { Injectable } from '@angular/core';
import {Product} from "../shared/models/product.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ClientModel} from "../models/client.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public loginClient(login: string, password: string): Observable<ClientModel> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<ClientModel>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }

  public getCatalogue(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendCatalogue);
  }
}
