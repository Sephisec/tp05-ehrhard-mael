import { Component } from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {Store} from "@ngxs/store";
import {ProductStateModel} from "../../shared/models/product.state.model";
import {ProductState} from "../../shared/states/product.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private store: Store) {
    this.addedProducts$ = this.store.select<Product[]>(state => state.products)
  }
  addedProducts$: Observable<Product[]>;
}
