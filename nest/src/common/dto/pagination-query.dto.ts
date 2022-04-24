import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  //request使用string传输字符,故将其装成Number型
  //显示的将值转换为数字
  // @Type(() => Number)
  @IsOptional() //是否是可选的
  @IsPositive() //是否是正数
  limit: number;
  // @Type(() => Number)
  @IsOptional() //是否是可选的
  @IsPositive() //是否是正数
  offset: number;
}
