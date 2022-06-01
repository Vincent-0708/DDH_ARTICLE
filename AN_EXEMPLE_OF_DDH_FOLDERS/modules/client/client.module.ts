import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GetClientInformationByIdQuery } from "./domain/get-client-information-by-id.query";
import { ClientRepository } from "./infrastructure/client.repository";
import { GetClientInformationPresenter } from "./interface/get-client-information.presenter";

const QueryHandlers = [GetClientInformationByIdQuery];

const ClientPresenters = [GetClientInformationPresenter];

@Module({
  imports: [
    TypeOrmModule.forFeature([
        ClientRepository
    ]),
  ],
  providers: [
    ...QueryHandlers,
  ],
  exports: [
    ...ClientPresenters
  ],
})
export class ClientModule {}