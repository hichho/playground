import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect } from "@nestjs/common"
import { CreateCatDto } from "./create-cat.dto"

@Controller("cats")
export class CatsController {
  @Get("getCat")
  findAll(@Query() query: any): string {
    return "this is all cats"
  }

  @Post("postCat")
  postCat(): string {
    return "post success"
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

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return "add a new cat"
  }
}


