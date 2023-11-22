import { Component } from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {ProductState} from "../../shared/states/product.state";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor() {
  }
  @Select(ProductState.getProducts) addedProducts$: Observable<Product[]>;
}
