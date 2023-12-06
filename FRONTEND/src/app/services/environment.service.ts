import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ClientModel} from "../models/client.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
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
