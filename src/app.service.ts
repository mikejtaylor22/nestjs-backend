import { Injectable } from '@nestjs/common';

//services is where you do heavy lifting
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
