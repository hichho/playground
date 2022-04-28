import { Column, Index, PrimaryColumn, Entity } from 'typeorm';
//使用多列搜索
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryColumn()
  id: number;
  @Column()
  type: string;
  //加快搜索速度
  @Index()
  @Column()
  name: string;
  @Column('json')
  payload: Record<string, any>;
}
