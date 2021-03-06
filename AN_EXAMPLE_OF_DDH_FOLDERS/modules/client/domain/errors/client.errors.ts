export class ClientDataAreNotValid extends Error{
    static readonly message = "Data are not valid";
    public readonly code = "CLIENT_DATA_INVALID";

    constructor(){
        super( ClientDataAreNotValid.message );
    }
}


export class ClientDoesNotExist extends Error{
    static readonly message = "Data are not valid";
    public readonly code = "CLIENT_DATA_INVALID";

    constructor(){
        super( ClientDataAreNotValid.message );
    }
}

export class ClientRequestIsNotValid extends Error{
    static readonly message = "client request is not valid ";
    public readonly code = "CLIENT_REQUEST_NOT_VALID";

    constructor(){
        super( ClientRequestIsNotValid.message );
    }
}