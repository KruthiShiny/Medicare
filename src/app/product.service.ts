import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }
  public getProducts()  {
    return this.http.get<Products[]>("http://localhost:9082/products/all");
  }
  public addProducts(products:Products){
    return this.http.post<Products>("http://localhost:9082/products/add",products);
  }
  public updateProducts(products:Products){
    return this.http.put<Products>("http://localhost:9082/products/update",products);
  }
  public deleteProducts(productsId:number ){
    return this.http.delete<any>("http://localhost:9082/products/delete/"+productsId);
  }
  public getProductsByProductName(productName: string){
    return this.http.get("http://localhost:9082/products/searchMedicine/"+productName);
  }
  public getProductsByBrand(brand: string){
    return this.http.get("http://localhost:9082/categories/"+brand);
  }

  

  
}
