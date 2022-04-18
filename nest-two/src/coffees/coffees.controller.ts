import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/flavors')
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  // findOne(@Param() params) {
  //   return `this action returns #${params.id} coffee`;
  // }
  findOne(@Param('id') id: string) {
    return `this action returns #${id} coffee`;
  }

  @Post('create')
  create(@Body() body) {
    return body;
  }
}
