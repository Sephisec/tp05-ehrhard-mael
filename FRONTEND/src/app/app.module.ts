import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SearchProductsPipe} from "./pipes/search-produits.pipe";
import { ProductSearchComponent } from './components/catalogue/product-search/product-search.component';
import {NgxsModule} from "@ngxs/store";
import {ProductState} from "./shared/states/product.state";
import {CartComponent} from "./components/cart/cart.component";
import { LoginComponent } from './components/login/login.component';
import {ApiHttpInterceptor} from "./http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ProductSearchComponent,
    CartComponent,
    SearchProductsPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([ProductState])
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
