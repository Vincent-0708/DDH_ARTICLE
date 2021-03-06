import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FidelityAccountEntity } from "../domain/entities/fidelity-account.entity";

export type ClientOrmEntityAttributes = {
  id:string;
  firstName:string;
  phoneNumber:string;
  postalCode:string;
  street:string;
  streetNumber:string
  fidelityAccountId:string;
  fidelityAccount:FidelityAccountEntity;
}

@Entity( "client" )
export class ClientOrmEntity{

    constructor( props?:unknown ){
        if ( props ){
            Object.assign( this, props );
        }
    }
  
  @PrimaryGeneratedColumn()
      id: string;

  @Column()
      firstName: string;

  @Column( { unique: true } )
      phoneNumber: string;

  @Column()
      postalCode: string;

  @Column()
      street: string;

  @Column()
      streetNumber: string;

  @Index()
  @Column()
      fidelityAccountId:FidelityAccountEntity["id"];

  @ManyToOne( () => FidelityAccountEntity )
      fidelityAccount: FidelityAccountEntity;

}

