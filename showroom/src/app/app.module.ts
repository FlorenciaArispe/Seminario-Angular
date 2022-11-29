import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ShowroomProductComponent } from './showroom-product/showroom-product.component';
import { ShowroomAboutComponent } from './showroom-about/showroom-about.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { InputNumberComponent } from './input-number/input-number.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShowroomProductComponent,
    ShowroomAboutComponent,
    CartComponent,
    InputNumberComponent,
    ProductCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
