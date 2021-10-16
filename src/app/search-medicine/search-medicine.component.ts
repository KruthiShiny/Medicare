import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {
  productName!: string;
  products : any;
  
  constructor(private service: ProductService,private cartService:CartService) { }

  ngOnInit(): void {
  }
  public findProductByProductName(){
    console.log("hi i m in");
    let response = this.service.getProductsByProductName(this.productName);
    response.subscribe(data => this.products=data);
    
  }
   addtoCart(products:any){
     this.cartService.addtoCart(products);
   }

}
