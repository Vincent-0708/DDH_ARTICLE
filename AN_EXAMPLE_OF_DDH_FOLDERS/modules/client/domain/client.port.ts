import { ClientEntity } from "./entities/client.entity";

export interface ClientPort {
    getClientInformationById( clientId:ClientEntity["id"] ):Promise<ClientEntity>
}