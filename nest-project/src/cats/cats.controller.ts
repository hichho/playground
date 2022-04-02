import { Body, Controller, Get, HttpCode, Param, Post, Redirect } from "@nestjs/common"
import { CreateCatDto } from "./dtos/create-cat.dto"
import { Cat } from "./interfaces/cat.interface"
import { CatsService } from "./cats.service"

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get("getCat")
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Post("postCat")
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get("g*t")
  findCat(): string {
    return "get single cat"
  }

  @Get("testCode")
  @HttpCode(203)
  testCode(): string {
    return "this is code"
  }

  @Get("redirect")
  @Redirect("https://docs.nestjs.com", 302)
  redirect(): string {
    return "redirect"
  }

  @Get(":id")
  findOne(@Param() params): string {
    console.log(params)
    return `this cats is ${params?.id} cat`
  }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return "add a new cat"
  // }
}


