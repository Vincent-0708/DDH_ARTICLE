import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { isDataFromUserClean } from "../../../libs/utils/is-data-from-user-clean";
import { ClientPort } from "./client.port";
import { ClientEntity } from "./entities/client.entity";
import { GetClientInformationByIdQuery, GetClientInformationByIdQueryResult } from "./get-client-information-by-id.query";

@QueryHandler(GetClientInformationByIdQuery)
export class GetClientInformationByIdQueryHandler implements IQueryHandler<
GetClientInformationByIdQuery,
GetClientInformationByIdQueryResult
>{
    constructor(
        @Inject(ClientEntity)
        private readonly ClientEntityPort:Pick<ClientPort,"getClientInformationById">
    ){}

    public async execute(query: GetClientInformationByIdQuery): Promise<GetClientInformationByIdQueryResult> {
        const {clientId} = query.payload
        if(isDataFromUserClean(clientId)){
            const clientEntity = await this.ClientEntityPort.getClientInformationById(clientId)
            return {clientInformation:clientEntity};
        }
        return({clientInformation:null});
        
    }
}