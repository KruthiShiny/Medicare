import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductHandelerComponent } from './admin-product-handeler/admin-product-handeler.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { DevicesComponent } from './devices/devices.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SearchMedicineComponent } from './search-medicine/search-medicine.component';
import { SearchComponent } from './search/search.component';
import { ThankingComponent } from './thanking/thanking.component';

const routes: Routes = [
  //header cannot be redirected!
  //{path:"",redirectTo:"header",pathMatch:"full"},
  //{ path: "header", component: HeaderComponentComponent },
  { path: "register", component:RegisterComponent },
  { path: "login", component: LoginComponent},
  { path: "search", component: SearchComponent },
  { path: "allUsers", component: AllUsersComponent },
  //{path: "header",component:HeaderComponentComponent},
  {path:"products",component:ProductsComponent},
  {path:"home",component:HomeComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"category",component:CategoriesComponent},
  {path:"admin-product-handeler",component:AdminProductHandelerComponent},
  {path:"addProducts",component:AddProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"searchMedicine",component:SearchMedicineComponent},
  {path:"payment",component:PaymentComponent},
  {path:"thanking",component:ThankingComponent},
  {path:"devices",component:DevicesComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
