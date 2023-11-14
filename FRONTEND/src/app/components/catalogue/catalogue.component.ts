import {Component} from '@angular/core';
import { Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Product} from "../../shared/models/product.model";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent{

  constructor(private readonly catalogueService: ApiService) {
    this.products$ = this.catalogueService.getProducts();
  }

  productFilter='';

  products$: Observable<Product[]>;

  changeProductFilter(newFilter: string) {
    this.productFilter=newFilter;
  }
}
