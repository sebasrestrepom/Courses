import {
   Controller,
   Get,
   Query,
   Param,
   Post,
    Body,
     Put,
     Delete,
     HttpStatus,
     HttpCode,
     //ParseIntPipe,
     } from '@nestjs/common';

import {Response} from 'express';
import {ProductsService} from './../services/products.service';
import {ParseIntPipe} from '../common/parse-int.pipe'
import {CreateProductDto,UpdateProductDto } from './../dtos/products.dtos'

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService){

  }
  @Get()
  getProducts(@Query('limit') limit = 100,@Query('offset') offset = 0,@Query('brand')brand:"hola"){

    return {
     message: `Products: limit=> ${limit},
     offset => ${offset},
     brand=>${brand}`,
    };


 }
  @Get('filter')
  getFilter(){
     return {
       message:`yo soy un filter`,
     }
   }

  @Get(':productId')
 getProductos(@Param('productId', ParseIntPipe) productId:number){

  return this.productService.findOne(productId);
  }

  @Post()
  create(@Body()payload:CreateProductDto){
   /* return{
      message:'accion de crear',
      payload,

    };*/
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id')id:number,@Body()payload:UpdateProductDto){
   return this.productService.update(id,payload);
  }
@Delete(':id')
delete(@Param('id')id:number){
  return id;

}

}
