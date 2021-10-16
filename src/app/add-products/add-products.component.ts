import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Products } from '../Products';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  public products: Products[] = [];
  constructor(public productsService:ProductService) { }

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
  public onAddProducts(addForm: NgForm): void {
    //document.getProductsById('add-products-form').click();
      this.productsService.addProducts(addForm.value).subscribe(
        (response: Products) => {
          console.log(response);
          this.getProducts();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }

}
