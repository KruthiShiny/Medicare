import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Products } from '../Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : Products[] = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private router: Router) { }
  checkOut(): void{
    this.router.navigate(['/payment']);
 }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    console.log("products" +  this.products)   
  }
  removeItem(product: any){
    this.cartService.removeCartItem(product);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
     
  

  

}
