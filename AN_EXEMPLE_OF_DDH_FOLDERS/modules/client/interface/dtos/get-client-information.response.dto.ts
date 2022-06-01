import { ClientEntity } from "../../domain/entities/client.entity"

export class GetClientInformationResponseDto{
    public phoneNumber:string
    public address:string
    public firstName:string

    constructor(clientEntity:ClientEntity){
        const clientEntityValues = clientEntity.getValues()
        this.address =this.getAddressFromClientEntityAddress(clientEntityValues.address)
        this.firstName = clientEntityValues.phoneNumber
        this.phoneNumber = clientEntityValues.phoneNumber
    }

    private getAddressFromClientEntityAddress(address:ClientEntity["address"]):string{
        const postalCode = address.postalCode
        const street = address.street
        const streetNumber = address.streetNumber
        return `${streetNumber} ${street} - ${postalCode}`
    }
}

