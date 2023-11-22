import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ProductStateModel} from "../models/product.state.model";
import {AddProduct, RemoveProduct} from "../actions/product.actions";
import {Injectable} from "@angular/core";

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})

@Injectable()
export class ProductState{
  @Selector()
  static getProducts(state: ProductStateModel)
  {
    return state.products ?? [];
  }

  @Action(AddProduct)
  add({getState, patchState} : StateContext<ProductStateModel>,{payload}: AddProduct){
    const state = getState();
    patchState({products: [...state.products, payload]});
  }

  @Action(RemoveProduct)
  remove({getState, patchState} : StateContext<ProductStateModel>,{payload}: RemoveProduct){
    const state = getState();
    patchState({products: [...(state.products.filter(p => p!==payload))]});
  }
}
