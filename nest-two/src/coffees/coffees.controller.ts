import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/flavors')
  findAll(@Query() paginationQuery, @Res() response) {
    const { limit, offset } = paginationQuery;
    response
      .status(200)
      .send(
        `this action returns all coffees.limit:${limit} , offset:${offset}`,
      );
  }

  @Get(':id')
  // findOne(@Param() params) {
  //   return `this action returns #${params.id} coffee`;
  // }
  findOne(@Param('id') id: string) {
    return `this action returns #${id} coffee`;
  }

  @Post('create')
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action update #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action remove #${id} coffee`;
  }
}
