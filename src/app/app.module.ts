import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { MenuComponent } from './application/menu/menu.component';
import { ProduitComponent } from './application/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListproduitsComponent,
    ContactComponent,
    Error404Component,
    MenuComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
