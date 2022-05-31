import { Injectable } from "@nestjs/common";
import { ClientEntity } from "../domain/entities/client.entity";
import { Address } from "../domain/value-objects/address.value-object";

@Injectable()
export class GetClientInformationPresenter {
    public getClientAddress(_clientId:ClientEntity["id"]): Address{
        //logic to call query needed to get this information
        return new Address
    }

    public getClientPhoneNumberAsString(_clientId:ClientEntity["id"]) : string{
        //logic to call query needed to get this information and to give it back
        //as a string thanks to dto mapping
        return("phoneNumber)");
    }
}