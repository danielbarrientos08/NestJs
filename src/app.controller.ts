import { Controller, Get, Param } from '@nestjs/common';
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
}
