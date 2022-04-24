import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

/**
 * 验证部分的属性 partial
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
