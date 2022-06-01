import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type ClientOrmEntityAttributes = {
  id:string;
  firstName:string;
  phoneNumber:string;
  postalCode:string;
  street:string;
  streetNumber:string
}

@Entity('client')
export class ClientOrmEntity{

  constructor(props?:unknown){
    if(props){
      Object.assign(this,props);
    }
  }
  
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  firstName: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  postalCode: string;

  @Column()
  street: string;

  @Column()
  streetNumber: string;

}

