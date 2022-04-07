import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  Req,
} from '@nestjs/common';

import { Response, Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/filter')
  getProductFilter() {
    return 'soy un filter';
  }

  @Get('/:productId')
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).json({
      message: `product ${productId}`,
    });
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
  @HttpCode(HttpStatus.CREATED)
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
