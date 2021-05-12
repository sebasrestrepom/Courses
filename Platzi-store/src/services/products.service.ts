import { Injectable } from '@nestjs/common';
import { INSTANCE_METADATA_SYMBOL } from '@nestjs/core/injector/instance-wrapper';

import {Product} from './../entities/product.entity';
import {CreateProductDto, UpdateProductDto} from './../dtos/products.dtos';
@Injectable()
export class ProductsService {
  private counterId =1;
private products: Product[] = [
  {
    id:1,
    name:'product1',
    description: 'bla bla bla',
    price: 1200,
    stock:30,
    image:'',
  },
];
findAll(){
  return this.products;
}
findOne(id:number){
  return this.products.find((item)=>item.id === id);
}
create(payload:CreateProductDto){
  this.counterId = this.counterId +1;
const newProduct={
  id:this.counterId,
  ...payload,
};
this.products.push(newProduct);
return newProduct;
}
update(id:number,payload:UpdateProductDto){
const product = this.findOne(id);
if(product){
const index = this.products.findIndex((item)=>item.id ===id);
this.products[index] = payload;
return this.products[index];
}return null;
}
}
