import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/filter')
  getProductFilter() {
    return 'soy un filter';
  }

  @Get('/:productId')
  getOne(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `limit ${limit} offset ${offset} brand: ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion para crear',
      payload,
    };
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Actualizando item ${id}`,
      payload,
    };
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return {
      message: `item ${id} eliminado`,
    };
  }
}
