import { Injectable } from '@angular/core';
import { Observable, throwError, from } from '../../node_modules/rxjs';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {ve

  constructor(private http:HttpClient) { 
   
  }
  getProducts():Observable<Product[]> {
 return this.http.get<Product[]>('../assets/data/product1.json').pipe(catchError(this.errorHandler));
//return this.http.get<Product[]>('http://localhost:8181/products');
  }
  addProduct(product:Product):Observable<Product> {
    return this.http.post<Product>('http://localhost:8181/products/add',product).pipe(catchError(this.errorHandler));
  }
 errorHandler(error:HttpErrorResponse){
   return throwError(error.message ||'Server Error')
 }
}
