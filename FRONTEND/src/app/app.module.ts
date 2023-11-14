import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SearchProductsPipe} from "./pipes/search-produits.pipe";
import { ProductSearchComponent } from './components/product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    SearchProductsPipe,
    ProductSearchComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
