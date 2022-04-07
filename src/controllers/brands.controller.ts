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

@Controller('brands')
export class BrandsController {
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
