import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
brand!:string;
products:any;
  constructor(private router: Router,private service:ProductService) { }

  ngOnInit(): void {
  }
  public findProductByBrand(){
    console.log("brand category");
    let response = this.service.getProductsByBrand(this.brand);
    response.subscribe(data=> this.products=data);
  }

}
