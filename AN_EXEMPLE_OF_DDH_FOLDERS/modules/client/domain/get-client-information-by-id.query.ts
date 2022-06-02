import { IQuery, IQueryResult } from "@nestjs/cqrs";
import { ClientEntity } from "./entities/client.entity";

export class GetClientInformationByIdQuery implements IQuery{
    constructor(public readonly payload : {clientId:ClientEntity["id"]}){}
}

export class GetClientInformationByIdQueryResult implements IQueryResult{
    constructor(public readonly clientInformation:ClientEntity | null){}
}