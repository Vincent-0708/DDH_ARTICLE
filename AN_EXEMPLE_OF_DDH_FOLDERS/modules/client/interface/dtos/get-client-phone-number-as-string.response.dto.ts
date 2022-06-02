import { ClientEntity } from "../../domain/entities/client.entity"

export class GetClientPhoneNumberAsStringResponseDto{
    public phoneNumber:string

    constructor(clientEntity:ClientEntity){
        const clientEntityValues = clientEntity.getValues()
        this.phoneNumber = clientEntityValues.phoneNumber
    }
    
}