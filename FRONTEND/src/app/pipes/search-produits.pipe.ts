import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable} from "rxjs";
import {Product} from "../shared/models/product.model";
@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(values: Observable<Product[]>, ...args: string[]): Observable<Product[]> {
    return values.pipe(map(products =>
    products.filter(p => JSON.stringify(p).toLowerCase().includes(args[0].toLowerCase()))));
  }
}
