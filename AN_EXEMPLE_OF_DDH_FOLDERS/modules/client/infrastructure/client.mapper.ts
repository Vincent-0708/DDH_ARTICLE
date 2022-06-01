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
        const clientAttributes = clientEntity.getValues();
        const clientOrmEntityProps = {
            id:clientAttributes.id,
            phoneNumber: clientAttributes.phoneNumber,
            firstName:clientAttributes.firstName,
            postalCode:clientAttributes.address.postalCode,
            street:clientAttributes.address.street,
            streetNumber:clientAttributes.address.streetNumber
        };
        return(new ClientOrmEntity(clientOrmEntityProps)); 
    }

}

