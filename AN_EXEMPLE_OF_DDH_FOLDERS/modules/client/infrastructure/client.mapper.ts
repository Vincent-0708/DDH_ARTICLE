import { ClientEntity } from "../domain/entities/client.entity";
import { ClientOrmEntity } from "./client.orm-entity";

export class ClientOrmEntityClientEntityMapper {
    public toEntity(clientOrmEntity:ClientOrmEntity):ClientEntity{
        const address = { 
            postalCode:clientOrmEntity.postalCode,
            street:clientOrmEntity.street,
            streetNumber:clientOrmEntity.streetNumber
        };
    
        const clientEntityProps  = {
            id:clientOrmEntity.id,
            firstName:clientOrmEntity.firstName,
            phoneNumber:clientOrmEntity.phoneNumber,
            address, 
        };
        return ClientEntity.generateAlreadyExistingClient(clientEntityProps)
    }

    public toOrmEntity(clientEntity:ClientEntity):ClientOrmEntity{
        const clientAddress = clientEntity.getAddress()
        const clientOrmEntityProps = {
            id:clientEntity.getId(),
            phoneNumber: clientEntity.getPhoneNumber(),
            firstName:clientEntity.getFirstName(),
            postalCode:clientAddress.postalCode,
            street: clientAddress.street,
            streetNumber:clientAddress.streetNumber
        };
        return(new ClientOrmEntity(clientOrmEntityProps)); 
    }

}

