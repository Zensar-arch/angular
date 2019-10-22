import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product : Product={productId:1,name:"lipbalm",brand:"nykaa",price:500}
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
onSubmit(){
  console.log(this.product);
  this.productService.addProduct(this.product).subscribe();
}
}
