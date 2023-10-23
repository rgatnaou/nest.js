import { Injectable } from '@nestjs/common';


//logic
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
