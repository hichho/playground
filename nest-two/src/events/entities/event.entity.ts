import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  name: string;
  @Column('json')
  payload: Record<string, any>;
}
