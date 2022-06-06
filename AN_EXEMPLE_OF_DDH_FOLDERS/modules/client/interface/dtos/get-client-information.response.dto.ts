import { ClientEntity } from "../../domain/entities/client.entity"

export class GetClientInformationResponseDto{
    public phoneNumber:string
    public address:string
    public firstName:string

    constructor(clientEntity:ClientEntity){
        const clientAddress = clientEntity.getAddress()
        this.address =this.getAddressFromClientEntityAddress(clientAddress);
        this.firstName = clientEntity.getFirstName();
        this.phoneNumber = clientEntity.getPhoneNumber();
    }

    private getAddressFromClientEntityAddress(address:ClientEntity["address"]):string{
        const postalCode = address.postalCode
        const street = address.street
        const streetNumber = address.streetNumber
        return `${streetNumber} ${street} - ${postalCode}`
    }
}

