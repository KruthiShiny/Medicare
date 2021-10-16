import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Products } from '../Products';

@Component({
  selector: 'app-admin-product-handeler',
  templateUrl: './admin-product-handeler.component.html',
  styleUrls: ['./admin-product-handeler.component.css']
})
export class AdminProductHandelerComponent implements OnInit {
  public products: Products[] = [];
  public editProducts!: Products;
  public deleteProducts!: Products;
  constructor(private http:HttpClient, private productsService:ProductService) { }

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
  
   
  public onUpdateProducts(products: Products): void {
    this.productsService.updateProducts(products).subscribe(
      (response: Products) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteProducts(productsId: number): void {
    this.productsService.deleteProducts(productsId).subscribe(
      (response:any) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
 
  public searchProducts(key: string): void {
    console.log(key);
    const results: Products[] = [];
    for (const products of this.products) {
      if (products.productName.toLowerCase().indexOf(key.toLowerCase()) != -1
      || products.about.toLowerCase().indexOf(key.toLowerCase()) != -1
      || products.brand.toLowerCase().indexOf(key.toLowerCase()) != -1
      || products.price.toLowerCase().indexOf(key.toLowerCase()) != -1) {
        results.push(products);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }


  public onOpenModal(product: Products, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductsModal');
    }
    if (mode === 'edit') {
      this.editProducts = product;
      button.setAttribute('data-target', '#updateProductsModal');
    }
    if (mode === 'delete') {
      this.deleteProducts = product;
      button.setAttribute('data-target', '#deleteProductsModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
