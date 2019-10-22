import { Product } from './product';

export class ProductData {
    productList : Product[]=[{
        productId:1001,
        name:"mobile",
        brand:"samsung",
        price:7890
    },{
        productId:1002,
        name:"mobile",
        brand:"samsung",
        price:78909
    },{
        productId:1003,
        name:"mobile",
        brand:"MI",
        price:78907
    }];
    getProductList():Product[]{
        return this.productList;
    }
}
