import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductData } from '../product-data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products:Product[] = new ProductData().getProductList();
  products:Product[];
  selectedProduct:Product;
  childData:string;
  errorMessage :any;
  
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(responseData => this.products=responseData,error=>{this.errorMessage=error;window.alert(this.errorMessage);});
  }
  onSelect(product:Product){
    this.selectedProduct=product;
  }
  Share(){
    window.alert('hi this product has been shared')
  }
  notifyUser(event){
    window.alert(event)
    this.childData=event;
  }
  
}
