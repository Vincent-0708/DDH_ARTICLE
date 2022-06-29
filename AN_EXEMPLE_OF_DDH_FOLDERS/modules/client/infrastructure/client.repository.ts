import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClientPort } from "../domain/client.port";
import { ClientEntity } from "../domain/entities/client.entity";
import { ClientOrmEntityClientEntityMapper } from "./client.mapper";
import { ClientOrmEntity } from "./client.orm-entity";


@Injectable()
export class ClientRepository implements ClientPort{
    constructor(
        @InjectRepository( ClientOrmEntity )
        private readonly clientRepository: Repository<ClientOrmEntity>,
    ){}

    public async getClientInformationById( clientId: string ): 
    Promise<ClientEntity> {
        const clientOrmEntity = 
        await this.clientRepository.findOne( { where: { id: clientId }, relations: [ "fidelityAccount" ], } );

        if ( !clientOrmEntity ){
            throw new NotFoundException(
                `client with id ${clientId} does not exist in database` );
        }
        const clientMapper = new ClientOrmEntityClientEntityMapper();
        return clientMapper.toEntity( clientOrmEntity );
    }


}