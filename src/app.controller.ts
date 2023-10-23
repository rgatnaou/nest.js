import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


// find the routes
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
