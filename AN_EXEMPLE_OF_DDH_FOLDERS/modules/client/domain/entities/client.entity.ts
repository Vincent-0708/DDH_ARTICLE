import { Injectable } from "@nestjs/common";
import Result from "../../../../libs/result/result";
import { generateId } from "../../../../libs/utils/generate-random-string-id";
import { ClientDataAreNotValid } from "../../errors/client.errors";
import { Address } from "../value-objects/address.value-object";
import { PhoneNumber } from "../value-objects/phone-number.value-object";

type getValuesReturnType = {
    id:string;
    firstName:string;
    phoneNumber:string;
    address: {postalCode:string, street:string, streetNumber:string }
}

export type ClientEntityAttributes = {
    id: string
    firstName : string;
    phoneNumber : PhoneNumber;
    address : Address; 
}

@Injectable()
export class ClientEntity {
    protected id : ClientEntityAttributes["id"];
    protected firstName : ClientEntityAttributes["firstName"];
    protected phoneNumber: ClientEntityAttributes["phoneNumber"];
    protected address : ClientEntityAttributes["address"];

    private constructor(client:ClientEntityAttributes){
        this.id = client.id;
        this.firstName = client.firstName;
        this.phoneNumber = client.phoneNumber;
        this.address = client.address;
    }

    public static createClient(clientProps:Omit<ClientEntityAttributes,"id">): 
    Result<ClientEntity, ClientDataAreNotValid> 
    {
        if (!ClientEntity.validate(clientProps)){
            return Result.err(new ClientDataAreNotValid());
        } else {
            const id = generateId()
            return Result.ok(new ClientEntity( {id, ...clientProps} ));
        }
    }

    public static generateAlreadyExistingClient(clientProps:ClientEntityAttributes): ClientEntity{
        return new ClientEntity( {...clientProps} );
    }

    protected static validate(clientProps:Partial<ClientEntityAttributes>):boolean{
        //validation rules to respect domain invariants 
        return(!!clientProps);
    }

    public getValues() : getValuesReturnType {
        const id = this.id.toString();
        const firstName = this.firstName.toString();
        const phoneNumber = this.phoneNumber.toString();
        const address = {
            postalCode:this.address.postalCode.toString(),
            street : this.address.street.toString(),
            streetNumber:this.address.streetNumber.toString()
        }
        return {id, firstName, phoneNumber, address}
    }

    public addFidelityPoint():void {
        //logic to add a fidelity point to a client
    }

}

