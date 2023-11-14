import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  @Output() filterChange = new EventEmitter<string>();

  searchProducts(value: string) {
    this.filterChange.emit(value);
  }
}
