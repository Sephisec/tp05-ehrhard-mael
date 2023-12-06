import {Component} from '@angular/core';
import {Observable, reduce} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Product} from "../../shared/models/product.model";
import {AddProduct} from "../../shared/actions/product.actions";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent{

  constructor(private readonly catalogueService: ApiService,
              private readonly store: Store) {
    this.products$ = this.catalogueService.getCatalogue();
    this.productCount$ = this.store.select(state => state.products).pipe(reduce((sum, val) => sum+val));
  }

  productFilter='';

  products$: Observable<Product[]>;

  productCount$: Observable<number>;

  changeProductFilter(newFilter: string) {
    this.productFilter=newFilter;
  }

  addProductToCart(p: Product) {
    this.store.dispatch(new AddProduct(p));
  }
}
