import {
  JoinTable,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';

//typeorm默认使用class的小写名称设置数据库的table，可以往decorate里传入字符串以命名表名
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  //主表
  @JoinTable()
  //cascade:在创建咖啡时，如果flavors还没有，则自动创建flavors，并将他们关联
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  //cascade:boolean or other string
  flavors: Flavor[];
}
