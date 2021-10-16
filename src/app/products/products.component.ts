import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { Products } from '../Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Products[] = [];
  

  constructor(private productsService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts();
  } 
  public getProducts():void{
    this.productsService.getProducts().subscribe(
      (response: Products[]) => {
        this.products = response;
        console.log(this.products);
     },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }
  addtoCart(product:any){
    this.cartService.addtoCart(product);
  }
  }
