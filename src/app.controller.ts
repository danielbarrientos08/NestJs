import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo!!';
  }

  @Get('nuevo')
  newEndPoint(): string {
    return 'yo soy';
  }

  @Get('/ruta/')
  hello(): string {
    return ' con /sas/';
  }

  @Get('products/filter')
  getProductFilter() {
    return 'soy un filter';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `limit ${limit} offset ${offset} brand: ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} category ${id}`;
  }
}
