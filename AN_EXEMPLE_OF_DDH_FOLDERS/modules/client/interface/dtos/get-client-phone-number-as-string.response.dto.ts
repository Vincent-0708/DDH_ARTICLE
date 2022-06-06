import { ClientEntity } from "../../domain/entities/client.entity";

export class GetClientPhoneNumberAsStringResponseDto{
    public phoneNumber:string;

    constructor( clientEntity:ClientEntity ){
        this.phoneNumber = clientEntity.getPhoneNumber();
    }
    
}