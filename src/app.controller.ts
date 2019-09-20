import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('Index')
  public index() {}

  @Get('/about')
  @Render('About')
  public about() {}
}
