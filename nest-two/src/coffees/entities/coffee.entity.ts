import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//typeorm默认使用class的小写名称设置数据库的table，可以往decorate里传入字符串以命名表名
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true })
  flavors: string[];
}
