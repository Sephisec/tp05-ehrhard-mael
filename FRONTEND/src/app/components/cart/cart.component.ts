import { Component } from '@angular/core';
import {Product} from "../../shared/models/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  addedProducts: Product[];
}
