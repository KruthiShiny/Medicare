import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { DevicesComponent } from './devices/devices.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminProductHandelerComponent } from './admin-product-handeler/admin-product-handeler.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartComponent } from './cart/cart.component';
import { SearchMedicineComponent } from './search-medicine/search-medicine.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankingComponent } from './thanking/thanking.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DevicesComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    AllUsersComponent,
    ProductsComponent,
    HomeComponent,
    AdminLoginComponent,
    CategoriesComponent,
    AdminProductHandelerComponent,
    AddProductsComponent,
    CartComponent,
    SearchMedicineComponent,
    PaymentComponent,
    ThankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
