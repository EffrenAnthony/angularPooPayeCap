import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CrouselComponent } from './components/crousel/crousel.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CrouselComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
    MaterialModule
  ]
})
export class HomeModule { }
