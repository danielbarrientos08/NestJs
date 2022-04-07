import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  get(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `limit ${limit} offset ${offset}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion para crear',
      payload,
    };
  }
}
