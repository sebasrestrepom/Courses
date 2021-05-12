import { Controller, Get , Param, Query} from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Course NestJs';
  }
  @Get('prueba')
  newEndpoint(){
    return 'Prueba';
  }
 
 

 

}
