import {Controller, Get, HttpCode, Post, Req, Header} from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }


    @Get('getCat')
    findAll(@Req() request: Request): string {
        return 'this action returns all cats';
    }
}
