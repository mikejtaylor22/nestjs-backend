import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

//controller handles requests
//by default this reaches your-domain.com/
//if you put 'products' in the controller you can hit from domain/products
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('content-type', 'text/html')
  getHello(): {name: string} {
    return {name: 'Mike'};
  }
}
