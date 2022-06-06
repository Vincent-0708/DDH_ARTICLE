import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ClientEntity } from "../domain/entities/client.entity";
import { GetClientInformationByIdQuery, GetClientInformationByIdQueryResult } 
    from "../domain/get-client-information-by-id.query";
import { Address } from "../domain/value-objects/address.value-object";
import { GetClientPhoneNumberAsStringResponseDto } 
    from "./dtos/get-client-phone-number-as-string.response.dto";

@Injectable()
export class GetClientInformationPresenter {
    constructor( private queryBus:QueryBus ){}

    public async getClientAddress( clientId:ClientEntity["id"] ): Promise<Address>{

        const { clientInformation: clientInformationResult } = 
        await this.queryBus.execute<
      GetClientInformationByIdQuery,
      GetClientInformationByIdQueryResult>( { payload: { clientId } } );

        if ( clientInformationResult.isErr() ){
            throw new Error(
                "client get in getClientAddress with id :${clientId} does not exist" );
        }

        const clientEntity = clientInformationResult.getValue(); 
        const clientAddressInformation = clientEntity.getAddress();
        return new Address(
            clientAddressInformation.postalCode,
            clientAddressInformation.street,
            clientAddressInformation.streetNumber
        );
        
    }

    public async getClientPhoneNumberAsString( 
        clientId:ClientEntity["id"] ) : Promise<string> 
    {
        const { clientInformation: clientInformationResult } = 
        await this.queryBus.execute<
        GetClientInformationByIdQuery,
        GetClientInformationByIdQueryResult>( { payload: { clientId } } );

        if ( clientInformationResult.isErr() ){
            throw new Error( 
                "client get in getClientPhoneNumberAsString with id :${clientId} does not exist" );
        }
        const phoneNumberResponseDto = 
        new GetClientPhoneNumberAsStringResponseDto( clientInformationResult.getValue() );

        return phoneNumberResponseDto.phoneNumber; 
          
    }
}