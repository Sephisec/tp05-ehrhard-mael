import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {Select, Store} from "@ngxs/store";
import {map, Observable} from "rxjs";
import {ProductState} from "../../shared/states/product.state";
import {RemoveProduct} from "../../shared/actions/product.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private readonly store: Store) {
  }

  @Select(ProductState.getProducts) addedProducts$: Observable<Product[]>;
  productNumber$: Observable<number>;

  ngOnInit(): void {
    this.productNumber$ = this.addedProducts$.pipe(
      map(products => products.length));
  }

  onProductDelete(p: Product) {
    this.store.dispatch(new RemoveProduct(p));
  }
}
