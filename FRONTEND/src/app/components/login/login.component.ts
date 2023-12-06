import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private readonly apiService: ApiService) {
  }

  login() {
    this.apiService.loginClient(this.username, this.password);
  }
}
