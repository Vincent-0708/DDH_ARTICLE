export class ClientAddressNotUnderstood extends Error{
    static readonly message = "The delivery guy was not able to understood the address";
    public readonly code = "CLIENT_ADDRESS_NOT_UNDERSTOOD"

    constructor(){
        super(ClientAddressNotUnderstood.message);
    }
}

export class DeliveryGuyLost extends Error{
    static readonly message = "The delivery guy is lost";
    public readonly code = "DELIVERY_GUY_LOST"

    constructor(){
        super(DeliveryGuyLost.message);
    }
} 