import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductPipe } from './pipes/product.pipe';
import { DetailsComponent } from './containers/details/details.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductPipe,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
